import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Code2,
  CheckCircle2,
  Briefcase,
  Wrench,
  Terminal,
  ExternalLink,
} from "lucide-react";
import Hero from "@/components/hero/Hero";
import ProjectCard from "@/components/projects/ProjectCard";
import ServiceCard from "@/components/services/ServiceCard";
import SkillCard from "@/components/skills/SkillCard";
import ContactForm from "@/components/contact/ContactForm";
import { personalData, developmentPhilosophies } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { skillsData } from "@/data/skills";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);
  const featuredServices = servicesData.slice(0, 6);
  const topSkills = skillsData.filter((s) => s.highlight).slice(0, 8);

  const whatsappUrl = `https://wa.me/212657463779?text=${encodeURIComponent(
    "Hello! I saw your portfolio and would like to talk about building a project."
  )}`;

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24">
      {/* ─────────────────── 1. Hero ─────────────────── */}
      <Hero />

      {/* ─────────────────── 2. About Me Preview ─────────────────── */}
      <section id="about-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-[#080D16] border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Bio Text */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit">
                <Terminal className="w-3.5 h-3.5" />
                <span>ABOUT ME</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Who I Am
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {personalData.bioSummary}
              </p>

              {/* Traits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { label: "Problem Solver", desc: "Finds the best solutions" },
                  { label: "Clean Code", desc: "Maintainable & scalable" },
                  { label: "Always Learning", desc: "Growing every day" },
                ].map((trait) => (
                  <div
                    key={trait.label}
                    className="p-4 rounded-xl bg-[#05070B] border border-white/5 flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
                      <span className="text-sm font-semibold text-white">{trait.label}</span>
                    </div>
                    <span className="text-xs text-slate-400 pl-6">{trait.desc}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/40 text-sm font-medium text-[#00F0FF] hover:bg-[#0066FF]/25 transition-colors"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: My Info Card */}
            <div className="lg:col-span-5 flex flex-col gap-4 p-6 rounded-2xl bg-[#05070B] border border-[#0066FF]/30 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-slate-400 font-semibold text-sm">My Info</span>
                <span className="text-[#00F0FF]">●</span>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Name", value: "Jaaro" },
                  { label: "Location", value: personalData.location },
                  { label: "Email", value: personalData.email },
                  { label: "WhatsApp", value: personalData.whatsapp },
                  { label: "Languages", value: "English, Arabic" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-3 py-1.5 border-b border-white/5">
                    <span className="text-slate-500 min-w-[80px]">{info.label}:</span>
                    <span className="text-slate-200">{info.value}</span>
                  </div>
                ))}
              </div>
              <a
                href="/cv"
                className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#080D16] border border-[#0066FF]/40 text-white text-xs font-medium hover:border-[#00F0FF] transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Download My CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 3. Featured Projects ─────────────────── */}
      <section id="projects-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>MY PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Here are some of the projects I&apos;ve built. Each project represents a real solution
              with modern technologies and clean code.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#080D16] border border-slate-700 hover:border-[#0066FF] text-xs font-mono text-white transition-all shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ─────────────────── 4. Services ─────────────────── */}
      <section id="services-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>MY SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What I Offer
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I provide professional development services to help you build modern, secure and scalable
            digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#080D16] border border-slate-700 hover:border-[#0066FF] text-sm font-mono text-white transition-all shadow-md"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#00F0FF]" />
          </Link>
        </div>
      </section>

      {/* ─────────────────── 5. Skills / Tech Stack ─────────────────── */}
      <section id="skills-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>SKILLS & TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              My Tech Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              I work with modern technologies to build fast, secure and scalable applications.
            </p>
          </div>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#080D16] border border-slate-700 hover:border-[#0066FF] text-xs font-mono text-white transition-all"
          >
            <span>View All Skills</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* ─────────────────── 6. Why Work With Me ─────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#080D16] border border-slate-800 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PRINCIPLES OVER CLAIMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why Work With Me
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              I operate on concrete engineering principles rather than exaggerated marketing claims.
              Every line of code is structured for resilience and business reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentPhilosophies.map((phil, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#05070B] border border-slate-800/80 hover:border-[#0066FF]/40 transition-colors"
              >
                <div className="text-xs font-mono text-[#00F0FF] mb-2 font-semibold">
                  0{idx + 1} // {phil.title}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{phil.principle}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── 7. Contact CTA ─────────────────── */}
      <section id="contact-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* WhatsApp CTA Banner */}
        <div className="rounded-3xl bg-[#080D16] border border-[#0066FF]/30 p-8 sm:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(0,102,255,0.15)] mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 via-transparent to-[#00F0FF]/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/40 text-[#00F0FF] text-xs font-mono w-fit mx-auto lg:mx-0">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Have an idea or project?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00F0FF]">
                  Let&apos;s build it.
                </span>
              </h2>
              <p className="text-slate-400 text-base max-w-lg">
                I&apos;m available for new projects, collaborations and opportunities.
                Feel free to reach out anytime.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40">
                <Cpu className="w-5 h-5 text-[#25D366]" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Chat With Me on WhatsApp</span>
                  <span className="font-mono font-bold text-white text-lg">{personalData.whatsapp}</span>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-[#25D366] hover:bg-[#22c55e] transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] border border-[#25D366]/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send a Message</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Have an Idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00F0FF]">
                Let&apos;s Build It.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need a custom web application, an academic university management system,
              or an automated AI workflow engine, I am ready to turn your concept into reliable software.
            </p>
            <div className="p-6 rounded-2xl bg-[#080D16] border border-[#0066FF]/50 shadow-[0_0_25px_rgba(0,102,255,0.2)] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                  Fastest Communication Channel
                </span>
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400">Direct WhatsApp Number:</span>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider">
                  {personalData.whatsapp}
                </span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#0052cc] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00F0FF] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-[#00F0FF]/30"
              >
                <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
                <span>Chat With Me on WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
