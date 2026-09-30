import { Article } from "@/types/portfolio";

export const articlesData: Article[] = [
  {
    slug: "architecting-scalable-nextjs-platforms",
    title: "Architecting Scalable Next.js Platforms: Server Components & Clean Boundaries",
    excerpt:
      "A deep dive into structuring production-grade Next.js applications using React Server Components, streaming SSR, and strict separation between data fetching and interactive client islands.",
    category: "Architecture",
    tags: ["Next.js", "React Server Components", "TypeScript", "Performance"],
    publishDate: "2024-09-15",
    readingTime: "7 min read",
    author: "Software Engineer",
    coverImage: "/images/projects/saas-dashboard.jpg",
    content: `
### The Evolution of Frontend Architecture

Modern web applications are no longer mere visual skins over static assets. They are distributed systems that bridge edge networks, database clusters, and interactive client runtimes. When architecting long-term software platforms, the primary hazard isn't choosing between tools—it is failing to establish distinct boundaries between data ingestion, domain logic, and presentation state.

### Why Server Components Change the Paradigm

In traditional client-side SPAs, the browser was forced to download, parse, and execute megabytes of JavaScript before rendering a single meaningful pixel. React Server Components (RSC) fundamentally rebalance this equation:

1. **Zero-Bundle Impact Dependencies:** Heavy parsing libraries, markdown renderers, and database connectors execute solely on the server, contributing 0 KB to the client JavaScript bundle.
2. **Colocated Data Retrieval:** Server Components query databases, Redis buffers, or microservices directly with sub-millisecond local network latency, eliminating the typical waterfall of client \`fetch\` chains.
3. **Resilient Streaming:** Through React Suspense boundaries, slow queries stream into the DOM as chunks without blocking the rendering of primary interface chrome.

\`\`\`typescript
// Server Component: zero client bundle impact
import { getProjectBySlug } from "@/lib/db";
import { ProjectHero } from "@/components/ProjectHero";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="max-w-6xl mx-auto px-4 py-12">
      <ProjectHero project={project} />
    </article>
  );
}
\`\`\`

### Clean Boundaries: Keeping Client Islands Minimal

A common anti-pattern in Next.js development is marking top-level layouts or parent containers with \`"use client"\`. This cascades down the component tree, inadvertently converting all child components into client-rendered JavaScript.

The disciplined approach is the **Client Island Pattern**:
* Construct 90% of your layout, typography, navigation links, and content blocks as pure Server Components.
* Extract only the leaf interactive nodes (e.g., a filter toggle, a modal trigger, or an animated canvas) into focused, self-contained Client Components.

### Defensive Typing with TypeScript

Contracts between server endpoints and client consumers should never rely on unchecked \`any\` or unverified JSON casts. Coupling TypeScript interfaces with runtime validation tools like Zod guarantees that if an API payload changes shape, errors are intercepted cleanly before reaching user-facing views.
    `,
  },
  {
    slug: "defensive-backend-engineering-apis",
    title: "Defensive Backend Engineering: Rate Limiting, Idempotency & Zero Trust",
    excerpt:
      "Essential patterns for engineering bulletproof API layers: sliding window rate-limiting with Redis, cryptographic idempotency keys, and comprehensive input sanitization.",
    category: "Backend & Security",
    tags: ["Backend", "Security", "Redis", "Node.js", "APIs"],
    publishDate: "2024-07-28",
    readingTime: "9 min read",
    author: "Software Engineer",
    coverImage: "/images/projects/ai-pipeline.jpg",
    content: `
### Beyond the Happy Path

In software development, building for the happy path is easy. Production engineering begins when you anticipate malicious payloads, erratic network drops, duplicate requests, and sudden volumetric traffic spikes. A robust backend treats every incoming HTTP request as untrusted until proven otherwise.

### Distributed Rate Limiting with Redis

Simple in-memory counters fail when an application scales across multiple container instances or edge regions. By utilizing a Redis-backed sliding-window token bucket algorithm, we achieve precise rate limiting that coordinates across all server instances without race conditions.

\`\`\`typescript
// Rate-limiting check with Redis sliding window
export async function enforceRateLimit(ip: string, limit: number, windowMs: number): Promise<boolean> {
  const now = Date.now();
  const key = \`ratelimit:\${ip}\`;
  
  const pipeline = redis.pipeline();
  pipeline.zremrangebyscore(key, 0, now - windowMs);
  pipeline.zadd(key, now, \`\${now}-\${Math.random()}\`);
  pipeline.zcard(key);
  pipeline.expire(key, Math.ceil(windowMs / 1000));
  
  const results = await pipeline.exec();
  const requestCount = results[2][1] as number;
  
  return requestCount <= limit;
}
\`\`\`

### Idempotent Mutations in Critical Systems

In financial or academic platforms, duplicate clicks or network retries must never result in duplicate billing or double enrollment. Implementing an \`Idempotency-Key\` header ensures that if a client re-submits a transfer due to a dropped TCP connection, the server recognizes the key, retrieves the cached result, and skips re-execution.

### Defense-in-Depth Checklist

1. **Strict Payload Size Limits:** Reject HTTP bodies exceeding 100KB on standard JSON routes to prevent memory exhaustion attacks.
2. **Hardened HTTP Headers:** Enforce Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options, and Referrer-Policy.
3. **No Unsanitized Error Traces:** Never leak database error strings or internal stack traces in public JSON responses.
    `,
  },
  {
    slug: "building-real-time-ai-pipelines",
    title: "Building Real-Time AI Pipelines: DAG Orchestration & Streaming UI",
    excerpt:
      "How to architect asynchronous neural processing workflows with directed acyclic graphs (DAGs), WebSocket streaming, and interactive telemetry dashboards.",
    category: "AI & Systems",
    tags: ["AI", "Machine Learning", "Architecture", "WebSockets"],
    publishDate: "2024-05-12",
    readingTime: "8 min read",
    author: "Software Engineer",
    coverImage: "/images/projects/education-system.jpg",
    content: `
### The Challenge of Asynchronous AI Workflows

Large language model pipelines, embedding generation, and neural network training cannot be handled within the constraints of standard synchronous HTTP request-response cycles. Operations can take anywhere from a few seconds to hours.

### Visualizing DAGs with Strict Cycle Prevention

A directed acyclic graph (DAG) represents a multi-step pipeline where each node's output feeds into subsequent downstream steps. Before dispatching tasks to worker queues:
* The system must execute topological sorting to determine valid execution sequences.
* Cycle detection algorithms (such as Tarjan's or Kahn's) run on the client and server to immediately prevent infinite loops.

### Streaming Telemetry to the Browser

Rather than aggressive polling that floods database connections, we establish persistent Server-Sent Events (SSE) or WebSockets. As each containerized worker computes a batch or generates tokens, events stream continuously to the frontend canvas.

By separating node state tracking from UI rendering via requestAnimationFrame, the interface maintains a crisp 60 FPS even while processing continuous telemetry streams.
    `,
  },
];
