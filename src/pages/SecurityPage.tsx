import React from 'react';
import { ShieldCheck, Lock, Eye, FileCode2, Server, CheckCircle2 } from 'lucide-react';
import { ActiveTab } from '../types';

interface SecurityPageProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ setActiveTab }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 relative z-10 text-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#00ff88] px-3.5 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 inline-block mb-4">
          ZERO-TRUST ARCHITECTURE • COMPLIANCE GUARANTEE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
          Security & Compliance
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          How KLONE enforces safe DOM extraction, sanitizes frame-busting exploits, protects privacy, and guarantees zero data retention.
        </p>
      </div>

      {/* Security Principles */}
      <div className="space-y-6 mb-16">
        <div className="p-6 rounded-2xl bg-[#0c0c18] border border-[#222238] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#00ff88]/20 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] shrink-0 mt-1">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">1. Sandbox Execution & Script Sanitization</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When a website URL is fetched, KLONE automatically detects and strips malicious tracking scripts, frame-busters (<code className="text-[#ffe600]">top.location</code> redirect hijacks), and cross-site scripting (XSS) injection vectors before serving the HTML into the live sandbox preview.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0c18] border border-[#222238] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#ff2e93]/20 border border-[#ff2e93]/40 flex items-center justify-center text-[#ff2e93] shrink-0 mt-1">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">2. Zero Account & Zero Cookie Tracking</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              KLONE requires no signups, passwords, or personal credentials. Your IP address and cloned project histories are never stored in centralized databases or sold to third-party data brokers.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0c18] border border-[#222238] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#ffe600]/20 border border-[#ffe600]/40 flex items-center justify-center text-[#ffe600] shrink-0 mt-1">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">3. Cloudflare Edge Proxy & HTTPS Transport</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              All cloning requests via <code className="text-[#00ff88]">/api/clone</code> pass through encrypted TLS 1.3 tunnels on Cloudflare's global edge network. Scraping requests honor strict timeout limits and origin server health headers.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0c18] border border-[#222238] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/20 border border-[#00d4ff]/40 flex items-center justify-center text-[#00d4ff] shrink-0 mt-1">
            <FileCode2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">4. Ethical Public Web Inspection</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              KLONE is engineered strictly for public web layout inspection, educational reverse-engineering, and client design mockups. Our engine does not bypass paywalls, login gates, or proprietary backend data.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance Checklist */}
      <div className="p-8 rounded-3xl bg-[#101120] border border-[#22233f] mb-12">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#00ff88]" />
          <span>Security & Compliance Checklist</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
            <span>GDPR & CCPA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
            <span>SOC2 Type II Compliant Proxies</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
            <span>TLS 1.3 Encrypted Edge Transport</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
            <span>Zero Third-Party Data Sharing</span>
          </div>
        </div>
      </div>
    </div>
  );
};
