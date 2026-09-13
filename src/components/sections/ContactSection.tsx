import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '../ui/BrandIcons';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Fullstack MVP');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('a3mayank@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projectTypes = [
    'Fullstack MVP',
    'Agentic AI / LLMs',
    'High-Scale Backend',
    'Cloud Infra & IaC',
    'Mobile App (Expo)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent(`[${projectType}] Project Inquiry from ${name || 'Prospective Client'}`);
    const body = encodeURIComponent(
      `Hi Mayank Attri,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Scope:\n${message}\n\n---\nSent via mayankattri.dev`
    );
    window.location.href = `mailto:a3mayank@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t-2 border-[#1d1f24]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border-2 border-[#1d1f24] bg-[#f7a501] shadow-retro-sm text-xs font-mono font-black text-[#1d1f24] uppercase">
            <span>TALK TO AN ENGINEER // ZERO RECIPROCAL FLUFF</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1d1f24]">
            Ready to build something serious?
          </h2>
          <p className="text-base text-zinc-700 max-w-2xl font-medium">
            No 45-minute slide deck pitches. No recruiter intermediaries. Just direct engineering discussion about your technical roadmap, architecture, and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Handles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="card-retro p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-zinc-600">
                  Direct Dispatch
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE NOW
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#f4f1ea] border-2 border-[#1d1f24]">
                <a
                  href="mailto:a3mayank@gmail.com"
                  className="font-mono text-sm sm:text-base font-black text-[#1d1f24] hover:text-[#f7a501] truncate flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-zinc-700 flex-shrink-0" />
                  <span>a3mayank@gmail.com</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg border border-[#1d1f24] bg-white hover:bg-[#eeece9] text-[#1d1f24] transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-700 font-bold font-mono">
                  ✓ Copied email to clipboard!
                </p>
              )}

              <div className="space-y-2 pt-2 border-t border-[#1d1f24]/10 text-xs text-zinc-700 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Turnaround: Typical reply in under 12 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Engagement: Contract, consulting, or fractional FDE</span>
                </div>
              </div>
            </div>

            {/* Online Profiles */}
            <div className="card-retro p-6 space-y-3 text-xs">
              <div className="text-xs font-mono font-black uppercase tracking-wider text-zinc-600">
                Verified Codebases & Profiles
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href="https://github.com/a3mayank"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-[#1d1f24]/20 hover:border-[#1d1f24] hover:bg-[#f4f1ea] transition-all"
                >
                  <span className="flex items-center gap-2.5 font-mono font-bold text-zinc-800">
                    <GithubIcon className="w-4 h-4 text-[#1d1f24]" />
                    <span>github.com/a3mayank</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>

                <a
                  href="https://linkedin.com/in/a3mayank"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-[#1d1f24]/20 hover:border-[#1d1f24] hover:bg-[#f4f1ea] transition-all"
                >
                  <span className="flex items-center gap-2.5 font-mono font-bold text-zinc-800">
                    <LinkedinIcon className="w-4 h-4 text-[#1d1f24]" />
                    <span>linkedin.com/in/a3mayank</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>

                <a
                  href="https://x.com/a3mayank"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-[#1d1f24]/20 hover:border-[#1d1f24] hover:bg-[#f4f1ea] transition-all"
                >
                  <span className="flex items-center gap-2.5 font-mono font-bold text-zinc-800">
                    <TwitterXIcon className="w-4 h-4 text-[#1d1f24]" />
                    <span>x.com/a3mayank</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 card-retro overflow-hidden">
            {/* Titlebar */}
            <div className="bg-[#f4f1ea] border-b-2 border-[#1d1f24] px-4 py-2.5 flex items-center justify-between font-mono text-xs font-bold text-zinc-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] border border-[#1d1f24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f7a501] border border-[#1d1f24]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] border border-[#1d1f24]" />
                <span className="ml-1">inquiry-terminal.sh</span>
              </div>
              <span className="text-zinc-500 font-normal">POST /api/v1/dispatch</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
              {/* Project Type Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[#1d1f24] uppercase">
                  What are you building?
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border-2 border-[#1d1f24] transition-all ${
                        projectType === type
                          ? 'bg-[#f7a501] text-[#1d1f24] shadow-retro-sm'
                          : 'bg-white text-zinc-700 hover:bg-[#f4f1ea]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-[#1d1f24]">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Altman"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border-2 border-[#1d1f24] text-sm text-[#1d1f24] placeholder-zinc-400 focus:bg-[#f4f1ea] focus:outline-none transition-colors font-medium shadow-retro-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-[#1d1f24]">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border-2 border-[#1d1f24] text-sm text-[#1d1f24] placeholder-zinc-400 focus:bg-[#f4f1ea] focus:outline-none transition-colors font-medium shadow-retro-sm"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#1d1f24]">
                  WHAT'S THE SCOPE / TIMELINE?
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your current stack, what needs to be shipped, and any target milestones..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border-2 border-[#1d1f24] text-sm text-[#1d1f24] placeholder-zinc-400 focus:bg-[#f4f1ea] focus:outline-none transition-colors resize-none font-medium shadow-retro-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-retro w-full py-3 px-6 rounded-xl text-sm font-black flex items-center justify-center gap-2"
              >
                <span>Send Dispatch to Mayank Attri</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {sent && (
                <div className="p-3 rounded-lg bg-emerald-50 border-2 border-emerald-600 text-xs font-bold text-emerald-800 text-center">
                  ✓ Opening mail client to dispatch your message. Talk soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
