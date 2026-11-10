import React from 'react';
import { Sparkles, Eye, ArrowRight, Download, Zap, ExternalLink, Code2 } from 'lucide-react';
import { ActiveTab, ClonedProject } from '../types';
import { ARCHETYPES } from '../utils/clonerEngine';

interface ShowcasePageProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSelectArchetype: (project: ClonedProject) => void;
}

export const ShowcasePage: React.FC<ShowcasePageProps> = ({
  setActiveTab,
  onSelectArchetype,
}) => {
  const projects = [
    {
      key: 'wolfer' as keyof typeof ARCHETYPES,
      name: 'Wolfer',
      category: 'SaaS Landing Page',
      badge: 'SaaS Landing Page',
      url: 'https://wolfer.io',
      desc: 'Next-gen autonomous AI analytics telemetry platform. Clean dark mode layout with interactive metrics and pricing grid.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      stats: '1,420 lines clean HTML/CSS • 99.8% responsive',
      colors: ['#0f172a', '#3b82f6', '#10b981'],
    },
    {
      key: 'dusk' as keyof typeof ARCHETYPES,
      name: 'Dusk Til Dawn',
      category: 'Event Landing Page',
      badge: 'Event Landing Page',
      url: 'https://dusktildawnfest.com',
      desc: 'Electric neon cyber carnival experience 2026. Vibrant glowing aesthetics, headline artist lineup, and ticket booking CTA.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
      stats: 'Neon glow styles • Mobile ticket CTA • Audio visual grid',
      colors: ['#050508', '#ff2e93', '#ffe600'],
    },
    {
      key: 'therapy' as keyof typeof ARCHETYPES,
      name: 'Grounded Collective Therapy Group',
      category: 'Practice Website',
      badge: 'Practice Website',
      url: 'https://groundedtherapy.org',
      desc: 'Warm, compassionate somatic psychotherapy practice website. Organic earth tones, clinician directory, and consultation booking.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
      stats: 'Serif typography • Calming layout • Accessible contrast',
      colors: ['#fbf8f3', '#2c3e35', '#b37d4e'],
    },
    {
      key: 'portfolio' as keyof typeof ARCHETYPES,
      name: 'ToyBox Productions',
      category: 'Portfolio Website',
      badge: 'Portfolio Website',
      url: 'https://toybox.studio',
      desc: 'Creative director & boutique film visual studio. Monochromatic brutalist typography, kinetic project ticker, and 3D reels.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
      stats: 'High-contrast typography • Minimalist structure • Fast load',
      colors: ['#000000', '#ffffff', '#ff2e93'],
    },
    {
      key: 'rental' as keyof typeof ARCHETYPES,
      name: 'Veristay',
      category: 'Short-term Rental Landing Page',
      badge: 'Short-term Rental Landing Page',
      url: 'https://veristay.vacations',
      desc: 'Curated modern architectural sanctuaries and luxury retreat booking. Sticky search bar with location and date selectors.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      stats: 'Interactive search form • Villa showcase • Hotel hospitality',
      colors: ['#0d1117', '#ffffff', '#22c55e'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#00ff88] px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 inline-block mb-4">
          COMMUNITY BUILDS & EXAMPLES
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          Explore Built With Kloner
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Real production websites cloned directly from public links. Click any project to open in our interactive Live Studio editor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden bg-[#0c0c18] border border-[#222238] hover:border-[#ffe600] transition-all flex flex-col group"
          >
            <div className="relative h-64 overflow-hidden bg-black">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-[#00ff88] border border-[#00ff88]/40 font-bold">
                Live preview
              </span>
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-black/75 text-xs font-mono text-slate-300">
                {p.badge}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#ffe600] transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex items-center gap-2 mb-6 text-[11px] font-mono text-slate-500">
                  <span>{p.stats}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1c1c30] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {p.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    onSelectArchetype(ARCHETYPES[p.key]);
                    setActiveTab('studio');
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-xs tracking-wide shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 fill-black" />
                  <span>Open in Live Studio</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
