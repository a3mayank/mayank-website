import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#1d1f24] bg-[#eeece9] pt-14 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Row: Mascot + Tagline + Back to top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f7a501] border-2 border-[#1d1f24] flex items-center justify-center text-2xl shadow-retro">
              👨🏽‍💻
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-[#1d1f24]">Mayank Attri</span>
                <span className="px-2 py-0.5 rounded border border-[#1d1f24] bg-white text-[10px] font-mono font-bold">
                  v8.0 PRODUCTION
                </span>
              </div>
              <p className="text-xs text-zinc-600 font-medium max-w-sm">
                Senior Fullstack Engineer & Systems Architect (IIIT-Delhi). 8+ years building high-concurrency systems & agentic AI.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-[#1d1f24] bg-white text-xs font-mono font-bold shadow-retro-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-retro-secondary px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Navigation & Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t-2 border-[#1d1f24]/10 text-xs font-mono">
          <div className="space-y-2.5">
            <span className="font-black uppercase text-[#1d1f24] tracking-wider text-[11px]">
              NAVIGATION
            </span>
            <ul className="space-y-1.5 font-bold text-zinc-700">
              <li><a href="#platform" className="hover:text-[#f7a501] transition-colors">Platform OS</a></li>
              <li><a href="#projects" className="hover:text-[#f7a501] transition-colors">Shipped Projects</a></li>
              <li><a href="#capabilities" className="hover:text-[#f7a501] transition-colors">Capabilities Matrix</a></li>
              <li><a href="#websites" className="hover:text-[#f7a501] transition-colors">Websites & Web Apps</a></li>
              <li><a href="#changelog" className="hover:text-[#f7a501] transition-colors">Career Changelog</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="font-black uppercase text-[#1d1f24] tracking-wider text-[11px]">
              FEATURED APPS
            </span>
            <ul className="space-y-1.5 font-bold text-zinc-700">
              <li><a href="https://app.trenzform.com" target="_blank" rel="noreferrer" className="hover:text-[#f7a501] transition-colors">Trenzform</a></li>
              <li><a href="http://talentedrituinsan.com/" target="_blank" rel="noreferrer" className="hover:text-[#f7a501] transition-colors">Talented Ritu Insan</a></li>
              <li><a href="https://custompro-landing.vercel.app" target="_blank" rel="noreferrer" className="hover:text-[#f7a501] transition-colors">CustomsPro (AI)</a></li>
              <li><a href="#projects" className="hover:text-[#f7a501] transition-colors">GymAI Portal</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="font-black uppercase text-[#1d1f24] tracking-wider text-[11px]">
              CONNECT
            </span>
            <ul className="space-y-1.5 font-bold text-zinc-700">
              <li><a href="mailto:a3mayank@gmail.com" className="hover:text-[#f7a501] transition-colors">a3mayank@gmail.com</a></li>
              <li><a href="https://github.com/a3mayank" target="_blank" rel="noreferrer" className="hover:text-[#f7a501] transition-colors">github.com/a3mayank</a></li>
              <li><a href="https://linkedin.com/in/a3mayank" target="_blank" rel="noreferrer" className="hover:text-[#f7a501] transition-colors">LinkedIn @a3mayank</a></li>
              <li><a href="https://x.com/a3mayank" target="_blank" rel="noreferrer" className="hover:text-[#f7a501] transition-colors">X @a3mayank</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="font-black uppercase text-[#1d1f24] tracking-wider text-[11px]">
              DEVELOPER DISPATCH
            </span>
            <pre className="text-[10px] leading-tight text-zinc-700 font-mono bg-white p-2.5 rounded-lg border-2 border-[#1d1f24] shadow-retro-sm">
{`   👨🏽‍💻 (•ᴥ•)
  /|     |\\
 "Ship fast,
  build real."`}
            </pre>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t-2 border-[#1d1f24]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-600 font-medium">
          <p>
            &copy; {new Date().getFullYear()} Mayank Attri (@a3mayank). All rights reserved.
          </p>
          <p className="font-mono text-xs">
            Handcrafted with retro-terminal aesthetics • Zero AI slop • High signal.
          </p>
        </div>
      </div>
    </footer>
  );
}
