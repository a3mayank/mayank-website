import { capabilities } from '../../data/capabilities';
import { 
  Zap, 
  Bot, 
  Flame, 
  Shield, 
  Cloud, 
  Cpu, 
  Smartphone, 
  Check, 
  X,
  Sparkles,
  ArrowRight,
  Globe,
  Gauge,
  Layout,
  Search,
  Code2
} from 'lucide-react';

const capabilityIcons: Record<string, typeof Zap> = {
  'system-design': Zap,
  'agentic-ai': Bot,
  'forward-deployed': Flame,
  'secured-backend': Shield,
  'cloud-infra': Cloud,
  'ai-integration': Cpu,
  'websites': Globe,
  'mobile-app': Smartphone,
};

const comparisonData = [
  {
    dimension: 'Time to working production MVP',
    agency: '8–12 weeks of discovery decks, wireframing, and handoffs',
    mayank: 'Days. PRD to live staging deployment within 72 hours',
    winner: 'mayank',
  },
  {
    dimension: 'Architecture & Technical Debt',
    agency: 'Delegated to junior subcontractors; requires rewrite at 5k users',
    mayank: 'Enterprise-grade (ex-Better, MakeMyTrip). Scales to millions from Day 1',
    winner: 'mayank',
  },
  {
    dimension: 'Agentic AI & LLM Pipelines',
    agency: 'Simple OpenAI API wrappers with fragile prompt copy-pasting',
    mayank: 'LangGraph multi-agent systems, function calling, OCR & strict JSON schemas',
    winner: 'mayank',
  },
  {
    dimension: 'Infrastructure & DevOps',
    agency: 'ClickOps in AWS console; unversioned and error-prone',
    mayank: 'Clean Terraform IaC, Docker/ECS, automated GitHub Actions CI/CD',
    winner: 'mayank',
  },
  {
    dimension: 'Management Overhead',
    agency: '4 account managers, endless standups, Jira ticket ping-pong',
    mayank: 'Zero micromanagement. Autonomous async updates & direct PR deliveries',
    winner: 'mayank',
  },
  {
    dimension: 'Code Ownership & Cleanliness',
    agency: 'Proprietary lock-ins, obfuscated repositories, messy handovers',
    mayank: '100% client-owned GitHub repos, complete docs & zero-friction onboarding',
    winner: 'mayank',
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t-2 border-[#1d1f24]">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border-2 border-[#1d1f24] bg-[#f7a501] shadow-retro-sm text-xs font-mono font-black text-[#1d1f24] uppercase">
            <span>PLATFORM MODULES // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1d1f24]">
            Everything needed to turn PRDs into scalable production.
          </h2>
          <p className="text-base text-zinc-700 max-w-2xl font-medium">
            No gaps between frontend, backend, cloud infra, and autonomous AI agents. Built with 8 years of high-concurrency production experience.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = capabilityIcons[cap.id] || Sparkles;
            return (
              <div
                key={cap.id}
                className="card-retro flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Retro Window Chrome Titlebar */}
                  <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-3.5 py-2 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2 font-bold text-zinc-800">
                      <Icon className="w-4 h-4 text-[#1d1f24]" />
                      <span className="truncate">{cap.id}</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-black text-[#1d1f24] tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-[#1d1f24]/10">
                    {cap.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#1d1f24] bg-[#eeece9] border border-[#1d1f24]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Card */}
          <div className="card-retro bg-[#f7a501] p-6 flex flex-col justify-between border-2 border-[#1d1f24]">
            <div className="space-y-3">
              <div className="inline-block px-2.5 py-0.5 rounded bg-white border-2 border-[#1d1f24] text-[10px] font-mono font-black uppercase shadow-retro-sm">
                AVAILABLE NOW
              </div>
              <h3 className="text-xl font-black text-[#1d1f24] tracking-tight">
                Need something custom or bespoke?
              </h3>
              <p className="text-xs text-zinc-800 font-medium leading-relaxed">
                Whether you need a fullstack MVP, custom AI agent orchestrations, or database bottleneck diagnosis, I integrate directly into your sprint cycle.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="btn-retro-secondary w-full py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2"
              >
                <span>Discuss Your Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Websites in Capabilities Section */}
        <div id="websites" className="pt-16 space-y-10 border-t-2 border-[#1d1f24]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border-2 border-[#1d1f24] bg-white shadow-retro-sm text-xs font-mono font-black text-[#1d1f24] uppercase">
                <Globe className="w-3.5 h-3.5 text-[#f7a501]" />
                <span>CAPABILITY FOCUS // WEBSITES & WEB PLATFORMS</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-[#1d1f24]">
                High-Performance Websites Built for Conversion & Scale
              </h3>
              <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                From high-converting product marketing pages and brand showpieces to complex multi-tenant web portals.
                Engineered with modern SSR/SSG frameworks, sub-second First Contentful Paint, zero bloat, and automated SEO architecture.
              </p>
            </div>

            {/* Quick score badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
              <div className="px-3 py-1.5 rounded-lg border-2 border-[#1d1f24] bg-emerald-50 text-emerald-900 shadow-retro-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>100/100 Core Web Vitals</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg border-2 border-[#1d1f24] bg-white text-zinc-800 shadow-retro-sm flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#f7a501]" />
                <span>&lt;800ms LCP</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg border-2 border-[#1d1f24] bg-white text-zinc-800 shadow-retro-sm flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-indigo-600" />
                <span>Responsive UI/UX</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Web Engineering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card-retro bg-white flex flex-col justify-between overflow-hidden">
              <div>
                <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-3.5 py-2 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                    <Gauge className="w-3.5 h-3.5 text-[#1d1f24]" />
                    <span>web_perf.ts</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-base font-black text-[#1d1f24]">
                    Sub-Second Core Web Vitals
                  </h4>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    Next.js App Router with React Server Components (RSC), automatic edge caching, code-splitting, and optimized media pipelines for instant page loads.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="flex flex-wrap gap-1 pt-2 border-t-2 border-[#1d1f24]/10">
                  {['Next.js App Router', 'RSC Streaming', 'Edge CDN', '<800ms LCP'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-[#1d1f24] bg-[#eeece9] border border-[#1d1f24]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-retro bg-white flex flex-col justify-between overflow-hidden">
              <div>
                <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-3.5 py-2 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                    <Layout className="w-3.5 h-3.5 text-[#1d1f24]" />
                    <span>responsive_ui.tsx</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-base font-black text-[#1d1f24]">
                    Bespoke UI & Responsive Craft
                  </h4>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    Pixel-perfect layouts crafted with modern Tailwind CSS. Fluid scaling from mobile to ultra-wide displays, micro-interactions, and accessible navigation.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="flex flex-wrap gap-1 pt-2 border-t-2 border-[#1d1f24]/10">
                  {['Tailwind CSS', 'Micro-Interactions', 'Mobile-First', 'WCAG AA'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-[#1d1f24] bg-[#eeece9] border border-[#1d1f24]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-retro bg-white flex flex-col justify-between overflow-hidden">
              <div>
                <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-3.5 py-2 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                    <Search className="w-3.5 h-3.5 text-[#1d1f24]" />
                    <span>seo_engine.json</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-base font-black text-[#1d1f24]">
                    Programmatic SEO & OG Engine
                  </h4>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    Automated JSON-LD structured schema markup, dynamic OpenGraph social preview cards, XML sitemaps, and semantic HTML for superior search indexing.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="flex flex-wrap gap-1 pt-2 border-t-2 border-[#1d1f24]/10">
                  {['JSON-LD Schema', 'Dynamic OG Cards', 'Semantic HTML', 'XML Sitemaps'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-[#1d1f24] bg-[#eeece9] border border-[#1d1f24]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-retro bg-white flex flex-col justify-between overflow-hidden">
              <div>
                <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-3.5 py-2 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                    <Code2 className="w-3.5 h-3.5 text-[#1d1f24]" />
                    <span>cms_workflow.md</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="text-base font-black text-[#1d1f24]">
                    Headless CMS & Content Agility
                  </h4>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    Integration with Sanity, Contentful, or MDX allowing non-technical marketing teams to publish landing pages, blogs, and updates autonomously.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="flex flex-wrap gap-1 pt-2 border-t-2 border-[#1d1f24]/10">
                  {['Sanity CMS', 'Contentful', 'MDX Content', 'Self-Serve Ops'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-[#1d1f24] bg-[#eeece9] border border-[#1d1f24]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Comparison Matrix */}
        <div className="mt-20 space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border-2 border-[#1d1f24] bg-white shadow-retro-sm text-xs font-mono font-black text-[#1d1f24] uppercase">
              <span>👨🏽‍💻 THE ARCHITECTURAL BREAKDOWN</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-[#1d1f24]">
              Traditional Agency vs. Mayank Attri
            </h3>
            <p className="text-sm text-zinc-700 font-medium">
              Why high-momentum founders and tech leaders bypass agencies to hire senior firepower directly.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#1d1f24] bg-white shadow-retro-lg overflow-hidden">
            {/* Window bar */}
            <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-4 py-2.5 flex items-center justify-between font-mono text-xs font-bold text-zinc-700">
              <span>COMPARISON_MATRIX.md</span>
              <span className="text-emerald-700">HIGH VALUE // LOW OVERHEAD</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-[#1d1f24] bg-[#eeece9] font-mono text-xs text-[#1d1f24]">
                    <th className="p-4 font-black w-1/3">DIMENSION</th>
                    <th className="p-4 font-black w-1/3 bg-rose-50/50 text-rose-950 border-x-2 border-[#1d1f24]">
                      TRADITIONAL DEV SHOP / AGENCY
                    </th>
                    <th className="p-4 font-black w-1/3 bg-[#f7a501]/20 text-[#1d1f24]">
                      MAYANK ATTRI (SENIOR & FDE)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-[#1d1f24]/10">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="p-4 font-bold text-[#1d1f24] align-top">
                        {row.dimension}
                      </td>
                      <td className="p-4 text-zinc-600 bg-rose-50/20 border-x-2 border-[#1d1f24] align-top">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                          <span>{row.agency}</span>
                        </div>
                      </td>
                      <td className="p-4 font-medium text-zinc-900 bg-[#f7a501]/10 align-top">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 font-black flex-shrink-0 mt-0.5" />
                          <span className="font-semibold">{row.mayank}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
