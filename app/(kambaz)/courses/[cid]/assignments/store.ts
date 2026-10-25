"use client";
import { useSyncExternalStore } from "react";
import { initialAssignments, type Assignment } from "./data";
import { assignments as databaseAssignments } from "../../../database";
const event = "kambaz-assignment-change";
export const assignmentKey = (cid: string) => "kambaz:assignments:" + cid;
function subscribe(listener: () => void) {
  window.addEventListener("storage", listener); window.addEventListener(event, listener);
  return () => { window.removeEventListener("storage", listener); window.removeEventListener(event, listener); };
}
export function useAssignmentsSnapshot(cid: string) {
  return useSyncExternalStore(subscribe, () => {
    try { return window.localStorage.getItem(assignmentKey(cid)) ?? ""; }
    catch { return ""; }
  }, () => "");
}
export function parseAssignments(snapshot: string, cid: string): Assignment[] {
  const defaults = initialAssignments(cid);
  try {
    const value: unknown = JSON.parse(snapshot);
    if (!Array.isArray(value) || !value.every(a => a && typeof a.aid === "string" && typeof a.title === "string" && typeof a.details === "string")) return defaults;
    const saved: Assignment[] = value.map(row => {
      const legacyIndex = /^A([1-3])$/.exec(row.aid);
      return { ...row, aid: legacyIndex ? defaults[Number(legacyIndex[1]) - 1]?.aid ?? row.aid : row.aid };
    }).filter(row => !databaseAssignments.some(assignment => assignment._id === row.aid && assignment.course !== cid));
    return [
      ...defaults.map(row => {
        const edit = saved.find(assignment => assignment.aid === row.aid);
        return edit ? { ...row, ...edit, fields: { ...row.fields, "wd-name": edit.title, ...edit.fields } } : row;
      }),
      ...saved.filter(row => !defaults.some(assignment => assignment.aid === row.aid)),
    ];
  } catch {
    return defaults;
  }
}
export function saveAssignments(cid: string, assignments: Assignment[]) {
  window.localStorage.setItem(assignmentKey(cid), JSON.stringify(assignments));
  window.dispatchEvent(new Event(event));
}
