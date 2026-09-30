const fs = require('fs');
const path = require('path');

const projects = [
  // ────────────────── 1. Web Applications (Exactly 4 Projects) ──────────────────
  {
    title: "clothes-nextjs-platform — Modern Fashion E-Commerce",
    slug: "clothes-nextjs-platform",
    shortDescription: "A high-performance modern fashion e-commerce web platform built with Next.js, featuring dynamic catalog filtering, responsive cart drawer, and seamless checkout.",
    fullDescription: "clothes-nextjs-platform is a comprehensive fashion e-commerce web application engineered for speed, conversion, and visual appeal. Featuring server-rendered product collections, real-time inventory checks, instant size/color variant switches, and an interactive shopping cart drawer.",
    category: "Web Applications",
    secondaryCategories: [],
    status: "Production",
    featured: true,
    role: "Full-Stack Developer & UI Architect",
    startDate: "2024-04",
    completionDate: "2024-08",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js", "Stripe API"],
    images: ["/images/projects/clothes-platform.jpg"],
    liveUrl: "/apps/clothes-nextjs-platform",
    githubUrl: "https://github.com/developer/clothes-nextjs-platform",
    problem: "Traditional fashion stores suffer from bloated client scripts, sluggish product filtering, layout shifts during image loading, and convoluted checkout funnels.",
    solution: "Constructed a lightweight, server-driven Next.js storefront utilizing incremental static regeneration, optimistic cart updates, instant variant previews, and streamlined checkout.",
    features: [
      "Instant multi-criteria filtering by category, size, color, and price range",
      "Slide-out reactive shopping bag drawer with live subtotal calculation",
      "High-resolution product image gallery with zoom and variant synchronization",
      "Responsive mobile-first layout optimized for touch gestures and fast scroll",
      "Secure checkout flow integrated with modern payment gateways",
      "Order tracking dashboard with email invoice notifications"
    ],
    architecture: {
      overview: "Next.js App Router frontend paired with edge caching, server actions for shopping cart mutations, and serverless payment webhooks.",
      components: [
        { name: "Product Catalog Core", description: "Edge-cached static pages with on-demand revalidation for real-time inventory updates." },
        { name: "Cart State Engine", description: "Lightweight persistent client store with optimistic UI updates and server synchronization." },
        { name: "Payment & Order Gateway", description: "Secure checkout pipeline ensuring idempotent transactions and instant order receipts." }
      ]
    },
    challenges: ["Eliminating Cumulative Layout Shift when loading high-resolution apparel images.", "Ensuring instantaneous cart state hydration across browser sessions."],
    solutions: ["Leveraged Next.js Image optimization with blur placeholders.", "Utilized persistent local storage synced with server-side cookie sessions."],
    results: ["100/100 Lighthouse performance and SEO score.", "Sub-150ms page load times across all category listings."],
    lessonsLearned: ["Optimistic UI updates in cart interactions drastically improve perceived checkout speed."],
    relatedServices: ["web-apps", "custom-software"]
  },
  {
    title: "DRIVORA — Next.js Car Marketplace & Automotive Dealership",
    slug: "drivora-nextjs-car-marketplace",
    shortDescription: "Comprehensive digital vehicle marketplace and dealership platform featuring granular automotive search, EV specs comparison, and loan financing calculator.",
    fullDescription: "DRIVORA is an advanced automotive marketplace web application engineered with Next.js. Designed for vehicle dealerships and private buyers, it features multi-tier vehicle filtering (EV, Sports, Luxury, SUV), interactive price and mileage range sliders, detailed mechanical spec sheets, and an integrated financing estimator.",
    category: "Web Applications",
    secondaryCategories: [],
    status: "Production",
    featured: true,
    role: "Full-Stack Engineer & Automotive UI Specialist",
    startDate: "2024-05",
    completionDate: "2024-09",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "PostgreSQL", "Prisma"],
    images: ["/images/projects/drivora-car-marketplace.jpg"],
    liveUrl: "/apps/drivora-nextjs-car-marketplace",
    githubUrl: "https://github.com/developer/DRIVORA-NextJS-Car-Marketplace",
    problem: "Automotive marketplace portals frequently present cluttered interfaces with confusing filter options, slow vehicle comparisons, and inaccurate financing information.",
    solution: "Engineered a high-contrast dark tech marketplace platform featuring instant faceted search, comprehensive vehicle specification badges, and direct dealer inquiry forms.",
    features: [
      "Multi-parameter vehicle search with real-time slider filters",
      "Detailed vehicle specification matrices covering powertrain, battery, and safety",
      "Interactive monthly loan financing & payment calculation widget",
      "Dealer contact modal and direct test-drive scheduling interface",
      "High-resolution vehicle photo showcases with interior/exterior gallery views",
      "Saved favorites and vehicle side-by-side comparison matrix"
    ],
    architecture: {
      overview: "Next.js full-stack platform backed by a normalized PostgreSQL database, server-side filtering algorithms, and cached vehicle inventory endpoints.",
      components: [
        { name: "Vehicle Filtering Engine", description: "Server-side search index handling complex multi-criteria queries under 50ms." },
        { name: "Financing Calculator", description: "Real-time client calculator computing amortization schedules and down payments." },
        { name: "Inventory Management API", description: "Secure administration API allowing dealerships to publish and archive vehicle listings." }
      ]
    },
    challenges: ["Managing dynamic multi-field search queries without generating repetitive database query load."],
    solutions: ["Implemented query debouncing and PostgreSQL indexed foreign keys for lightning-fast vehicle filtering."],
    results: ["Instantaneous vehicle search results rendered under 60ms.", "Zero layout shift across responsive breakpoints."],
    lessonsLearned: ["Clear visual badges for vehicle specs reduce user decision fatigue substantially."],
    relatedServices: ["web-apps", "business-systems", "custom-software"]
  },
  {
    title: "Home Platform — Next.js Real Estate & Property Discovery",
    slug: "home-nextjs-platform",
    shortDescription: "Modern luxury real estate and architectural property discovery platform with interactive map view, amenity filters, and high-resolution villa showcases.",
    fullDescription: "home-nextjs-platform is an architectural real estate discovery web application built with Next.js. Engineered for high-end properties, villas, and modern residential developments, it provides property seekers with dynamic geo-location map explorer pins, bedroom/bathroom/sqft filters, immersive photo galleries, and direct viewing appointment scheduling.",
    category: "Web Applications",
    secondaryCategories: [],
    status: "Production",
    featured: true,
    role: "Lead Frontend & Geospatial UI Developer",
    startDate: "2024-03",
    completionDate: "2024-07",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Mapbox / Leaflet", "PostgreSQL"],
    images: ["/images/projects/home-platform.jpg"],
    liveUrl: "/apps/home-nextjs-platform",
    githubUrl: "https://github.com/developer/home-nextjs-platform",
    problem: "Real estate portals often suffer from cumbersome map navigation, delayed property card rendering, and fragmented property details that overwhelm prospective home buyers.",
    solution: "Designed a cohesive split-view discovery experience connecting an interactive dark-styled map with smooth synchronized property cards.",
    features: [
      "Dual split-view interface toggling between interactive map pins and responsive property cards",
      "Faceted filtering by property type, price, bedrooms, and square footage",
      "Detailed property dossiers displaying amenities, floorplans, and energy ratings",
      "Direct inquiry form and private viewing appointment scheduler",
      "Bookmarking and saved property collections with local persistence",
      "Mortgage estimation tool with customizable down payment and interest sliders"
    ],
    architecture: {
      overview: "Next.js application utilizing React Server Components for rapid initial property loading and lightweight client map integration with vector tile rendering.",
      components: [
        { name: "Map Synchronization Layer", description: "Binds geographic bounding-box coordinates to active viewport listings." },
        { name: "Property Media Pipeline", description: "Next-gen WebP image delivery pipeline optimized for architectural photography." },
        { name: "Inquiry Dispatch Service", description: "Serverless notification worker dispatching viewing requests directly to listing agents." }
      ]
    },
    challenges: ["Synchronizing interactive map viewport bounding boxes with filtered listing cards without frame drops."],
    solutions: ["Applied spatial debouncing and memoized GeoJSON cluster pins."],
    results: ["Smooth 60 FPS map panning and property card synchronization.", "Average property discovery session duration increased by 45%."],
    lessonsLearned: ["Separating map tile rendering from DOM property card states prevents heavy paint recalculations."],
    relatedServices: ["web-apps", "custom-software"]
  },
  {
    title: "Restaurant Platform — Next.js Gourmet Food & Reservation System",
    slug: "restaurant-nextjs-platform",
    shortDescription: "Full-featured restaurant web application featuring interactive digital food menu, real-time table reservations, and seamless online food ordering.",
    fullDescription: "restaurant-nextjs-platform is an all-in-one digital dining platform built with Next.js for high-end restaurants and culinary venues. It empowers diners to explore curated gourmet menus, customize ingredients, book private tables with real-time seating availability, and place delivery or pickup orders with instant order tracking.",
    category: "Web Applications",
    secondaryCategories: [],
    status: "Production",
    featured: true,
    role: "Full-Stack Web Developer",
    startDate: "2024-02",
    completionDate: "2024-06",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js", "PostgreSQL"],
    images: ["/images/projects/restaurant-platform.jpg"],
    liveUrl: "/apps/restaurant-nextjs-platform",
    githubUrl: "https://github.com/developer/restaurant-nextjs-platform",
    problem: "Restaurants rely on disconnected third-party ordering portals with heavy commission fees, poor brand representation, and lack of integration with reservation logs.",
    solution: "Engineered a self-hosted culinary web app unifying interactive digital menus, dietary preference tags, live cart checkout, and an automated table reservation engine.",
    features: [
      "Interactive digital menu with dish dietary indicators",
      "Real-time table booking widget with guest count, date picker, and seating time slots",
      "Slide-out food order summary drawer with instant tax and subtotal computation",
      "Dish customization options for allergies and spice level",
      "Admin kitchen dashboard view for managing incoming reservations and live orders",
      "Mobile-first responsive interface with tactile touch controls"
    ],
    architecture: {
      overview: "Next.js App Router full-stack implementation with server actions for reservation booking, real-time WebSocket order alerts, and robust schema validation.",
      components: [
        { name: "Digital Menu & Catalog", description: "High-performance cached food listings with dietary categorization and allergen tags." },
        { name: "Reservation Scheduling Engine", description: "Time-slot capacity checker preventing double-booking during peak restaurant hours." },
        { name: "Order Processing Pipeline", description: "Cart checkout pipeline with order confirmation receipts and estimated countdown." }
      ]
    },
    challenges: ["Preventing table overbooking during simultaneous customer reservation attempts."],
    solutions: ["Implemented atomic reservation transactions with pessimistic locking on table time slots."],
    results: ["100% reservation integrity with zero duplicate booking incidents in stress tests.", "Sub-100ms menu navigation transitions."],
    lessonsLearned: ["Clear step-by-step reservation validation reduces user errors during booking."],
    relatedServices: ["web-apps", "business-systems", "custom-software"]
  },

  // ────────────────── 2. SaaS (Exactly 4 Projects) ──────────────────
  {
    title: "OpsPulse AI — Cloud Infrastructure & Real-Time Telemetry Suite",
    slug: "opspulse-cloud-telemetry",
    shortDescription: "Enterprise real-time infrastructure monitoring dashboard featuring global telemetry heatmaps, query latency metrics, and automated alert routing.",
    fullDescription: "OpsPulse AI is an enterprise-grade cloud observability and infrastructure health monitoring platform. Engineered to monitor distributed microservices, database clusters, and API gateways in real time, it delivers sub-second telemetry aggregation, visual node diagnostics, and proactive incident response workflows.",
    category: "SaaS",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Lead Full-Stack & System Architect",
    startDate: "2024-01",
    completionDate: "2024-08",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "Docker"],
    images: ["/images/projects/saas-dashboard.jpg"],
    liveUrl: "/apps/opspulse-cloud-telemetry",
    githubUrl: "https://github.com/developer/opspulse-telemetry",
    problem: "Modern microservices generate millions of metrics per minute. Engineering teams struggle with alert fatigue and slow root-cause analysis.",
    solution: "Designed a unified observability platform ingesting streaming metrics over WebSockets and aggregating time-series data via Redis.",
    features: [
      "Real-time global infrastructure health map with live latency pinpoints",
      "Time-series database query latency histograms with 1-second resolution",
      "Dynamic CPU, Memory, Disk, and Network bandwidth utilization dials",
      "Threshold-based automatic alert routing with severity classification",
      "Audit trail logging with IP threat level scoring and geo-lookup"
    ],
    architecture: {
      overview: "Event-driven decoupled architecture using Next.js, Node.js streaming ingestion, Redis caching, and PostgreSQL rollups.",
      components: [
        { name: "Ingestion Stream Handler", description: "High-concurrency Node.js listener handling incoming metric payloads." },
        { name: "Redis Aggregator", description: "Sliding-window time series buffer preventing database saturation." },
        { name: "Interactive Frontend Engine", description: "Optimized Next.js interface with Canvas/SVG rendering." }
      ]
    },
    challenges: ["Handling thousands of concurrent WebSocket packets without UI lag."],
    solutions: ["Implemented client-side batching with requestAnimationFrame and virtualized canvas chart rendering."],
    results: ["Reduced mean time to incident detection by 64% in benchmark tests."],
    lessonsLearned: ["Decoupling telemetry ingestion from visualization is critical for preventing memory leaks."],
    relatedServices: ["web-apps", "backend-apis"]
  },
  {
    title: "TaskPulse — Agile Team Workspace & Sprint Management SaaS",
    slug: "taskpulse-saas-agile",
    shortDescription: "Modern collaborative project workspace featuring interactive Kanban boards, sprint burn-down analytics, and real-time multiplayer document editing.",
    fullDescription: "TaskPulse is a modern B2B SaaS platform engineered for agile software teams. It provides intuitive drag-and-drop task boards, customizable sprint workflows, real-time presence indicators, integrated markdown documentation, and automated GitHub/GitLab commit syncing.",
    category: "SaaS",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Product Engineer & Full-Stack Architect",
    startDate: "2024-02",
    completionDate: "2024-07",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "WebSockets"],
    images: ["https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/taskpulse-saas-agile",
    githubUrl: "https://github.com/developer/taskpulse-saas",
    problem: "Teams often use disconnected tools for project roadmaps, issue tracking, and meeting notes, leading to fragmented context and missed sprint goals.",
    solution: "Built a unified agile workspace combining interactive Kanban workflows, sprint velocity metrics, and collaborative real-time docs in a single ultra-fast interface.",
    features: [
      "Fluid drag-and-drop Kanban board with custom column automation triggers",
      "Sprint burndown and velocity charts tracking team velocity over time",
      "Multiplayer document editor with live cursor presence and comment threads",
      "Granular role-based team permissions (Admin, Member, Guest, Observer)",
      "Automated webhook integrations with GitHub, Slack, and Discord"
    ],
    architecture: {
      overview: "Next.js App Router application backed by Prisma ORM and WebSocket servers for instantaneous multi-user state synchronization.",
      components: [
        { name: "Kanban State Sync", description: "Optimistic client mutations with WebSocket broadcast to connected team members." },
        { name: "Sprint Analytics Worker", description: "Automated cron workers computing daily story point burndown rollups." },
        { name: "Presence Service", description: "Redis-backed heartbeat tracker managing active user avatar badges." }
      ]
    },
    challenges: ["Handling race conditions when multiple users reorder Kanban cards simultaneously."],
    solutions: ["Adopted fractional indexing for card positions, eliminating full-column database writes."],
    results: ["100% real-time synchronization with under 40ms broadcast latency across remote teams."],
    lessonsLearned: ["Fractional indexing is vastly superior to integer rank fields for reorderable lists."],
    relatedServices: ["web-apps", "custom-software"]
  },
  {
    title: "CloudMetric — Multi-Cloud Resource & Cost Optimization SaaS",
    slug: "cloudmetric-saas-monitor",
    shortDescription: "Cloud FinOps intelligence platform that continuously analyzes AWS, GCP, and Azure workloads to eliminate idle instances and slash monthly infrastructure bills.",
    fullDescription: "CloudMetric is an enterprise FinOps SaaS platform designed for cloud engineering teams. It connects to multiple cloud providers, monitors live CPU/memory utilization across Kubernetes clusters and serverless functions, identifies orphaned storage volumes, and recommends rightsizing policies that save up to 40% on monthly cloud expenditure.",
    category: "SaaS",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Lead Cloud SaaS Engineer",
    startDate: "2024-03",
    completionDate: "2024-09",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "PostgreSQL", "AWS SDK", "ClickHouse"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/cloudmetric-saas-monitor",
    githubUrl: "https://github.com/developer/cloudmetric-saas",
    problem: "Companies overspend on cloud infrastructure due to unmonitored staging environments, over-provisioned Kubernetes nodes, and forgotten cloud storage snapshots.",
    solution: "Constructed an automated cost governance cockpit that aggregates multi-cloud billing APIs into real-time spend burn-down curves and single-click rightsizing actions.",
    features: [
      "Unified multi-cloud spending dashboard consolidating AWS, Azure, and Google Cloud invoices",
      "Automated idle resource detector flagging instances running at under 5% CPU for 7+ days",
      "Kubernetes pod rightsizing recommendation engine based on 90-day percentile memory usage",
      "Slack and Teams weekly cost anomaly alerts with pinpoint root-cause service attribution",
      "Single-click automated scheduled shutdown policies for non-production development clusters"
    ],
    architecture: {
      overview: "Next.js frontend connected to a high-speed ClickHouse analytical database and Go worker daemons ingesting cloud cost management billing files.",
      components: [
        { name: "Cloud Billing Ingest Worker", description: "Parses gigabyte-scale AWS Cost and Usage Reports (CUR) into columnar ClickHouse tables." },
        { name: "Rightsizing Heuristic Core", description: "Calculates mathematical risk scores before recommending instance family downgrades." },
        { name: "Spend Forecast Model", description: "Holt-Winters time-series algorithm predicting end-of-month cloud spend commitments." }
      ]
    },
    challenges: ["Ingesting and normalizing vastly different pricing schemas across AWS, GCP, and Azure."],
    solutions: ["Mapped all provider records to the unified FinOps Open Cost & Usage Specification (FOCUS)."],
    results: ["Delivered an average 32% monthly infrastructure cost reduction across trial beta customers."],
    lessonsLearned: ["Normalized multi-cloud schemas allow engineers to compare identical compute workloads across vendors."],
    relatedServices: ["web-apps", "custom-software"]
  },
  {
    title: "DocuFlow — AI Contract Lifecycle & E-Signature SaaS",
    slug: "docuflow-saas-contracts",
    shortDescription: "Legally compliant digital contract management suite with AI clause risk analysis, dynamic PDF form builder, and cryptographic audit trails.",
    fullDescription: "DocuFlow is a modern B2B SaaS platform engineered for legal, HR, and sales operations teams. It transforms static agreement paperwork into interactive signing workflows, extracts key liabilities and indemnity terms using natural language models, and produces court-admissible audit logs with SHA-256 digital seals.",
    category: "SaaS",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Security & Product Developer",
    startDate: "2024-01",
    completionDate: "2024-06",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PDF-Lib", "WebCrypto", "PostgreSQL", "Node.js"],
    images: ["https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/docuflow-saas-contracts",
    githubUrl: "https://github.com/developer/docuflow-contracts",
    problem: "Contract turnaround takes weeks due to manual redlining, fragmented email attachments, and expensive legacy signature software with rigid seat-based pricing.",
    solution: "Built a collaborative document signing portal with in-browser drag-and-drop signature fields, automated recipient reminders, and instant clause risk scoring.",
    features: [
      "In-browser PDF field placement (Signatures, Initials, Dates, Text Inputs) with responsive auto-fit",
      "AI Contract Risk Inspector highlighting non-standard non-disclosure and limitation-of-liability clauses",
      "Sequential and parallel signing order recipient routing with automatic reminder emails",
      "Cryptographically signed Certificate of Completion including IP, timestamp, and device user-agents",
      "Template library with customizable merge tags for auto-populating sales contracts from CRM data"
    ],
    architecture: {
      overview: "Next.js frontend using HTML5 Canvas PDF rendering, WebCrypto cryptographic hash signing, and encrypted PostgreSQL document storage.",
      components: [
        { name: "Vector PDF Canvas Editor", description: "Allows signers to draw, type, or upload signatures with SVG vector anti-aliasing." },
        { name: "Cryptographic Audit Sealed Engine", description: "Calculates immutable SHA-256 document digests appended into signed certificate pages." },
        { name: "Clause Analysis Pipeline", description: "Fast semantic tokenizer checking clauses against standard legal playbook guidelines." }
      ]
    },
    challenges: ["Rendering heavy 100-page legal contracts in the browser without lag or mobile memory crashes."],
    solutions: ["Built virtualized page rendering loading and unloading PDF page canvases dynamically on scroll."],
    results: ["Average contract turnaround reduced from 6 business days down to 42 minutes."],
    lessonsLearned: ["Court-admissible e-signatures rely on timestamped audit certificates and immutable hashing."],
    relatedServices: ["web-apps", "custom-software"]
  },

  // ────────────────── 3. AI Solutions (Exactly 4 Projects) ──────────────────
  {
    title: "Aethernet AI — Visual Workflow Graph & Neural Pipeline Engine",
    slug: "aethernet-ai-pipeline",
    shortDescription: "Visual neural pipeline builder and asynchronous model orchestration engine with real-time node execution tracing and API response inspection.",
    fullDescription: "Aethernet AI is a visual workflow builder and execution engine designed for machine learning workflows and automated data processing pipelines. It allows technical teams to configure complex data ingestion, preprocessing, neural model training, evaluation, and deployment steps as an interconnected directed acyclic graph.",
    category: "AI Solutions",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Engineer & Pipeline Designer",
    startDate: "2024-03",
    completionDate: "2024-10",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Docker"],
    images: ["/images/projects/ai-pipeline.jpg"],
    liveUrl: "/apps/aethernet-ai-pipeline",
    githubUrl: "https://github.com/developer/aethernet-pipeline",
    problem: "Coordinating multi-stage machine learning tasks relies on brittle bash scripts, leading to non-reproducible deployments and lost traces.",
    solution: "Created an interactive DAG node editor where users construct pipelines visually, executing asynchronously in containerized workers.",
    features: [
      "Interactive SVG drag-and-drop workflow graph with bezier curve connectors",
      "Real-time node execution telemetry with live GPU and memory gauges",
      "Integrated node terminal streaming stdout/stderr with auto-scroll",
      "API response inspector with syntax-highlighted JSON preview",
      "Single-click deployment of trained models to scalable inference endpoints"
    ],
    architecture: {
      overview: "Modular architecture linking a Next.js frontend with a FastAPI execution orchestrator, backed by Redis job queues and containerized workers.",
      components: [
        { name: "Graph Canvas Runtime", description: "Lightweight vector graph renderer handling node connection validation." },
        { name: "FastAPI Orchestration Core", description: "Dispatches queued execution units to worker nodes." },
        { name: "Telemetry Channel", description: "Server-Sent Events pipe streaming training metrics to the browser." }
      ]
    },
    challenges: ["Preventing cyclical dependency deadlocks in complex multi-branch graphs."],
    solutions: ["Engineered topological sorting before pipeline execution."],
    results: ["Decreased model pipeline deployment time from hours to under 4 minutes."],
    lessonsLearned: ["Visual indicators for asynchronous queues drastically reduce user uncertainty."],
    relatedServices: ["ai-apps", "web-apps"]
  },
  {
    title: "NeuroChat AI — Multi-Model LLM Prompt Studio & Agent Canvas",
    slug: "neurochat-llm-workspace",
    shortDescription: "Advanced LLM workspace supporting side-by-side model comparison, prompt playground, streaming token telemetry, and autonomous AI agent workflows.",
    fullDescription: "NeuroChat AI is a developer-centric generative AI interface designed to benchmark, test, and deploy multi-model LLM prompts across OpenAI, Anthropic, Gemini, and local open-source models (Llama 3, Mistral). It features streaming markdown rendering, token cost estimation, and tool-calling agent builders.",
    category: "AI Solutions",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "AI Application Architect",
    startDate: "2024-04",
    completionDate: "2024-09",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Anthropic SDK", "Vercel AI SDK"],
    images: ["https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/neurochat-llm-workspace",
    githubUrl: "https://github.com/developer/neurochat-workspace",
    problem: "Developers struggle to objectively evaluate model outputs, latency, and token costs across competing LLM providers using disparate web playgrounds.",
    solution: "Engineered a unified side-by-side prompt studio allowing identical prompts to run concurrently across different model engines with live token metrics.",
    features: [
      "Dual split-screen chat interface comparing outputs from two models simultaneously",
      "Real-time streaming token generation speed (tokens/sec) and latency counters",
      "Custom system prompt presets with variable parameter injection",
      "Integrated code runner executing Python, JavaScript, and SQL generated by LLMs",
      "Autonomous tool-calling agent sandbox with web search and calculator integration"
    ],
    architecture: {
      overview: "Edge-deployed Next.js application using Server-Sent Events for streaming HTTP token responses and client-side web workers for code execution sandboxing.",
      components: [
        { name: "LLM Provider Router", description: "Unified gateway adapting heterogeneous API schemas to standard streaming protocols." },
        { name: "Token Cost Estimator", description: "Client-side BPE tokenizer calculating exact prompt and completion monetary costs." },
        { name: "In-Browser Code Sandbox", description: "Isolated WebWorker runtime executing AI-generated scripts securely." }
      ]
    },
    challenges: ["Rendering rapid streaming markdown without DOM re-render lag."],
    solutions: ["Implemented chunked buffer flushes with virtualized message threads."],
    results: ["Sub-30ms first-token latency on streaming benchmarks."],
    lessonsLearned: ["Standardizing streaming response formats enables seamless switching between AI vendors."],
    relatedServices: ["ai-apps", "web-apps"]
  },
  {
    title: "VisionCore AI — Industrial Quality Inspection & Defect Detector",
    slug: "visioncore-ai-diagnostics",
    shortDescription: "Edge computer vision platform utilizing custom YOLO models for real-time factory defect detection, thermal anomaly alerts, and automated QA logs.",
    fullDescription: "VisionCore AI is an industrial computer vision web application built for automated manufacturing assembly lines. It ingests high-speed camera feeds, identifies surface defects, micro-fractures, and assembly errors in under 20 milliseconds, and routes alerts to factory floor operators.",
    category: "AI Solutions",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Computer Vision & Edge Developer",
    startDate: "2023-11",
    completionDate: "2024-04",
    technologies: ["Next.js", "TypeScript", "Python", "YOLOv8", "OpenCV", "TensorFlow Lite", "WebSockets"],
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/visioncore-ai-diagnostics",
    githubUrl: "https://github.com/developer/visioncore-ai",
    problem: "Manual visual inspection on factory assembly lines is slow, prone to human fatigue, and fails to catch micro-cracks before products ship.",
    solution: "Built an automated camera inspection interface that overlays bounding boxes, confidence scores, and pass/fail indicators over live product video feeds.",
    features: [
      "Real-time object bounding box overlays with sub-20ms inference latency",
      "Heatmap visualization highlighting high-probability defect zones",
      "Automated pass/reject pneumatic actuator trigger signals via MQTT",
      "Historical defect analytics dashboard categorizing failure patterns by shift",
      "Model fine-tuning interface allowing operators to label new defect classes"
    ],
    architecture: {
      overview: "Edge inference node running optimized TensorRT models streaming telemetry metadata via WebSockets to a Next.js operator cockpit.",
      components: [
        { name: "Edge Inference Runtime", description: "C++ / Python worker processing 60 FPS 4K camera frames on local GPU accelerators." },
        { name: "Operator Dashboard UI", description: "Ultra-low-latency Next.js client rendering canvas bounding boxes over WebRTC video." },
        { name: "MQTT Actuator Gateway", description: "Industrial hardware interface triggering physical conveyor ejection switches." }
      ]
    },
    challenges: ["Streaming video bounding boxes without desynchronization from the video frame."],
    solutions: ["Encoded frame timestamps directly into the WebSocket metadata stream for client alignment."],
    results: ["Achieved 99.4% defect detection accuracy in production manufacturing pilot."],
    lessonsLearned: ["Edge processing is mandatory for industrial QA where cloud latency cannot be tolerated."],
    relatedServices: ["ai-apps", "custom-software"]
  },
  {
    title: "SynthVoice AI — Neural Speech Synthesis & Audio Cloning Pipeline",
    slug: "synthvoice-audio-engine",
    shortDescription: "Ultra-realistic text-to-speech synthesis platform with multi-speaker emotional modulation, cross-lingual voice cloning, and audio waveform editor.",
    fullDescription: "SynthVoice AI is a generative audio application built for digital content creators, game developers, and accessibility tools. It generates expressive, human-like voiceovers in over 40 languages from simple text scripts, with granular controls over pitch, cadence, emotion, and speaker identity.",
    category: "AI Solutions",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Audio AI & Frontend Engineer",
    startDate: "2024-01",
    completionDate: "2024-06",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API", "Python", "FastAPI", "PyTorch"],
    images: ["https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/synthvoice-audio-engine",
    githubUrl: "https://github.com/developer/synthvoice-engine",
    problem: "Traditional text-to-speech tools produce robotic, monotonous voices with unnatural pauses, and lack intuitive tools for sound designers to edit cadence.",
    solution: "Engineered an interactive web audio studio where users place SSML phonetic pauses, adjust pitch curves visually on a canvas, and stream synthesized WAV audio.",
    features: [
      "Interactive visual waveform canvas with drag-to-trim and pitch envelope controls",
      "Voice cloning wizard generating custom speaker embeddings from 60 seconds of audio",
      "Multi-speaker dialogue editor assigning different virtual actors to script lines",
      "Low-latency streaming chunked audio playback via HTML5 Web Audio API",
      "Multi-format export (WAV 48kHz, MP3, FLAC) with lossless compression"
    ],
    architecture: {
      overview: "Next.js frontend paired with an asynchronous PyTorch neural audio synthesis cluster, utilizing Web Audio API nodes for client-side playback.",
      components: [
        { name: "Script Parsing & Phoneme Engine", description: "Converts raw text into International Phonetic Alphabet (IPA) phonetic tokens." },
        { name: "Neural Vocoder Service", description: "HiFi-GAN vocoder generating 48kHz floating-point audio samples." },
        { name: "Canvas Waveform Editor", description: "Hardware-accelerated waveform visualizer supporting scrub playback and cue markers." }
      ]
    },
    challenges: ["Achieving sub-second generation of long voiceover scripts without browser freeze."],
    solutions: ["Chunked paragraph synthesis dispatches parallel inference jobs and stitches audio in memory."],
    results: ["Sub-400ms time to first audio byte on streaming playback."],
    lessonsLearned: ["Visual waveform scrub bars drastically improve user confidence when editing audio."],
    relatedServices: ["ai-apps", "web-apps"]
  },

  // ────────────────── 4. University Systems (Exactly 4 Projects) ──────────────────
  {
    title: "Univrs Campus Portal — Academic Management & Analytics",
    slug: "univrs-campus-portal",
    shortDescription: "Comprehensive university student information system featuring academic analytics, dynamic schedule calendar, and modular course tracking.",
    fullDescription: "Univrs Campus Portal is a modern, modular educational platform engineered for higher education institutions. It centralizes student enrollment, academic progress analytics, modular course materials, automated GPA trend projections, and interactive weekly class schedules.",
    category: "University Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Lead Software Developer",
    startDate: "2023-09",
    completionDate: "2024-04",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
    images: ["/images/projects/education-system.jpg"],
    liveUrl: "/apps/univrs-campus-portal",
    githubUrl: "https://github.com/developer/univrs-campus-portal",
    problem: "Legacy university portals suffer from clunky non-responsive interfaces, fragmented schedules, difficult course registration, and lack of visual transparency.",
    solution: "Built a unified, responsive campus web application empowering students and faculty with real-time academic dashboards and timetable conflict resolution.",
    features: [
      "Academic performance tracking with multi-year GPA trend graphs",
      "Visual course progress rings with credit completion status indicators",
      "Interactive weekly timetable with color-coded lecture, seminar, and exam slots",
      "Modular syllabus reader with downloadable assignments and submissions portal",
      "Role-Based Access Control supporting Students, Instructors, and Academic Registrars"
    ],
    architecture: {
      overview: "Full-stack Next.js application utilizing Server Components, Prisma ORM with PostgreSQL, and secure JWT session handling.",
      components: [
        { name: "Relational Academic Schema", description: "Normalized PostgreSQL schema modeling courses, prerequisites, and enrollments." },
        { name: "Schedule Conflict Engine", description: "Algorithmic validation checking student selections against room capacities." },
        { name: "Student Dashboard UI", description: "High-contrast dark theme interface optimized for rapid access to class schedules." }
      ]
    },
    challenges: ["Designing complex SQL queries for historical GPA calculations while preventing N+1 query bottlenecks."],
    solutions: ["Leveraged PostgreSQL database views and Prisma composite queries with indexed foreign keys."],
    results: ["99.4% student satisfaction rating during pilot rollout testing."],
    lessonsLearned: ["Early engagement with real academic workflows ensures the UI matches the actual student mental model."],
    relatedServices: ["education-platforms", "web-apps"]
  },
  {
    title: "Scholaris LMS — E-Learning & Automated Grading Environment",
    slug: "scholaris-lms-learning",
    shortDescription: "Next-generation Learning Management System with interactive video lecture quizzes, automatic code grading sandbox, and student engagement telemetry.",
    fullDescription: "Scholaris LMS is an educational platform designed for modern computer science and engineering universities. It provides instructors with course authoring tools, embedded interactive video quizzes, automated programming assignment grading in containerized sandboxes, and student drop-out risk prediction.",
    category: "University Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Educational Software Architect",
    startDate: "2023-10",
    completionDate: "2024-05",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Node.js", "PostgreSQL", "Redis"],
    images: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/scholaris-lms-learning",
    githubUrl: "https://github.com/developer/scholaris-lms",
    problem: "Grading hundreds of coding assignments manually creates massive instructor backlogs and delays essential student feedback by weeks.",
    solution: "Built an automated grading engine running student submissions against unit test suites inside secure, resource-limited Docker containers.",
    features: [
      "Automated programming assignment grader supporting Python, Java, C++, and JavaScript",
      "Interactive video player pausing for knowledge-check questions with progress locks",
      "Plagiarism detection analyzer scanning code structure against cohort submissions",
      "Live student discussion forum with markdown syntax highlighting and LaTeX math support",
      "Instructor gradebook with instant CSV export and grade curve adjustments"
    ],
    architecture: {
      overview: "Next.js frontend communicating with a job queue cluster that spins up ephemeral, air-gapped Docker sandboxes to execute untrusted student code.",
      components: [
        { name: "Isolated Grading Sandbox", description: "Resource-throttled Docker containers executing student code with 5-second timeouts." },
        { name: "Course Curriculum Builder", description: "Modular block-based lesson authoring tool with rich media embedding." },
        { name: "Engagement Metric Pipeline", description: "Tracks video pause points, quiz retry attempts, and assignment completion velocity." }
      ]
    },
    challenges: ["Preventing malicious student code from escaping the sandbox or exhausting server memory."],
    solutions: ["Enforced strict Linux cgroups limits (256MB RAM, 1 CPU core) and disabled all network egress."],
    results: ["Reduced assignment grading turnaround time from 14 days down to 3 seconds."],
    lessonsLearned: ["Immediate feedback loops dramatically improve student learning retention in technical courses."],
    relatedServices: ["education-platforms", "web-apps"]
  },
  {
    title: "AlumniLink — University Graduate Networking & Mentorship",
    slug: "alumnilink-network",
    shortDescription: "Exclusive university alumni networking portal featuring industry mentor matching, alumni job boards, fundraising campaigns, and event coordination.",
    fullDescription: "AlumniLink is a private community web application built for universities to connect current students with alumni working across global technology companies, financial firms, and research laboratories. It features automated mentorship matching algorithms, regional alumni chapter directories, and donation campaigns.",
    category: "University Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Developer",
    startDate: "2023-08",
    completionDate: "2024-01",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "SendGrid"],
    images: ["https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/alumnilink-network",
    githubUrl: "https://github.com/developer/alumnilink-network",
    problem: "Universities lose contact with graduates, missing opportunities for student career mentorship, guest lectures, and institutional fundraising.",
    solution: "Created an engaging community portal with LinkedIn profile sync, career trajectory mapping, direct mentorship booking, and campaign donation trackers.",
    features: [
      "Mentorship matching engine pairing students with alumni based on major and career goals",
      "Interactive global alumni map showing graduate density across major tech hubs",
      "Exclusive university job and internship board curated by verified alumni hiring managers",
      "Endowment fundraising campaign tracker with live donation leaderboard",
      "Direct messaging and video interview booking between mentors and mentees"
    ],
    architecture: {
      overview: "Next.js App Router application backed by a normalized PostgreSQL schema and automated email notification pipelines.",
      components: [
        { name: "Mentor Matching Algorithm", description: "Cosine similarity matching across career interests, graduation year, and industry." },
        { name: "Alumni Directory Index", description: "Faceted search indexing thousands of alumni profiles with privacy safeguards." },
        { name: "Donation Gateway Integration", description: "Secure recurring donation processing with automated charitable tax receipts." }
      ]
    },
    challenges: ["Protecting alumni contact privacy while encouraging open professional communication."],
    solutions: ["Implemented an in-app relay messaging system without exposing personal email addresses."],
    results: ["Over 4,500 active mentorship sessions conducted in the first university semester."],
    lessonsLearned: ["Structured mentorship prompts prevent early communication drop-off between alumni and students."],
    relatedServices: ["education-platforms", "web-apps"]
  },
  {
    title: "GraduateGate — International Student Admissions & Verification",
    slug: "graduategate-admissions",
    shortDescription: "End-to-end admissions application platform featuring digital document verification, faculty review rubrics, and automated offer letter generation.",
    fullDescription: "GraduateGate is an institutional admissions workflow web application built for graduate universities receiving thousands of domestic and international applications. It streamlines application submissions, transcript authenticity checks, faculty recommendation letter collection, and admissions committee scoring.",
    category: "University Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Lead Full-Stack Architect",
    startDate: "2023-07",
    completionDate: "2023-12",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "AWS S3"],
    images: ["https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/graduategate-admissions",
    githubUrl: "https://github.com/developer/graduategate-admissions",
    problem: "Admissions committees drown in thousands of paper transcripts, unverified PDF portfolios, and unstandardized faculty review emails.",
    solution: "Developed a secure paperless admissions cockpit that automates transcript OCR parsing, tracks recommendation status, and calculates composite applicant scores.",
    features: [
      "Multi-step applicant submission portal with automatic progress auto-saving",
      "Secure referee portal allowing professors to submit confidential recommendation letters",
      "Faculty evaluation scoring rubric with standardized criteria and comment threads",
      "Automated document verification check tracking official transcript status",
      "Batch offer letter generator producing cryptographically signed PDF acceptance packages"
    ],
    architecture: {
      overview: "Next.js server-rendered application with client-side document upload directly to encrypted S3 buckets via presigned URLs.",
      components: [
        { name: "Presigned Document Upload", description: "Client-direct S3 multi-part file uploads eliminating web server file buffering." },
        { name: "Admissions Rubric Engine", description: "Dynamic scoring matrix computing normalized rankings across review committees." },
        { name: "Acceptance Letter Dispatcher", description: "Automated PDF generator creating personalized matriculation packets." }
      ]
    },
    challenges: ["Handling multi-gigabyte portfolio uploads from international applicants with intermittent internet."],
    solutions: ["Implemented resumable chunked S3 uploads with automatic retry upon network drops."],
    results: ["Cut admissions decision processing cycle from 8 weeks down to 11 days."],
    lessonsLearned: ["Presigned S3 uploads dramatically reduce server load during peak admissions deadline weeks."],
    relatedServices: ["education-platforms", "custom-software"]
  },

  // ────────────────── 5. Fintech (Exactly 4 Projects) ──────────────────
  {
    title: "SecureBank — Multi-Currency Digital Payments Gateway",
    slug: "securebank-fintech",
    shortDescription: "Dark-mode fintech banking platform with multi-currency wallet management, biometric MFA authorization, and real-time transaction telemetry.",
    fullDescription: "SecureBank is a modern digital banking and cross-border wallet interface built with an emphasis on defense-in-depth security, rapid transaction throughput, and intuitive financial telemetry. It showcases how fintech interfaces can combine aesthetic dark elegance with banking-grade verification protocols.",
    category: "Fintech",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Security & Frontend Architect",
    startDate: "2024-02",
    completionDate: "2024-07",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Web Crypto API"],
    images: ["/images/projects/fintech-app.jpg"],
    liveUrl: "/apps/securebank-fintech",
    githubUrl: "https://github.com/developer/securebank-fintech",
    problem: "Payment applications frequently suffer from cluttered dashboards, confusing fees, and friction-heavy verification steps.",
    solution: "Created a streamlined banking experience with multi-currency balances, interactive performance charts, and an encrypted QR / biometric authorization modal.",
    features: [
      "Multi-currency wallet balances with real-time conversion rates",
      "Encrypted Payment Authorization modal with secure QR verification",
      "Interactive 30-day portfolio performance line chart with time-span filtering",
      "Granular security telemetry dashboard displaying active MFA status",
      "Categorized recent activity feed with instant receipt generation"
    ],
    architecture: {
      overview: "Security-first principles: encrypted transit payloads, strict double-entry ledger transactions, and cryptographic signatures.",
      components: [
        { name: "Double-Entry Ledger Core", description: "Relational schema guaranteeing balance consistency across debit and credit movements." },
        { name: "Auth & Threat Engine", description: "Continuous risk scoring tracking IP velocity and unusual transaction sizes." },
        { name: "Responsive Banking UI", description: "Dark navy and electric blue interface engineered for high readability." }
      ]
    },
    challenges: ["Ensuring financial transaction calculations avoid floating-point rounding errors."],
    solutions: ["Used integer-based minor currency units (cents/pence) and BigNumber math across all monetary logic."],
    results: ["100% mathematical accuracy across over 50,000 automated stress-test ledger transactions."],
    lessonsLearned: ["Financial software requires zero tolerance for ambiguous UX; every screen must display precise numbers."],
    relatedServices: ["web-apps", "custom-software"]
  },
  {
    title: "CryptoFlow — Digital Asset Trading & Portfolio Matrix",
    slug: "cryptoflow-exchange",
    shortDescription: "High-frequency cryptocurrency trading interface with real-time WebSocket order books, TradingView depth charts, and automated stop-loss limit orders.",
    fullDescription: "CryptoFlow is an institutional digital asset trading terminal built with Next.js. Engineered for crypto traders and liquidity providers, it streams live market depth data, candlestick price movements across Bitcoin, Ethereum, and Solana, and provides instant order execution with simulated slippage calculation.",
    category: "Fintech",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Lead Frontend Trading Systems Engineer",
    startDate: "2024-03",
    completionDate: "2024-08",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Canvas", "Redis"],
    images: ["https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/cryptoflow-exchange",
    githubUrl: "https://github.com/developer/cryptoflow-exchange",
    problem: "Retail crypto interfaces lag under intense market volatility, dropping WebSocket tick updates and causing execution slippage.",
    solution: "Built a high-performance trading dashboard using off-DOM Canvas chart rendering and throttled message batching over persistent WebSocket channels.",
    features: [
      "Real-time streaming order book depth ladder with cumulative bid/ask wall visualization",
      "Interactive multi-timeframe candlestick chart (1m, 5m, 1h, 1D) with technical indicators",
      "Instant limit, market, and stop-loss order entry with live margin requirement calculator",
      "Asset allocation donut chart and 24h P&L (Profit & Loss) portfolio analytics",
      "Simulated trade execution engine with transaction receipt logging"
    ],
    architecture: {
      overview: "Next.js reactive frontend listening to a high-throughput WebSocket market feed with local state management optimized for 60 FPS updates.",
      components: [
        { name: "Market Depth Buffer", description: "Sliding-window order book memory store reconciling bids and asks in sub-millisecond intervals." },
        { name: "Canvas Charting Core", description: "Custom HTML5 Canvas renderer drawing candles, volume bars, and moving averages." },
        { name: "Order Routing Mock", description: "Simulates matching engine fills, maker/taker fee deductions, and wallet balance updates." }
      ]
    },
    challenges: ["Rendering thousands of price ticks per second without causing browser memory leaks."],
    solutions: ["Employed circular ring buffers in memory and throttled React re-renders to screen refresh rate."],
    results: ["Maintained steady 60 FPS during simulated 5,000 tick/sec market volatility bursts."],
    lessonsLearned: ["Direct Canvas drawing avoids React virtual DOM overhead entirely for high-frequency data."],
    relatedServices: ["web-apps", "custom-software"]
  },
  {
    title: "InvoiceX — Automated B2B Invoicing & Recurring Revenue Billing",
    slug: "invoicex-smart-billing",
    shortDescription: "B2B SaaS subscription billing engine featuring automated recurring invoices, multi-tier tax calculation, and delinquent payment dunning flows.",
    fullDescription: "InvoiceX is a billing operations platform built for SaaS companies and digital agencies. It automates recurring monthly subscription charges, applies regional sales taxes (VAT, GST) dynamically, sends automated polite dunning emails for failed credit cards, and produces PDF invoices with custom company branding.",
    category: "Fintech",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Billing Engineer",
    startDate: "2023-11",
    completionDate: "2024-04",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL", "Prisma"],
    images: ["https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/invoicex-smart-billing",
    githubUrl: "https://github.com/developer/invoicex-smart-billing",
    problem: "SaaS founders lose 4-9% of monthly revenue to involuntary churn caused by expired cards, failed charges, and cumbersome manual invoice reconciliation.",
    solution: "Created an autonomous revenue recovery engine with smart card retries, self-service payment update links, and instant branded PDF invoice generation.",
    features: [
      "Custom branded invoice generator with customizable line items, discounts, and payment terms",
      "Automated dunning workflow engine retrying failed cards on optimal days of the week",
      "Real-time Monthly Recurring Revenue (MRR), Churn, and Net Revenue Retention dials",
      "Multi-currency support with automatic localized tax identification number validation",
      "Client payment portal where customers can view payment history and download receipts"
    ],
    architecture: {
      overview: "Next.js App Router billing management cockpit linked with Stripe webhook handlers and a PostgreSQL recurring ledger.",
      components: [
        { name: "Subscription State Machine", description: "Deterministic finite-state machine handling Trialing, Active, Past Due, and Canceled states." },
        { name: "Branded PDF Builder", description: "Headless Chromium PDF generator creating pixel-perfect printable tax invoices." },
        { name: "Smart Dunning Scheduler", description: "Automated retry queue using machine-learning optimal retry hours to recover revenue." }
      ]
    },
    challenges: ["Ensuring idempotent processing of duplicate Stripe webhook event deliveries."],
    solutions: ["Implemented database event locks and unique idempotency keys on every transaction record."],
    results: ["Recovered an estimated 72% of failed subscription renewals during client deployment."],
    lessonsLearned: ["Idempotent webhook handlers are the single most important rule in billing engineering."],
    relatedServices: ["web-apps", "custom-software"]
  },
  {
    title: "PayStream — Instant Credit Assessment & Micro-Lending Portal",
    slug: "paystream-microloans",
    shortDescription: "Automated credit risk assessment and micro-lending portal featuring algorithmic credit scoring, instant loan disbursements, and payback schedules.",
    fullDescription: "PayStream is a fintech lending platform designed for emerging market micro-entrepreneurs. It calculates creditworthiness using alternative data inputs (mobile money transaction history, business turnover), delivers automated loan approval decisions within 90 seconds, and tracks amortization repayment schedules.",
    category: "Fintech",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Fintech Full-Stack Architect",
    startDate: "2024-01",
    completionDate: "2024-06",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Zod"],
    images: ["https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/paystream-microloans",
    githubUrl: "https://github.com/developer/paystream-microloans",
    problem: "Small business owners without traditional credit histories are shut out from commercial bank loans due to slow, bureaucratic underwriting.",
    solution: "Engineered a rapid digital loan application portal evaluating business cashflow inputs and providing automated, transparent micro-loan offers.",
    features: [
      "90-second instant loan application with dynamic repayment calculator sliders",
      "Automated credit risk scoring algorithm evaluating debt-to-income and cashflow health",
      "Interactive repayment calendar with automated reminder notifications via SMS and email",
      "Early repayment discount calculator incentivizing timely loan settlements",
      "Lender portfolio health dashboard tracking Non-Performing Loan (NPL) ratios"
    ],
    architecture: {
      overview: "Next.js customer portal and admin risk console connected to a strict double-entry PostgreSQL ledger and rules-based underwriting engine.",
      components: [
        { name: "Credit Risk Evaluator", description: "Rules-based underwriting engine computing scorecards and risk-adjusted interest rates." },
        { name: "Loan Amortization Engine", description: "Generates precise payment installment schedules with split principal/interest." },
        { name: "Disbursement Gateway", description: "Mock payment integration simulating direct bank and mobile wallet transfers." }
      ]
    },
    challenges: ["Preventing mathematical errors in compound interest and early payment penalty calculations."],
    solutions: ["Built comprehensive test suites with over 200 mathematical edge-case unit assertions."],
    results: ["Processed over $1.2M in simulated micro-loans with 0% balance discrepancy."],
    lessonsLearned: ["Transparent fee breakdowns without hidden charges increase borrower repayment compliance."],
    relatedServices: ["web-apps", "custom-software"]
  },

  // ────────────────── 6. Business Systems (Exactly 4 Projects) ──────────────────
  {
    title: "Apex Logistics — Fleet Tracking & Dispatch Management Core",
    slug: "apex-logistics-core",
    shortDescription: "Real-time vehicle telemetry and automated dispatch management system with interactive geo-fencing and route cost analytics.",
    fullDescription: "Apex Logistics Core is a mission-critical web application built for transport and distribution companies. It centralizes GPS vehicle coordinates, fuel consumption metrics, driver manifests, and dynamic dispatch scheduling in a unified operator console.",
    category: "Business Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Developer",
    startDate: "2023-06",
    completionDate: "2023-12",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Leaflet / Mapbox", "Node.js"],
    images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/apex-logistics-core",
    githubUrl: "https://github.com/developer/apex-logistics",
    problem: "Dispatch operators relied on paper manifests, phone calls, and disconnected GPS portals, causing delivery delays, idle fleet time, and inaccurate ETA estimates.",
    solution: "Developed a centralized dispatch cockpit that visualizes live fleet positions, automates delivery route assignments, and notifies customers with accurate ETAs.",
    features: [
      "Interactive map with vehicle cluster markers and real-time status pulses",
      "Automated dispatch assignment matching cargo weight with vehicle capacity",
      "Geo-fencing alert engine triggering notifications on perimeter arrival",
      "Fuel efficiency and maintenance scheduling audit logs"
    ],
    architecture: {
      overview: "Next.js frontend coupled with high-concurrency WebSocket telemetry channels and spatial PostgreSQL PostGIS query indexes.",
      components: [
        { name: "Fleet Map Canvas", description: "Spatial rendering engine displaying hundreds of vehicle pin positions smoothly." },
        { name: "Dispatch Auto-Scheduler", description: "Algorithmic allocator matching driver shifts with delivery manifests." },
        { name: "Geo-Fence Trigger", description: "PostGIS spatial intersection checker firing automated arrival alerts." }
      ]
    },
    challenges: ["Rendering hundreds of moving vehicle markers on an interactive map without browser lag."],
    solutions: ["Implemented marker canvas rendering and spatial quad-tree clustering."],
    results: ["Reduced fleet idle time by 28% across initial company deployment."],
    lessonsLearned: ["High-contrast dark interfaces significantly reduce operator fatigue during night shifts."],
    relatedServices: ["business-systems", "web-apps"]
  },
  {
    title: "NexusERP — Enterprise Supply Chain & Warehouse Inventory",
    slug: "nexus-erp-inventory",
    shortDescription: "Enterprise multi-warehouse resource planning platform with barcode scanning, automated reorder thresholds, and bin-location tracking.",
    fullDescription: "NexusERP is an industrial inventory control and supply chain web application built for distribution centers. It tracks stock movements across multiple physical warehouses, manages serial numbers and batch lot expiration dates, and automatically issues purchase requisitions when stock dips below safety thresholds.",
    category: "Business Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Lead Systems & Enterprise Developer",
    startDate: "2023-08",
    completionDate: "2024-02",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Zod"],
    images: ["https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/nexus-erp-inventory",
    githubUrl: "https://github.com/developer/nexus-erp",
    problem: "Warehouse workers face misplaced inventory, manual stock counting discrepancies, and unexpected stock-outs on fast-moving SKUs.",
    solution: "Built a centralized warehouse cockpit with multi-location bin coordinates, mobile camera barcode scanning, and automated purchase order generation.",
    features: [
      "Multi-warehouse stock visibility with real-time transfer orders between distribution centers",
      "Bin, aisle, and shelf coordinate mapping for rapid warehouse picker routing",
      "Automated Low Stock warning alerts and auto-draft supplier purchase orders",
      "Batch lot tracking with expiration date alerts for perishable goods",
      "Comprehensive stock audit trail logging every scan, pick, pack, and adjustment"
    ],
    architecture: {
      overview: "Next.js application utilizing normalized relational database tables with strict transactional isolation to guarantee inventory accuracy.",
      components: [
        { name: "Inventory Ledger Table", description: "Append-only inventory movement ledger guaranteeing zero phantom stock discrepancies." },
        { name: "Barcode Scanner Hook", description: "Webcam and hardware USB laser barcode scanner input listener with instant SKU lookup." },
        { name: "Reorder Trigger Engine", description: "Automated cron evaluator checking inventory levels against reorder point algorithms." }
      ]
    },
    challenges: ["Preventing inventory race conditions when multiple pickers grab the last remaining unit."],
    solutions: ["Employed PostgreSQL SELECT FOR UPDATE row-level pessimistic locking during order allocation."],
    results: ["99.9% inventory record accuracy verified during physical inventory audits."],
    lessonsLearned: ["An append-only movement ledger is essential for auditing why stock counts ever change."],
    relatedServices: ["business-systems", "custom-software"]
  },
  {
    title: "StaffSync — Human Resources, Shift Scheduling & Payroll Core",
    slug: "staffsync-hr-platform",
    shortDescription: "Complete workforce management platform featuring drag-and-drop shift scheduling, employee time-tracking, and automated tax payroll runs.",
    fullDescription: "StaffSync is an enterprise workforce management system designed for mid-size retail chains and healthcare facilities. It replaces chaotic spreadsheet rosters with smart shift allocation, handles paid time off (PTO) approval workflows, and calculates gross-to-net payroll with tax withholdings.",
    category: "Business Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Full-Stack Enterprise Architect",
    startDate: "2023-09",
    completionDate: "2024-03",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Prisma"],
    images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/staffsync-hr-platform",
    githubUrl: "https://github.com/developer/staffsync-hr",
    problem: "Managers spend hours dealing with shift swap requests, overtime compliance violations, and manual paycheck calculations.",
    solution: "Engineered an intuitive scheduling portal enforcing labor law compliance, automated employee shift trade requests, and one-click payroll generation.",
    features: [
      "Visual weekly shift roster calendar with drag-and-drop scheduling and conflict warnings",
      "Employee self-service portal for clocking in/out, requesting PTO, and viewing pay stubs",
      "Overtime threshold detector preventing accidental labor law penalty violations",
      "Automated gross-to-net payroll calculator with income tax, social security, and benefit deductions",
      "Company directory and organizational hierarchy tree chart"
    ],
    architecture: {
      overview: "Next.js App Router application with role-based access control guards (Employee, Manager, HR Admin) and encrypted employee PII storage.",
      components: [
        { name: "Shift Constraint Checker", description: "Validates minimum rest hours between consecutive shifts and maximum weekly limits." },
        { name: "Payroll Calculator Core", description: "Configurable tax deduction rules engine calculating net salaries in seconds." },
        { name: "Timecard Geo-Validator", description: "Checks mobile GPS clock-in coordinates against verified workplace perimeters." }
      ]
    },
    challenges: ["Designing an intuitive weekly schedule view that handles hundreds of employees effortlessly."],
    solutions: ["Built a virtualized CSS grid table rendering only the visible viewport rows."],
    results: ["Cut manager weekly scheduling time from 6 hours down to 35 minutes."],
    lessonsLearned: ["Clear visual indicators for employee availability drastically reduce shift scheduling conflicts."],
    relatedServices: ["business-systems", "web-apps"]
  },
  {
    title: "ProcuraTrack — Enterprise Vendor Management & Bidding",
    slug: "procuratrack-procurement",
    shortDescription: "Corporate procurement portal featuring competitive vendor RFQ bidding, purchase order approval hierarchies, and spend budget analytics.",
    fullDescription: "ProcuraTrack is a corporate procurement and spend management application built for large enterprises. It centralizes supplier onboarding, competitive Request for Quotation (RFQ) bidding, multi-tier purchase approval matrices, and department budget compliance.",
    category: "Business Systems",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Lead Full-Stack Developer",
    startDate: "2023-05",
    completionDate: "2023-11",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Zod"],
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/procuratrack-procurement",
    githubUrl: "https://github.com/developer/procuratrack-procurement",
    problem: "Corporate spend is often rogue, decentralized, and difficult to audit, leading to budget overruns and missed vendor volume discounts.",
    solution: "Created a formal procurement lifecycle system routing purchase requisitions through automatic approval chains before issuing purchase orders.",
    features: [
      "Multi-stage purchase requisition workflow with dynamic manager approval thresholds",
      "Vendor quotation comparison matrix showing side-by-side bids, delivery dates, and terms",
      "Real-time department budget burn rate meters preventing accidental budget overdrafts",
      "Vendor performance scorecard tracking on-time delivery rates and goods quality scores",
      "Three-way matching engine verifying Purchase Order, Receiving Receipt, and Supplier Invoice"
    ],
    architecture: {
      overview: "Next.js enterprise portal utilizing transactional PostgreSQL mutations and strict audit trail logging on all spending approvals.",
      components: [
        { name: "Approval Chain Router", description: "Evaluates purchase dollar amounts to determine required executive sign-offs." },
        { name: "3-Way Match Verification", description: "Automated reconciler matching quantities and prices across order, receipt, and invoice." },
        { name: "Budget Monitor", description: "Sliding-window expense tracker reserving budget funds before purchase approval." }
      ]
    },
    challenges: ["Managing complex conditional approval routing with multiple executive tiers."],
    solutions: ["Implemented a directed graph approval workflow engine with automated email escalation."],
    results: ["Prevented 100% of unauthorized unapproved corporate purchase orders."],
    lessonsLearned: ["Three-way matching prevents overpaying on incomplete supplier deliveries."],
    relatedServices: ["business-systems", "custom-software"]
  },

  // ────────────────── 7. APIs & Backend (Exactly 4 Projects) ──────────────────
  {
    title: "Synthetix — Distributed API Gateway & Token Broker",
    slug: "synthetix-api-gateway",
    shortDescription: "High-throughput microservice routing gateway featuring distributed token-bucket rate limiting, JWT key rotation, and live metrics logging.",
    fullDescription: "Synthetix is a high-performance API gateway engineered to sit at the edge of distributed cloud microservices. It intercepts incoming client traffic, enforces cryptographic token authentication, applies adaptive rate-limiting per client tier, and proxies requests with minimal added latency.",
    category: "APIs & Backend",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Backend & Systems Engineer",
    startDate: "2023-11",
    completionDate: "2024-03",
    technologies: ["Node.js", "TypeScript", "Express / Fastify", "Redis", "Docker", "Linux"],
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/synthetix-api-gateway",
    githubUrl: "https://github.com/developer/synthetix-gateway",
    problem: "Growing microservice architectures duplicate authentication, rate-limiting, and telemetry logic across every downstream service.",
    solution: "Centralized edge routing into a unified gateway that offloads security verification, caches queries in Redis, and standardizes errors.",
    features: [
      "Token-bucket rate limiting algorithm backed by distributed Redis clusters",
      "Automated asymmetric RS256 JWT key rotation and blacklist validation",
      "Dynamic reverse proxy routing with zero-downtime hot reloading of route tables",
      "Structured JSON logging with unique trace-ID propagation across headers",
      "Circuit breaker pattern preventing cascading service failures during outages"
    ],
    challenges: ["Keeping proxy overhead under 5 milliseconds under heavy concurrent load."],
    solutions: ["Utilized Fastify's zero-overhead schema compilation and pooled HTTP agents."],
    results: ["Maintained <4ms median routing overhead under 15,000 requests/sec load test."],
    lessonsLearned: ["Stateless gateways paired with distributed Redis provide virtually unlimited horizontal scalability."],
    relatedServices: ["backend-apis", "custom-software"]
  },
  {
    title: "QueueMaster — Distributed Pub/Sub Message Broker & Stream Worker",
    slug: "queuemaster-event-broker",
    shortDescription: "High-concurrency distributed message queuing service featuring topic fan-out, dead-letter retries, and exactly-once processing guarantees.",
    fullDescription: "QueueMaster is an asynchronous event streaming and task distribution engine built for decoupling heavy background processing jobs (video transcoding, email dispatch, report rollups) from customer-facing web servers. It guarantees message delivery with configurable exponential backoff retries.",
    category: "APIs & Backend",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Distributed Systems & Backend Engineer",
    startDate: "2023-12",
    completionDate: "2024-05",
    technologies: ["Node.js", "TypeScript", "Redis Streams", "RabbitMQ", "Docker", "Prometheus"],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/queuemaster-event-broker",
    githubUrl: "https://github.com/developer/queuemaster-broker",
    problem: "Synchronous HTTP requests choke web servers during traffic spikes when executing heavy database mutations and long-running background tasks.",
    solution: "Engineered an asynchronous message broker queue that absorbs spikes, distributes workloads across scalable worker pools, and isolates failures.",
    features: [
      "Topic-based publisher/subscriber fan-out distributing events to multiple microservices",
      "Dead Letter Queue (DLQ) capturing permanently failed messages with inspection payloads",
      "Adaptive exponential backoff retry mechanism preventing downstream server flooding",
      "Live queue depth and consumer lag metrics exported to Prometheus and Grafana",
      "Priority message queues ensuring urgent notification events skip ahead of batch reports"
    ],
    architecture: {
      overview: "High-throughput Node.js worker cluster backed by Redis Streams consumer groups and persistent disk journaling.",
      components: [
        { name: "Message Ingestion Core", description: "Validates message payloads against JSON schemas before committing to queue logs." },
        { name: "Consumer Pool Orchestrator", description: "Dynamically scales worker threads based on consumer group message lag." },
        { name: "Dead-Letter Inspector", description: "Admin web console allowing engineers to view, edit, and re-queue failed messages." }
      ]
    },
    challenges: ["Preventing message duplication during sudden worker crash restarts."],
    solutions: ["Implemented message deduplication cache using atomic Redis SETNX idempotency locks."],
    results: ["Processed over 25,000,000 background jobs with zero lost payloads in stress testing."],
    lessonsLearned: ["Always separate urgent transactional queues from slow batch data aggregation jobs."],
    relatedServices: ["backend-apis", "custom-software"]
  },
  {
    title: "AuthVault — Multi-Tenant Identity & Access Management (IAM)",
    slug: "authvault-iam-service",
    shortDescription: "Centralized identity provider microservice featuring OAuth2 / OIDC server, passkey biometric login, and granular RBAC permission policies.",
    fullDescription: "AuthVault is a standalone authentication and authorization service built to handle user identities across a suite of SaaS applications. It supports passwordless WebAuthn biometric passkeys, social logins (Google, GitHub, Apple), multi-factor authenticator app codes (TOTP), and fine-grained permissions.",
    category: "APIs & Backend",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "Security & Authentication Engineer",
    startDate: "2023-10",
    completionDate: "2024-03",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "WebCrypto", "Redis", "Docker"],
    images: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/authvault-iam-service",
    githubUrl: "https://github.com/developer/authvault-iam",
    problem: "Duplicating login forms, password hashing, MFA verification, and session token logic across multiple microservices creates critical security holes.",
    solution: "Constructed a hardened OpenID Connect (OIDC) identity provider microservice centralizing single sign-on (SSO), biometric passkeys, and token issuance.",
    features: [
      "OIDC & OAuth 2.0 compliant authorization server issuing signed asymmetric JWT tokens",
      "WebAuthn Passkey support enabling biometric FaceID and TouchID passwordless logins",
      "TOTP Authenticator app MFA with QR code pairing and emergency backup codes",
      "Granular Role-Based and Attribute-Based Access Control (RBAC/ABAC) policy engine",
      "Real-time suspicious login detection flagging unfamiliar geo-locations and brute-force attempts"
    ],
    architecture: {
      overview: "Hardened Node.js authentication microservice utilizing argon2id password hashing and Redis token revocation registries.",
      components: [
        { name: "Token Broker Core", description: "Issues RS256 signed access and refresh tokens with automatic key pair rotation." },
        { name: "Passkey Authenticator", description: "Validates FIDO2 hardware cryptographic challenge signatures." },
        { name: "Threat & Anomaly Guard", description: "Enforces rate-limits and sends login security alert emails on unfamiliar IP logins." }
      ]
    },
    challenges: ["Supporting instant token revocation across microservices without hitting database on every API call."],
    solutions: ["Distributed a short-lived 15-minute JWT paired with a Redis blacklist cache for instant revocation."],
    results: ["Passed automated OWASP Top 10 penetration testing with zero critical vulnerabilities."],
    lessonsLearned: ["Argon2id is the gold standard for password hashing with tuned memory cost parameters."],
    relatedServices: ["backend-apis", "custom-software"]
  },
  {
    title: "CacheGrid — Low-Latency In-Memory Caching & Session Engine",
    slug: "cachegrid-redis-engine",
    shortDescription: "Ultra-fast distributed caching middleware featuring cache-aside patterns, automatic cache stampede protection, and memory telemetry.",
    fullDescription: "CacheGrid is an enterprise caching microservice layer engineered to sit between heavy relational databases and high-traffic web applications. It implements intelligent cache-aside strategies, probabilistic early expiration to prevent cache stampedes, and compression pipelines.",
    category: "APIs & Backend",
    secondaryCategories: [],
    status: "Completed",
    featured: false,
    role: "High-Performance Backend Engineer",
    startDate: "2023-09",
    completionDate: "2024-02",
    technologies: ["Node.js", "TypeScript", "Redis", "Snappy", "Docker", "Jest"],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"],
    liveUrl: "/apps/cachegrid-redis-engine",
    githubUrl: "https://github.com/developer/cachegrid-engine",
    problem: "Relational database CPU usage spikes to 100% when thousands of users query the same popular data, causing site outages.",
    solution: "Built a distributed caching wrapper that offloads 92% of read queries to in-memory Redis, compresses large JSON payloads, and handles cache stampedes gracefully.",
    features: [
      "Cache-aside pattern with automatic fallback and async background database rehydration",
      "XFetch probabilistic early expiration algorithm preventing cache stampede thundering herds",
      "High-speed Snappy payload compression shrinking memory footprints by up to 65%",
      "Multi-region master-replica read-splitting reducing cross-region network latency",
      "Live cache hit/miss ratio telemetry dashboard with key memory size profiler"
    ],
    architecture: {
      overview: "High-throughput TypeScript middleware library integrated with Redis cluster nodes and Snappy compression workers.",
      components: [
        { name: "Probabilistic Expire Engine", description: "Re-computes cached items before expiration if read traffic is heavy." },
        { name: "Compression Pipeline", description: "Snappy streaming compression reducing memory consumption and network transfer time." },
        { name: "Cluster Health Sentinel", description: "Monitors Redis node availability and handles automatic failover routing." }
      ]
    },
    challenges: ["Preventing massive database spikes when high-traffic cache keys expire simultaneously."],
    solutions: ["Implemented the optimal XFetch algorithm to refresh keys before expiration under load."],
    results: ["Reduced average database CPU utilization from 88% down to 14% under peak load."],
    lessonsLearned: ["Snappy compression strikes the ideal balance between low CPU overhead and high compression ratio."],
    relatedServices: ["backend-apis", "custom-software"]
  }
];

const fileContent = `import { Project } from "@/types/portfolio";\n\nexport const projectsData: Project[] = ${JSON.stringify(projects, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/projects.ts'), fileContent, 'utf8');

// Summary by category
const catCounts = {};
projects.forEach(p => {
  catCounts[p.category] = (catCounts[p.category] || 0) + 1;
});

console.log('SUMMARY_OF_PROJECTS_PER_CATEGORY:', JSON.stringify(catCounts, null, 2));
console.log('TOTAL_PROJECTS:', projects.length);
