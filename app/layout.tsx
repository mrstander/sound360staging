import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SOUND360 | Professional AV & Event Production in Cape Town",
  description:
    "Customised audio, lighting, LED screens, TV hire and event production solutions in Cape Town for corporate events, conferences, brand activations, private events and large-scale events.",
  keywords:
    "sound equipment, lighting, audio visual, event production, rigging, trussing, livestreaming, South Africa, professional audio, stage lighting, event services",
  authors: [{ name: "Sound360" }],
  creator: "Sound360",
  publisher: "Sound360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sound360.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SOUND360 | Professional AV & Event Production in Cape Town",
    description:
      "Customised audio, lighting, LED screens, TV hire and event production solutions in Cape Town.",
    url: "https://sound360.co.za",
    siteName: "Sound360",
    images: [
      {
        url: "/images/hero1.webp",
        width: 1200,
        height: 630,
        alt: "SOUND360 professional AV and event production in Cape Town",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOUND360 | Professional AV & Event Production in Cape Town",
    description: "Customised audio, lighting, LED screens, TV hire and event production solutions in Cape Town.",
    images: ["/images/hero1.webp"],
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9SZZGEC3SL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9SZZGEC3SL');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SOUND360",
              description:
                "Cape Town-based event production and AV company providing customised audio, lighting, LED screens, TV hire, event structures and technical production solutions.",
              foundingDate: "2021",
              url: "https://sound360.co.za",
              telephone: "+27671114362",
              email: "info@sound360.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cape Town",
                addressRegion: "Western Cape",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.9249,
                longitude: 18.4241,
              },
              openingHours: "Mo-Fr 08:00-17:00",
              sameAs: [
                "https://www.instagram.com/sound_360_sa/",
                "https://www.facebook.com/profile.php?id=100064243863594",
              ],
              areaServed: [
                { "@type": "City", name: "Cape Town" },
                { "@type": "Country", name: "South Africa" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Event Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Professional Audio Hire",
                      url: "https://sound360.co.za/services/audio",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Professional Event Lighting",
                      url: "https://sound360.co.za/services/lighting",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "LED Screen & TV Hire",
                      url: "https://sound360.co.za/services/visual",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full Event Production, Rigging & Trussing",
                      url: "https://sound360.co.za/services/production",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dance Floor Hire",
                      url: "https://sound360.co.za/services/dancefloor",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
