"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAccountContext } from "../../../account/AccountContext";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { inputClass, primaryButton, secondaryButton } from "../../../UI";
import * as client from "../../assignmentsClient";
import { errorMessage } from "../../../http";
export default function AssignmentsClient({ cid }: { cid: string }) {
  const { currentUser } = useAccountContext();
  const canEdit = !currentUser || currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  const rows = useAssignmentsStore(state => state.assignments).filter(a => a.course === cid);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const setAssignments = useAssignmentsStore(state => state.setAssignments);
  useEffect(() => {
    let active = true;
    client.findAssignmentsForCourse(cid).then(rows => { if (active) { setAssignments(rows); setError(""); } })
      .catch(error => { if (active) setError(errorMessage(error)); })
      .finally(() => { if (active) setPending(false); });
    return () => { active = false; };
  }, [cid, attempt, setAssignments]);
  const [search, setSearch] = useState("");
  const [addingGroup, setAddingGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState<string[]>([]);
  const newHref = "/courses/" + cid + "/assignments/new";
  return <div id="wd-assignments">
    {pending && <p role="status">Loading assignments...</p>}
    {error && <p role="alert" className="text-red-600">{error} <button type="button" onClick={() => { setPending(true); setAttempt(value => value + 1); }}>Retry</button></p>}
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
      <div className="relative w-full sm:w-auto"><FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" aria-hidden="true" />
        <input id="wd-search-assignment" placeholder="Search for Assignments" aria-label="Search for Assignments" value={search} onChange={e => setSearch(e.target.value)} className={inputClass + " pl-9 text-sm"} />
      </div>
      {canEdit && <div className="flex gap-2"><button id="wd-add-assignment-group" type="button" className={secondaryButton} onClick={() => setAddingGroup(!addingGroup)}><FaPlus aria-hidden="true" />Group</button><Link id="wd-add-assignment" href={newHref} className={primaryButton}><FaPlus aria-hidden="true" />Assignment</Link></div>}
    </div>
    {addingGroup && <form className="mb-4 flex flex-wrap gap-2" onSubmit={e => { e.preventDefault(); setGroups([...groups, groupName]); setGroupName(""); setAddingGroup(false); }}>
      <label htmlFor="wd-new-assignment-group" className="sr-only">Group name</label><input id="wd-new-assignment-group" required value={groupName} onChange={e => setGroupName(e.target.value)} className={inputClass + " flex-1"} placeholder="Group name" /><button className={secondaryButton}>Add group</button>
    </form>}
    <h3 id="wd-assignments-title" className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded bg-neutral-200 p-3 text-lg font-semibold"><span>ASSIGNMENTS <span className="text-sm font-normal">40% of Total</span></span>{canEdit && <Link href={newHref} aria-label="Add assignment to group" className={secondaryButton}><FaPlus aria-hidden="true" /></Link>}</h3>
    <ul id="wd-assignment-list" className="m-0 list-none p-0">{rows.filter(a => a.title.toLowerCase().includes(search.toLowerCase())).map(a => <AssignmentItem key={a._id} cid={cid} aid={a._id} title={a.title} details={`Multiple Modules | Not available until ${a.available} | Due ${a.due} | ${a.points} pts`} />)}</ul>
    {!pending && !error && rows.every(a => !a.title.toLowerCase().includes(search.toLowerCase())) && <p role="status">No matching assignments.</p>}
    {groups.map((group, i) => <section key={i} className="mt-5 rounded border border-neutral-300"><h3 className="m-0 bg-neutral-200 p-3 text-lg font-semibold">{group}</h3><p className="p-3 text-sm">New assignment group. <Link href={newHref} className="text-red-600">Create an assignment</Link></p></section>)}
  </div>;
}
