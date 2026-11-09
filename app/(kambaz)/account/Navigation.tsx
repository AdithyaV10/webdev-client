"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser ? [["Profile", "profile"]] : [["Sign in", "signin"], ["Sign up", "signup"]];
  const pathname = usePathname();
  return <nav id="wd-account-navigation" aria-label="Account" className="list-group wd">
    {links.map(([label, route]) =>
      <Link key={route} href={`/account/${route}`} className={`list-group-item ${pathname === `/account/${route}` ? "active" : ""}`} aria-current={pathname === `/account/${route}` ? "page" : undefined}>{label}</Link>)}
  </nav>;
}
