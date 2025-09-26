import { Button, Stack, Typography } from "@mui/material";

const IntroductorySection: React.FC = () => {
  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      spacing={3}
    >
      <Typography variant="h1">Ali Asgar Laut</Typography>

      <Typography variant="h4" maxWidth={600}>
        Full Stack Developer
      </Typography>

      <Typography variant="body1" maxWidth={450}>
        I create beautiful, functional web experiences with modern technologies.
        Passionate about clean code and thoughtful design.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" size="large">
          View My Work
        </Button>
        <Button variant="outlined" size="large">
          Get In Touch
        </Button>
      </Stack>
    </Stack>
  );
};

export default IntroductorySection;
