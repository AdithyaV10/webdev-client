import AssignmentsClient from "./AssignmentsClient";
export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return <AssignmentsClient cid={cid} />;
}
