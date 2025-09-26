export interface Experience {
  company: string;
  logo?: string;
  position: string;
  tenure: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Alt Research Ltd.",
    logo: "/experiences/alt-research.jpg",
    position: "Full-Stack Developer",
    tenure: "Nov 2024 - Sep 2025",
    description:
      "Managed and maintained various web3 projects especially their rollup wizard application which is used by their clients to create and manage their own rollups. One of the pioneering team in building Rumour, a decentralized social cryptotrading platform for web3.",
    technologies: ["React", "TypeScript", "Blockchain", "Cypress"],
  },
  {
    company: "Bally's Interactive",
    logo: "/experiences/ballys-interactive.jpg",
    position: "Frontend Engineer",
    tenure: "Jul 2024 - Jan 2025",
    description:
      "Built highly responsive and robust UI components as part of the iGaming team, leveraging micro-frontend architecture across multiple ventures inside Bally's ecosystem.",
    technologies: [
      "React",
      "TypeScript",
      "Micro-frontend",
      "Jest",
      "Web Sockets",
    ],
  },
  {
    company: "Rakuten Travel Xchange",
    logo: "/experiences/rakuten-travel-xchange.jpg",
    position: "Frontend Engineer",
    tenure: "Dec 2021 - Nov 2024",
    description:
      "Worked across various travel booking applications, ensuring a seamless user experience by building responsive UI components, optimizing for SEO, and enhancing performance. Developed fully tested RESTful APIs for backend services.",
    technologies: [
      "Vue",
      "Express.js",
      "JavaScript",
      "Jest",
      "Cypress",
      "Playwright",
    ],
  },
];
