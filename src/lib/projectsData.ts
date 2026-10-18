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
    iconName: "FaServicestack",
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
  // },
  {
    name: "charon",
    title: "Charon",
    subtitle:
      "Multi-provider payments orchestration: charges, refunds, escrow, disputes — Stripe, Paystack, Flutterwave",
    desc: "Backend service that owns the business state of money movement. A single append-only ledger records what happened, when, and why — surviving any single provider being wrong, slow, or unavailable.",
    tags: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "Stripe",
      "Paystack",
      "Flutterwave",
      "Domain-Driven Design",
    ],
    collaboration: "solo",
    iconName: "SiStripe",
    textColor: "text-[#0E7490]",
    gradient: "linear-gradient(145deg, #06B6D4b3, #e9eefa)",
    backgroundGradient: "from-cyan-500 to-cyan-600",
    shadowClassName: "shadow-cyan-500/30",
    headerColor: "from-cyan-500 via-cyan-300 to-cyan-200",
    live: undefined,
    repo: "https://github.com/Timonics/charon",
    caseStudy: {
      problemStatement: {
        title:
          "Money needs an audit trail that survives any single provider being wrong, slow, or unavailable",
        description:
          "Charges, refunds, escrow holds, releases, and disputes all happen at PSPs (Stripe, Paystack, Flutterwave). The synchronous API response is not truth — the verified webhook is. Without an internal ledger that records every state change with an append-only journal, reconciliation is fragile, refunds can exceed original charges, and webhooks can be replayed or dropped.",
        challenges: [
          "Settlement truth must come from verified provider webhooks, never from the synchronous API response",
          "A webhook event id processed more than once must be a no-op, not a duplicated side effect",
          "Idempotency keys acquired concurrently must not duplicate a side effect",
          "A refund can never exceed the charged amount; cumulative refunds are bounded by the original charge",
          "An escrow's released + refunded must never exceed its held amount, even mid-transaction",
          "Multi-step persistence must be atomic — intent snapshot + ledger append + idempotency commit together or all roll back",
        ],
      },
      researchPlanning: {
        title: "Architecture: Ledger as the Source of Truth",
        description:
          "I designed the system so the journal is the source of monetary truth. Aggregates' snapshot tables (payment_intents, escrows) are projections that can be rebuilt from the journal — they exist for fast reads, not for correctness. Domain code has no I/O; application code depends on ports, not adapters; infrastructure implements ports. The codebase enforces these three rules structurally so reviewers don't have to enforce them socially.",
        findings: [
          "A per-aggregate monotonic sequence + a unique-constraint backstop on the ledger table gives a rock-solid no-duplicate-events guarantee even under concurrent webhooks",
          "INSERT ... ON CONFLICT DO NOTHING with rowCount-checked winner is the cleanest way to acquire an idempotency key under concurrent callers",
          "Webhooks should only ever update state via the verified event stream, never from the synchronous provider response — synchronous responses are tentative until the webhook confirms",
          "Money math must use dinero.js v2 + decimal.js; binary float is unacceptable for any aggregate",
          "The UnitOfWork pattern wraps every mutating use case so multi-step persistence is atomic; 5 atomicity tests prove the BEGIN → COMMIT or ROLLBACK lifecycle",
        ],
      },
      engineering: {
        title: "DDD-Lite, 4 Contexts, 187+13 Tests",
        description:
          "Built with NestJS + Prisma + PostgreSQL 16, dinero.js v2 + decimal.js for money math, and a clean domain/application/infrastructure layering. Four bounded contexts: payments, escrow, ledger, and provider-integration. Each context owns its domain types, application use cases, and infrastructure adapters; the ledger is context-independent and consumed by all others.",
        architecture: [
          "NestJS modular structure with 4 bounded contexts (payments, escrow, ledger, provider-integration)",
          "Prisma for type-safe PostgreSQL access; node-pg-migrate SQL migrations in /migrations",
          "Append-only ledger: every state change appends an immutable event with a per-aggregate monotonic sequence and JSON-validated payload",
          "Idempotency layer: INSERT ... ON CONFLICT DO NOTHING with rowCount-checked winner for the second caller",
          "Provider-integration adapters per PSP (Stripe / Paystack / Flutterwave) implementing PaymentGatewayPort + ProviderWebhookPort",
          "UnitOfWork wraps every mutating use case; multi-step persistence commits together or rolls back",
          "Domain code (pure TS, no decorators) depends on nothing outside its folder; application code depends on ports; infrastructure implements ports",
          "8 invariants enforced at the type / DB-constraint level, each with explicit tests",
        ],
        decisions: [
          {
            title: "Domain code is pure TypeScript — no I/O, no decorators",
            description:
              "The domain/ folders import nothing from infrastructure/ or @nestjs/*. Aggregate types are plain TypeScript with no metadata, so domain logic is testable in microseconds and impossible to accidentally couple to the framework.",
          },
          {
            title: "Verified webhook is the only settlement source",
            description:
              "HandlePaymentWebhookUseCase requires event.type === CHARGE_SUCCEEDED AND signature verification upstream. The synchronous provider response is treated as tentative until the webhook confirms. Without this rule, a slow or partially-down PSP would silently produce inconsistent ledger state.",
          },
          {
            title: "Partial releases are first-class on day one",
            description:
              "Escrow releases are not all-or-nothing. Each release is a line entity with its own state, and `released + refunded ≤ held` is an invariant checked on every write. This avoids the classic escrow implementation where partial payouts require a full schema redesign later.",
          },
          {
            title: "Two money libraries, not one",
            description:
              "dinero.js v2 for the value-object layer (typed currency, immutability), decimal.js for the wire format. dinero.js gives correctness; decimal.js gives a stable, JSON-serialisable representation. Mixing them at the boundary avoids both rounding bugs and serialisation loss.",
          },
        ],
      },
      designUX: undefined,
      nextSteps: {
        title: "Roadmap to Production-Ready",
        description:
          "The roadmap below is tracked in the project's README. Domain + application layers are built and unit-tested (187/187). Postgres infrastructure is integration-tested against a real Postgres 16 (13/13). HTTP/Nest wiring + outbound payment gateway adapters are the next increments.",
        items: [
          "Outbound payment gateway adapters: Paystack first, then Flutterwave, then Stripe. Each adapter implements PaymentGatewayPort and is integrated into InitiatePaymentUseCase.",
          "HTTP / Nest wiring: main.ts + AppModule + webhook controllers + command endpoints + raw-body middleware + webhook inbox writer. Adds the Dockerfile so the CI scan pipeline can be extended with Trivy.",
          "CI/CD pipeline on every push: lint + build + unit + integration. The branch ci/add-github-actions-pipeline is staged on top of main with this work already done.",
          "Once the HTTP layer lands, runnable end-to-end against sandbox provider credentials for a real-money smoke test.",
        ],
      },
    },
  },

  {
    name: "cerebrus",
    title: "Cerebrus",
    subtitle:
      "Shared authentication infrastructure for cross-service identity and access",
    desc: "Internal authentication service that the rest of the product surface builds on. Single source of truth for users, sessions, OAuth flows, and (later) API keys for service-to-service auth.",
    tags: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "OAuth 2.0",
      "JWT",
      "OIDC",
    ],
    collaboration: "solo",
    iconName: "FaShieldHalved",
    textColor: "text-[#1E3A8A]",
    gradient: "linear-gradient(145deg, #1D4ED8b3, #e9eefa)",
    backgroundGradient: "from-blue-700 to-blue-800",
    shadowClassName: "shadow-blue-700/30",
    headerColor: "from-blue-700 via-blue-400 to-blue-200",
    live: undefined,
    repo: "https://github.com/Timonics/cerebrus",
    caseStudy: {
      problemStatement: {
        title:
          "Each product reinventing auth creates per-app drift and makes cross-product features (SSO, unified profiles, audit trails) impossible",
        description:
          "Verify Hub, LifeData, and TAJ Kulture each implemented their own auth flow. Login UX drifted, password policies diverged, MFA coverage was uneven, and audit trails were inconsistent. A central auth service is the only way to fix this without rewriting every product.",
        challenges: [
          "Existing products have hardcoded session assumptions that need to migrate without downtime",
          "OAuth 2.0 + OIDC for service-to-service flows without forcing every consumer to implement the spec",
          "Session storage that survives Redis restarts without forcing users to re-login on every deploy",
          "Audit trail that captures every auth event with enough context for compliance review",
          "Future API-key issuance for service-to-service auth (cron jobs, batch processors) without bleeding the user-token code",
        ],
      },
      researchPlanning: {
        title: "Scope: Boring, Predictable, Boring",
        description:
          "Cerebrus is intentionally a small, boring auth service. No novel cryptography, no fancy zero-trust model, no web3 nonsense. Standard OAuth 2.0 + OIDC, standard JWT with short TTLs, standard Redis-backed sessions, standard Postgres for user records and audit events. The value is in the consistency, not the cleverness.",
        findings: [
          "Reuse proven libraries (openid-client, jose, passport) instead of hand-rolling OAuth flows",
          "Short-lived access tokens (15min) + long-lived refresh tokens (30d) + Redis session store gives both security and operational simplicity",
          "Audit events are first-class — every login, logout, MFA challenge, password reset, and token refresh appends an event row",
          "Tenant scoping (org_id) is added to users + tokens from day one even though no current consumer needs it; the cost is one column and the benefit is that multi-tenant onboarding becomes a config change instead of a refactor",
          "Service-to-service auth (API keys) is a separate primitive from user auth — keep the token formats and storage distinct so a leaked API key never yields a user session",
        ],
      },
      engineering: {
        title: "Planned: NestJS + Prisma + Redis, OAuth/OIDC, JWT",
        description:
          "The codebase is being prepared. The reference implementation is NestJS with Prisma for user/audit records, Redis for session storage and rate-limit counters, openid-client for the OAuth dance, jose for JWT signing, and helmet-style security headers on the auth endpoints. Endpoints: /oauth/authorize, /oauth/token, /oauth/introspect, /oauth/revoke, /users, /sessions, /audit.",
        architecture: [
          "NestJS application with three modules: Identity (users + credentials), Sessions (Redis-backed JWT lifecycle), Audit (append-only event log)",
          "Prisma models: User, Credential, MfaFactor, Session, RefreshToken, OAuthClient, ApiKey, AuditEvent",
          "Redis: short-lived access-token nonce store + refresh-token rotation + per-IP rate limit counters",
          "OAuth 2.0 / OIDC endpoints: /oauth/authorize, /oauth/token, /oauth/introspect, /oauth/revoke. PKCE required for public clients.",
          "JWT access tokens (15min TTL, RS256), opaque refresh tokens (30d, rotation on use), session cookies (HttpOnly + SameSite=Strict) for browser clients",
          "Audit log: every login, logout, MFA challenge, password reset, token refresh appends an AuditEvent. Queryable by user_id + time range + event_type.",
          "MFA: TOTP (RFC 6238) + WebAuthn (passkeys) as the second factor. SMS fallback deprecated.",
          "API keys (service-to-service auth): opaque keys with a last-4 prefix shown at creation; the full key is shown once and stored as a bcrypt hash. Revocable.",
        ],
        decisions: [
          {
            title: "Boring tech, proven libraries",
            description:
              "openid-client for the OAuth flow, jose for JWT, passport for any pre-built strategies. No novel crypto. The boring choice is the right choice for auth.",
          },
          {
            title: "Tenant column on day one",
            description:
              "Every User, Session, and ApiKey gets a tenant_id even though current consumers are single-tenant. The column costs nothing; the refactor later would cost weeks.",
          },
          {
            title: "API keys are separate from user tokens",
            description:
              "A leaked API key must never yield a user session. Keep the two primitives distinct at the type level, the storage level, and the validation path. Bearer tokens get one verification path; API keys get another.",
          },
          {
            title: "Audit log is append-only",
            description:
              "Every auth event is a row. Compliance reviews happen on this table. Updates and deletes are forbidden at the application layer; the migration grants no UPDATE/DELETE permissions on audit_events to the application's database role.",
          },
        ],
      },
      designUX: {
        title: "Operator + End-User Surfaces",
        description:
          "Two surfaces ship together: an end-user login + consent UI (OIDC standard, minimal), and an internal admin / audit-explorer UI for the security team to review events.",
        highlights: [
          "Login page: email + password, then TOTP if MFA is enrolled. Standard OIDC redirect, no custom branding on the auth surface itself.",
          "Consent screen: lists the requested scopes, expires after 15 minutes if not approved.",
          "Account page: change password, enroll/remove MFA factors, list active sessions with device + IP, revoke any session.",
          "Admin audit explorer: filter by user, event type, time range; export to CSV; link to the user's session timeline.",
        ],
      },
      nextSteps: {
        title: "Build Sequence",
        description:
          "Repo is being prepared. The build sequence below follows the spec's Phase 1 — organize, then Phase 2 — validate, then Phase 3 — operate, then Phase 4 — present.",
        items: [
          "Phase 1: Implement Identity + Sessions modules + Postgres + Redis adapters + audit log writes. Land the OAuth /token endpoint behind a feature flag.",
          "Phase 2: Migrate one consumer (Verify Hub) to Cerebrus. Validate the OAuth dance end-to-end with sandbox data. Capture migration friction into a runbook.",
          "Phase 3: Add MFA (TOTP, then WebAuthn passkeys). Add API-key issuance for service-to-service auth. Add the admin audit explorer.",
          "Phase 4: Migrate LifeData + TAJ Kulture. Once all three consumers are on Cerebrus, retire their per-app auth code. The auth surface is then consistent across the product.",
        ],
      },
    },
  },

];
