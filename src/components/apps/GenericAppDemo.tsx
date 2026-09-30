"use client";

import React, { useState } from "react";
import {
  Activity,
  Cpu,
  Layers,
  ShieldCheck,
  Server,
  Terminal,
  Play,
  RotateCw,
  Sliders,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Project } from "@/types/portfolio";

interface GenericAppDemoProps {
  project: Project;
}

export default function GenericAppDemo({ project }: GenericAppDemoProps) {
  const [activeTab, setActiveTab] = useState<"metrics" | "architecture" | "logs">("metrics");
  const [runningSimulation, setRunningSimulation] = useState<boolean>(true);
  const [throughput, setThroughput] = useState<number>(1420);
  const [logs, setLogs] = useState<string[]>([
    `[INFO] ${project.title.split("—")[0]} cluster initialized successfully.`,
    "[OK] Ingestion pipeline established over secure TLS 1.3 socket.",
    "[STATUS] Telemetry polling rate set to 500ms sliding window.",
    "[HEALTH] All 6 microservice worker nodes responding under 24ms.",
  ]);

  const triggerEvent = () => {
    setThroughput((prev) => prev + Math.floor(Math.random() * 200 - 80));
    setLogs((prev) => [
      `[SIMULATION] Workload dispatched at ${new Date().toLocaleTimeString()} — payload processed.`,
      ...prev.slice(0, 8),
    ]);
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-mono text-xs pb-24">
      {/* App Header */}
      <div className="bg-[#080D16] border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/50 flex items-center justify-center text-[#00F0FF]">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white font-sans">{project.title}</h1>
            <span className="text-[11px] text-slate-400">
              {project.category} · Environment: Production Simulation
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setRunningSimulation(!runningSimulation)}
            className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 cursor-pointer ${
              runningSimulation
                ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-400"
                : "bg-amber-950/60 border-amber-500/40 text-amber-400"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                runningSimulation ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
              }`}
            />
            <span>{runningSimulation ? "ENGINE RUNNING" : "PAUSED"}</span>
          </button>

          <button
            onClick={triggerEvent}
            className="px-3 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white flex items-center gap-1.5 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Send Test Load</span>
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
        {/* Navigation Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-3">
          <button
            onClick={() => setActiveTab("metrics")}
            className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === "metrics" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Telemetry & Metrics
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === "architecture"
                ? "bg-[#0066FF] text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            System Blueprint
          </button>
          <button
            onClick={() => setActiveTab("logs")}
            className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === "logs" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Live Terminal Stream
          </button>
        </div>

        {/* Tab 1: Live Metrics */}
        {activeTab === "metrics" && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-[#080D16] border border-white/10">
                <span className="text-slate-400 block text-[10px]">CURRENT THROUGHPUT</span>
                <span className="text-2xl font-bold text-[#00F0FF] mt-1 block">
                  {throughput.toLocaleString()} req/s
                </span>
                <span className="text-[10px] text-emerald-400 mt-1 block">▲ 99.98% Healthy</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080D16] border border-white/10">
                <span className="text-slate-400 block text-[10px]">MEDIAN LATENCY</span>
                <span className="text-2xl font-bold text-white mt-1 block">18.4 ms</span>
                <span className="text-[10px] text-slate-400 mt-1 block">p99: 42.1ms</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080D16] border border-white/10">
                <span className="text-slate-400 block text-[10px]">CPU CORE USAGE</span>
                <span className="text-2xl font-bold text-purple-400 mt-1 block">34.2 %</span>
                <span className="text-[10px] text-slate-400 mt-1 block">Across 8 Pods</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#080D16] border border-white/10">
                <span className="text-slate-400 block text-[10px]">ERROR RATE</span>
                <span className="text-2xl font-bold text-emerald-400 mt-1 block">0.002 %</span>
                <span className="text-[10px] text-slate-400 mt-1 block">Zero Fatal Panics</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-6 rounded-2xl bg-[#080D16] border border-white/10 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-white font-sans">Active System Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#05070B] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span className="text-slate-300 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Architecture Blueprint */}
        {activeTab === "architecture" && (
          <div className="p-6 rounded-2xl bg-[#080D16] border border-white/10 flex flex-col gap-6">
            <h3 className="text-sm font-bold text-white font-sans">Architectural Components</h3>
            <p className="text-slate-300 leading-relaxed">{project.architecture?.overview}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.architecture?.components.map((comp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#05070B] border border-[#0066FF]/30">
                  <span className="text-[#00F0FF] font-bold block mb-1">0{idx + 1} // {comp.name}</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Terminal Logs */}
        {activeTab === "logs" && (
          <div className="p-5 rounded-2xl bg-black border border-white/10 font-mono text-xs flex flex-col gap-2 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00F0FF]" />
                <span>Live Event Stream (stdout/stderr)</span>
              </div>
              <span className="text-[10px] text-emerald-400">● Streaming Real-Time</span>
            </div>
            <div className="flex flex-col gap-1.5 pt-2">
              {logs.map((log, idx) => (
                <div key={idx} className="text-slate-300 leading-relaxed font-mono">
                  <span className="text-[#00F0FF] mr-2">&gt;</span>
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
