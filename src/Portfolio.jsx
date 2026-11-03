import { useEffect, useRef, useState } from "react";
import { profile } from "./data/profile";
import "./portfolio.css";

const projectNotes = {
  "hazara-mom-stitches": {
    category: "Business systems",
    cover: "store",
    image: "/projects/hazara-mom-stitches.jpg",
    label: "Independent / E-commerce",
    role: "Independent project / Full-Stack Developer",
    features: [
      "Product collections for clothing and embroidered goods",
      "English and Persian interfaces",
      "Wishlist, cart and order-tracking experience",
    ],
  },
  ruby100: {
    category: "Business systems",
    cover: "services",
    image: "/projects/ruby100.jpg",
    label: "Independent / Business website",
    role: "Independent project / Full-Stack Developer",
    features: [
      "Service pages for towing and car removal",
      "Quote-enquiry and contact workflows",
      "Blog and informational content",
    ],
  },
  "naa-trading": {
    category: "Business systems",
    cover: "catalog",
    image: "/projects/naa-trading.jpg",
    label: "Independent / Catalog demonstration",
    role: "Independent project / Full-Stack Developer",
    note: "The public client demonstration uses sample catalog data and simulated form submissions.",
    features: [
      "Equipment catalog and product specifications",
      "Product comparison and enquiry-list workflows",
      "Multilingual interface and content pages",
    ],
  },
  zarin: {
    category: "Business systems",
    cover: "tailoring",
    image: "/projects/zarin.jpg",
    label: "Independent / Tailoring",
    role: "Independent project / Full-Stack Developer",
    features: [
      "Persian collections and custom-tailoring service pages",
      "Consultation and contact options",
      "Customer, order, production, sales and inventory workflows",
    ],
  },
  "power-house": {
    category: "Business systems",
    cover: "fitness",
    image: "/projects/power-house.jpg",
    label: "Independent / Gym management",
    role: "Independent project / Full-Stack Developer",
    note: "The public link opens the sign-in page. Application access requires an account.",
    features: [
      "Membership and subscription workflows",
      "Locker rentals, receipts and cash reporting",
      "Jalali-date support for day-to-day operations",
    ],
  },
  "clinic-management-system": {
    category: "Business systems",
    cover: "clinic",
    label: "Clinic operations",
    features: [
      "Patient, staff and supplier records",
      "Pharmacy sales and clinical-service income",
      "Expenses, salaries and overtime tracking",
    ],
  },
  "air-pollution-metrics": {
    category: "Frontend & APIs",
    cover: "air",
    label: "Data exploration",
    demo: "https://air-pollution-metrics.netlify.app/",
    features: [
      "Country search and detailed air-quality views",
      "Current, forecast and historical data",
      "React interfaces with Redux Toolkit state",
    ],
  },
  spacex: {
    category: "Frontend & APIs",
    cover: "space",
    label: "Collaborative project",
    collaboration:
      "Built collaboratively with Lucca Micale. See the repository for full credits.",
    features: [
      "Explore SpaceX rockets and missions",
      "Rocket reservations and mission participation",
      "Shared application state with Redux Toolkit",
    ],
  },
  "math-magicians": {
    category: "Frontend & APIs",
    cover: "math",
    label: "Interactive application",
    features: [
      "Basic mathematical operations using Big.js",
      "Reusable React components",
      "Responsive interface built with TypeScript",
    ],
  },
  "awesome-books": {
    category: "Frontend & APIs",
    cover: "books",
    label: "Collaborative project",
    collaboration:
      "Built collaboratively with Nurudeen (@Alhajideen). See the repository for full credits.",
    demo: "https://mahdirezaeidev.github.io/Awesome-books/",
    features: [
      "Add and remove books with author details",
      "Persist the list with browser localStorage",
      "A lightweight interface in HTML, CSS and JavaScript",
    ],
  },
};
const projects = profile.projects.map((project) => ({
  ...project,
  ...projectNotes[project.id],
}));
const filters = ["All work", "Business systems", "Frontend & APIs"];
const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
];
const email = "mahdi.sohaily4030@gmail.com";

