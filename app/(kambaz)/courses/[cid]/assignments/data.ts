export type Assignment = { aid: string; title: string; details: string; fields?: Record<string, string> };
export const initialAssignments: Assignment[] = [
  { aid: "A1", title: "A1 - ENV + HTML", details: "Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
  { aid: "A2", title: "A2 - CSS + TAILWIND", details: "Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts" },
  { aid: "A3", title: "A3 - JAVASCRIPT + REACT", details: "Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts" },
  { aid: "A4", title: "A4 - Adithya's accessibility review", details: "Multiple Modules | Not available until June 1 at 12:00am | Due June 8 at 11:59pm | 100 pts" },
  { aid: "ai-a", title: "A9 - Sample assignment", details: "Multiple Modules | Not available until June 8 at 12:00am | Due June 15 at 11:59pm | 100 pts" },
];
