import { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, Zap, Shield, Cpu, Cloud, Smartphone, ExternalLink } from 'lucide-react';
import { ColtLogo } from '../ui/BrandIcons';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'system' | 'ai' | 'backend' | 'cloud' | 'mobile'>('system');

  const copyEmail = () => {
    navigator.clipboard.writeText('a3mayank@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'system' as const, label: 'System Design', icon: Zap },
    { id: 'ai' as const, label: 'Agentic AI', icon: Cpu },
    { id: 'backend' as const, label: 'Secured Backend', icon: Shield },
    { id: 'cloud' as const, label: 'Cloud Infra', icon: Cloud },
    { id: 'mobile' as const, label: 'Mobile App', icon: Smartphone },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'system':
        return (
          <div className="space-y-3 font-mono text-xs text-zinc-800">
            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-200 pb-2">
              <span>// ARCHITECTURE: High-Concurrency Event Pipeline</span>
              <span className="text-emerald-600 font-bold">10M+ DAU Sustained</span>
            </div>
            <pre className="text-[11px] sm:text-xs text-zinc-900 overflow-x-auto leading-relaxed">
{`Client Request 
  ──► Cloudflare Edge (WAF & TLS 1.3)
  ──► API Gateway (Token Bucket Rate Limiting, mTLS)
  ──► Microservice Mesh (Python FastAPI / Java Spring)
        ├── Redis Cluster (Cache Hit: < 2ms P99)
        ├── PostgreSQL 16 (Read-Replicas, pgvector)
        └── Apache Kafka (50,000+ msgs/sec during flash sales)`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#eeece9] border border-[#1d1f24]/20 text-[11px] flex items-center justify-between">
              <span>Battle-tested at: <strong className="text-zinc-950">MakeMyTrip & Better.com</strong></span>
              <span className="font-bold text-emerald-700">99.99% Availability SLA</span>
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className="space-y-3 font-mono text-xs text-zinc-800">
            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-200 pb-2">
              <span>// AGENTIC WORKFLOW: Autonomous ICEGATE Clearance</span>
              <span className="text-emerald-600 font-bold">Turnaround: 4h ➔ 30s</span>
            </div>
            <pre className="text-[11px] sm:text-xs text-zinc-900 overflow-x-auto leading-relaxed">
{`@agent.register_tool(name="customs_declaration_engine")
async def process_commercial_invoice(file_bytes: bytes) -> BillOfEntry:
    # 1. High-precision multimodal OCR extraction
    line_items = await vision_extractor.parse(file_bytes)
    # 2. Tariff classification & HS Code validation
    verified_items = await customs_agent.classify_hs_codes(line_items)
    # 3. Generate validated ICEGATE EDI flat file
    return icegate_serializer.build(verified_items, mode="strict")`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#eeece9] border border-[#1d1f24]/20 text-[11px] flex items-center justify-between">
              <span>Shipped in: <strong className="text-zinc-950">CustomsPro (Live Production)</strong></span>
              <span className="font-bold text-emerald-700">99.4% Extraction Accuracy</span>
            </div>
          </div>
        );

      case 'backend':
        return (
          <div className="space-y-3 font-mono text-xs text-zinc-800">
            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-200 pb-2">
              <span>// SECURITY: Zero-Trust Backend & Auth Protocol</span>
              <span className="text-emerald-600 font-bold">SOC2 / Fintech Grade</span>
            </div>
            <pre className="text-[11px] sm:text-xs text-zinc-900 overflow-x-auto leading-relaxed">
{`class SecurityEnforcer:
    protocols = [
        OAuth2.with_pkce_and_oidc(),
        MutualTLS.enforce_service_mesh(),
        FineGrainedRBAC.scope_to_client_id(),
        AES256.encrypt_at_rest_and_transit(),
        AuditTrail.stream_to_immutable_ledger()
    ]
    # Implemented for mortgage pipelines handling billions at Better.com`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#eeece9] border border-[#1d1f24]/20 text-[11px] flex items-center justify-between">
              <span>Production Scale: <strong className="text-zinc-950">Billions in Loan Originations</strong></span>
              <span className="font-bold text-emerald-700">Sub-second Underwriting</span>
            </div>
          </div>
        );

      case 'cloud':
        return (
          <div className="space-y-3 font-mono text-xs text-zinc-800">
            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-200 pb-2">
              <span>// INFRASTRUCTURE: Terraform AWS ECS Blueprint</span>
              <span className="text-emerald-600 font-bold">Zero-Drift IaC</span>
            </div>
            <pre className="text-[11px] sm:text-xs text-zinc-900 overflow-x-auto leading-relaxed">
{`module "production_ecs_cluster" {
  source             = "./infra/terraform/modules/ecs"
  environment        = "production"
  vpc_id             = module.vpc.id
  auto_scaling_min   = 4
  auto_scaling_max   = 32
  target_cpu_percent = 70
  enable_datadog_apm = true
}`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#eeece9] border border-[#1d1f24]/20 text-[11px] flex items-center justify-between">
              <span>Cloud: <strong className="text-zinc-950">AWS ECS / EKS / RDS / Terraform</strong></span>
              <span className="font-bold text-emerald-700">Automated Canary Rollouts</span>
            </div>
          </div>
        );

      case 'mobile':
        return (
          <div className="space-y-3 font-mono text-xs text-zinc-800">
            <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-200 pb-2">
              <span>// MOBILE: React Native + Expo Offline Architecture</span>
              <span className="text-emerald-600 font-bold">Sub-90ms Sync</span>
            </div>
            <pre className="text-[11px] sm:text-xs text-zinc-900 overflow-x-auto leading-relaxed">
{`export function useOfflineFirstSync<T>(domainKey: string) {
  const localDb = useSQLiteContext();
  const networkState = useNetworkStatus();

  return useQuery({
    queryKey: [domainKey],
    queryFn: () => localDb.syncWithRemote({ 
      transport: "websockets", 
      retryQueue: true 
    }),
  });
}`}
            </pre>
            <div className="p-2.5 rounded-lg bg-[#eeece9] border border-[#1d1f24]/20 text-[11px] flex items-center justify-between">
              <span>Shipped in: <strong className="text-zinc-950">Trenzform & Talented Ritu Insan Mobile Apps</strong></span>
              <span className="font-bold text-emerald-700">iOS & Android (Expo 54)</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="platform" className="pt-32 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-2 border-[#1d1f24] bg-[#f7a501] shadow-retro-sm text-xs font-mono font-black text-[#1d1f24] uppercase tracking-wider">
          <span>SOFTWARE ENGINEER // 8+ YEARS IN PRODUCTION</span>
        </div>

        {/* Big Punchy Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1d1f24] leading-[1.08]">
          The all-in-one software engineer for teams that need to ship.
        </h1>

        {/* Witty Subtitle */}
        <p className="text-base sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed font-medium">
          Mayank Attri automates your systems, builds secured backends, deploys agentic AI, and ships cross-platform apps — all without needing to be micromanaged.
        </p>

        {/* Chunky Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="btn-retro px-6 py-3 rounded-xl text-sm font-black flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={copyEmail}
            className="btn-retro-secondary px-5 py-3 rounded-xl text-xs font-mono font-bold flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-zinc-600" />
            <span>a3mayank@gmail.com</span>
            {copied ? (
              <span className="text-emerald-700 font-sans ml-1 text-xs font-bold flex items-center">
                <Check className="w-3.5 h-3.5 mr-0.5" /> Copied!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-400 ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Interactive Sandbox Window */}
      <div className="mt-14 max-w-4xl mx-auto">
        <div className="rounded-2xl border-2 border-[#1d1f24] bg-white shadow-retro-lg overflow-hidden">
          {/* Retro Window Chrome Titlebar */}
          <div className="bg-[#e3e0d8] border-b-2 border-[#1d1f24] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border border-[#1d1f24] bg-[#ef4444] inline-block" />
              <span className="w-3.5 h-3.5 rounded-full border border-[#1d1f24] bg-[#f7a501] inline-block" />
              <span className="w-3.5 h-3.5 rounded-full border border-[#1d1f24] bg-[#10b981] inline-block" />
              <span className="ml-2 font-mono text-xs font-bold text-zinc-700 hidden sm:inline">
                mayank-attri-os / v8.0-production-suite
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ONLINE // AVAILABLE</span>
            </div>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex flex-wrap border-b-2 border-[#1d1f24] bg-[#f4f1ea] p-1.5 gap-1.5 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#1d1f24] border border-[#1d1f24] shadow-retro-sm'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Window Body */}
          <div className="p-5 sm:p-6 bg-white min-h-[220px]">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Company Scale Proof Bar */}
      <div className="mt-16 pt-8 border-t-2 border-[#1d1f24]/20 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6">
          BATTLE-TESTED SCALE ACROSS INDUSTRY TITANS & VENTURE HUBS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {/* Better.com */}
          <a
            href="https://better.com/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border-2 border-[#1d1f24] bg-white shadow-retro-sm hover:shadow-retro hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all font-bold text-sm sm:text-base flex items-center gap-1 group"
            title="Visit Better.com (opens in new tab)"
          >
            <span className="group-hover:text-emerald-700 transition-colors">better</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-zinc-500 font-normal">com</span>
            <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-[#1d1f24] ml-0.5" />
          </a>

          {/* MakeMyTrip */}
          <a
            href="https://www.makemytrip.com/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border-2 border-[#1d1f24] bg-white shadow-retro-sm hover:shadow-retro hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all font-bold text-sm sm:text-base flex items-center group"
            title="Visit MakeMyTrip.com (opens in new tab)"
          >
            <span>make</span>
            <span className="text-rose-600 font-extrabold">my</span>
            <span>trip</span>
            <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-[#1d1f24] ml-1" />
          </a>

          {/* Colt */}
          <a
            href="https://www.colt.net/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border-2 border-[#1d1f24] bg-white shadow-retro-sm hover:shadow-retro hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center group gap-1.5"
            title="Visit Colt.net (opens in new tab)"
          >
            <ColtLogo className="h-4 sm:h-5 w-auto text-[#1d1f24] group-hover:scale-105 transition-transform" />
            <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-[#1d1f24]" />
          </a>

          {/* Consulting & FDE */}
          <div className="px-4 py-2 rounded-xl border-2 border-[#1d1f24] bg-[#f7a501] shadow-retro-sm font-mono font-black text-sm sm:text-base flex items-center gap-1.5">
            <span>⚡ CONSULTING & FDE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
