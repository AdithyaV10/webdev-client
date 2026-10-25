import { ReactNode } from "react";

export default function Square({ children, id = "wd-square" }: { children: ReactNode; id?: string }) {
  const num = Number(children);
  return <span id={id}>{num * num}</span>;
}
