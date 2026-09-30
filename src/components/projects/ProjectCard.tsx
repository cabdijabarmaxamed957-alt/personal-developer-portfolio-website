import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-[#080D16] border border-slate-800 hover:border-[#0066FF]/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_15px_35px_-10px_rgba(0,102,255,0.25)] ${
        featured ? "lg:grid lg:grid-cols-12 lg:gap-8 p-1 sm:p-2" : "p-1 sm:p-2"
      }`}
    >
      {/* Thumbnail Container */}
      <div
        className={`relative rounded-xl overflow-hidden bg-[#05070B] border border-white/5 ${
          featured
            ? "lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] w-full"
            : "aspect-[16/10] w-full"
        }`}
      >
        <Image
          src={project.images[0] || "/images/projects/saas-dashboard.jpg"}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-60" />

        {/* Category Badge Over Thumbnail */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-white bg-[#05070B]/80 backdrop-blur-md border border-[#0066FF]/40 shadow-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#00F0FF] bg-[#0066FF]/30 backdrop-blur-sm border border-[#00F0FF]/40">
              FEATURED
            </span>
          )}
        </div>

        {/* Project Status */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-200 bg-[#080D16]/90 backdrop-blur-md border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div
        className={`flex flex-col justify-between p-5 ${
          featured ? "lg:col-span-5 lg:py-6" : ""
        }`}
      >
        <div className="flex flex-col gap-3">
          {/* Project Title */}
          <Link href={`/projects/${project.slug}`} className="group/title">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/title:text-[#00F0FF] transition-colors leading-snug">
              {project.title}
            </h3>
          </Link>

          {/* Role & Timeline info */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="text-[#38BDF8]">{project.role}</span>
            <span>•</span>
            <span>{project.completionDate}</span>
          </div>

          {/* Short Description */}
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Badges List */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-[#0B1220] border border-white/5 group-hover:border-[#0066FF]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-[#0B1220]">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 mt-4 border-t border-white/5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00F0FF] hover:text-white transition-colors group/link"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0B1220] border border-white/10 text-slate-400 hover:text-white hover:border-[#0066FF]/50 transition-all"
                title="View Source Code"
                aria-label="View Source Code"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0B1220] border border-white/10 text-slate-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all"
                title="Live Demonstration"
                aria-label="Live Demonstration"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
