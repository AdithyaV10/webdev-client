import type { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./kambaz.css";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div id="wd-kambaz" className="flex min-h-screen font-sans"><KambazNavigation /><main className="wd-main-content-offset flex-1 p-3">{children}</main></div>;
}
