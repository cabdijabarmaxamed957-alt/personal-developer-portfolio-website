import { Service } from "@/types/portfolio";

export const servicesData: Service[] = [
  {
    id: "web-apps",
    title: "Web Application Development",
    icon: "Layout",
    tagline: "Custom modern web applications engineered for speed, scale, and high usability.",
    description:
      "I design and build bespoke web applications with modern frontend frameworks and robust backend architecture. From real-time dashboards to complex multi-user workflows, every web app is built with strict type safety, fast response times, and exceptional UX.",
    features: [
      "Next.js Server Components & streaming architecture",
      "Dynamic state management & real-time updates (WebSockets / SSE)",
      "Strict TypeScript type safety end-to-end",
      "Responsive, mobile-optimized layouts with dark mode visual hierarchy",
      "Zero-fluff, production-grade component architecture",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    typicalUseCases: [
      "SaaS product platforms",
      "Interactive data dashboards and monitoring consoles",
      "Customer portals and account management centers",
      "Collaborative team tools and workflow engines",
    ],
    relatedProjectSlugs: ["opspulse-cloud-telemetry", "aethernet-ai-pipeline", "univrs-campus-portal"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Application Development",
    icon: "Smartphone",
    tagline: "High-performance cross-platform mobile apps with native fluid feel.",
    description:
      "I construct mobile applications that prioritize touch ergonomics, fast offline capability, and intuitive mobile interactions. Using modern hybrid and progressive web technologies, your product reaches iOS and Android users smoothly.",
    features: [
      "Responsive mobile-first interfaces & progressive web applications (PWA)",
      "Offline-first caching and background data synchronization",
      "Biometric authentication (Face ID / Fingerprint simulation)",
      "Smooth touch gesture interactions and native-like transitions",
    ],
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "PWA", "Web Crypto API"],
    typicalUseCases: [
      "Fintech wallets and payment authorization apps",
      "Field inspection and fleet management companion apps",
      "Student and employee mobile self-service apps",
    ],
    relatedProjectSlugs: ["securebank-fintech"],
  },
  {
    id: "websites",
    title: "Website Development",
    icon: "Globe",
    tagline: "High-impact digital showcases that turn casual visitors into committed clients.",
    description:
      "Modern websites designed for businesses and organizations that demand a commanding digital presence. Combining striking visual identity, lightning-quick load times, and structured SEO, each site is engineered to communicate credibility.",
    features: [
      "Lighthouse 95+ performance scores & Core Web Vitals optimization",
      "Complete SEO architecture (Open Graph, JSON-LD, sitemap, robots)",
      "Dark tech aesthetic with curated typography and subtle glowing accents",
      "Clean content architecture for effortless future expansion",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel / Cloudflare", "Semantic HTML"],
    typicalUseCases: [
      "Tech company and developer personal platforms",
      "Professional service firm flagship websites",
      "High-converting digital product landing showcases",
    ],
    relatedProjectSlugs: ["univrs-campus-portal", "opspulse-cloud-telemetry"],
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    icon: "Cpu",
    tagline: "Software tailored precisely around your operational bottlenecks.",
    description:
      "Off-the-shelf software often forces organizations into rigid patterns. I architect and implement custom software solutions designed specifically around your exact business logic, automated tasks, and internal team workflows.",
    features: [
      "Deep analysis of existing workflow bottlenecks",
      "Custom business rules and algorithmic processing",
      "Integration with legacy systems and third-party tools",
      "Comprehensive automated testing and fault-tolerant architecture",
    ],
    technologies: ["TypeScript", "Node.js", "Python", "Docker", "PostgreSQL", "Redis"],
    typicalUseCases: [
      "Internal dispatch and fleet management systems",
      "Automated document processing and billing engines",
      "Custom inventory and asset tracking solutions",
    ],
    relatedProjectSlugs: ["apex-logistics-core", "synthetix-api-gateway"],
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications",
    icon: "Brain",
    tagline: "Intelligent software integrating machine learning pipelines & LLMs.",
    description:
      "I implement practical, reliable AI solutions that enhance software without unnecessary hype. From automated classification and natural language data extraction to interactive graph-based workflow automation engines.",
    features: [
      "Integration with state-of-the-art LLM APIs and local model runners",
      "Retrieval-Augmented Generation (RAG) and vector embedding indexing",
      "Streaming responses with real-time UI token rendering",
      "Prompt engineering, sanitization, and fallback safeguards",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "Vector Databases", "LangChain/OpenAI APIs"],
    typicalUseCases: [
      "Automated customer query triage and intelligent search",
      "Workflow DAG builders for machine learning pipelines",
      "Document summarization and data categorization tools",
    ],
    relatedProjectSlugs: ["aethernet-ai-pipeline", "opspulse-cloud-telemetry"],
  },
  {
    id: "education-platforms",
    title: "Education Platforms & LMS",
    icon: "GraduationCap",
    tagline: "Academic management and digital learning platforms built for scale.",
    description:
      "Higher education systems, universities, and training academies require structured, reliable software. I design learning platforms that unify course delivery, schedule management, student analytics, and grade tracking into an elegant portal.",
    features: [
      "Role-Based Access Control (Admins, Faculty, Students)",
      "Automated transcript calculations & GPA tracking analytics",
      "Interactive weekly calendar schedule with conflict detection",
      "Assignment submissions, syllabus repository, and course discussions",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    typicalUseCases: [
      "University student information systems (SIS)",
      "Corporate training and certificate tracking portals",
      "Online course marketplaces with modular progress locks",
    ],
    relatedProjectSlugs: ["univrs-campus-portal"],
  },
  {
    id: "business-systems",
    title: "Business Systems & Dashboards",
    icon: "BarChart3",
    tagline: "Internal operational cockpits providing clarity over critical data.",
    description:
      "Transforming fragmented spreadsheets and siloed data into high-visibility management dashboards. I build internal tools that give decision-makers real-time visibility into revenue, operations, telemetry, and employee workflows.",
    features: [
      "Multi-dimensional data filtering and instant search",
      "Export capabilities (CSV, PDF reports, JSON)",
      "Role-based visibility ensuring sensitive data isolation",
      "High-contrast dark tech charts and heatmaps",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Recharts / Canvas"],
    typicalUseCases: [
      "Executive KPI and revenue monitoring dashboards",
      "Logistics dispatch and inventory consoles",
      "Customer support CRM and ticket resolution boards",
    ],
    relatedProjectSlugs: ["opspulse-cloud-telemetry", "apex-logistics-core", "securebank-fintech"],
  },
  {
    id: "backend-apis",
    title: "Backend & API Systems",
    icon: "Server",
    tagline: "High-throughput, secure, and resilient microservices and REST/GraphQL APIs.",
    description:
      "A software application is only as resilient as its backend foundation. I develop scalable backend systems, edge gateways, and API layers with defensive security, rate limiting, and zero-allocation performance in mind.",
    features: [
      "Defensive API security: rate limiting, token validation, CORS, CSP",
      "High concurrency architectures handling thousands of requests/sec",
      "Thorough automated integration and unit testing suites",
      "OpenAPI / Swagger documentation and strict request schema validation",
    ],
    technologies: ["Node.js", "Fastify / Express", "TypeScript", "Redis", "Docker", "PostgreSQL"],
    typicalUseCases: [
      "Microservice edge gateways and reverse proxies",
      "Webhooks receivers and asynchronous event workers",
      "Payment processing and financial ledger APIs",
    ],
    relatedProjectSlugs: ["synthetix-api-gateway", "opspulse-cloud-telemetry"],
  },
  {
    id: "database-systems",
    title: "Database Systems & Data Modeling",
    icon: "Database",
    tagline: "Normalized, index-optimized, and resilient data architectures.",
    description:
      "Poor database design causes slow queries, race conditions, and data corruption as an application scales. I architect relational and key-value database schemas with strict foreign keys, composite indexes, and transaction isolation.",
    features: [
      "Relational normalization & zero data redundancy schema modeling",
      "Index strategy and query execution plan optimization (EXPLAIN ANALYZE)",
      "ACID transactional guarantees for sensitive operations",
      "Automated migration pipelines and schema version control",
    ],
    technologies: ["PostgreSQL", "Redis", "Prisma ORM", "SQL", "Docker"],
    typicalUseCases: [
      "High-volume transactional ledgers",
      "Time-series metric storage and historical rollups",
      "Complex relational graphs for academic and enterprise records",
    ],
    relatedProjectSlugs: ["univrs-campus-portal", "opspulse-cloud-telemetry"],
  },
  {
    id: "deployment-infra",
    title: "Deployment & Infrastructure",
    icon: "Cloud",
    tagline: "Automated CI/CD pipelines, containerization, and production hardening.",
    description:
      "Taking an application from local code to a high-availability production environment. I configure containerized environments, secure Linux servers, edge CDN routing, SSL certification, and automated continuous deployment workflows.",
    features: [
      "Docker multi-stage builds for ultra-lean container images",
      "Automated GitHub Actions CI/CD deployment pipelines",
      "Linux server hardening, firewall configuration, and SSL/TLS",
      "Continuous health monitoring, uptime alerts, and zero-downtime rollouts",
    ],
    technologies: ["Docker", "Linux", "GitHub Actions", "Vercel", "Nginx", "Cloudflare"],
    typicalUseCases: [
      "Containerizing monolithic and microservice applications",
      "Setting up zero-downtime deployment pipelines",
      "Configuring edge caching and DDoS mitigation shields",
    ],
    relatedProjectSlugs: ["synthetix-api-gateway", "opspulse-cloud-telemetry"],
  },
];
