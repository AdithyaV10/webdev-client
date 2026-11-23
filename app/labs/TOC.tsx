"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home" },
  { href: "/labs/lab1", label: "Lab 1" },
  { href: "/labs/lab2", label: "Lab 2" },
  { href: "/labs/lab3", label: "Lab 3" },
  { href: "/labs/lab4", label: "Lab 4" },
  { href: "/labs/lab5", label: "Lab 5" },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz" },
  { href: "https://kambaz.dev/book/ch4", id: "wd-book-ch4-link", label: "Book Ch4" },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3" },
  { href: "/book/ch1", id: "wd-toc-book-link", label: "Chapter 1" },
];

export default function TOC() {
  const pathname = usePathname();
  const NavigationLink = pathname === "/labs/lab2/tailwind" ? "a" : Link;
  return (
    <div>
      <ul>
        {LINKS.map(({ href, id, label }) => {
          const active = href === "/labs" ? pathname === href : href.startsWith("/labs/lab") && (pathname === href || pathname.startsWith(href + "/"));
          return <li key={href}>
            <NavigationLink href={href} id={id} aria-current={active ? "page" : undefined} style={active ? { backgroundColor: "#2563eb", color: "white", borderRadius: "6px", padding: "4px 8px", display: "inline-block" } : undefined}>
              {label}
            </NavigationLink>
          </li>;
        })}
      </ul>
      <p>Adithya Varadarajan</p>
      <p><a href="https://github.com/AdithyaV10/webdev-client" id="wd-toc-github-link" target="_blank" rel="noreferrer">GitHub Repository</a></p>
      {process.env.NEXT_PUBLIC_SERVER_GITHUB_URL ? <p><a id="wd-server-github" href={process.env.NEXT_PUBLIC_SERVER_GITHUB_URL} target="_blank" rel="noreferrer">Server GitHub Repository</a></p> : <p>Server GitHub link pending</p>}
      {process.env.NEXT_PUBLIC_HTTP_SERVER ? <p><a id="wd-server-link" href={process.env.NEXT_PUBLIC_HTTP_SERVER} target="_blank" rel="noreferrer">HTTP Server</a></p> : <p>Server link pending</p>}
    </div>
  );
}
