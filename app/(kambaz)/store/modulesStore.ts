"use client";
import { create } from "zustand";

export type Lesson = { _id: string; name: string; description: string; module: string };
export type CourseModule = {
  _id: string; name: string; description: string; course: string; lessons?: Lesson[]; editing?: boolean;
};
type ModulesStore = {
  modules: CourseModule[];
  setModules: (modules: CourseModule[]) => void;
  addModule: (module: CourseModule) => void;
  deleteModule: (moduleId: string, courseId: string) => void;
  updateModule: (module: CourseModule) => void;
  editModule: (moduleId: string, courseId: string) => void;
};
export const useModulesStore = create<ModulesStore>((set) => ({
  modules: [],
  setModules: modules => set({ modules }),
  addModule: module => set(state => ({ modules: [...state.modules, module] })),
  deleteModule: (moduleId, courseId) => set(state => ({ modules: state.modules.filter(m => m._id !== moduleId || m.course !== courseId) })),
  updateModule: module => set(state => ({ modules: state.modules.map(m => m._id === module._id && m.course === module.course ? { ...module } : m) })),
  editModule: (moduleId, courseId) => set(state => ({ modules: state.modules.map(m => m._id === moduleId && m.course === courseId ? { ...m, editing: true } : m) })),
}));
