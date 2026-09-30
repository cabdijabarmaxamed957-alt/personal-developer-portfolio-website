import React from "react";
import {
  FileCode2,
  Layout,
  Palette,
  Code2,
  FileText,
  Server,
  Terminal,
  Network,
  Shield,
  Database,
  Layers,
  Zap,
  Search,
  Brain,
  Sparkles,
  Binary,
  Box,
  TerminalSquare,
  GitBranch,
  Cloud,
  Cpu,
  Lock,
} from "lucide-react";
import { Skill } from "@/types/portfolio";

const skillIconMap: Record<string, React.ElementType> = {
  FileCode2,
  Layout,
  Palette,
  Code2,
  FileText,
  Server,
  Terminal,
  Network,
  Shield,
  Database,
  Layers,
  Zap,
  Search,
  Brain,
  Sparkles,
  Binary,
  Box,
  TerminalSquare,
  GitBranch,
  Cloud,
  Cpu,
  Lock,
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = skillIconMap[skill.iconName] || Cpu;

  return (
    <div className="group relative flex flex-col justify-between p-5 rounded-xl bg-[#080D16] border border-slate-800 hover:border-[#0066FF]/60 hover:bg-[#0B1220] transition-all duration-300 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(0,102,255,0.2)]">
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#05070B] border border-white/10 flex items-center justify-center text-[#00F0FF] group-hover:border-[#0066FF] group-hover:scale-105 transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-[#05070B] px-2 py-0.5 rounded border border-white/5">
            {skill.category}
          </span>
        </div>

        <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-[#00F0FF] transition-colors">
          {skill.name}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          {skill.description}
        </p>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-500">Utilization:</span>
        <span className="text-[#38BDF8] font-medium">{skill.experienceLevel}</span>
      </div>
    </div>
  );
}
