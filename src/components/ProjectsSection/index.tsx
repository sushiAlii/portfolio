import { Typography, Grid, Chip, Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";

const ProjectsSection: React.FC = () => {
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  return (
    <Stack
      id="projects"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      spacing={6}
      sx={{
        py: 8,
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <Typography variant="h2">Projects</Typography>

        <Typography
          variant="h6"
          component="p"
          textAlign="center"
          color="text.secondary"
          maxWidth={600}
        >
          A collection of projects that showcase my skills and passion for
          creating innovative solutions
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
          rowGap={1}
        >
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              variant="outlined"
              sx={{
                borderColor: "#e0e0e0",
                color: "#666",

                "&:hover": {
                  borderColor: "#000",
                  color: "#000",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            />
          ))}
        </Stack>
      </Stack>

      <Grid
        container
        spacing={4}
        sx={{
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {projects.map((project) => (
          <Grid
            key={project.id}
            size={{ xs: 12, sm: 6, lg: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProjectsSection;
