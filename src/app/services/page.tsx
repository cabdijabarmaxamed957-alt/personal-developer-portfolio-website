import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import { personalData } from "@/data/personal";

export const metadata: Metadata = {
  title: "Engineering Services — Full-Stack & Systems Architecture",
  description:
    "Explore bespoke software development services: custom web apps, mobile solutions, AI automation pipelines, education platforms, backend APIs, and database engineering.",
};

export default function ServicesPage() {
  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I am reviewing your services page and would like to discuss a project."
  )}`;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAPABILITIES & DELIVERY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Software Engineering Services Grounded in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
            Architecture & Proof.
          </span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          I provide focused technical engineering from system blueprinting to production hardening.
          Every service is backed by real project implementation proof.
        </p>
      </div>

      {/* Services Grid (All 10 services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Engagement Callout Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#080D16] border border-[#0066FF]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="flex flex-col gap-2 max-w-2xl text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Have a custom requirement outside standard categories?
          </h3>
          <p className="text-slate-400 text-sm">
            I architect custom software around proprietary workflows, legacy database migrations,
            and private API orchestrations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0052cc] to-[#0066FF] text-white text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-[#00F0FF]/30"
          >
            <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
            <span>WhatsApp {personalData.whatsapp}</span>
          </a>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-[#0B1220] border border-slate-700 hover:border-[#0066FF] text-white text-xs font-mono transition-all"
          >
            Submit Specifications →
          </Link>
        </div>
      </div>
    </div>
  );
}
