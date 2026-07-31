import { Nav, Hero, About, Experience, Work, Contact, Footer } from "@/components";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
