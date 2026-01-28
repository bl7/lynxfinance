import { NextResponse } from "next/server";

const BASE_URL = "https://lynxfinance.vercel.app";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/pricing",
  "/faq",
  "/contact",
];

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
  const urls = [
    ...staticRoutes.map((path) => `${BASE_URL}${path}`),
    ...serviceSlugs.map((slug) => `${BASE_URL}/services/${slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}


