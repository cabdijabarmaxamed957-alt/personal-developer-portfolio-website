"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APPLICATION_ERROR_BOUNDARY]:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-[#080D16] border border-red-500/40 shadow-2xl flex flex-col items-center text-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#05070B] border border-red-500/60 flex items-center justify-center text-red-400">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
            SYSTEM_EXECUTION_ANOMALY
          </span>
          <h1 className="text-2xl font-extrabold text-white">Temporary System Interruption</h1>
          <p className="text-xs text-slate-400 font-mono">
            {error.message || "An unexpected runtime condition occurred. Safe fallback engaged."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <button
            onClick={() => reset()}
            className="w-full py-3 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Attempt Recovery</span>
          </button>
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-[#05070B] border border-slate-700 hover:border-white text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
