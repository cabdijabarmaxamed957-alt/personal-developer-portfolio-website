import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Calendar,
  UserCheck,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projectsData } from "@/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Software Architecture Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.images[0] || "/images/developer-hero.jpg" }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get index to provide next/previous links
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
      {/* Back to Projects Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00F0FF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects Matrix</span>
        </Link>
      </div>

      {/* 1. Project Hero Header */}
      <div className="flex flex-col gap-6 p-8 sm:p-12 rounded-3xl bg-[#080D16] border border-[#0066FF]/30 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-md text-xs font-mono text-[#00F0FF] bg-[#0066FF]/20 border border-[#0066FF]/40">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-md text-xs font-mono text-slate-300 bg-[#05070B] border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          {project.fullDescription}
        </p>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
          <div>
            <span className="text-slate-500 block mb-1">ENGINEERING ROLE</span>
            <span className="text-white font-semibold flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#0066FF]" />
              {project.role}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">TIMELINE</span>
            <span className="text-white font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00F0FF]" />
              {project.startDate} → {project.completionDate}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">PRIMARY ARCHITECTURE</span>
            <span className="text-white font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
              {project.technologies[0]} + {project.technologies[1]}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block mb-1">VERIFICATION</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Production Tested
            </span>
          </div>
        </div>

        {/* Live / Code Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00F0FF] text-white text-xs font-mono font-semibold shadow-[0_0_15px_rgba(0,102,255,0.4)] border border-[#00F0FF]/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Interface</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#05070B] border border-slate-700 hover:border-[#0066FF] text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* 2. Interactive Screenshot Gallery with Lightbox */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#00F0FF]" />
            <span>Interface Architecture & Screenshots</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">Click any image to expand</span>
        </div>
        <ProjectGallery images={project.images} title={project.title} />
      </div>

      {/* 3. The Problem & The Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#080D16] border border-red-500/20 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 font-semibold">
            <AlertTriangle className="w-4 h-4" />
            <span>THE OPERATIONAL PROBLEM</span>
          </div>
          <h3 className="text-xl font-bold text-white">What needed solving?</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
        </div>

        <div className="p-8 rounded-2xl bg-[#080D16] border border-[#0066FF]/40 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00F0FF] font-semibold">
            <Lightbulb className="w-4 h-4" />
            <span>THE ENGINEERED SOLUTION</span>
          </div>
          <h3 className="text-xl font-bold text-white">How it was architected?</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* 4. Core Features Breakdown */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white">Delivered System Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#05070B] border border-white/5"
            >
              <CheckCircle2 className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
              <span className="text-sm text-slate-200 leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. System Architecture Overview */}
      {project.architecture && (
        <div className="p-8 sm:p-10 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
            <Cpu className="w-4 h-4" />
            <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Architectural Breakdown</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.architecture.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {project.architecture.components.map((comp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#05070B] border border-[#0066FF]/30 flex flex-col gap-2"
              >
                <div className="text-xs font-mono text-[#00F0FF] font-semibold">
                  0{idx + 1} // {comp.name}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Technology Stack Cards */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-white">Technology Stack & Libraries</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl text-xs font-mono text-slate-200 bg-[#080D16] border border-slate-800 hover:border-[#0066FF] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 7. Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Technical Challenges</span>
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-300">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-slate-500 font-mono text-xs mt-1">[{i + 1}]</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
            <span>Implemented Solutions</span>
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-300">
            {(project.solutions || [project.solution]).map((s, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 8. Verifiable Results & Metrics */}
      <div className="p-8 rounded-2xl bg-[#080D16] border border-[#0066FF]/30 flex flex-col gap-6">
        <h3 className="text-xl font-bold text-white">System Outcomes & Verification</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.results.map((res, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#05070B] border border-white/5 flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-[#00F0FF] mb-2 font-semibold">
                METRIC VERIFIED
              </span>
              <p className="text-sm text-slate-200 leading-snug">{res}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation to other Case Studies */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevProject.title.split("—")[0]}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00F0FF] transition-colors"
          >
            <span>Next: {nextProject.title.split("—")[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
