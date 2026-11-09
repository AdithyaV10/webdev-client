"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import ModuleEditor from "./ModuleEditor";
import { ModuleState } from "./ModuleState";
import { secondaryButton } from "../../../UI";
import Module from "./Module";


export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  return <CourseModules key={cid} cid={cid} />;
}

function CourseModules({ cid }: { cid: string }) {
  const courseModules = useModulesStore(state => state.modules).filter(module => module.course === cid);
  const [collapsed, setCollapsed] = useState(false);
  const [expansion, setExpansion] = useState(0);
  const [published, setPublished] = useState(true);
  const [progress, setProgress] = useState("");
  return (
    <ModuleState.Provider value={{ collapsed, setCollapsed, expansion, published }}>
    <div>
      <div id="wd-modules-controls" className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => { if (collapsed) setExpansion(expansion + 1); setCollapsed(!collapsed); }} className={secondaryButton}>{collapsed ? "Expand All" : "Collapse All"}</button>
        <button type="button" onClick={() => setProgress(document.querySelectorAll("#wd-modules .wd-lesson").length + " lessons; " + (published ? "all published" : "all unpublished"))} className={secondaryButton}>View Progress</button>
        <select aria-label="Module publication" value={published ? "publish-all" : "unpublish-all"} onChange={e => setPublished(e.target.value === "publish-all")} className={secondaryButton}>
          <option value="publish-all">Publish All</option><option value="unpublish-all">Unpublish All</option>
        </select>
        <ModuleEditor />
      </div>
      {progress && <p role="status" className="mb-3 text-sm text-neutral-600">{progress}</p>}
      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map(module => <Module key={module._id} module={module} />)}
      </ul>
    </div>
    </ModuleState.Provider>
  );
}
