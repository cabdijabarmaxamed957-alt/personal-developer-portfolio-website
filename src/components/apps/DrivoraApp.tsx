"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  Heart,
  Calendar,
  Gauge,
  Fuel,
  MapPin,
  X,
  Check,
  Calculator,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Car as CarIcon,
} from "lucide-react";
import { cars as defaultCars, Car } from "../../../DRIVORA-NextJS-Car-Marketplace/lib/data";

export default function DrivoraApp() {
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [selectedBody, setSelectedBody] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(75000);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"browse" | "calculator" | "sell">("browse");
  const [favorites, setFavorites] = useState<string[]>(["toyota-land-cruiser-2024"]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [testDriveBooked, setTestDriveBooked] = useState<boolean>(false);

  // Loan Calculator State
  const [calcVehiclePrice, setCalcVehiclePrice] = useState<number>(55000);
  const [calcDownPayment, setCalcDownPayment] = useState<number>(10000);
  const [calcTermMonths, setCalcTermMonths] = useState<number>(48);
  const [calcInterestRate, setCalcInterestRate] = useState<number>(5.5);

  // Calculate monthly payment
  const monthlyPayment = useMemo(() => {
    const principal = Math.max(0, calcVehiclePrice - calcDownPayment);
    const monthlyRate = calcInterestRate / 100 / 12;
    if (monthlyRate === 0) return principal / calcTermMonths;
    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, calcTermMonths)) /
      (Math.pow(1 + monthlyRate, calcTermMonths) - 1);
    return isNaN(payment) ? 0 : Math.round(payment);
  }, [calcVehiclePrice, calcDownPayment, calcTermMonths, calcInterestRate]);

  // Filter cars
  const filteredCars = useMemo(() => {
    return defaultCars.filter((car) => {
      const matchBrand = selectedBrand === "All" || car.brand === selectedBrand;
      const matchBody = selectedBody === "All" || car.body === selectedBody;
      const matchPrice = car.price <= maxPrice;
      const matchSearch =
        searchQuery.trim() === "" ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchBody && matchPrice && matchSearch;
    });
  }, [selectedBrand, selectedBody, maxPrice, searchQuery]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const brands = ["All", "Toyota", "Mercedes-Benz", "BMW", "Lexus", "Audi", "Ford", "Hyundai"];
  const bodyTypes = ["All", "SUV", "Sedan", "Pickup"];

  return (
    <div className="min-h-screen bg-[#060A12] text-slate-100 font-sans selection:bg-[#0066FF] selection:text-white pb-24">
      {/* ── App Navigation Header ── */}
      <header className="sticky top-12 z-40 bg-[#080E1C]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0066FF] to-[#00F0FF] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                <CarIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white">
                  DRIVORA<span className="text-[#00F0FF]">.</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-[#00F0FF] bg-[#0066FF]/20 px-2 py-0.5 rounded border border-[#0066FF]/40">
                  CAR MARKETPLACE
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <button
                onClick={() => setActiveTab("browse")}
                className={`transition-colors cursor-pointer ${
                  activeTab === "browse"
                    ? "text-[#00F0FF] font-bold border-b-2 border-[#00F0FF] pb-0.5"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Browse Inventory
              </button>
              <button
                onClick={() => setActiveTab("calculator")}
                className={`transition-colors cursor-pointer ${
                  activeTab === "calculator"
                    ? "text-[#00F0FF] font-bold border-b-2 border-[#00F0FF] pb-0.5"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Finance Calculator
              </button>
              <button
                onClick={() => setActiveTab("sell")}
                className={`transition-colors cursor-pointer ${
                  activeTab === "sell"
                    ? "text-[#00F0FF] font-bold border-b-2 border-[#00F0FF] pb-0.5"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sell Your Car
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Box */}
            <div className="relative hidden sm:block w-48 lg:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search Land Cruiser, BMW..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0F172A] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#0066FF]"
              />
            </div>

            {/* Saved Vehicles */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A] border border-white/10 text-xs font-mono text-slate-300">
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
              <span>{favorites.length}</span>
              <span className="hidden sm:inline text-slate-500">Saved</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main View Switcher ── */}
      {activeTab === "browse" && (
        <>
          {/* ── Hero Search Spotlight ── */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1528] to-[#060A12] border-b border-white/5 py-12 px-4 sm:px-8">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/50 text-[#00F0FF] text-xs font-mono w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VERIFIED VEHICLE INVENTORY · DIRECT DEALER ACCESS</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                    Find The Vehicle That <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
                      Elevates Your Drive.
                    </span>
                  </h1>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    Experience DRIVORA live. Filter verified luxury SUVs, sedans, and trucks.
                    Click on any vehicle to view full mechanical dossiers and schedule test drives.
                  </p>
                </div>

                {/* Hero Featured Car Card */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setSelectedCar(defaultCars[0])}
                    className="group relative rounded-2xl overflow-hidden bg-[#0A1120] border border-[#0066FF]/40 shadow-2xl cursor-pointer hover:border-[#00F0FF] transition-all"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={defaultCars[0].image}
                        alt="Toyota Land Cruiser"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0066FF] text-white">
                        SPOTLIGHT VEHICLE
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono text-[#00F0FF]">2024 · SUV · Automatic</span>
                        <h4 className="text-base font-bold text-white">Toyota Land Cruiser</h4>
                      </div>
                      <span className="text-base font-mono font-extrabold text-emerald-400">
                        $68,500
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Filter Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {bodyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedBody(type)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedBody === type
                        ? "bg-[#0066FF] text-white shadow-md shadow-blue-900/50"
                        : "bg-[#0A1120] text-slate-300 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {type === "All" ? "All Body Types" : `${type}s`}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ── Inventory with Sidebar Filters ── */}
          <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left: Filter Sidebar */}
              <aside className="lg:col-span-1 flex flex-col gap-6">
                <div className="p-5 rounded-2xl bg-[#080E1C] border border-white/10 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-[#00F0FF]" />
                      <span>Search Filters</span>
                    </h3>
                    <button
                      onClick={() => {
                        setSelectedBrand("All");
                        setSelectedBody("All");
                        setMaxPrice(75000);
                        setSearchQuery("");
                      }}
                      className="text-[11px] text-[#00F0FF] hover:underline cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>

                  {/* Brand Selector */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Manufacturer
                    </label>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-xs text-white focus:outline-none focus:border-[#0066FF]"
                    >
                      {brands.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-slate-400">Max Budget:</span>
                      <span className="text-emerald-400 font-bold">${maxPrice.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={20000}
                      max={75000}
                      step={5000}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-[#0066FF] cursor-pointer"
                    />
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>150-Point Technical Inspection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#00F0FF]" />
                      <span>Verified Title & Service History</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Right: Cars Grid */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Showing <strong className="text-white">{filteredCars.length}</strong> vehicles
                  </span>
                  <span className="text-xs font-mono text-[#00F0FF]">
                    Sorted by: Featured First
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCars.map((car) => {
                    const isFav = favorites.includes(car.id);
                    return (
                      <div
                        key={car.id}
                        className="group relative rounded-2xl bg-[#080E1C] border border-white/10 hover:border-[#0066FF]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[0_10px_25px_rgba(0,102,255,0.2)]"
                      >
                        {/* Vehicle Image Area */}
                        <div className="relative aspect-[16/10] bg-[#0F172A] overflow-hidden">
                          <Image
                            src={car.image}
                            alt={`${car.brand} ${car.model}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1C] via-transparent to-transparent opacity-70" />

                          {/* Year / Body Tag */}
                          <div className="absolute top-3 left-3 flex items-center gap-1.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white bg-[#060A12]/80 backdrop-blur-md border border-white/10">
                              {car.year}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#00F0FF] bg-[#0066FF]/30 backdrop-blur-md border border-[#0066FF]/40">
                              {car.body}
                            </span>
                          </div>

                          {/* Favorite Button */}
                          <button
                            onClick={() => toggleFavorite(car.id)}
                            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                              isFav
                                ? "bg-rose-500 text-white"
                                : "bg-[#060A12]/70 text-slate-400 hover:text-white"
                            }`}
                            title="Save vehicle"
                          >
                            <Heart className="w-3.5 h-3.5 fill-current" />
                          </button>
                        </div>

                        {/* Vehicle Details */}
                        <div className="p-5 flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#0066FF] font-semibold">
                              {car.brand}
                            </span>
                            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#00F0FF]" />
                              {car.location}
                            </span>
                          </div>

                          <h4 className="font-bold text-lg text-white group-hover:text-[#00F0FF] transition-colors">
                            {car.brand} {car.model}
                          </h4>

                          {/* Technical Badges */}
                          <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5 text-[11px] font-mono text-slate-300">
                            <div className="flex items-center gap-1.5">
                              <Gauge className="w-3.5 h-3.5 text-[#00F0FF]" />
                              <span>{car.mileage.toLocaleString()} km</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Fuel className="w-3.5 h-3.5 text-[#38BDF8]" />
                              <span>{car.fuel}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-purple-400" />
                              <span>{car.transmission}</span>
                            </div>
                          </div>

                          {/* Price & Action */}
                          <div className="flex items-center justify-between pt-1">
                            <div>
                              <span className="text-[10px] text-slate-400 block font-mono">
                                CASH PRICE
                              </span>
                              <span className="text-xl font-extrabold text-white font-mono">
                                ${car.price.toLocaleString()}
                              </span>
                            </div>

                            <button
                              onClick={() => {
                                setSelectedCar(car);
                                setTestDriveBooked(false);
                              }}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052cc] hover:from-[#0052cc] hover:to-[#00F0FF] text-white text-xs font-bold font-mono transition-all flex items-center gap-1 cursor-pointer shadow-md shadow-blue-900/40"
                            >
                              <span>Inspect Specs</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </>
      )}

      {/* ── Tab 2: Finance Calculator ── */}
      {activeTab === "calculator" && (
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="p-8 rounded-3xl bg-[#080E1C] border border-[#0066FF]/30 shadow-2xl flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/50 flex items-center justify-center text-[#00F0FF]">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Automotive Loan Calculator</h2>
                <p className="text-xs text-slate-400 font-mono">
                  Estimate your monthly repayments based on current dealership financing terms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sliders */}
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Vehicle Price:</span>
                    <span className="text-white font-bold">${calcVehiclePrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={15000}
                    max={120000}
                    step={2500}
                    value={calcVehiclePrice}
                    onChange={(e) => setCalcVehiclePrice(Number(e.target.value))}
                    className="w-full accent-[#0066FF] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Down Payment:</span>
                    <span className="text-emerald-400 font-bold">
                      ${calcDownPayment.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={calcVehiclePrice * 0.8}
                    step={1000}
                    value={calcDownPayment}
                    onChange={(e) => setCalcDownPayment(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Loan Term:</span>
                    <span className="text-white font-bold">{calcTermMonths} Months</span>
                  </div>
                  <div className="flex gap-2">
                    {[24, 36, 48, 60, 72].map((m) => (
                      <button
                        key={m}
                        onClick={() => setCalcTermMonths(m)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                          calcTermMonths === m
                            ? "bg-[#0066FF] text-white font-bold"
                            : "bg-[#0F172A] text-slate-300 border border-white/10"
                        }`}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Interest Rate (APR):</span>
                    <span className="text-[#00F0FF] font-bold">{calcInterestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={2.0}
                    max={12.0}
                    step={0.25}
                    value={calcInterestRate}
                    onChange={(e) => setCalcInterestRate(Number(e.target.value))}
                    className="w-full accent-[#00F0FF] cursor-pointer"
                  />
                </div>
              </div>

              {/* Monthly Payment Summary Box */}
              <div className="p-6 rounded-2xl bg-[#060A12] border border-[#0066FF]/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400">ESTIMATED REPAYMENT</span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#00F0FF] font-mono mt-2">
                    ${monthlyPayment}
                    <span className="text-xs text-slate-400 font-sans font-normal ml-1">/ month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed font-mono">
                    Based on a total financed amount of ${(calcVehiclePrice - calcDownPayment).toLocaleString()} over {calcTermMonths} months at {calcInterestRate}% APR.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab("browse")}
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-white font-bold text-xs font-mono uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-blue-900/50"
                >
                  Apply To Vehicle Inventory
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Tab 3: Sell Your Car ── */}
      {activeTab === "sell" && (
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="p-8 rounded-3xl bg-[#080E1C] border border-white/10 shadow-2xl flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-[#00F0FF]">PUBLISH LISTING</span>
              <h2 className="text-2xl font-bold text-white mt-1">List Your Vehicle on DRIVORA</h2>
              <p className="text-xs text-slate-400 mt-1">
                Reach thousands of verified automotive buyers with instant valuation.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-xs font-mono">
              <div>
                <label className="text-slate-300 block mb-1">Make & Model</label>
                <input
                  type="text"
                  placeholder="e.g. 2023 Porsche Taycan 4S"
                  className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 block mb-1">Asking Price ($)</label>
                  <input
                    type="number"
                    placeholder="e.g. 45000"
                    className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Mileage (km)</label>
                  <input
                    type="number"
                    placeholder="e.g. 22000"
                    className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Vehicle Description & History</label>
                <textarea
                  rows={3}
                  placeholder="Mention package options, service records, and warranty status..."
                  className="w-full px-3 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <button
                onClick={() => {
                  alert("Listing simulated successfully! In production, this persists to PostgreSQL database via Prisma ORM.");
                  setActiveTab("browse");
                }}
                className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-white font-bold text-xs font-mono uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-blue-900/50"
              >
                Submit Vehicle For Verification
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Vehicle Inspection & Test Drive Modal ── */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-2xl w-full rounded-2xl bg-[#080E1C] border border-[#0066FF]/50 p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
              <Image
                src={selectedCar.image}
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00F0FF]">
                    {selectedCar.year} · {selectedCar.body}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCar.brand} {selectedCar.model}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-slate-400 block">PRICE</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    ${selectedCar.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {selectedCar.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-[#0F172A]">
                  <span className="text-slate-500 block text-[10px]">MILEAGE</span>
                  <span className="text-white font-bold">{selectedCar.mileage} km</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0F172A]">
                  <span className="text-slate-500 block text-[10px]">FUEL TYPE</span>
                  <span className="text-white font-bold">{selectedCar.fuel}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0F172A]">
                  <span className="text-slate-500 block text-[10px]">TRANSMISSION</span>
                  <span className="text-white font-bold">{selectedCar.transmission}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0F172A]">
                  <span className="text-slate-500 block text-[10px]">COLOR</span>
                  <span className="text-white font-bold">{selectedCar.color}</span>
                </div>
              </div>
            </div>

            {/* Test Drive Scheduling Form */}
            <div className="p-4 rounded-xl bg-[#060A12] border border-white/10 flex flex-col gap-3">
              <h5 className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-bold">
                Book A Private Test Drive
              </h5>

              {!testDriveBooked ? (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <input
                      type="text"
                      placeholder="Your Name (Demo)"
                      defaultValue="Jordan Miller"
                      className="px-3 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Preferred Date"
                      defaultValue="Tomorrow, 2:00 PM"
                      className="px-3 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => setTestDriveBooked(true)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-white font-bold text-xs font-mono uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                  >
                    Confirm Test Drive Appointment
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 py-1">
                  <Check className="w-4 h-4" />
                  <span>Test drive scheduled! Dealership notified via SMS gateway simulation.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
