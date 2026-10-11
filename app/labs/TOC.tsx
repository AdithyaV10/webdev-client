"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  // Leaving full Tailwind must discard Preflight with a new document.
  const NavigationLink = pathname === "/labs/lab2/tailwind" ? "a" : Link;
  return (
    <div>
      <ul>
        <li>
          <NavigationLink href="/labs" id="wd-home-link">
            Home
          </NavigationLink>
        </li>

        <li>
          <NavigationLink href="/labs/lab1">
            Lab 1
          </NavigationLink>
        </li>

        <li>
          <NavigationLink href="/labs/lab2">
            Lab 2
          </NavigationLink>
        </li>

        <li>
          <NavigationLink href="/labs/lab3">
            Lab 3
          </NavigationLink>
        </li>

        <li>
          <NavigationLink href="/labs/lab4">
            Lab 4
          </NavigationLink>
        </li>

        <li>
          <NavigationLink href="/labs/lab5">
            Lab 5
          </NavigationLink>
        </li>

        <li>
          <NavigationLink href="/" id="wd-kambaz-link">
            Kambaz
          </NavigationLink>
        </li>

        <li>
          <NavigationLink href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </NavigationLink>
        </li>
      </ul>

      <p>Adithya Varadarajan</p>
    </div>
  );
}
