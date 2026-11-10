import React from 'react';
import { ShieldCheck, FileText, Lock, Scale, AlertCircle } from 'lucide-react';
import { ActiveTab } from '../types';

interface LegalPagesProps {
  type: 'terms' | 'privacy' | 'eula' | 'cookies' | 'disclaimer';
  setActiveTab: (tab: ActiveTab) => void;
  onOpenCookieSettings: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({
  type,
  setActiveTab,
  onOpenCookieSettings,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
      {/* Sub-nav switcher between legal docs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveTab('terms')}
          className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
            type === 'terms'
              ? 'bg-[#ff2e93] text-white shadow-md'
              : 'bg-[#141426] text-slate-400 hover:text-white'
          }`}
        >
          Terms of Service
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
            type === 'privacy'
              ? 'bg-[#00ff88] text-black shadow-md'
              : 'bg-[#141426] text-slate-400 hover:text-white'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab('eula')}
          className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
            type === 'eula'
              ? 'bg-[#ffe600] text-black shadow-md'
              : 'bg-[#141426] text-slate-400 hover:text-white'
          }`}
        >
          EULA Agreement
        </button>
        <button
          onClick={() => setActiveTab('disclaimer')}
          className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
            type === 'disclaimer'
              ? 'bg-[#00d4ff] text-black shadow-md'
              : 'bg-[#141426] text-slate-400 hover:text-white'
          }`}
        >
          Legal Disclaimer
        </button>
        <button
          onClick={onOpenCookieSettings}
          className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[#141426] text-slate-400 hover:text-[#ffe600] border border-[#2b2b48]"
        >
          Manage Cookie Preferences
        </button>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0c18] border border-[#222238] shadow-2xl">
        {/* TERMS OF SERVICE */}
        {type === 'terms' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3 pb-6 border-b border-[#1c1c30]">
              <div className="p-3 rounded-xl bg-[#ff2e93]/15 text-[#ff2e93]">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Terms of Service
                </h1>
                <p className="text-xs font-mono text-slate-500">
                  Last Updated: November 2026 • Worldwide Application
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white pt-2">1. Acceptance of Terms</h3>
            <p>
              By accessing or using the KLONE Website Cloner platform (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must discontinue use of the service.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">2. Permitted Use & Ethical Web Cloning</h3>
            <p>
              KLONE is engineered for web designers, developers, and educators to inspect public layout structures, prototype mockups, and convert design ideas into responsive code. You agree NOT to use the service to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Replicate copyrighted trademarks or proprietary logos with fraudulent intent or phishing.</li>
              <li>Scrape websites that explicitly prohibit client-side inspection via law.</li>
              <li>Bypass authentication mechanisms, paywalls, or protected user accounts.</li>
            </ul>

            <h3 className="text-lg font-bold text-white pt-2">3. Zero Cost & Unlimited Access</h3>
            <p>
              KLONE is provided free of charge with zero credit card requirements and zero mandatory accounts. We reserve the right to apply rate limiting against automated denial-of-service bot networks to protect service availability for human creators.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">4. Disclaimer of Warranties</h3>
            <p>
              The service and exported files are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. KLONE disclaims all liability for any damages arising out of your deployment of cloned websites.
            </p>
          </div>
        )}

        {/* PRIVACY POLICY */}
        {type === 'privacy' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3 pb-6 border-b border-[#1c1c30]">
              <div className="p-3 rounded-xl bg-[#00ff88]/15 text-[#00ff88]">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Privacy Policy
                </h1>
                <p className="text-xs font-mono text-slate-500">
                  GDPR, CCPA & Worldwide Privacy Compliance
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white pt-2">1. Zero-Knowledge Architecture</h3>
            <p>
              KLONE does not require account creation, passwords, credit card numbers, or personal identifying information. The websites you clone are processed ephemerally in browser memory and are not stored in central databases.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">2. Data We Do NOT Collect</h3>
            <p>
              We do NOT collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Names, phone numbers, or residential addresses.</li>
              <li>Financial payment data or billing profiles.</li>
              <li>The proprietary content of private networks or intranet portals.</li>
            </ul>

            <h3 className="text-lg font-bold text-white pt-2">3. Browser Local Storage</h3>
            <p>
              Your current live project edits, language preference (from our Top 50 supported languages), and cookie consent settings are stored locally on your device via HTML5 LocalStorage. You can clear this data at any time through your browser settings.
            </p>
          </div>
        )}

        {/* EULA (End User License Agreement) */}
        {type === 'eula' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3 pb-6 border-b border-[#1c1c30]">
              <div className="p-3 rounded-xl bg-[#ffe600]/15 text-[#ffe600]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  End User License Agreement (EULA)
                </h1>
                <p className="text-xs font-mono text-slate-500">
                  Software License for Exported Code & Studio Engine
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white pt-2">1. Grant of License</h3>
            <p>
              KLONE grants you a worldwide, royalty-free, perpetual license to run, modify, redistribute, and deploy code packages exported through the platform. You maintain 100% full ownership over any modifications, custom styling, copy changes, and assets you introduce.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">3. Third-Party Brand Compliance</h3>
            <p>
              When cloning public websites for inspiration or reference, you are responsible for substituting all third-party registered trademarks, proprietary logos, and copyrighted visual assets with your own authorized brand assets prior to public commercial deployment.
            </p>
          </div>
        )}

        {/* Legal Disclaimer */}
        {type === 'disclaimer' && (
          <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3 pb-6 border-b border-[#1c1c30]">
              <div className="p-3 rounded-xl bg-[#00d4ff]/15 text-[#00d4ff]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  Legal & Intellectual Property Disclaimer
                </h1>
                <p className="text-xs font-mono text-slate-500">
                  Fair Use, Copyright, and Public Web Research Notice
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white pt-2">1. Educational & Prototyping Purpose</h3>
            <p>
              KLONE is provided strictly as a technical tool for public frontend DOM inspection, educational layout analysis, design prototyping, and client mockup generation. KLONE does not encourage or condone copyright infringement or trademark dilution.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">2. Non-Affiliation Statement</h3>
            <p>
              All product names, brand logos, trademarks, and registered trademarks featured or referenced within cloned previews belong to their respective trademark holders. Reference to or display of third-party websites does not imply endorsement, sponsorship, or affiliation with KLONE.
            </p>

            <h3 className="text-lg font-bold text-white pt-2">3. User Responsibility</h3>
            <p>
              Users downloading exported HTML, CSS, or JavaScript bundles are solely responsible for replacing all third-party registered trademarks, proprietary media, and brand copy with authorized assets before publishing to public domain names or commercial hosting platforms.
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[#1c1c30] flex justify-between items-center">
          <button
            onClick={() => setActiveTab('home')}
            className="text-xs text-slate-400 hover:text-white"
          >
            ← Return to Home
          </button>
          <button
            onClick={() => setActiveTab('studio')}
            className="px-5 py-2 rounded-xl bg-[#ff2e93] text-white font-bold text-xs hover:brightness-110"
          >
            Start Cloning
          </button>
        </div>
      </div>
    </div>
  );
};
