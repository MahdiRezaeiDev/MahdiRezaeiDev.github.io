/**
 * Public content maintained alongside the portfolio.
 * Sources: https://github.com/MahdiRezaeiDev and the linked repositories.
 * Employment history and proficiency ratings are not inferred from activity.
 * @typedef {{name: string, address: string}} SocialLink
 * @typedef {{id: string, name: string, additionalInfo: string,
 *   url: string, technologies: string[]}} Project
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
