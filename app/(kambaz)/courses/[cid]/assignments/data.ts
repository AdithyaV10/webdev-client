import { assignments } from "../../../database";

export type Assignment = { aid: string; title: string; details: string; fields?: Record<string, string> };

export function initialAssignments(cid: string): Assignment[] {
  return assignments.filter(assignment => assignment.course === cid).map(assignment => ({
    aid: assignment._id,
    title: assignment.title,
    details: `Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`,
    fields: {
      "wd-name": assignment.title,
      "wd-description": assignment.description,
      "wd-points": String(assignment.points),
      "wd-due-date": assignment.due,
      "wd-available-from": assignment.available,
      "wd-available-until": assignment.due,
    },
  }));
}
