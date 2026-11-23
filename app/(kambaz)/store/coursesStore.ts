"use client";
import { create } from "zustand";

export type Course = {
  _id: string; name: string; number: string; description: string; startDate: string; endDate: string;
  department: string; credits: number; image: string; term: string;
};
export const emptyCourse: Course = {
  _id: "0", name: "New Course", number: "New Number", description: "New Description",
  startDate: "2026-09-10", endDate: "2026-12-15", department: "D123", credits: 4,
  image: "/images/reactjs.jpg", term: "Fall 2026",
};
type CoursesStore = {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
};
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: [],
  setCourses: courses => set({ courses }),
  addCourse: course => set(state => ({ courses: [...state.courses, course] })),
  updateCourse: course => set(state => ({ courses: state.courses.map(c => c._id === course._id ? { ...course } : c) })),
  deleteCourse: courseId => set(state => ({ courses: state.courses.filter(c => c._id !== courseId) })),
}));
