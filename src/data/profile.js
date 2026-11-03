/**
 * Public content maintained alongside the portfolio.
 * Sources: the owner's confirmed independent work, public websites and linked repositories.
 * Employment history and proficiency ratings are not inferred from activity.
 * @typedef {{name: string, address: string}} SocialLink
 * @typedef {{id: string, name: string, additionalInfo: string,
 *   url: string, technologies: string[], linkLabel?: string}} Project
 */
export const profile = {
  person: {
    name: "Mahdi Rezaei",
    publicId: "MahdiRezaeiDev",
    summaryOfBio:
      "I build web applications that turn everyday workflows into practical tools. My public work includes business management tools and interactive, API-driven interfaces. I work with PHP, Laravel, React and TypeScript.",
    /** @type {SocialLink[]} */
    links: [
      { name: "github", address: "https://github.com/MahdiRezaeiDev" },
      {
        name: "linkedin",
        address: "https://www.linkedin.com/in/rezaei-mahdi/",
      },
      { name: "twitter", address: "https://twitter.com/Mahdi_Rezaei_AF" },
    ],
  },
  strengths: [
    "PHP",
    "Laravel",
    "MySQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Inertia.js",
  ].map((name) => ({ name })),
  /** @type {Project[]} */
  projects: [
    {
      id: "hazara-mom-stitches",
      name: "Hazara Mom Stitches",
      additionalInfo:
        "An independent full-stack e-commerce project for Hazaragi clothing, with product collections, a wishlist, cart and order tracking.",
      url: "https://hms.naatrading.com/",
      linkLabel: "Visit website",
      technologies: ["Laravel", "Livewire", "PHP"],
    },
    {
      id: "ruby100",
      name: "Ruby100",
      additionalInfo:
        "A Laravel business website for towing and car-removal services in Melbourne, with quote enquiries, service information and contact options.",
      url: "https://ruby100.ltd/",
      linkLabel: "Visit website",
      technologies: ["Laravel", "PHP", "Business website"],
    },
    {
      id: "naa-trading",
      name: "NAA Trading",
      additionalInfo:
        "An independent full-stack network-equipment catalog, with specifications, product comparison and enquiry lists. The public site is a client demonstration.",
      url: "https://naatrading.com/en",
      linkLabel: "View public demonstration",
      technologies: ["Laravel", "Vue", "TypeScript", "Inertia.js"],
    },
    {
      id: "zarin",
      name: "Zarin",
      additionalInfo:
        "A tailoring and clothing website with Persian collections and consultation options, alongside business management for customers, orders and workshop operations.",
      url: "https://check.ydsp.ir/",
      linkLabel: "Visit website",
      technologies: ["Laravel", "PHP", "Tailoring operations"],
    },
    {
      id: "power-house",
      name: "Power House",
      additionalInfo:
        "An independent full-stack gym-management application for memberships, subscriptions, locker rentals, receipts and cash reporting.",
      url: "https://support.ydsp.ir/",
      linkLabel: "View public sign-in page",
      technologies: ["Laravel", "Vue", "TypeScript", "Inertia.js"],
    },
    {
      id: "clinic-management-system",
      name: "Clinic Management System",
      additionalInfo:
        "A Laravel application for patients, staff, pharmacy sales, income, expenses and payroll.",
      url: "https://github.com/MahdiRezaeiDev/clinic-management-system",
      technologies: ["Laravel", "PHP", "JavaScript"],
    },
    {
      id: "air-pollution-metrics",
      name: "Air Pollution Metrics",
      additionalInfo:
        "Searchable current, forecast and historical air-quality data using React and Redux Toolkit.",
      url: "https://github.com/MahdiRezaeiDev/air-pollution-metrics",
      technologies: ["React", "Redux Toolkit", "API"],
    },
    {
      id: "spacex",
      name: "SpaceX Explorer",
      additionalInfo:
        "A collaborative project exploring rockets and missions, with reservations and mission participation.",
      url: "https://github.com/MahdiRezaeiDev/spaceX",
      technologies: ["React", "Redux Toolkit", "API"],
    },
    {
      id: "math-magicians",
      name: "Math Magicians",
      additionalInfo:
        "A responsive calculator with reusable React components and Big.js arithmetic.",
      url: "https://github.com/MahdiRezaeiDev/Math-magicians",
      technologies: ["React", "TypeScript", "Big.js"],
    },
    {
      id: "awesome-books",
      name: "Awesome Books",
      additionalInfo:
        "A JavaScript book list with author details and persistent browser storage.",
      url: "https://github.com/MahdiRezaeiDev/Awesome-books",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
  ],
};
