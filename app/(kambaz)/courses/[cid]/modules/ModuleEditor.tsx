"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import { inputClass, primaryButton, secondaryButton } from "../../../UI";
import * as client from "../../client";
import { errorMessage } from "../../../http";
export default function ModuleEditor() {
  const { cid } = useParams<{ cid: string }>();
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const addModule = useModulesStore(state => state.addModule);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const save = async () => {
    if (!moduleName.trim()) return;
    setError(""); setPending(true);
    try { addModule(await client.createModuleForCourse(cid, { name: moduleName.trim() })); close(); }
    catch (error) { setError(errorMessage(error)); }
    finally { setPending(false); }
  };
  const close = () => { setShow(false); setModuleName(""); };
  return <>
    <button type="button" id="wd-add-module-btn" className={primaryButton} onClick={() => setShow(true)}>+ Module</button>
    {show && <div id="wd-add-module-dialog" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onKeyDown={e => { if (e.key === "Escape") close(); }}>
      <form role="dialog" aria-modal="true" aria-labelledby="wd-add-module-title" className="w-full max-w-md rounded-lg bg-white shadow-lg" onSubmit={e => { e.preventDefault(); void save(); }}>
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3"><h3 id="wd-add-module-title" className="m-0 text-lg font-semibold">Add Module</h3><button type="button" onClick={close} aria-label="Close" className="border-0 bg-transparent text-2xl">×</button></div>
        <div className="px-4 py-3">{error && <p role="alert" className="text-red-600">{error}</p>}<label htmlFor="wd-add-module-name" className="sr-only">Module name</label><input autoFocus id="wd-add-module-name" placeholder="Module name" className={inputClass} value={moduleName} onChange={e => setModuleName(e.target.value)} /></div>
        <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3"><button type="button" id="wd-add-module-cancel" onClick={close} className={secondaryButton}>Cancel</button><button type="submit" disabled={pending} id="wd-add-module-submit" className={primaryButton}>Add Module</button></div>
      </form>
    </div>}
  </>;
}
