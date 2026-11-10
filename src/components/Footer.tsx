import React from 'react';
import { ActiveTab } from '../types';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Github, 
  ExternalLink,
  Code,
  Terminal,
  Heart
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenCookieSettings }) => {
  return (
    <footer className="relative bg-[#06060c] border-t border-[#1a1a2e] pt-16 pb-12 text-slate-400 z-10">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#ff2e93]/10 via-[#ffe600]/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-14">
          {/* Column 1: Brand & Promise */}
          <div className="col-span-2">
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer select-none mb-4"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff2e93] via-[#ffe600] to-[#00ff88] p-[2px]">
                <div className="w-full h-full bg-[#0a0a14] rounded-[10px] flex items-center justify-center font-black text-[#ff2e93] text-lg">
                  K
                </div>
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                KLONE<span className="text-[#00ff88]">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              World's #1 Free Unlimited Website Cloner. Clone any public URL into an editable project with live AI customization, clean production export, and worldwide SEO tags. Zero signups, zero credit cards, zero API keys.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">
                100% Free Forever
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#ffe600]/10 text-[#ffe600] border border-[#ffe600]/20">
                50+ Languages
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#ff2e93]/10 text-[#ff2e93] border border-[#ff2e93]/20">
                Zero Signup
              </span>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono text-[#ffe600]">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('studio')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  Live Studio
                  <span className="text-[10px] bg-[#00ff88]/20 text-[#00ff88] px-1.5 py-0.2 rounded font-bold">
                    PRO
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('how-it-works')} className="hover:text-white transition-colors">
                  How it Works
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pricing')} className="hover:text-white transition-colors">
                  Pricing (Free)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('compare')} className="hover:text-white transition-colors">
                  Compare Tools
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('showcase')} className="hover:text-white transition-colors">
                  Community Builds
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Guides */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono text-[#00ff88]">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setActiveTab('blog')} className="hover:text-white transition-colors">
                  Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('docs')} className="hover:text-white transition-colors">
                  Documentation
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('showcase')} className="hover:text-white transition-colors">
                  Examples & Builds
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">
                  Support & Help
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('partners')} className="hover:text-white transition-colors">
                  Ecosystem Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Ecosystem & Stack */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono text-[#ff2e93]">
              Integrations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Vercel</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://pages.cloudflare.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Cloudflare Pages</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>GitHub Pages</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Supabase</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Tailwind CSS</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>MDN Web Docs</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono text-slate-300">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setActiveTab('terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('eula')} className="hover:text-white transition-colors">
                  EULA Agreement
                </button>
              </li>
              <li>
                <button onClick={onOpenCookieSettings} className="hover:text-white transition-colors text-left">
                  Cookie Settings
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">
                  Contact Compliance
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Bar */}
        <div className="py-6 border-y border-[#1a1a2e] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            <span>DEPLOY-READY TARGETS:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-semibold tracking-wider uppercase">
            <span className="hover:text-slate-300 transition-colors">Google Cloud</span>
            <span className="hover:text-slate-300 transition-colors">GitHub Pages</span>
            <span className="hover:text-slate-300 transition-colors">Cloudflare Pages</span>
            <span className="hover:text-slate-300 transition-colors">Vercel</span>
            <span className="hover:text-slate-300 transition-colors">Supabase</span>
            <span className="hover:text-slate-300 transition-colors">Stripe Ready</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 KLONE, Inc. All rights reserved. Worldwide Website Cloner Technology.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveTab('terms')} className="hover:text-white">Terms</button>
            <span>•</span>
            <button onClick={() => setActiveTab('privacy')} className="hover:text-white">Privacy</button>
            <span>•</span>
            <button onClick={() => setActiveTab('eula')} className="hover:text-white">EULA</button>
            <span>•</span>
            <button onClick={onOpenCookieSettings} className="hover:text-white">Cookie Preferences</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
