import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices and data protection commitment for visitors and clients.",
};

export default function PrivacyPage() {
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
            <span>DATA INTEGRITY</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-500">Effective Date: 2024</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          <section>
            <h2 className="text-lg font-bold text-white mb-2 font-mono">1. Information Collection</h2>
            <p>
              When submitting inquiries through this website or directly via WhatsApp, any provided
              information (including your name, email, project specifications, and budget range) is used
              solely to evaluate project feasibility and communicate regarding technical engagements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 font-mono">2. Zero Third-Party Selling</h2>
            <p>
              I do not sell, rent, or lease your personal information to third parties or advertising
              networks. All shared intellectual property, business concepts, and technical diagrams
              remain strictly confidential.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 font-mono">3. Security & Telemetry</h2>
            <p>
              This website enforces modern security practices, including HTTPS encryption, Content Security
              Policies, and rate-limiting on submission endpoints. Standard anonymous server logs
              (such as request timestamps and HTTP status codes) are monitored strictly for DDoS prevention
              and site reliability.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 font-mono">4. Direct Contact</h2>
            <p>
              For any questions regarding data handling or project privacy agreements, contact directly
              via WhatsApp or the verified email on this platform.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
