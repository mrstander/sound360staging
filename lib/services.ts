// Single source of truth for SOUND360's services.
// The header, footer, homepage, services page, contact form and each service page all read from here,
// so a rename or copy change only needs to happen once.

export type ServiceBlock = {
  heading: string
  paragraphs?: string[]
  listIntro?: string
  list?: string[]
  /** Items in `list` that should link to another service page */
  links?: Record<string, string>
  outro?: string[]
  image?: { src: string; alt: string }
}

export type Service = {
  slug: "audio" | "lighting" | "visual" | "production" | "dancefloor"
  href: string
  name: string
  /** Short card description (homepage + services page) */
  summary: string
  /** Button label on cards */
  cta: string
  /** Quote button label on the service page */
  quoteCta: string
  /** Equipment / feature bullets shown under the summary */
  features: string[]
  cardImage: string
  hero: { h1: string; lead: string; image: string; imageAlt: string }
  intro: string[]
  blocks: ServiceBlock[]
  gallery: { src: string; alt: string }[]
  /** Extra FAQ questions (matched by exact text in lib/faqs.ts) for pages without their own FAQ group */
  extraFaqs?: string[]
  /** Slugs of related services to cross-link at the bottom of the page */
  related: Service["slug"][]
}

const img = (path: string) => `/images/services/${path}`

