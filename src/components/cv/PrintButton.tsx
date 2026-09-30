"use client";

import React from "react";
import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-4 py-2 rounded-xl bg-[#0B1220] border border-slate-700 hover:border-white text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
    >
      <Printer className="w-3.5 h-3.5" />
      <span>Print / Save PDF</span>
    </button>
  );
}
