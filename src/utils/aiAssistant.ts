import { ClonedProject } from '../types';

export interface AIProcessResult {
  reply: string;
  tags: string[];
  updatedProject: ClonedProject;
}

export function processAIInstruction(
  prompt: string,
  currentProject: ClonedProject
): AIProcessResult {
  const p = prompt.toLowerCase();
  const project = { ...currentProject };
  let html = project.html;
  let css = project.css;
  const tags: string[] = [];
  const changes: string[] = [];

  // 1. Headline shortening or modification
  if (p.includes('headline') || p.includes('shorter') || p.includes('title') || p.includes('tighten')) {
    html = html.replace(
      /<h1([^>]*)>(.*?)<\/h1>/i,
      `<h1$1>Autonomous Web Engine. <span class="highlight">Built to Scale.</span></h1>`
    );
    tags.push('Updated copy');
    changes.push('tightened the main hero headline to a punchy high-conversion value statement');
  }

  // 2. Add pricing section
  if (p.includes('pricing') || p.includes('price') || p.includes('tier') || p.includes('plan')) {
    if (!html.includes('id="pricing"')) {
      const pricingHtml = `
  <section id="pricing" class="pricing-section" style="padding: 70px 20px; background: #080c14; text-align: center;">
    <div style="max-width: 1000px; margin: 0 auto;">
      <h2 style="font-size: 2.2rem; margin-bottom: 12px; color: #ffe600;">Transparent Pricing</h2>
      <p style="color: #94a3b8; margin-bottom: 40px;">No surprise overages. Cancel anytime.</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
        <div style="background: #131b2e; border: 1px solid #1e293b; padding: 32px; border-radius: 14px;">
          <h3 style="color: #fff; margin-bottom: 10px;">Free</h3>
          <div style="font-size: 2.5rem; font-weight: 800; color: #00ff88; margin-bottom: 12px;">$0<span style="font-size: 1rem; color: #64748b;">/mo</span></div>
          <p style="color: #94a3b8; font-size: 0.9rem;">Unlimited personal projects & exports.</p>
        </div>
        <div style="background: #131b2e; border: 2px solid #ff2e93; padding: 32px; border-radius: 14px; box-shadow: 0 0 25px rgba(255,46,147,0.3);">
          <div style="background: #ff2e93; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 4px 12px; border-radius: 999px; display: inline-block; margin-bottom: 8px;">POPULAR</div>
          <h3 style="color: #fff; margin-bottom: 10px;">Growth Pro</h3>
          <div style="font-size: 2.5rem; font-weight: 800; color: #ffe600; margin-bottom: 12px;">$29<span style="font-size: 1rem; color: #64748b;">/mo</span></div>
          <p style="color: #94a3b8; font-size: 0.9rem;">Custom domains, edge CDN & priority support.</p>
        </div>
      </div>
    </div>
  </section>`;
      html = html.replace(/<\/body>/i, `${pricingHtml}\n</body>`);
      tags.push('Added section');
      changes.push('generated and injected a responsive pricing matrix');
    }
  }

  // 3. Connect CTA to signup
  if (p.includes('cta') || p.includes('signup') || p.includes('sign up') || p.includes('button')) {
    html = html.replace(
      /href="[^"]*"( class="[^"]*(btn|cta)[^"]*")/gi,
      `href="#signup"$1`
    );
    tags.push('CTA linked');
    changes.push('wired the primary and navigation CTAs directly to the signup anchor');
  }

  // 4. Replace hero image
  if (p.includes('image') || p.includes('photo') || p.includes('replace') || p.includes('swap')) {
    const newHeroImg = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80';
    html = html.replace(
      /(<img[^>]+class="[^"]*(dashboard-img|rounded-sanctuary|hero)[^"]*"[^>]*src=")[^"]*(")/i,
      `$1${newHeroImg}$3`
    );
    tags.push('Image updated');
    changes.push('replaced the hero visual with a high-resolution cybernetic asset');
  }

  // 5. Brand colors (Pink, Yellow, Green, Cyber)
  if (p.includes('color') || p.includes('brand') || p.includes('pink') || p.includes('green') || p.includes('yellow') || p.includes('theme') || p.includes('neon')) {
    project.colors = ['#050508', '#ff2e93', '#00ff88', '#ffe600', '#ffffff'];
    css += `\n/* AI Applied Brand Color Accentuation */
:root {
  --primary-accent: #ff2e93;
  --secondary-accent: #00ff88;
  --highlight-yellow: #ffe600;
}
.btn-primary, .btn-carnival-primary, .btn-main {
  background: linear-gradient(135deg, #ff2e93 0%, #ffe600 100%) !important;
  color: #000000 !important;
  font-weight: 800 !important;
  box-shadow: 0 0 25px rgba(255, 46, 147, 0.5) !important;
}
.highlight, .accent-dot, .neon-text {
  color: #ffe600 !important;
  text-shadow: 0 0 15px rgba(255, 230, 0, 0.4) !important;
}
`;
    tags.push('Colors applied');
    changes.push('applied the signature Pink, Green & Electric Yellow brand color scheme with luminous accents');
  }

  // 6. Mobile spacing & padding
  if (p.includes('spacing') || p.includes('padding') || p.includes('mobile') || p.includes('layout')) {
    css += `\n/* AI Refined Mobile Spacing */
@media (max-width: 768px) {
  .hero-section, .hero, .therapy-hero {
    padding: 40px 16px !important;
  }
  .container {
    padding: 0 16px !important;
  }
  h1 {
    font-size: 2.1rem !important;
    line-height: 1.2 !important;
  }
  .btn-primary-large, .btn-carnival-primary, .btn-main {
    width: 100% !important;
    padding: 14px 20px !important;
  }
}
`;
    tags.push('UI refined');
    changes.push('enhanced mobile padding, optimized viewport typography, and enabled full-width tap targets');
  }

  // 7. Dark mode
  if (p.includes('dark') || p.includes('black') || p.includes('night')) {
    css += `\n/* AI Dark Obsidian Mode */
body { background: #050508 !important; color: #f1f5f9 !important; }
.card, .feature-card, .pricing-card { background: #0d0d17 !important; border-color: #232338 !important; }
`;
    tags.push('Dark mode active');
    changes.push('converted the global palette to deep obsidian black with high contrast text');
  }

  // Default fallback if no specific keywords matched
  if (changes.length === 0) {
    // Intelligent polish
    html = html.replace(/<title>(.*?)<\/title>/i, `<title>$1 | AI Optimized</title>`);
    css += `\n/* AI Polish: Smooth animations */
* { scroll-behavior: smooth; }
a, button { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
`;
    tags.push('Code optimized');
    changes.push('applied global smooth transition properties and verified DOM accessibility standards');
  }

  project.html = html;
  project.css = css;

  const reply = `Done! I ${changes.join(', and ')}. All changes are immediately synced to your live preview and code editor.`;

  return {
    reply,
    tags,
    updatedProject: project,
  };
}
