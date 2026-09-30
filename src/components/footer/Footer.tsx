"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  MessageSquare,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { personalData } from "@/data/personal";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I am contacting you from your developer portfolio website footer."
  )}`;

  if (pathname?.startsWith("/apps")) {
    return null;
  }

  return (
    <footer className="relative bg-[#05070B] border-t border-[#0066FF]/20 pt-16 pb-12 overflow-hidden">
      {/* Top subtle blue light leak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent shadow-[0_0_20px_#0066FF]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#0066FF]/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Column 1 & 2: Brand Identity & Motto */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-lg bg-[#080D16] border border-[#0066FF]/50 flex items-center justify-center text-[#00F0FF] shadow-[0_0_12px_rgba(0,102,255,0.3)]">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-base font-bold tracking-wider text-white">
                  DEV<span className="text-[#0066FF]">.PORTFOLIO</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest">
                  {personalData.motto}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Engineering mission-critical digital products, high-throughput backend APIs,
              and reactive web interfaces with strict type safety and modern architecture.
            </p>

            <div className="flex flex-col gap-2 mt-2 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-[#00F0FF]">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                <span>{personalData.availability.status}</span>
              </div>
            </div>

            {/* Large Social Icons Bar */}
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect Directly
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={personalData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-[#080D16] border border-blue-500/30 text-blue-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-[0_0_15px_rgba(24,119,242,0.15)] hover:shadow-[0_0_25px_rgba(24,119,242,0.5)] hover:-translate-y-1 cursor-pointer"
                >
                  <FacebookIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-[#080D16] border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.15)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:-translate-y-1 cursor-pointer"
                >
                  <WhatsAppIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-[#080D16] border border-[#0A66C2]/40 text-[#00F0FF] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 shadow-[0_0_15px_rgba(10,102,194,0.15)] hover:shadow-[0_0_25px_rgba(10,102,194,0.5)] hover:-translate-y-1 cursor-pointer"
                >
                  <LinkedinIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00F0FF] font-semibold">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400 font-sans">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects Matrix
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-white transition-colors">
                  Skills & Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00F0FF] transition-colors font-medium">
                  Contact & Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0066FF] font-semibold">
              Key Services
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Featured Projects */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-semibold">
              Featured Case Studies
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              {projectsData.slice(0, 4).map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-1 text-xs">{project.title.split("—")[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#00F0FF] transition-colors shrink-0" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00F0FF] hover:underline font-mono"
                >
                  <span>Explore All Projects →</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Personal Developer Platform.</span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
