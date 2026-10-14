export const site = {
  name: "Freddy Paniagua",
  title: "Aspiring software engineer",
  location: "Santa Monica, California",
  email: "freddyrp06@gmail.com",
  summary:
    "Hi, I'm Freddy. I'm an aspiring software engineer studying computer science and linguistics at UCLA. I compare different AI systems on real tasks to see where each one is reliable and where it falls short.",
  socials: [
    { label: "Email", href: "mailto:freddyrp06@gmail.com" },
    { label: "GitHub", href: "https://github.com/freddypaniagua" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/freddyrp" },
  ],
} as const;

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const skills = [
  "C++",
  "Python",
  "Java",
  "TypeScript",
  "Qt",
  "Active Directory",
  "Intune",
  "ServiceNow",
];

export const languages = "English (native) · Spanish (fluent)";

export const about = [
  "Hi, I'm Freddy. I'm an aspiring software engineer studying computer science and linguistics at UCLA. I'm interested in how different AI systems approach the same problem, and I test them on real tasks to see where their reasoning holds and where it breaks down.",
  "I work part time for the City of Santa Monica. I started as a client services intern in 2024 and was hired as an administrative intern in January 2025, with more hours and a wider set of responsibilities. I now provide information technology support at City Hall and across the Santa Monica Public Library, for a city workforce of about 2,300.",
];

export type Role = {
  company: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "City of Santa Monica",
    title: "Administrative Intern",
    dates: "January 2025 — Present",
    location: "Santa Monica, California",
    summary:
      "Information technology support at City Hall and the Santa Monica Public Library, for a city workforce of about 2,300.",
    bullets: [
      "Support departments at City Hall and every branch of the Santa Monica Public Library.",
      "Keep Active Directory records up to date.",
      "Diagnose and fix hardware problems.",
      "Maintain Crestron systems and update their firmware.",
    ],
  },
  {
    company: "City of Santa Monica",
    title: "Client Services Intern",
    dates: "June 2024 — November 2024",
    location: "Santa Monica, California",
    summary: "Technical support for city staff across multiple sites.",
    bullets: [
      "Repaired desktops and laptops during the 2024 CrowdStrike outage, including machines at the Santa Monica Police Station.",
      "Diagnosed hardware and software problems so staff could get back to work.",
      "Coordinated equipment pickup and delivery, and gave support at multiple city locations.",
    ],
  },
];

export const education = [
  {
    school: "University of California, Los Angeles",
    credential: "Computer Science and Linguistics",
    dates: "2026 — Present",
  },
  {
    school: "Santa Monica College",
    credential: "Computer Science",
    dates: "2024 — 2026",
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  body: string;
  bullets: string[];
  stack: string[];
  github: string;
};

export const projects: Project[] = [
  {
    slug: "cscan",
    name: "CSCAN",
    summary:
      "A Windows desktop app that watches a Counter-Strike 2 match, reads the HUD with OCR, and recommends what to buy that round.",
    body: "Screen capture, the economy engine, and Tesseract all run. The HUD regions are still hand-calibrated pixel rectangles, so matching them across resolutions is the current work. Without Tesseract installed, the app falls back to a mock OCR mode so the rest of the pipeline can be tested.",
    bullets: [
      "Built a C++ and Qt 6 desktop app that captures the screen, reads money, score, and the buy timer with Tesseract, and recommends a full buy, force, eco, or save.",
      "Side comes from the shape of the CT/T emblem, so a recolored HUD still works, and spectator detection keeps the reading off a teammate's money after you die.",
      "The app reads pixels on screen and leaves game memory alone.",
    ],
    stack: ["C++17", "Qt 6", "Tesseract", "CMake"],
    github: "https://github.com/freddypaniagua/cscan",
  },
  {
    slug: "tipping-point",
    name: "Tipping Point",
    summary:
      "A daily browser game: five weigh-ins, and for each one you guess how many of one object it takes to balance another.",
    body: "Everyone gets the same five pairs that day, and each guess is one shot. An SVG scale piles your objects onto the pan, swings, and settles before the real count and a one-line fact appear. A stepper jumps through magnitudes (1, 2, 5, 10, 20…) and you can also type an exact number. Points come from how far the guess is as a ratio, so being twice off counts the same on fifty whales as on five million ants.",
    bullets: [
      "Built a TypeScript and Vite game where a day's puzzle is five weigh-ins, scored only after an SVG scale has settled on your guess.",
      "Scoring uses the log of guess over answer, with Vitest covering the tilt bands, so large and small objects are judged on the same scale.",
    ],
    stack: ["TypeScript", "Vite", "Vitest"],
    github: "https://github.com/freddypaniagua/tipping-point-game",
  },
];
