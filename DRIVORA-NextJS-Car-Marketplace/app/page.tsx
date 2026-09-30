import Link from "next/link";
import CarCard from "@/components/CarCard";
import { cars, brands } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="pill">WEB APPLICATION · VEHICLE MARKETPLACE</span>
            <h1>Find the car that<br /><em>moves you.</em></h1>
            <p>Discover verified vehicles, compare prices, calculate financing and sell your car — all in one modern marketplace.</p>
            <div className="hero-actions">
              <Link href="/inventory" className="primary-button">Explore Inventory →</Link>
              <Link href="/sell" className="secondary-button">Sell Your Car</Link>
            </div>
            <div className="hero-stats">
              <div><strong>1,200+</strong><span>Vehicles listed</span></div>
              <div><strong>98%</strong><span>Happy buyers</span></div>
              <div><strong>24/7</strong><span>Marketplace access</span></div>
            </div>
          </div>
          <div className="hero-car">
            <div className="hero-card-label"><span>●</span> Featured vehicle</div>
            <img src={cars[0].image} alt="Featured Toyota Land Cruiser" />
            <div className="hero-car-info">
              <div><span>2024 · SUV</span><strong>Toyota Land Cruiser</strong></div>
              <b>$68,500</b>
            </div>
          </div>
        </div>
      </section>

      <section className="container quick-search">
        <div><span className="eyebrow">START YOUR SEARCH</span><h2>What are you looking for?</h2></div>
        <div className="quick-search-actions">
          <Link href="/inventory">SUVs</Link><Link href="/inventory">Sedans</Link><Link href="/inventory">Pickups</Link><Link href="/inventory">Luxury</Link><Link href="/inventory">All Vehicles →</Link>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div><span className="eyebrow">HANDPICKED</span><h2>Featured vehicles</h2></div>
          <Link href="/inventory" className="text-link">View all inventory →</Link>
        </div>
        <div className="car-grid">{cars.filter(c => c.featured).map(car => <CarCard key={car.id} car={car} />)}</div>
      </section>

      <section className="brands-section">
        <div className="container">
          <span className="eyebrow">BRANDS ON DRIVORA</span>
          <div className="brand-strip">{brands.map(brand => <span key={brand}>{brand}</span>)}</div>
        </div>
      </section>

      <section className="container feature-section">
        <div className="feature-copy">
          <span className="pill">ONE PLATFORM</span>
          <h2>Everything you need to make a smarter car deal.</h2>
          <p>Search inventory, save vehicles, compare options, estimate monthly payments and publish your own listing without leaving DRIVORA.</p>
        </div>
        <div className="feature-grid">
          <Link href="/inventory" className="feature-card"><span>01</span><h3>Smart Search</h3><p>Filter by brand, body, price, location and more.</p></Link>
          <Link href="/finance" className="feature-card"><span>02</span><h3>Finance Calculator</h3><p>See an estimated monthly payment before you buy.</p></Link>
          <Link href="/sell" className="feature-card"><span>03</span><h3>Sell Your Car</h3><p>Create a listing with your price, photos and vehicle details.</p></Link>
          <Link href="/dashboard" className="feature-card"><span>04</span><h3>Seller Dashboard</h3><p>Manage listings, leads, views and messages in one place.</p></Link>
        </div>
      </section>
    </main>
  );
}
