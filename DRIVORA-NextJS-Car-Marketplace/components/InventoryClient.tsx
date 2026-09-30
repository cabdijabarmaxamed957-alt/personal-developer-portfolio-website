"use client";

import { useMemo, useState } from "react";
import CarCard from "@/components/CarCard";
import type { Car } from "@/lib/data";

export default function InventoryClient({ cars }: { cars: Car[] }) {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All");
  const [body, setBody] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100000);

  const filtered = useMemo(() => {
    return cars.filter((car) => {
      const q = query.toLowerCase().trim();
      const matchesQuery = !q || `${car.brand} ${car.model}`.toLowerCase().includes(q);
      const matchesBrand = brand === "All" || car.brand === brand;
      const matchesBody = body === "All" || car.body === body;
      const matchesPrice = car.price <= maxPrice;
      return matchesQuery && matchesBrand && matchesBody && matchesPrice;
    });
  }, [cars, query, brand, body, maxPrice]);

  const brands = [...new Set(cars.map((c) => c.brand))];
  const bodies = [...new Set(cars.map((c) => c.body))];

  return (
    <>
      <section className="filter-panel">
        <div className="search-box">
          <span>⌕</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search brand or model..." />
        </div>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option>All</option>
          {brands.map((b) => <option key={b}>{b}</option>)}
        </select>
        <select value={body} onChange={(e) => setBody(e.target.value)}>
          <option>All</option>
          {bodies.map((b) => <option key={b}>{b}</option>)}
        </select>
        <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}>
          <option value={100000}>Any price</option>
          <option value={20000}>Under $20k</option>
          <option value={30000}>Under $30k</option>
          <option value={50000}>Under $50k</option>
          <option value={70000}>Under $70k</option>
        </select>
      </section>

      <div className="results-line">
        <span>{filtered.length} vehicles available</span>
        <button className="clear-button" onClick={() => { setQuery(""); setBrand("All"); setBody("All"); setMaxPrice(100000); }}>
          Reset filters
        </button>
      </div>

      <section className="car-grid">
        {filtered.map((car) => <CarCard key={car.id} car={car} />)}
      </section>

      {!filtered.length && (
        <div className="empty-state">
          <div className="empty-icon">⌕</div>
          <h3>No vehicles found</h3>
          <p>Try another brand, body type or price range.</p>
        </div>
      )}
    </>
  );
}
