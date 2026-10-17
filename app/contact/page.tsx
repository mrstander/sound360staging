"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronDown, CheckCircle, AlertCircle,Facebook, Instagram } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-email"
import Link from "next/link"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending Message..." : "Send Message"}
    </Button>
  )
}

function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Equipment & Setup",
      answer:
        "Do you provide delivery and setup? Yes, our team delivers, installs, and tests all equipment before the event to ensure everything runs smoothly.",
    },
    {
      question: "Will you have technicians on-site during the event?",
      answer:
        "Absolutely. Our skilled crew manages the equipment throughout the event, so you can focus on your guests.",
    },
    {
      question: "How do you charge for your services?",
      answer:
        "Pricing is tailored to your event size, duration, and equipment needs. We provide transparent quotes with no hidden fees.",
    },
    {
      question: "Can the setup be designed around my event?",
      answer:
        "Yes, every event is unique. We tailor our sound, lighting, staging, and AV solutions to match your vision, venue, and audience. Our team works closely with you (and your planner if applicable) to design a setup that's perfectly aligned with your event.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Each event is unique and we will work within your budget,however, we are a premium AV rental company and therefore are not trying to be the cheapest, but rather the best",
    },
    {
      question: "Can you provide special effects like fog machines or LED dance floors",
      answer:
        "Yes! We offer fog machines,LED dance floors,spark machines, and other special effects to enhance your event's atmosphere.Let us know your vision,and we'll make it happen!",
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 className="text-xl font-bold text-black pr-4">{faq.question}</h3>
            <ChevronDown
              className={`w-6 h-6 text-sound360 transition-transform duration-300 flex-shrink-0 ${
                openItems.includes(index) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ContactPage() {
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setSubmitResult(null)
    const result = await sendContactEmail(formData)
    setSubmitResult(result)

    // Reset form on success
    if (result.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Get in <span className="text-gray-400">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Ready to make your event unforgettable? Contact us today for a free consultation and custom quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>

                  {/* Success/Error Message */}
                  {submitResult && (
                    <div
                      className={`mb-6 p-4 rounded-xl flex items-center ${
                        submitResult.success
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      {submitResult.success ? (
                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      )}
                      <p className="text-sm">{submitResult.message}</p>
                    </div>
                  )}

                  <form id="contact-form" action={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black p-3 bg-white"
                      >
                        <option value="">Select Event Type</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding</option>
                        <option value="concert">Concert/Festival</option>
                        <option value="conference">Conference</option>
                        <option value="private">Private Events </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                        Services Needed
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="flex items-center">
                          <input type="checkbox" name="audio" className="mr-2" />
                          <span className="text-sm">Professional Audio</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="lighting" className="mr-2" />
                          <span className="text-sm">Professional Lighting</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="visual" className="mr-2" />
                          <span className="text-sm">Visual Solutions / LED Screens &amp; TV Hire</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="production" className="mr-2" />
                          <span className="text-sm">Event Production</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="dance" className="mr-2" />
                          <span className="text-sm">Dance Floors</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" name="advice" className="mr-2" />
                          <span className="text-sm">I&apos;m Not Sure – I Need Advice</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
                        placeholder="Tell us about your event requirements, venue details, expected attendance, and any specific needs..."
                      />
                    </div>

                    <SubmitButton />
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-black rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Phone</h4>
                          <Link href="tel:0671114362" className="text-white/90">067 111 4362</Link>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <Link href="mailto:info@sound360.co.za" className="text-white/90" >info@sound360.co.za</Link>
                          
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Service Area</h4>
                          <p className="text-white/90">Cape Town</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Business Hours</h4>
                          <p className="text-white/90">8:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-3">
  <h4 className="font-semibold mb-1 text-white">Follow Us</h4>

  <div className="flex space-x-6">
    

    {/* Instagram */}
    <Link
      href="https://www.instagram.com/sound360"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center  text-white/90 hover:text-sound360 transition-colors"
    >
      <div className="  hover:bg-sound360/30 transition">
        <Instagram className="w-6 h-6" />
      </div>
      
    </Link>
    {/* Facebook */}
    <Link
      href="https://www.facebook.com/sound360"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center  text-white/90 hover:text-sound360 transition-colors"
    >
      <div className="  hover:bg-sound360/30 transition">
        <Facebook className="w-6 h-6" />
      </div>
      
    </Link>
  </div>
</div>

                    </div>
                  </div>

                  {/* Quick Response Promise */}
                  <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="w-8 h-8 text-black mr-3" />
                      <h4 className="text-xl font-bold text-black">Quick Response Guarantee</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We understand that event planning is time-sensitive. That's why we guarantee a response to all
                      inquiries within 2 hours during business hours, and within 24 hours on weekends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">
                  Quick answers to common questions about our services and booking process.
                </p>
              </div>

              <FAQSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
