"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Calendar,
  X,
  Check,
  Sparkles,
  Home as HomeIcon,
  Compass,
  DollarSign,
} from "lucide-react";

interface Property {
  id: string;
  title: string;
  type: "Villa" | "Mansion" | "Penthouse" | "Apartment";
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  amenities: string[];
  lat: number;
  lng: number;
  description: string;
}

const mockProperties: Property[] = [
  {
    id: "prop-1",
    title: "Aura Oceanfront Minimalist Villa",
    type: "Villa",
    price: 6450000,
    location: "Malibu, California",
    beds: 4,
    baths: 4.5,
    sqft: 5200,
    image: "/images/projects/home-platform.jpg",
    amenities: ["Infinity Pool", "Ocean View", "Private Spa", "Smart Home"],
    lat: 34.0259,
    lng: -118.7798,
    description: "Architectural masterpiece designed with raw concrete, floor-to-ceiling glass pavilions, and panoramic Pacific Ocean vistas.",
  },
  {
    id: "prop-2",
    title: "The Glass Pavilion Residence",
    type: "Villa",
    price: 4900000,
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 6,
    sqft: 6100,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Nestled in secluded hills with an expansive olive grove, cantilevered outdoor dining decks, and subterranean wine cellar.",
    amenities: ["Infinity Pool", "Wine Cellar", "Private Elevator"],
    lat: 34.0736,
    lng: -118.4004,
  },
  {
    id: "prop-3",
    title: "Skyline Horizon Penthouse",
    type: "Penthouse",
    price: 3850000,
    location: "Miami Beach, Florida",
    beds: 3,
    baths: 3.5,
    sqft: 3800,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Duplex penthouse featuring wrap-around terrace, private rooftop plunge pool, and unobstructed Biscayne Bay skyline views.",
    amenities: ["Rooftop Pool", "Ocean View", "Concierge 24/7"],
    lat: 25.7907,
    lng: -80.13,
  },
  {
    id: "prop-4",
    title: "Serenade Modern Family Compound",
    type: "Mansion",
    price: 5200000,
    location: "Aspen, Colorado",
    beds: 6,
    baths: 7,
    sqft: 7500,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "Alpine luxury compound featuring radiant heated limestone floors, dual master suites, ski-in/ski-out access, and private spa sanctuary.",
    amenities: ["Ski Access", "Private Spa", "Home Cinema"],
    lat: 39.1911,
    lng: -106.8175,
  },
  {
    id: "prop-5",
    title: "Neo-Classic Urban Loft",
    type: "Apartment",
    price: 1850000,
    location: "Tribeca, New York",
    beds: 2,
    baths: 2,
    sqft: 2100,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Historic cast-iron building loft featuring 14ft timber beam ceilings, oversized arched windows, and bespoke Italian marble kitchen.",
    amenities: ["Elevator", "Doorman", "Storage Unit"],
    lat: 40.7163,
    lng: -74.0086,
  },
  {
    id: "prop-6",
    title: "Elysium Desert Oasis Villa",
    type: "Villa",
    price: 3200000,
    location: "Scottsdale, Arizona",
    beds: 4,
    baths: 4,
    sqft: 4600,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    description: "Desert modernism blending rammed earth walls, zero-edge reflection pools, and seamless indoor-outdoor living courtyards.",
    amenities: ["Infinity Pool", "Desert Views", "Fire Pit"],
    lat: 33.4942,
    lng: -111.9261,
  },
];

