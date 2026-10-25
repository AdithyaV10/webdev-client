import { ReactNode } from "react";

export default function Highlight({ children, id = "wd-highlight" }: { children: ReactNode; id?: string }) {
  return (
    <span
      id={id}
      style={{ backgroundColor: "yellow", color: "red" }}
    >
      {children}
    </span>
  );
}
