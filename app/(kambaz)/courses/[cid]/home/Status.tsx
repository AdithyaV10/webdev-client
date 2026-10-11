"use client";
import { useState } from "react";
import { FaCheckCircle, FaFileImport, FaBullhorn, FaChartBar, FaBell, FaHome, FaStream, FaDownload } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { inputClass, secondaryButton } from "../../../UI";
const actions = [
  ["Import Existing Content", FaFileImport], ["Import from Commons", FaDownload], ["Choose Home Page", FaHome],
  ["View Course Stream", FaStream], ["New Announcement", FaBullhorn], ["New Analytics", FaChartBar], ["View Course Notifications", FaBell],
] as const;
export default function CourseStatus() {
  const [published, setPublished] = useState(true);
  const [action, setAction] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [saved, setSaved] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [home, setHome] = useState("Modules");
  return <div id="wd-course-status">
    <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
    <div className="mb-1 flex gap-1">
      <button type="button" aria-pressed={!published} onClick={() => setPublished(false)} className={secondaryButton + " min-w-0 flex-1"}><MdDoNotDisturbAlt className="shrink-0" />Unpublish</button>
      <button type="button" aria-pressed={published} onClick={() => setPublished(true)} className="inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded border border-green-600 bg-green-600 px-3 py-1.5 text-sm text-white"><FaCheckCircle className="shrink-0" />Publish</button>
    </div>
    <p role="status" className="mb-3 text-sm text-neutral-600">{published ? "Course published" : "Course unpublished"}</p>
    {actions.map(([label, Icon]) => <button key={label} type="button" onClick={() => { setAction(label); setSaved(""); }} className={secondaryButton + " mb-1 w-full justify-start"}><Icon className="shrink-0" aria-hidden="true" />{label}</button>)}
    <button id="wd-ai-status" type="button" onClick={() => setAction("Sample action")} className={secondaryButton + " mb-1 w-full justify-start"}><FaCheckCircle aria-hidden="true" />Sample action</button>
    {action && <section className="mt-4 rounded border border-neutral-300 p-3" aria-label={action}>
      <h3 className="mb-2 text-base font-semibold">{action}</h3>
      {action === "New Announcement" ? <form onSubmit={e => { e.preventDefault(); setSaved(announcement); setAnnouncement(""); }}>
        <label htmlFor="wd-announcement">Announcement</label><textarea id="wd-announcement" required className={inputClass} value={announcement} onChange={e => setAnnouncement(e.target.value)} /><button className={secondaryButton + " mt-2"}>Post announcement</button>
      </form> : action.startsWith("Import") ? <>
        <label htmlFor="wd-import-file" className="block">Choose course content to preview</label><input id="wd-import-file" type="file" className="max-w-full text-sm" onChange={e => setSaved(e.target.files?.[0]?.name ?? "")} />
      </> : action === "Choose Home Page" ? <><label htmlFor="wd-home-choice">Home page preference</label><select id="wd-home-choice" className={inputClass} value={home} onChange={e => setHome(e.target.value)}><option>Modules</option><option>Course Stream</option></select><p className="text-sm">Selected: {home}</p></> : action === "View Course Notifications" ? <label className="flex gap-2"><input type="checkbox" checked={notifications} onChange={e => setNotifications(e.target.checked)} />Course notifications enabled</label> : action === "New Analytics" ? <p className="text-sm">Course overview: 10 roster members, 5 starter assignments, 3 original weekly modules.</p> : action === "View Course Stream" ? <ul className="pl-4 text-sm"><li>Week 1: Introduction</li><li>Week 2: HTML</li><li>Week 3: CSS</li></ul> : <p className="text-sm">AI sample action: course status is {published ? "published" : "unpublished"}.</p>}
      {saved && <p role="status" className="break-words text-sm text-green-700">{saved}</p>}
      <button type="button" className={secondaryButton + " mt-2"} onClick={() => setAction("")}>Close</button>
    </section>}
  </div>;
}
