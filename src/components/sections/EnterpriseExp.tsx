import { useState } from 'react';
import { experiences, education, awards } from '../../data/experience';
import { Calendar, MapPin, CheckCircle2, Award, GraduationCap, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ColtLogo } from '../ui/BrandIcons';

const versionMap: Record<string, string> = {
  'consulting': 'v2023.0-LATEST',
  'better': 'v2023.1-PROD',
  'makemytrip': 'v2021.0-SCALE',
  'colt': 'v2018.0-FOUNDATION',
};

const commitMap: Record<string, string> = {
  'consulting': 'commit 94fa2e1',
  'better': 'commit c37b8d0',
  'makemytrip': 'commit e812a45',
  'colt': 'commit 7b09c12',
};

export function EnterpriseExp() {
  const [expandedDeliverables, setExpandedDeliverables] = useState<Record<string, boolean>>({});

  const toggleDeliverables = (id: string) => {
    setExpandedDeliverables((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="changelog" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t-2 border-[#1d1f24]">
      {/* Anchor for backward compatibility */}
      <span id="experience" className="sr-only" />

      <div className="space-y-14">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border-2 border-[#1d1f24] bg-[#f7a501] shadow-retro-sm text-xs font-mono font-black text-[#1d1f24] uppercase">
            <span>CAREER CHANGELOG // 8+ YEARS IN PRODUCTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1d1f24]">
            Changelog & Battle-Tested Systems
          </h2>
          <p className="text-base text-zinc-700 max-w-2xl font-medium">
            From carrier-grade telecom automation to high-frequency travel booking engines and fintech underwriting, here is my deployment record.
          </p>
        </div>

        {/* Release Changelog Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card-retro overflow-hidden"
            >
              {/* Retro Titlebar / Release Header */}
              <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-4 py-3 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="px-2.5 py-1 rounded bg-[#f7a501] border-2 border-[#1d1f24] font-black text-[#1d1f24] shadow-retro-sm">
                    {versionMap[exp.id] || 'v1.0'}
                  </span>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-zinc-900 text-sm flex items-center gap-1.5 hover:text-[#f7a501] group transition-colors"
                      title={`Visit ${exp.company} (opens in new tab)`}
                    >
                      {exp.id === 'colt' && <ColtLogo className="h-3.5 w-auto text-[#1d1f24] group-hover:scale-105 transition-transform" />}
                      <span className="underline decoration-1 underline-offset-4 decoration-zinc-300 group-hover:decoration-[#f7a501]">{exp.company}</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-[#1d1f24]" />
                    </a>
                  ) : (
                    <span className="font-bold text-zinc-800 text-sm flex items-center gap-2">
                      <span>{exp.company}</span>
                    </span>
                  )}
                  <span className="text-zinc-400 font-normal">/</span>
                  <span className="font-bold text-zinc-700">
                    {exp.role}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-zinc-600 font-bold text-[11px]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                  <span className="hidden sm:inline text-zinc-400 font-mono">
                    {commitMap[exp.id]}
                  </span>
                </div>
              </div>

              {/* Release Content */}
              <div className="p-6 sm:p-7 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-sm sm:text-base text-zinc-800 font-medium leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f7a501] border-2 border-[#1d1f24] text-xs font-mono font-black text-[#1d1f24] shadow-retro-sm whitespace-nowrap self-start">
                      <Award className="w-3.5 h-3.5" />
                      <span>{exp.award}</span>
                    </div>
                  )}
                </div>

                {/* Highlights (Minimized by default) */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => toggleDeliverables(exp.id)}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg border-2 border-[#1d1f24] bg-[#f4f1ea] hover:bg-[#eae6dc] transition-all text-left font-mono group shadow-retro-sm"
                    aria-expanded={Boolean(expandedDeliverables[exp.id])}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#1d1f24]">
                        Key Deliverables & Architectural Milestones
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#1d1f24] text-[10px] font-bold text-zinc-700">
                        {exp.bullets.length} milestones
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700 group-hover:text-[#1d1f24]">
                      <span className="text-[11px]">
                        {expandedDeliverables[exp.id] ? 'Hide' : 'Expand'}
                      </span>
                      {expandedDeliverables[exp.id] ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#1d1f24]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#1d1f24]" />
                      )}
                    </div>
                  </button>

                  {expandedDeliverables[exp.id] && (
                    <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 pt-1 pl-1">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-0.5 text-[#f7a501] bg-[#1d1f24] rounded-full p-0.5 flex-shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f7a501]" />
                          </span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3 border-t-2 border-[#1d1f24]/10">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-[#1d1f24] bg-[#eeece9] border border-[#1d1f24]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Industry Recognition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Education Card */}
          <div className="card-retro overflow-hidden flex flex-col justify-between">
            <div>
              <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-4 py-2.5 flex items-center justify-between font-mono text-xs font-bold text-zinc-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#1d1f24]" />
                  <span>EDUCATION // ALUMNI</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-bold">{education.period}</span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-black text-[#1d1f24] tracking-tight">
                  {education.institution}
                </h3>
                <p className="text-sm font-bold text-zinc-700">
                  {education.degree}
                </p>
                <p className="text-xs text-zinc-500 font-mono">
                  {education.location} • {education.period}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="p-3 rounded-xl bg-[#eeece9] border border-[#1d1f24] text-xs font-mono font-bold text-zinc-800">
                Core: Algorithms, Distributed Systems, Compilers & Computer Architecture.
              </div>
            </div>
          </div>

          {/* Awards Card */}
          <div className="card-retro overflow-hidden flex flex-col justify-between">
            <div>
              <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-4 py-2.5 flex items-center justify-between font-mono text-xs font-bold text-zinc-800">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1d1f24]" />
                  <span>HONORS & RECOGNITION</span>
                </div>
                <span className="text-[10px] text-emerald-700 font-bold">VERIFIED PRODUCTION</span>
              </div>
              <div className="p-6 space-y-4">
                {awards.map((award, i) => (
                  <div key={i} className="space-y-1 pb-3 last:pb-0 border-b last:border-b-0 border-[#1d1f24]/10">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm text-[#1d1f24]">
                        🏆 {award.title}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#f7a501] border border-[#1d1f24]">
                        {award.date}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-zinc-700">
                      {award.organization}
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
