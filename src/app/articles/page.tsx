import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { articlesData } from "@/data/articles";

export const metadata: Metadata = {
  title: "Engineering Insights & Technical Articles",
  description:
    "In-depth articles covering React Server Components, high-throughput backend APIs, zero-trust security guardrails, and real-time AI workflow pipelines.",
};

export default function ArticlesPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
          <FileText className="w-3.5 h-3.5" />
          <span>TECHNICAL INSIGHTS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Engineering Notes &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D2FF] to-[#00F0FF]">
            Architecture Deep Dives.
          </span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Detailed technical essays on web platform architecture, high-throughput microservices,
          zero-trust API design, and asynchronous workflow execution.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articlesData.map((article) => (
          <article
            key={article.slug}
            className="group flex flex-col justify-between rounded-2xl bg-[#080D16] border border-slate-800 hover:border-[#0066FF]/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_15px_35px_-10px_rgba(0,102,255,0.25)]"
          >
            <div>
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#05070B]">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded text-[11px] font-mono font-medium text-white bg-[#05070B]/80 backdrop-blur-md border border-[#0066FF]/40">
                  {article.category}
                </div>
              </div>

              {/* Meta details */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>{article.publishDate}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                <Link href={`/articles/${article.slug}`}>
                  <h2 className="text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-[#05070B] border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Read Link */}
            <div className="p-6 pt-0 mt-4 border-t border-white/5">
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00F0FF] hover:text-white transition-colors pt-4"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
