"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [favorites, setFavorites] = useState(0);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("drivora-favorites") || "[]").length);
  }, []);

  const stats = [
    ["Active listings", "3", "↑ 12% this month"],
    ["Vehicle views", "1,842", "↑ 18% this month"],
    ["Messages", "27", "6 unread"],
    ["Saved cars", String(favorites), "Your shortlist"]
  ];

  return (
    <main className="page"><div className="container">
      <div className="dashboard-top"><div><span className="pill">MY DRIVORA</span><h1>Seller dashboard</h1><p>Manage your marketplace activity from one place.</p></div><Link href="/sell" className="primary-button">+ Add Vehicle</Link></div>
      <div className="dashboard-stats">{stats.map(([label, value, note]) => <div className="stat-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}</div>
      <div className="dashboard-grid">
        <section className="dashboard-card"><div className="section-heading"><h2>Your listings</h2><Link href="/sell" className="text-link">Add new →</Link></div><div className="listing-row"><div className="mini-car"></div><div><strong>Toyota Land Cruiser 2024</strong><span>Listed · $68,500</span></div><b>1,204 views</b></div><div className="listing-row"><div className="mini-car second"></div><div><strong>BMW X5 xDrive40i 2022</strong><span>Listed · $54,500</span></div><b>438 views</b></div></section>
        <section className="dashboard-card"><h2>Quick actions</h2><Link className="quick-action" href="/sell">＋ Create a listing <span>→</span></Link><Link className="quick-action" href="/inventory">⌕ Browse inventory <span>→</span></Link><Link className="quick-action" href="/finance">▣ Calculate financing <span>→</span></Link><Link className="quick-action" href="/favorites">♡ View saved cars <span>→</span></Link></section>
      </div>
    </div></main>
  );
}
