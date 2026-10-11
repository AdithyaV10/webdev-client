import Editor from "./Editor";
export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = await params;
  return <Editor cid={cid} aid={aid} />;
}
