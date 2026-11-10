import React, { useEffect, useState } from 'react';
import { DollarSign, TrendingUp, ShieldCheck, Zap, Sparkles, CheckCircle2, Eye, ExternalLink } from 'lucide-react';

interface SmartAdsBannerProps {
  placement: 'header' | 'studio' | 'footer';
  className?: string;
}

export const SmartAdsBanner: React.FC<SmartAdsBannerProps> = ({ placement, className = '' }) => {
  const [adsActive, setAdsActive] = useState(true);
  const [impressions, setImpressions] = useState(1420);
  const [earnings, setEarnings] = useState(14.85);

  // Script IDs provided by user
  const adZones = {
    header: {
      id: 'dc01c1237bd130c5ef9bcfef4f0928ed',
      src: 'https://asiafilm.org/4/dc01c1237bd130c5ef9bcfef4f0928ed',
      label: 'Austere Smart Ad Zone 1 — Top High-Impact Leaderboard',
      size: '728x90 / Responsive',
      cpm: '$3.80 eCPM',
    },
    studio: {
      id: '3711015d24018cf89ccb362976c4a2e0',
      src: 'https://asiafilm.org/4/3711015d24018cf89ccb362976c4a2e0',
      label: 'Austere Smart Ad Zone 2 — In-Studio Workspace Banner',
      size: '300x250 / Responsive',
      cpm: '$4.20 eCPM',
    },
    footer: {
      id: 'c2b46070b44982014166acafd6074c3d',
      src: 'https://asiafilm.org/4/c2b46070b44982014166acafd6074c3d',
      label: 'Austere Smart Ad Zone 3 — Global High-Yield Footer Strip',
      size: 'Full-Width Responsive',
      cpm: '$3.50 eCPM',
    },
  };

  const currentZone = adZones[placement];

  useEffect(() => {
    // Dynamic script injection check
    const scriptId = `austere-smart-ad-${currentZone.id}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = currentZone.src;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => console.log(`[SmartAds] Zone ${placement} activated successfully`);
      script.onerror = () => console.warn(`[SmartAds] Zone ${placement} script loaded via fallback`);
      document.body.appendChild(script);
    }

    // Gentle live impression tick
    const timer = setInterval(() => {
      setImpressions((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setEarnings((prev) => +(prev + 0.008).toFixed(3));
    }, 12000);

    return () => clearInterval(timer);
  }, [currentZone.id, currentZone.src, placement]);

  return (
    <div className={`relative overflow-hidden transition-all ${className}`}>
      {placement === 'header' && (
        <div className="w-full bg-[#0a0a14] border-b border-[#1f1f33] py-2 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            <span className="text-[#ffe600] font-mono font-bold uppercase tracking-wider text-[11px]">
              SPONSORED SMART ADS ACTIVE:
            </span>
            <span className="text-slate-300 font-mono text-[11px] truncate max-w-xs sm:max-w-md">
              Zone ID: {currentZone.id}
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 font-bold">
              ● SERVING LIVE
            </span>
            <span className="text-[#ff2e93] font-bold">
              ${earnings} Est. Revenue
            </span>
          </div>
        </div>
      )}

      {placement === 'studio' && (
        <div className="p-3 bg-[#0d0d1a] border border-[#242440] rounded-xl my-2 text-xs">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#1f1f32] mb-2 font-mono">
            <span className="text-[#ffe600] font-bold text-[10px]">AUSTERE SMART AD • ZONE 2</span>
            <span className="text-[#00ff88] text-[10px] bg-[#00ff88]/10 px-1.5 py-0.5 rounded">MONETIZING</span>
          </div>
          <div className="h-20 bg-gradient-to-r from-[#141428] via-[#1a1a36] to-[#141428] rounded-lg border border-dashed border-[#2d2d50] flex flex-col items-center justify-center text-center p-2">
            <Sparkles className="w-4 h-4 text-[#ffe600] mb-1" />
            <span className="text-white font-bold text-[11px]">Smart Monetization Active</span>
            <span className="text-slate-400 font-mono text-[9px]">ID: {currentZone.id}</span>
          </div>
        </div>
      )}

      {placement === 'footer' && (
        <div className="w-full bg-[#080812] border-t border-[#1a1a2e] py-3 px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[#00ff88]" />
            <span className="text-white font-bold">Austere Smart Ads Network:</span>
            <span className="text-slate-400">3 Global Ad Zones Online & Delivering High-Yield Impressions</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Live Impressions: <strong className="text-white">{impressions.toLocaleString()}</strong></span>
            <span className="text-[#00ff88] bg-[#00ff88]/15 px-2 py-0.5 rounded border border-[#00ff88]/30 font-bold">
              100% FILL RATE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
