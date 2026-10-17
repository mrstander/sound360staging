import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About SOUND360 | Cape Town Event Production & AV Company",
  description:
    "SOUND360 is a Cape Town event production and AV company, founded in 2021, delivering customised audio, lighting, LED screens and TV hire at 500+ events.",
  keywords: [
    "about Sound360",
    "event production company Cape Town",
    "professional audio specialists",
    "lighting design experts",
    "South African event services",
    "corporate event production",
    "wedding specialists",
    "concert production",
  ].join(", "),
  openGraph: {
    title: "About SOUND360 | Cape Town Event Production & AV Company",
    description: "Cape Town-based event production and AV company, founded in 2021, with more than 500 events delivered.",
    url: "https://sound360.co.za/about",
    siteName: "Sound360",
    images: [
      {
        url: "/images/hero1.webp",
        width: 1200,
        height: 630,
        alt: "SOUND360 event production team in Cape Town",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SOUND360 | Cape Town Event Production & AV Company",
    description: "Cape Town-based event production and AV company, founded in 2021, with more than 500 events delivered.",
    images: ["/images/hero1.webp"],
  },
  alternates: {
    canonical: "https://sound360.co.za/about",
  },
}

export default function AboutPage() {
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
                About <span className="text-sound360">Sound360</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                SOUND360 is a Cape Town-based event production and AV company providing customised audio, lighting,
                LED screens, TV hire, event structures and technical production solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Story</h2>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      We work across corporate events, conferences, brand activations, private events, live productions
                      and large-scale events.
                    </p>
                    <p>
                      From small events requiring a simple, professional setup to productions for thousands of guests,
                      our approach remains the same: understand what the event needs and build the right technical
                      solution around it.
                    </p>
                    <p>
                      Founded in 2021, SOUND360 began as a small audio rental company with a big vision: to transform
                      events across South Africa with professional-grade equipment and exceptional service.
                    </p>
                    <p>
                      Over the years, we've grown from a two-person operation to a full-service event production
                      company, expanding our capabilities to include lighting design, visual solutions, and complete
                      event production services.
                    </p>
                    <p>
                      Today, we're proud to have worked on more than 500 events, from intimate corporate gatherings to
                      large-scale festivals, always maintaining our commitment to excellence and innovation.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/audio2.jpg"
                      alt="SOUND360 team setting up professional event audio equipment in Cape Town"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
