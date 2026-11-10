import React, { useState } from 'react';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Layers, 
  FileCode, 
  ShieldCheck, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { ActiveTab } from '../types';

interface DocsPageProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const DocsPage: React.FC<DocsPageProps> = ({ setActiveTab }) => {
  const [activeSection, setActiveSection] = useState<'architecture' | 'cli' | 'github' | 'cloudflare'>('architecture');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#00ff88] px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 inline-block mb-4">
          DEVELOPER SPECIFICATION
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          KLONE Technical Documentation
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Deep architectural reference for DOM parsing, heuristic asset normalization, client sandbox isolation, and worldwide edge deployment targets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <div className="p-4 rounded-2xl bg-[#0c0c18] border border-[#202036] space-y-1">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider px-3 py-1">
              Architecture & API
            </div>
            <button
              onClick={() => setActiveSection('architecture')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'architecture'
                  ? 'bg-[#ff2e93] text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              1. DOM Parsing & Sanitization
            </button>
            <button
              onClick={() => setActiveSection('cli')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'cli'
                  ? 'bg-[#ffe600] text-black'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              2. Offline AI Heuristics Engine
            </button>
            <button
              onClick={() => setActiveSection('github')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'github'
                  ? 'bg-[#00ff88] text-black'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              3. GitHub Pages Deployment
            </button>
            <button
              onClick={() => setActiveSection('cloudflare')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSection === 'cloudflare'
                  ? 'bg-[#00f0ff] text-black'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              4. Cloudflare Pages & Headers
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0c18] border border-[#202036] text-xs">
            <span className="text-[#ffe600] font-bold block mb-1">Open Source Community</span>
            <p className="text-slate-400 leading-relaxed">
              Exported bundles contain zero proprietary vendor runtimes. Everything is standard W3C HTML5/CSS3.
            </p>
          </div>
        </div>

        {/* Content Pane */}
        <div className="lg:col-span-8 p-8 rounded-3xl bg-[#0c0c18] border border-[#202036]">
          {activeSection === 'architecture' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white">
                1. DOM Parsing & Sanitization
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When KLONE processes a target website, the raw HTML is parsed inside a sandboxed DOMParser instance. The parser executes a 4-tier hygiene filter:
              </p>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#121222] border border-[#23233c] text-slate-300">
                  <span className="text-[#ff2e93] font-bold">A. URL Inlining:</span> Converts all relative <code className="text-[#ffe600]">href</code> and <code className="text-[#ffe600]">src</code> attributes into absolute URLs anchored to the origin domain.
                </div>
                <div className="p-3 rounded-xl bg-[#121222] border border-[#23233c] text-slate-300">
                  <span className="text-[#00ff88] font-bold">B. Script Stripping:</span> Removes malicious tracking telemetry, paywalls, and cross-site analytics scripts that would otherwise trigger iframe security violations.
                </div>
                <div className="p-3 rounded-xl bg-[#121222] border border-[#23233c] text-slate-300">
                  <span className="text-[#ffe600] font-bold">C. CSS Normalization:</span> Merges external CSS link references and inline styles while preserving media queries and viewport scaling.
                </div>
              </div>
            </div>
          )}

          {activeSection === 'cli' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white">
                2. Offline AI Heuristics Engine
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Unlike services requiring expensive OpenAI or Claude API keys, KLONE utilizes a client-side NLP intent classifier. It executes real structural transformations directly on the DOM tree:
              </p>
              <div className="p-4 rounded-xl bg-[#080810] border border-[#1f1f33] text-xs font-mono">
                <div className="flex justify-between items-center text-slate-500 mb-2">
                  <span>SAMPLE TRANSFORMATION RULE</span>
                  <button
                    onClick={() => handleCopy(`// Intent: Shorten headline & inject pricing
processAIInstruction('Make headline shorter, add pricing section', currentProject);`, 'code-1')}
                    className="hover:text-white"
                  >
                    {copiedCode === 'code-1' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="text-[#00ff88] overflow-x-auto">
{`// Intent: Shorten headline & inject pricing
const result = processAIInstruction(
  'Make headline shorter, add pricing section',
  currentProject
);
console.log(result.tags); // ['Updated copy', 'Added section']`}
                </pre>
              </div>
            </div>
          )}

          {activeSection === 'github' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white">
                3. GitHub Pages Deployment
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To host your downloaded website bundle on GitHub Pages completely free:
              </p>
              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#080810] border border-[#202036] text-slate-300">
                  1. Unzip the downloaded <code className="text-[#ffe600]">klone-project.zip</code> archive.
                </div>
                <div className="p-3 rounded-xl bg-[#080810] border border-[#202036] text-slate-300">
                  2. Run: <code className="text-[#00ff88]">git init && git add . && git commit -m "Initial clone"</code>
                </div>
                <div className="p-3 rounded-xl bg-[#080810] border border-[#202036] text-slate-300">
                  3. Push to your GitHub repo and enable Pages in Settings → Pages → Deploy from branch (main).
                </div>
              </div>
            </div>
          )}

          {activeSection === 'cloudflare' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white">
                4. Cloudflare Pages & Edge Headers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The downloaded ZIP bundle includes pre-generated security headers in <code className="text-[#00ff88]">_headers</code>:
              </p>
              <div className="p-4 rounded-xl bg-[#080810] border border-[#1f1f33] text-xs font-mono">
                <pre className="text-[#ffe600] overflow-x-auto">
{`/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=31536000, immutable`}
                </pre>
              </div>
              <p className="text-xs text-slate-400">
                Drag-and-drop the unzipped folder into the Cloudflare Pages dashboard for instantaneous worldwide deployment.
              </p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-[#1c1c30]">
            <button
              onClick={() => setActiveTab('studio')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-extrabold text-xs shadow-md hover:brightness-110"
            >
              Open Live Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
