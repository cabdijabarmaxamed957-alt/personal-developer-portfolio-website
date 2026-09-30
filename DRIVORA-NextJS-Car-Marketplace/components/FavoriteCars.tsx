"use client";

import { useEffect, useState } from "react";
import { cars } from "@/lib/data";
import CarCard from "@/components/CarCard";

export default function FavoriteCars() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const read = () => setIds(JSON.parse(localStorage.getItem("drivora-favorites") || "[]"));
    read();
    window.addEventListener("storage", read);
    return () => window.removeEventListener("storage", read);
  }, []);

  const saved = cars.filter((car) => ids.includes(car.id));

  if (!saved.length) {
    return (
      <div className="empty-state large-empty">
        <div className="empty-icon">♡</div>
        <h3>Your saved vehicles will appear here</h3>
        <p>Tap the heart on any vehicle to keep it in your shortlist.</p>
      </div>
    );
  }

  return <section className="car-grid">{saved.map((car) => <CarCard key={car.id} car={car} />)}</section>;
}
