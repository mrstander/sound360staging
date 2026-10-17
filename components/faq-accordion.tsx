"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import type { Faq } from "@/lib/faqs"

export type { Faq }

// Same look as the FAQ accordion on the contact page. Answers stay in the HTML when
// collapsed, so search engines and AI search can read them.
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openItems.includes(index)
        return (
          <div key={faq.question} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <h3>
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="w-full px-5 py-4 md:px-6 md:py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base md:text-lg font-semibold text-black">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-sound360 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 md:px-6 md:pb-6 space-y-3 text-base">
                {faq.answer.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
                {faq.list && (
                  <ul className="space-y-2">
                    {faq.list.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-sound360 rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {faq.outro && <p className="text-gray-600 leading-relaxed">{faq.outro}</p>}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
