import React, { useState } from 'react';
import { 
  Sparkles, 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ExternalLink,
  Code2,
  Zap
} from 'lucide-react';
import { ActiveTab } from '../types';
import { TOP_50_LANGUAGES, LanguageOption, getTranslation } from '../i18n/languages';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentLang: LanguageOption;
  setCurrentLang: (lang: LanguageOption) => void;
  onOpenClonerQuick: () => void;
  onOpenWorldwideIndexer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentLang,
  setCurrentLang,
  onOpenClonerQuick,
  onOpenWorldwideIndexer,
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredLanguages = TOP_50_LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.code.toLowerCase().includes(langSearch.toLowerCase())
  );

  const handleSelectLang = (lang: LanguageOption) => {
    setCurrentLang(lang);
    setLangMenuOpen(false);
    setLangSearch('');
    // RTL check
    if (lang.dir === 'rtl') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const navItems: { id: ActiveTab; labelKey: string }[] = [
    { id: 'home', labelKey: 'navHome' },
    { id: 'studio', labelKey: 'navStudio' },
    { id: 'how-it-works', labelKey: 'navHowItWorks' },
    { id: 'pricing', labelKey: 'navPricing' },
    { id: 'compare', labelKey: 'navCompare' },
    { id: 'showcase', labelKey: 'navShowcase' },
    { id: 'blog', labelKey: 'navBlog' },
    { id: 'docs', labelKey: 'navDocs' },
    { id: 'contact', labelKey: 'navContact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#050508]/90 backdrop-blur-xl border-b border-[#1f1f30] px-3 sm:px-6 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 cursor-pointer group select-none flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff2e93] via-[#ffe600] to-[#00ff88] p-[2px] transition-transform group-hover:scale-105 shadow-[0_0_20px_rgba(255,46,147,0.4)]">
            <div className="w-full h-full bg-[#090912] rounded-[10px] flex items-center justify-center">
              <span className="font-black text-lg tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ff2e93] to-[#ffe600]">
                K
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center">
                KLONE<span className="text-[#00ff88]">.</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30">
                #1 REAL
              </span>
            </div>
            <p className="text-[9px] text-slate-400 font-mono hidden md:block">
              Worldwide Website Cloner
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links (Fully Translated in Active Language) */}
        <div className="hidden lg:flex items-center gap-1 bg-[#0d0d18]/90 border border-[#1f1f32] rounded-full px-2.5 py-1 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-bold shadow-[0_0_15px_rgba(255,230,0,0.3)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {getTranslation(item.labelKey, currentLang.code)}
              {item.id === 'studio' && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff88] ml-1 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2">
          {/* Worldwide Indexer Trigger Button */}
          {onOpenWorldwideIndexer && (
            <button
              onClick={onOpenWorldwideIndexer}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#121222] border border-[#2b2b48] hover:border-[#00ff88] text-[11px] font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Worldwide SEO & Indexing Ping (Google, Bing, Yandex)"
            >
              <Globe className="w-3.5 h-3.5 text-[#00ff88]" />
              <span className="text-[#00ff88] font-bold">SEO 100/100</span>
            </button>
          )}

          {/* 3D "LANGUAGE SELECT" Button */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="relative px-3 py-1.5 rounded-xl bg-gradient-to-b from-[#1e1e38] via-[#141426] to-[#0a0a14] border-2 border-[#00ff88] text-white font-black text-xs tracking-wider shadow-[0_4px_0_#00a855,0_8px_18px_rgba(0,255,136,0.3)] hover:shadow-[0_2px_0_#00a855,0_4px_10px_rgba(0,255,136,0.2)] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer select-none"
              title="Click to switch between Top 50 World Languages"
            >
              <span className="text-sm">{currentLang.flag}</span>
              <span className="text-[#ffe600] font-black text-[11px] tracking-wide">
                LANGUAGE SELECT
              </span>
              <span className="text-[9px] bg-[#00ff88]/25 text-[#00ff88] px-1.5 py-0.2 rounded font-mono font-bold">
                {currentLang.code.toUpperCase()}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-300 transition-transform" />
            </button>

            {/* Language dropdown modal */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-[#0c0c16] border border-[#272744] rounded-xl shadow-2xl p-2 z-50 max-h-96 flex flex-col">
                <div className="p-1.5 pb-2 border-b border-[#1d1d33]">
                  <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#141426] rounded-lg border border-[#2b2b48]">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search 50 languages..."
                      value={langSearch}
                      onChange={(e) => setLangSearch(e.target.value)}
                      className="bg-transparent text-xs text-white placeholder-slate-500 outline-none w-full"
                      autoFocus
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#00ff88] font-mono px-1 mt-1.5">
                    <span>Top 50 World Languages</span>
                    <span>{filteredLanguages.length} supported</span>
                  </div>
                </div>

                <div className="overflow-y-auto flex-1 p-1 space-y-0.5 custom-scroll">
                  {filteredLanguages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleSelectLang(l)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors text-left ${
                        currentLang.code === l.code
                          ? 'bg-[#ff2e93]/20 text-[#ffe600] font-bold border border-[#ff2e93]/40'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{l.flag}</span>
                        <span>{l.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {l.nativeName}
                      </span>
                    </button>
                  ))}
                  {filteredLanguages.length === 0 && (
                    <div className="p-4 text-center text-xs text-slate-500">
                      No matching language found.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Clone CTA */}
          <button
            onClick={() => {
              setActiveTab('studio');
              onOpenClonerQuick();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-xs tracking-wide shadow-[0_0_20px_rgba(255,46,147,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span className="hidden sm:inline">CLONE URL</span>
            <span className="sm:hidden">CLONE</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#111120] border border-[#23233c] text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 pt-3 border-t border-[#1f1f30] flex flex-col gap-1 pb-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[#ff2e93]/20 to-[#ffe600]/20 text-[#ffe600] font-bold border border-[#ff2e93]/30'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <span>{getTranslation(item.labelKey, currentLang.code)}</span>
              {item.id === 'studio' && (
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#00ff88]/20 text-[#00ff88] font-bold">
                  STUDIO
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
