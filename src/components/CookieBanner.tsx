import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Settings2 } from 'lucide-react';

interface CookieBannerProps {
  forceOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  forceOpenModal = false,
  onCloseModal,
}) => {
  const [hasConsented, setHasConsented] = useState<boolean>(true);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);

  // Preference switches
  const [essential] = useState<boolean>(true);
  const [analytics, setAnalytics] = useState<boolean>(true);
  const [performance, setPerformance] = useState<boolean>(true);
  const [marketing, setMarketing] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('klone_cookie_consent');
    if (!saved) {
      setHasConsented(false);
    }
  }, []);

  useEffect(() => {
    if (forceOpenModal) {
      setShowSettingsModal(true);
    }
  }, [forceOpenModal]);

  const handleAcceptAll = () => {
    localStorage.setItem('klone_cookie_consent', 'accepted_all');
    setHasConsented(true);
    setShowSettingsModal(false);
    onCloseModal?.();
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('klone_cookie_consent', 'essential_only');
    setHasConsented(true);
    setShowSettingsModal(false);
    onCloseModal?.();
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'klone_cookie_consent',
      JSON.stringify({ essential: true, analytics, performance, marketing })
    );
    setHasConsented(true);
    setShowSettingsModal(false);
    onCloseModal?.();
  };

  return (
    <>
      {/* Floating Bottom Consent Banner */}
      {!hasConsented && !showSettingsModal && (
        <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-8 md:max-w-lg z-50 bg-[#0e0e1a]/95 border border-[#ff2e93]/30 backdrop-blur-xl p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-fade-in">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#ff2e93]/15 text-[#ff2e93] border border-[#ff2e93]/30">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                Cookie & Privacy Choices
                <span className="text-[10px] font-mono bg-[#00ff88]/20 text-[#00ff88] px-2 py-0.5 rounded-full">
                  GDPR & CCPA
                </span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                KLONE uses strictly necessary cookies to ensure the website cloner works flawlessly in your browser, plus optional telemetry to refine cloner performance.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#ffe600] text-black font-extrabold text-xs shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="px-3.5 py-1.5 rounded-lg bg-[#18182b] border border-[#2c2c48] text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => setShowSettingsModal(true)}
                  className="px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-[#ffe600] text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Granular Cookie Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0b0b14] border border-[#282844] rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#1d1d33] mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#ffe600]/10 text-[#ffe600] border border-[#ffe600]/30">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">
                    Cookie Preferences
                  </h3>
                  <p className="text-xs text-slate-400">
                    Manage how cookies and local storage are utilized
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowSettingsModal(false);
                  onCloseModal?.();
                }}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Essential */}
              <div className="flex items-start justify-between p-3.5 rounded-xl bg-[#121224] border border-[#20203a]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-white">Strictly Necessary</span>
                    <span className="text-[10px] bg-[#00ff88]/20 text-[#00ff88] px-2 py-0.5 rounded font-mono font-bold">
                      REQUIRED
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Essential for the cloner engine, DOM parsing, live editor state, and language preferences. Cannot be disabled.
                  </p>
                </div>
                <div className="pt-1">
                  <input type="checkbox" checked={essential} disabled className="accent-[#00ff88] w-4 h-4 cursor-not-allowed" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between p-3.5 rounded-xl bg-[#121224] border border-[#20203a]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-white">Performance & Analytics</span>
                    <span className="text-[10px] bg-[#ffe600]/20 text-[#ffe600] px-2 py-0.5 rounded font-mono font-bold">
                      RECOMMENDED
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Helps us measure cloner extraction speeds and optimize parser compatibility across public domains.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="accent-[#00ff88] w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between p-3.5 rounded-xl bg-[#121224] border border-[#20203a]">
                <div>
                  <span className="text-sm font-bold text-white block mb-1">Marketing & Attribution</span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Used to gauge referral sources from community sharing and GitHub mentions. Zero personal data stored.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="accent-[#ff2e93] w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#1d1d33]">
              <button
                onClick={handleRejectNonEssential}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Reject All Non-Essential
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveCustom}
                  className="px-4 py-2 rounded-xl bg-[#1c1c30] border border-[#303050] text-xs font-semibold text-white hover:bg-[#252540] transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
