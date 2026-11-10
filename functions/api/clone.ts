/**
 * Cloudflare Pages Function for /api/clone
 * Handles real website scraping on Cloudflare's global edge network with zero CORS limits.
 */
type PagesContext = {
  request: Request;
  env?: Record<string, any>;
  params?: Record<string, any>;
};

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  };

  try {
    const body: any = await context.request.json();
    const targetUrl = body?.url;

    if (!targetUrl) {
      return new Response(JSON.stringify({ error: 'URL parameter is required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    let normalized = targetUrl.trim();
    if (!/^https?:\/\//i.test(normalized)) {
      normalized = 'https://' + normalized;
    }

    const response = await fetch(normalized, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      redirect: 'follow',
    });

    const finalUrl = response.url || normalized;
    let html = await response.text();

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    let title = titleMatch ? titleMatch[1].trim() : 'Cloned Website';

    // Extract description
    const descMatch =
      html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
      html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
    const description = descMatch ? descMatch[1].trim() : `Real website clone of ${finalUrl}`;

    // Strip frame-busting scripts
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
      if (/top\.location|window\.top|self\.location|location\.replace/i.test(match)) {
        return '<!-- [KLONE] Frame-buster sanitized -->';
      }
      return match;
    });

    // Inject base href
    const baseTag = `<base href="${finalUrl}">`;
    if (/<head[^>]*>/i.test(html)) {
      html = html.replace(/<head[^>]*>/i, `$& \n  ${baseTag}`);
    } else {
      html = `<head>${baseTag}</head>\n` + html;
    }

    // Extract inline CSS
    const cssMatches = html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    let extractedCss = '';
    for (const cm of cssMatches) {
      extractedCss += cm[1] + '\n';
    }

    return new Response(
      JSON.stringify({
        success: true,
        url: finalUrl,
        title,
        description,
        html,
        css: extractedCss.slice(0, 50000),
        images: [],
        colors: ['#050508', '#ff2e93', '#00ff88', '#ffe600', '#ffffff'],
        fonts: ['Inter', 'system-ui', 'sans-serif'],
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error?.message || 'Failed to clone website on edge',
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
};

export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
