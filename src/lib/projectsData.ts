export interface Project {
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  collaboration?: "solo" | "team";
  gradient?: string;
  iconName?: string;
  textColor?: string;
  backgroundGradient?: string;
  // backgroundColor?: string;
  shadowClassName?: string;
  headerColor?: string;
  live?: string;
  repo: string;
  caseStudy: {
    problemStatement: {
      title: string;
      description: string;
      challenges?: string[];
    };
    researchPlanning?: {
      title: string;
      description: string;
      findings?: string[];
    };
    engineering: {
      title: string;
      description: string;
      architecture?: string[];
      decisions?: { title: string; description: string }[];
    };
    designUX?: {
      title: string;
      description: string;
      highlights?: string[];
    };
    nextSteps?: {
      title: string;
      description: string;
      items?: string[];
    };
  };
}

export const PROJECTS: Project[] = [
  {
    name: "velto",
    title: "Velto",
    subtitle:
      "Multi‑tenant SME platform with branded storefronts and social feed",
    desc: "Empowers Nigerian SMEs to sell products or services via their own subdomain, discovered through a video feed and marketplace.",
    tags: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Bull",
      "TypeScript",
      "Docker",
      "Twilio",
      "SendGrid",
    ],
    collaboration: "solo",
    iconName: "Store",
    textColor: "text-[#86198F]",
    gradient: "linear-gradient(145deg, #C026D3b3, #e9eefa)",
    backgroundGradient: "from-fuchsia-500 to-fuchsia-600",
    shadowClassName: "shadow-lg",
    headerColor: "from-fuchsia-500 via-fuchsia-300 to-fuchsia-300",
    repo: "",
    caseStudy: {
      problemStatement: {
        title: "Nigerian SMEs struggle to move beyond WhatsApp/Instagram",
        description:
          "Micro‑businesses lack a dedicated online presence with built‑in discovery, leading to lost sales and inefficient customer management.",
        challenges: [
          "No easy way to create a branded storefront",
          "Customers discover shops only through manual sharing",
          "No unified order/booking system",
        ],
      },
      engineering: {
        title: "Modular monolith with DDD‑lite",
        description:
          "Built a scalable backend using NestJS, Prisma, and PostgreSQL with subdomain resolution, cookie‑based JWT auth, and Bull queues for WhatsApp/email notifications.",
        architecture: [
          "Wildcard DNS (`*.velto.app`) maps to the same NestJS app",
          "Tenant middleware extracts subdomain and attaches tenant to request",
          "EventBus routes domain events to dedicated Bull queues (email, WhatsApp, analytics)",
          "Prisma with `@prisma/adapter-pg` for connection pooling",
        ],
        decisions: [
          {
            title: "Custom error handling with error codes",
            description:
              "All errors return a structured JSON with a unique code (e.g., `AUTH_100`) for frontend mapping.",
          },
          {
            title: "Explicit serializers instead of class‑transformer",
            description:
              "Prevents accidental password/refreshToken leaks and makes response shaping clear.",
          },
          {
            title: "Separate queues per side‑effect",
            description:
              "Email, WhatsApp, and analytics queues can scale independently and have different retry policies.",
          },
        ],
      },
      designUX: {
        title: "Gen‑Z focused discovery feed",
        description:
          "Customers see video/image posts from followed tenants and trending content, then click through to a branded subdomain storefront.",
        highlights: [
          "Posts with likes, comments, and shares",
          "Follow/unfollow tenants",
          "Marketplace filtering by category, location, and business type",
        ],
      },
      nextSteps: {
        title: "Planned enhancements",
        description:
          "Add Paystack integration, advanced analytics dashboard, and push notifications.",
        items: [
          "Payment gateway (Paystack)",
          "Real‑time order tracking",
          "Vendor analytics dashboard",
          "Mobile app with Expo",
        ],
      },
    },
  },
  {
    name: "verifyhub",
    title: "Verify Hub",
    subtitle:
      "Enterprise verification portal for Nigerian identity and compliance",
    desc: "Platform for admins to verify NIN, BVN, CAC, and perform PEP/AML screenings with real-time results, bulk operations, and secure 2FA authentication.",
    collaboration: "team",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Axios",
      "Framer Motion",
      "RSA Encryption",
      "Admin Dashboard",
    ],
    iconName: "MdShield",
    textColor: "text-[#0F766E]",
    gradient: "linear-gradient(145deg, #0D9488b3, #e9eefa)",
    backgroundGradient: "from-teal-500 to-teal-600",
    shadowClassName: "shadow-teal-500/40",
    headerColor: "from-teal-500 via-teal-200 to-teal-200",
    live: "https://verifyhub.ng",
    repo: "https://github.com/Timonics/verification-portal",
    caseStudy: {
      problemStatement: {
        title:
          "Build an enterprise-grade verification portal for Nigerian identity and compliance services",
        description:
          "The platform needed to provide a modern, admin-facing dashboard for verifying NIN, BVN, CAC, and performing PEP/AML screenings. Key requirements included real‑time verification, secure data handling (encryption, NDPR compliance), comprehensive logging, bulk operations, and a clean, futuristic UI with smooth interactions.",
      },
      researchPlanning: {
        title: "Team Planning – My Role: Frontend Lead",
        description:
          "I planned the frontend architecture: chose Next.js 14+ App Router, Tailwind CSS, shadcn/ui, React Query, Axios, Framer Motion. Defined folder structure, coding patterns (types, services, hooks), and authentication flow with HTTP‑only cookies and 2FA. Coordinated with backend teammate to define API contracts.",
        findings: [
          "Chose RSA‑OAEP encryption for NIN/BVN transmission using the backend’s public key (implemented on frontend).",
          "Decided to use Next.js API routes as proxies to avoid CORS and attach auth tokens – backend teammate provided the actual API endpoints.",
          "Adopted React Query for state management and caching of user data and verification results.",
          "Created a frontend service layer that calls the backend APIs (via our proxy routes).",
        ],
      },
      engineering: {
        title: "My Frontend Engineering Contributions",
        description:
          "I built all frontend components, pages, state management, encryption utilities, form validation, and integration with the backend APIs (provided by teammate).",
        architecture: [
          "Auth UI: login and 2FA (OTP) pages, with paste‑friendly inputs and validation.",
          "NIN verification frontend: fetch public key, encrypt NIN with WebCrypto, call backend API via proxy, display result card.",
          "BVN verification: same encryption pattern, separate form and result card.",
          "CAC business search: form with RC number and company type, consume teammate’s /admin/cac/verify endpoint.",
          "AML/PEP screening: entity type toggle, fields for individual/organisation, consume /admin/aml/screen endpoint, result card with tabs.",
          "Bulk NIN retrieval: Excel/CSV upload, XLSX parsing, row‑by‑row API calls, matching logic (first+last+DOB+gender+phone OR first+middle+last+DOB+gender+phone), progress bar, export results, comparison modal.",
          "Activity logs page: localStorage storage (since backend logs not yet available – placeholder).",
          "API Calls page (logs) with filtering, search, and mock data (ready for real backend integration).",
          "Contact page with form that logs submission (EmailJS ready).",
          "Frontend service layer using Axios to call proxy routes; proxy routes forward requests to teammate’s backend.",
        ],
        decisions: [
          {
            title:
              "Use HTTP‑only cookies for auth tokens (frontend only – backend sets the cookie)",
            description:
              "I worked with backend teammate to ensure the login and 2FA endpoints set the auth_token cookie, which I then used in all subsequent API calls.",
          },
          {
            title: "Client‑side encryption for NIN and BVN",
            description:
              "I implemented the RSA‑OAEP encryption using WebCrypto, fetching the public key from the backend endpoint provided by teammate.",
          },
          {
            title: "Manual tabs for AML result card",
            description:
              "I replaced shadcn Tabs with manual state and flex buttons to avoid layout issues and give a smoother UI.",
          },
          {
            title: "Bulk NIN retrieval matching logic",
            description:
              "I implemented the two matching conditions directly in the frontend, using the phone‑based NIN lookup API provided by teammate.",
          },
        ],
      },
      designUX: {
        title: "My Design Contributions",
        description:
          "I designed the entire user interface from scratch, following the provided colour palette (teal primary, light theme, glassmorphism) and typography (Geist for headings, Satoshi for body).",
        highlights: [
          "Landing page with animated background blobs, hero section, service cards, and stats.",
          "Login and OTP pages with gradient backgrounds, spring animations, and paste‑friendly OTP inputs.",
          "Dashboard with summary cards, quick actions, recent activity, and service popularity (no charts per user request).",
          "Verification forms (NIN, BVN, CAC) with real‑time validation, consent checkboxes, and security badges.",
          "Result cards that display API‑returned fields (first name, last name, middle name, DOB, gender, phone, photo, NIN/BVN).",
          "Bulk upload page with file drop, progress bar, animated table rows, and detailed comparison modal.",
          "AML result card with manual tabs, side‑by‑side field comparison for PEP/Sanctions, and collapsible articles for Adverse Media.",
          "Responsive tables for logs and activity, with sorting and pagination.",
        ],
      },
      nextSteps: {
        title: "Future Enhancements",
        description:
          "Replace mock activity logs with backend audit logs, add WebSocket for real‑time bulk processing status, implement user roles and permissions (frontend views), and enhance error handling with retry logic.",
        items: [
          "Integrate real audit logs endpoint (backend teammate to provide).",
          "Add support for BN number in CAC search (once API supports it).",
          "Implement silent token refresh to avoid frequent logouts (coordinate with backend).",
          "Enhance bulk upload with concurrent batch processing and rate‑limit handling.",
        ],
      },
    },
  },
  {
    name: "chatbin",
    title: "ChatBin",
    subtitle: "Self-destructing secret sharing",
    desc: "A secure, self-destructing secret sharing service for sensitive information.",
    tags: ["NestJS", "BullMQ", "Prisma"],
    collaboration: "solo",
    iconName: "Lock", // renamed from icon
    textColor: "text-[#9A3412]",
    gradient: "linear-gradient(145deg, #EA580Cb3, #e9eefa)",
    backgroundGradient: "from-orange-500 to-orange-600",
    shadowClassName: "shadow-lg shadow-orange-400/30",
    headerColor: "from-orange-500 via-orange-300 to-orange-200", // default, since not specified
    live: undefined, // no live URL provided
    repo: "https://github.com/Timonics/chat-bin",
    caseStudy: {
      problemStatement: {
        title:
          "Give users a privacy-first way to share sensitive strings (passwords, tokens) that self-destruct after access or expiry.",
        description:
          "People frequently share secrets via chat or email which persists indefinitely. ChatBin provides short-lived links with single-read semantics and background deletion to reduce exposure risk.",
        challenges: [
          "Ensuring true single-read semantics (no replay after first view)",
          "Preventing link scraping and abuse with rate-limiting and CAPTCHA",
          "Secure encryption at rest without compromising performance",
        ],
      },
      researchPlanning: {
        title: "Research & Threat Modeling",
        description:
          "Benchmarked existing secret-sharing services and defined threat model.",
        findings: [
          "Benchmarked Privnote and OneTimeSecret for UX and threat model",
          "Defined threat model: link scraping, replay attacks, and server compromise",
          "Designed expiry options: one-read, timed expiry, and manual revoke",
        ],
      },
      engineering: {
        title: "Backend Architecture",
        description:
          "Built with NestJS, Prisma, BullMQ for reliable secret disposal and AES encryption.",
        architecture: [
          "NestJS API with Prisma + Postgres for secure data models",
          "AES encryption at rest for secret payloads, keys managed separately",
          "One-time token generation and single-read retrieval endpoint",
          "BullMQ background jobs to auto-delete expired secrets and rotate cleanup",
          "Rate-limiting, IP throttling and optional CAPTCHA for abuse protection",
          "Deployment: Render/DigitalOcean + managed Postgres/Redis, Cloudflare DDoS protection",
        ],
        decisions: [
          {
            title: "BullMQ over cron jobs",
            description:
              "Ensures reliable deletion even after server restarts and provides retry semantics.",
          },
          {
            title: "AES encryption at rest",
            description:
              "Secrets are encrypted before database storage; keys are stored separately to mitigate server compromise risks.",
          },
          {
            title: "Single-read token invalidation",
            description:
              "Tokens are invalidated immediately after retrieval, preventing replay attacks via the same link.",
          },
        ],
      },
      nextSteps: {
        title: "Future Enhancements",
        description:
          "Planned improvements to expand security, usability, and enterprise features.",
        items: [
          "Add optional end-to-end (client-side) encryption",
          "Introduce enterprise features: audit logs and SSO",
          "Add link PIN protection and custom expiration policies",
        ],
      },
    },
  },
  {
    name: "lifedata",
    title: "LifeData",
    subtitle: "All‑in‑one insurance onboarding & KYC platform",
    desc: "Complete employee data management with KYC verification, NIN/BVN encryption, admin/company portals, and group life registration.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "RSA Encryption",
      "KYC",
      "Admin Dashboard",
    ],
    collaboration: "team",
    iconName: "RiHeartPulseFill",
    textColor: "text-[#1E40AF]",
    gradient: "linear-gradient(145deg, #2563EBb3, #e9eefa)",
    backgroundGradient: "from-blue-500 to-blue-600",
    shadowClassName: "shadow-lg",
    headerColor: "from-blue-600 to-blue-200",
    live: "",
    repo: "",
    caseStudy: {
      problemStatement: {
        title: "Fragmented insurance onboarding and manual KYC",
        description:
          "Insurance companies needed a unified platform to onboard individuals, corporate clients, and employees under group life policies, with secure verification of NIN/BVN and document management.",
        challenges: [
          "Implement RSA encryption for sensitive data",
          "Support multiple registration types (individual, corporate, employee group life)",
          "Provide separate portals for admins, companies, and employees",
          "Handle admin verification of NIN and CAC records",
          "Role‑based permissions for admin users",
        ],
      },
      researchPlanning: {
        title: "System Design",
        description:
          "Designed a modular architecture with separate onboarding wizard, admin dashboard, and company portal. Used TanStack Query for data fetching and Next.js API routes as proxy to backend.",
        findings: [
          "RSA-OAEP with SHA-1 is required for NIN/BVN encryption",
          "Multi‑step forms need client‑side validation and progress tracking",
          "Admin verification requires comparison of official records with user‑submitted data",
        ],
      },
      engineering: {
        title: "Technical Implementation",
        description:
          "Built a Next.js 14 frontend with TypeScript, Tailwind CSS, React Hook Form, and Zod. Implemented RSA encryption using Web Crypto API, dynamic onboarding steps, and admin verification modals.",
        architecture: [
          "Next.js App Router",
          "TanStack Query for server state",
          "Axios with interceptors for auth",
          "React Hook Form + Zod",
          "Tailwind CSS with shadcn/ui",
          "RSA-OAEP encryption (SHA-1)",
          "Proxy API routes to Laravel backend",
        ],
        decisions: [
          {
            title: "Client‑side encryption",
            description:
              "Used RSA public key from backend to encrypt NIN/BVN before sending, ensuring plaintext never leaves the browser.",
          },
          {
            title: "Modular onboarding steps",
            description:
              "Created a wizard with conditional sections (personal, bank, identity) that adapts to account type (individual, corporate, employee).",
          },
          {
            title: "Admin verification modal",
            description:
              "Built a unified modal that fetches official NIN records via public API and compares them with user‑submitted data, allowing approve/reject with reason.",
          },
          {
            title: "Role‑based UI",
            description:
              "Implemented permission checks using React Query and custom hooks to conditionally render admin tools based on user roles.",
          },
        ],
      },
      designUX: {
        title: "User Experience Design",
        description:
          "Designed a responsive, glassmorphism‑inspired UI with dark/light themes, progress indicators, and side‑by‑side comparison in verification modals.",
        highlights: [
          "Multi‑step onboarding wizard with collapsible sections and real‑time validation",
          "Admin dashboard with KPI cards, charts, and verification tabs (NIN, documents, companies)",
          "Company portal with employee management, invitation table, and pending invitation cards",
          "Verification modal that displays official records vs. user input with match status badges",
        ],
      },
      nextSteps: {
        title: "Future Enhancements",
        description:
          "Planned improvements include CAC verification, AML/PEP screening, bulk import/export, and real‑time notifications.",
        items: [
          "Integrate CAC verification API",
          "Add AML/PEP screening for individuals and directors",
          "Enhance bulk CSV import with validation and preview",
          "Implement WebSocket notifications for admin actions",
        ],
      },
    },
  },
  // {
  //   name: "taj-kulture",
  //   title: "Taj Kulture",
  //   subtitle: "Multi-vendor marketplace for African heritage fashion",
  //   desc: "Complete e-commerce platform connecting vendors with customers for authentic streetwear and cultural fashion.",
  //   tags: ["NestJS", "PostgreSQL", "Redis", "Next.js", "TypeScript", "AWS"],
  //   collaboration: "solo",
  //   textColor: "text-[#92400E]",
  //   gradient: "linear-gradient(145deg, #D97706b3, #e9eefa)",
  //   backgroundGradient: "from-amber-500 to-amber-600",
  //   shadowClassName: "shadow-lg",
  //   headerColor: "from-amber-500 via-amber-300 to-amber-300",
  //   iconName: "ShoppingBag",
  //   live: "",
  //   repo: "https://github.com/Timonics/taj-kulture-backend",
  //   caseStudy: {
  //     problemStatement: {
  //       title: "Fragmented African Fashion Market",
  //       description:
  //         "Independent vendors lacked a centralized, secure platform to reach customers, manage inventory, and process payments efficiently.",
  //       challenges: [
  //         "Multi-vendor support with role-based access",
  //         "Secure payment processing with webhooks",
  //         "Real-time inventory and order management",
  //         "Scalable architecture for growing user base",
  //       ],
  //     },
  //     engineering: {
  //       title: "Event-Driven Monolith with Robust Infrastructure",
  //       description:
  //         "Built a modular NestJS backend with PostgreSQL, Redis caching, and Bull queues to handle asynchronous tasks like email notifications and analytics.",
  //       architecture: [
  //         "NestJS monolith with domain modules (Auth, Vendors, Products, Orders, Payments)",
  //         "Prisma ORM with PostgreSQL for data persistence",
  //         "Redis for caching and BullMQ for background jobs",
  //         "EventBus for decoupled event handling (email, notifications, analytics)",
  //         "AWS S3 for file uploads and CDN",
  //       ],
  //       decisions: [
  //         {
  //           title: "HttpOnly Cookies for Auth",
  //           description:
  //             "Stored JWT tokens in secure, HttpOnly cookies to prevent XSS attacks and enable refresh token rotation.",
  //         },
  //         {
  //           title: "Domain-Driven Exceptions",
  //           description:
  //             "Implemented custom exception hierarchy with error codes and global filter for consistent API error responses.",
  //         },
  //         {
  //           title: "Correlation ID Logging",
  //           description:
  //             "Used AsyncLocalStorage to propagate correlation IDs across async operations, enabling request tracing in Winston logs.",
  //         },
  //       ],
  //     },
  //     designUX: {
  //       title: "Vendor-Focused Onboarding",
  //       description:
  //         "Designed a seamless application and approval flow, with vendor dashboards for product management and sales analytics.",
  //       highlights: [
  //         "Vendor application with business details and cultural heritage fields",
  //         "Admin review queue for approval/rejection",
  //         "Real-time follower and sales notifications",
  //       ],
  //     },
  //     nextSteps: {
  //       title: "Future Enhancements",
  //       description:
  //         "Planned features to expand the platform's reach and reliability.",
  //       items: [
  //         "Real-time chat between vendors and customers",
  //         "Advanced recommendation engine using product view analytics",
  //         "Mobile app with push notifications",
  //         "International shipping and multi-currency support",
  //       ],
  //     },
  //   },
  // },
  {
    name: "taj-kulture",
    title: "TAJ Kulture",
    subtitle: "Streetwear e‑commerce for Nigerian Gen Z",
    desc: "NestJS backend with voice reviews, lookbook, Sabi Score gamification, and event‑driven architecture.",
    tags: ["NestJS", "Prisma", "Redis", "Bull", "Cloudinary", "Paystack"],
    collaboration: "solo",
    textColor: "text-[#92400E]",
    gradient: "linear-gradient(145deg, #D97706b3, #e9eefa)",
    backgroundGradient: "from-amber-500 to-amber-600",
    shadowClassName: "shadow-lg",
    headerColor: "from-amber-500 via-amber-300 to-amber-300",
    iconName: "ShoppingBag",
    repo: "https://github.com/Timonics/taj-kulture",
    caseStudy: {
      problemStatement: {
        title:
          "Building a scalable, community-driven streetwear platform for Nigerian Gen Z",
        description:
          "TAJ Kulture required a backend that handles e-commerce, user-generated content (lookbook, voice reviews), gamification (Sabi Score), and real-time processing of events like payments and inventory.",
        challenges: [
          "Event-driven architecture for async tasks",
          "Managing limited drops and geo-specific products",
          "Integrating Paystack webhooks with signature verification",
          "Handling voice review uploads via Cloudinary",
          "Implementing referral system and loyalty points",
        ],
      },
      engineering: {
        title: "DDD‑Lite + Event‑Driven Architecture with Queues",
        description:
          "Built with NestJS, Prisma (PostgreSQL), Redis for caching/OTP, Bull for job queues, and Cloudinary for file storage. Domain events decouple side effects; Bull workers handle email, notifications, inventory deduction, and Sabi score updates.",
        architecture: [
          "NestJS modular structure (DDD lite)",
          "Prisma for type-safe database access with full indexing",
          "Redis for OTP storage and cart persistence",
          "Bull queues with retry logic for async processing",
          "Cloudinary for image/audio uploads",
          "Paystack webhook with HMAC verification",
        ],
        decisions: [
          {
            title: "DDD‑Lite over full DDD",
            description:
              "Simplified domain-driven design to keep code organized without over‑engineering aggregates.",
          },
          {
            title: "Event Emitter + Bull queues",
            description:
              "Immediate event emission for sync handlers, then Bull for heavy async jobs (email, inventory).",
          },
          {
            title: "Two‑step file upload",
            description:
              "Frontend uploads to Cloudinary directly or via backend endpoint, then stores URL – avoids multipart parsing in business logic.",
          },
        ],
      },
      nextSteps: {
        title: "Future Enhancements",
        description:
          "Post‑MVP features to differentiate TAJ Kulture in the Nigerian market.",
        items: [
          "Geo‑drops (city‑specific products)",
          "Community voting for next drop",
          "Promo codes and discounts",
          "Real‑time WebSocket notifications",
          "Shipping integration (GIG Logistics)",
          "Admin analytics dashboard",
        ],
      },
    },
  },
];
