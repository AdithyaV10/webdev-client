"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegEnvelope, FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
const links = [
  { href: "/account", id: "wd-account-link", label: "Account", Icon: FaRegCircleUser },
  { href: "/dashboard", id: "wd-dashboard-link", label: "Dashboard", Icon: AiOutlineDashboard },
  { href: "/dashboard", id: "wd-course-link", label: "Courses", Icon: LiaBookSolid },
  { href: "/calendar", id: "wd-calendar-link", label: "Calendar", Icon: IoCalendarOutline },
  { href: "/inbox", id: "wd-inbox-link", label: "Inbox", Icon: FaRegEnvelope },
  { href: "/labs", id: "wd-labs-link", label: "Labs", Icon: LiaCogSolid },
  { href: "/labs", id: "wd-ai-nav-help", label: "Help (AI)", Icon: FaCircleQuestion },
];
export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const inRoute = (route: string) => pathname === route || pathname.startsWith(route + "/");
  // Courses and Help share destinations with other tiles; select one route owner.
  const activeId = inRoute("/account") ? "wd-account-link"
    : inRoute("/courses") ? "wd-course-link"
    : inRoute("/dashboard") ? "wd-dashboard-link"
    : inRoute("/calendar") ? "wd-calendar-link"
    : inRoute("/inbox") ? "wd-inbox-link"
    : inRoute("/labs") ? "wd-labs-link" : undefined;
  return <>
    <nav id="wd-kambaz-navigation" aria-label="Kambaz" className="fixed bottom-0 left-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer" className="block bg-black py-3 text-center no-underline" aria-label="Northeastern University">
        <span aria-hidden="true" className="block text-6xl font-black text-red-600">N</span><span className="text-xs text-white">Northeastern</span>
      </a>
      {links.map(({ href, id, label, Icon }) => <Link key={id} href={href} id={id} aria-current={id === activeId ? "page" : undefined} className={"block py-3 text-center text-sm no-underline " + (id === activeId ? "bg-white text-red-600" : "bg-black text-white")}>
        <Icon aria-hidden="true" className={"inline-block text-3xl " + (id === "wd-account-link" && id !== activeId ? "text-white" : "text-red-600")} /><br />{label}
      </Link>)}
    </nav>
    <details className="fixed right-3 top-2 z-30 rounded border border-neutral-300 bg-white px-3 py-2 shadow md:hidden">
      <summary className="text-sm font-semibold">Kambaz menu</summary>
      <nav aria-label="Mobile Kambaz" className="flex flex-col gap-2 py-3">{links.map(({ href, id, label }) => <Link key={id} href={href} aria-current={id === activeId ? "page" : undefined} className={"text-red-600 no-underline " + (id === activeId ? "bg-neutral-100 font-semibold" : "")}>{label}</Link>)}</nav>
    </details>
  </>;
}