export const services: Service[] = [
  {
    slug: "audio",
    href: "/services/audio",
    name: "Professional Audio",
    summary: "Customised sound solutions for corporate events, private events, conferences, live productions and festivals.",
    cta: "Explore Audio Solutions",
    quoteCta: "Get an Audio Quote",
    features: ["Digital Console Mixing", "High quality Audio", "Wireless Microphones", "Recording & Playback"],
    cardImage: img("audio/stage-led.webp"),
    hero: {
      h1: "Professional Audio Hire in Cape Town",
      lead: "Customised professional audio solutions designed around your event, from small corporate meetings to large-scale events and festivals.",
      image: img("audio/hero.webp"),
      imageAlt: "Outdoor PA speakers and subwoofers set up for an event in Cape Town",
    },
    intro: [
      "From small corporate meetings to large-scale events and festivals, SOUND360 provides customised professional audio solutions designed around your event.",
      "There is no one-size-fits-all sound system. The right audio setup depends on a range of factors, including the number of guests, venue size, venue requirements, event format and exactly what you need your sound system to achieve.",
      "Whether you're hosting an intimate presentation for 10 people, a corporate event, private function or a large-scale event for up to 10,000 guests, our team will recommend and supply the right audio solution for your requirements.",
    ],
    blocks: [
      {
        heading: "Sound Designed Around Your Event",
        paragraphs: [
          "Every event is different.",
          "A sound system that works perfectly in a boardroom won't necessarily work for an outdoor event, festival or large corporate function.",
        ],
        listIntro: "Before recommending equipment, we consider:",
        list: [
          "Number of guests",
          "Venue size and layout",
          "Indoor or outdoor location",
          "Venue requirements",
          "Type of event",
          "Presentations and speakers",
          "Panel discussions",
          "Live music or DJs",
          "Client requirements",
          "The overall audience experience",
        ],
        outro: ["We then build an audio solution around the specific requirements of your event."],
        image: { src: img("audio/mixing-desk.webp"), alt: "Digital mixing console at an outdoor event in Cape Town" },
      },
      {
        heading: "From 10 Guests to 5,000 People",
        paragraphs: [
          "SOUND360 provides professional sound solutions for events of all sizes.",
          "Whether you need clear audio for a small corporate talk or a powerful sound system for a large-scale production, we can scale the equipment and technical support to suit your requirements.",
        ],
        listIntro: "Suitable for:",
        list: [
          "Corporate events",
          "Conferences",
          "Panel discussions",
          "Product launches",
          "Brand activations",
          "Private events",
          "Weddings",
          "Live performances",
          "Festivals",
          "Large-scale productions",
        ],
        image: { src: img("audio/stage-led.webp"), alt: "Live event sound system with LED screen and stage lighting" },
      },
      {
        heading: "Bigger Isn't Always Better",
        paragraphs: [
          "One of the most common mistakes when booking event audio is confusing the size of a PA system with sound quality.",
          "The biggest system isn't always the right system.",
          "Correct equipment selection, configuration and professional setup all play an important role in delivering clear, balanced and appropriate sound for your event.",
          "Our team will recommend the solution that best suits your venue and requirements.",
        ],
      },
    ],
    gallery: [
      { src: "/images/sound360-gallery-item-01.webp", alt: "Rooftop event sound system overlooking Cape Town" },
      { src: "/images/sound360-gallery-item-26.webp", alt: "DJ and speaker setup with a Table Mountain view in Cape Town" },
      { src: "/images/sound360-gallery-item-19.webp", alt: "Wine farm event audio setup in the Cape Winelands" },
      { src: "/images/sound360-gallery-item-18.webp", alt: "Outdoor rooftop speakers and DJ booth in Cape Town" },
      { src: "/images/sound360-gallery-item-11.webp", alt: "Indoor event audio and lighting setup" },
      { src: "/images/sound360-gallery-item-03.webp", alt: "Event audio and lighting with an LED dance floor" },
    ],
    related: ["lighting", "visual", "production"],
  },
  {
    slug: "lighting",
    href: "/services/lighting",
    name: "Professional Lighting",
    summary: "Custom-programmed lighting designed around your event, venue and vision.",
    cta: "Explore Lighting Solutions",
    quoteCta: "Get a Lighting Quote",
    features: ["LED Moving Lights", "Intelligent Fixtures", "Haze & Fog Effects", "DMX Control Systems"],
    cardImage: img("lighting/stage-red.webp"),
    hero: {
      h1: "Professional Event Lighting in Cape Town",
      lead: "Lighting can completely change the look, feel and atmosphere of an event.",
      image: img("lighting/hero.webp"),
      imageAlt: "Moving head stage lighting beams at an event in Cape Town",
    },
    intro: [
      "From subtle ambient lighting to dynamic stage effects, SOUND360 creates customised lighting solutions designed around your venue, event and vision.",
      "Every lighting setup is individually programmed and controlled by our professional technicians.",
    ],
    blocks: [
      {
        heading: "You Bring the Vision. We Make It Happen.",
        paragraphs: [
          "No two events are the same, and neither should the lighting be.",
          "Our lighting systems are fully customisable, allowing us to create different colours, moods, movements and effects throughout your event.",
          "Whether you're looking for elegant ambient lighting for a corporate dinner or high-impact effects for a stage production, we can create a lighting solution around your requirements.",
        ],
        image: { src: img("lighting/stage-red.webp"), alt: "Custom-programmed stage lighting with haze at a live event" },
      },
      {
        heading: "Indoor & Outdoor Lighting",
        paragraphs: [
          "SOUND360 provides lighting solutions for both indoor and outdoor events.",
          "With suitable IP-rated lighting available for different environments, we can recommend equipment based on your venue and event requirements.",
        ],
        image: { src: img("lighting/conference-uplighting.webp"), alt: "Warm uplighting on a conference stage in Cape Town" },
      },
    ],
    gallery: [
      { src: img("lighting/hero.webp"), alt: "Moving head lights and haze at a Cape Town event" },
      { src: img("lighting/uplighting.webp"), alt: "Colour-changing LED uplighting on a venue wall" },
      { src: img("lighting/conference-uplighting.webp"), alt: "Conference stage uplighting in Cape Town" },
      { src: img("lighting/stage-red.webp"), alt: "Red stage wash and beam lighting behind a DJ booth" },
    ],
    related: ["audio", "visual", "production"],
  },
  {
    slug: "visual",
    href: "/services/visual",
    name: "Visual Solutions",
    summary:
      "Professional LED screens, customised LED displays and TV hire for corporate events, conferences, brand activations, live events and sports screenings.",
    cta: "Explore Visual Solutions",
    quoteCta: "Get a Quote",
    features: ["LED Video Walls", "Projection Mapping", "Live Camera Systems", "Content Management"],
    cardImage: img("visual/led-wall.webp"),
    hero: {
      h1: "LED Screens, TV Hire & Visual Solutions",
      lead: "Make sure your content gets seen.",
      image: img("visual/hero.webp"),
      imageAlt: "Custom LED screen displaying visuals at an event in Cape Town",
    },
    intro: [
      "SOUND360 provides professional LED screens, customised LED displays and TV screens for corporate events, conferences, brand activations, product launches, live events and sports screenings.",
      "From individual TV screens to completely customised LED screen configurations, we can build a visual solution around your event, venue and audience.",
    ],
    blocks: [
      {
        heading: "From Small to Massive",
        paragraphs: [
          "Our LED screens can be customised to suit the exact requirements of your event.",
          "Because LED screens are built using modular panels, we can create different sizes and configurations depending on your venue, available space and visual requirements.",
          "Whether you need a smaller LED display for a corporate event or a large-format screen designed to create serious impact, we can build a solution around your requirements.",
        ],
        image: { src: img("visual/led-wall.webp"), alt: "Modular LED wall behind a DJ booth at a Cape Town venue" },
      },
      {
        heading: "High-Resolution Visual Solutions",
        paragraphs: [
          "Take your event to the next level with high-resolution screens and professional visual solutions designed around your event.",
          "From presentations and branded content to large-format event visuals, we provide screen solutions suited to your venue, audience and requirements.",
          "Our professional technicians manage the technical side from setup through to operation, ensuring your visuals perform reliably throughout your event.",
        ],
        listIntro: "Suitable for:",
        list: [
          "Corporate events",
          "Conferences",
          "Presentations",
          "Brand activations",
          "Product launches",
          "Awards events",
          "Exhibitions",
          "Live events",
          "Sports screenings",
        ],
        image: { src: img("visual/led-stage.webp"), alt: "High-resolution LED screen on a trussed stage at a live event" },
      },
      {
        heading: "TV Screens for Events",
        paragraphs: [
          "SOUND360 provides TV screens in a range of sizes to suit different event requirements.",
          "Whether you need a single screen for a presentation or multiple screens positioned throughout a venue, we can recommend the right setup based on your audience, venue layout and event requirements.",
        ],
        listIntro: "Ideal for:",
        list: [
          "Corporate presentations",
          "Conferences",
          "Training sessions",
          "Panel discussions",
          "Brand activations",
          "Exhibitions",
          "Product launches",
          "Hospitality areas",
          "Live events",
          "Sports screenings",
        ],
        image: { src: img("visual/tv-screens.webp"), alt: "TV screens set up for a corporate event" },
      },
      {
        heading: "Indoor & Outdoor Events",
        paragraphs: [
          "SOUND360 can provide screen solutions for both indoor and outdoor events.",
          "Our team will assess the event requirements, venue and conditions to recommend the most appropriate setup.",
          "Where required, we can also assist with additional power solutions, including generators.",
        ],
      },
    ],
    gallery: [
      { src: img("visual/hero.webp"), alt: "Custom LED screens with event visuals" },
      { src: img("visual/led-wall.webp"), alt: "LED wall at a Cape Town venue" },
      { src: img("visual/led-stage.webp"), alt: "LED screen on stage at a live event" },
      { src: img("visual/tv-screens.webp"), alt: "TV screens at a corporate function" },
      { src: img("visual/tv-stand.webp"), alt: "TV screen on a stand for a presentation" },
      { src: img("visual/led-dancefloor.webp"), alt: "LED screen display with a black and white dance floor" },
    ],
    related: ["production", "audio", "lighting"],
  },
  {
    slug: "production",
    href: "/services/production",
    name: "Event Production",
    summary: "Complete technical event support, from equipment and setup to technicians, on-site operation and load-out.",
    cta: "Explore Event Production",
    quoteCta: "Get a Production Quote",
    features: ["Rigging & Trussing", "Livestreaming", "Power Distribution", "Project Management"],
    cardImage: img("production/outdoor-truss.webp"),
    hero: {
      h1: "Full Event Production in Cape Town",
      lead: "Audio, lighting, LED screens, TV hire, structures and technical production from one professional team.",
      image: img("production/hero.webp"),
      imageAlt: "Conference venue set up with screens, sound and lighting by SOUND360",
    },
    intro: [
      "SOUND360 provides complete technical event production solutions, managing the equipment, setup, technicians and on-site operation required to bring your event together.",
      "Rather than coordinating multiple technical suppliers, SOUND360 can provide a complete solution across audio, lighting, LED screens, TV hire, structures and technical production.",
    ],
    blocks: [
      {
        heading: "What's Included?",
        listIntro: "Depending on your event requirements, our production services can include:",
        list: [
          "Professional audio",
          "Lighting",
          "LED screens",
          "TV screens",
          "Rigging and trussing",
          "Staging and event structures",
          "Dance floors",
          "Power solutions",
          "Equipment delivery",
          "Setup and installation",
          "Professional technicians",
          "On-site technical operation",
          "Breakdown and load-out",
        ],
        links: {
          "Professional audio": "/services/audio",
          Lighting: "/services/lighting",
          "LED screens": "/services/visual",
          "TV screens": "/services/visual",
          "Dance floors": "/services/dancefloor",
        },
        image: { src: img("production/dj-setup.webp"), alt: "Complete sound, lighting and DJ production setup at a Cape Town venue" },
      },
      {
        heading: "Professional Technicians on Site",
        paragraphs: ["The equipment is only part of the solution."],
        listIntro: "Depending on your event requirements, SOUND360 can provide:",
        list: [
          "Sound technicians",
          "Lighting technicians",
          "AV technicians",
          "Visual technicians",
          "Technical crew",
          "Structure and rigging crew",
        ],
        outro: ["Our team can manage the technical side of your event while you focus on everything else."],
        image: { src: img("production/conference.webp"), alt: "Conference production with screens and sound for a seated audience" },
      },
      {
        heading: "Rigging, Trussing & Event Structures",
        paragraphs: [
          "SOUND360 provides trussing, staging and custom-built event structures to support lighting, screens, sound and other technical production requirements.",
          "Whether you need a simple structure or a more complex event build, our team can provide the equipment, installation and technical support required.",
        ],
        image: { src: img("production/outdoor-truss.webp"), alt: "Outdoor truss structure with lighting and speakers built for an event" },
      },
      {
        heading: "Built with Safety in Mind",
        paragraphs: [
          "Safety is an important part of every event structure.",
          "Where certification or professional sign-off is required, SOUND360 will ensure that the appropriate processes are followed, including sign-off by a certified engineer where applicable.",
          "Appropriate safety procedures are also applied during installation and operation to protect both our technicians and event participants.",
        ],
        image: { src: img("production/staging.webp"), alt: "Event staging installed in a function venue" },
      },
    ],
    gallery: [
      { src: img("production/outdoor-structure.webp"), alt: "Outdoor event structure with truss and speakers" },
      { src: img("production/party.webp"), alt: "Live event production with lighting and crowd" },
      { src: img("production/gobo-floor.webp"), alt: "Wedding venue production with gobo floor projection" },
      { src: img("production/staging-2.webp"), alt: "Stage platform and projector screen in a venue" },
      { src: img("production/dinner.webp"), alt: "Dinner event with uplighting and sound" },
      { src: img("production/outdoor-stage.webp"), alt: "Outdoor stage and truss build on a lawn" },
    ],
    related: ["audio", "visual", "dancefloor"],
  },
  {
    slug: "dancefloor",
    href: "/services/dancefloor",
    name: "Dance Floors",
    summary: "Custom-sized dance floors professionally delivered, installed and removed.",
    cta: "Explore Dance Floors",
    quoteCta: "Get a Dance Floor Quote",
    features: ["LED Dance Floors", "Black and White", "Glossy Dance Floors", "Portable Dance Floors", "Underflooring"],
    cardImage: img("dancefloor/checker-led.webp"),
    hero: {
      h1: "Custom Dance Floor Hire in Cape Town",
      lead: "Create the perfect space for your guests to gather, celebrate and dance.",
      image: img("dancefloor/hero.webp"),
      imageAlt: "Black and white dance floor installed in a function venue in Cape Town",
    },
    intro: [
      "SOUND360 provides professional dance floor solutions customised to suit your event and venue.",
      "From smaller installations to larger event floors, we can build the dance floor around your space and requirements.",
    ],
    blocks: [
      {
        heading: "Sized for Your Event",
        paragraphs: [
          "Our dance floors can be customised according to your venue, available space and event requirements.",
          "Rather than offering a one-size-fits-all solution, we can recommend and build the appropriate floor for your event.",
        ],
        image: { src: img("dancefloor/white.webp"), alt: "White dance floor custom-sized for a function venue" },
      },
      {
        heading: "Indoor & Outdoor Dance Floors",
        paragraphs: [
          "SOUND360 can install dance floors for both indoor and outdoor events.",
          "For installations on grass or other outdoor surfaces, underflooring can be provided where required to create an appropriate base.",
          "Our team handles delivery, installation and breakdown.",
        ],
        image: { src: img("dancefloor/checker-led.webp"), alt: "Checkered dance floor with LED screen and lighting" },
      },
    ],
    gallery: [
      { src: img("dancefloor/hero.webp"), alt: "Black and white checkered dance floor" },
      { src: img("dancefloor/white.webp"), alt: "White dance floor in an events venue" },
      { src: img("dancefloor/black-white-pink.webp"), alt: "Black and white dance floor with pink uplighting" },
      { src: img("dancefloor/checker-led.webp"), alt: "Dance floor with LED screen backdrop" },
      { src: img("dancefloor/led-floor.webp"), alt: "Dance floor with DJ booth and lighting" },
    ],
    extraFaqs: [
      "Do you provide delivery, setup and collection?",
      "Can you customise an equipment package for my event?",
      "How much notice do I need to book SOUND360?",
    ],
    related: ["lighting", "audio", "production"],
  },
]

export const getService = (slug: Service["slug"]) => services.find((s) => s.slug === slug)!