export default function HomeApp() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [minBeds, setMinBeds] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePin, setActivePin] = useState<string>("prop-1");
  const [favorites, setFavorites] = useState<string[]>(["prop-1", "prop-3"]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [viewingBooked, setViewingBooked] = useState<boolean>(false);
  const [mapOpen, setMapOpen] = useState<boolean>(true);

  // Filter properties
  const filteredProperties = useMemo(() => {
    return mockProperties.filter((p) => {
      const matchType = selectedType === "All" || p.type === selectedType;
      const matchBeds = minBeds === 0 || p.beds >= minBeds;
      const matchSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchBeds && matchSearch;
    });
  }, [selectedType, minBeds, searchQuery]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const types = ["All", "Villa", "Mansion", "Penthouse", "Apartment"];

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100 font-sans selection:bg-[#2563eb] selection:text-white pb-24">
      {/* ── App Navigation Header ── */}
      <header className="sticky top-12 z-40 bg-[#070F22]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2563eb] to-[#00F0FF] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <HomeIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white">
                  HABITARA<span className="text-[#00F0FF]">.</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-[#00F0FF] bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                  REAL ESTATE PLATFORM
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`transition-colors cursor-pointer ${
                    selectedType === t
                      ? "text-[#00F0FF] font-bold border-b-2 border-[#00F0FF] pb-0.5"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t === "All" ? "All Properties" : `${t}s`}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Map toggle */}
            <button
              onClick={() => setMapOpen(!mapOpen)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ${
                mapOpen
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#0E1A38] text-slate-300 border border-white/10"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Map View: {mapOpen ? "ON" : "OFF"}</span>
            </button>

            {/* Saved list */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1A38] border border-white/10 text-xs font-mono text-slate-300">
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
              <span>{favorites.length}</span>
              <span className="hidden sm:inline text-slate-500">Saved</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero Search Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1736] to-[#050914] border-b border-white/5 py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/50 text-[#00F0FF] text-xs font-mono w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL RESIDENCES & LUXURY ESTATES</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Discover Places Worth <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#00F0FF]">
                  Calling Home.
                </span>
              </h1>
              <p className="text-slate-300 text-sm mt-2 max-w-xl">
                Explore luxury properties with synchronized interactive maps, faceted filters, and
                direct private viewing scheduling.
              </p>
            </div>

            {/* Quick Search Box */}
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Malibu, Aspen, Miami..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0E1A38] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              {/* Bedrooms selector */}
              <select
                value={minBeds}
                onChange={(e) => setMinBeds(Number(e.target.value))}
                className="px-3 py-2 rounded-xl bg-[#0E1A38] border border-white/10 text-xs font-mono text-white focus:outline-none cursor-pointer"
              >
                <option value={0}>Any Beds</option>
                <option value={2}>2+ Beds</option>
                <option value={3}>3+ Beds</option>
                <option value={4}>4+ Beds</option>
                <option value={5}>5+ Beds</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Split View: Map + Properties Grid ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className={`grid grid-cols-1 ${mapOpen ? "lg:grid-cols-12" : ""} gap-8`}>
          {/* Properties Grid Column */}
          <div className={mapOpen ? "lg:col-span-7 flex flex-col gap-6" : "w-full flex flex-col gap-6"}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Showing <strong className="text-white">{filteredProperties.length}</strong> luxury residences
              </span>
              <span className="text-xs font-mono text-[#00F0FF]">
                Type: {selectedType}
              </span>
            </div>

            <div className={`grid grid-cols-1 ${mapOpen ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"} gap-6`}>
              {filteredProperties.map((prop) => {
                const isFav = favorites.includes(prop.id);
                const isActive = activePin === prop.id;
                return (
                  <div
                    key={prop.id}
                    onMouseEnter={() => setActivePin(prop.id)}
                    className={`group relative rounded-2xl bg-[#070F22] border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg cursor-pointer ${
                      isActive
                        ? "border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.25)]"
                        : "border-white/10 hover:border-[#2563eb]"
                    }`}
                  >
                    {/* Property Image */}
                    <div className="relative aspect-[16/11] bg-[#0E1A38] overflow-hidden">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070F22] via-transparent to-transparent opacity-70" />

                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#050914]/80 text-[#00F0FF] backdrop-blur-md border border-[#00F0FF]/30">
                          {prop.type}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(prop.id);
                        }}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          isFav
                            ? "bg-rose-500 text-white"
                            : "bg-[#050914]/70 text-slate-400 hover:text-white"
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5 fill-current" />
                      </button>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                        <span className="text-lg font-extrabold text-white">
                          ${(prop.price / 1000000).toFixed(2)}M
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4 flex flex-col gap-2.5">
                      <h4 className="font-bold text-sm text-white group-hover:text-[#00F0FF] transition-colors truncate">
                        {prop.title}
                      </h4>

                      <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                        <span className="truncate">{prop.location}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-1 py-2 border-y border-white/5 text-[11px] font-mono text-slate-300">
                        <div className="flex items-center gap-1">
                          <BedDouble className="w-3.5 h-3.5 text-[#00F0FF]" />
                          <span>{prop.beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-blue-400" />
                          <span>{prop.baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>{prop.sqft} sqft</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedProperty(prop);
                          setViewingBooked(false);
                        }}
                        className="mt-1 w-full py-2 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold font-mono transition-all cursor-pointer shadow-md shadow-blue-950/50"
                      >
                        Schedule Private Viewing
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simulated Interactive Map Column */}
          {mapOpen && (
            <div className="lg:col-span-5 relative sticky top-28 h-[650px] rounded-3xl bg-[#080E1C] border border-[#2563eb]/40 overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
              {/* Fake Map Grid & Pins */}
              <div className="absolute inset-0 bg-[#060B18] opacity-90 overflow-hidden">
                {/* SVG Map Lines */}
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563eb" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapgrid)" />
                </svg>

                {/* Simulated Coastline */}
                <div className="absolute top-0 right-0 w-2/3 h-full border-l-2 border-dashed border-[#00F0FF]/30 pointer-events-none" />
              </div>

              {/* Top Map Status Bar */}
              <div className="relative z-10 p-3 rounded-xl bg-[#070F22]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#00F0FF]">
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span>Interactive Geospatial Explorer</span>
                </div>
                <span className="text-slate-400">{filteredProperties.length} Pins Active</span>
              </div>

              {/* Pins Placed Over Map */}
              <div className="relative z-10 flex-1 my-6 relative">
                {mockProperties.map((p, idx) => {
                  const isActive = activePin === p.id;
                  // Dynamic positions for demonstration
                  const positions = [
                    { top: "25%", left: "30%" },
                    { top: "45%", left: "55%" },
                    { top: "70%", left: "40%" },
                    { top: "35%", left: "75%" },
                    { top: "60%", left: "20%" },
                    { top: "80%", left: "65%" },
                  ];
                  const pos = positions[idx % positions.length];

                  return (
                    <div
                      key={p.id}
                      style={{ top: pos.top, left: pos.left }}
                      onClick={() => {
                        setActivePin(p.id);
                        setSelectedProperty(p);
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
                    >
                      <div
                        className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1 shadow-lg transition-all ${
                          isActive
                            ? "bg-[#00F0FF] text-black scale-110 shadow-[0_0_15px_#00F0FF]"
                            : "bg-[#2563eb] text-white hover:scale-105"
                        }`}
                      >
                        <MapPin className="w-3 h-3" />
                        <span>${(p.price / 1000000).toFixed(1)}M</span>
                      </div>
                      <span className="text-[10px] font-mono text-white opacity-0 group-hover/pin:opacity-100 transition-opacity bg-black/80 px-2 py-0.5 rounded absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                        {p.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Active Pin Preview Card */}
              {activePin && (
                <div className="relative z-10 p-3.5 rounded-xl bg-[#070F22]/95 backdrop-blur-md border border-[#00F0FF]/40 flex items-center justify-between gap-3">
                  {(() => {
                    const current = mockProperties.find((p) => p.id === activePin);
                    if (!current) return null;
                    return (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                            <Image src={current.image} alt={current.title} fill className="object-cover" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#00F0FF]">{current.location}</span>
                            <h5 className="text-xs font-bold text-white truncate max-w-[160px]">
                              {current.title}
                            </h5>
                            <span className="text-xs font-mono font-bold text-emerald-400">
                              ${current.price.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedProperty(current)}
                          className="px-3 py-1.5 rounded-lg bg-[#2563eb] text-white text-xs font-mono font-bold hover:bg-[#1d4ed8] cursor-pointer"
                        >
                          View Dossier
                        </button>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* ── Property Dossier & Viewing Modal ── */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-2xl w-full rounded-2xl bg-[#070F22] border border-[#2563eb]/50 p-6 sm:p-8 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
              <Image
                src={selectedProperty.image}
                alt={selectedProperty.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00F0FF]">{selectedProperty.location}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedProperty.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-slate-400 block">ASKING PRICE</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    ${selectedProperty.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {selectedProperty.description}
              </p>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                {selectedProperty.amenities.map((a) => (
                  <span
                    key={a}
                    className="px-2.5 py-1 rounded-lg bg-[#0E1A38] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    ✓ {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Viewing Booking Form */}
            <div className="p-4 rounded-xl bg-[#050914] border border-white/10 flex flex-col gap-3">
              <h5 className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-bold">
                Schedule Private Architectural Tour
              </h5>

              {!viewingBooked ? (
                <div className="flex flex-col gap-2 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Visitor Name"
                      defaultValue="Morgan Blake"
                      className="px-3 py-2 rounded-lg bg-[#0E1A38] border border-white/10 text-white focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Preferred Date & Time"
                      defaultValue="Friday, 11:00 AM"
                      className="px-3 py-2 rounded-lg bg-[#0E1A38] border border-white/10 text-white focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => setViewingBooked(true)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#00F0FF] text-white font-bold text-xs font-mono uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                  >
                    Confirm Private Viewing
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 py-1">
                  <Check className="w-4 h-4" />
                  <span>Viewing requested! Listing agent calendar invite dispatched successfully.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
