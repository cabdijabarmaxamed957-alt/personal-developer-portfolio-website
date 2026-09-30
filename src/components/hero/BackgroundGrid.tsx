"use client";

import React, { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60" />

      {/* Top Ambient Glow Center */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#0066FF]/20 via-[#00F0FF]/05 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Left Deep Navy Ambient Light */}
      <div className="absolute top-[30%] -left-48 w-[500px] h-[500px] bg-[#0066FF]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Right Soft Electric Spot */}
      <div className="absolute top-[60%] -right-48 w-[600px] h-[600px] bg-[#00F0FF]/08 blur-[160px] rounded-full pointer-events-none" />

      {/* Subtle Scanline Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#05070B]/70 to-[#05070B]" />

      {/* Faint Floating Code Symbols */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden opacity-20 select-none text-[11px] font-mono text-[#00F0FF]">
          <span className="absolute top-[18%] left-[8%] animate-float-slow">&lt;system:ready /&gt;</span>
          <span className="absolute top-[42%] right-[10%] animate-float-slow" style={{ animationDelay: "2s" }}>
            const status = &quot;OPTIMAL&quot;;
          </span>
          <span className="absolute top-[72%] left-[14%] animate-float-slow" style={{ animationDelay: "3.5s" }}>
            {`{ rsc: true, latency: "<50ms" }`}
          </span>
          <span className="absolute top-[85%] right-[16%] animate-float-slow" style={{ animationDelay: "1.5s" }}>
            git commit -m &quot;production-ready&quot;
          </span>
        </div>
      )}
    </div>
  );
}
