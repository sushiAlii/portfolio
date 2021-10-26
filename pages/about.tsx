import type { NextPage } from "next";
import { AboutContent } from "../components/AboutContent";
import { Navbar } from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutContent />
    </div>
  );
};
export default About;
