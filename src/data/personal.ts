import { PersonalInfo, PhilosophyItem } from "@/types/portfolio";

export const personalData: PersonalInfo = {
  name: "Software Engineer & Product Architect",
  title: "Full-Stack Software Engineer & Digital Product Developer",
  headline: "I Build Digital Products That Turn Ideas Into Reality.",
  subheadline: "Web Applications • Mobile Apps • Websites • AI Solutions • Custom Software",
  motto: "IDEAS → CODE → REAL SOLUTIONS",
  location: "Available Globally / Remote & On-Site",
  whatsapp: "0657463779",
  whatsappFormatted: "+212 657-463779",
  email: "contact@developerportfolio.pro",
  githubUrl: "https://github.com",
  linkedinUrl: "https://www.linkedin.com/feed/",
  facebookUrl: "https://www.facebook.com/",
  availability: {
    status: "Available for New Projects",
    isAcceptingWork: true,
    description: "Currently accepting new client projects, technical consulting, and digital product architecture.",
    acceptedTypes: [
      "Custom Web Applications",
      "Mobile Applications",
      "High-Performance Websites",
      "AI & Automation Pipelines",
      "University & Education Systems",
      "Enterprise & Business Dashboards",
      "Backend Architecture & APIs",
    ],
  },
  bioSummary:
    "I am an engineer focused on engineering robust, scalable, and visually compelling digital products. From high-throughput backend APIs to immersive, reactive frontends, I engineer systems that solve actual operational problems.",
  bioFull: [
    "I design and develop modern digital products and custom software solutions. My core focus is transforming complex technical concepts into intuitive, reliable, and high-performance digital tools.",
    "Rather than treating code as just an implementation detail, I treat software engineering as an end-to-end discipline: understanding the core operational bottlenecks, structuring clean data models, enforcing security at every boundary, and crafting ultra-responsive user interfaces.",
    "Every system I construct is engineered for longevity: clean modular architecture, strict type safety with TypeScript, comprehensive error boundaries, and server-first performance optimization.",
  ],
  education: [
    {
      degree: "Bachelor of Science",
      field: "Computer Science & Software Engineering",
      institution: "Faculty of Sciences & Technologies",
      period: "2020 — 2024",
      description: "Focused on Algorithms, Distributed Systems, Database Architecture, and Object-Oriented Software Design.",
    },
  ],
  languages: [
    { language: "English", proficiency: "Professional & Technical Proficiency" },
    { language: "French", proficiency: "Working Proficiency" },
    { language: "Arabic", proficiency: "Native" },
  ],
  interests: [
    "Distributed Systems Architecture",
    "Artificial Intelligence & Agentic Pipelines",
    "UI/UX Micro-Interactions & Performance",
    "Cybersecurity & Secure Web Standards",
    "Open Source Tooling",
  ],
};

export const developmentPhilosophies: PhilosophyItem[] = [
  {
    title: "User Experience",
    principle: "Fluid, Predictable, and Subtly Animated",
    description:
      "A tool must feel instantaneous. High-contrast typography, clear hierarchy, responsive touch targets, and feedback on every action ensure users never guess system state.",
    icon: "Layout",
  },
  {
    title: "Performance",
    principle: "Sub-Second Response & Zero Bloat",
    description:
      "Prioritizing Next.js Server Components, optimized image pipelines, streaming SSR, and lean JavaScript bundles so applications render seamlessly even on constrained connections.",
    icon: "Zap",
  },
  {
    title: "Security First",
    principle: "Zero Trust at Every API Boundary",
    description:
      "Rigorous server-side schema validation, input sanitization, rate-limiting, hardened HTTP security headers, and zero client-exposed secrets.",
    icon: "ShieldCheck",
  },
  {
    title: "Scalability",
    principle: "Modular Architecture That Grows Organically",
    description:
      "Decoupled components, robust database schema indexing, clean separation of concerns, and stateless services designed to handle traffic spikes effortlessly.",
    icon: "Cpu",
  },
  {
    title: "Maintainability",
    principle: "Strict Typing & Self-Documenting Code",
    description:
      "Clear directory structures, strict TypeScript contracts, reusable design tokens, and predictable data flows that make future feature additions effortless.",
    icon: "Code2",
  },
  {
    title: "Reliability",
    principle: "Graceful Degradation & Resilient Error Boundaries",
    description:
      "Every network request, async stream, and user input is protected with fallback states, non-blocking UI feedback, and automated recovery handlers.",
    icon: "CheckCircle2",
  },
];
