export interface FeaturedProject {
  name: string;
  kicker: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  liveLabel: string;
  githubLink: string;
}

export const featuredProject: FeaturedProject = {
  name: "Torogan",
  kicker: "Actively maintained",
  description:
    "A rental-listing platform for the Philippines. Browse verified rentals and talk to landlords directly — no middlemen, no finder's fees. I design, build and run the whole thing.",
  technologies: ["Next.js", "Go", "Gin", "PostgreSQL", "AWS"],
  image: "/torogan.png",
  liveLink: "https://www.torogan.com",
  liveLabel: "Visit torogan.com ↗",
  githubLink: "https://github.com/sushiAlii/torogan-fe",
};

export interface BeltProject {
  id: number;
  name: string;
  category: string;
  pillAccent: "sage" | "salmon";
  width: 280 | 300;
  description: string;
  technologies: string[];
  link: string;
}

export const beltProjects: BeltProject[] = [
  {
    id: 1,
    name: "sushi-commit-js",
    category: "CLI",
    pillAccent: "sage",
    width: 280,
    description:
      "AI-written conventional commits from your git diff. Bun + Claude Haiku, zero overhead.",
    technologies: ["TypeScript", "Bun"],
    link: "https://github.com/sushiAlii/sushi-commit-js",
  },
  {
    id: 2,
    name: "Salsila",
    category: "Backend",
    pillAccent: "salmon",
    width: 280,
    description:
      "From سلسلة — chain. Build and connect genealogical trees. Backend live, frontend pending.",
    technologies: ["Go", "PostgreSQL"],
    link: "https://github.com/sushiAlii/salsila-backend",
  },
  {
    id: 3,
    name: "Blackscoop IMS",
    category: "Full stack",
    pillAccent: "sage",
    width: 300,
    description:
      "Inventory management for the Saguiaran branch — view, add and update stock.",
    technologies: ["Vue", "Supabase"],
    link: "https://www.blackscoopalssaguiaran.com/",
  },
  {
    id: 4,
    name: "Axiefy",
    category: "Hackathon",
    pillAccent: "salmon",
    width: 280,
    description:
      "A Supabase hackathon build with Carlo — Axie Infinity managers tracking scholar earnings.",
    technologies: ["Nuxt", "Supabase"],
    link: "https://axiefy.vercel.app/",
  },
  {
    id: 5,
    name: "Wave Portal",
    category: "Blockchain",
    pillAccent: "sage",
    width: 280,
    description:
      "A wave smart contract on Rinkeby — leave a message when you wave.",
    technologies: ["Solidity", "ethers.js"],
    link: "https://sushi-wave.vercel.app/",
  },
];
