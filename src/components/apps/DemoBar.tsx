"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";
import { projectsData } from "@/data/projects";

interface DemoBarProps {
  currentSlug: string;
  projectName: string;
}

export default function DemoBar({ currentSlug, projectName }: DemoBarProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-[#080D16]/95 backdrop-blur-md border-b border-[#0066FF]/30 shadow-xl px-4 py-3 flex items-center justify-between gap-4 font-mono text-xs text-white">
      {/* Left: Back to Portfolio & Current App Info */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
        <Link
          href={`/projects/${currentSlug}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#05070B] border border-slate-700 hover:border-[#00F0FF] text-slate-300 hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>Exit to Portfolio</span>
        </Link>

        <span className="hidden sm:inline text-slate-700">|</span>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-400 hidden sm:inline">LIVE DEMO:</span>
          <span className="text-[#00F0FF] font-bold">{projectName}</span>
        </div>
      </div>

      {/* Right: Quick Project Switcher & Case Study Link */}
      <div className="flex items-center gap-3 relative">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1220] border border-slate-700 hover:border-[#0066FF] text-slate-300 text-xs transition-colors"
          >
            <Sparkles className="w-3 h-3 text-[#0066FF]" />
            <span className="hidden sm:inline">Switch Demo</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#080D16] border border-[#0066FF]/40 shadow-2xl p-2 z-50 flex flex-col gap-1">
              <span className="px-3 py-1 text-[10px] text-slate-400 uppercase tracking-wider">
                Explore Other Live Apps
              </span>
              {projectsData.map((p) => (
                <Link
                  key={p.slug}
                  href={`/apps/${p.slug}`}
                  onClick={() => setDropdownOpen(false)}
                  className={`px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                    p.slug === currentSlug
                      ? "bg-[#0066FF]/20 text-[#00F0FF] font-semibold"
                      : "text-slate-300 hover:bg-[#0B1220] hover:text-white"
                  }`}
                >
                  <span className="truncate">{p.title.split("—")[0]}</span>
                  {p.slug === currentSlug && <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href={`/projects/${currentSlug}`}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-white font-semibold hover:opacity-90 transition-opacity shadow-[0_0_12px_rgba(0,102,255,0.4)]"
        >
          <span>Case Study</span>
        </Link>
      </div>
    </div>
  );
}
