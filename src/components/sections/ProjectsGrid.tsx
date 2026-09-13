import React from 'react';
import { projects } from '../../data/projects';
import { ExternalLink } from 'lucide-react';
import { AppleIcon, GooglePlayIcon } from '../ui/BrandIcons';

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t-2 border-[#1d1f24]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border-2 border-[#1d1f24] bg-[#f7a501] shadow-retro-sm text-xs font-mono font-black text-[#1d1f24] uppercase">
            <span>PRODUCTS & SHIPPED CODEBASES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1d1f24]">
            Shipped Software. Zero Vaporware.
          </h2>
          <p className="text-base text-zinc-700 max-w-2xl font-medium">
            A selection of production platforms, multi-tenant architectures, and AI SaaS apps built and deployed across enterprise clients and venture consulting.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const projectUrl = project.liveUrl;

            const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
              if (!projectUrl) return;
              const target = e.target as HTMLElement;
              // Avoid duplicate window opening if clicking an explicit child anchor or button
              if (target.closest('a') || target.closest('button')) {
                return;
              }
              window.open(projectUrl, '_blank', 'noopener,noreferrer');
            };

            const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
              if (!projectUrl) return;
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(projectUrl, '_blank', 'noopener,noreferrer');
              }
            };

            return (
              <div
                key={project.id}
                onClick={projectUrl ? handleCardClick : undefined}
                onKeyDown={projectUrl ? handleKeyDown : undefined}
                role={projectUrl ? 'button' : undefined}
                tabIndex={projectUrl ? 0 : undefined}
                aria-label={projectUrl ? `Open ${project.title} website in a new tab` : undefined}
                className={`card-retro flex flex-col justify-between overflow-hidden group transition-all duration-150 ${
                  projectUrl
                    ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f7a501]'
                    : ''
                }`}
              >
                <div>
                  {/* Retro Window Chrome Titlebar */}
                  <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-4 py-2.5 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2 font-bold text-zinc-800">
                      <span className="w-2.5 h-2.5 rounded-full border border-[#1d1f24] bg-[#1d1f24]" />
                      <span>{project.id}.app</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-white border border-[#1d1f24] text-[10px] font-bold text-zinc-800 shadow-retro-sm">
                        {project.category}
                      </span>
                      {projectUrl ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-500 group-hover:text-black font-bold group-hover:underline">
                          <span>open</span>
                          <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-black" />
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-zinc-500 font-medium">
                          architecture
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Live Screenshot Preview */}
                    {project.image && (
                      <div className="rounded-xl overflow-hidden border-2 border-[#1d1f24] bg-[#1d1f24] mb-4 shadow-retro-sm group/img">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          className="w-full aspect-video object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Title & Tagline */}
                    <div>
                      <h3
                        className={`text-2xl font-black text-[#1d1f24] tracking-tight flex items-center justify-between gap-2 ${
                          projectUrl ? 'group-hover:text-[#f7a501] transition-colors' : ''
                        }`}
                      >
                        <span>{project.title}</span>
                        {projectUrl && (
                          <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-[#1d1f24] opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                        )}
                      </h3>
                      <p className="text-xs font-mono font-bold text-emerald-700 mt-1 uppercase tracking-wide">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer: Tech Stack Pills & Chunky Links */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-[#1d1f24]/10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-[#1d1f24] bg-[#eeece9] border border-[#1d1f24]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-retro px-3.5 py-2 rounded-lg text-xs flex items-center gap-1.5 font-bold"
                      >
                        <span>Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.iosUrl && (
                      <a
                        href={project.iosUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-retro-secondary px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 font-bold"
                        title={`${project.title} on iOS App Store`}
                      >
                        <AppleIcon className="w-3.5 h-3.5 text-[#1d1f24]" />
                        <span>iOS (App Store)</span>
                      </a>
                    )}

                    {project.androidUrl && (
                      <a
                        href={project.androidUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-retro-secondary px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 font-bold"
                        title={`${project.title} on Android Play Store`}
                      >
                        <GooglePlayIcon className="w-3.5 h-3.5 text-[#1d1f24]" />
                        <span>Android (Play Store)</span>
                      </a>
                    )}

                    {!project.liveUrl && !project.iosUrl && !project.androidUrl && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-zinc-600 bg-[#eeece9] border border-[#1d1f24]/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Production Architecture</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
