import React from "react";
import Link from "next/link";
import {
  Layout,
  Smartphone,
  Globe,
  Cpu,
  Brain,
  GraduationCap,
  BarChart3,
  Server,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Layers,
} from "lucide-react";
import { Service } from "@/types/portfolio";
import { projectsData } from "@/data/projects";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Smartphone,
  Globe,
  Cpu,
  Brain,
  GraduationCap,
  BarChart3,
  Server,
  Database,
  Cloud,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Cpu;

  // Retrieve matching projects
  const connectedProjects = projectsData.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  const whatsappInquiryUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    `Hello! I'm interested in discussing a project for: ${service.title}.`
  )}`;

  return (
    <div
      id={service.id}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#080D16] border border-slate-800 hover:border-[#0066FF]/60 transition-all duration-300 p-6 sm:p-8 shadow-lg hover:shadow-[0_15px_35px_-10px_rgba(0,102,255,0.25)]"
    >
      {/* Top Header: Icon + Title */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-[#0066FF]/40 flex items-center justify-center text-[#00F0FF] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:border-[#00F0FF] transition-all">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono text-slate-500 bg-[#05070B] px-2.5 py-1 rounded-md border border-white/5">
            0{service.id}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-mono text-[#38BDF8] mb-4">{service.tagline}</p>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">{service.description}</p>

        {/* Key Features List */}
        <div className="flex flex-col gap-2.5 mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Capabilities Included:
          </span>
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-[11px] font-mono text-slate-300 bg-[#0B1220] border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Connected Projects Showcase */}
        {connectedProjects.length > 0 && (
          <div className="p-3.5 rounded-xl bg-[#05070B] border border-slate-800/80 mb-6">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#00F0FF] mb-2 font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Related Project Proof:</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {connectedProjects.map((proj) => (
                <Link
                  key={proj.slug}
                  href={`/projects/${proj.slug}`}
                  className="text-xs text-slate-300 hover:text-white flex items-center justify-between group/link py-0.5"
                >
                  <span className="line-clamp-1">{proj.title.split("—")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-[#00F0FF] group-hover/link:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Action CTAs */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
        >
          <span>Request Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0066FF]" />
        </Link>

        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066FF]/20 hover:bg-[#0066FF]/30 border border-[#0066FF]/50 text-xs font-mono text-[#00F0FF] transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Inquire via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
