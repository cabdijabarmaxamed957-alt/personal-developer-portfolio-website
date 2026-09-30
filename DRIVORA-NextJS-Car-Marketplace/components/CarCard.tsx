"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Car } from "@/lib/data";

export default function CarCard({ car }: { car: Car }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("drivora-favorites") || "[]");
    setSaved(list.includes(car.id));
  }, [car.id]);

  function toggleFavorite() {
    const list: string[] = JSON.parse(localStorage.getItem("drivora-favorites") || "[]");
    const next = list.includes(car.id) ? list.filter((id) => id !== car.id) : [...list, car.id];
    localStorage.setItem("drivora-favorites", JSON.stringify(next));
    setSaved(!saved);
  }

  return (
    <article className="car-card">
      <div className="car-image-wrap">
        <img src={car.image} alt={`${car.brand} ${car.model}`} className="car-image" />
        {car.featured && <span className="featured-badge">FEATURED</span>}
        <button className={saved ? "heart saved" : "heart"} onClick={toggleFavorite} aria-label="Save car">
          {saved ? "♥" : "♡"}
        </button>
      </div>
      <div className="car-card-body">
        <div className="car-title-row">
          <div>
            <p className="eyebrow">{car.year} · {car.body}</p>
            <h3>{car.brand} {car.model}</h3>
          </div>
          <strong>${car.price.toLocaleString()}</strong>
        </div>
        <div className="spec-grid">
          <span>◷ {car.mileage.toLocaleString()} km</span>
          <span>⚙ {car.transmission}</span>
          <span>⛽ {car.fuel}</span>
          <span>⌖ {car.location}</span>
        </div>
        <Link href={`/cars/${car.id}`} className="card-button">View Details</Link>
      </div>
    </article>
  );
}
