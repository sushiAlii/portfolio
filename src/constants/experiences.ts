export interface Experience {
  company: Company;
  logo?: string;
  position: string;
  tenure: string;
  description: string;
  technologies?: (Technology | string)[];
}

export type Technology = keyof typeof technologiesLinks;

export enum Company {
  HCL_SOFTWARE = "HCL Software",
  ALT_RESEARCH = "Alt Research Ltd.",
  BALLYS = "Bally's Interactive",
  RTX = "Rakuten Travel Xchange",
}

export const experiences: Experience[] = [
  {
    company: Company.HCL_SOFTWARE,
    logo: "/experiences/hcl-logo.jpeg",
    position: "Senior Software Engineer",
    tenure: "Jan 2025 — Present",
    description:
      "Part of the R&D team building experimental, bleeding-edge applications and technologies.",
    technologies: ["Rust", "Dioxus", "Lit", "JavaScript"],
  },
  {
    company: Company.ALT_RESEARCH,
    logo: "/experiences/alt-research.jpg",
    position: "Full Stack Developer",
    tenure: "Jan 2025 — Nov 2025",
    description:
      "Maintained web3 products including the rollup wizard clients use to spin up and manage their own rollups, and helped pioneer Rumour, a decentralised social cryptotrading platform.",
    technologies: ["React", "TypeScript", "Go", "Blockchain"],
  },
  {
    company: Company.BALLYS,
    logo: "/experiences/ballys-interactive.jpg",
    position: "Frontend Engineer",
    tenure: "Jul 2024 — Jan 2025",
    description:
      "Built responsive, resilient UI components for the iGaming team across a micro-frontend architecture spanning several ventures in the Bally's ecosystem.",
    technologies: ["React", "TypeScript", "Micro-frontend"],
  },
  {
    company: Company.RTX,
    logo: "/experiences/rakuten-travel-xchange.jpg",
    position: "Full Stack Developer",
    tenure: "Dec 2021 — Jul 2024",
    description:
      "Shipped travel-booking experiences end to end — responsive UI, SEO and performance work on the front, fully tested REST services behind.",
    technologies: ["Vue", "Express", "Cypress", "Playwright"],
  },
];

export const technologiesLinks = {
  //  Frameworks
  React: "https://react.dev/",
  Vue: "https://vuejs.org/",
  Express: "https://expressjs.com/",
  Lit: "https://lit.dev/",
  Dioxus: "https://dioxuslabs.com/",

  //  Testing tools
  Jest: "https://jestjs.io/",
  Cypress: "https://www.cypress.io/#create",
  Playwright: "https://playwright.dev/",

  //  Programming Languages
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/",
  Rust: "https://rust-lang.org/",
  Go: "https://go.dev/",

  //    Architecture
  "Micro-frontend": "https://micro-frontends.org",
};

export const COMPANY_LINKS: Record<Company, string> = {
  [Company.HCL_SOFTWARE]: "https://www.hcl-software.com",
  [Company.ALT_RESEARCH]: "https://altresear.ch",
  [Company.BALLYS]:
    "https://www.ballys.com/Our-Brands/ballys-interactive-international/default.aspx",
  [Company.RTX]: "https://solutions.travel.rakuten.com",
};
