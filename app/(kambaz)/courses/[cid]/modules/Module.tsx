"use client";
import { useState, type ReactNode } from "react";
import { FaChevronDown, FaChevronRight, FaGripVertical } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { useModuleState } from "./ModuleState";
export default function Module({ title, children }: { title: string; children?: ReactNode }) {
  const { collapsed, setCollapsed, expansion } = useModuleState();
  const [local, setLocal] = useState({ open: true, expansion });
  const expanded = !collapsed && (local.expansion !== expansion || local.open);
  return <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
    <div className="wd-title flex items-center justify-between gap-2 bg-neutral-200 p-3 ps-2">
      <button type="button" aria-expanded={expanded} onClick={() => { setLocal({ open: !expanded, expansion }); if (collapsed) setCollapsed(false); }} className="flex min-w-0 items-center gap-2 border-0 bg-transparent text-left text-base font-semibold">
        <FaGripVertical className="shrink-0 text-neutral-500" aria-hidden="true" />{expanded ? <FaChevronDown className="shrink-0" aria-hidden="true" /> : <FaChevronRight className="shrink-0" aria-hidden="true" />}<span>{title}</span>
      </button><GreenCheckmark />
    </div>
    <ul className="wd-lessons m-0 list-none p-0" hidden={!expanded}>{children}</ul>
  </li>;
}
