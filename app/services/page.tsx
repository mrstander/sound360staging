import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Volume2, Lightbulb, Monitor, Settings, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { services as allServices } from "@/lib/services"

export const metadata: Metadata = {
  title: "Event AV Services in Cape Town | Audio, Lighting & LED | SOUND360",
  description:
    "Event services in Cape Town: professional audio, lighting, LED screens and TV hire, full event production with rigging and trussing, and dance floors.",
  keywords: [
    "event services Cape Town",
    "professional audio rental",
    "stage lighting hire",
    "LED video walls",
    "event production services",
    "rigging and trussing",
    "livestreaming services",
    "corporate event production",
    "wedding services",
    "concert production",
    "visual solutions",
  ].join(", "),
  openGraph: {
    title: "Event AV Services in Cape Town | SOUND360",
    description:
      "Professional audio, lighting, LED screens, TV hire, event production and dance floors in Cape Town.",
    url: "https://sound360.co.za/services",
    siteName: "Sound360",
    images: [
      {
        url: "/images/audio2.jpg",
        width: 1200,
        height: 630,
        alt: "Sound360 Professional Event Services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event AV Services in Cape Town | SOUND360",
    description:
      "Professional audio, lighting, LED screens, TV hire, event production and dance floors in Cape Town.",
    images: ["/images/audio2.jpg"],
  },
  alternates: {
    canonical: "https://sound360.co.za/services",
  },
}

export default function ServicesPage() {
  const icons = { audio: Volume2, lighting: Lightbulb, visual: Monitor, production: Settings, dancefloor: Sparkles }
  const details: Record<string, string> = {
    audio: "From intimate presentations for 10 people to large-scale events, we design the sound system around your venue, audience and event format.",
    lighting: "From subtle ambient lighting to dynamic stage effects, every setup is individually programmed and controlled by our professional technicians.",
    visual: "From individual TV screens to completely customised LED screen configurations, we build a visual solution around your event, venue and audience.",
    production: "Audio, lighting, LED screens, TV hire, rigging, trussing and event structures from one professional team.",
    dancefloor: "",
  }
  const services = allServices.map((s) => ({
    name: s.name,
    icon: icons[s.slug],
    description: s.summary,
    features: s.features,
    image: s.cardImage,
    href: s.href,
    cta: s.cta,
    details: details[s.slug] ?? "",
  }))

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="text-sound360">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Customised audio, lighting, LED screens, TV hire and event production solutions for corporate events, conferences, brand activations, private events, live productions and large-scale events.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16">
                {services.map((service, index) => {
                  const Icon = service.icon
                  const isEven = index % 2 === 0
                  return (
                    <div
                      key={index}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                    >
                      <div className={!isEven ? "lg:col-start-2" : ""}>
                        <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{service.name}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <p className="text-gray-700 mb-8 leading-relaxed">{service.details}</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link href={service.href}>
                          <Button
                            variant="outline"
                            className="bg-black hover:bg-gray-800 text-white hover:text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {service.cta}
                          </Button>
                        </Link>
                      </div>

                      <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={`${service.name} for events in Cape Town`}
                            width={600}
                            height={450}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
