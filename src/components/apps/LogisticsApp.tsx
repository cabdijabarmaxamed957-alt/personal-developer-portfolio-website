"use client";

import React, { useState } from "react";
import {
  Truck,
  Package,
  MapPin,
  Navigation,
  BatteryCharging,
  Fuel,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Boxes,
  Plus,
  Minus,
  RefreshCw,
  Search,
} from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  driver: string;
  location: string;
  destination: string;
  speed: number;
  battery: number;
  status: "In Transit" | "Loading" | "Delivered";
  cargo: string;
}

interface InventoryItem {
  sku: string;
  name: string;
  quantity: number;
  threshold: number;
  bay: string;
}

export default function LogisticsApp() {
  const [activeTab, setActiveTab] = useState<"fleet" | "inventory">("fleet");

  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "VEH-101",
      name: "Semi-Truck Apex Alpha",
      driver: "Robert Lang",
      location: "Interstate 80 East, Mile 142",
      destination: "Chicago Logistics Hub 4",
      speed: 68,
      battery: 82,
      status: "In Transit",
      cargo: "Industrial Electronics (18,400 lbs)",
    },
    {
      id: "VEH-102",
      name: "EV Van Sprinter Beta",
      driver: "Elena Gomez",
      location: "San Jose Distribution Depot",
      destination: "San Francisco Delivery Route",
      speed: 34,
      battery: 94,
      status: "In Transit",
      cargo: "E-Commerce Priority Parcels (42 pkgs)",
    },
    {
      id: "VEH-103",
      name: "Heavy Hauler Gamma",
      driver: "David Miller",
      location: "Dallas Freight Terminal",
      destination: "Austin Semiconductor Fab",
      speed: 0,
      battery: 100,
      status: "Loading",
      cargo: "Cleanroom Equipment Assemblies",
    },
  ]);

  const [inventory, setInventory] = useState<InventoryItem[]>([
    { sku: "SKU-9941", name: "High-Density Li-Ion Battery Packs", quantity: 340, threshold: 100, bay: "Bay A-14" },
    { sku: "SKU-8820", name: "Fiber Optic Transceiver Modules (100G)", quantity: 78, threshold: 80, bay: "Bay B-03" },
    { sku: "SKU-7712", name: "Brushless DC Servomotors (48V)", quantity: 185, threshold: 50, bay: "Bay C-09" },
    { sku: "SKU-6604", name: "Microcontroller Board MCU-v3", quantity: 620, threshold: 200, bay: "Bay A-02" },
  ]);

  const updateInventory = (sku: string, delta: number) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.sku === sku
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#07090F] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#0B0F1A]/90 backdrop-blur sticky top-12 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 p-[1px] flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <div className="w-full h-full bg-[#0B0F1A] rounded-xl flex items-center justify-center text-amber-400">
              <Truck className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">Apex Logistics & ERP Core</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Live GPS Telemetry
              </span>
            </div>
            <p className="text-xs text-slate-400">Fleet Operations, Real-Time Dispatch & Warehouse Inventory ERP</p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1 text-xs font-medium">
          <button
            onClick={() => setActiveTab("fleet")}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg transition-colors ${
              activeTab === "fleet" ? "bg-amber-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Fleet Radar</span>
          </button>
          <button
            onClick={() => setActiveTab("inventory")}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg transition-colors ${
              activeTab === "inventory" ? "bg-amber-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Warehouse ERP</span>
          </button>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 p-6 max-w-[1600px] w-full mx-auto flex flex-col gap-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#0E1322] border border-slate-800 flex flex-col gap-1">
            <span className="text-xs text-slate-400">Active Trucks En Route</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">42 Vehicles</span>
              <span className="text-xs text-emerald-400 font-mono">100% On-Route</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">Avg Speed: 62.4 MPH</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E1322] border border-slate-800 flex flex-col gap-1">
            <span className="text-xs text-slate-400">On-Time Delivery Rate</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-amber-400">99.4%</span>
              <span className="text-xs text-emerald-400 font-mono">+0.8% MoM</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">1,840 Shipments this week</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E1322] border border-slate-800 flex flex-col gap-1">
            <span className="text-xs text-slate-400">Warehouse Utilization</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white">78.2%</span>
              <span className="text-xs text-slate-400">3 Hubs</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">Free pallet slots: 1,420</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E1322] border border-slate-800 flex flex-col gap-1">
            <span className="text-xs text-slate-400">Low Stock SKUs</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold text-rose-400">1 SKU</span>
              <span className="text-xs text-rose-400 font-mono">Restock Triggered</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">Auto-PO sent to supplier</span>
          </div>
        </div>

        {/* TAB 1: Live Fleet Tracking Radar */}
        {activeTab === "fleet" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Interactive Simulated GPS Map (8 Cols) */}
            <div className="lg:col-span-8 p-6 rounded-3xl bg-[#0B0F1A] border border-slate-800 flex flex-col gap-4 relative overflow-hidden min-h-[480px]">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 relative z-10">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Interactive Geospatial Telemetry Map
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Satellite Lock: Galileo 12
                </span>
              </div>

              {/* Radar Graphic Map */}
              <div className="flex-1 rounded-2xl bg-[#060810] border border-slate-800/80 relative overflow-hidden flex items-center justify-center p-6">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Radar Sweep Circle */}
                <div className="w-96 h-96 rounded-full border border-amber-500/20 absolute flex items-center justify-center animate-spin duration-[10000ms]">
                  <div className="w-64 h-64 rounded-full border border-amber-500/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-amber-500/20" />
                  </div>
                </div>

                {/* Vehicle Pins */}
                <div className="relative z-10 w-full max-w-lg flex flex-col gap-4">
                  {vehicles.map((v) => (
                    <div
                      key={v.id}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/40 backdrop-blur-md flex items-center justify-between shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                          <Truck className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white">{v.name}</span>
                          <span className="text-[10px] text-slate-400 block">{v.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-xs">
                        <span className="text-amber-400 font-bold">{v.speed} MPH</span>
                        <span className="text-emerald-400 flex items-center gap-0.5">
                          <BatteryCharging className="w-3 h-3" /> {v.battery}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Dispatch Queue (4 Cols) */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0B0F1A] border border-slate-800 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-white">Active Cargo Manifests</h3>
              <div className="flex flex-col gap-3">
                {vehicles.map((v) => (
                  <div
                    key={v.id}
                    className="p-4 rounded-2xl bg-[#060912] border border-slate-800/80 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-400">{v.id}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                        {v.status}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-white">{v.cargo}</span>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>To: {v.destination}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Driver: {v.driver}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Warehouse Inventory ERP */}
        {activeTab === "inventory" && (
          <div className="p-6 rounded-3xl bg-[#0B0F1A] border border-slate-800 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <h3 className="text-base font-bold text-white">Central Warehouse Inventory ERP</h3>
                <p className="text-xs text-slate-400">Real-time stock reservation, low-threshold alarms & pallet routing</p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-950/40 px-3 py-1 rounded-xl border border-amber-800/40">
                4 Active SKUs Tracked
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="text-[11px] uppercase font-mono text-slate-500 border-b border-slate-800">
                  <tr>
                    <th className="pb-3">SKU ID</th>
                    <th className="pb-3">Product Description</th>
                    <th className="pb-3">Warehouse Bay</th>
                    <th className="pb-3">Units in Stock</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Quick Stock Adjustment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {inventory.map((item) => {
                    const isLow = item.quantity <= item.threshold;
                    return (
                      <tr key={item.sku} className="hover:bg-slate-900/30 transition-colors">
                        <td className="py-4 font-mono font-bold text-amber-400">{item.sku}</td>
                        <td className="py-4 text-white font-medium">{item.name}</td>
                        <td className="py-4 font-mono text-slate-400">{item.bay}</td>
                        <td className="py-4 font-mono font-bold text-sm text-white">{item.quantity} units</td>
                        <td className="py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold ${
                              isLow
                                ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            }`}
                          >
                            {isLow ? "Low Stock Alert" : "Optimal Stock"}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <div className="inline-flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                            <button
                              onClick={() => updateInventory(item.sku, -10)}
                              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                              title="Dispatch 10 units"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono text-[11px] px-2 text-slate-400">Adjust</span>
                            <button
                              onClick={() => updateInventory(item.sku, 50)}
                              className="p-1 rounded-lg bg-amber-600/30 hover:bg-amber-600 text-amber-300 hover:text-white transition-colors"
                              title="Receive 50 units"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
