import React from 'react';
import { ExternalLink, Rocket, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { ActiveTab } from '../types';

interface PartnersPageProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ setActiveTab }) => {
  const partners = [
    {
      name: 'Cloudflare Pages',
      category: 'Edge CDN & Security',
      desc: 'Deploy exported bundles to 300+ edge data centers worldwide with automatic HTTPS, DDoS protection, and instant cache invalidation.',
      link: 'https://pages.cloudflare.com',
      badge: 'Edge Hosting',
      color: '#f38020'
    },
    {
      name: 'GitHub Pages',
      category: 'Developer Version Control',
      desc: 'Host static repositories directly from your Git branches. Completely free for public open source projects.',
      link: 'https://pages.github.com',
      badge: 'Git CI/CD',
      color: '#ffffff'
    },
    {
      name: 'Vercel',
      category: 'Frontend Cloud',
      desc: 'Deploy with zero configuration using the included vercel.json. Preview branches, edge middleware, and custom domains.',
      link: 'https://vercel.com',
      badge: 'Next-Gen Hosting',
      color: '#00ffff'
    },
    {
      name: 'Supabase',
      category: 'Backend & Database',
      desc: 'Connect your cloned landing pages to Postgres authentication, real-time subscriptions, and storage in a few lines of JavaScript.',
      link: 'https://supabase.com',
      badge: 'Database Stack',
      color: '#3ecf8e'
    },
    {
      name: 'Tailwind CSS',
      category: 'Modern Styling System',
      desc: 'Utility-first styling powering rapid responsive adaptations and luminous neon color schemes.',
      link: 'https://tailwindcss.com',
      badge: 'Design System',
      color: '#38bdf8'
    },
    {
      name: 'MDN Web Docs',
      category: 'Web Standards Reference',
      desc: 'Adhering to strict W3C web standards for HTML5 semantic tags, accessible contrast, and CSS variables.',
      link: 'https://developer.mozilla.org',
      badge: 'W3C Standards',
      color: '#ffe600'
    },
    {
      name: 'Stripe',
      category: 'Payment Infrastructure',
      desc: 'Easily hook up Stripe Checkout links to buttons on any cloned landing page to start accepting customer payments in minutes.',
      link: 'https://stripe.com',
      badge: 'Checkout Ready',
      color: '#635bff'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#00ff88] px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 inline-block mb-4">
          ECOSYSTEM & INTEGRATION
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          Technology Partners
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          KLONE is designed to seamlessly export into the modern web ecosystem. Every project is packaged for zero-friction deployment to leading cloud platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {partners.map((p, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#0c0c18] border border-[#222238] hover:border-[#00ff88] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#18182a] text-slate-300 border border-[#292942]">
                  {p.badge}
                </span>
                <span className="text-[10px] font-mono text-slate-500">{p.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">{p.desc}</p>
            </div>

            <div className="pt-4 border-t border-[#1a1a2c] flex items-center justify-between">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#00ff88] hover:underline flex items-center gap-1.5"
              >
                <span>Official Documentation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setActiveTab('studio')}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-xs shadow-lg hover:brightness-110 cursor-pointer"
        >
          Open Live Studio Now
        </button>
      </div>
    </div>
  );
};
