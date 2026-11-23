import type { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";
import Session from "./account/Session";
import "./kambaz.css";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <AccountProvider><Session><div id="wd-kambaz" className="flex min-h-screen font-sans"><KambazNavigation /><main className="wd-main-content-offset flex-1 p-3">{children}</main></div></Session></AccountProvider>;
}
