"use client";
import { useState } from "react";
import * as client from "../../client";
import { errorMessage } from "../../../http";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons({ moduleId }: { moduleId: string }) {
  const { cid } = useParams<{ cid: string }>();
  const { editModule, deleteModule } = useModulesStore();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const remove = async () => {
    setError(""); setPending(true);
    try { await client.deleteModule(moduleId); deleteModule(moduleId, cid); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  return <div className="flex shrink-0 items-center gap-2 text-base">
    <button type="button" aria-label="Edit module" className="border-0 bg-transparent p-0 text-blue-600" onClick={() => editModule(moduleId, cid)}><FaPencilAlt /></button>
    <button type="button" aria-label="Delete module" className="border-0 bg-transparent p-0 text-red-600" disabled={pending} onClick={remove}><FaTrash /></button>
    {error && <span role="alert" className="text-sm text-red-600">{error}</span>}
    <GreenCheckmark />
  </div>;
}
