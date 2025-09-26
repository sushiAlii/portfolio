export interface Project {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  image: string;
  technologies: string[];
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Blackscoop Inventory Management System",
    description:
      "A web application for managing inventory for Blackscoop (Saguiaran branch). It allows the users to view the inventory, add items, and update items.",
    githubLink: "https://github.com/sushiAlii/sales_inventory",
    liveLink: "https://www.blackscoopalssaguiaran.com/",
    image: "/blackscoop.png",
    technologies: ["Vue", "Supabase", "PostgreSQL"],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    name: "Axiefy",
    description:
      "A hackathon project from Supabase, in collaboration with my friend, Carlo. It is a web application that allows Axie Infinity managers to manage their scholars' earnings.",
    githubLink: "https://github.com/carlomigueldy/axiefy",
    liveLink: "https://axiefy.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/45052332/136742862-d1064d1a-cdce-440a-b5d2-03e7214fe50c.png",
    technologies: ["Nuxt", "Vue", "Supabase", "PostgreSQL"],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    name: "Salsila",
    description:
      "Salsila derived from Arabic term 'سلسلة' which means chain, link, or connection. It is a web application that allows users to build and connect geneological trees. Currently, frontend is still pending to be implemented.",
    githubLink: "https://github.com/sushiAlii/salsila-backend",
    liveLink: "",
    image: "",
    technologies: ["Golang", "PostgreSQL"],
    category: "Backend",
    featured: false,
  },
  {
    id: 4,
    name: "Wave Portal",
    description:
      "A simple project creating and implementing a wave smart contract inside Rinkeby Testnet. Users can also leave a small message upon triggering wave.",
    githubLink: "https://github.com/sushiAlii/wave-portal",
    liveLink: "https://sushi-wave.vercel.app/",
    image: "/wave.png",
    technologies: ["Solidity", "React", "Hardhat", "ethers.js"],
    category: "Blockchain",
    featured: false,
  },
];
