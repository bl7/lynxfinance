import { NextResponse } from "next/server";

export function GET() {
  const body = `# Robots.txt for LYNX Finance Consulting
# Standards: RFC 9309 (Robots Exclusion Protocol)

# Global Rules - Allow all search engines by default
User-agent: *
Allow: /

# Explicitly allow important content paths
Allow: /
Allow: /about
Allow: /services
Allow: /services/
Allow: /industries
Allow: /pricing
Allow: /faq
Allow: /contact

# Disallow private/authenticated areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /auth/
Disallow: /login/
Disallow: /register/
Disallow: /forgot-password/
Disallow: /reset-password/

# Search Engine Specific Directives
# Explicitly allow major search engines for clarity

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Sitemap References
Sitemap: https://www.lynxfinanceconsulting.com/sitemap.xml
`;
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=300",
    },
  });
}


