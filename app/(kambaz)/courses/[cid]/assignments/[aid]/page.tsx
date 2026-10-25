import Editor from "./Editor";
import { notFound } from "next/navigation";
import { assignments } from "../../../../database";
export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = await params;
  if (aid !== "new" && !/^local-\d+$/.test(aid) && !assignments.some(assignment => assignment.course === cid && assignment._id === aid)) notFound();
  return <Editor key={cid + ":" + aid} cid={cid} aid={aid} />;
}
