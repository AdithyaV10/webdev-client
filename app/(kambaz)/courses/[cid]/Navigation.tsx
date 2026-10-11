"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [["home", "Home"], ["modules", "Modules"], ["piazza", "Piazza"], ["zoom", "Zoom"], ["assignments", "Assignments"], ["quizzes", "Quizzes"], ["grades", "Grades"], ["people/table", "People"]] as const;
export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return <nav id="wd-courses-navigation" aria-label="Course" className="wd list-group text-base">
    {links.map(([path, label]) => {
      const href = "/courses/" + cid + "/" + path;
      const active = pathname === href || pathname.startsWith(href + "/");
      return <Link key={path} id={"wd-course-" + label.toLowerCase() + "-link"} href={href} aria-current={active ? "page" : undefined} className={"list-group-item " + (active ? "active" : "text-red-600")}>{label}</Link>;
    })}
    <Link id="wd-course-ai-link" href={"/courses/" + cid + "/home"} className="list-group-item text-red-600">Sample (AI)</Link>
  </nav>;
}
