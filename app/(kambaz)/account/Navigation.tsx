"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
  const pathname = usePathname();
  return <nav id="wd-account-navigation" aria-label="Account" className="list-group wd">
    {[["Signin", "signin"], ["Signup", "signup"], ["Profile", "profile"]].map(([label, route]) =>
      <Link key={route} href={`/account/${route}`} className={`list-group-item ${pathname === `/account/${route}` ? "active" : ""}`} aria-current={pathname === `/account/${route}` ? "page" : undefined}>{label}</Link>)}
  </nav>;
}
