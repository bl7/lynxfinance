import { NextResponse } from "next/server";

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://lynxfinance.vercel.app/sitemap.xml
`;
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}


