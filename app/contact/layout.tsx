import type { Metadata } from "next"

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact SOUND360 | Get an Event AV Quote in Cape Town",
  description:
    "Get a quote for audio, lighting, LED screens, TV hire, event production or dance floors in Cape Town. Not sure what you need? We'll advise.",
  openGraph: {
    title: "Contact SOUND360 | Get an Event AV Quote in Cape Town",
    description: "Tell us about your event and our team will recommend and quote the right technical solution.",
    url: "https://sound360.co.za/contact",
    siteName: "SOUND360",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://sound360.co.za/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
