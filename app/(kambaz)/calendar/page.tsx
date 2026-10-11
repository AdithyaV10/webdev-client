import Link from "next/link";
import { initialAssignments } from "../courses/[cid]/assignments/data";
export default function Calendar() {
  return <section id="wd-calendar" className="mt-8 max-w-4xl md:mt-0">
    <h1 className="text-3xl font-medium">Calendar</h1>
    <p className="text-neutral-600">CS1234 assignment schedule</p>
    <ul className="list-none p-0">{initialAssignments.slice(0, 3).map((assignment) =>
      <li key={assignment.aid} className="mb-3 rounded border border-neutral-300 p-4">
        <Link href={`/courses/1234/assignments/${assignment.aid}`} className="font-semibold text-red-700">{assignment.title}</Link>
        <p className="mb-0 text-sm text-neutral-600">{assignment.details}</p>
      </li>)}</ul>
  </section>;
}
