"use client";

import { useState } from "react";

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="page"><div className="container">
        <div className="success-box">
          <div className="success-icon">✓</div>
          <span className="pill">LISTING RECEIVED</span>
          <h1>Your vehicle is ready for review.</h1>
          <p>This demo form has saved your submission locally. In production, connect this page to your backend/database for real listings.</p>
          <button className="primary-button" onClick={() => setSubmitted(false)}>List Another Vehicle</button>
        </div>
      </div></main>
    );
  }

  return (
    <main className="page"><div className="container narrow">
      <div className="page-heading"><span className="pill">SELL YOUR CAR</span><h1>Turn your vehicle into a listing.</h1><p>Enter the details below. The production version can connect this form to your inventory database and image storage.</p></div>
      <form className="sell-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="form-section"><h3>Vehicle information</h3><div className="form-grid">
          <label>Brand<input required placeholder="Toyota" /></label>
          <label>Model<input required placeholder="Land Cruiser" /></label>
          <label>Year<input required type="number" placeholder="2024" /></label>
          <label>Price (USD)<input required type="number" placeholder="45000" /></label>
          <label>Mileage (km)<input required type="number" placeholder="25000" /></label>
          <label>Location<input required placeholder="Hargeisa" /></label>
          <label>Body type<select defaultValue=""><option value="" disabled>Select body</option><option>SUV</option><option>Sedan</option><option>Pickup</option><option>Coupe</option><option>Van</option></select></label>
          <label>Fuel<select defaultValue=""><option value="" disabled>Select fuel</option><option>Petrol</option><option>Diesel</option><option>Hybrid</option><option>Electric</option></select></label>
        </div></div>
        <div className="form-section"><h3>Contact</h3><div className="form-grid">
          <label>Your name<input required placeholder="Full name" /></label>
          <label>Phone number<input required placeholder="+252 ..." /></label>
          <label className="full">Description<textarea rows={5} placeholder="Tell buyers about the vehicle..." /></label>
        </div></div>
        <div className="form-section"><h3>Vehicle photos</h3><label className="upload-box"><span>＋</span><strong>Choose photos</strong><small>JPG or PNG · up to 10 photos</small><input type="file" accept="image/*" multiple /></label></div>
        <button className="primary-button full-button" type="submit">Submit Vehicle Listing →</button>
      </form>
    </div></main>
  );
}
