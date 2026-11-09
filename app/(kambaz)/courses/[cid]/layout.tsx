"use client";
import { useState, type ReactNode } from "react";
import { notFound, redirect, useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/coursesStore";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";
import { useAccountContext } from "../../account/AccountContext";
export default function CoursesLayout({ children }: Readonly<{ children: ReactNode }>) {
  const { cid } = useParams<{ cid: string }>();
  const course = useCoursesStore(state => state.courses).find(c => c._id === cid);
  const enrollments = useEnrollmentsStore(state => state.enrollments);
  const { currentUser } = useAccountContext();
  const [showCourseNav, setShowCourseNav] = useState(true);
  if (!course) notFound();
  if (currentUser && !enrollments.some(e => e.user === currentUser._id && e.course === cid)) redirect("/dashboard");
  return <div id="wd-courses" className="min-w-0">
    <h2 className="mb-4 mt-8 flex items-center gap-3 text-xl font-semibold text-red-600 md:mt-0"><button type="button" aria-label="Toggle course navigation" aria-expanded={showCourseNav} onClick={() => setShowCourseNav(!showCourseNav)} className="shrink-0 border-0 bg-transparent text-red-600"><FaAlignJustify /></button><span><Breadcrumb course={course} /> <small>({course._id})</small></span></h2>
    <hr className="mb-6 border-neutral-300" />
    {showCourseNav && <details className="mb-4 md:hidden"><summary className="font-semibold">Course navigation</summary><CourseNavigation cid={cid} mobile /></details>}
    <div className="flex gap-4">{showCourseNav && <aside className="hidden w-[140px] shrink-0 md:block"><CourseNavigation cid={cid} /></aside>}<div className="min-w-0 flex-1">{children}</div></div>
  </div>;
}
