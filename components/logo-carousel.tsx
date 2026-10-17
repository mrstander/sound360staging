"use client"

import Image from "next/image"

export function LogoCarousel() {
  // Brands SOUND360 works with. Logos live in /public/images/brands/.
  // A brand with `src: null` is skipped in the scroller (but still listed for screen readers and search engines).
  const brands: { name: string; src: string | null; width: number; height: number }[] = [
    { name: "Leyard", src: "/images/brands/leyard.png", width: 535, height: 77 },
    { name: "Shure", src: "/images/brands/shure.png", width: 437, height: 160 },
    { name: "RCF", src: "/images/rcf.jpeg", width: 100, height: 100 },
    { name: "Electro-Voice", src: "/images/ev.png", width: 80, height: 120 },
    { name: "Allen & Heath", src: "/images/brands/allen-heath.png", width: 1176, height: 160 },
    { name: "Chauvet", src: "/images/brands/chauvet.png", width: 241, height: 160 },
    { name: "ADJ", src: "/images/brands/adj.png", width: 220, height: 160 },
    { name: "grandMA3", src: "/images/brands/grandma3.png", width: 283, height: 160 },
    { name: "Prolyte", src: "/images/brands/prolyte.png", width: 552, height: 107 },
    { name: "BeamZ Pro", src: "/images/brands/beamz-pro.png", width: 202, height: 32 },
    { name: "AlphaTheta", src: "/images/brands/alphatheta.png", width: 542, height: 120 },
    { name: "Vonyx", src: "/images/brands/vonyx.png", width: 387, height: 63 },
    { name: "Epson", src: "/images/brands/epson.png", width: 403, height: 140 },
    { name: "Pioneer DJ", src: "/images/pioneer-dj.png", width: 200, height: 220 },
    { name: "Canon", src: "/images/brands/canon.png", width: 670, height: 140 },
    { name: "Samson", src: "/images/samson.png", width: 160, height: 60 },
    { name: "DJ Power", src: "/images/brands/dj-power.png", width: 310, height: 160 },
    // Previously listed brands, not in the new list from the client. Delete if no longer used.
    { name: "Samsung", src: "/images/samsung.png", width: 140, height: 100 },
    { name: "Yamaha", src: "/images/yamaha.png", width: 160, height: 60 },
  ]

  // Wide logos get a shorter max height so every logo looks roughly the same size in the scroller.
  const heightClass = (width: number, height: number) => {
    const ratio = width / height
    if (ratio >= 6) return "max-h-7"
    if (ratio >= 4) return "max-h-9"
    if (ratio >= 2.5) return "max-h-10"
    return "max-h-12"
  }

  const logos = brands.filter((b): b is typeof b & { src: string } => Boolean(b.src))

  // Triple the logos for seamless infinite scroll
  const infiniteLogos = [...logos, ...logos]

  return (
    <section className="py-5 bg-sound360 overflow-hidden" aria-labelledby="brands-heading">
      <div className="container mx-auto px-4">
        <h2 id="brands-heading" className="sr-only">
          Professional AV and event production brands SOUND360 works with
        </h2>
        <p className="sr-only">SOUND360 works with brands including {brands.map((b) => b.name).join(", ")}.</p>


        {/* Continuous Scrolling Logo Carousel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sound360 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sound360 to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll-left space-x-8">
            {infiniteLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6  transition-all duration-100 hover:scale-105 flex items-center justify-center min-h-[50px]"
                style={{ minWidth: "50px" }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo, professional event equipment used by SOUND360`}
                  width={logo.width}
                  height={logo.height}
                  className={`${heightClass(logo.width, logo.height)} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
