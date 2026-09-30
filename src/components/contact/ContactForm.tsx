"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const projectTypes = [
  "Web Application Development",
  "Mobile Application Development",
  "Modern Website Development",
  "AI & Automation Pipeline",
  "University / Education Platform",
  "Business System / Dashboard",
  "Backend & API Architecture",
  "Database & Infrastructure",
  "Technical Consulting",
];

const budgetRanges = [
  "Under $1,500",
  "$1,500 — $3,500",
  "$3,500 — $7,500",
  "$7,500 — $15,000",
  "$15,000+",
  "Discuss Scope First",
];

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: defaultService || "Web Application Development",
    budget: "$3,500 — $7,500",
    message: "",
    honeypot: "", // hidden anti-spam field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic client validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your name (minimum 2 characters).");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage("Please describe your project or requirements (at least 10 characters).");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: defaultService || "Web Application Development",
        budget: "$3,500 — $7,500",
        message: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please contact via WhatsApp directly.");
      }
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#080D16] border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Decorative top blue border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent" />

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        Initiate Project Discussion
      </h3>
      <p className="text-sm text-slate-400 mb-6">
        Fill out this structured inquiry form with your requirements. I review all technical
        details carefully and respond with architecture insights.
      </p>

      {/* Success Banner */}
      {status === "success" ? (
        <div className="p-6 rounded-xl bg-[#0B1220] border border-[#0066FF] flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#0066FF]/20 flex items-center justify-center text-[#00F0FF]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-white">Message Transmitted Securely</h4>
          <p className="text-sm text-slate-300 max-w-md">
            Thank you! Your project specification has been logged. I will analyze your requirements
            and respond via email shortly. For urgent inquiries, you can reach me directly on
            WhatsApp.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 px-4 py-2 rounded-lg bg-[#0066FF] text-white text-xs font-mono hover:bg-[#0052cc] transition-colors"
          >
            Submit Another Project Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Honeypot field (hidden from real users, traps spam bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Company Website</label>
            <input
              type="text"
              id="company_website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-mono text-slate-300 font-medium">
                Your Name <span className="text-[#00F0FF]">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Alexander Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#05070B] border border-slate-800 focus:border-[#0066FF] focus:outline-none text-sm text-white placeholder-slate-600 font-mono transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-mono text-slate-300 font-medium">
                Email Address <span className="text-[#00F0FF]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="e.g. alexander@enterprise.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#05070B] border border-slate-800 focus:border-[#0066FF] focus:outline-none text-sm text-white placeholder-slate-600 font-mono transition-colors"
              />
            </div>
          </div>

          {/* Project Type & Budget Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="projectType" className="text-xs font-mono text-slate-300 font-medium">
                Project Category
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#05070B] border border-slate-800 focus:border-[#0066FF] focus:outline-none text-sm text-white font-mono transition-colors cursor-pointer"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#080D16] text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="budget" className="text-xs font-mono text-slate-300 font-medium">
                Target Budget (Optional)
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#05070B] border border-slate-800 focus:border-[#0066FF] focus:outline-none text-sm text-white font-mono transition-colors cursor-pointer"
              >
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-[#080D16] text-white">
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-mono text-slate-300 font-medium">
              Project Description & Requirements <span className="text-[#00F0FF]">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Outline what you want to build, existing systems, deadlines, and technical specifications..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#05070B] border border-slate-800 focus:border-[#0066FF] focus:outline-none text-sm text-white placeholder-slate-600 font-mono transition-colors resize-y min-h-[120px]"
            />
          </div>

          {/* Error Message Display */}
          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-xs font-mono text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full mt-2 py-3.5 px-6 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00D2FF] disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-[#00F0FF]/30 cursor-pointer"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#00F0FF]" />
                <span className="font-mono">Verifying & Transmitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#00F0FF]" />
                <span>Submit Technical Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
