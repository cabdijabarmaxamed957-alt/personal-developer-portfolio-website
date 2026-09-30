import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2, Tag, ArrowRight } from "lucide-react";
import { articlesData } from "@/data/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
      {/* Back button */}
      <div>
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00F0FF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Insights Catalog</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-md text-xs font-mono text-[#00F0FF] bg-[#0066FF]/20 border border-[#0066FF]/40">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>{article.publishDate}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed border-l-2 border-[#0066FF] pl-4">
          {article.excerpt}
        </p>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#080D16] border border-[#0066FF]/30 mt-4">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed font-sans">
        <div
          className="space-y-6 text-base [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:pt-6 [&>h3]:pb-2 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>pre]:p-5 [&>pre]:rounded-2xl [&>pre]:bg-[#080D16] [&>pre]:border [&>pre]:border-slate-800 [&>pre]:font-mono [&>pre]:text-xs [&>pre]:overflow-x-auto"
          dangerouslySetInnerHTML={{
            __html: article.content
              .replace(/### (.*?)\n/g, "<h3>$1</h3>")
              .replace(/`([^`]+)`/g, "<code class='px-1.5 py-0.5 rounded bg-[#080D16] text-[#00F0FF] border border-[#0066FF]/30 font-mono text-xs'>$1</code>")
              .replace(/```typescript([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
              .replace(/\n\n/g, "<br/><br/>"),
          }}
        />
      </article>

      {/* Tags */}
      <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center gap-2">
        <Tag className="w-4 h-4 text-slate-500" />
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-[#080D16] border border-white/5"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Bottom CTA to contact */}
      <div className="p-8 rounded-2xl bg-[#080D16] border border-[#0066FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Need an experienced engineer to architect your system?
          </h3>
          <p className="text-slate-400 text-xs">
            Let&apos;s evaluate your architectural bottlenecks and build a scalable solution.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono font-semibold transition-all shrink-0"
        >
          Contact Developer →
        </Link>
      </div>
    </div>
  );
}
