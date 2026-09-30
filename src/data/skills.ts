import { Skill } from "@/types/portfolio";

export const skillsData: Skill[] = [
  // Frontend
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Strict static typing, generic utility types, and end-to-end interface contracts across client and server.",
    experienceLevel: "Core Daily Language",
    iconName: "FileCode2",
    highlight: true,
  },
  {
    name: "React & Next.js",
    category: "Frontend",
    description: "App Router architecture, React Server Components (RSC), Suspense streaming, and client state isolation.",
    experienceLevel: "Production Expert",
    iconName: "Layout",
    highlight: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design systems, custom color token palettes, responsive layouts, and dark mode ergonomics.",
    experienceLevel: "Advanced Styling",
    iconName: "Palette",
    highlight: true,
  },
  {
    name: "JavaScript (ESNext)",
    category: "Frontend",
    description: "Modern asynchronous workflows, Promises, Event Loop mechanics, DOM optimization, and Web APIs.",
    experienceLevel: "Deep Fundamentals",
    iconName: "Code2",
  },
  {
    name: "HTML5 & Semantic Web",
    category: "Frontend",
    description: "Accessible ARIA patterns, structured microdata, SEO optimization, and clean document outlines.",
    experienceLevel: "Semantic Standard",
    iconName: "FileText",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven asynchronous microservices, streaming file processing, worker threads, and CLI tooling.",
    experienceLevel: "Primary Backend Runtime",
    iconName: "Server",
    highlight: true,
  },
  {
    name: "FastAPI / Python",
    category: "Backend",
    description: "High-performance asynchronous REST endpoints, data preprocessing scripts, and ML worker dispatchers.",
    experienceLevel: "Microservice Layer",
    iconName: "Terminal",
    highlight: true,
  },
  {
    name: "REST & WebSockets",
    category: "Backend",
    description: "Idempotent HTTP API contracts, WebSocket bidirectional channels, and Server-Sent Events (SSE).",
    experienceLevel: "Architectural Standard",
    iconName: "Network",
    highlight: true,
  },
  {
    name: "Auth & Security Guardrails",
    category: "Backend",
    description: "JWT asymmetric rotation, OAuth2 integrations, RBAC permission matrices, and CSRF/XSS defenses.",
    experienceLevel: "Zero-Trust Focus",
    iconName: "Shield",
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Relational database schema modeling, composite indexes, query performance tuning, and JSONB aggregations.",
    experienceLevel: "Primary Relational DB",
    iconName: "Database",
    highlight: true,
  },
  {
    name: "Prisma ORM",
    category: "Database",
    description: "Type-safe database migrations, relational relation mapping, and zero-redundancy schema generation.",
    experienceLevel: "Type-Safe Data Layer",
    iconName: "Layers",
  },
  {
    name: "Redis",
    category: "Database",
    description: "In-memory caching, distributed token bucket rate limiting, pub/sub channels, and job queue buffers.",
    experienceLevel: "In-Memory Acceleration",
    iconName: "Zap",
    highlight: true,
  },
  {
    name: "SQL & Query Optimization",
    category: "Database",
    description: "EXPLAIN ANALYZE diagnostic inspection, partial indexes, CTEs, and relational normalization.",
    experienceLevel: "Performance Tuning",
    iconName: "Search",
  },

  // AI & Machine Learning
  {
    name: "LLM Orchestration & APIs",
    category: "AI & Machine Learning",
    description: "Practical integration of state-of-the-art models for document summarization, extraction, and assistant flows.",
    experienceLevel: "Production Integration",
    iconName: "Brain",
    highlight: true,
  },
  {
    name: "Vector Search & Embeddings",
    category: "AI & Machine Learning",
    description: "Semantic search retrieval, chunking strategies, and similarity distance ranking for contextual knowledge.",
    experienceLevel: "Context Retrieval",
    iconName: "Sparkles",
  },
  {
    name: "Python Data Science Stack",
    category: "AI & Machine Learning",
    description: "Pandas, NumPy, and PyTorch inference bindings for feature engineering and dataset transformation.",
    experienceLevel: "Data Processing",
    iconName: "Binary",
  },

  // DevOps & Cloud
  {
    name: "Docker & Containerization",
    category: "DevOps & Cloud",
    description: "Multi-stage lean Dockerfiles, docker-compose orchestration, and isolated development environments.",
    experienceLevel: "Container Standard",
    iconName: "Box",
    highlight: true,
  },
  {
    name: "Linux Administration",
    category: "DevOps & Cloud",
    description: "Server provisioning, systemd service management, firewall configuration (UFW/iptables), and bash scripting.",
    experienceLevel: "System Hardening",
    iconName: "TerminalSquare",
  },
  {
    name: "CI/CD & GitHub Actions",
    category: "DevOps & Cloud",
    description: "Automated linting, unit test suites, build validation, and automated production staging triggers.",
    experienceLevel: "Continuous Delivery",
    iconName: "GitBranch",
  },
  {
    name: "Edge CDN & Cloudflare",
    category: "DevOps & Cloud",
    description: "DNS management, SSL/TLS certificates, edge caching rules, and DDoS rate-limiting shields.",
    experienceLevel: "Edge Infrastructure",
    iconName: "Cloud",
  },

  // Architecture & Security
  {
    name: "System Architecture & Design",
    category: "Architecture & Security",
    description: "Event-driven decoupling, monolithic-to-modular migration, idempotent APIs, and fault isolation.",
    experienceLevel: "High-Level Blueprinting",
    iconName: "Cpu",
    highlight: true,
  },
  {
    name: "Application Hardening",
    category: "Architecture & Security",
    description: "Content Security Policy (CSP), rate limiting, payload size limits, and sanitization boundaries.",
    experienceLevel: "Defensive Coding",
    iconName: "Lock",
  },
];
