/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab, ClonedProject } from './types';
import { TOP_50_LANGUAGES, LanguageOption } from './i18n/languages';
import { ARCHETYPES } from './utils/clonerEngine';
import { ColorfulStarfield } from './components/ColorfulStarfield';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { StudioEditor } from './components/StudioEditor';
import { SmartAdsBanner } from './components/SmartAdsBanner';
import { WorldwideIndexerModal } from './components/WorldwideIndexerModal';
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { ComparePage } from './pages/ComparePage';
import { ShowcasePage } from './pages/ShowcasePage';
import { BlogPage } from './pages/BlogPage';
import { DocsPage } from './pages/DocsPage';
import { ContactPage } from './pages/ContactPage';
import { PartnersPage } from './pages/PartnersPage';
import { LegalPages } from './pages/LegalPages';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [currentLang, setCurrentLang] = useState<LanguageOption>(TOP_50_LANGUAGES[0]); // English default
  const [clonedUrl, setClonedUrl] = useState<string>('https://wolfer.io');
  const [selectedProject, setSelectedProject] = useState<ClonedProject>(ARCHETYPES.wolfer);
  const [cookieModalOpen, setCookieModalOpen] = useState<boolean>(false);
  const [indexerOpen, setIndexerOpen] = useState<boolean>(false);

  // Sync html lang and dir attribute for top 50 languages worldwide SEO & typography
  useEffect(() => {
    document.documentElement.lang = currentLang.code;
    document.documentElement.dir = currentLang.dir;
  }, [currentLang]);

  // Triggered when user enters URL in home hero or navbar
  const handleTriggerClone = (url: string) => {
    setClonedUrl(url);
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Triggered when user selects a preset showcase build
  const handleSelectArchetype = (project: ClonedProject) => {
    setSelectedProject(project);
    setClonedUrl(project.url);
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-slate-100 flex flex-col font-sans selection:bg-[#ff2e93] selection:text-white">
      {/* Running and Twinkling Colorful Stars Background */}
      <ColorfulStarfield />

      {/* Navigation Bar with 3D "LANGUAGE SELECT" and SEO Indexer */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        onOpenClonerQuick={() => setActiveTab('studio')}
        onOpenWorldwideIndexer={() => setIndexerOpen(true)}
      />

      {/* Austere Smart Ad Banner (Header Placement - Zone 1) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 pt-2">
        <SmartAdsBanner placement="header" />
      </div>

      {/* Main Routed Page Content */}
      <main className="flex-1 relative z-10">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onCloneUrl={handleTriggerClone}
            onSelectArchetype={handleSelectArchetype}
            currentLang={currentLang}
          />
        )}

        {activeTab === 'studio' && (
          <StudioEditor
            key={`${clonedUrl}-${selectedProject.id}`}
            initialUrl={clonedUrl}
            initialProject={selectedProject}
          />
        )}

        {activeTab === 'how-it-works' && (
          <HowItWorksPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'pricing' && (
          <PricingPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'compare' && (
          <ComparePage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'showcase' && (
          <ShowcasePage
            setActiveTab={setActiveTab}
            onSelectArchetype={handleSelectArchetype}
          />
        )}

        {activeTab === 'blog' && (
          <BlogPage
            setActiveTab={setActiveTab}
            onCloneUrl={handleTriggerClone}
          />
        )}

        {activeTab === 'docs' && (
          <DocsPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}

        {activeTab === 'partners' && (
          <PartnersPage setActiveTab={setActiveTab} />
        )}

        {(activeTab === 'terms' || activeTab === 'privacy' || activeTab === 'eula') && (
          <LegalPages
            type={activeTab}
            setActiveTab={setActiveTab}
            onOpenCookieSettings={() => setCookieModalOpen(true)}
          />
        )}
      </main>

      {/* Austere Smart Ad Banner (Footer Placement - Zone 3) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 py-4">
        <SmartAdsBanner placement="footer" />
      </div>

      {/* Footer with all mandatory links */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCookieSettings={() => setCookieModalOpen(true)}
      />

      {/* Cookie Consent Banner & Granular Preferences Modal */}
      <CookieBanner
        forceOpenModal={cookieModalOpen}
        onCloseModal={() => setCookieModalOpen(false)}
      />

      {/* Worldwide Indexer Modal */}
      <WorldwideIndexerModal
        isOpen={indexerOpen}
        onClose={() => setIndexerOpen(false)}
      />
    </div>
  );
}
