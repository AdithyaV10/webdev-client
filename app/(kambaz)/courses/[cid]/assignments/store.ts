"use client";
import { useSyncExternalStore } from "react";
import { initialAssignments, type Assignment } from "./data";
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
export function parseAssignments(snapshot: string): Assignment[] {
  try { const value: unknown = JSON.parse(snapshot); if (Array.isArray(value) && value.every(a => a && typeof a.aid === "string" && typeof a.title === "string" && typeof a.details === "string")) return value; } catch { /* A fresh browser uses the original assignments. */ }
  return initialAssignments;
}
export function saveAssignments(cid: string, assignments: Assignment[]) {
  window.localStorage.setItem(assignmentKey(cid), JSON.stringify(assignments));
  window.dispatchEvent(new Event(event));
}
