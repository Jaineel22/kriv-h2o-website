export const siteConfig = {
  name: "Kriv H2O Private Limited",
  shortName: "Kriv H2O",
  tagline: "Advanced RO Water Purification — Vadodara",
  description:
    "Kriv H2O provides advanced RO water purification systems for homes and businesses in Vadodara. Alkaline, Copper & Zinc technology with expert local installation and AMC support.",
  url: "https://www.krivh2o.com",
  locale: "en_IN",
  language: "en",

  // Title templates
  titleTemplate: "%s | Kriv H2O — RO Water Purifier Vadodara",
  defaultTitle: "Kriv H2O — Best RO Water Purifier in Vadodara | Alkaline, Copper & Zinc Technology",

  // Local SEO
  local: {
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    countryCode: "IN",
    postalCodes: ["390020", "391410"],
    region: "Gujarat",
    branches: [
      {
        name: "Kriv H2O — Akota Branch",
        area: "Akota",
        city: "Vadodara",
        state: "Gujarat",
        postalCode: "390020",
        phone: "+919999999999",
        mapLink: "https://maps.google.com/?q=Akota+Vadodara",
      },
      {
        name: "Kriv H2O — Bhaili Branch",
        area: "Bhaili",
        city: "Vadodara",
        state: "Gujarat",
        postalCode: "391410",
        phone: "+919999999999",
        mapLink: "https://maps.google.com/?q=Bhaili+Vadodara",
      },
    ],
  },

  // Business info
  business: {
    type: "LocalBusiness",
    category: "Water Purification Service",
    subCategory: "RO Water Purifier Sales & Installation",
    established: "2021",
    rating: "4.9",
    reviewCount: "500",
    priceRange: "₹₹",
    phone: "+919999999999",
    email: "info@krivh2o.com",
    whatsapp: "919999999999",
  },

  // Primary SEO keywords
  keywords: {
    primary: [
      "RO purifier Vadodara",
      "water purifier Vadodara",
      "RO system Vadodara",
      "water purification Vadodara",
    ],
    secondary: [
      "commercial RO plant Vadodara",
      "water purifier installation Vadodara",
      "RO AMC service Vadodara",
      "alkaline water purifier Vadodara",
      "copper water purifier Vadodara",
      "zinc water purifier Vadodara",
      "best RO purifier Vadodara",
      "RO service near me Vadodara",
    ],
    brand: [
      "Kriv H2O",
      "Kriv H2O Private Limited",
      "MARVEL RO",
      "NINE RO",
      "CANIX RO",
      "BIZZ RO",
    ],
    longTail: [
      "RO water purifier installation Vadodara Gujarat",
      "commercial RO plant installation Vadodara",
      "annual maintenance contract RO purifier Vadodara",
      "alkaline copper zinc water purifier Gujarat",
      "industrial RO plant Vadodara",
      "hotel hospital RO water plant Vadodara",
    ],
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    siteName: "Kriv H2O Private Limited",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kriv H2O — Advanced RO Water Purification Systems, Vadodara",
      },
    ],
  },

  // Twitter card defaults
  twitter: {
    card: "summary_large_image",
    site: "@krivh2o",
    creator: "@krivh2o",
  },

  // Robots defaults
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Pages — used for sitemap + metadata generation
  pages: {
    home: {
      path: "/",
      title: "Best RO Water Purifier in Vadodara | Alkaline, Copper & Zinc Technology",
      description:
        "Kriv H2O offers advanced RO water purifiers with Alkaline, Copper & Zinc technology for homes and businesses in Vadodara. Fast installation, AMC support, 4.9★ rated.",
      keywords: "RO purifier Vadodara, water purifier Vadodara, alkaline water purifier, Kriv H2O",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    residential: {
      path: "/residential",
      title: "Residential RO Water Purifiers Vadodara | MARVEL, NINE, CANIX RO Systems",
      description:
        "Explore Kriv H2O residential RO systems — MARVEL, NINE, CANIX, and BIZZ RO. Alkaline, Copper & Zinc mineral technology. Fast installation across Vadodara.",
      keywords: "residential RO purifier Vadodara, home water purifier, MARVEL RO, NINE RO, CANIX RO Vadodara",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    commercial: {
      path: "/commercial",
      title: "Commercial RO Plant Vadodara | Industrial Water Purification Solutions",
      description:
        "High-capacity commercial RO plants for hotels, hospitals, factories, and offices in Vadodara. PLC automation, AMC support, expert installation by Kriv H2O.",
      keywords: "commercial RO plant Vadodara, industrial RO system, hotel hospital RO water plant, RO AMC service Vadodara",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    about: {
      path: "/about",
      title: "About Kriv H2O | Trusted Water Purification Company in Vadodara Since 2021",
      description:
        "Kriv H2O Private Limited — established in 2021 in Vadodara. Serving 500+ customers with advanced RO systems, local installation, and dependable AMC service.",
      keywords: "Kriv H2O Vadodara, water purification company Vadodara, RO company Gujarat",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    contact: {
      path: "/contact",
      title: "Contact Kriv H2O Vadodara | RO Purifier Consultation & Installation",
      description:
        "Get in touch with Kriv H2O for water purifier consultation, installation, AMC service, and commercial RO inquiries. Branches in Akota and Bhaili, Vadodara.",
      keywords: "contact Kriv H2O, water purifier dealer Vadodara, RO installation near me Vadodara",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type PageKey = keyof typeof siteConfig.pages;