"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Layers, X } from "lucide-react";
import { Project, ProjectCategory } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectFilterProps {
  initialProjects: Project[];
}

const categories: ProjectCategory[] = [
  "All",
  "Web Applications",
  "SaaS",
  "AI Solutions",
  "University Systems",
  "Fintech",
  "Business Systems",
  "APIs & Backend",
];

export default function ProjectFilter({ initialProjects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory ||
        project.secondaryCategories?.includes(activeCategory);

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, activeCategory, searchQuery]);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Controls Bar: Search & Category Filter Pills */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#080D16] border border-slate-800">
        {/* Search Input Box */}
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by project name, tech, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#05070B] border border-slate-800 focus:border-[#0066FF] focus:outline-none text-sm text-white placeholder-slate-500 font-mono transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Live Filter Count */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 self-end md:self-auto">
          <span>Showing</span>
          <span className="text-[#00F0FF] font-bold px-2 py-0.5 rounded bg-[#0066FF]/20 border border-[#0066FF]/40">
            {filteredProjects.length}
          </span>
          <span>of {initialProjects.length} projects</span>
        </div>
      </div>

      {/* Category Pills List */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#0066FF] text-white shadow-[0_0_15px_rgba(0,102,255,0.4)] border border-[#00F0FF]/50"
                  : "bg-[#080D16] text-slate-400 hover:text-white hover:bg-[#0B1220] border border-slate-800"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid Display */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State with reset button */
        <div className="flex flex-col items-center justify-center p-16 rounded-2xl bg-[#080D16] border border-dashed border-slate-800 text-center">
          <Layers className="w-12 h-12 text-slate-600 mb-4 animate-bounce" />
          <h3 className="text-lg font-bold text-white mb-2">No Matching Projects Found</h3>
          <p className="text-sm text-slate-400 max-w-sm mb-6">
            No projects matched your search criteria for &ldquo;{searchQuery}&rdquo; in category &ldquo;{activeCategory}&rdquo;.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono hover:bg-[#0066FF]/30 transition-all"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
