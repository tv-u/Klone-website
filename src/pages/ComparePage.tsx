import React from 'react';
import { Check, X, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface ComparePageProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const ComparePage: React.FC<ComparePageProps> = ({ setActiveTab }) => {
  const tools = [
    {
      name: 'KLONE',
      badge: 'World #1 Cloner',
      tagline: 'Instant web cloner with offline AI & clean ZIP export',
      highlight: true,
      price: '$0 Free Forever',
      signup: 'No signup needed',
      export: 'Full HTML/CSS/JS + Vercel & Cloudflare',
      ai: 'Built-in offline AI (No API keys)',
      speed: '< 2 seconds',
      accuracy: 'High Fidelity + Clean Code',
    },
    {
      name: 'HTTrack',
      badge: 'Legacy Desktop Tool',
      tagline: 'Old-school desktop website crawler and offline browser',
      highlight: false,
      price: 'Free (Open Source)',
      signup: 'No',
      export: 'Unorganized files with broken links',
      ai: 'No AI capabilities',
      speed: '5 - 15 minutes',
      accuracy: 'Raw assets, broken scripts',
    },
    {
      name: 'Webflow',
      badge: 'SaaS Builder',
      tagline: 'Visual website design and hosting platform',
      highlight: false,
      price: '$29 - $49/mo per site',
      signup: 'Account required',
      export: 'Locked behind paid workspace',
      ai: 'Paid credits required',
      speed: 'Manual creation',
      accuracy: 'Requires manual rebuilding',
    },
    {
      name: 'Framer',
      badge: 'Interactive Builder',
      tagline: 'Canvas-based design tool with native hosting',
      highlight: false,
      price: '$20 - $35/mo per site',
      signup: 'Account required',
      export: 'No HTML code export (Hosted only)',
      ai: 'Token quota limits',
      speed: 'Manual layout',
      accuracy: 'Requires manual rebuilding',
    },
    {
      name: 'Copylime / Teleport',
      badge: 'Legacy Scraper',
      tagline: 'Basic static asset scraper from early 2010s',
      highlight: false,
      price: '$19/mo',
      signup: 'Account required',
      export: 'Partial HTML only',
      ai: 'None',
      speed: '30 seconds',
      accuracy: 'Frequently fails modern React SPAs',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#ff2e93] px-3.5 py-1.5 rounded-full bg-[#ff2e93]/10 border border-[#ff2e93]/30 inline-block mb-4">
          HEAD-TO-HEAD MATRIX
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          Why KLONE Beats Every Alternative
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Traditional website scrapers generate broken code, while modern builders lock your HTML behind expensive monthly subscriptions. KLONE gives you the best of both worlds for free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-3xl flex flex-col justify-between transition-all ${
              tool.highlight
                ? 'bg-gradient-to-b from-[#141426] to-[#0c0c18] border-2 border-[#ff2e93] shadow-[0_0_35px_rgba(255,46,147,0.3)]'
                : 'bg-[#0d0d18] border border-[#202034]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-black text-white">{tool.name}</h3>
                <span
                  className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    tool.highlight
                      ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30'
                      : 'bg-[#18182c] text-slate-400'
                  }`}
                >
                  {tool.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">{tool.tagline}</p>

              <div className="space-y-3 text-xs mb-8">
                <div className="flex justify-between py-1.5 border-b border-[#1c1c30]">
                  <span className="text-slate-500 font-mono">Pricing:</span>
                  <span className={tool.highlight ? 'text-[#00ff88] font-bold' : 'text-slate-200'}>
                    {tool.price}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1c1c30]">
                  <span className="text-slate-500 font-mono">Account Signup:</span>
                  <span className={tool.highlight ? 'text-[#ffe600] font-bold' : 'text-slate-300'}>
                    {tool.signup}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1c1c30]">
                  <span className="text-slate-500 font-mono">AI Customization:</span>
                  <span className={tool.highlight ? 'text-[#00ff88] font-bold' : 'text-slate-300'}>
                    {tool.ai}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1c1c30]">
                  <span className="text-slate-500 font-mono">Code Export:</span>
                  <span className={tool.highlight ? 'text-white font-bold' : 'text-slate-400'}>
                    {tool.export}
                  </span>
                </div>
              </div>
            </div>

            {tool.highlight && (
              <button
                onClick={() => setActiveTab('studio')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-extrabold text-xs shadow-md hover:brightness-110 transition-all cursor-pointer"
              >
                Launch KLONE Free
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
