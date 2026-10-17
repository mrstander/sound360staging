"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { services as allServices } from "@/lib/services"


export function ServicesSection() {
  const services = allServices.map((s) => ({
    name: s.name,
    description: s.summary,
    features: s.features,
    image: s.cardImage,
    href: s.href,
    cta: s.cta,
  }))

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive event production services, tailored to your vision and powered by professional-grade
              equipment and expert execution.
            </p>
          </div>

          {/* Services Grid - First 4 services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Service Image */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.name} for events in Cape Town`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    
                  </div>
                </div>

                <div className="p-8">
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={service.href}>
                    <Button
                      
                      className="bg-black hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {service.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 5th Service - Full Width Layout on Desktop, Card Layout on Mobile */}
          {services.length > 4 && (
            <>
              {/* Desktop Layout - Full Width */}
              <div className="hidden lg:block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                  {/* Text Content - Left Side */}
                  <div className="p-12 text-center lg:text-left flex flex-col justify-center">
                    <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                     
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">{services[4].name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{services[4].description}</p>

                    {/* Features */}
                    {services[4].features[0] && (
                      <ul className="space-y-3 mb-8">
                        {services[4].features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-600 justify-center lg:justify-start"
                          >
                            <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA Button - Under Text */}
                    <div className="mt-auto">
                      <Link href={services[4].href}>
                        <Button
                          variant="outline"
                          className="bg-black hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {services[4].cta}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Image - Right Side */}
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                    <Image
                      src={services[4].image || "/placeholder.svg"}
                      alt="Dance floor hire for events in Cape Town"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Layout - Same as Other Services */}
              <div className="lg:hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    {/* Service Image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={services[4].image || "/placeholder.svg"}
                        alt="Dance floor hire for events in Cape Town"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-sound360/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                         
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                        {services[4].name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{services[4].description}</p>

                      {/* Features */}
                      {services[4].features[0] && (
                        <ul className="space-y-2 mb-6">
                          {services[4].features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA */}
                      <Link href={services[4].href}>
                        <Button
                        
                          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg hover:text-white hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {services[4].cta}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
