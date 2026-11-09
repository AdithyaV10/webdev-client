import type { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";
import "./kambaz.css";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <AccountProvider><div id="wd-kambaz" className="flex min-h-screen font-sans"><KambazNavigation /><main className="wd-main-content-offset flex-1 p-3">{children}</main></div></AccountProvider>;
}
