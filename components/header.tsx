"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { services as allServices } from "@/lib/services"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = allServices.map(({ name, href }) => ({ name, href }))

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+27671114362"
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>067 111 4362</span>
            </a>
            <a
              href="mailto:info@sound360.co.za"
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@sound360.co.za</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Professional Event Solutions Across Cape Town</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/sound360-logo.png"
              alt="SOUND360 logo"
              width={250}
              height={100}
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    {/* Dropdown Wrapper keeps hover active */}
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`font-medium transition-all duration-200 hover:scale-105 flex items-center ${
                          isHomePage && !isScrolled
                            ? "text-white/90 hover:text-sound360"
                            : "text-gray-700 hover:text-sound360"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </Link>

                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-4 z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-6 py-3 text-gray-700 hover:text-sound360 hover:bg-gray-50 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-all duration-200 hover:scale-105 ${
                      isHomePage && !isScrolled
                        ? "text-white/90 hover:text-sound360"
                        : "text-gray-700 hover:text-sound360"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${
              isHomePage && !isScrolled ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 bg-white/95 backdrop-blur-lg rounded-2xl mt-2 shadow-xl border border-gray-200">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-sound360 font-medium py-2 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-gray-600 py-1 transition-colors block text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-sound360 hover:bg-sound360-dark text-white mt-4 rounded-full">
                  Get Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
