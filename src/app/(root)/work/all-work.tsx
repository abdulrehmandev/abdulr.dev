import { Work } from "@src/types/work.type";

export const allWork: Record<string, Work> = {
  mytpen: {
    slug: "mytpen",
    type: "case-study",
    title: "myTpen EdTech SaaS Suite: 9 Apps in under 2 Years",
    description:
      "Leading the development of a complete AI and vision-powered EdTech SaaS platform, delivering 9 web and mobile apps in under 2 years. This suite leverages OCR, AI, and cross-platform integration to empower educators and streamline workflows.",
    cover: {
      type: "icon",
      icon: "layers",
    },
    tags: ["micro SaaS", "AI", "OCR", "Cross-Platform"],
    sortOrder: 2,
    date: "August 2025",
    client: "myTpen",
    industry: ["EdTech", "SaaS"],
    externalLink: "https://mytpen.app",
  },

  notesgpt: {
    slug: "notesgpt",
    type: "detailed",
    title: "NotesGPT: AI-Powered Note Management App",
    description:
      "An AI-powered note-taking application that allows users to organize, search, and chat with their notes using vector embeddings and natural language queries.",
    cover: {
      type: "image",
      src: "/images/work/notesgpt/cover.jpg",
      alt: "NotesGPT Web Snip",
    },
    tags: ["AI", "pgvector"],
    sortOrder: 3,
    date: "July 2024",
    industry: ["EdTech", "SaaS"],
    externalLink: "https://notesgpt.mytpen.app",
    awards: ["Acquired by myTpen"],
    content: `
  ### Overview
  NotesGPT is an intelligent note-taking platform built around vector search and conversational interaction.
  Users can upload or write notes and instantly query them using AI-powered semantic search and chat capabilities.

  ### Key Features
  - AI-driven "Chat with your notes" functionality
  - pgvector-based semantic search
  - Multi-format note ingestion
  - Clean and fast UI built with Tailwind CSS

  Originally launched as an independent tool, the platform was later **acquired by myTpen** and integrated into their productivity suite.
    `,
    techStack: ["Next.js", "PostgreSQL", "pgvector", "Tailwind CSS", "OpenAI"],
  },

  hellodrew: {
    slug: "hellodrew",
    type: "detailed",
    title: "Hello Drew: Real Estate AI Scheduling Agent",
    description:
      "A conversational AI agent for real estate professionals that automates scheduling, lead communication, and appointment booking through calls, SMS, and other messaging channels.",
    cover: {
      type: "image",
      src: "/images/work/hellodrew/cover.jpg",
      alt: "Hello Drew Web Snip",
    },
    tags: ["Retell AI", "Eleven Labs", "AI"],
    sortOrder: 4,
    date: "January 2025",
    client: "SayHello Inc.",
    industry: ["Real Estate", "SaaS"],
    content: `
  ### Overview
  Hello Drew is an AI-driven agent designed to handle communication and scheduling for real estate professionals.
  The platform automates outreach, qualification, and appointment bookings without the need for human interaction.

  ### Key Features
  - Voice and SMS scheduling via Retell AI & Twilio
  - AI-powered lead communication flows
  - Stripe-based subscription and onboarding
  - Multi-step investor onboarding form with integrated payments

  I contributed to the marketing website, SaaS onboarding experience, subscription system, and a small investor portal used for funding and lead tracking.
    `,
    techStack: [
      "Next.js",
      "Stripe",
      "Twilio",
      "Retell AI",
      "Eleven Labs",
      "OpenAI",
      "Google Calendar APIs",
      "PostgreSQL",
    ],
  },

  sbmCmCloudSync: {
    slug: "sbm-cm",
    type: "detailed",
    title: "CM to SBM: Automated Cloud Sync Pipeline",
    description:
      "A serverless integration pipeline that synchronizes data between CampMinder (CM) and School Bus Manager (SBM), eliminating manual updates for camp administrators.",
    cover: {
      type: "icon",
      icon: "cloud-check",
    },
    tags: ["AWS Lambda", "Cloud Workflow", "Serverless"],
    sortOrder: 5,
    date: "July 2025",
    client: "TheCampStack",
    industry: ["EdTech", "Workflow"],
    content: `
  ### Overview
  The CM → SBM Sync is a serverless automation workflow that ensures data consistency across two major camp management platforms.
  Previously, administrators manually updated records from CampMinder to School Bus Manager, leading to delays and errors.

  ### Key Features
  - Automated data synchronization via AWS Lambda
  - Fault-tolerant workflow with retries and logging
  - Bi-directional API communication between CM and SBM
  - Fully serverless and cost-efficient architecture

  I designed and implemented the automation pipeline, handling API integrations, data transformation logic, and deployment of the workflow infrastructure.
    `,
    techStack: ["AWS Lambda", "External APIs", "TypeScript"],
  },

  matchingSystem: {
    slug: "matching-system",
    type: "case-study",
    title: "Revolutionizing Summer Camp Matching with AI",
    description:
      "Intelligent applicant-to-camp matching engine processing 100K+ participant profiles across 1,500+ US summer camps using vector embeddings and GPT-4 insights",
    cover: {
      type: "icon",
      icon: "network",
    },
    tags: ["OpenAI", "pgvector", "Recommendation Systems", "Semantic Search"],
    sortOrder: 1,
    date: "August 2024",
    client: "IENA via TheCampStack",
    industry: ["EdTech", "Exchange"],
    externalLink: "https://einwelt.com",
  },

  einwelt: {
    slug: "einwelt",
    type: "card",
    title: "Einwelt: Learn German with AI",
    description:
      "A mini SaaS helping people learn German from Croatian using a chatbot. Built with Next.js and OpenAI.",
    cover: {
      type: "image",
      src: "/images/work/einwelt/cover.png",
      alt: "Einwelt Web Snip",
    },
    tags: ["OpenAI", "Next.js", "Firebase Auth", "Chakra UI"],
    sortOrder: 10,
    date: "July 2023",
    client: "Outsourced project via another developer",
    industry: ["EdTech"],
  },

  developersworld: {
    slug: "developersworld",
    type: "card",
    title: "DevelopersWorld: Agency Marketing Site",
    description:
      "A 10+ page marketing website for a development agency. Fully responsive and optimized.",
    cover: {
      type: "image",
      src: "/images/work/developersworld/cover.png",
      alt: "DevelopersWorld Web Snip",
    },
    tags: ["Next.js", "Chakra UI"],
    sortOrder: 9,
    date: "October 2023",
    client: "Outsourced via another developer",
    industry: ["Corporate"],
    externalLink: "https://developersworld.io",
  },

  nypedicab: {
    slug: "nypedicab",
    type: "detailed",
    title: "NY Pedicab: Smart Booking System for Central Park Rides",
    description:
      "A complete booking and pricing system for pedicab rides in Manhattan Central Park, featuring dynamic pricing, availability checks, and route-based fare calculation.",
    cover: {
      type: "image",
      src: "/images/work/nypedicab/cover.png",
    },
    tags: [
      "Google Maps API",
      "Stripe",
      "Prisma ORM",
      "Next.js",
      "PostgreSQL",
      "Mantine UI",
    ],
    sortOrder: 8,
    date: "January 2024",
    client: "Outsourced via another developer",
    industry: ["Booking"],
    content: `
### Overview
NY Pedicab is a booking system for pedicab rides in Central Park.
Built full-stack with Next.js, Prisma, and PostgreSQL, it allows users to pre-book rides with intelligent pricing and scheduling logic.

### Key Features
- Distance-based and time-based pricing algorithm
- Stripe payment integration
- Real-time availability and booking
- Interactive Google Maps for route selection

I handled both frontend and backend development, including business logic and deployment.
    `,
    techStack: [
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe",
      "Mantine UI",
      "Google Maps API",
    ],
  },

  qwesty: {
    slug: "qwesty",
    type: "detailed",
    title: "Qwesty: Real Estate Marketplace Platform",
    description:
      "A realtor-like platform to list, buy, and sell properties. Built using Turborepo with a modern Next.js stack.",
    cover: {
      type: "icon",
      icon: "warehouse",
    },
    tags: [
      "TurboRepo",
      "Google Maps API",
      "Next.js",
      "Shadcn",
      "Lucia Auth",
      "S3",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe",
    ],
    sortOrder: 7,
    date: "August 2024",
    client: "Agency project",
    industry: ["Real Estate", "Marketplace"],
    externalLink: "https://qwesty.com",
    content: `
### Overview
Qwesty was a real estate platform for listing, buying, and selling properties.
I worked as part of a team for 4 months, focusing on the platform's architecture, backend APIs, and feature integrations.

### Stack
Built with Turborepo, Next.js, and Prisma, using Lucia for authentication and S3 for storage.

### Notes
The company has since pivoted to a Web3-focused real estate platform.
    `,
    techStack: [
      "Next.js",
      "TurboRepo",
      "Shadcn",
      "Lucia Auth",
      "S3",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe",
      "Google Maps API",
    ],
  },

  abilitybeyond: {
    slug: "abilitybeyond",
    type: "detailed",
    title: "Ability Beyond: Patient & Staff Management Dashboard",
    description:
      "A centralized dashboard for managing patients, staff, and behavioral tallies for an organization supporting autistic individuals.",
    cover: {
      type: "image",
      src: "/images/work/abilitybeyond/cover.png",
      alt: "Ability Beyond Main Dashboard",
    },
    tags: [
      "SalesForce API",
      "Chart.js",
      "Next.js",
      "Server Actions",
      "Mantine UI",
      "Prisma ORM",
      "PostgreSQL",
    ],
    sortOrder: 6,
    date: "March 2024",
    client: "Outsourced via another developer",
    industry: ["Healthcare"],
    externalLink: "https://abilitybeyond.org",
    content: `
### Overview
Ability Beyond is an organization supporting autistic and mentally challenged individuals.
The dashboard I built helped centralize operations—tracking patients, their behavioral tallies, staff schedules, and facility data.

### Key Highlights
- Visualized behavioral data using Chart.js
- Integrated with Salesforce for data sync
- Migrated their Flutter-based scheduling app to this dashboard
- Implemented Server Actions for backend logic and data flow
    `,
    techStack: [
      "Next.js",
      "Server Actions",
      "Mantine UI",
      "Prisma ORM",
      "PostgreSQL",
      "Chart.js",
      "SalesForce API",
    ],
  },

  investclearly: {
    slug: "investclearly",
    type: "detailed",
    title: "Invest Clearly: Real Estate Investment Discovery Platform",
    description:
      "A property investment discovery platform. I handled production fixes and enhancements to make the app production-ready.",
    cover: {
      type: "image",
      src: "/images/work/investclearly/cover.jpg",
    },
    tags: ["Real Estate APIs", "TypeORM", "PostgreSQL", "Next.js"],
    sortOrder: 5,
    date: "February 2024",
    client: "Same tech lead from Ability Beyond",
    industry: ["Real Estate"],
    externalLink: "https://investclearly.com",
    content: `
### Overview
Invest Clearly helps users discover and rate real estate investment agencies.
I joined to fix bugs, improve performance, and prepare the platform for production.

### Tech
Next.js with TypeORM, PostgreSQL, and integration with real estate data APIs.
    `,
    techStack: ["Next.js", "TypeORM", "PostgreSQL", "Real Estate APIs"],
  },
};
