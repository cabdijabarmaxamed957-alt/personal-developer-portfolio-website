"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Inventory", "/inventory"],
    ["Sell a Car", "/sell"],
    ["Finance", "/finance"],
    ["Favorites", "/favorites"],
    ["Dashboard", "/dashboard"]
  ];

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">D</span>
          <span>DRIVORA</span>
        </Link>

        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Open navigation">
          ☰
        </button>

        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/sell" className="nav-cta" onClick={() => setOpen(false)}>
            + List Your Car
          </Link>
        </nav>
      </div>
    </header>
  );
}
