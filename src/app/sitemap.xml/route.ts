import { NextResponse } from "next/server";

// Production domain - must match the domain in Google Search Console
const BASE_URL = "https://www.lynxfinanceconsulting.com";

// Get current date in ISO 8601 format with timezone (YYYY-MM-DDTHH:mm:ssZ)
const getCurrentDateISO = (): string => {
  const now = new Date();
  return now.toISOString().split(".")[0] + "Z";
};

// Static routes with priorities and change frequencies
// Following XML Sitemap Protocol 0.9 standards
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/industries", priority: "0.8", changefreq: "monthly" },
  { path: "/pricing", priority: "0.9", changefreq: "weekly" },
  { path: "/faq", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
];

// Service pages - all services have consistent priority and frequency
const serviceSlugs = [
  "accounting-bookkeeping",
  "tax-compliance",
  "excel-google-sheet-modeling",
  "financial-modeling",
  "budgeting-financial-services",
  "process-automation-services",
  "virtual-cfo",
  "us-company-formation",
  "ein",
  "us-business-bank-account",
  "registered-agent-services",
  "itin",
  "bookkeeping-tax-services",
  "annual-compliance-state-filings",
  "migrate-company",
];

export function GET() {
  const currentDate = getCurrentDateISO();

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${BASE_URL}${route.path}`,
      priority: route.priority,
      changefreq: route.changefreq,
      lastmod: currentDate,
    })),
    ...serviceSlugs.map((slug) => ({
      loc: `${BASE_URL}/services/${slug}`,
      priority: "0.8",
      changefreq: "monthly",
      lastmod: currentDate,
    })),
  ];

  // Generate XML following XML Sitemap Protocol 0.9
  // Using ISO 8601 datetime format with timezone (YYYY-MM-DDTHH:mm:ssZ)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=600, stale-while-revalidate=300",
      // Ensure no caching of old sitemap
      "X-Content-Type-Options": "nosniff",
    },
  });
}


