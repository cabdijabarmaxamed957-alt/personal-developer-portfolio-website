import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, Home, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-[#080D16] border border-[#0066FF]/40 shadow-2xl flex flex-col items-center text-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/20 blur-3xl rounded-full pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-[#05070B] border border-[#0066FF]/60 flex items-center justify-center text-[#00F0FF] shadow-[0_0_20px_rgba(0,102,255,0.4)]">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
            ERROR: 404_PAGE_NOT_FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-white">Route Terminated</h1>
          <p className="text-sm text-slate-400">
            The requested resource or endpoint does not exist or has been relocated to another
            subsystem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,102,255,0.4)]"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="w-full py-3 px-4 rounded-xl bg-[#05070B] border border-slate-700 hover:border-[#0066FF] text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
