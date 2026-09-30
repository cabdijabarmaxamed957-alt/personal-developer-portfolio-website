"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Code2,
  Layers,
  Briefcase,
  Wrench,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import { personalData } from "@/data/personal";

const navLinks = [
  { name: "Home", href: "/", icon: Code2 },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Layers },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Skills", href: "/skills", icon: Wrench },
  { name: "Contact", href: "/contact", icon: Send },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (pathname?.startsWith("/apps")) {
    return null;
  }

  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I saw your developer portfolio and I'd like to discuss a project."
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 bg-[#05070B]/90 backdrop-blur-md border-b border-[#0066FF]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "py-4 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Terminal Badge */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-lg bg-[#080D16] border border-[#0066FF]/40 flex items-center justify-center text-[#00F0FF] group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                <Code2 className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-wider text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-1.5">
                  DEV<span className="text-[#0066FF]">.PORTFOLIO</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest hidden sm:inline-block">
                  IDEAS → CODE → SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#080D16]/80 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white bg-[#0066FF]/25 border border-[#0066FF]/50 shadow-[0_0_12px_rgba(0,102,255,0.35)]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[#00F0FF] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: WhatsApp CTA & CV */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/cv"
                className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white border border-slate-700/60 hover:border-[#0066FF]/50 rounded-lg transition-all hover:bg-[#0066FF]/10"
              >
                CV
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00F0FF] rounded-lg shadow-[0_0_15px_rgba(0,102,255,0.35)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] border border-[#00F0FF]/30"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#00F0FF] group-hover:rotate-12 transition-transform" />
                <span>WhatsApp</span>
                <span className="font-mono text-[10px] bg-black/40 px-1.5 py-0.5 rounded text-slate-200">
                  {personalData.whatsapp}
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#080D16] border border-slate-800 text-slate-300 hover:text-white hover:border-[#0066FF]/50 transition-all focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Application-Style Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-[#05070B]/90 backdrop-blur-xl transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-20 right-4 left-4 max-w-lg mx-auto bg-[#080D16] border border-[#0066FF]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-6 z-50 overflow-y-auto max-h-[calc(100vh-6rem)]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                  Navigation Console
                </span>
              </div>
              <span className="text-[10px] font-mono bg-[#0066FF]/20 text-[#00F0FF] px-2 py-0.5 rounded-full border border-[#0066FF]/40">
                v2.4 Online
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-2.5 p-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#0066FF]/25 border border-[#0066FF] text-white shadow-[0_0_15px_rgba(0,102,255,0.3)]"
                        : "bg-[#0B1220]/60 border border-white/5 text-slate-300 hover:text-white hover:border-[#0066FF]/40"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#00F0FF]" : "text-slate-400"
                      }`}
                    />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#0052cc] to-[#0066FF] text-white font-medium text-sm border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,102,255,0.4)]"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
                  <span>Chat on WhatsApp</span>
                </div>
                <span className="font-mono text-xs bg-black/40 px-2 py-0.5 rounded text-white">
                  {personalData.whatsapp}
                </span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/cv"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#0B1220] border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Send className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>View Full CV</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#0B1220] border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Send className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Send Message</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
