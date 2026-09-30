"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { personalData } from "@/data/personal";

const typewriterStatements = [
  "Turning ideas into real, resilient software.",
  "Engineering high-concurrency web applications.",
  "Constructing scalable AI & automation pipelines.",
  "Delivering secure, enterprise-grade architectures.",
];

export default function Hero() {
  const [statementIndex, setStatementIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentStatement = typewriterStatements[statementIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentStatement.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2400);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setStatementIndex((prev) => (prev + 1) % typewriterStatements.length);
          }
        }
      },
      isDeleting ? 30 : 65
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, statementIndex]);

  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I saw your developer portfolio hero section and would like to collaborate."
  )}`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#080D16] border border-[#0066FF]/40 text-xs font-mono text-slate-300 shadow-[0_0_15px_rgba(0,102,255,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
              </span>
              <span className="text-[#00F0FF] font-semibold">{personalData.availability.status}</span>
              <span className="text-slate-600">|</span>
              <span className="hidden sm:inline text-slate-400">Direct Delivery</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                I Build Digital Products That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF] drop-shadow-[0_0_25px_rgba(0,102,255,0.4)]">
                  Turn Ideas Into Reality.
                </span>
              </h1>

              {/* Subheadline Pill Matrix */}
              <p className="text-xs sm:text-sm font-mono text-[#00F0FF]/90 font-medium tracking-wide">
                Web Applications • Mobile Apps • Websites • AI Solutions • Custom Software
              </p>
            </div>

            {/* Dynamic Typewriter Terminal Line */}
            <div className="w-full max-w-xl bg-[#080D16]/90 border border-slate-800 rounded-xl p-3 flex items-center gap-3 font-mono text-xs sm:text-sm text-slate-300 shadow-inner">
              <span className="text-[#0066FF] font-bold select-none">&gt;</span>
              <span className="text-slate-200">
                {typewriterStatements[statementIndex].substring(0, charIndex)}
              </span>
              <span className="w-2 h-4 bg-[#00F0FF] animate-pulse inline-block" />
            </div>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I design and develop modern digital products and software solutions. 
              Focused on engineering scalable architectures, intuitive user experiences, 
              and production-ready web platforms that solve real-world problems.
            </p>

            {/* CTAs Matrix */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA: View Projects */}
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00D2FF] shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] border border-[#00F0FF]/40 transition-all duration-300"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Let's Work Together */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-[#0B1220] hover:bg-[#111827] border border-slate-700 hover:border-[#0066FF]/60 hover:text-white transition-all shadow-sm"
              >
                <span>Let&apos;s Work Together</span>
              </Link>

              {/* WhatsApp Direct CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-medium text-sm text-[#00F0FF] bg-[#080D16] border border-[#0066FF]/40 hover:border-[#00F0FF] hover:bg-[#0066FF]/10 transition-all shadow-[0_0_15px_rgba(0,102,255,0.2)]"
              >
                <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
                <span>WhatsApp:</span>
                <span className="font-mono font-bold text-white">{personalData.whatsapp}</span>
              </a>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 w-full max-w-lg text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                <span>Security First</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00F0FF]" />
                <span>Sub-50ms Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Real Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Developer Visual Matching Promotional Artwork */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Frame Container with Electric Blue Glow */}
            <div className="relative w-full max-w-md sm:max-w-lg rounded-2xl p-1 bg-gradient-to-b from-[#0066FF]/40 via-slate-800/40 to-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,102,255,0.25)] group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#080D16] border border-[#0066FF]/30">
                <Image
                  src="/images/developer-hero.jpg"
                  alt="Professional Software Developer working in dark tech workspace with subtle electric blue lighting"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/40 via-transparent to-[#05070B]/40" />

                {/* Holographic Status Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#080D16]/85 backdrop-blur-md border border-[#0066FF]/40 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                    <span className="text-white font-semibold">ENGINEERING WORKSPACE</span>
                  </div>
                  <span className="text-[#00F0FF] text-[11px]">ACTIVE SESSION</span>
                </div>

                {/* Top Corner Code Stamp */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#05070B]/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-slate-300">
                  IDEAS → CODE → REALITY
                </div>
              </div>

              {/* Ambient Glow Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066FF] to-[#00F0FF] rounded-2xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
