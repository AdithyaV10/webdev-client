import { notFound } from "next/navigation";

export default async function Add({ params }: { params: Promise<{ a: string; b: string }> }) {
  const { a, b } = await params;
  const first = Number(a);
  const second = Number(b);
  if (!Number.isFinite(first) || !Number.isFinite(second)) notFound();
  return <div id="wd-add"><h2>Add</h2>{first} + {second} = {first + second}</div>;
}
