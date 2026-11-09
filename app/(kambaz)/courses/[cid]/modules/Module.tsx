"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaGripVertical } from "react-icons/fa";
import ModuleControlButtons from "./ModuleControlButtons";
import Lesson from "./Lesson";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import { useModuleState } from "./ModuleState";
export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore(state => state.updateModule);
  const { collapsed, setCollapsed, expansion } = useModuleState();
  const [local, setLocal] = useState({ open: true, expansion });
  const expanded = !collapsed && (local.expansion !== expansion || local.open);
  return <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
    <div className="wd-title flex items-center justify-between gap-2 bg-neutral-200 p-3 ps-2">
      <div className="flex min-w-0 flex-1 items-center gap-2"><button type="button" aria-expanded={expanded} onClick={() => { setLocal({ open: !expanded, expansion }); if (collapsed) setCollapsed(false); }} className="flex min-w-0 items-center gap-2 border-0 bg-transparent text-left text-base font-semibold">
        <FaGripVertical className="shrink-0 text-neutral-500" aria-hidden="true" />{expanded ? <FaChevronDown className="shrink-0" aria-hidden="true" /> : <FaChevronRight className="shrink-0" aria-hidden="true" />}{!module.editing && <span className="break-words">{module.name}</span>}
      </button>{module.editing && <input autoFocus aria-label="Module name" value={module.name} onChange={e => updateModule({ ...module, name: e.target.value })} onKeyDown={e => { if (e.key === "Enter") updateModule({ ...module, editing: false }); }} className="min-w-0 flex-1 rounded border border-neutral-300 bg-white px-2 py-1 text-base" />}</div><ModuleControlButtons moduleId={module._id} />
    </div>
    <ul className="wd-lessons m-0 list-none p-0" hidden={!expanded}>{module.lessons?.map(lesson => <Lesson key={lesson._id} title={lesson.name}><li className="wd-content-item">{lesson.description}</li></Lesson>)}</ul>
  </li>;
}
