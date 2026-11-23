"use client";
import { create } from "zustand";

export type Assignment = {
  _id: string; course: string; title: string; description: string; points: number; due: string; available: string;
  until: string; fields: Record<string, string>;
};
type AssignmentsStore = {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string, courseId: string) => void;
  findAssignment: (assignmentId: string, courseId: string) => Assignment | undefined;
};
export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: [],
  setAssignments: assignments => set({ assignments }),
  addAssignment: assignment => set(state => ({ assignments: [...state.assignments, assignment] })),
  updateAssignment: assignment => set(state => ({ assignments: state.assignments.map(a => a._id === assignment._id && a.course === assignment.course ? { ...assignment, fields: { ...assignment.fields } } : a) })),
  deleteAssignment: (assignmentId, courseId) => set(state => ({ assignments: state.assignments.filter(a => a._id !== assignmentId || a.course !== courseId) })),
  findAssignment: (assignmentId, courseId) => get().assignments.find(a => a._id === assignmentId && a.course === courseId),
}));
