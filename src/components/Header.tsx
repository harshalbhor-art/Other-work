"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNav } from "@/lib/data";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Primary">
        <Link className="lockup" href="/">
          <svg className="wave-mark" viewBox="0 0 64 48" aria-hidden="true">
            <use href="#wave-mark" />
          </svg>
          <span className="wordmark">
            3<span className="light">rd</span> Wave
          </span>
        </Link>
        <ul className="nav-links">
          {siteNav.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <ThemeSwitch />
          <details className="mobile-nav">
            <summary>Menu</summary>
            <ul>
              {siteNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </details>
          <Link className="btn btn-primary" href="/contact">
            Start a Project
          </Link>
        </div>
      </nav>
    </header>
  );
}
