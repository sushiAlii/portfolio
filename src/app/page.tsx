import { Container, Typography, Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          color="text.secondary"
        >
          Built with Next.js 15 and Material-UI
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600 }}>
          This is your new portfolio project. Start building your amazing
          portfolio with the latest Next.js App Router and Material-UI
          components.
        </Typography>
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
