"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/hampers", label: "Hampers" },
  { href: "/custom-orders", label: "Custom Orders" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Visit Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">Piinacle Caakery</span>
          <span className="brand-sub">by Preity Goyaal · Rohini, Delhi</span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`main-nav${open ? " open" : ""}`} aria-label="Main navigation">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
