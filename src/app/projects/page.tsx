import React from "react";
import type { Metadata } from "next";
import { Layers, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectFilter from "@/components/projects/ProjectFilter";

export const metadata: Metadata = {
  title: "Real Projects Portfolio & Case Studies",
  description:
    "Explore real-world software engineering projects: enterprise telemetry dashboards, AI workflow pipelines, university campus systems, and fintech applications.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
          <Layers className="w-3.5 h-3.5" />
          <span>PRODUCTION SYSTEMS & CASE STUDIES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Real Software Projects. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
            Engineered For Actual Operations.
          </span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore technical case studies detailing architecture decisions, real performance benchmarks,
          backend contracts, and interactive user interfaces.
        </p>
      </div>

      {/* Filterable Projects Grid */}
      <ProjectFilter initialProjects={projectsData} />
    </div>
  );
}
