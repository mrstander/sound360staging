import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarClock, CheckCircle2, ChevronRight, MapPin, Phone, Users, Wrench } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"
import { getService, type Service, type ServiceBlock } from "@/lib/services"
import { faqGroups, faqSchema, faqsForService } from "@/lib/faqs"

const SITE = "https://sound360.co.za"

const quickFacts = [
  { icon: Users, title: "10 to 10,000 guests", text: "Scaled to your event" },
  { icon: MapPin, title: "Cape Town based", text: "Events across South Africa" },
  { icon: Wrench, title: "Technicians on site", text: "Setup, operation & load-out" },
  { icon: CalendarClock, title: "Book ~2 weeks ahead", text: "Last-minute where available" },
]

function Checklist({ items, links }: { items: string[]; links?: Record<string, string> }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <CheckCircle2 className="w-5 h-5 text-sound360 flex-shrink-0 mt-0.5" aria-hidden />
          {links?.[item] ? (
            <Link href={links[item]} className="underline decoration-sound360/40 underline-offset-4 hover:text-sound360">
              {item}
            </Link>
          ) : (
            <span>{item}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

function BlockText({ block }: { block: ServiceBlock }) {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">{block.heading}</h2>
      <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
        {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
      </div>
      {block.list && (
        <div className="mt-6">
          {block.listIntro && <p className="font-semibold text-black mb-4">{block.listIntro}</p>}
          <Checklist items={block.list} links={block.links} />
        </div>
      )}
      {block.outro?.map((p) => (
        <p key={p} className="mt-6 text-lg text-gray-600 leading-relaxed">
          {p}
        </p>
      ))}
    </>
  )
}

export function ServicePage({ service }: { service: Service }) {
  const url = `${SITE}${service.href}`
  const faqs = [
    ...faqsForService(service.slug),
    ...faqGroups.flatMap((g) => g.faqs).filter((f) => service.extraFaqs?.includes(f.question)),
  ]
  const related = service.related.map(getService)

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.hero.h1,
      serviceType: service.name,
      description: service.intro[0],
      url,
      image: `${SITE}${service.hero.image}`,
      provider: { "@type": "LocalBusiness", name: "SOUND360", url: SITE, telephone: "+27671114362" },
      areaServed: [
        { "@type": "City", name: "Cape Town" },
        { "@type": "Country", name: "South Africa" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: service.name, item: url },
      ],
    },
    ...(faqs.length ? [faqSchema(faqs)] : []),
  ]

  return (
    <>
      <Header />
      <main className="pt-32">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-black text-white">
          <Image
            src={service.hero.image}
            alt={service.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover -z-10 opacity-70"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
            <div className="max-w-6xl mx-auto">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
                <ol className="flex flex-wrap items-center gap-1">
                  <li>
                    <Link href="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="text-white" aria-current="page">
                    {service.name}
                  </li>
                </ol>
              </nav>
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">{service.hero.h1}</h1>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">{service.hero.lead}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-sound360 hover:bg-sound360-dark text-white px-8 h-12 rounded-xl text-base group"
                    >
                      {service.quoteCta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="tel:+27671114362">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-black px-8 h-12 rounded-xl text-base"
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

        {/* Quick facts */}
        <section className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4">
            <ul className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-gray-200 lg:divide-x">
              {quickFacts.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-center gap-3 py-6 lg:px-6 first:lg:pl-0">
                  <Icon className="w-7 h-7 text-sound360 flex-shrink-0" aria-hidden />
                  <div>
                    <p className="font-semibold text-black leading-tight">{title}</p>
                    <p className="text-sm text-gray-500">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-widest text-sound360 mb-3">{service.name}</p>
                <div className="space-y-5 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  {service.intro.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
              <aside className="lg:col-span-2 bg-gray-50 border border-gray-100 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-black mb-5">What we supply</h2>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-sound360 flex-shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white h-12 rounded-xl text-base">
                    {service.quoteCta}
                  </Button>
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* Detail blocks: alternating image / text rows; blocks without a photo become a dark callout */}
        <section className="pb-8 md:pb-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
              {service.blocks.map((block, i) =>
                block.image ? (
                  <div key={block.heading} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                          src={block.image.src}
                          alt={block.image.alt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <BlockText block={block} />
                    </div>
                  </div>
                ) : (
                  <div
                    key={block.heading}
                    className="relative overflow-hidden rounded-3xl bg-black text-white p-8 md:p-14"
                  >
                    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sound360/30 blur-3xl" />
                    <div className="relative max-w-3xl">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{block.heading}</h2>
                      <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                        {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">Recent {service.name} Setups</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                {service.gallery.map((g) => (
                  <div key={g.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {faqs.length > 0 && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 lg:gap-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Common Questions</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Quick answers about {service.name.toLowerCase()} for your event.
                  </p>
                  <Link href="/faq" className="inline-flex items-center font-semibold text-sound360 hover:underline">
                    See all FAQs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <FaqAccordion faqs={faqs} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">Complete Your Event</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={r.href}
                    className="group rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={r.cardImage}
                        alt={`${r.name} for events in Cape Town`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-sound360 transition-colors">
                        {r.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{r.summary}</p>
                      <span className="inline-flex items-center font-semibold text-black">
                        {r.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="pb-16 md:pb-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-black text-white px-8 py-12 md:px-14 md:py-16">
              <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-sound360/30 blur-3xl" />
              <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">When Should You Book?</h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    While we can assist with last-minute bookings where availability allows, we recommend booking
                    approximately two weeks in advance. This gives us sufficient time to plan your requirements, secure
                    equipment and ensure we can deliver the best possible solution for your event.
                  </p>
                </div>
                <div className="flex lg:justify-end">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-sound360 hover:bg-sound360-dark text-white px-8 h-12 rounded-xl text-base group"
                    >
                      Get a Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
