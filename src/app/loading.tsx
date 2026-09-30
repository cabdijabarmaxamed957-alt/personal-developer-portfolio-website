import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-slate-800 border-t-[#00F0FF] animate-spin" />
        <div className="w-8 h-8 rounded-full border-2 border-slate-800 border-b-[#0066FF] animate-spin absolute" />
      </div>
      <div className="flex items-center gap-2 font-mono text-xs text-[#00F0FF]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
        <span>INITIALIZING STREAMED CONTENT...</span>
      </div>
    </div>
  );
}
