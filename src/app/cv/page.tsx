import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Download,
  Printer,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { experienceData } from "@/data/experience";
import { skillsData } from "@/data/skills";
import PrintButton from "@/components/cv/PrintButton";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Software Engineering & Systems Architecture",
  description:
    "Curriculum Vitae detailing education, technical competencies, full-stack experience, and delivered software systems.",
};

export default function CVPage() {
  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I am reviewing your CV and would like to connect."
  )}`;

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#080D16] border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <FileText className="w-4 h-4 text-[#00F0FF]" />
          <span>OFFICIAL DIGITAL CURRICULUM VITAE</span>
        </div>

        <div className="flex items-center gap-3">
          <PrintButton />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-xs font-mono font-semibold text-white flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,102,255,0.4)]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>WhatsApp Me</span>
          </a>
        </div>
      </div>

      {/* Main CV Document Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#080D16] border border-slate-800 shadow-2xl flex flex-col gap-10">
        {/* CV Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {personalData.name}
            </h1>
            <p className="text-sm font-mono text-[#00F0FF]">{personalData.title}</p>
            <p className="text-xs font-mono text-slate-400 mt-1">{personalData.motto}</p>
          </div>

          <div className="flex flex-col gap-1.5 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{personalData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="text-slate-200">{personalData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="text-white font-bold">{personalData.whatsapp}</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#00F0FF] font-semibold">
            Professional Summary
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">{personalData.bioSummary}</p>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#00F0FF] font-semibold flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>Engineering Experience & Delivery</span>
          </h2>

          <div className="flex flex-col gap-6">
            {experienceData.map((exp) => (
              <div key={exp.id} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-base font-bold text-white">
                    {exp.position} <span className="text-[#38BDF8]">@ {exp.organization}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>
                <div className="flex flex-col gap-1.5 mt-1">
                  {exp.responsibilities.slice(0, 3).map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-[#0066FF] mt-0.5">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#00F0FF] font-semibold flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Education</span>
          </h2>

          {personalData.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm font-bold text-white">
                  {edu.degree} in {edu.field}
                </h3>
                <span className="text-xs font-mono text-slate-400">{edu.period}</span>
              </div>
              <span className="text-xs font-mono text-[#38BDF8]">{edu.institution}</span>
              <p className="text-xs text-slate-400 mt-1">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Core Technologies */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#00F0FF] font-semibold flex items-center gap-2">
            <Wrench className="w-4 h-4" />
            <span>Key Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {skillsData.map((s) => (
              <span
                key={s.name}
                className="px-2.5 py-1 rounded bg-[#05070B] border border-white/10 text-xs font-mono text-slate-300"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#00F0FF] font-semibold">
            Spoken Languages
          </h2>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
            {personalData.languages.map((l) => (
              <div key={l.language} className="flex items-center gap-1.5">
                <span className="text-white font-bold">{l.language}:</span>
                <span className="text-slate-400">{l.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
