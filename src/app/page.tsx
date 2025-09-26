import {
  ExperienceSection,
  IntroductorySection,
  ProjectsSection,
  AboutSection,
  ContactSection,
} from "@/components";
import Navigation from "@/components/Navigation";
import { Stack, Box } from "@mui/material";

export default function Home() {
  const sections = ["Intro", "About Me", "Experiences", "Projects", "Contact"];

  return (
    <Box sx={{ position: "relative" }}>
      <Stack sx={{ px: 4 }}>
        <IntroductorySection />

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection />

        <ContactSection />
      </Stack>

      <Navigation sections={sections} />
    </Box>
  );
}
