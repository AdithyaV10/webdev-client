"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Field, inputClass, secondaryButton, primaryButton } from "../../../../UI";
import { parseAssignments, saveAssignments, useAssignmentsSnapshot } from "../store";
export default function Editor({ cid, aid }: { cid: string; aid: string }) {
  const router = useRouter();
  const snapshot = useAssignmentsSnapshot(cid);
  const rows = parseAssignments(snapshot);
  const assignment = rows.find(a => a.aid === aid);
  const saved = assignment?.fields ?? {};
  const [error, setError] = useState("");
  const list = "/courses/" + cid + "/assignments";
  const value = (id: string, fallback: string) => saved[id] ?? fallback;
  return <div id="wd-assignments-editor" className="mx-auto max-w-3xl">
    <h2 className="mb-6 text-2xl font-semibold">Assignment Editor</h2>
    <form key={snapshot} onSubmit={e => {
      e.preventDefault();
      const fields = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
      let nextId = rows.length + 1;
      while (rows.some(row => row.aid === "local-" + nextId)) nextId++;
      const item = { aid: aid === "new" ? "local-" + nextId : aid, title: fields["wd-name"], details: "Multiple Modules | Not available until " + fields["wd-available-from"] + " | Due " + fields["wd-due-date"] + " | " + fields["wd-points"] + " pts", fields };
      try { saveAssignments(cid, rows.some(a => a.aid === item.aid) ? rows.map(a => a.aid === item.aid ? item : a) : [...rows, item]); router.push(list); } catch { setError("Unable to save in this browser. Please allow local storage and try again."); }
    }}>
      <Field id="wd-name" label="Assignment Name"><input id="wd-name" name="wd-name" required defaultValue={aid === "new" ? "" : value("wd-name", assignment?.title ?? "")} className={inputClass} /></Field>
      <Field id="wd-description" label="Description"><textarea id="wd-description" name="wd-description" rows={6} defaultValue={value("wd-description", "The assignment is available online. Submit a link to the landing page of your Web application running on Vercel.")} className={inputClass} /></Field>
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        <Field id="wd-points" label="Points"><input id="wd-points" name="wd-points" type="number" min="0" required defaultValue={value("wd-points", "100")} className={inputClass} /></Field>
        <Field id="wd-group" label="Assignment Group"><select id="wd-group" name="wd-group" defaultValue={value("wd-group", "ASSIGNMENTS")} className={inputClass}>{["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"].map(s => <option key={s}>{s}</option>)}</select></Field>
        <Field id="wd-display-grade-as" label="Display Grade as"><select id="wd-display-grade-as" name="wd-display-grade-as" defaultValue={value("wd-display-grade-as", "POINTS")} className={inputClass}><option value="POINTS">Points</option><option value="PERCENTAGE">Percentage</option><option value="LETTER">Letter Grade</option><option value="COMPLETE">Complete/Incomplete</option></select></Field>
        <Field id="wd-submission-type" label="Submission Type"><select id="wd-submission-type" name="wd-submission-type" defaultValue={value("wd-submission-type", "ONLINE")} className={inputClass}><option value="ONLINE">Online</option><option value="PAPER">On Paper</option><option value="NONE">No Submission</option></select></Field>
      </div>
      <fieldset className="mb-6 rounded border border-neutral-300 p-4"><legend className="px-1 font-medium">Online Entry Options</legend>
        {[["wd-text-entry", "Text Entry"], ["wd-website-url", "Website URL"], ["wd-media-recordings", "Media Recordings"], ["wd-student-annotation", "Student Annotation"], ["wd-file-upload", "File Uploads"]].map(([id, label], i) => <label key={id} htmlFor={id} className="mb-2 flex items-center gap-2"><input id={id} name={id} type="checkbox" defaultChecked={Object.keys(saved).length ? saved[id] === "on" : i < 2} />{label}</label>)}
      </fieldset>
      <fieldset className="mb-6 rounded border border-neutral-300 p-4"><legend className="px-1 text-lg font-semibold">Assign</legend>
        <Field id="wd-assign-to" label="Assign to"><input id="wd-assign-to" name="wd-assign-to" defaultValue={value("wd-assign-to", "Everyone")} className={inputClass} /></Field>
        <Field id="wd-due-date" label="Due"><input id="wd-due-date" name="wd-due-date" type="date" defaultValue={value("wd-due-date", "2026-09-27")} className={inputClass} /></Field>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2"><Field id="wd-available-from" label="Available from"><input id="wd-available-from" name="wd-available-from" type="date" defaultValue={value("wd-available-from", "2026-09-09")} className={inputClass} /></Field><Field id="wd-available-until" label="Until"><input id="wd-available-until" name="wd-available-until" type="date" defaultValue={value("wd-available-until", "2026-09-27")} className={inputClass} /></Field></div>
      </fieldset>
      <Field id="wd-ai-editor-notes" label="Sample notes (AI)"><textarea id="wd-ai-editor-notes" name="wd-ai-editor-notes" rows={3} defaultValue={value("wd-ai-editor-notes", "")} className={inputClass} /></Field>
      {error && <p role="alert" className="text-red-600">{error}</p>}
      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4"><Link href={list} id="wd-cancel" className={secondaryButton}>Cancel</Link><button id="wd-save" type="submit" className={primaryButton}>Save</button></div>
    </form>
  </div>;
}
