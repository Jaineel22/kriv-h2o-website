import { Metadata } from "next";
import { siteConfig, PageKey } from "@/config/seo";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MetadataOverrides {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
  ogType?: "website" | "article"; // removed "product" – not valid in Next.js OpenGraph
  publishedTime?: string;
  modifiedTime?: string;
}

// ─── Canonical URL builder ────────────────────────────────────────────────────

export function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

// ─── Page metadata generator ─────────────────────────────────────────────────

export function generatePageMetadata(
  pageKey: PageKey,
  overrides: MetadataOverrides = {}
): Metadata {
  const page = siteConfig.pages[pageKey];
  const canonicalPath = overrides.path ?? page.path;
  const canonicalUrl = buildCanonicalUrl(canonicalPath);

  const title = overrides.title ?? page.title;
  const description = overrides.description ?? page.description;
  const keywords = overrides.keywords ?? page.keywords;
  const ogImage = overrides.ogImage ?? siteConfig.openGraph.images[0].url;

  const openGraphType = overrides.ogType ?? "website";

  return {
    title,
    description,
    keywords,

    metadataBase: new URL(siteConfig.url),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.openGraph.siteName,
      locale: siteConfig.openGraph.locale,
      type: openGraphType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      // Only add article timestamps if type is "article" and values are provided
      ...(openGraphType === "article" && overrides.publishedTime && {
        publishedTime: overrides.publishedTime,
      }),
      ...(openGraphType === "article" && overrides.modifiedTime && {
        modifiedTime: overrides.modifiedTime,
      }),
    },

    twitter: {
      card: siteConfig.twitter.card,
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.creator,
      title,
      description,
      images: [ogImage],
    },

    robots: overrides.noIndex
      ? { index: false, follow: false }
      : siteConfig.robots,

    other: {
      "geo.region": `${siteConfig.local.countryCode}-${siteConfig.local.state.substring(0, 2).toUpperCase()}`,
      "geo.placename": siteConfig.local.city,
      "geo.position": "22.3072;73.1812",
      ICBM: "22.3072, 73.1812",
    },
  };
}

// ─── Custom metadata generator (for non‑standard pages) ──────────────────────

export function generateCustomMetadata(
  config: Required<Pick<MetadataOverrides, "title" | "description" | "path">> &
    MetadataOverrides
): Metadata {
  const canonicalUrl = buildCanonicalUrl(config.path);
  const ogImage = config.ogImage ?? siteConfig.openGraph.images[0].url;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,

    metadataBase: new URL(siteConfig.url),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      siteName: siteConfig.openGraph.siteName,
      locale: siteConfig.openGraph.locale,
      type: config.ogType ?? "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },

    twitter: {
      card: siteConfig.twitter.card,
      title: config.title,
      description: config.description,
      images: [ogImage],
    },

    robots: config.noIndex
      ? { index: false, follow: false }
      : siteConfig.robots,
  };
}

// ─── Local Business JSON‑LD schema ───────────────────────────────────────────

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    foundingDate: siteConfig.business.established,
    priceRange: siteConfig.business.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.business.rating,
      reviewCount: siteConfig.business.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.local.city,
      addressRegion: siteConfig.local.state,
      addressCountry: siteConfig.local.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3072",
      longitude: "73.1812",
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.local.city,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "22.3072",
        longitude: "73.1812",
      },
      geoRadius: "30000",
    },
    hasMap: siteConfig.local.branches[0].mapLink,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
  };
}

// ─── Organization JSON‑LD schema ─────────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.business.phone,
      contactType: "Customer Service",
      areaServed: siteConfig.local.countryCode,
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.local.city,
      addressRegion: siteConfig.local.state,
      addressCountry: siteConfig.local.countryCode,
    },
  };
}

// ─── Product JSON‑LD schema ─────────────────────────────────────────────────

export function generateProductSchema(product: {
  name: string;
  description: string;
  price: string;
  image?: string;
  rating?: string;
  reviewCount?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    ...(product.image && { image: product.image }),
    ...(product.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount ?? "50",
      },
    }),
  };
}