import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Terms and conditions for consulting, custom software delivery, and project contracts.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00F0FF] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Platform Home</span>
      </Link>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#080D16] border border-slate-800 flex flex-col gap-8 shadow-xl">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONTRACTUAL INTEGRITY</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Terms of Engagement</h1>
          <p className="text-xs font-mono text-slate-500">Effective Date: 2024</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          <section>
            <h2 className="text-lg font-bold text-white mb-2 font-mono">1. Professional Scope</h2>
            <p>
              All software development, consulting engagements, and technical architecture services
              are governed by written project scopes, milestone agreements, and verification benchmarks
              agreed upon prior to commencement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 font-mono">2. Code Ownership & IP</h2>
            <p>
              Upon complete milestone settlement, full ownership of proprietary application source code,
              database schemas, and bespoke assets is assigned to the client, excluding open-source
              third-party libraries and underlying framework dependencies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 font-mono">3. Architecture & Delivery Standards</h2>
            <p>
              All software deliverables follow strict TypeScript type definitions, automated test checks,
              and security best practices. Post-deployment support and warranty periods are structured
              per individual contract terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
