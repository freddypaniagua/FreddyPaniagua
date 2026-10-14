export const site = {
  name: "John Doe",
  title: "Senior Full-Stack Engineer",
  location: "Seattle, WA",
  email: "hello@johndoe.dev",
  tagline:
    "I design and ship reliable product surfaces — from data-heavy dashboards to collaborative tools people actually enjoy using.",
  demoNotice:
    "Sample portfolio generated for an AI course — all details are fictional.",
  socials: [
    { label: "GitHub", href: "https://github.com/johndoe" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/johndoe" },
    { label: "Resume", href: "/resume" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
  "AWS",
  "Observability",
  "Product design",
  "Technical writing",
];

export const interests = [
  "Transit systems and maps",
  "Amateur radio and weekend hiking",
  "Teaching junior engineers how to debug in public",
];

export const bio = `John Doe is a senior full-stack engineer based in Seattle. He has spent the last decade helping product teams turn messy operational data into tools that feel calm, fast, and trustworthy.

This site is a fictional example. The companies, projects, dates, and contact details below are invented for an AI course demonstration of what a generated portfolio can look like.`;

export type Role = {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Northwind Labs",
    title: "Senior Full-Stack Engineer",
    dates: "2022 — Present",
    location: "Seattle, WA",
    bullets: [
      "Led the Lumen observability platform used by 40+ internal teams to trace production incidents.",
      "Cut median time-to-detect from 18 minutes to under 4 by pairing structured logs with a shared incident timeline.",
      "Mentored a pod of four engineers and introduced design reviews that halved rework on customer-facing surfaces.",
    ],
  },
  {
    company: "Cascade Analytics",
    title: "Full-Stack Engineer",
    dates: "2019 — 2022",
    location: "Portland, OR",
    bullets: [
      "Built self-serve reporting so analysts could ship weekly dashboards without waiting on engineering.",
      "Migrated a legacy Python monolith to a typed Node/React stack while keeping weekly releases green.",
      "Partnered with data science on model-eval tooling used across three product lines.",
    ],
  },
  {
    company: "Harbor Apps",
    title: "Software Engineer",
    dates: "2016 — 2019",
    location: "Seattle, WA",
    bullets: [
      "Shipped mobile-web features for a regional transit companion used by 200k monthly riders.",
      "Owned on-call for the maps service and reduced p95 tile latency by 35%.",
    ],
  },
];

export const education = [
  {
    school: "University of Washington",
    credential: "B.S. Computer Science",
    dates: "2012 — 2016",
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  outcome: string;
  stack: string[];
  accent: string;
  featured?: boolean;
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    slug: "lumen",
    name: "Lumen",
    summary:
      "An incident-first observability dashboard that stitches traces, logs, and deploys into one timeline.",
    outcome: "Median time-to-detect dropped from 18 minutes to under 4.",
    stack: ["TypeScript", "Next.js", "ClickHouse", "OpenTelemetry"],
    accent: "#14b8a6",
    featured: true,
    github: "https://github.com/johndoe/lumen",
    live: "https://lumen.johndoe.dev",
  },
  {
    slug: "nimbus-notes",
    name: "Nimbus Notes",
    summary:
      "A collaborative editor with presence, comments, and offline-first sync for distributed product teams.",
    outcome: "Adopted by 12 squads; 92% of weekly notes now live in-product.",
    stack: ["React", "Yjs", "PostgreSQL", "WebSockets"],
    accent: "#38bdf8",
    featured: true,
    github: "https://github.com/johndoe/nimbus-notes",
    live: "https://nimbus.johndoe.dev",
  },
  {
    slug: "harbor-maps",
    name: "Harbor Maps",
    summary:
      "A transit visualization that overlays live vehicle positions on accessible, print-friendly route maps.",
    outcome: "Helped riders recover 11 minutes on average during service disruptions.",
    stack: ["MapLibre", "Python", "Redis", "TypeScript"],
    accent: "#f59e0b",
    featured: true,
    github: "https://github.com/johndoe/harbor-maps",
    live: "https://maps.harborapps.dev",
  },
  {
    slug: "kiln",
    name: "Kiln",
    summary:
      "A design-token studio that generates theme packages for web and native from a single source of truth.",
    outcome: "Replaced four ad-hoc style sheets with one published token pipeline.",
    stack: ["TypeScript", "Figma API", "Node"],
    accent: "#a78bfa",
    github: "https://github.com/johndoe/kiln",
    live: "https://kiln.johndoe.dev",
  },
  {
    slug: "ledgerlight",
    name: "Ledgerlight",
    summary:
      "Internal billing explorer that makes invoice anomalies visible before they reach finance.",
    outcome: "Caught $240k in mis-attributed charges in the first two quarters.",
    stack: ["Next.js", "Postgres", "dbt"],
    accent: "#fb7185",
    github: "https://github.com/johndoe/ledgerlight",
    live: "https://ledgerlight.johndoe.dev",
  },
  {
    slug: "quiet-queue",
    name: "Quiet Queue",
    summary:
      "A humane on-call rotation tool with quiet hours, handoff notes, and paging that respects time zones.",
    outcome: "Pages outside agreed hours fell by 61% without missing SLAs.",
    stack: ["Go", "React", "PagerDuty API"],
    accent: "#34d399",
    github: "https://github.com/johndoe/quiet-queue",
    live: "https://quietqueue.johndoe.dev",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
