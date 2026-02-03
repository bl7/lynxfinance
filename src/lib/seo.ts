import type { Metadata } from "next";

const BASE_URL = "https://www.lynxfinanceconsulting.com";
const SITE_NAME = "LYNX Finance Consulting";

/**
 * Creates metadata for service pages
 * 
 * @param serviceName - Name of the service (e.g., "Accounting & Bookkeeping")
 * @param slug - URL slug (e.g., "accounting-bookkeeping")
 * @param description - Service description (should mention "LYNX Finance Consulting" for brand SEO)
 * @returns Metadata object with proper brand name formatting
 * 
 * @example
 * createServiceMetadata(
 *   "Accounting & Bookkeeping",
 *   "accounting-bookkeeping",
 *   "LYNX Finance Consulting provides professional accounting..."
 * )
 * // Result: "Accounting & Bookkeeping | LYNX Finance Consulting"
 */
export function createServiceMetadata(
  serviceName: string,
  slug: string,
  description: string
): Metadata {
  const title = `${serviceName} | ${SITE_NAME}`;
  const url = `${BASE_URL}/services/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/logo.png`,
          width: 1200,
          height: 630,
          alt: `${serviceName} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    keywords: [
      serviceName.toLowerCase(),
      "accounting",
      "finance consulting",
      "tax compliance",
      "bookkeeping",
      "virtual CFO",
      "US company formation",
      "financial services",
    ],
  };
}

/**
 * Creates metadata for regular pages (About, Contact, Services, etc.)
 * 
 * @param title - Page title (will be formatted as "Title | LYNX Finance Consulting")
 * @param description - Meta description (should mention "LYNX Finance Consulting" for brand SEO)
 * @param path - URL path (e.g., "/about", "/contact")
 * @returns Metadata object with proper brand name formatting
 * 
 * @example
 * createPageMetadata(
 *   "About",
 *   "LYNX Finance Consulting provides...",
 *   "/about"
 * )
 * // Result: "About | LYNX Finance Consulting"
 */
export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/logo.png`,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Global financial services firm delivering Accounting, Tax, Virtual CFO, and US Company Formation services for high-growth businesses.",
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Texas",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Virginia",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-817-966-0481",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-757-338-3452",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  sameAs: [],
  areaServed: {
    "@type": "Country",
    name: ["United States", "Nepal"],
  },
  serviceType: [
    "Accounting & Bookkeeping",
    "Tax Compliance",
    "Virtual CFO",
    "US Company Formation",
    "Financial Modeling",
    "Process Automation",
  ],
  priceRange: "$$",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: BASE_URL,
  description:
    "Global financial services firm delivering Accounting, Tax, Virtual CFO, and US Company Formation services for high-growth businesses.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/services?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

