import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { ActiveTab, BlogPost } from '../types';

interface BlogPageProps {
  setActiveTab: (tab: ActiveTab) => void;
  onCloneUrl: (url: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ setActiveTab, onCloneUrl }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'step-by-step',
      title: 'How to Clone a Website Step by Step in 2026',
      slug: 'how-to-clone-a-website-step-by-step',
      excerpt: 'A comprehensive walkthrough on turning any public URL into an editable frontend project with semantic HTML, modular CSS, and responsive viewports.',
      category: 'Cloning Guides',
      readTime: '6 min read',
      date: 'November 2026',
      author: 'Kloner Engineering Team',
      content: [
        'Website cloning has evolved from clunky raw scraping tools to sophisticated DOM tree extraction and responsive inlining.',
        'Step 1: Identify the public URL. Choose a modern website whose visual architecture or layout you wish to study or redesign.',
        'Step 2: Parse and sanitize DOM elements. Raw scrapers often download tracking pixels and broken absolute assets. An intelligent cloner re-routes relative paths and isolates core layout styles.',
        'Step 3: Test responsive viewport breakpoints. Ensure mobile (375px), tablet (768px), and desktop (1440px) styles remain intact.',
        'Step 4: Use AI to personalize copy and brand accents. Prompt your local assistant to rewrite value propositions, adjust color palettes, and wire buttons.',
        'Step 5: Export clean static files for hosting on edge platforms like GitHub Pages, Cloudflare Pages, or Vercel.'
      ]
    },
    {
      id: 'duplicate-website',
      title: 'How to Duplicate a Website for Rapid Prototyping & Redesigns',
      slug: 'how-to-duplicate-a-website',
      excerpt: 'Learn why agency founders and freelance web designers duplicate websites to build high-converting client mockups in hours instead of weeks.',
      category: 'Design & Workflow',
      readTime: '5 min read',
      date: 'November 2026',
      author: 'Elena Vance, UX Lead',
      content: [
        'Clients often struggle to articulate their visual preferences from scratch. Presenting a live duplicated website as an interactive starting canvas speeds up design discovery by 400%.',
        'Traditional wireframing tools produce static images that fail to communicate micro-interactions or real typography rendering.',
        'By cloning an existing public layout into KLONE, you can swap colors, update client copy in real-time, and let stakeholders click through actual responsive HTML.',
        'Zero setup means no npm installs, no complex build scripts, and no server configuration before client kickoff meetings.'
      ]
    },
    {
      id: 'copy-website-online',
      title: 'How to Copy a Website Online Without Writing Code',
      slug: 'how-to-copy-a-website-online',
      excerpt: 'Discover the modern browser-based workflow to extract layouts, fonts, palettes, and media assets using automated AI assistance.',
      category: 'No-Code Tools',
      readTime: '4 min read',
      date: 'November 2026',
      author: 'Marcus Chen, DevRel',
      content: [
        'Copying a website historically required downloading terminal scripts like wget or HTTrack and manually untangling hundreds of broken CSS dependencies.',
        'Modern in-browser engines handle CORS proxy routing and DOM serialization automatically.',
        'With visual click-to-edit tools, anyone can click a headline or hero background to alter copy without knowing HTML syntax.',
        'The resulting ZIP bundle is completely self-contained and free of proprietary lock-in.'
      ]
    },
    {
      id: 'github-cloudflare-deploy',
      title: 'Exporting Clean Code for GitHub Pages & Cloudflare Pages',
      slug: 'exporting-clean-code-for-github-pages',
      excerpt: 'Best practices for shipping cloned static assets with SSL certificates, caching headers, and fast global CDN edge distribution.',
      category: 'DevOps & Hosting',
      readTime: '7 min read',
      date: 'November 2026',
      author: 'Sarah Jenkins, Cloud Architect',
      content: [
        'Once you download your project ZIP from KLONE, deploying it live to the global internet takes less than 60 seconds.',
        'For GitHub Pages: Simply initialize a repository, push your index.html and style.css, and activate Pages in repository settings.',
        'For Cloudflare Pages: Drag the unpacked folder into Cloudflare dashboard for immediate distribution across 300+ edge data centers.',
        'Both methods are 100% free forever and require zero ongoing server maintenance.'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#ff2e93] px-3.5 py-1.5 rounded-full bg-[#ff2e93]/10 border border-[#ff2e93]/30 inline-block mb-4">
          GUIDES & ENGINEERING ARTICLES
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          The Website Cloner Guidebook
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Master how to clone a website from a URL, duplicate public layouts, and deploy production-ready static code worldwide.
        </p>
      </div>

      {/* Post Modal / View */}
      {selectedPost ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0c18] border border-[#2b2b48] shadow-2xl mb-16 max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-xs font-mono text-[#00ff88] hover:underline mb-6 flex items-center gap-1.5"
          >
            ← Back to All Guides
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-[#ffe600] mb-3">
            <span>{selectedPost.category}</span>
            <span>•</span>
            <span>{selectedPost.readTime}</span>
            <span>•</span>
            <span>{selectedPost.date}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {selectedPost.title}
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 pb-6 border-b border-[#1c1c30]">
            <User className="w-3.5 h-3.5" />
            <span>Written by {selectedPost.author}</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {selectedPost.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#1c1c30] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setActiveTab('studio')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff2e93] to-[#ffe600] text-black font-extrabold text-xs tracking-wide shadow-md hover:brightness-110 cursor-pointer"
            >
              Try This Guide in Live Studio
            </button>
            <button
              onClick={() => setSelectedPost(null)}
              className="px-4 py-2 rounded-xl bg-[#141426] border border-[#272740] text-xs font-bold text-slate-300"
            >
              Close Guide
            </button>
          </div>
        </div>
      ) : (
        /* Blog Post Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="p-8 rounded-3xl bg-[#0c0c18] border border-[#202034] hover:border-[#ff2e93] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-[#ffe600] font-bold">{post.category}</span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#ff2e93] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a1a2c] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{post.date}</span>
                <span className="text-[#00ff88] group-hover:underline flex items-center gap-1 font-bold">
                  Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
