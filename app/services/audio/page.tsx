import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { getService } from "@/lib/services"

// Page content lives in lib/services.ts; layout lives in components/service-page.tsx.
export const metadata: Metadata = {
  title: "Professional Audio & Sound Hire in Cape Town | SOUND360",
  description:
    "Customised sound system hire in Cape Town for corporate events, conferences, private events and festivals, with professional technicians on site.",
  keywords: [
    "professional audio Cape Town",
    "sound system rental",
    "audio equipment hire",
    "digital mixing console",
    "wireless microphones",
    "line array speakers",
    "corporate audio",
    "wedding sound systems",
    "concert audio",
    "event sound rental",
  ].join(", "),
  openGraph: {
    title: "Professional Audio & Sound Hire in Cape Town | SOUND360",
    description: "Customised sound system hire in Cape Town for events of all sizes, designed around your venue and audience.",
    url: "https://sound360.co.za/services/audio",
    siteName: "Sound360",
    images: [
      {
        url: "/images/audio2.jpg",
        width: 1200,
        height: 630,
        alt: "Professional sound system set up for an event in Cape Town by SOUND360",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Audio & Sound Hire in Cape Town | SOUND360",
    description: "Customised sound system hire in Cape Town for events of all sizes, designed around your venue and audience.",
    images: ["/images/audio2.jpg"],
  },
  alternates: {
    canonical: "https://sound360.co.za/services/audio",
  },
}

export default function AudioPage() {
  return <ServicePage service={getService("audio")} />
}