/** @param {{diagonal?: boolean, className?: string}} props */
function Arrow({ diagonal = false, className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const closeButton = useRef(null);
  useEffect(() => {
    if (open) closeButton.current?.focus();
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <a className="brand" href="#top" aria-label="Mahdi Rezaei home">
        <span className="brand-mark">mr.</span>
        <span className="brand-caption">
          MAHDI REZAEI<span>FULL-STACK DEVELOPER</span>
        </span>
      </a>
      <nav className="desktop-navigation" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#contact">
        Let’s talk <Arrow diagonal />
      </a>
      <button
        className="menu-toggle"
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Open navigation menu"
        onClick={() => setOpen(!open)}
      >
        <span>Menu</span>
        <span className="menu-lines" aria-hidden="true" />
      </button>
      <div
        className="mobile-panel"
        id="mobile-navigation"
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") close();
        }}
      >
        <div className="mobile-panel-top">
          <span className="mono">NAVIGATION</span>
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            aria-label="Close navigation menu"
          >
            Close ×
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {[...navItems, { href: "#contact", label: "Contact" }].map(
            (item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <span className="mono">0{index + 1}</span>
                {item.label}
                <Arrow diagonal />
              </a>
            ),
          )}
        </nav>
        <a className="mobile-email" href={"mailto:" + email}>
          {email}
        </a>
      </div>
    </header>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-top mono">
        <span>MR / BUILD NOTES</span>
        <span>N° 001</span>
      </div>
      <div className="art-grid">
        <span className="art-coordinate mono">LOGIC</span>
        <svg className="logic-drawing" viewBox="0 0 360 230" fill="none">
          <path
            d="M30 115h80m140 0h80M180 20v50m0 90v50"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="m180 65 70 50-70 50-70-50 70-50Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="m180 45 100 70-100 70-100-70 100-70Z"
            stroke="currentColor"
            strokeWidth=".7"
            opacity=".4"
          />
          <path
            d="m180 25 130 90-130 90-130-90L180 25Z"
            stroke="currentColor"
            strokeWidth=".7"
            opacity=".2"
          />
          <circle cx="30" cy="115" r="5" fill="currentColor" />
          <circle cx="330" cy="115" r="5" fill="currentColor" />
          <circle cx="180" cy="20" r="4" stroke="currentColor" />
          <circle cx="180" cy="210" r="4" stroke="currentColor" />
          <path d="m165 115 10 10 22-25" stroke="#ac4b35" strokeWidth="2" />
        </svg>
        <span className="art-coordinate bottom mono">EXPERIENCE</span>
      </div>
      <p className="art-title">
        Logic, with
        <br />
        <i>a human side.</i>
      </p>
      <div className="art-bottom mono">
        <span>FUNCTION × FORM</span>
        <span>MAHDI REZAEI</span>
      </div>
      <div className="art-stamp">
        m<span>r</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" />
          <span className="mono">
            OPEN TO INTERNATIONAL REMOTE OPPORTUNITIES
          </span>
        </div>
        <h1 id="hero-title">
          Complex workflows.
          <br />
          <i>Clear experiences.</i>
        </h1>
        <p className="hero-description">
          I’m <strong>Mahdi Rezaei</strong>, a full-stack developer building
          business applications and thoughtful interfaces with Laravel, React
          and TypeScript.
        </p>
        <div className="hero-actions">
          <a className="text-action" href="#work">
            <span className="circle-arrow">
              <Arrow />
            </span>
            <span>Explore selected work</span>
          </a>
          <a
            className="underlined-link resume-download"
            href="/Mahdi-Rezaei-Resume.pdf"
            download
          >
            Download resume <Arrow diagonal />
          </a>
        </div>
      </div>
      <HeroArt />
      <div className="hero-foot mono">
        <span>BACKEND PRECISION. FRONTEND CARE.</span>
        <span>
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </span>
      </div>
    </section>
  );
}

