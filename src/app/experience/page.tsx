import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight, Milestone } from "lucide-react";
import { experienceData } from "@/data/experience";
import { journeyTimelineData } from "@/data/journey";
import Timeline from "@/components/timeline/Timeline";

export const metadata: Metadata = {
  title: "Professional Experience & Milestone Timeline",
  description:
    "Review my software engineering roles, independent client contracts, system responsibilities, and chronological development journey.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TRACK & PROJECTS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Professional Experience &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
            Technical Delivery.
          </span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          A track record of engineering full-scale applications, leading architecture design, and
          delivering verified results for client platforms and systems.
        </p>
      </div>

      {/* Experience Roles List */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>Roles & Independent Contracts</span>
        </h2>

        <div className="flex flex-col gap-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#080D16] border border-slate-800 hover:border-[#0066FF]/40 transition-all flex flex-col gap-6 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/5">
                <div>
                  <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                    {exp.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{exp.position}</h3>
                  <div className="text-sm font-mono text-[#38BDF8]">{exp.organization}</div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                  <div className="flex items-center gap-1.5 text-white">
                    <Calendar className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Responsibilities & Delivery:
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connected Projects & Tech */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block mb-2">DELIVERED SYSTEMS:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((proj) => (
                      <span
                        key={proj}
                        className="px-2.5 py-1 rounded bg-[#05070B] border border-white/5 text-slate-300"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-500 block mb-2">APPLIED STACK:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#05070B] border border-[#0066FF]/30 text-[#00F0FF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Engineering Timeline */}
      <div className="flex flex-col gap-8 pt-8 border-t border-slate-800">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>CHRONOLOGICAL JOURNEY</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Milestones & Academic Progression
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Key steps in the evolution of my software engineering capabilities.
          </p>
        </div>

        <Timeline items={journeyTimelineData} />
      </div>

      {/* CV Download CTA */}
      <div className="p-8 rounded-2xl bg-[#080D16] border border-[#0066FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Looking for a printable CV document?</h3>
          <p className="text-slate-400 text-xs">
            Review the digital curriculum vitae or download the verified format.
          </p>
        </div>
        <Link
          href="/cv"
          className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono font-semibold transition-all shrink-0"
        >
          View Full CV →
        </Link>
      </div>
    </div>
  );
}
