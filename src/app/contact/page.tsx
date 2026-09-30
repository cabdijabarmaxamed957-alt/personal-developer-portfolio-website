import React from "react";
import type { Metadata } from "next";
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalData } from "@/data/personal";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Collaboration — Direct WhatsApp & Technical Inquiries",
  description:
    "Direct communication channels: WhatsApp (+212 657-463779), email, and structured project inquiries for web applications, custom software, and technical consulting.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I'm reaching out from your Contact page to discuss a new software project."
  )}`;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
          <Send className="w-3.5 h-3.5" />
          <span>DIRECT CHANNELS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let&apos;s Build Your System. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
            Direct Technical Communication.
          </span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Reach me directly via WhatsApp for quick alignment or submit a structured technical inquiry
          with your project specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct WhatsApp, Details & Availability */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Primary WhatsApp Card */}
          <div className="p-8 rounded-3xl bg-[#080D16] border border-[#0066FF]/50 shadow-[0_0_30px_rgba(0,102,255,0.25)] flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/15 blur-2xl rounded-full pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
                <MessageSquare className="w-4 h-4" />
                <span>PRIMARY MESSAGING CHANNEL</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono text-slate-400">Direct Number:</span>
              <span className="text-3xl sm:text-4xl font-mono font-extrabold text-white tracking-wider mt-1">
                {personalData.whatsapp}
              </span>
              <span className="text-xs text-slate-400 font-mono mt-1">
                {personalData.whatsappFormatted}
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00F0FF] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-[#00F0FF]/30 font-mono font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
              <span>Chat With Me on WhatsApp</span>
            </a>
          </div>

          {/* Structured Details Matrix */}
          <div className="p-6 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-4 font-mono text-xs">
            <span className="text-slate-400 font-semibold uppercase tracking-wider pb-2 border-b border-white/10">
              Communication Specs
            </span>

            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
              <div>
                <span className="text-slate-500 block text-[10px]">EMAIL ADDRESS</span>
                <span className="text-white">{personalData.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <div>
                <span className="text-slate-500 block text-[10px]">OPERATIONAL LOCATION</span>
                <span className="text-white">{personalData.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <div>
                <span className="text-slate-500 block text-[10px]">STATUS & TURNAROUND</span>
                <span className="text-emerald-400 font-semibold">
                  {personalData.availability.status}
                </span>
                <span className="block text-[11px] text-slate-400 font-sans mt-0.5">
                  Initial response typically within 2 to 6 hours.
                </span>
              </div>
            </div>
          </div>

          {/* Professional Socials */}
          <div className="p-6 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Verified Profiles
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#05070B] border border-white/5 hover:border-[#0066FF] flex items-center justify-between text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#05070B] border border-white/5 hover:border-[#0066FF] flex items-center justify-between text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
