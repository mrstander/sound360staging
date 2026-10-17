import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { getService } from "@/lib/services"

// Page content lives in lib/services.ts; layout lives in components/service-page.tsx.
export const metadata: Metadata = {
  title: "Professional Event Lighting Hire in Cape Town | SOUND360",
  description:
    "Custom-programmed event lighting in Cape Town, from ambient lighting to dynamic stage effects, indoors and outdoors, run by professional technicians.",
  openGraph: {
    title: "Professional Event Lighting in Cape Town | SOUND360",
    description:
      "Customised lighting designed around your venue, event and vision, programmed and controlled by our professional technicians.",
    url: "https://sound360.co.za/services/lighting",
    siteName: "SOUND360",
    images: [
      {
        url: "/images/lighting/light4.jpg",
        width: 1200,
        height: 630,
        alt: "Professional event lighting in Cape Town by SOUND360",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://sound360.co.za/services/lighting",
  },
}

export default function LightingPage() {
  return <ServicePage service={getService("lighting")} />
}
