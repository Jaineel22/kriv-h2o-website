import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/seo";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
} from "@/lib/metadata";

// ✅ Re‑add the global UI components
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import WhatsAppFAB from "../components/global/WhatsAppFAB";

// ─── Font ─────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

// ─── Root Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },

  description: siteConfig.description,

  keywords: [
    ...siteConfig.keywords.primary,
    ...siteConfig.keywords.secondary,
    ...siteConfig.keywords.brand,
  ].join(", "),

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.openGraph.siteName,
    locale: siteConfig.openGraph.locale,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [...siteConfig.openGraph.images],
  },

  twitter: {
    card: siteConfig.twitter.card,
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.creator,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.openGraph.images[0].url],
  },

  robots: siteConfig.robots,

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2563eb" }],
  },

  manifest: "/site.webmanifest",
  category: siteConfig.business.category,

  other: {
    "msapplication-TileColor": "#2563eb",
    "geo.region": "IN-GJ",
    "geo.placename": siteConfig.local.city,
    "geo.position": "22.3072;73.1812",
    ICBM: "22.3072, 73.1812",
    "business:contact_data:street_address": "Akota, Vadodara",
    "business:contact_data:locality": siteConfig.local.city,
    "business:contact_data:region": siteConfig.local.state,
    "business:contact_data:postal_code": "390020",
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": siteConfig.business.phone,
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang={siteConfig.language} className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>

      <body
        className={`${inter.className} antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900`}
        suppressHydrationWarning
      >
        {/* Skip navigation link – targets main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Skip to main content
        </a>

        {/* Global navigation */}
        <Navbar />

        {/* Main content wrapper */}
        <div id="main-content" className="flex flex-col min-h-screen">
          {children}
        </div>

        {/* Footer & Floating WhatsApp button */}
        <Footer />
        <WhatsAppFAB />

        {/* JSON‑LD schemas */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}