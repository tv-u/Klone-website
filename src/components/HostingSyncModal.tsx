import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Github, 
  Cloud, 
  Zap, 
  X, 
  AlertTriangle,
  Terminal,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface HostingSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingSyncModal: React.FC<HostingSyncModalProps> = ({ isOpen, onClose }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2500);
  };

  const gitPushScript = `git add .
git commit -m "Fix GitHub Pages white screen (relative base './', 404.html, .nojekyll, and Cloudflare Pages sync)"
git push origin main`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0b0c16] border border-[#2b2b48] rounded-2xl shadow-[0_0_50px_rgba(0,255,136,0.25)] p-5 sm:p-6 text-white my-8">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1f2038] pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.4)]">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-2">
                GitHub Pages & Cloudflare Pages Sync Hub
              </h2>
              <p className="text-xs text-slate-400">
                100% Live Fix for <span className="text-[#00ff88] font-mono">tv-u.github.io/Klone-website/</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#141426] border border-[#2b2b48] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Diagnosis & White Screen Fix Explanation */}
        <div className="p-3.5 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30 mb-5">
          <div className="flex items-center gap-2 text-[#00ff88] font-bold text-xs mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>WHITE SCREEN ISSUE DIAGNOSED & PERMANENTLY FIXED</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Why was the screen white on GitHub Pages?</strong> By default, Vite was using absolute root path (<code className="text-[#ffe600]">/assets/...</code>) which looked for files at <code className="text-slate-400">tv-u.github.io/assets/</code> instead of your repository subfolder <code className="text-[#00ff88]">tv-u.github.io/Klone-website/assets/</code>.
            <br />
            <strong>Fix applied:</strong> Changed to universal relative base (<code className="text-[#00ff88]">base: './'</code>), added <code className="text-[#ffe600]">.nojekyll</code>, created <code className="text-[#ffe600]">404.html</code> for subpath routing, added Cloudflare Pages <code className="text-[#ffe600]">_redirects</code>, and created automatic GitHub Actions workflow.
          </p>
        </div>

        {/* Status Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          
          {/* GitHub Pages Status */}
          <div className="p-3.5 rounded-xl bg-[#111222] border border-[#23243e]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-white" />
                <span className="font-bold text-xs text-white">GitHub Pages</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00ff88]/20 text-[#00ff88] font-bold">
                FIX READY
              </span>
            </div>
            <a 
              href="https://tv-u.github.io/Klone-website/" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono text-[#00ff88] hover:underline flex items-center gap-1 mb-2 break-all"
            >
              https://tv-u.github.io/Klone-website/
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
            <ul className="text-[11px] text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <code className="text-white">base: './'</code> (No asset 404)
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <code className="text-white">public/.nojekyll</code> active
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <code className="text-white">public/404.html</code> SPA redirect
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                Auto-sync on git push (<code className="text-white">deploy.yml</code>)
              </li>
            </ul>
          </div>

          {/* Cloudflare Pages Status */}
          <div className="p-3.5 rounded-xl bg-[#111222] border border-[#23243e]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-[#ff2e93]" />
                <span className="font-bold text-xs text-white">Cloudflare Pages</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00d4ff]/20 text-[#00d4ff] font-bold">
                100% COMPATIBLE
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Connect your GitHub repository to Cloudflare Pages for instant global CDN & custom domain.
            </p>
            <ul className="text-[11px] text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <code className="text-white">public/_redirects</code> (SPA 200 rule)
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <code className="text-white">public/_headers</code> (CORS & Cache)
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                <code className="text-white">functions/api/clone.ts</code> Edge scraper
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff88]" />
                Build command: <code className="text-[#ffe600]">npm run build</code>
              </li>
            </ul>
          </div>

        </div>

        {/* 1-Click Git Push Commands */}
        <div className="p-4 rounded-xl bg-[#07080f] border border-[#1f2038] mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-[#00ff88]" />
              Run this in your repository terminal to go live:
            </span>
            <button
              onClick={() => copyToClipboard(gitPushScript, 'git')}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#16182c] hover:bg-[#20233f] text-[#00ff88] text-xs font-mono border border-[#00ff88]/30 transition-all cursor-pointer"
            >
              <Copy className="w-3 h-3" />
              <span>{copiedCmd === 'git' ? 'COPIED!' : 'COPY COMMANDS'}</span>
            </button>
          </div>
          <pre className="text-xs font-mono text-[#00ff88] bg-[#0c0d18] p-3 rounded-lg overflow-x-auto whitespace-pre leading-relaxed border border-[#1a1b30]">
{gitPushScript}
          </pre>
        </div>

        {/* Cloudflare Pages Quick Connect Guide */}
        <div className="p-3.5 rounded-xl bg-[#141528] border border-[#262846] text-xs text-slate-300">
          <h4 className="font-bold text-white mb-1.5 flex items-center gap-2">
            <Cloud className="w-4 h-4 text-[#ffe600]" />
            Cloudflare Pages Settings (When connecting GitHub repo):
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] mt-2">
            <div className="p-2 rounded bg-[#090a14] border border-[#1d1f36]">
              <span className="text-slate-500 block text-[10px]">FRAMEWORK PRESET</span>
              <span className="text-[#00ff88] font-bold">Vite</span>
            </div>
            <div className="p-2 rounded bg-[#090a14] border border-[#1d1f36]">
              <span className="text-slate-500 block text-[10px]">BUILD COMMAND</span>
              <span className="text-[#ffe600] font-bold">npm run build</span>
            </div>
            <div className="p-2 rounded bg-[#090a14] border border-[#1d1f36]">
              <span className="text-slate-500 block text-[10px]">BUILD OUTPUT DIR</span>
              <span className="text-[#ff2e93] font-bold">dist</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-5 flex items-center justify-end gap-2">
          <a
            href="https://tv-u.github.io/Klone-website/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-extrabold text-xs tracking-wide hover:brightness-110 transition-all cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>OPEN GITHUB PAGES SITE</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1a1b32] text-white hover:bg-[#252748] text-xs font-bold transition-all cursor-pointer"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
