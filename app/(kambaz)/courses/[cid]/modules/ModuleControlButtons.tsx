"use client";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons({ moduleId }: { moduleId: string }) {
  const { cid } = useParams<{ cid: string }>();
  const { editModule, deleteModule } = useModulesStore();
  return <div className="flex shrink-0 items-center gap-2 text-base">
    <button type="button" aria-label="Edit module" className="border-0 bg-transparent p-0 text-blue-600" onClick={() => editModule(moduleId, cid)}><FaPencilAlt /></button>
    <button type="button" aria-label="Delete module" className="border-0 bg-transparent p-0 text-red-600" onClick={() => deleteModule(moduleId, cid)}><FaTrash /></button>
    <GreenCheckmark />
  </div>;
}
