import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CalendarClock, ChevronRight, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"
import { faqGroups, faqSchema } from "@/lib/faqs"

export const metadata: Metadata = {
  title: "Event AV & Production FAQs | SOUND360 Cape Town",
  description:
    "Answers to common questions about booking SOUND360 in Cape Town: notice periods, quotes, technicians, LED screens, TV hire, sound and lighting.",
  openGraph: {
    title: "Event AV & Production FAQs | SOUND360 Cape Town",
    description:
      "How much notice we need, what's included, LED screens, sound systems, lighting and event production: common questions answered.",
    url: "https://sound360.co.za/faq",
    siteName: "SOUND360",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://sound360.co.za/faq",
  },
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

// FAQPage structured data so search engines and AI answer engines can read the Q&As directly.
const schema = faqSchema(faqGroups.flatMap((g) => g.faqs))

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        {/* Hero (same style as the service pages) */}
        <section className="relative isolate overflow-hidden bg-black text-white bg-[url('/images/section-background.png')] bg-cover bg-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/50" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
                <ol className="flex items-center gap-1">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="text-white" aria-current="page">
                    FAQ
                  </li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 max-w-3xl">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                Planning an event and not sure exactly what equipment or technical support you need? Here are some of
                the questions we are asked most often. If you don&apos;t see your question below, get in touch with our
                team and we&apos;ll be happy to help.
              </p>
            </div>
          </div>
        </section>

        {/* Topics + questions */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
              {/* Topic navigation: sticky sidebar on desktop, scrollable chips on mobile */}
              <aside className="min-w-0 lg:sticky lg:top-36">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Topics</p>
                <nav aria-label="FAQ topics">
                  <ul className="flex lg:flex-col gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible">
                    {faqGroups.map((group) => (
                      <li key={group.heading} className="flex-shrink-0">
                        <a
                          href={`#${slug(group.heading)}`}
                          className="block rounded-full lg:rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-sound360 hover:text-sound360 transition-colors"
                        >
                          {group.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6 lg:mt-8 rounded-2xl bg-black text-white p-6">
                  <CalendarClock className="w-7 h-7 text-sound360 mb-3" aria-hidden />
                  <h2 className="text-lg font-bold mb-2">When should you book?</h2>
                  <p className="text-sm text-white/80 leading-relaxed">
                    We recommend booking approximately two weeks in advance. We can assist with last-minute bookings
                    where availability allows.
                  </p>
                </div>
              </aside>

              <div className="min-w-0 space-y-12 md:space-y-16">
                {faqGroups.map((group) => (
                  <div key={group.heading} id={slug(group.heading)} className="scroll-mt-40">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-5">{group.heading}</h2>
                    <FaqAccordion faqs={group.faqs} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA (same as the service pages) */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-black text-white px-8 py-12 md:px-14 md:py-16">
              <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-sound360/30 blur-3xl" />
              <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have a Question?</h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Tell us about your event and our team will recommend the right technical solution.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-sound360 hover:bg-sound360-dark text-white px-8 h-12 rounded-xl text-base group"
                    >
                      Get a Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="tel:+27671114362" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-black px-8 h-12 rounded-xl text-base"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      067 111 4362
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
