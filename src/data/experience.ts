export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tech: string[];
  award?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export const education: EducationItem = {
  degree: 'B.Tech in Computer Science',
  institution: 'IIIT-Delhi',
  period: 'Aug 2014 – May 2018',
  location: 'New Delhi, India',
};

export const awards: AwardItem[] = [
  {
    title: 'Starter of the Year',
    organization: 'MakeMyTrip',
    date: 'March 2022',
    description: 'Recognized for exceptional contribution to product development immediately after joining the organization.',
  },
  {
    title: 'Ace Award',
    organization: 'Colt Technology Services',
    date: 'August 2018',
    description: 'Awarded for successfully creating automation solutions for the Billing Team, significantly improving operational efficiency.',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'consulting',
    company: 'Independent Consulting',
    role: 'Principal Fullstack Engineer & Architect',
    period: '2023 — Present',
    location: 'Remote',
    description: 'Building and shipping production web, mobile, and agentic AI platforms for venture clients and enterprise systems.',
    bullets: [
      'Built CustomsPro (custompro-landing.vercel.app), an AI-driven customs platform that parses shipping invoices and generates validated ICEGATE flat files in under 30 seconds.',
      'Developed GymAI, a multi-tenant fitness club platform with real-time attendance tracking, Sanity CMS, and TanStack virtualized tables.',
      'Architected Talented Ritu Insan (talentedrituinsan.com), an enterprise operations platform with unified FastAPI backend, Expo React Native mobile app, and Terraform AWS infrastructure.',
      'Delivered Trenzform, a fitness coaching digital transformation platform with Next.js 16 portal, React Native mobile app, and AWS ECS cloud infrastructure.',
      'Created VacayStack, a direct-booking engine for luxury vacation rentals with Stripe checkout and headless CMS.'
    ],
    tech: ['TypeScript', 'Next.js 16', 'React Native (Expo)', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS ECS', 'LangGraph']
  },
  {
    id: 'better',
    company: 'Better.com',
    companyUrl: 'https://better.com/',
    role: 'Senior Software Engineer',
    period: 'Mar 2023 – Present',
    location: 'Gurgaon, India',
    description: 'Digital mortgage company streamlining the home lending process across billions in origination volume.',
    bullets: [
      'Designed and implemented a centralized, ledger-based TCPA Compliance System (Universal DNC & Consent) — replacing a fragmented, file-specific opt-out system that exposed the company to regulatory risk. Built on an event-sourced architecture ingesting consent signals from 5 sources (borrower portal, agent UI, SMS keywords, AI agents, third-party leads) and enforcing across 6 outbound contact paths (auto-dialer, AI calling, automated SMS, partner lead feeds). Delivered via phased rollout with feature-flag-gated read/write paths, historical backfill, and post-hoc violation monitoring — achieving near-complete coverage across 40+ work items.',
      'Built and scaled the Growth Marketing integration layer connecting multiple third-party lead sources, introducing custom routing logic, deduplication, and quality scoring pipelines — resulting in 35% improvement in lead accuracy and significantly faster onboarding of new lead sources.',
      'Architected and delivered Neo Home Loans tenancy on Better.com’s platform — developing multi-tenant APIs, custom loan routing logic, and event tracking infrastructure to support a fully isolated loan processing flow within a shared system.',
      'Designed and built Betsy, an AI-powered voice assistant for automated mortgage inquiry handling, borrower data collection, and real-time eligibility verification — contributing to a 35%+ reduction in mortgage processing costs through end-to-end AI-driven automation.',
      'Designed the real-time Address Autocomplete System — evaluated and replaced the Google Maps API dependency with a custom-built suggestion engine, improving latency, increasing relevance, and saving $4K annually in API costs.',
      'Led the GraphQL → REST migration across 20+ microservices, eliminating N+1 query patterns and resolver overhead, standardizing API contracts, and improving system maintainability and observability.'
    ],
    tech: ['Python', 'TypeScript', 'Node.js', 'Next.js', 'React.js', 'AWS', 'Kafka', 'Event Sourcing', 'Feature Flags']
  },
  {
    id: 'makemytrip',
    company: 'MakeMyTrip',
    companyUrl: 'https://www.makemytrip.com/',
    role: 'Senior Software Engineer',
    period: 'Dec 2021 – Mar 2023',
    location: 'Gurgaon, India',
    description: 'Leading Indian online travel platform serving tens of millions of daily queries and high-concurrency booking funnels.',
    award: 'Starter of the Year (March 2022)',
    bullets: [
      'Led the Holidays Automation Engine — designed and built a rule-based amendment processing system to handle mid-travel booking changes (date shifts, hotel swaps, passenger modifications) that previously required manual agent intervention. Modeled complex state transitions across booking components and integrated with supplier APIs to validate and apply amendments in real time, reducing booking losses by ~20%.',
      'Architected the Web Check-in Notification Pipeline for Holidays + Flights bookings — built an event-driven communication flow triggered by PNR status changes, coordinating across airline APIs, internal booking state, and multi-channel delivery (email, SMS, push) with retry and fallback handling.',
      'Revamped the Visa Processing Module — refactored eligibility checks, document requirement logic, and status tracking for international holiday packages. Eliminated edge cases causing incorrect visa fee computation and supplier mismatch, reducing visa-related booking losses.',
      'Overhauled the Hotelier Voucher System — rebuilt the voucher generation and delivery pipeline with a templating engine supporting dynamic content (hotel details, itinerary, booking T&Cs) and modernized design themes, improving delivery reliability and reducing hotelier escalations.'
    ],
    tech: ['Java', 'SpringBoot', 'AWS', 'MySQL', 'ElasticSearch', 'Kafka']
  },
  {
    id: 'colt',
    company: 'Colt Technology Services',
    companyUrl: 'https://www.colt.net/',
    role: 'Senior Software Engineer',
    period: 'May 2018 – Dec 2021',
    location: 'Gurgaon, India',
    description: 'Global telecommunications enterprise providing cloud, voice, and network infrastructure to leading global enterprises.',
    award: 'Ace Award (August 2018)',
    bullets: [
      'Built the Accounting Procedure Management System — a full-stack web application replacing a fully manual, spreadsheet-driven billing workflow. Designed the data model for procedure versioning, implemented role-based access control for multi-team usage, and automated task scheduling and approval workflows. Reduced average response time by 40x through async processing and caching.',
      'Developed an Invoice Reconciliation Tool using Tesseract OCR to extract structured data from 1,000+ invoices across varying formats and layouts. Built a post-extraction normalization pipeline to standardize fields, flag mismatches, and generate reconciliation reports — achieving 91% extraction accuracy across diverse invoice templates.',
      'Built an ElasticSearch-based Document Search Library handling 10K+ queries daily — supporting full-text search, field-level filtering, and automated TTL-based deletion of expired documents. Designed as an internal library consumed across multiple teams, abstracting index management and query construction behind a clean API.',
      'Implemented a Fraud Detection & Alerting System combining rule-based anomaly detection with a statistical forecasting model to identify data inconsistencies across billing records in real time. Achieved 74% model accuracy and reduced fraud risk exposure by 87%.'
    ],
    tech: ['Python', 'Django', 'ReactJS', 'ElasticSearch', 'PostgreSQL', 'Tesseract OCR']
  }
];
