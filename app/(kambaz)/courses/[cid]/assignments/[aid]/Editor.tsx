"use client";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState, type ChangeEvent } from "react";
import { Field, inputClass, secondaryButton, primaryButton } from "../../../../UI";
import { useAccountContext } from "../../../../account/AccountContext";
import { useAssignmentsStore } from "../../../../store/assignmentsStore";
import * as client from "../../../assignmentsClient";
import { errorMessage } from "../../../../http";
export default function Editor({ cid, aid }: { cid: string; aid: string }) {
  const { currentUser } = useAccountContext();
  const canEdit = !currentUser || currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
  const router = useRouter();
  const { assignments, setAssignments, addAssignment, updateAssignment } = useAssignmentsStore();
  const assignment = assignments.find(a => a._id === aid && a.course === cid);
  const [fields, setFields] = useState<Record<string, string>>(() => assignment ? {
    "wd-name": assignment.title, "wd-description": assignment.description, "wd-points": String(assignment.points),
    "wd-due-date": assignment.due, "wd-available-from": assignment.available, "wd-available-until": assignment.until,
    ...assignment.fields,
  } : {});
  const list = "/courses/" + cid + "/assignments";
  const value = (id: string, fallback: string) => fields[id] ?? fallback;
  const change = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = event.target;
    setFields(previous => ({ ...previous, [target.name]: target instanceof HTMLInputElement && target.type === "checkbox" ? (target.checked ? "on" : "") : target.value }));
  };
  const [pending, setPending] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    client.findAssignmentsForCourse(cid).then(rows => {
      if (!active) return;
      setAssignments(rows); setError("");
      const item = rows.find(a => a._id === aid);
      if (item) setFields({ "wd-name": item.title, "wd-description": item.description, "wd-points": String(item.points), "wd-due-date": item.due, "wd-available-from": item.available, "wd-available-until": item.until, ...item.fields });
    }).catch(error => { if (active) setError(errorMessage(error)); })
      .finally(() => { if (active) setPending(false); });
    return () => { active = false; };
  }, [cid, aid, attempt, setAssignments]);
  if (pending) return <p role="status">Loading assignment...</p>;
  if (aid !== "new" && !assignment && !error) notFound();
  return <div id="wd-assignments-editor" className="mx-auto max-w-3xl">
    <h2 className="mb-6 text-2xl font-semibold">Assignment Editor</h2>
    {error && <p role="alert" className="text-red-600">{error} <button type="button" onClick={() => { setPending(true); setAttempt(value => value + 1); }}>Retry</button></p>}
    <form onSubmit={async e => {
      e.preventDefault();
      if (!canEdit) return;
      const submitted = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
      for (const id of ["wd-text-entry", "wd-website-url", "wd-media-recordings", "wd-student-annotation", "wd-file-upload"]) submitted[id] ??= "";
      const item = {
        _id: aid, course: cid, title: submitted["wd-name"], description: submitted["wd-description"], points: Number(submitted["wd-points"]),
        due: submitted["wd-due-date"], available: submitted["wd-available-from"], until: submitted["wd-available-until"], fields: submitted,
      };
      setError(""); setSaving(true);
      try {
        if (aid === "new") addAssignment(await client.createAssignmentForCourse(cid, item));
        else updateAssignment(await client.updateAssignment(item));
        router.push(list);
      } catch (error) { setError(errorMessage(error)); }
      finally { setSaving(false); }
    }}>
      <fieldset disabled={!canEdit || saving} className="m-0 min-w-0 border-0 p-0">
      <Field id="wd-name" label="Assignment Name"><input id="wd-name" name="wd-name" required onChange={change} value={value("wd-name", assignment?.title ?? "")} className={inputClass} /></Field>
      <p className="mb-4 text-sm text-neutral-600">Assignment id: {aid}</p>
      <Field id="wd-description" label="Description"><textarea id="wd-description" name="wd-description" rows={6} onChange={change} value={value("wd-description", "The assignment is available online. Submit a link to the landing page of your Web application running on Vercel.")} className={inputClass} /></Field>
      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        <Field id="wd-points" label="Points"><input id="wd-points" name="wd-points" type="number" min="0" required onChange={change} value={value("wd-points", "100")} className={inputClass} /></Field>
        <Field id="wd-group" label="Assignment Group"><select id="wd-group" name="wd-group" onChange={change} value={value("wd-group", "ASSIGNMENTS")} className={inputClass}>{["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"].map(s => <option key={s}>{s}</option>)}</select></Field>
        <Field id="wd-display-grade-as" label="Display Grade as"><select id="wd-display-grade-as" name="wd-display-grade-as" onChange={change} value={value("wd-display-grade-as", "POINTS")} className={inputClass}><option value="POINTS">Points</option><option value="PERCENTAGE">Percentage</option><option value="LETTER">Letter Grade</option><option value="COMPLETE">Complete/Incomplete</option></select></Field>
        <Field id="wd-submission-type" label="Submission Type"><select id="wd-submission-type" name="wd-submission-type" onChange={change} value={value("wd-submission-type", "ONLINE")} className={inputClass}><option value="ONLINE">Online</option><option value="PAPER">On Paper</option><option value="NONE">No Submission</option></select></Field>
      </div>
      <fieldset className="mb-6 rounded border border-neutral-300 p-4"><legend className="px-1 font-medium">Online Entry Options</legend>
        {[["wd-text-entry", "Text Entry"], ["wd-website-url", "Website URL"], ["wd-media-recordings", "Media Recordings"], ["wd-student-annotation", "Student Annotation"], ["wd-file-upload", "File Uploads"]].map(([id, label], i) => <label key={id} htmlFor={id} className="mb-2 flex items-center gap-2"><input id={id} name={id} type="checkbox" checked={value(id, i < 2 ? "on" : "") === "on"} onChange={change} />{label}</label>)}
      </fieldset>
      <fieldset className="mb-6 rounded border border-neutral-300 p-4"><legend className="px-1 text-lg font-semibold">Assign</legend>
        <Field id="wd-assign-to" label="Assign to"><input id="wd-assign-to" name="wd-assign-to" onChange={change} value={value("wd-assign-to", "Everyone")} className={inputClass} /></Field>
        <Field id="wd-due-date" label="Due"><input id="wd-due-date" name="wd-due-date" type="date" onChange={change} value={value("wd-due-date", "2026-09-27")} className={inputClass} /></Field>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2"><Field id="wd-available-from" label="Available from"><input id="wd-available-from" name="wd-available-from" type="date" onChange={change} value={value("wd-available-from", "2026-09-09")} className={inputClass} /></Field><Field id="wd-available-until" label="Until"><input id="wd-available-until" name="wd-available-until" type="date" onChange={change} value={value("wd-available-until", "2026-09-27")} className={inputClass} /></Field></div>
      </fieldset>
      <Field id="wd-ai-editor-notes" label="Sample notes (AI)"><textarea id="wd-ai-editor-notes" name="wd-ai-editor-notes" rows={3} onChange={change} value={value("wd-ai-editor-notes", "")} className={inputClass} /></Field>
      </fieldset>
      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4"><Link href={list} id="wd-cancel" className={secondaryButton}>Cancel</Link>{canEdit && <button id="wd-save" disabled={saving} type="submit" className={primaryButton}>Save</button>}</div>
    </form>
  </div>;
}
