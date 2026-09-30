import { ExperienceItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "lead-independent-engineer",
    position: "Independent Software Engineer & Product Developer",
    organization: "Self-Employed / Client Solutions",
    period: "2023 — Present",
    location: "Remote / Hybrid",
    type: "Contract",
    description:
      "Engineering bespoke web applications, enterprise dashboards, and custom software systems for international clients, businesses, and academic initiatives.",
    responsibilities: [
      "Direct technical consultation with stakeholders to translate business goals into precise system requirements and database models.",
      "Architecting end-to-end full-stack applications utilizing Next.js, TypeScript, PostgreSQL, and Docker.",
      "Implementing defensive security practices: server-side schema verification with Zod, rate limiting, and secure authentication flows.",
      "Conducting load testing, query optimization, and performance audits ensuring sub-100ms response targets.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Docker", "Redis"],
    projects: [
      "OpsPulse AI Infrastructure Suite",
      "Univrs Campus Management Portal",
      "SecureBank Payments Gateway",
      "Apex Logistics Fleet Tracker",
    ],
  },
  {
    id: "fullstack-developer-contract",
    position: "Full-Stack Software Developer",
    organization: "Technical Solutions & Digital Platforms",
    period: "2022 — 2023",
    location: "Remote",
    type: "Project-Based",
    description:
      "Delivered production-ready software modules, internal tools, and API integrations for client web platforms.",
    responsibilities: [
      "Developed interactive dashboards, responsive user interfaces, and modular component design systems.",
      "Integrated third-party APIs, payment gateways, and automated webhook event handlers.",
      "Refactored legacy database schemas into normalized relational PostgreSQL models with foreign key constraints.",
      "Implemented comprehensive automated unit tests and continuous integration build scripts.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    projects: [
      "Academic Scheduling System",
      "Automated Inventory & Dispatch System",
      "Multi-Tenant User Authorization Engine",
    ],
  },
  {
    id: "software-engineering-intern",
    position: "Software Engineering Project Intern",
    organization: "Academic Computing & Software Development Lab",
    period: "2021 — 2022",
    location: "On-Site",
    type: "Project-Based",
    description:
      "Collaborated on academic software engineering tools, algorithmic optimization research, and internal university web tools.",
    responsibilities: [
      "Built interactive student data reporting interfaces with clean visual feedback.",
      "Researched and profiled database query latency under heavy concurrency workloads.",
      "Authored technical specifications and API documentation for internal software modules.",
    ],
    technologies: ["JavaScript", "Python", "SQL", "HTML5/CSS3", "Git"],
    projects: ["University Course Registry Tool", "Relational Database Performance Benchmarks"],
  },
];
