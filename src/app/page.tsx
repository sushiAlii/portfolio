import {
  ExperienceSection,
  IntroductorySection,
  ProjectsSection,
  AboutSection,
} from "@/components";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack sx={{ px: 4 }}>
      <IntroductorySection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </Stack>
  );
}
