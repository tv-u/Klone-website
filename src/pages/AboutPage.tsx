import React from 'react';
import { Globe, Zap, Shield, Heart, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';
import { LanguageOption, getTranslation } from '../i18n/languages';

interface AboutPageProps {
  setActiveTab: (tab: ActiveTab) => void;
  currentLang?: LanguageOption;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, currentLang }) => {
  const langCode = currentLang?.code || 'en';

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 relative z-10 text-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#00ff88] px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 inline-block mb-4">
          WORLD #1 WEBPAGE CLONING ENGINE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
          About KLONE International
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Democratizing web layout inspection, rapid design prototyping, and frontend code generation for 250,000+ creators across 50 countries without signups, paywalls, or API keys.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-[#0c0c18] border border-[#22223a]">
          <div className="w-10 h-10 rounded-xl bg-[#ff2e93]/20 border border-[#ff2e93]/40 flex items-center justify-center mb-4 text-[#ff2e93]">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg mb-2">Our Mission</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Provide zero-friction, instant URL-to-code synthesis so designers and software engineers can study frontend architecture and launch responsive sites in seconds.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0c18] border border-[#22223a]">
          <div className="w-10 h-10 rounded-xl bg-[#00ff88]/20 border border-[#00ff88]/40 flex items-center justify-center mb-4 text-[#00ff88]">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg mb-2">Worldwide Reach</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Supporting 50 world languages natively with dual edge deployments on Cloudflare Pages and GitHub Pages for zero latency across all continents.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0c18] border border-[#22223a]">
          <div className="w-10 h-10 rounded-xl bg-[#ffe600]/20 border border-[#ffe600]/40 flex items-center justify-center mb-4 text-[#ffe600]">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg mb-2">100% Free Guarantee</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Unlimited web cloning without credits, accounts, or payment requirements. Clean HTML/CSS/JS export with zero proprietary lock-in.
          </p>
        </div>
      </div>

      {/* Detailed Story Section */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#111122] to-[#0a0a14] border border-[#252544] mb-16 space-y-6 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-black text-white">Engineered for Extreme Performance & Accessibility</h2>
        <p>
          Founded in 2026, KLONE was built to replace slow, broken web scrapers that generated bloated, unreadable code. Our proprietary engine parses public HTML5 DOM elements, extracts inline CSS rules, resolves external media assets, and strips frame-busters automatically.
        </p>
        <p>
          With built-in offline AI customization, users can refine copy, swap brand colors, and generate production static bundles ready for Cloudflare Pages, Vercel, and GitHub Pages without providing third-party API keys or subscribing to expensive monthly tiers.
        </p>

        <div className="pt-4 border-t border-[#1f1f38] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
          <div>
            <div className="text-2xl font-black text-[#00ff88]">250,000+</div>
            <div className="text-[11px] text-slate-500 uppercase mt-1">Cloned Sites</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#ffe600]">50</div>
            <div className="text-[11px] text-slate-500 uppercase mt-1">Languages Supported</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#ff2e93]">100%</div>
            <div className="text-[11px] text-slate-500 uppercase mt-1">Free Forever</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#00d4ff]">&lt; 1.0s</div>
            <div className="text-[11px] text-slate-500 uppercase mt-1">Scrape Latency</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => setActiveTab('studio')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ffe600] to-[#00ff88] text-black font-black text-sm tracking-wide hover:brightness-110 transition-all cursor-pointer shadow-[0_0_30px_rgba(255,46,147,0.3)]"
        >
          <span>START CLONING WEBSITES NOW</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
