import Link from "next/link"
import Image from "next/image"
import { Mail, Instagram, Facebook, Linkedin, MapPin } from "lucide-react"
import { services as allServices } from "@/lib/services"

export function Footer() {
  const services = allServices.map(({ name, href }) => ({ name, href }))

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/contact" },
  ]

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/images/sound360-logo.png"
                  alt="SOUND360 logo"
                  width={170}
                  height={90}
                />
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Cape Town-based event production and AV company providing
              customised audio, lighting, LED screens, TV hire, event
              structures and technical production solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3"></div>

              <div className="flex items-center space-x-3">
                <div className="bg-sound360 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">info@sound360.co.za</p>
                  <p className="text-sm text-gray-400">
                    Quick Response Guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-sound360 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Cape Town, South Africa</p>
                  <p className="text-sm text-gray-400">
                    Nationwide Service Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-sky-600 transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-sound360 rounded-full mr-3 group-hover:bg-sky-600 transition-colors"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sky-600 transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-sound360 rounded-full mr-3 group-hover:bg-sky-600 transition-colors"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/sound_360_sa/"
                  className="bg-sound360 p-3 rounded-lg hover:bg-sound360-dark transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100064243863594"
                  className="bg-sound360 p-3 rounded-lg hover:bg-sound360-dark transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} SOUND360. All Rights Reserved.</p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="hover:text-sound360 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-sound360 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
