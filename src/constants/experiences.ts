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
    tenure: "Jan 2025 - Present",
    description:
      "As part of Research and Development Team, I helped in building experimental bleeding-edge application and technologies.",
    technologies: ["Dioxus", "Lit", "Rust", "Javascript"],
  },
  {
    company: Company.ALT_RESEARCH,
    logo: "/experiences/alt-research.jpg",
    position: "Full Stack Developer",
    tenure: "Jan 2025 - Nov 2025",
    description:
      "Managed and maintained various web3 projects especially their rollup wizard application which is used by their clients to create and manage their own rollups. One of the pioneering team in building Rumour, a decentralized social cryptotrading platform for web3.",
    technologies: ["React", "Typescript", "Blockchain", "Go"],
  },
  {
    company: Company.BALLYS,
    logo: "/experiences/ballys-interactive.jpg",
    position: "Frontend Engineer",
    tenure: "Jul 2024 - Jan 2025",
    description:
      "Built highly responsive and robust UI components as part of the iGaming team, leveraging micro-frontend architecture across multiple ventures inside Bally's ecosystem.",
    technologies: ["React", "Typescript", "Micro-frontend"],
  },
  {
    company: Company.RTX,
    logo: "/experiences/rakuten-travel-xchange.jpg",
    position: "Full Stack Developer",
    tenure: "Dec 2021 - Jul 2024",
    description:
      "Worked across various travel booking applications, ensuring a seamless user experience by building responsive UI components, optimizing for SEO, and enhancing performance. Developed fully tested RESTful APIs for backend services.",
    technologies: ["Vue", "Express", "Javascript", "Cypress", "Playwright"],
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
  Javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  Typescript: "https://www.typescriptlang.org/",
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
