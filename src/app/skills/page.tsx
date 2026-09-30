import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, ArrowRight, ShieldCheck, Cpu, Code2, Database, Cloud, Terminal } from "lucide-react";
import { skillsData } from "@/data/skills";
import SkillCard from "@/components/skills/SkillCard";
import { SkillCategory } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "Skills & Technical Stack — Concrete Engineering Competencies",
  description:
    "Comprehensive overview of production software engineering skills across Frontend, Backend, Database, AI & Machine Learning, DevOps, and System Architecture.",
};

const categories: { name: SkillCategory; icon: React.ElementType; desc: string }[] = [
  {
    name: "Frontend",
    icon: Code2,
    desc: "Modern reactive client applications, Next.js Server Components, and responsive design systems.",
  },
  {
    name: "Backend",
    icon: Terminal,
    desc: "Event-driven microservices, high-throughput REST and WebSocket APIs, and defensive security protocols.",
  },
  {
    name: "Database",
    icon: Database,
    desc: "Normalized relational schemas, composite query indexing, ACID transactions, and in-memory caches.",
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    desc: "Practical LLM integration, DAG workflow orchestration, vector search embeddings, and data pipelines.",
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    desc: "Containerization, automated GitHub Actions CI/CD pipelines, Linux hardening, and edge CDN routing.",
  },
  {
    name: "Architecture & Security",
    icon: ShieldCheck,
    desc: "Zero-trust boundaries, server-side payload validation, rate-limiting, and modular system decoupling.",
  },
];

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
          <Wrench className="w-3.5 h-3.5" />
          <span>TECHNICAL MATRIX</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Tools, Technologies &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
            Architecture Capabilities.
          </span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          I do not believe in fake percentage bars like &ldquo;HTML 90%&rdquo;. Instead, this matrix
          details real production technologies, their operational purpose, and how I apply them to
          build resilient digital platforms.
        </p>
      </div>

      {/* Category Sections */}
      <div className="flex flex-col gap-14">
        {categories.map((cat) => {
          const categorySkills = skillsData.filter((s) => s.category === cat.name);
          const Icon = cat.icon;

          return (
            <div key={cat.name} className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#080D16] border border-[#0066FF]/40 flex items-center justify-center text-[#00F0FF]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{cat.name}</h2>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{cat.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 self-start sm:self-auto">
                  {categorySkills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#080D16] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">
            Need a stack tailored to your specific ecosystem?
          </h3>
          <p className="text-slate-400 text-sm">
            I adapt architecture choices based on project latency targets, data volume, and team workflows.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono font-semibold transition-all shrink-0"
        >
          <span>Discuss System Architecture</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
