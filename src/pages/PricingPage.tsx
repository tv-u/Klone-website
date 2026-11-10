import React from 'react';
import { Check, Zap, Sparkles, X, Shield, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';
import { LanguageOption, getTranslation } from '../i18n/languages';

interface PricingPageProps {
  setActiveTab: (tab: ActiveTab) => void;
  currentLang?: LanguageOption;
}

export const PricingPage: React.FC<PricingPageProps> = ({ setActiveTab, currentLang }) => {
  const langCode = currentLang?.code || 'en';
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#00ff88] px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 inline-block mb-4">
          100% FREE FOREVER • ZERO CREDIT CARD
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          {getTranslation('pricingTitle', langCode)}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {getTranslation('pricingSubtitle', langCode)}
        </p>
      </div>

      {/* Main Pricing Card */}
      <div className="max-w-xl mx-auto mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#121224] to-[#0c0c18] border-2 border-[#00ff88] shadow-[0_0_50px_rgba(0,255,136,0.25)] relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-[#00ff88] text-black text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
            COMMUNITY EDITION
          </div>

          <div className="text-xs font-mono text-[#00ff88] font-bold mb-2 uppercase">
            Unlimited Free Plan
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl sm:text-6xl font-black text-white">$0</span>
            <span className="text-slate-400 font-mono text-sm">/ forever</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
            Unlimited cloning from any public URL. Full access to Live Preview, Visual DOM Inspector, Monaco-style Code Editor, and Offline AI Assistant.
          </p>

          <div className="space-y-3 mb-8 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-3 text-slate-200">
              <Check className="w-4 h-4 text-[#00ff88]" />
              <span>Unlimited website clones per day</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <Check className="w-4 h-4 text-[#00ff88]" />
              <span>Zero signup or account required</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <Check className="w-4 h-4 text-[#00ff88]" />
              <span>Zero credit card or payment methods required</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <Check className="w-4 h-4 text-[#00ff88]" />
              <span>Full Offline AI Assistant (No API key needed)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <Check className="w-4 h-4 text-[#00ff88]" />
              <span>Instant ZIP export (HTML, CSS, JS, Vercel & Cloudflare configs)</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <Check className="w-4 h-4 text-[#00ff88]" />
              <span>Full support for Top 50 international languages</span>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('studio')}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00ff88] via-[#ffe600] to-[#ff2e93] text-black font-black text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            Start Cloning Websites Free
          </button>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-4xl mx-auto rounded-2xl bg-[#0c0c18] border border-[#222238] p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Compare KLONE with Alternatives
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#1f1f33] text-slate-400 font-mono">
                <th className="pb-3">Capability</th>
                <th className="pb-3 text-[#00ff88] font-bold">KLONE</th>
                <th className="pb-3 text-slate-400">Webflow</th>
                <th className="pb-3 text-slate-400">Framer</th>
                <th className="pb-3 text-slate-400">HTTrack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18182a] text-slate-300">
              <tr>
                <td className="py-3 font-medium">Monthly Cost</td>
                <td className="py-3 text-[#00ff88] font-bold font-mono">$0 Free</td>
                <td className="py-3 text-slate-400 font-mono">$29 - $49/mo</td>
                <td className="py-3 text-slate-400 font-mono">$20 - $30/mo</td>
                <td className="py-3 text-slate-400 font-mono">Free (Desktop)</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Signup Required</td>
                <td className="py-3 text-[#00ff88] font-bold">NO (Zero Signup)</td>
                <td className="py-3 text-slate-400">Yes</td>
                <td className="py-3 text-slate-400">Yes</td>
                <td className="py-3 text-slate-400">No</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">In-Browser AI Customization</td>
                <td className="py-3 text-[#00ff88] font-bold">Yes (No API key)</td>
                <td className="py-3 text-slate-400">Limited AI Plan</td>
                <td className="py-3 text-slate-400">Credits Required</td>
                <td className="py-3 text-slate-500">None</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Clean Production ZIP Export</td>
                <td className="py-3 text-[#00ff88] font-bold">Yes (Instant)</td>
                <td className="py-3 text-slate-400">Paid Plan Only</td>
                <td className="py-3 text-slate-500">No (Hosted Only)</td>
                <td className="py-3 text-slate-400">Messy raw dump</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">50 Languages Global SEO</td>
                <td className="py-3 text-[#00ff88] font-bold">Yes</td>
                <td className="py-3 text-slate-500">Localization Add-on ($$$)</td>
                <td className="py-3 text-slate-500">Manual</td>
                <td className="py-3 text-slate-500">None</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
