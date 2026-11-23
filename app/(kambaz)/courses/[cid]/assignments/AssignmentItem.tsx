"use client";
import { useState } from "react";
import * as client from "../../assignmentsClient";
import { errorMessage } from "../../../http";
import Link from "next/link";
import { FaFileAlt, FaCheckCircle, FaGripVertical, FaTrash } from "react-icons/fa";
import { useAccountContext } from "../../../account/AccountContext";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
export default function AssignmentItem({ cid, aid, title, details }: { cid: string; aid: string; title: string; details: string }) {
  const { currentUser } = useAccountContext();
  const canEdit = !currentUser || currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  const deleteAssignment = useAssignmentsStore(state => state.deleteAssignment);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const remove = async () => {
    if (!window.confirm("Are you sure you want to delete this assignment?")) return;
    setError(""); setPending(true);
    try { await client.deleteAssignment(aid); deleteAssignment(aid, cid); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  return <li className="wd-assignment-list-item mb-3 flex items-start gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 p-3">
    <FaGripVertical className="mt-1 shrink-0 text-neutral-500" aria-hidden="true" /><FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" aria-hidden="true" />
    <div className="min-w-0 flex-1"><Link href={"/courses/" + cid + "/assignments/" + aid} className="wd-assignment-link break-words font-semibold text-neutral-900 no-underline hover:underline">{title}</Link><div className="mt-1 text-sm text-neutral-600">{details}</div></div>
    {error && <span role="alert" className="text-sm text-red-600">{error}</span>}
    <FaCheckCircle title="Published" className="mt-1 shrink-0 text-green-600" />
    {canEdit && <button type="button" aria-label={"Delete " + title} className="mt-1 shrink-0 border-0 bg-transparent p-0 text-red-600" disabled={pending} onClick={remove}><FaTrash /></button>}
  </li>;
}
