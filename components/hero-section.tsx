"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slider data - add custom text or leave empty to use primary text
  const slides = [
    {
      id: 1,
      image: "/images/audio1.jpg",
      title: "SOUND360", // Primary text - always shown
      subtitle: "",
      description: "",
    },
    {
      id: 2,
      image: "/images/audio2.jpg",
      title: "SOUND360", // Primary text - always shown
      subtitle: "",
      description: "",
    },
  
  ]

  // Primary/default content
  const primaryContent = {
    title: "SOUND360",
    subtitle: "",
    description: "",
  }

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const getCurrentContent = () => {
    const slide = slides[currentSlide]
    return {
      title: slide.title || primaryContent.title,
      subtitle: slide.subtitle || primaryContent.subtitle,
      description: slide.description || primaryContent.description,
    }
  }

  const content = getCurrentContent()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={index === 0 ? "SOUND360 professional audio and event production setup in Cape Town" : "SOUND360 event sound and lighting production in Cape Town"}
              fill
              className="object-cover scale-105"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="transition-all duration-1000 ease-in-out">
          <p className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">{content.title}</span>
            {content.subtitle && (
              <>
                <br />
                <span className="text-sound360 text-4xl md:text-5xl lg:text-6xl">{content.subtitle}</span>
              </>
            )}
          </p>

          {content.description && (
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              {content.description}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-sound360 hover:text-white hover:border-sound360 px-8 py-4 rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-sound360 hover:text-white hover:border-sound360 px-8 py-4 rounded-xl bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-sound360 scale-125" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-sound360 transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}
