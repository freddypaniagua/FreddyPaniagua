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
  status?: string;
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "tipping-point",
    name: "Tipping Point",
    summary:
      "An estimation game that runs in the browser: guess how many of one object it takes to balance another on a scale, like blue whales against the Eiffel Tower. After you commit to a guess, an animated scale stacks up your objects and tips toward the heavier side, and your score is based on how many times too high or too low you were, so huge and tiny answers are judged fairly. It's designed as a daily game where every player gets the same 5 puzzles.",
    body: "Each guess is one shot. An SVG scale piles your objects onto the pan, swings, and settles before the real count and a one-line fact appear. A stepper jumps through magnitudes (1, 2, 5, 10, 20…) and you can also type an exact number. Scoring uses the log of guess over answer, with Vitest tests covering the tilt bands.",
    bullets: [
      "Built a TypeScript and Vite game where a day's puzzle is five weigh-ins, scored only after an SVG scale has settled on your guess.",
      "Scoring uses the log of guess over answer, with Vitest covering the tilt bands, so large and small objects are judged on the same scale.",
    ],
    stack: ["TypeScript", "Vite", "Vitest", "GitHub Pages"],
    status: "In development: one puzzle set is playable now.",
    link: {
      href: "https://freddypaniagua.github.io/tipping-point-game/",
      label: "Play",
    },
  },
  {
    slug: "cscan",
    name: "CSCAN",
    summary:
      "A real-time economy advisor for Counter-Strike 2. It captures the screen with Qt, uses Tesseract OCR to read your money, side, and score off the game's display, and runs that through a C++ decision engine that recommends what to buy each round: full buy, force buy, eco, or save. It works only from what's on screen and never reads or changes the game's memory.",
    body: "Side comes from the shape of the CT/T emblem, so a recolored HUD still works, and spectator detection keeps the reading off a teammate's money after you die. Without Tesseract installed, the app falls back to a mock OCR mode so the rest of the pipeline can be tested.",
    bullets: [
      "Built a C++ and Qt 6 desktop app that captures the screen, reads money, score, and the buy timer with Tesseract, and recommends a full buy, force, eco, or save.",
      "Side comes from the shape of the CT/T emblem, so a recolored HUD still works, and spectator detection keeps the reading off a teammate's money after you die.",
      "The app reads pixels on screen and leaves game memory alone.",
    ],
    stack: ["C++17", "Qt 6", "Tesseract", "CMake"],
    status: "In progress: making screen reading work reliably at every resolution.",
  },
  {
    slug: "drop-tones",
    name: "Drop Tones",
    summary:
      "A browser-based DJ battle game where two players mix music live and compete head-to-head, or one player takes on a bot. Sounds are generated in code with the Web Audio API and kept in sync on a shared beat, key, and chord progression, so any combination sounds good together. I'm testing two ways to control the mix: dropping sounds onto characters that each play one part of the song, or a DJ mixer modeled on the real equipment DJs use.",
    body: "Each theme is a single file that sets its sounds, tempo, and combos, so new sound packs need no new code. Node.js tools pull Creative Commons sound packs from Freesound to build new themes.",
    bullets: [
      "Built a browser DJ battle game, playable against a bot or a friend on the same computer, with sounds synthesized in code using the Web Audio API.",
      "Every sound shares one beat, key, and chord progression, so any combination of parts plays in sync and sounds good together.",
      "Wrote Node.js tools that pull Creative Commons sound packs from Freesound and turn them into new themes without new code.",
    ],
    stack: ["JavaScript", "Web Audio API", "Node.js"],
    status: "Early development.",
  },
];
