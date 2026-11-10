import React from 'react';
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Globe2, 
  Rocket 
} from 'lucide-react';
import { ActiveTab } from '../types';

interface HowItWorksPageProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ setActiveTab }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#ffe600] px-3.5 py-1.5 rounded-full bg-[#ffe600]/10 border border-[#ffe600]/30 inline-block mb-4">
          TECHNICAL DEEP DIVE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          How KLONE Works Under the Hood
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          From a public URL to clean, sanitized, deployment-ready HTML5, CSS3, and JavaScript in sub-second execution. Zero signups, zero credit cards, zero proprietary locks.
        </p>
      </div>

      {/* 4 Pipeline Stages */}
      <div className="space-y-12 mb-20">
        {/* Stage 1 */}
        <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#24243e] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 font-mono">
            <div className="text-xs text-[#ff2e93] font-bold mb-2">STAGE 01 // EXTRACTION</div>
            <h3 className="text-2xl font-black text-white mb-2">DOM & Asset Extraction</h3>
            <span className="text-xs bg-[#ff2e93]/15 text-[#ff2e93] px-2.5 py-1 rounded-md border border-[#ff2e93]/30">
              Distributed Proxy & Fallback Synthesis
            </span>
          </div>
          <div className="md:col-span-8 text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              When you enter a URL, KLONE invokes our proxy pipeline to retrieve the public HTML document. It recursively identifies all critical assets:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                Semantic HTML5 tree preservation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                External & inline stylesheets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                SVG vector graphics & raster images
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                Custom web typography & font links
              </li>
            </ul>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#24243e] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 font-mono">
            <div className="text-xs text-[#ffe600] font-bold mb-2">STAGE 02 // SANITIZATION</div>
            <h3 className="text-2xl font-black text-white mb-2">Security & Sandboxing</h3>
            <span className="text-xs bg-[#ffe600]/15 text-[#ffe600] px-2.5 py-1 rounded-md border border-[#ffe600]/30">
              Zero Malicious Scripts
            </span>
          </div>
          <div className="md:col-span-8 text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Public websites frequently contain tracking pixels, analytics cookies, ad-networks, and heavy obfuscated bundles. KLONE automatically strips:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe600]" />
                Third-party ad tags & telemetry
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe600]" />
                Intrusive cookie paywalls
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe600]" />
                Obfuscated external JS dependencies
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe600]" />
                Broken relative paths into absolute URLs
              </li>
            </ul>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#24243e] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 font-mono">
            <div className="text-xs text-[#00ff88] font-bold mb-2">STAGE 03 // INTELLIGENCE</div>
            <h3 className="text-2xl font-black text-white mb-2">AI Customizer & Visual Studio</h3>
            <span className="text-xs bg-[#00ff88]/15 text-[#00ff88] px-2.5 py-1 rounded-md border border-[#00ff88]/30">
              No API Keys Required
            </span>
          </div>
          <div className="md:col-span-8 text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Once loaded in Live Studio, you can adjust elements via 3 complementary interfaces:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#141426] border border-[#23233c]">
                <h5 className="font-bold text-white text-xs mb-1">Visual Click-to-Edit</h5>
                <p className="text-[11px] text-slate-400">Click any headline or button to modify text in real time.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#141426] border border-[#23233c]">
                <h5 className="font-bold text-white text-xs mb-1">Live Code Editor</h5>
                <p className="text-[11px] text-slate-400">Inspect and write pure HTML5, CSS3, and JavaScript directly.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#141426] border border-[#23233c]">
                <h5 className="font-bold text-white text-xs mb-1">Offline AI Agent</h5>
                <p className="text-[11px] text-slate-400">Prompt in natural language without providing API tokens.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stage 4 */}
        <div className="p-8 rounded-3xl bg-[#0c0c18] border border-[#24243e] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 font-mono">
            <div className="text-xs text-[#ff2e93] font-bold mb-2">STAGE 04 // DEPLOYMENT</div>
            <h3 className="text-2xl font-black text-white mb-2">One-Click Static Production</h3>
            <span className="text-xs bg-[#ff2e93]/15 text-[#ff2e93] px-2.5 py-1 rounded-md border border-[#ff2e93]/30">
              Cloudflare, GitHub & Vercel
            </span>
          </div>
          <div className="md:col-span-8 text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              Download a zip archive containing pure, standards-compliant static files with ready-to-use configuration:
            </p>
            <div className="font-mono text-xs p-3 rounded-xl bg-[#07070d] border border-[#202036] text-[#00ff88]">
              📦 project.zip <br />
              ├── index.html &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Complete semantic markup + SEO meta tags) <br />
              ├── style.css &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Responsive grid, typography & resets) <br />
              ├── script.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Client interactions & smooth scroll) <br />
              ├── vercel.json &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Vercel routing & headers) <br />
              ├── _headers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Cloudflare security headers) <br />
              └── README.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Deploy instructions for GitHub Pages)
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => setActiveTab('studio')}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-sm shadow-[0_0_30px_rgba(255,46,147,0.4)] hover:brightness-110 transition-all cursor-pointer"
        >
          Try the Cloner Engine in Studio Now
        </button>
      </div>
    </div>
  );
};
