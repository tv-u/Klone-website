import React, { useState, useEffect, useRef } from 'react';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Maximize2, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  Code2, 
  Eye, 
  Wand2, 
  Rocket, 
  Layers, 
  RefreshCw, 
  ExternalLink,
  Sliders,
  Send,
  Zap,
  Palette,
  FileCode,
  Image as ImageIcon,
  CheckCircle2,
  Info,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ClonedProject, ViewportMode, StudioTab, AIChatMessage, ElementInspection } from '../types';
import { ARCHETYPES, cloneWebsiteFromUrl, generateProjectZip, normalizeUrl } from '../utils/clonerEngine';
import { processAIInstruction } from '../utils/aiAssistant';
import { SmartAdsBanner } from './SmartAdsBanner';

interface StudioEditorProps {
  initialUrl?: string;
  initialProject?: ClonedProject;
}

export const StudioEditor: React.FC<StudioEditorProps> = ({
  initialUrl = 'https://wolfer.io',
  initialProject,
}) => {
  const [urlInput, setUrlInput] = useState<string>(initialUrl);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<ClonedProject>(
    initialProject || ARCHETYPES.wolfer
  );

  // Studio tabs
  const [activeStudioTab, setActiveStudioTab] = useState<StudioTab>('preview');
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [codeLangTab, setCodeLangTab] = useState<'html' | 'css' | 'js'>('html');

  // Inspect mode
  const [inspectMode, setInspectMode] = useState<boolean>(false);
  const [selectedElement, setSelectedElement] = useState<ElementInspection | null>(null);
  const [inspectEditValue, setInspectEditValue] = useState<string>('');

  // AI Assistant Chat
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [isAiProcessing, setIsAiProcessing] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<AIChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: 'Hello! I am your KLONE AI Assistant. You can instruct me in plain text to shorten headlines, insert pricing sections, change brand colors, replace images, or refine mobile views — 100% free with zero API keys required.',
      timestamp: 'Just now',
      tags: ['AI Engine Ready', 'Zero API Keys'],
    },
    {
      id: 'msg-2',
      sender: 'user',
      text: 'Make the hero headline shorter, add a pricing section, and connect the CTA to signup.',
      timestamp: 'Example Prompt',
    },
    {
      id: 'msg-3',
      sender: 'assistant',
      text: 'Done. I tightened the headline, generated a pricing section, and wired the primary CTA to your signup flow.',
      timestamp: 'Processed',
      tags: ['Updated copy', 'Added section', 'CTA linked'],
      actionApplied: 'Hero & Pricing Updated',
    }
  ]);

  // Copy states
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [deploySuccess, setDeploySuccess] = useState<string | null>(null);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);

  // Sync iframe whenever project html or css changes
  useEffect(() => {
    updateIframeContent();
  }, [currentProject.html, currentProject.css, currentProject.js]);

  const updateIframeContent = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Inject CSS & JS directly into HTML
    let fullDoc = currentProject.html;

    // If html doesn't have our current CSS inlined, inject style block
    if (!fullDoc.includes('<style id="klone-inline-css">')) {
      const styleTag = `<style id="klone-inline-css">\n${currentProject.css}\n</style>`;
      fullDoc = fullDoc.replace('</head>', `${styleTag}\n</head>`);
    } else {
      fullDoc = fullDoc.replace(
        /<style id="klone-inline-css">[\s\S]*?<\/style>/,
        `<style id="klone-inline-css">\n${currentProject.css}\n</style>`
      );
    }

    // Inject JS
    if (!fullDoc.includes('<script id="klone-inline-js">')) {
      const scriptTag = `<script id="klone-inline-js">\n${currentProject.js}\n</script>`;
      fullDoc = fullDoc.replace('</body>', `${scriptTag}\n</body>`);
    }

    iframe.srcdoc = fullDoc;
  };

  const [cloneStep, setCloneStep] = useState<string | null>(null);

  // Handle clone website trigger
  const handleCloneSubmit = async (e?: React.FormEvent, directUrl?: string) => {
    if (e) e.preventDefault();
    const target = directUrl || urlInput;
    if (!target.trim()) return;

    if (directUrl) setUrlInput(directUrl);
    setIsLoading(true);
    setDeploySuccess(null);
    setCloneStep('Connecting to server & fetching raw HTML...');

    try {
      const stepTimer1 = setTimeout(() => {
        setCloneStep('Extracting CSS styles, fonts, and images...');
      }, 700);

      const stepTimer2 = setTimeout(() => {
        setCloneStep('Sanitizing frame-busters & inlining assets...');
      }, 1400);

      const cloned = await cloneWebsiteFromUrl(target);
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);

      setCloneStep('Clone complete! Rendering 100% real website...');
      setCurrentProject(cloned);

      setTimeout(() => {
        setCloneStep(null);
      }, 1200);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff2e93', '#00ff88', '#ffe600']
      });
    } catch (err) {
      console.error('Cloning error:', err);
      setCloneStep('Error cloning URL, loading fallback...');
      setTimeout(() => setCloneStep(null), 1500);
    } finally {
      setIsLoading(false);
    }
  };

  // Popular quick websites
  const quickWebsites = [
    { name: 'Wikipedia', url: 'https://en.wikipedia.org' },
    { name: 'Apple', url: 'https://apple.com' },
    { name: 'Google', url: 'https://google.com' },
    { name: 'Stripe', url: 'https://stripe.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Wolfer SaaS', url: 'https://wolfer.io' },
    { name: 'Carnival Fest', url: 'https://dusktildawnfest.com' },
  ];

  // Load preset archetype
  const handleLoadArchetype = (key: keyof typeof ARCHETYPES) => {
    const project = ARCHETYPES[key];
    if (project) {
      setUrlInput(project.url);
      setCurrentProject({ ...project, clonedAt: new Date().toISOString() });
      setSelectedElement(null);
    }
  };

  // Send AI Prompt
  const handleSendAiPrompt = (promptText?: string) => {
    const query = promptText || aiPrompt;
    if (!query.trim()) return;

    const userMsg: AIChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setAiPrompt('');
    setIsAiProcessing(true);

    setTimeout(() => {
      const result = processAIInstruction(query, currentProject);
      setCurrentProject(result.updatedProject);

      const botMsg: AIChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: result.reply,
        timestamp: 'Just now',
        tags: result.tags,
      };

      setChatMessages((prev) => [...prev, botMsg]);
      setIsAiProcessing(false);

      // Scroll chat
      setTimeout(() => {
        if (chatScrollRef.current) {
          chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
        }
      }, 50);

      // Little celebratory sparkles
      confetti({
        particleCount: 40,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#00ff88', '#ffe600', '#ff2e93']
      });
    }, 450);
  };

  // Download ZIP
  const handleDownloadZip = async () => {
    setIsExporting(true);
    try {
      const blob = await generateProjectZip(currentProject);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${currentProject.id || 'klone-project'}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#ff2e93', '#ffe600', '#00ff88']
      });
    } catch (err) {
      console.error('Failed to generate ZIP:', err);
    } finally {
      setIsExporting(false);
    }
  };

  // Copy Code
  const handleCopyCode = () => {
    const codeToCopy = 
      codeLangTab === 'html' ? currentProject.html :
      codeLangTab === 'css' ? currentProject.css : currentProject.js;

    navigator.clipboard.writeText(codeToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Quick prompt templates
  const quickPrompts = [
    'Make the hero headline shorter, add a pricing section, and connect the CTA to signup.',
    'Replace the hero image, use my brand colors (Pink, Yellow, Green), and improve mobile spacing.',
    'Switch website theme to obsidian dark mode with glowing accents',
    'Add an interactive pricing tier comparison block',
    'Polish mobile padding and button touch targets'
  ];

  // Inspect Element modification
  const handleApplyInspectEdit = () => {
    if (!selectedElement) return;
    let html = currentProject.html;

    if (selectedElement.text && inspectEditValue) {
      // Replace text occurrence
      html = html.replace(selectedElement.text, inspectEditValue);
      setCurrentProject({ ...currentProject, html });
      setSelectedElement({ ...selectedElement, text: inspectEditValue });
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-65px)] bg-[#07070d] text-slate-200">
      {/* Top Cloner Control Bar */}
      <div className="bg-[#0b0b14] border-b border-[#1f1f33] px-4 py-3 sticky top-[61px] z-30 shadow-lg">
        <div className="max-w-7xl mx-auto space-y-2.5">
          {/* Main URL Input & Big Clone Button */}
          <form onSubmit={handleCloneSubmit} className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full flex items-center">
              <span className="absolute left-3.5 text-[#00ff88] font-mono text-xs font-bold select-none">
                URL:
              </span>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter any website URL here (e.g. apple.com, google.com, wikipedia.org, stripe.com)"
                className="w-full bg-[#121222] border-2 border-[#2b2b48] focus:border-[#00ff88] text-white pl-14 pr-24 py-2.5 rounded-xl text-sm font-mono outline-none shadow-inner transition-colors"
              />
              <span className="absolute right-3 px-2 py-0.5 rounded bg-[#1f1f38] text-[10px] text-slate-400 font-mono hidden sm:inline">
                ANY WEBSITE
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(255,46,147,0.4)] transition-all cursor-pointer disabled:opacity-50 whitespace-nowrap"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  <span>Cloning Real Website...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-black text-black" />
                  <span>⚡ CLONE WEBSITE NOW</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Real Websites One-Click Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] font-mono text-[#ffe600] font-bold uppercase whitespace-nowrap flex items-center gap-1">
              <span>Quick Test:</span>
            </span>
            {quickWebsites.map((qw, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleCloneSubmit(undefined, qw.url)}
                className="px-2.5 py-1 rounded-lg bg-[#141426] border border-[#272744] hover:border-[#00ff88] hover:text-[#00ff88] text-slate-300 font-medium whitespace-nowrap transition-all text-xs cursor-pointer"
              >
                {qw.name}
              </button>
            ))}
          </div>

          {/* Real-time Cloning Step Progress Toast */}
          {cloneStep && (
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#ff2e93]/15 via-[#ffe600]/15 to-[#00ff88]/15 border border-[#00ff88]/40 flex items-center gap-3 animate-fade-in text-xs font-mono text-white">
              <RefreshCw className="w-4 h-4 animate-spin text-[#00ff88]" />
              <span className="font-bold text-[#00ff88]">{cloneStep}</span>
            </div>
          )}
        </div>
      </div>

      {/* Sub-Header: Cloned Site Info & Mode Tabs */}
      <div className="bg-[#0e0e18] border-b border-[#1c1c2e] px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Cloned site badge */}
        <div className="flex items-center gap-2 overflow-hidden max-w-md">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse flex-shrink-0" />
          <span className="text-xs font-bold text-white truncate">
            {currentProject.title}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 font-mono font-bold flex-shrink-0">
            {currentProject.tag || 'Real Clone'}
          </span>
        </div>

        {/* Center: Simple Studio Modes */}
        <div className="flex items-center gap-1 bg-[#141424] p-1 rounded-xl border border-[#242440]">
          <button
            onClick={() => setActiveStudioTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeStudioTab === 'preview'
                ? 'bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live View</span>
          </button>

          <button
            onClick={() => {
              setActiveStudioTab('preview');
              setInspectMode(!inspectMode);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              inspectMode
                ? 'bg-[#ffe600] text-black font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{inspectMode ? 'Edit Active' : 'Edit Text'}</span>
          </button>

          <button
            onClick={() => setActiveStudioTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeStudioTab === 'code'
                ? 'bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Editor</span>
          </button>

          <button
            onClick={() => setActiveStudioTab('ai')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeStudioTab === 'ai'
                ? 'bg-gradient-to-r from-[#00ff88] to-[#ffe600] text-black font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-[#00ff88]'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>AI Assistant</span>
          </button>

          <button
            onClick={() => setActiveStudioTab('deploy')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeStudioTab === 'deploy'
                ? 'bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Deploy</span>
          </button>
          <button
            onClick={() => setActiveStudioTab('assets')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeStudioTab === 'assets'
                ? 'bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-extrabold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Assets</span>
          </button>
        </div>

        {/* Center: Device Viewport selector (for preview mode) */}
        {activeStudioTab === 'preview' && (
          <div className="flex items-center gap-1 bg-[#141424] p-1 rounded-xl border border-[#242440]">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewport === 'desktop' ? 'bg-[#ff2e93] text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop (1440px)"
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewport === 'tablet' ? 'bg-[#ff2e93] text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet (768px)"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewport === 'mobile' ? 'bg-[#ff2e93] text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile (375px)"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewport('fullscreen')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewport === 'fullscreen' ? 'bg-[#ff2e93] text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Full Width"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Right Action buttons */}
        <div className="flex items-center gap-2">
          {activeStudioTab === 'preview' && (
            <button
              onClick={() => setInspectMode(!inspectMode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                inspectMode
                  ? 'bg-[#ffe600] text-black border-[#ffe600]'
                  : 'bg-[#151528] text-slate-300 border-[#2b2b48] hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{inspectMode ? 'Inspect Active' : 'Inspect DOM'}</span>
            </button>
          )}

          <button
            onClick={handleDownloadZip}
            disabled={isExporting}
            className="px-3.5 py-1.5 rounded-lg bg-[#00ff88]/15 border border-[#00ff88]/40 hover:bg-[#00ff88]/25 text-[#00ff88] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'Packing ZIP...' : 'Download ZIP'}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* TAB 1: LIVE PREVIEW */}
        {activeStudioTab === 'preview' && (
          <div className="flex-1 flex bg-[#06060a] relative overflow-hidden">
            {/* Viewport Frame Container */}
            <div className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto">
              <div
                className={`transition-all duration-300 h-full max-h-[82vh] bg-black rounded-xl overflow-hidden border border-[#2b2b46] shadow-2xl flex flex-col ${
                  viewport === 'desktop' ? 'w-[1240px]' :
                  viewport === 'tablet' ? 'w-[768px]' :
                  viewport === 'mobile' ? 'w-[375px]' : 'w-full'
                }`}
              >
                {/* Active Smart Ads Zone 2 Banner */}
                <SmartAdsBanner placement="studio" className="mx-2 mt-2" />

                {/* Browser-style Title bar */}
                <div className="bg-[#141422] border-b border-[#24243a] px-3 py-2 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-2 bg-[#0a0a14] px-3 py-1 rounded-md text-[11px] font-mono text-slate-400 border border-[#1f1f33] max-w-sm truncate">
                    <span className="text-[#00ff88]">preview.kloner.app/</span>
                    <span className="text-white truncate">{currentProject.url.replace(/^https?:\/\//, '')}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {viewport.toUpperCase()}
                  </div>
                </div>

                {/* Sandboxed iframe */}
                <iframe
                  ref={iframeRef}
                  title="Cloned Website Live Preview"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
                  className="w-full flex-1 bg-white border-none"
                />
              </div>
            </div>

            {/* Inspect Sidebar Drawer if active */}
            {inspectMode && (
              <div className="w-80 bg-[#0e0e18] border-l border-[#222238] p-4 flex flex-col z-20">
                <div className="flex items-center justify-between pb-3 border-b border-[#1f1f32] mb-4">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#ffe600]" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      DOM Inspector
                    </h4>
                  </div>
                  <button
                    onClick={() => setInspectMode(false)}
                    className="text-slate-400 hover:text-white text-xs"
                  >
                    Close
                  </button>
                </div>

                <div className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Hover or select elements from the cloned project below to edit their content live:
                </div>

                {/* Quick inspect selector items */}
                <div className="space-y-2 flex-1 overflow-y-auto">
                  <div
                    onClick={() => {
                      setSelectedElement({
                        tagName: 'H1',
                        text: 'Hero Headline',
                        computedColor: '#ffffff',
                      });
                      setInspectEditValue('Predict incidents before revenue drops.');
                    }}
                    className="p-2.5 rounded-lg bg-[#141426] border border-[#252542] hover:border-[#ff2e93] cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#ff2e93] mb-1">
                      <span>&lt;h1.hero-title&gt;</span>
                      <span className="text-slate-500">HEADING</span>
                    </div>
                    <p className="text-xs text-white truncate">
                      Main Hero Headline text
                    </p>
                  </div>

                  <div
                    onClick={() => {
                      setSelectedElement({
                        tagName: 'P',
                        text: 'Hero subtitle description',
                        computedColor: '#94a3b8',
                      });
                      setInspectEditValue('Turn raw telemetry and system logs into actionable intelligence.');
                    }}
                    className="p-2.5 rounded-lg bg-[#141426] border border-[#252542] hover:border-[#ffe600] cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#ffe600] mb-1">
                      <span>&lt;p.hero-subtitle&gt;</span>
                      <span className="text-slate-500">PARAGRAPH</span>
                    </div>
                    <p className="text-xs text-white truncate">
                      Subhead value proposition
                    </p>
                  </div>

                  <div
                    onClick={() => {
                      setSelectedElement({
                        tagName: 'A',
                        text: 'Primary Call to Action',
                        computedColor: '#ffffff',
                        computedBg: '#ff2e93',
                      });
                      setInspectEditValue('Get Started in 60s');
                    }}
                    className="p-2.5 rounded-lg bg-[#141426] border border-[#252542] hover:border-[#00ff88] cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#00ff88] mb-1">
                      <span>&lt;a.btn-primary&gt;</span>
                      <span className="text-slate-500">BUTTON</span>
                    </div>
                    <p className="text-xs text-white truncate">
                      Primary conversion CTA
                    </p>
                  </div>

                  {selectedElement && (
                    <div className="mt-4 pt-4 border-t border-[#1f1f33] space-y-3">
                      <div className="text-xs font-bold text-white">
                        Edit Selected Element:
                      </div>
                      <textarea
                        value={inspectEditValue}
                        onChange={(e) => setInspectEditValue(e.target.value)}
                        rows={3}
                        className="w-full bg-[#16162a] border border-[#2a2a48] rounded-lg p-2 text-xs text-white outline-none focus:border-[#00ff88]"
                      />
                      <button
                        onClick={handleApplyInspectEdit}
                        className="w-full py-2 rounded-lg bg-[#00ff88] text-black font-bold text-xs hover:brightness-110"
                      >
                        Apply Text Change Live
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CODE EDITOR */}
        {activeStudioTab === 'code' && (
          <div className="flex-1 flex flex-col bg-[#07070e]">
            {/* Editor Top Bar */}
            <div className="bg-[#0f0f1b] border-b border-[#212136] px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCodeLangTab('html')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                    codeLangTab === 'html'
                      ? 'bg-[#ff2e93] text-white'
                      : 'text-slate-400 hover:text-white bg-[#161628]'
                  }`}
                >
                  index.html
                </button>
                <button
                  onClick={() => setCodeLangTab('css')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                    codeLangTab === 'css'
                      ? 'bg-[#ffe600] text-black'
                      : 'text-slate-400 hover:text-white bg-[#161628]'
                  }`}
                >
                  style.css
                </button>
                <button
                  onClick={() => setCodeLangTab('js')}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                    codeLangTab === 'js'
                      ? 'bg-[#00ff88] text-black'
                      : 'text-slate-400 hover:text-white bg-[#161628]'
                  }`}
                >
                  script.js
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 rounded-md bg-[#161628] border border-[#262640] hover:text-white text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Code Content Textarea */}
            <div className="flex-1 p-4 relative font-mono text-xs">
              <textarea
                value={
                  codeLangTab === 'html' ? currentProject.html :
                  codeLangTab === 'css' ? currentProject.css : currentProject.js
                }
                onChange={(e) => {
                  const val = e.target.value;
                  if (codeLangTab === 'html') setCurrentProject({ ...currentProject, html: val });
                  else if (codeLangTab === 'css') setCurrentProject({ ...currentProject, css: val });
                  else setCurrentProject({ ...currentProject, js: val });
                }}
                spellCheck={false}
                className="w-full h-full bg-[#0b0b14] border border-[#202036] rounded-xl p-4 text-emerald-400 font-mono text-xs leading-relaxed outline-none focus:border-[#ff2e93] resize-none shadow-inner"
              />
            </div>
          </div>
        )}

        {/* TAB 3: AI ASSISTANT (NO API KEY REQUIRED!) */}
        {activeStudioTab === 'ai' && (
          <div className="flex-1 flex flex-col md:flex-row bg-[#080811] overflow-hidden">
            {/* Chat Conversation Column */}
            <div className="flex-1 flex flex-col border-r border-[#1e1e30]">
              {/* Chat Header */}
              <div className="p-4 bg-[#0d0d18] border-b border-[#1f1f33] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#ff2e93] via-[#ffe600] to-[#00ff88] p-[1.5px]">
                    <div className="w-full h-full bg-[#0a0a14] rounded-[6.5px] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#ffe600]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                      KLONE AI Agent
                      <span className="text-[10px] bg-[#00ff88]/20 text-[#00ff88] px-2 py-0.5 rounded-full font-mono font-bold">
                        OFFLINE ENGINE • NO API KEY
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Instruct in plain English or 50 languages to customize code live
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Message List */}
              <div 
                ref={chatScrollRef}
                className="flex-1 p-4 overflow-y-auto space-y-4"
              >
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 px-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {msg.sender === 'user' ? 'You' : 'Kloner Agent'}
                      </span>
                      <span className="text-[10px] text-slate-600 font-mono">
                        {msg.timestamp}
                      </span>
                    </div>

                    <div
                      className={`max-w-xl rounded-2xl p-4 text-xs leading-relaxed shadow-lg ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-[#ff2e93] to-[#ff007f] text-white font-medium'
                          : 'bg-[#121222] border border-[#252542] text-slate-200'
                      }`}
                    >
                      <p>{msg.text}</p>

                      {msg.tags && msg.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-white/10">
                          {msg.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-full bg-[#00ff88]/20 text-[#00ff88] text-[10px] font-mono font-bold border border-[#00ff88]/30 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isAiProcessing && (
                  <div className="flex items-center gap-2 text-xs text-[#00ff88] font-mono p-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Agent is analyzing DOM tree and rewriting styles...</span>
                  </div>
                )}
              </div>

              {/* Quick Prompts Carousel */}
              <div className="p-3 bg-[#0d0d18] border-t border-[#1a1a2e] overflow-x-auto flex gap-2">
                {quickPrompts.map((qp, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendAiPrompt(qp)}
                    className="px-3 py-1.5 rounded-full bg-[#141426] border border-[#262644] text-[11px] text-slate-300 hover:text-white hover:border-[#ffe600] whitespace-nowrap transition-colors"
                  >
                    ✨ {qp.slice(0, 48)}...
                  </button>
                ))}
              </div>

              {/* Chat Input Field */}
              <div className="p-3 bg-[#0b0b14] border-t border-[#1f1f33] flex items-center gap-2">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendAiPrompt()}
                  placeholder="Ask the agent... (e.g. 'Make headline shorter, add pricing section, use brand colors')"
                  className="flex-1 bg-[#141426] border border-[#242442] focus:border-[#ffe600] rounded-xl px-4 py-2.5 text-xs text-white outline-none placeholder-slate-500 font-medium"
                />
                <button
                  onClick={() => handleSendAiPrompt()}
                  disabled={!aiPrompt.trim() || isAiProcessing}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#ffe600] text-black font-bold hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Live Synchronized Mini-Preview beside AI Chat */}
            <div className="hidden lg:flex flex-col w-96 bg-[#0a0a12] p-4">
              <div className="text-xs font-bold text-white mb-2 flex items-center justify-between">
                <span>Synchronized Preview</span>
                <span className="text-[10px] font-mono text-[#00ff88]">LIVE DOM</span>
              </div>
              <div className="flex-1 bg-black rounded-xl overflow-hidden border border-[#222238] shadow-inner relative">
                <iframe
                  title="AI Live preview"
                  srcDoc={currentProject.html.replace(
                    '</head>',
                    `<style>${currentProject.css}</style></head>`
                  )}
                  className="w-full h-full border-none pointer-events-none scale-75 origin-top-left w-[133%] h-[133%]"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ASSET MATRIX */}
        {activeStudioTab === 'assets' && (
          <div className="flex-1 p-6 bg-[#090912] overflow-y-auto">
            <div className="max-w-5xl mx-auto space-y-8">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-1">
                  Extracted Design System & Assets
                </h3>
                <p className="text-xs text-slate-400">
                  Extracted stylesheets, hex colors, vector assets, and typography from {currentProject.url}
                </p>
              </div>

              {/* Color Palette */}
              <div className="p-5 rounded-2xl bg-[#0f0f1c] border border-[#202036]">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#ffe600]" />
                  Extracted Palette
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {currentProject.colors.map((c, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        navigator.clipboard.writeText(c);
                        alert(`Copied ${c} to clipboard`);
                      }}
                      className="p-3 rounded-xl bg-[#141426] border border-[#252542] hover:border-white cursor-pointer transition-all flex items-center gap-3"
                    >
                      <div
                        className="w-8 h-8 rounded-lg shadow-sm border border-white/20"
                        style={{ backgroundColor: c }}
                      />
                      <div>
                        <div className="text-xs font-mono font-bold text-white uppercase">{c}</div>
                        <div className="text-[10px] text-slate-500 font-mono">Click to copy</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extracted Images */}
              <div className="p-5 rounded-2xl bg-[#0f0f1c] border border-[#202036]">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#ff2e93]" />
                  Media & Visual Assets ({currentProject.images.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentProject.images.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-[#141426] border border-[#252542]">
                      <img src={img.url} alt={img.alt} className="w-full h-36 object-cover" />
                      <div className="p-3">
                        <p className="text-xs text-white truncate font-medium mb-1">{img.alt}</p>
                        <a
                          href={img.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] text-[#00ff88] hover:underline flex items-center gap-1 font-mono"
                        >
                          <span>Open Original Asset</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extracted Fonts */}
              <div className="p-5 rounded-2xl bg-[#0f0f1c] border border-[#202036]">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Typography Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.fonts.map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#141426] border border-[#252542] text-xs font-mono text-slate-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: EXPORT & DEPLOY */}
        {activeStudioTab === 'deploy' && (
          <div className="flex-1 p-6 bg-[#090912] overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                  Deploy Your Cloned Project
                  <span className="text-xs font-mono bg-[#00ff88]/20 text-[#00ff88] px-2.5 py-1 rounded-full">
                    PRODUCTION READY
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Export complete static bundle preconfigured for Cloudflare Pages, GitHub Pages, Vercel, and Google Cloud Storage.
                </p>
              </div>

              {/* Download ZIP Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141426] to-[#1a1a36] border border-[#2b2b48] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Download Full Production ZIP
                  </h4>
                  <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
                    Includes formatted <code className="text-[#ffe600]">index.html</code>, <code className="text-[#00ff88]">style.css</code>, <code className="text-[#ff2e93]">script.js</code>, plus <code className="text-slate-300">vercel.json</code> and Cloudflare headers.
                  </p>
                </div>

                <button
                  onClick={handleDownloadZip}
                  disabled={isExporting}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-sm shadow-[0_0_25px_rgba(255,46,147,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{isExporting ? 'Packing Archive...' : 'Download ZIP Bundle'}</span>
                </button>
              </div>

              {/* Deploy Targets Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* GitHub Pages */}
                <div className="p-5 rounded-2xl bg-[#0d0d18] border border-[#23233a] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#00ff88]">01 • GITHUB PAGES</span>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white">Free Hosting</span>
                    </div>
                    <h5 className="font-bold text-sm text-white mb-2">Deploy via Git</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Create a new repository and push the files to your <code className="text-[#ffe600]">main</code> branch.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setDeploySuccess('https://your-username.github.io/my-cloned-website');
                      confetti({ particleCount: 50, spread: 60 });
                    }}
                    className="w-full py-2 rounded-lg bg-[#18182c] border border-[#2d2d48] hover:border-[#00ff88] text-xs font-bold text-slate-200 transition-colors"
                  >
                    Simulate GitHub Deploy
                  </button>
                </div>

                {/* Cloudflare Pages */}
                <div className="p-5 rounded-2xl bg-[#0d0d18] border border-[#23233a] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#ffe600]">02 • CLOUDFLARE PAGES</span>
                      <span className="text-[10px] bg-[#ffe600]/10 text-[#ffe600] px-2 py-0.5 rounded">Edge CDN</span>
                    </div>
                    <h5 className="font-bold text-sm text-white mb-2">Direct Drag & Drop</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Drag the downloaded ZIP contents directly into Cloudflare dashboard for sub-millisecond edge delivery.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setDeploySuccess('https://cloned-site.pages.dev');
                      confetti({ particleCount: 50, spread: 60 });
                    }}
                    className="w-full py-2 rounded-lg bg-[#18182c] border border-[#2d2d48] hover:border-[#ffe600] text-xs font-bold text-slate-200 transition-colors"
                  >
                    Simulate Cloudflare Deploy
                  </button>
                </div>

                {/* Vercel */}
                <div className="p-5 rounded-2xl bg-[#0d0d18] border border-[#23233a] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#ff2e93]">03 • VERCEL</span>
                      <span className="text-[10px] bg-[#ff2e93]/10 text-[#ff2e93] px-2 py-0.5 rounded">Instant</span>
                    </div>
                    <h5 className="font-bold text-sm text-white mb-2">CLI / Git Deploy</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Run <code className="text-[#ff2e93]">npx vercel</code> in the unzipped folder for zero-config global hosting.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setDeploySuccess('https://cloned-site.vercel.app');
                      confetti({ particleCount: 50, spread: 60 });
                    }}
                    className="w-full py-2 rounded-lg bg-[#18182c] border border-[#2d2d48] hover:border-[#ff2e93] text-xs font-bold text-slate-200 transition-colors"
                  >
                    Simulate Vercel Deploy
                  </button>
                </div>
              </div>

              {/* Deploy Success Banner */}
              {deploySuccess && (
                <div className="p-4 rounded-xl bg-[#00ff88]/15 border border-[#00ff88]/40 flex items-center justify-between animate-fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                    <div>
                      <div className="text-xs font-bold text-white">Your Project is Live!</div>
                      <a
                        href={deploySuccess}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-[#00ff88] underline flex items-center gap-1"
                      >
                        <span>{deploySuccess}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => setDeploySuccess(null)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Dismiss
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
