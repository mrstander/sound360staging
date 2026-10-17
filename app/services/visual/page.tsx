import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { getService } from "@/lib/services"

// Page content lives in lib/services.ts; layout lives in components/service-page.tsx.
export const metadata: Metadata = {
  title: "LED Screen & TV Hire in Cape Town | Visual Solutions | SOUND360",
  description:
    "LED screen hire, custom LED displays and TV hire in Cape Town for corporate events, conferences, brand activations, live events and sports screenings.",
  openGraph: {
    title: "LED Screen & TV Hire in Cape Town | SOUND360",
    description:
      "Professional LED screens, customised LED displays and TV hire for events in Cape Town, set up and operated by our technicians.",
    url: "https://sound360.co.za/services/visual",
    siteName: "SOUND360",
    images: [
      {
        url: "/images/visual/visual1.jpg",
        width: 1200,
        height: 630,
        alt: "LED screen hire for a corporate event in Cape Town",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://sound360.co.za/services/visual",
  },
}

export default function VisualPage() {
  return <ServicePage service={getService("visual")} />
}
