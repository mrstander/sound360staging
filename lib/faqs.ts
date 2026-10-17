// Single source for every FAQ on the site: the FAQ page shows them all,
// and each service page shows the group tagged with its service.

export type Faq = {
  question: string
  answer: string[]
  list?: string[]
  outro?: string
}

export type FaqGroup = {
  heading: string
  /** Service page slug this group also appears on */
  service?: string
  faqs: Faq[]
}

export const faqGroups: FaqGroup[] = [
  {
    heading: "Booking & Planning",
    faqs: [
      {
        question: "How much notice do I need to book SOUND360?",
        answer: [
          "For the best experience, we recommend booking at least two weeks in advance. This gives our team enough time to plan the technical requirements, secure the right equipment and crew, and make sure everything is prepared for your event.",
        ],
      },
      {
        question: "Can SOUND360 assist with last-minute events?",
        answer: [
          "Yes. We can assist with last-minute bookings. Contact us with your event requirements and we will assist you efficiently.",
        ],
      },
      {
        question: "What information do you need to provide a quote?",
        answer: ["To provide the most accurate recommendation and quote, it helps to know:"],
        list: [
          "What is your vision for the event?",
          "Event date",
          "Venue or location",
          "Number of guests",
          "Type of event",
          "Event times",
          "Services required",
          "Whether the event is indoors or outdoors",
          "Any specific venue or technical requirements",
        ],
        outro: "If you're unsure what equipment you need, our team will guide you.",
      },
    ],
  },
  {
    heading: "Locations",
    faqs: [
      {
        question: "Does SOUND360 only work in Cape Town?",
        answer: [
          "Based in Cape Town, SOUND360 provides end-to-end audio, visual, lighting and event production solutions, delivering professionally managed events across South Africa.",
        ],
      },
    ],
  },
  {
    heading: "Equipment & Packages",
    faqs: [
      {
        question: "Can you customise an equipment package for my event?",
        answer: [
          "Yes. No two events are the same. SOUND360 customises each technical solution according to the event and client requirements.",
        ],
      },
      {
        question: "Do you provide equipment only or a complete service?",
        answer: [
          "We provide a complete solution including equipment, delivery, installation, technicians, on-site operation and breakdown.",
        ],
      },
      {
        question: "Do you provide technicians?",
        answer: [
          "Yes. Depending on your requirements, SOUND360 provides sound, lighting, AV and technical crew to support and operate the equipment during your event.",
        ],
      },
      {
        question: "Do you provide delivery, setup and collection?",
        answer: [
          "Yes. SOUND360 provides a complete service from delivery and installation through to breakdown and load-out after the event.",
        ],
      },
    ],
  },
  {
    heading: "Event Production",
    service: "production",
    faqs: [
      {
        question: "Do you offer full event production?",
        answer: [
          "Yes. SOUND360 manages the technical side of your event from load-in to load-out.",
          "Depending on your requirements, this can include audio, lighting, LED screens, TV screens, structures, technicians and on-site technical support.",
        ],
      },
      {
        question: "How early do you arrive to set up?",
        answer: [
          "This depends on the size and complexity of the event. SOUND360 plans setup time according to the technical requirements and allows sufficient time for installation, testing and final checks before the event begins.",
          "We don't believe technical setup should be rushed at the last minute.",
        ],
      },
    ],
  },
  {
    heading: "Equipment Reliability",
    faqs: [
      {
        question: "What happens if there is an equipment issue during my event?",
        answer: [
          "Equipment failure is unlikely, but if an issue does arise, our professional technicians are on hand to troubleshoot and resolve it as quickly as possible, with backup solutions available where required to keep your event running.",
          "All equipment is checked and tested between events to ensure it is maintained and ready for use.",
          "In the unlikely event of an equipment issue, backup solutions are provided where required to minimise disruption to the event.",
        ],
      },
    ],
  },
  {
    heading: "LED Screens & TV Hire",
    service: "visual",
    faqs: [
      {
        question: "Can I hire a TV screen for an event?",
        answer: [
          "Yes. SOUND360 can provide TV screens for corporate events, presentations, conferences, activations and other events.",
        ],
      },
      {
        question: "Can you build a custom LED screen?",
        answer: [
          "Yes. Our modular LED panels can be configured to create customised screen sizes and layouts according to your event requirements.",
        ],
      },
      {
        question: "What size LED screen do I need?",
        answer: [
          "The right screen size depends on the venue, audience, content and overall event requirements. Our LED screens are custom-built and configured to suit the specific requirements of each event, allowing us to create a solution that works seamlessly within your space. Our team can recommend the most appropriate screen solution once we understand your event.",
        ],
      },
    ],
  },
  {
    heading: "Professional Audio",
    service: "audio",
    faqs: [
      {
        question: "How many people can your sound systems accommodate?",
        answer: [
          "SOUND360 can provide customised sound solutions for events ranging from approximately 10 people to large-scale events.",
        ],
      },
      {
        question: "How do I know what sound system I need?",
        answer: [
          "You don't need to know exactly what equipment you need. Tell us about your event and our team will recommend an appropriate audio solution.",
        ],
      },
      {
        question: "Does a bigger sound system mean better sound?",
        answer: [
          "Not necessarily. The size of a sound system does not automatically determine sound quality. The right equipment needs to be selected and configured according to the venue and event requirements.",
        ],
      },
    ],
  },
  {
    heading: "Professional Lighting",
    service: "lighting",
    faqs: [
      {
        question: "Can you customise the lighting for our event?",
        answer: [
          "Yes. All SOUND360 lighting solutions are customised. Tell us about your event and vision, and we can recommend and program the lighting accordingly.",
        ],
      },
      {
        question: "Can you provide lighting for outdoor events?",
        answer: [
          "Yes. SOUND360 provides lighting solutions for indoor and outdoor events, including appropriate IP-rated equipment where required.",
        ],
      },
    ],
  },
]

export const faqsForService = (slug: string) => faqGroups.find((g) => g.service === slug)?.faqs ?? []

/** Plain-text answer for FAQPage structured data */
export const faqAnswerText = (faq: Faq) =>
  [...faq.answer, ...(faq.list ? [faq.list.join("; ") + "."] : []), ...(faq.outro ? [faq.outro] : [])].join(" ")

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faqAnswerText(faq) },
  })),
})
