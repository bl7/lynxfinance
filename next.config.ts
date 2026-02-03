import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for better performance and SEO
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Compress output for better performance
  compress: true,
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Trailing slash configuration to prevent duplicate URLs
  // Set to false to ensure URLs don't have trailing slashes (consistent with sitemap)
  trailingSlash: false,
  // Redirects for SEO: enforce www and HTTPS
  async redirects() {
    return [
      // Redirect non-www to www (canonical domain)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "lynxfinanceconsulting.com",
          },
        ],
        destination: "https://www.lynxfinanceconsulting.com/:path*",
        permanent: true,
      },
      // Redirect old domain to new domain (if applicable)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "lynxfinance.vercel.app",
          },
        ],
        destination: "https://www.lynxfinanceconsulting.com/:path*",
        permanent: true,
      },
      // Redirect trailing slashes to non-trailing slash URLs (prevents duplicate content)
      // This ensures /about/ redirects to /about (consistent with sitemap)
      // Note: Root path (/) is excluded as it doesn't match this pattern
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Sitemap cache headers following InstaLabel standards
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=600, stale-while-revalidate=300",
          },
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
        ],
      },
      {
        // Robots.txt cache headers
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=300",
          },
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
