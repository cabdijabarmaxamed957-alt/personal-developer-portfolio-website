import React from "react";
import { TimelineItem } from "@/types/portfolio";
import { Calendar, CheckCircle2, Milestone, BookOpen, Wrench, Cpu } from "lucide-react";

interface TimelineProps {
  items: TimelineItem[];
}

const categoryIcons: Record<string, React.ElementType> = {
  Milestone: Milestone,
  Project: Cpu,
  Education: BookOpen,
  Skill: Wrench,
  Architecture: CheckCircle2,
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-slate-800 ml-4 sm:ml-6 flex flex-col gap-10">
      {/* Decorative vertical glowing line pulse */}
      <div className="absolute -top-4 -bottom-4 left-[-1px] w-[2px] bg-gradient-to-b from-transparent via-[#0066FF] to-transparent opacity-50" />

      {items.map((item, index) => {
        const Icon = categoryIcons[item.category] || Milestone;
        return (
          <div key={item.id || index} className="relative group">
            {/* Timeline node marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#05070B] border-2 border-[#0066FF] group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] flex items-center justify-center transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl bg-[#080D16] border border-slate-800 group-hover:border-[#0066FF]/50 transition-all duration-300 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-[#00F0FF] px-2.5 py-0.5 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40">
                  {item.date}
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{item.category}</span>
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs font-mono text-[#38BDF8] mb-3">{item.subtitle}</p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>

              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-[#05070B] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
