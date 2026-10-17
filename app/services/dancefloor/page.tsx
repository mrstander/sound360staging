import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { getService } from "@/lib/services"

// Page content lives in lib/services.ts; layout lives in components/service-page.tsx.
export const metadata: Metadata = {
  title: "Custom Dance Floor Hire in Cape Town | SOUND360",
  description:
    "Custom-sized dance floor hire in Cape Town for indoor and outdoor events, with underflooring for grass. Delivery, installation and breakdown included.",
  openGraph: {
    title: "Custom Dance Floor Hire in Cape Town | SOUND360",
    description:
      "Dance floors customised to your venue and event, professionally delivered, installed and removed.",
    url: "https://sound360.co.za/services/dancefloor",
    siteName: "SOUND360",
    images: [
      {
        url: "/images/dancefloor/dance1.jpg",
        width: 1200,
        height: 630,
        alt: "Dance floor hire for an event in Cape Town",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://sound360.co.za/services/dancefloor",
  },
}

export default function DancefloorPage() {
  return <ServicePage service={getService("dancefloor")} />
}
