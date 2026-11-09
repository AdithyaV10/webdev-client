"use client";
import { create } from "zustand";
import modulesJson from "../database/modules.json";

export type Lesson = { _id: string; name: string; description: string; module: string };
export type CourseModule = {
  _id: string; name: string; description: string; course: string; lessons?: Lesson[]; editing?: boolean;
};
type ModulesStore = {
  modules: CourseModule[];
  addModule: (module: { name: string; course: string }) => void;
  deleteModule: (moduleId: string, courseId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string, courseId: string) => void;
};
export const useModulesStore = create<ModulesStore>((set) => ({
  modules: modulesJson.map(module => ({ ...module, lessons: module.lessons.map(lesson => ({ ...lesson })) })),
  addModule: module => {
    if (!module.name.trim()) return;
    set(state => ({ modules: [...state.modules, { ...module, name: module.name.trim(), _id: crypto.randomUUID(), description: "", lessons: [] }] }));
  },
  deleteModule: (moduleId, courseId) => set(state => ({ modules: state.modules.filter(m => m._id !== moduleId || m.course !== courseId) })),
  updateModule: module => set(state => ({ modules: state.modules.map(m => m._id === module._id && m.course === module.course ? { ...module } : m) })),
  editModule: (moduleId, courseId) => set(state => ({ modules: state.modules.map(m => m._id === moduleId && m.course === courseId ? { ...m, editing: true } : m) })),
}));
