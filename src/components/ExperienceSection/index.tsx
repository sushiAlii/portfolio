import { Typography, Grid, Stack } from "@mui/material";
import { experiences } from "@/constants/experiences";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection: React.FC = () => {
  return (
    <Stack
      id="experiences"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      spacing={10}
    >
      <Typography variant="h2">Experiences</Typography>

      <Grid container spacing={2} width="100%" maxWidth={1000}>
        {experiences.map((experience, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <ExperienceCard
              company={experience.company}
              logo={experience.logo}
              position={experience.position}
              tenure={experience.tenure}
              description={experience.description}
              technologies={experience.technologies}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ExperienceSection;
