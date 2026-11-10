export type ActiveTab = 
  | 'home' 
  | 'studio' 
  | 'how-it-works' 
  | 'pricing' 
  | 'compare' 
  | 'showcase' 
  | 'blog' 
  | 'docs' 
  | 'contact' 
  | 'partners' 
  | 'terms' 
  | 'privacy' 
  | 'eula' 
  | 'cookies';

export interface ClonedProject {
  id: string;
  url: string;
  title: string;
  description: string;
  favicon?: string;
  html: string;
  css: string;
  js: string;
  screenshotUrl?: string;
  colors: string[];
  fonts: string[];
  images: { url: string; alt: string }[];
  clonedAt: string;
  status: 'ready' | 'cloning' | 'error';
  tag: string;
}

export type ViewportMode = 'desktop' | 'tablet' | 'mobile' | 'fullscreen';

export type StudioTab = 'preview' | 'code' | 'ai' | 'assets' | 'deploy';

export interface ElementInspection {
  tagName: string;
  text: string;
  id?: string;
  className?: string;
  computedColor?: string;
  computedBg?: string;
  computedFontSize?: string;
  src?: string;
  href?: string;
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  tags?: string[];
  actionApplied?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  previewImage: string;
  metrics: string;
  description: string;
  tags: string[];
  sampleProject: ClonedProject;
}
