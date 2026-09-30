import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  User,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  FileText,
  MapPin,
  Mail,
  MessageSquare,
  GraduationCap,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { personalData, developmentPhilosophies } from "@/data/personal";

export const metadata: Metadata = {
  title: "About Me — Professional Identity & Development Philosophy",
  description:
    "Learn about my professional engineering background, core development philosophy, software architecture approach, and technical capabilities.",
};

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I read your About page and would like to connect."
  )}`;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
      {/* Top Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
          <User className="w-3.5 h-3.5" />
          <span>ABOUT MY PRACTICE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Architecting Resilient Digital Products From{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
            First Principles.
          </span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          {personalData.headline}
        </p>
      </div>

      {/* Main Grid: Visual Bio & Core Identity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Visual Artwork & Structured Facts */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative rounded-2xl overflow-hidden bg-[#080D16] border border-[#0066FF]/30 p-2 shadow-xl">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#05070B]">
              <Image
                src="/images/developer-hero.jpg"
                alt="Developer in dark workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#080D16]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold">{personalData.name}</span>
                <span className="text-[#00F0FF]">{personalData.motto}</span>
              </div>
            </div>
          </div>

          {/* Structured Information Panel */}
          <div className="p-6 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[#00F0FF] uppercase tracking-wider font-semibold">
                Profile Schema
              </span>
              <span className="text-slate-500">status: active</span>
            </div>

            <div className="flex flex-col gap-3 text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Title:</span>
                <span className="text-white font-sans text-right">{personalData.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Location:</span>
                <span className="text-slate-200">{personalData.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">Availability:</span>
                <span className="text-[#00F0FF] font-semibold">
                  {personalData.availability.status}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-500">WhatsApp:</span>
                <span className="text-white font-bold">{personalData.whatsapp}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Email:</span>
                <span className="text-slate-200">{personalData.email}</span>
              </div>
            </div>

            {/* Quick CV Button */}
            <div className="pt-2">
              <Link
                href="/cv"
                className="w-full py-2.5 px-4 rounded-xl bg-[#0066FF]/20 hover:bg-[#0066FF]/30 border border-[#0066FF]/40 text-[#00F0FF] flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Curriculum Vitae</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: In-depth Biography & Approach */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Professional Identity & Engineering Approach
            </h2>
            {personalData.bioFull.map((para, i) => (
              <p key={i} className="text-slate-300 text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Education & Qualifications */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION & FOUNDATIONS</span>
            </div>

            {personalData.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    {edu.degree} in {edu.field}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                </div>
                <div className="text-sm font-mono text-[#38BDF8]">{edu.institution}</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Languages & Core Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#080D16] border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] mb-3">
                <Globe2 className="w-4 h-4" />
                <span>LANGUAGES</span>
              </div>
              <div className="flex flex-col gap-2">
                {personalData.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between text-xs py-1 border-b border-white/5">
                    <span className="text-white font-medium">{lang.language}</span>
                    <span className="text-slate-400 font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#080D16] border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] mb-3">
                <Cpu className="w-4 h-4" />
                <span>TECHNICAL INTERESTS</span>
              </div>
              <ul className="flex flex-col gap-1.5 text-xs text-slate-300 font-mono">
                {personalData.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Development Philosophy Section: 6 Core Pillars */}
      <div className="flex flex-col gap-8 pt-8 border-t border-slate-800">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MY DEVELOPMENT PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            How I Approach Engineering Decisions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Every technical trade-off is evaluated against these six architectural pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentPhilosophies.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#080D16] border border-slate-800 hover:border-[#0066FF]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#00F0FF] mb-2 font-semibold">
                  PILLAR 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <div className="text-xs font-mono text-[#38BDF8] mb-3">{item.principle}</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#080D16] to-[#0B1220] border border-[#0066FF]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,102,255,0.15)]">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Ready to engineer your next product?</h3>
          <p className="text-slate-400 text-sm">
            Reach out via WhatsApp or submit a structured technical inquiry.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#0052cc] to-[#0066FF] text-white text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,102,255,0.4)]"
          >
            <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
            <span>WhatsApp {personalData.whatsapp}</span>
          </a>
          <Link
            href="/contact"
            className="px-5 py-3 rounded-xl bg-[#05070B] border border-slate-700 hover:border-white text-white text-xs font-mono"
          >
            Contact Form →
          </Link>
        </div>
      </div>
    </div>
  );
}
