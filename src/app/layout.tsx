import type { Metadata, Viewport } from "next";

import { OpenPanelComponent } from "@openpanel/nextjs";
import "./globals.css";

import Link from "next/link";
import Script from "next/script";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Providers from "@/components/providers";

import { helvetica } from "@/assets/fonts";

import { BASE_URL } from "@/data/site-config";
import { isOpenPanelEnabled, openPanelApiUrl, openPanelClientId } from "@/lib/openpanel-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Direct Logic Systems - Leading IT Solutions & Digital Innovation in Dubai, UAE",

  description:
    "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation in Dubai, UAE. 40+ years of expertise in IT infrastructure, cloud solutions, security, and custom software development.",
  keywords: [
    "IT solutions Dubai",
    "digital innovation UAE",
    "cloud computing Dubai",
    "cybersecurity UAE",
    "custom software development",
    "web development Dubai",
    "digital marketing UAE",
    "trading solutions",
    "IT consulting Dubai",
    "infrastructure management UAE",
    "business technology solutions",
    "Dubai IT company",
    "UAE technology services",
  ],
  authors: [{ name: "Direct Logic Systems" }],
  creator: "Direct Logic Systems",
  publisher: "Direct Logic Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Direct Logic Systems - Leading IT Solutions & Digital Innovation in Dubai, UAE",
    description:
      "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation in Dubai, UAE. 40+ years of expertise in IT infrastructure, cloud solutions, security, and custom software development.",
    siteName: "Direct Logic Systems",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Logic Systems - IT Solutions & Digital Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Logic Systems - Leading IT Solutions & Digital Innovation in Dubai, UAE",
    description:
      "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation in Dubai, UAE.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "41GGxNFJqPyT0BKVNEwJ59WTP2PXdOTEtRqQSwXw9kU",
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("no-scrollbar scroll-smooth")} lang="en">
      <head>
        {/* Structured Data */}
        <Script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Direct Logic Systems",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              description:
                "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation in Dubai, UAE.",
              foundingDate: "1978",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Oud Metha Road",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-4334-8774",
                contactType: "customer service",
                availableLanguage: "English",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              },
              sameAs: ["https://linkedin.com/company/direct-logic-systems", "https://twitter.com/directlogicsys"],
              areaServed: {
                "@type": "Country",
                name: "United Arab Emirates",
              },
              serviceArea: {
                "@type": "City",
                name: "Dubai",
              },
            }),
          }}
          id="structured-data"
          type="application/ld+json"
        />
      </head>
      <body className={cn("antialiased", helvetica.className)}>
        {isOpenPanelEnabled ? (
          <OpenPanelComponent
            clientId={openPanelClientId}
            trackOutgoingLinks
            trackScreenViews
            {...(openPanelApiUrl ? { apiUrl: openPanelApiUrl } : {})}
          />
        ) : null}
        <Providers>
          <Link
            className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-background focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:px-4 focus:py-2"
            href="#main-content"
          >
            Skip to main content
          </Link>

          <Navbar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
