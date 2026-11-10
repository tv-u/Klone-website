import React, { useState } from 'react';
import { 
  Zap, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Star, 
  Globe2, 
  Code2, 
  Layout, 
  Sliders, 
  Rocket, 
  ShieldCheck, 
  ExternalLink,
  ChevronDown,
  Layers,
  Wand2,
  Terminal,
  HelpCircle,
  Copy
} from 'lucide-react';
import { ActiveTab, ClonedProject } from '../types';
import { ARCHETYPES } from '../utils/clonerEngine';
import { LanguageOption, getTranslation } from '../i18n/languages';

interface HomePageProps {
  setActiveTab: (tab: ActiveTab) => void;
  onCloneUrl: (url: string) => void;
  onSelectArchetype: (project: ClonedProject) => void;
  currentLang: LanguageOption;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onCloneUrl,
  onSelectArchetype,
  currentLang,
}) => {
  const [heroInput, setHeroInput] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroInput.trim()) {
      onCloneUrl(heroInput.trim());
    } else {
      onCloneUrl('https://example.com');
    }
  };

  const showcaseItems = [
    {
      title: 'Wolfer',
      category: 'SaaS Landing Page',
      subtitle: 'Wolfer SaaS landing page',
      archetypeKey: 'wolfer' as keyof typeof ARCHETYPES,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: 'Live preview',
      tagline: 'Autonomous AI Telemetry & Observability',
    },
    {
      title: 'Dusk Til Dawn',
      category: 'Event Landing Page',
      subtitle: 'Dusk Til Dawn Carnival',
      archetypeKey: 'dusk' as keyof typeof ARCHETYPES,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      badge: 'Live preview',
      tagline: 'Neon Electro Carnival Experience 2026',
    },
    {
      title: 'Grounded Collective Therapy Group',
      category: 'Practice Website',
      subtitle: 'Therapy practice website',
      archetypeKey: 'therapy' as keyof typeof ARCHETYPES,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      badge: 'Live preview',
      tagline: 'Integrative Somatic Psychotherapy & Sanctuary',
    },
    {
      title: 'ToyBox Productions',
      category: 'Portfolio Website',
      subtitle: 'Creative director portfolio',
      archetypeKey: 'portfolio' as keyof typeof ARCHETYPES,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      badge: 'Live preview',
      tagline: 'High-Concept Commercials & Unreal Direction',
    },
    {
      title: 'Veristay',
      category: 'Short-term Rental Landing Page',
      subtitle: 'Veristay rental platform',
      archetypeKey: 'rental' as keyof typeof ARCHETYPES,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      badge: 'Live preview',
      tagline: 'Curated Architectural Sanctuaries & Villas',
    },
  ];

  const faqs = [
    {
      q: 'What is a website cloner?',
      a: 'KLONE turns any supported public webpage into an editable, self-contained project. It parses structure, responsive styles, images, and layout so you can easily redesign it, build client mockups, or create high-converting landing pages in minutes.'
    },
    {
      q: 'How do I clone a website from a URL?',
      a: 'Simply paste any public URL (e.g. https://example.com) into our cloner bar and click Clone. KLONE immediately scrapes and synthesizes the DOM, styles, and assets into an interactive preview that you can inspect, edit with AI, and export.'
    },
    {
      q: 'Can I edit the cloned site?',
      a: 'Yes! KLONE gives you three real ways to edit: 1) Click-to-inspect visual mode to change text and styles in-place, 2) Monaco-style live HTML/CSS/JS code editor with instant synchronization, and 3) An intelligent AI Assistant that understands natural language prompts.'
    },
    {
      q: 'Is KLONE really free to try without signup or credit card?',
      a: 'KLONE is 100% free and unlimited. You do not need to create an account, enter a credit card, or configure API keys. Everything runs seamlessly in your browser.'
    },
    {
      q: 'Where can I publish the finished site?',
      a: 'Every cloned site can be downloaded as a complete ZIP package with index.html, style.css, and script.js. The code is ready for one-click deployment to GitHub Pages, Cloudflare Pages, Vercel, Netlify, or Google Cloud Run.'
    },
    {
      q: 'How accurate is the clone?',
      a: 'KLONE preserves semantic HTML hierarchies, responsive viewports, CSS styling, responsive grid layouts, SVG icons, and imagery while stripping malicious tracking scripts for maximum safety.'
    },
    {
      q: 'What are the limitations?',
      a: 'KLONE extracts client-facing frontends (HTML, CSS, JavaScript, media). It does not access private backend databases or server-side proprietary code behind authenticated firewalls.'
    },
    {
      q: 'Can I clone any website?',
      a: 'You can clone any public website on the internet for research, educational prototyping, layout inspiration, and personal redesign mockups.'
    }
  ];

  return (
    <div className="relative z-10">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 overflow-hidden text-center px-4">
        {/* Glow ambient background gradients */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#ff2e93]/20 via-[#ffe600]/15 to-[#00ff88]/20 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Top Tag Badges */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111120] border border-[#ff2e93]/30 text-xs font-mono mb-6 shadow-[0_0_20px_rgba(255,46,147,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            <span className="text-[#ffe600] font-bold">UNLIMITED WEBSITE CLONE</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">WITHOUT SIGNUP WITHOUT CREDIT</span>
            <span className="text-slate-500">•</span>
            <span className="text-[#00ff88] font-bold">100% REAL</span>
          </div>

          {/* Main Title (Translated in Current Language) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
            {getTranslation('heroTitle', currentLang.code)}
          </h1>

          {/* Subtitle (Translated in Current Language) */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            {getTranslation('heroSubtitle', currentLang.code)}
          </p>

          {/* Hero URL Input Form */}
          <form
            onSubmit={handleHeroSubmit}
            className="max-w-3xl mx-auto mb-4 bg-[#0d0d18]/95 border-2 border-[#ff2e93]/50 p-2 sm:p-2.5 rounded-2xl shadow-[0_0_40px_rgba(255,46,147,0.35)] flex flex-col sm:flex-row items-center gap-2 transition-all focus-within:border-[#00ff88]"
          >
            <div className="flex-1 w-full flex items-center px-3 gap-2">
              <span className="text-xs font-mono text-[#00ff88] font-bold select-none">
                URL:
              </span>
              <input
                type="text"
                value={heroInput}
                onChange={(e) => setHeroInput(e.target.value)}
                placeholder={getTranslation('inputPlaceholder', currentLang.code)}
                className="w-full bg-transparent text-white placeholder-slate-500 outline-none text-base font-mono py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-sm tracking-wide shadow-[0_0_20px_rgba(255,46,147,0.5)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>{getTranslation('cloneBtn', currentLang.code)}</span>
            </button>
          </form>

          {/* 1-Click Popular Real Website Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-6 text-xs">
            <span className="text-[11px] font-mono text-[#ffe600] font-bold">
              {getTranslation('quickTestLabel', currentLang.code)}
            </span>
            {[
              { name: '🌐 Wikipedia', url: 'https://en.wikipedia.org' },
              { name: '🍎 Apple', url: 'https://apple.com' },
              { name: '🔍 Google', url: 'https://google.com' },
              { name: '💳 Stripe', url: 'https://stripe.com' },
              { name: '🐙 GitHub', url: 'https://github.com' },
              { name: '⚡ Wolfer SaaS', url: 'https://wolfer.io' },
              { name: '🎡 Carnival Fest', url: 'https://dusktildawnfest.com' },
            ].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onCloneUrl(chip.url)}
                className="px-2.5 py-1 rounded-lg bg-[#121222] border border-[#262644] hover:border-[#00ff88] hover:text-[#00ff88] text-slate-300 font-medium transition-all text-xs cursor-pointer"
              >
                {chip.name}
              </button>
            ))}
          </div>

          {/* Simple Interface Helper Message */}
          <div className="text-xs font-mono text-slate-400 max-w-xl mx-auto mb-8 bg-[#101020]/60 border border-[#22223a] py-1.5 px-4 rounded-full">
            💡 <span className="text-[#00ff88] font-bold">Language Active:</span> {currentLang.name} ({currentLang.flag} {currentLang.nativeName}) — {getTranslation('simpleFastBadge', currentLang.code)}
          </div>

          {/* 3 Pillars of Zero Setup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-2xl bg-[#0e0e1a]/80 border border-[#23233a] hover:border-[#ff2e93]/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#ff2e93]/15 text-[#ff2e93] border border-[#ff2e93]/30 flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h3 className="font-bold text-white text-sm mb-1">
                {getTranslation('noSetup', currentLang.code)}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {getTranslation('noSetupDesc', currentLang.code)}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e0e1a]/80 border border-[#23233a] hover:border-[#ffe600]/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#ffe600]/15 text-[#ffe600] border border-[#ffe600]/30 flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h3 className="font-bold text-white text-sm mb-1">
                {getTranslation('instantPreview', currentLang.code)}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {getTranslation('instantPreviewDesc', currentLang.code)}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e0e1a]/80 border border-[#23233a] hover:border-[#00ff88]/50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h3 className="font-bold text-white text-sm mb-1">
                {getTranslation('oneClickDeploy', currentLang.code)}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {getTranslation('oneClickDeployDesc', currentLang.code)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STAR TESTIMONIAL BANNER */}
      <section className="py-12 bg-[#090914] border-y border-[#1f1f33] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 text-[#ffe600] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#ffe600]" />
            ))}
            <span className="ml-2 font-bold text-sm text-white font-mono">5/5</span>
          </div>
          <blockquote className="text-lg sm:text-2xl font-semibold text-white leading-snug mb-4">
            “I pasted a URL, cloned the layout, and had my own version live the same day. Zero setup. Instant preview. One click deployment.”
          </blockquote>
          <div className="text-xs font-mono text-slate-400">
            Verified Community Builder • Product Hunt #1 Featured Product
          </div>
        </div>
      </section>

      {/* 4-STEP INTERACTIVE WORKFLOW */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-[#00ff88] uppercase tracking-widest block mb-2">
            STEP-BY-STEP WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            How to clone a website
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            From any public website URL to an editable, production-grade project in four seamless steps.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step 1: Paste a URL */}
          <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#22223a] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#ff2e93]/20 text-[#ff2e93] text-xs font-mono font-bold mb-4">
                STEP 01
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Paste a URL</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Drop in a public website URL and Kloner builds a supported starting point by scraping DOM structure, responsive CSS rules, typography, and visual assets.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-[#16162a] border border-[#2b2b48]">
                  CORS Proxy Support
                </span>
                <span className="px-2.5 py-1 rounded bg-[#16162a] border border-[#2b2b48]">
                  Zero Signup
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#06060c] border border-[#292944] font-mono text-xs">
              <div className="text-slate-500 mb-2 font-bold uppercase text-[11px]">
                Drop a link
              </div>
              <div className="flex items-center gap-2 bg-[#121222] border border-[#252540] rounded-xl px-4 py-3 mb-3">
                <span className="text-[#ffe600]">URL:</span>
                <span className="text-white">https://example.com</span>
              </div>
              <button
                onClick={() => onCloneUrl('https://example.com')}
                className="w-full py-2.5 rounded-xl bg-[#ff2e93] text-white font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Clone</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step 2: Preview the website clone */}
          <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#22223a] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 p-6 rounded-2xl bg-[#06060c] border border-[#292944]">
              <div className="flex items-center justify-between pb-3 border-b border-[#1c1c30] mb-4">
                <span className="text-xs font-mono text-[#00ff88] font-bold">PREVIEW PAGES</span>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#16162a] text-[10px] text-white">Home</span>
                  <span className="px-2 py-0.5 rounded bg-[#16162a] text-[10px] text-slate-400">Services</span>
                  <span className="px-2 py-0.5 rounded bg-[#16162a] text-[10px] text-slate-400">About</span>
                </div>
              </div>
              <div className="h-32 bg-[#10101f] rounded-xl border border-dashed border-[#2b2b48] flex flex-col items-center justify-center text-center p-4">
                <Layout className="w-8 h-8 text-[#ffe600] mb-2" />
                <span className="text-xs text-white font-bold">Live Layout Generated</span>
                <span className="text-[10px] text-slate-400">3 Viewports • Responsive Breakpoints</span>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setActiveTab('studio')}
                  className="flex-1 py-2 rounded-lg bg-[#18182c] border border-[#2c2c44] text-xs font-bold text-slate-200"
                >
                  Rebuild preview
                </button>
                <button
                  onClick={() => setActiveTab('studio')}
                  className="flex-1 py-2 rounded-lg bg-[#00ff88] text-black font-extrabold text-xs"
                >
                  Continue
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-[#ffe600]/20 text-[#ffe600] text-xs font-mono font-bold mb-4">
                STEP 02
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Preview the website clone
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Review the generated layout, sections, and structure before changing a detail. Verify responsive rendering on mobile, tablet, and widescreen.
              </p>
              <div className="text-xs text-[#00ff88] font-mono flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Isolated sandboxed DOM with script sanitation</span>
              </div>
            </div>
          </div>

          {/* Step 3: Make it your own with AI */}
          <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#22223a] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/20 text-[#00ff88] text-xs font-mono font-bold mb-4">
                STEP 03
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Make it your own</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Use AI or manual mode to edit copy, swap images, and customize the design to match your brand. Works without API keys directly in your browser.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-[#ff2e93]/15 text-[#ff2e93] border border-[#ff2e93]/30">
                  Updated copy
                </span>
                <span className="px-2.5 py-1 rounded bg-[#ffe600]/15 text-[#ffe600] border border-[#ffe600]/30">
                  Added section
                </span>
                <span className="px-2.5 py-1 rounded bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30">
                  CTA linked
                </span>
              </div>
            </div>

            {/* AI Agent Demo Dialogue matching Prompt */}
            <div className="p-6 rounded-2xl bg-[#06060c] border border-[#292944] space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#1c1c30]">
                <span className="text-[11px] text-[#00ff88] font-bold">AI Agent Kloner assistant</span>
                <span className="text-[10px] text-slate-500">Offline Heuristic Engine</span>
              </div>

              {/* Turn 1 */}
              <div className="space-y-1">
                <div className="text-[10px] text-[#ff2e93] font-bold">U You</div>
                <div className="p-2.5 rounded-lg bg-[#141424] text-slate-300">
                  Make the hero headline shorter, add a pricing section, and connect the CTA to signup.
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-[#00ff88] font-bold">K Kloner Agent</div>
                <div className="p-2.5 rounded-lg bg-[#101924] border border-[#1e2f42] text-slate-200">
                  Done. I tightened the headline, generated a pricing section, and wired the primary CTA to your signup flow.
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[9px] bg-[#00ff88]/20 text-[#00ff88] px-1.5 py-0.5 rounded">Updated copy</span>
                    <span className="text-[9px] bg-[#00ff88]/20 text-[#00ff88] px-1.5 py-0.5 rounded">Added section</span>
                    <span className="text-[9px] bg-[#00ff88]/20 text-[#00ff88] px-1.5 py-0.5 rounded">CTA linked</span>
                  </div>
                </div>
              </div>

              {/* Turn 2 */}
              <div className="space-y-1 pt-1">
                <div className="text-[10px] text-[#ff2e93] font-bold">U You</div>
                <div className="p-2.5 rounded-lg bg-[#141424] text-slate-300">
                  Replace the hero image, use my brand colors, and improve the mobile spacing.
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-[#00ff88] font-bold">K Kloner Agent</div>
                <div className="p-2.5 rounded-lg bg-[#101924] border border-[#1e2f42] text-slate-200">
                  Updated the hero image, applied your brand colors, and refined the spacing for smaller screens.
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[9px] bg-[#ffe600]/20 text-[#ffe600] px-1.5 py-0.5 rounded">Image updated</span>
                    <span className="text-[9px] bg-[#ff2e93]/20 text-[#ff2e93] px-1.5 py-0.5 rounded">Colors applied</span>
                    <span className="text-[9px] bg-[#00ff88]/20 text-[#00ff88] px-1.5 py-0.5 rounded">UI refined</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Deploy your website */}
          <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#22223a] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 p-6 rounded-2xl bg-[#06060c] border border-[#292944]">
              <div className="p-4 rounded-xl bg-[#101a24] border border-[#1e3448] mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00ff88] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
                  <span>Deploying live…</span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  Building, optimizing, shipping
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1e17] border border-[#164834] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#00ff88]" />
                    <span>Deployed</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Your project is live
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-[#00ff88]/20 text-[#00ff88] px-2 py-0.5 rounded">
                  HTTPS ACTIVE
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-[#ff2e93]/20 text-[#ff2e93] text-xs font-mono font-bold mb-4">
                STEP 04
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Deploy your website
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Publish the finished version when your editable website is ready to go live. Export production static files or ship to Cloudflare Pages and GitHub.
              </p>
              <button
                onClick={() => setActiveTab('studio')}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#ffe600] text-black font-extrabold text-xs tracking-wide shadow-lg hover:brightness-110 transition-all cursor-pointer"
              >
                Launch Live Studio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT WITH KLONER SHOWCASE */}
      <section className="py-20 px-4 bg-[#080812] border-t border-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#ffe600]/15 text-[#ffe600] text-xs font-mono font-bold mb-3">
                REAL CLONED PROJECTS
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-2">
                Built With Kloner
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Inspect real websites cloned from public URLs and ready to customize live.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('showcase')}
              className="mt-4 md:mt-0 text-xs font-mono text-[#00ff88] hover:underline flex items-center gap-1.5"
            >
              <span>View All 5 Showcase Builds</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-[#0e0e1a] border border-[#222238] hover:border-[#ff2e93] transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-[#00ff88] border border-[#00ff88]/30 font-bold">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-slate-300">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-base text-white mb-1 group-hover:text-[#ffe600] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1c1c30] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">
                      {item.subtitle}
                    </span>
                    <button
                      onClick={() => {
                        onSelectArchetype(ARCHETYPES[item.archetypeKey]);
                        setActiveTab('studio');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#1a1a2e] border border-[#2d2d48] hover:bg-[#ff2e93] hover:text-white text-xs font-bold text-slate-200 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Clone This</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-bold text-[#ff2e93] uppercase tracking-widest block mb-2">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about cloning websites without signup or credit cards.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0c0c18] border border-[#202036] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openFaqIndex === idx ? 'rotate-180 text-[#ffe600]' : ''
                  }`}
                />
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#1a1a2e]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#090914] to-[#050508] border-t border-[#1f1f33] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff2e93] via-[#ffe600] to-[#00ff88] p-[2px] mx-auto mb-6">
            <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center font-black text-xl text-[#00ff88]">
              ⚡
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Clone a website from a URL.
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 font-mono">
            Clone a public website • Preview the result • Customize and launch
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab('studio')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-black text-sm tracking-wide shadow-[0_0_30px_rgba(255,46,147,0.5)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              Open Website Cloner Studio
            </button>
            <button
              onClick={() => setActiveTab('how-it-works')}
              className="px-6 py-3.5 rounded-xl bg-[#141426] border border-[#2b2b48] text-slate-200 text-sm font-bold hover:text-white transition-colors cursor-pointer"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
