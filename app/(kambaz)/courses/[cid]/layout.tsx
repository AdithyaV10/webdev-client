import type { ReactNode } from "react";
import Link from "next/link";
import CourseNavigation from "./Navigation";
export default async function CoursesLayout({ children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  return <div id="wd-courses" className="min-w-0">
    <h2 className="mb-4 mt-8 text-xl font-semibold text-red-600 md:mt-0">Courses {cid}</h2>
    <hr className="mb-6 border-neutral-300" />
    <details className="mb-4 md:hidden"><summary className="font-semibold">Course navigation</summary><nav aria-label="Mobile course" className="flex flex-wrap gap-3 py-3">
      {["home", "modules", "piazza", "zoom", "assignments", "quizzes", "grades", "people/table"].map(path => <Link key={path} href={"/courses/" + cid + "/" + path} className="text-red-600">{path === "people/table" ? "People" : path.charAt(0).toUpperCase() + path.slice(1)}</Link>)}
    </nav></details>
    <div className="flex gap-4"><aside className="hidden w-[140px] shrink-0 md:block"><CourseNavigation cid={cid} /></aside><div className="min-w-0 flex-1">{children}</div></div>
  </div>;
}
