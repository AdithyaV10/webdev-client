import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div id="wd-kambaz-account" className="mt-8 flex flex-col gap-6 md:mt-0 md:flex-row">
    <aside className="shrink-0 md:w-[140px]"><AccountNavigation /></aside>
    <div className="min-w-0 flex-1">{children}</div>
  </div>;
}
