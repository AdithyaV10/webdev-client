"use client";
import { create } from "zustand";
import * as client from "../courses/enrollmentsClient";
import type { Enrollment } from "../courses/enrollmentsClient";

type EnrollmentsStore = {
  enrollments: Enrollment[];
  loadEnrollments: () => Promise<void>;
  enroll: (userId: string, courseId: string) => Promise<void>;
  unenroll: (userId: string, courseId: string) => Promise<void>;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: [],
  loadEnrollments: async () => set({ enrollments: await client.findAllEnrollments() }),
  enroll: async (userId, courseId) => {
    const enrollment = await client.enrollIntoCourse(userId, courseId);
    set(state => ({ enrollments: [...state.enrollments.filter(e => e.user !== userId || e.course !== courseId), enrollment] }));
  },
  unenroll: async (userId, courseId) => {
    await client.unenrollFromCourse(userId, courseId);
    set(state => ({ enrollments: state.enrollments.filter(e => e.user !== userId || e.course !== courseId) }));
  },
}));
