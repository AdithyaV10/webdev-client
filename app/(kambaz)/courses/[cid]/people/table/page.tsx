import PeopleTable from "./PeopleTable";
export default async function People({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return <PeopleTable key={cid} cid={cid} />;
}
