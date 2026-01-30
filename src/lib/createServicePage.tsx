// Helper function to create service page metadata
import type { Metadata } from "next";
import { createServiceMetadata, organizationSchema } from "./seo";
import { serviceMetadataMap } from "./serviceMetadata";
import Script from "next/script";

export function createServicePageMetadata(slug: string): Metadata {
  const service = serviceMetadataMap[slug];
  if (!service) {
    throw new Error(`Service metadata not found for slug: ${slug}`);
  }
  return createServiceMetadata(service.name, slug, service.description);
}

export function ServicePageWrapper({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const service = serviceMetadataMap[slug];
  if (!service) {
    throw new Error(`Service metadata not found for slug: ${slug}`);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "AccountingService",
      name: "LYNX Finance Consulting",
    },
    areaServed: {
      "@type": "Country",
      name: ["United States", "Nepal"],
    },
    description: service.description,
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {children}
    </>
  );
}

