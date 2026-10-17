"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Lordicon } from "./lordicon"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Professional AV &amp; Event Production Solutions in Cape Town
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              SOUND360 provides customised audio, lighting, LED screens, TV hire and event production solutions for
              corporate events, conferences, brand activations, private events, live productions and large-scale events.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              From intimate events for 10 people to productions for up to 10,000 guests, we design the technical solution
              around your venue, audience and event requirements.
            </p>
            <p className="text-xl md:text-2xl font-bold text-black max-w-4xl mx-auto leading-relaxed">
              Audio. Lighting. LED Screens. TV Hire. Structures. Production.
            </p>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              One professional team. A customised solution.
            </p>
            <Link href="/contact">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="flex items-center justify-center mx-auto mb-6">
                <Lordicon
                  src="https://cdn.lordicon.com/jectmwqf.json"
                  trigger="hover"
                  colors="primary:#222,secondary:#0084d1"
                  size={64}
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Built Around Your Event</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                No two events are the same. That&apos;s why we don&apos;t believe in one-size-fits-all equipment packages.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take into account your venue, audience size, event format, technical requirements and overall vision to
                recommend the right solution.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="flex items-center justify-center mx-auto mb-6">
                <Lordicon
                  src="https://cdn.lordicon.com/fqbvgezn.json"
                  trigger="hover"
                  colors="primary:#222,secondary:#0084d1"
                  size={64}
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Trusted by Top Brands</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From corporate events to live shows, SOUND360 is the partner behind successful productions across South
                Africa.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="flex items-center justify-center mx-auto mb-6">
                <Lordicon
                  src="https://cdn.lordicon.com/qhviklyi.json"
                  trigger="hover"
                  colors="primary:#222,secondary:#0084d1"
                  size={64}
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">From 10 to 10,000 Guests</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you&apos;re hosting a small corporate presentation, private event, conference or large-scale
                production, SOUND360 can scale the equipment and technical support to suit your event.
              </p>
            </div>
          </div>

          {/* More Than Equipment */}
          <div className="text-center mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">More Than Equipment</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From delivery and setup to full on-site technical management, our professional technicians are there to run
              your event from start to finish, ensuring everything operates seamlessly throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
