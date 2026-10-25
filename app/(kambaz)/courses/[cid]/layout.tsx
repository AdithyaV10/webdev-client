import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { courses } from "../../database";
export default async function CoursesLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find(course => course._id === cid);
  if (!course) notFound();
  return <div id="wd-courses" className="min-w-0">
    <h2 className="mb-4 mt-8 text-xl font-semibold text-red-600 md:mt-0"><Breadcrumb course={course} /> <small>({course._id})</small></h2>
    <hr className="mb-6 border-neutral-300" />
    <details className="mb-4 md:hidden"><summary className="font-semibold">Course navigation</summary><CourseNavigation cid={cid} mobile /></details>
    <div className="flex gap-4"><aside className="hidden w-[140px] shrink-0 md:block"><CourseNavigation cid={cid} /></aside><div className="min-w-0 flex-1">{children}</div></div>
  </div>;
}
