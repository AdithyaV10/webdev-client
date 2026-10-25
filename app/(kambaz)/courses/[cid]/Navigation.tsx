"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LINKS = [["home", "Home"], ["modules", "Modules"], ["piazza", "Piazza"], ["zoom", "Zoom"], ["assignments", "Assignments"], ["quizzes", "Quizzes"], ["grades", "Grades"], ["people/table", "People"], ["announcements", "Announcements"], ["home", "Sample (AI)"]] as const;
export default function CourseNavigation({ cid, mobile = false }: { cid: string; mobile?: boolean }) {
  const pathname = usePathname() ?? "";
  return <nav id={mobile ? undefined : "wd-courses-navigation"} aria-label={mobile ? "Mobile course" : "Course"} className={mobile ? "flex flex-wrap gap-3 py-3" : "wd list-group text-base"}>
    {LINKS.map(([path, label]) => {
      const href = "/courses/" + cid + "/" + path;
      const active = label !== "Sample (AI)" && (pathname === href || pathname.startsWith(href + "/"));
      return <Link key={label} id={mobile ? undefined : label === "Sample (AI)" ? "wd-course-ai-link" : "wd-course-" + label.toLowerCase() + "-link"} href={href} aria-current={active ? "page" : undefined} className={mobile ? "text-red-600 " + (active ? "font-semibold underline" : "") : "list-group-item " + (active ? "active" : "text-red-600")}>{label}</Link>;
    })}
  </nav>;
}
