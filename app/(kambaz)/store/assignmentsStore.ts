"use client";
import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number] & { until: string; fields: Record<string, string> };
type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string, courseId: string) => void;
  findAssignment: (assignmentId: string, courseId: string) => Assignment | undefined;
};
export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: assignmentsJson.map(assignment => ({ ...assignment, until: assignment.due, fields: {} })),
  addAssignment: assignment => set(state => ({ assignments: [...state.assignments, { ...assignment, _id: crypto.randomUUID(), fields: { ...assignment.fields } }] })),
  updateAssignment: assignment => set(state => ({ assignments: state.assignments.map(a => a._id === assignment._id && a.course === assignment.course ? { ...assignment, fields: { ...assignment.fields } } : a) })),
  deleteAssignment: (assignmentId, courseId) => set(state => ({ assignments: state.assignments.filter(a => a._id !== assignmentId || a.course !== courseId) })),
  findAssignment: (assignmentId, courseId) => get().assignments.find(a => a._id === assignmentId && a.course === courseId),
}));