/** @param {{cover: string, image?: string, name?: string}} props */
function ProjectArt({ cover, image, name }) {
  if (image) {
    return (
      <div className="project-art cover-website">
        <img
          src={image}
          alt={name + " public website screenshot"}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }
  return (
    <div className={"project-art cover-" + cover} aria-hidden="true">
      {cover === "letters" && (
        <>
          <div className="letter-sheet sheet-back" />
          <div className="letter-sheet sheet-front">
            <span className="mini-label">CORRESPONDENCE / SYSTEM</span>
            <div className="sheet-heading">
              Everything,
              <br />
              <i>in order.</i>
            </div>
            <div className="sheet-rule" />
            <div className="routing-steps">
              <span>
                01
                <br />
                <b>RECEIVE</b>
              </span>
              <span>
                02
                <br />
                <b>ROUTE</b>
              </span>
              <span>
                03
                <br />
                <b>ARCHIVE</b>
              </span>
            </div>
            <span className="sheet-signature">
              A clearer path from letter to action.
            </span>
          </div>
          <span className="cover-caption">WORKFLOW CONCEPT</span>
        </>
      )}
      {cover === "clinic" && (
        <>
          <div className="clinic-cross">
            <span />
            <span />
          </div>
          <div className="clinic-word">
            Care,
            <br />
            <i>connected.</i>
          </div>
          <div className="clinic-notes">
            <span>01 / PATIENTS</span>
            <span>02 / PHARMACY</span>
            <span>03 / PAYROLL</span>
          </div>
          <span className="cover-caption">OPERATIONS CONCEPT</span>
        </>
      )}
      {cover === "air" && (
        <>
          <span className="air-label mono">AIR / QUALITY / EXPLORER</span>
          <div className="air-word">
            A clearer
            <br />
            <i>perspective.</i>
          </div>
          <svg className="air-lines" viewBox="0 0 600 240">
            <path
              d="M-10 200Q100-10 220 100T450 90T650 30M-10 225Q100 15 220 125T450 115T650 55M-10 250Q100 40 220 150T450 140T650 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <span className="cover-caption">DATA EXPLORATION</span>
        </>
      )}
      {cover === "space" && (
        <>
          <span className="space-label mono">BEYOND / THE EVERYDAY</span>
          <div className="space-orbit" />
          <div className="space-planet" />
          <div className="space-word">
            SpaceX
            <br />
            <i>Explorer.</i>
          </div>
          <span className="cover-caption">ROCKETS & MISSIONS</span>
        </>
      )}
      {cover === "math" && (
        <div className="mini-art math-art">
          ± <i>×</i> ÷
        </div>
      )}
      {cover === "books" && (
        <div className="mini-art books-art">
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
      )}
    </div>
  );
}

/** @param {{project: typeof projects[number], featured: boolean, onOpen: (project: typeof projects[number]) => void, index: number}} props */
function ProjectCard({ project, featured, onOpen, index }) {
  return (
    <article
      className={
        featured ? "project-card feature-project" : "project-card index-project"
      }
    >
      {featured && (
        <button
          className="cover-button"
          type="button"
          aria-label={"Explore " + project.name}
          onClick={() => onOpen(project)}
        >
          <ProjectArt
            cover={project.cover}
            image={project.image}
            name={project.name}
          />
          <span className="cover-open">
            <Arrow diagonal />
          </span>
        </button>
      )}
      <div className="project-information">
        <div className="project-category mono">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.label}</span>
        </div>
        <h3>
          <button type="button" onClick={() => onOpen(project)}>
            {project.name}
            {!featured && <Arrow diagonal />}
          </button>
        </h3>
        <p>{project.additionalInfo}</p>
        <ul
          className="project-stack"
          aria-label={project.name + " stack and focus"}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      {!featured && (
        <span
          className={"index-symbol symbol-" + project.cover}
          aria-hidden="true"
        >
          {project.cover === "math"
            ? "±"
            : project.cover === "books"
              ? "Aa"
              : project.cover === "space"
                ? "↗"
                : "≈"}
        </span>
      )}
    </article>
  );
}

