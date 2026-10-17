import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "SOUND360 | Professional AV & Event Production in Cape Town",
  description:
    "Customised audio, lighting, LED screens, TV hire and event production in Cape Town for corporate, private and large-scale events, from 10 to 10,000 guests.",
  keywords: [
    "event production Cape Town",
    "professional audio rental",
    "stage lighting South Africa",
    "LED video walls",
    "event management",
    "sound equipment hire",
    "lighting design",
    "corporate events",
    "wedding production",
    "concert production",
    "Sound360",
  ].join(", "),
  openGraph: {
    title: "SOUND360 | Professional AV & Event Production in Cape Town",
    description:
      "Audio, lighting, LED screens, TV hire, structures and production. One professional team, a customised solution.",
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
    description:
      "Audio, lighting, LED screens, TV hire, structures and production. One professional team, a customised solution.",
    images: ["/images/hero1.webp"],
  },
  alternates: {
    canonical: "https://sound360.co.za",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LogoCarousel />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
