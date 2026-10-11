"use client";
import { FaCheckCircle, FaCircle, FaMinusCircle } from "react-icons/fa";
import { useModuleState } from "./ModuleState";
export default function GreenCheckmark() {
  const { published } = useModuleState();
  return <span title={published ? "Published" : "Unpublished"} aria-label={published ? "Published" : "Unpublished"} className="relative me-1 inline-flex shrink-0">
    {published ? <FaCheckCircle className="absolute text-xl text-green-600" style={{ top: "2px" }} aria-hidden="true" /> : <FaMinusCircle className="absolute text-xl text-neutral-500" style={{ top: "2px" }} aria-hidden="true" />}
    <FaCircle className="text-base text-white" aria-hidden="true" />
  </span>;
}