/** @param {{project: typeof projects[number] | null, onClose: () => void}} props */
function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (project && !dialog.current.open) dialog.current.showModal();
    if (!project && dialog.current.open) dialog.current.close();
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      onCancel={onClose}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-content">
          <button
            type="button"
            className="dialog-close"
            aria-label="Close project details"
            onClick={onClose}
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <ProjectArt
            cover={project.cover}
            image={project.image}
            name={project.name}
          />
          <div className="dialog-body">
            <p className="mono dialog-label">
              {project.category} / {project.label}
            </p>
            <h2 id="project-dialog-title">{project.name}</h2>
            <p id="project-dialog-description">{project.additionalInfo}</p>
            {project.role && (
              <p className="project-role mono">{project.role}</p>
            )}
            <h3>What it does</h3>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <ul className="project-stack">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            {project.collaboration && (
              <p className="collaboration-note">{project.collaboration}</p>
            )}
            {project.note && (
              <p className="collaboration-note">{project.note}</p>
            )}
            <div className="dialog-actions">
              <a
                className="solid-button"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel || "View repository"} <Arrow diagonal />
              </a>
              {project.demo && (
                <a
                  className="underlined-link"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <Arrow diagonal />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function Work() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const shown = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section
      className="work-section section-shell"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading-row">
        <div>
          <p className="section-kicker mono">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Useful by design.
            <br />
            <i>Built to work.</i>
          </h2>
        </div>
        <p className="section-intro">
          A selection of business systems, data-driven interfaces and small
          applications. Different challenges, the same attention to structure
          and detail.
        </p>
      </div>
      <div className="work-toolbar">
        <div className="work-filters" aria-label="Filter projects">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
              <span className="mono">
                {name === "All work"
                  ? projects.length
                  : projects.filter((project) => project.category === name)
                      .length}
              </span>
            </button>
          ))}
        </div>
        <span className="mono work-index">
          PROJECT INDEX / 01—{String(projects.length).padStart(2, "0")}
        </span>
      </div>
      <p className="sr-only" role="status">
        {shown.length} projects shown
      </p>
      <div className="project-grid">
        {shown.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={index < 2}
            index={projects.findIndex((item) => item.id === project.id)}
            onOpen={setSelected}
          />
        ))}
      </div>
      <a
        className="underlined-link browse-work"
        href="https://github.com/MahdiRezaeiDev?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Browse all repositories <Arrow diagonal />
      </a>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function About() {
  const groups = [
    {
      title: "Backend",
      detail: "Laravel · PHP · MySQL",
      note: "Application logic, APIs and data.",
    },
    {
      title: "Frontend",
      detail: "React · TypeScript · Redux",
      note: "Interfaces, interaction and state.",
    },
    {
      title: "Integration",
      detail: "Inertia.js · Reverb · Git",
      note: "Connected workflows and real-time updates.",
    },
  ];
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-shell">
        <p className="section-kicker mono">02 / THE PERSON BEHIND THE CODE</p>
        <div className="about-main">
          <h2 id="about-title">
            Good software makes
            <br />
            <i>a busy day simpler.</i>
          </h2>
          <div className="about-copy">
            <p>
              I’m Mahdi, a full-stack developer who enjoys turning everyday
              workflows into practical tools.
            </p>
            <p>
              My public work includes business management tools, API-driven
              interfaces and smaller frontend experiments. I care about how a
              system is put together — and how it feels to use.
            </p>
            <a
              className="underlined-link"
              href="https://www.linkedin.com/in/rezaei-mahdi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More about me on LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="expertise-grid">
          {groups.map((group, index) => (
            <div key={group.title}>
              <span className="mono">
                0{index + 1} / {group.title.toUpperCase()}
              </span>
              <h3>{group.detail}</h3>
              <p>{group.note}</p>
            </div>
          ))}
        </div>
        <div className="about-signature">
          <span className="signature-name">Mahdi Rezaei</span>
          <span className="mono">
            A PRACTICAL MIND.
            <br />
            AN EYE FOR DETAIL.
          </span>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    [
      "Start with the problem",
      "Understand the people, the workflow and the information before deciding what to build.",
    ],
    [
      "Give the system structure",
      "Make the data, application logic and interface work together as a coherent whole.",
    ],
    [
      "Build for everyday use",
      "Keep interactions clear, layouts responsive and important actions easy to find.",
    ],
    [
      "Refine the details",
      "Review the edge cases, test the behavior and improve the parts that get in the way.",
    ],
  ];
  return (
    <section
      className="approach-section section-shell"
      id="approach"
      aria-labelledby="approach-title"
    >
      <div className="approach-heading">
        <p className="section-kicker mono">03 / APPROACH</p>
        <h2 id="approach-title">
          Less friction.
          <br />
          <i>More intention.</i>
        </h2>
        <p>
          Good development is a series of considered decisions, from the first
          question to the last interaction.
        </p>
      </div>
      <div className="approach-list">
        {steps.map(([title, description], index) => (
          <details key={title} open={index === 0}>
            <summary>
              <span className="mono">0{index + 1}</span>
              <h3>{title}</h3>
              <span className="detail-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{description}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied.");
    } catch {
      setStatus("Please copy the address shown above.");
    }
  };
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <div className="contact-top">
          <p className="section-kicker mono">04 / LET’S CONNECT</p>
          <span className="availability mono">
            <span className="status-dot" /> OPEN TO OPPORTUNITIES
          </span>
        </div>
        <div className="contact-heading">
          <h2 id="contact-title">
            Have something
            <br />
            worth <i>building?</i>
          </h2>
          <a
            className="contact-arrow"
            href={"mailto:" + email}
            aria-label="Email Mahdi Rezaei"
          >
            <Arrow diagonal />
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <a className="email-link" href={"mailto:" + email}>
              {email}
            </a>
            <button
              className="copy-email mono"
              type="button"
              onClick={copyEmail}
            >
              COPY EMAIL <span aria-hidden="true">↗</span>
            </button>
            <p className="copy-status mono" role="status">
              {status}
            </p>
          </div>
          <p>
            I’m open to international remote full-stack roles and collaboration.
            Let’s talk about what you have in mind.
          </p>
        </div>
        <footer className="site-footer">
          <a className="brand-mark" href="#top" aria-label="Back to top">
            mr.
          </a>
          <span className="mono">
            © {new Date().getFullYear()} MAHDI REZAEI
          </span>
          <div>
            {profile.person.links.map(({ name, address }) => (
              <a
                key={name}
                href={address}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name === "github"
                  ? "GitHub"
                  : name === "linkedin"
                    ? "LinkedIn"
                    : "X"}{" "}
                <Arrow diagonal />
              </a>
            ))}
          </div>
          <a className="back-top mono" href="#top">
            BACK TO TOP ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <Hero />
        <Work />
        <About />
        <Approach />
        <Contact />
      </main>
    </div>
  );
}
