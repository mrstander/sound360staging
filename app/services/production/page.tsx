import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { getService } from "@/lib/services"

// Page content lives in lib/services.ts; layout lives in components/service-page.tsx.
export const metadata: Metadata = {
  title: "Full Event Production, Rigging & Trussing in Cape Town | SOUND360",
  description:
    "Complete event production in Cape Town: audio, lighting, LED screens, TV hire, rigging, trussing and structures, with technicians from load-in to load-out.",
  openGraph: {
    title: "Full Event Production in Cape Town | SOUND360",
    description:
      "One supplier for audio, lighting, LED screens, TV hire, structures and technical production, managed from setup to load-out.",
    url: "https://sound360.co.za/services/production",
    siteName: "SOUND360",
    images: [
      {
        url: "/images/events/Event3.jpg",
        width: 1200,
        height: 630,
        alt: "Full event production setup in Cape Town by SOUND360",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://sound360.co.za/services/production",
  },
}

export default function ProductionPage() {
  return <ServicePage service={getService("production")} />
}
