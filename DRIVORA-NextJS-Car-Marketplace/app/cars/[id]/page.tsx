import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/lib/data";

export function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export default async function CarDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((item) => item.id === id);
  if (!car) notFound();

  return (
    <main className="page">
      <div className="container">
        <Link href="/inventory" className="back-link">← Back to inventory</Link>
        <section className="details-grid">
          <div className="details-image"><img src={car.image} alt={`${car.brand} ${car.model}`} /></div>
          <div className="details-panel">
            <span className="pill">{car.year} · {car.body} · {car.location}</span>
            <h1>{car.brand} {car.model}</h1>
            <div className="detail-price">${car.price.toLocaleString()}</div>
            <p className="details-description">{car.description}</p>
            <div className="large-spec-grid">
              <div><span>Mileage</span><strong>{car.mileage.toLocaleString()} km</strong></div>
              <div><span>Fuel</span><strong>{car.fuel}</strong></div>
              <div><span>Transmission</span><strong>{car.transmission}</strong></div>
              <div><span>Color</span><strong>{car.color}</strong></div>
              <div><span>Body</span><strong>{car.body}</strong></div>
              <div><span>Location</span><strong>{car.location}</strong></div>
            </div>
            <div className="detail-actions">
              <a href="tel:+252000000000" className="primary-button">Call Seller</a>
              <a href="mailto:sales@drivora.example" className="secondary-button">Message Seller</a>
            </div>
          </div>
        </section>
        <section className="info-banner">
          <div><strong>Interested in financing?</strong><span>Estimate your monthly payment for this vehicle.</span></div>
          <Link href="/finance" className="primary-button">Calculate Payment →</Link>
        </section>
      </div>
    </main>
  );
}
