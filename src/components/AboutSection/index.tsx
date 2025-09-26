"use client";

import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Avatar,
  Stack,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Code,
  Coffee,
  Gamepad,
  MusicNote,
  PhotoCamera,
  TravelExplore,
  WaterDrop,
} from "@mui/icons-material";

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const interests = [
    { icon: <Code />, label: "Coding" },
    { icon: <Coffee />, label: "Coffee" },
    { icon: <WaterDrop />, label: "Swimming" },
    { icon: <PhotoCamera />, label: "Photography" },
    { icon: <Gamepad />, label: "Gaming" },
    { icon: <MusicNote />, label: "Music" },
    { icon: <TravelExplore />, label: "Travel" },
  ];

  return (
    <Stack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
      ref={aboutRef}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "linear-gradient(45deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)",
          transform: isVisible ? "scale(1)" : "scale(0)",
          transition: "transform 0.8s ease",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: 150,
          height: 150,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 100%)",
          transform: isVisible ? "scale(1)" : "scale(0)",
          transition: "transform 1s ease 0.2s",
        }}
      />

      <Stack
        spacing={6}
        sx={{
          maxWidth: 1000,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease",
          }}
        >
          About Me
        </Typography>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={6}
          alignItems="center"
          sx={{
            width: "100%",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 280,
                height: 280,
                borderRadius: "50%",
                border: "2px solid #e0e0e0",
                animation: isVisible ? "rotate 20s linear infinite" : "none",
                "@keyframes rotate": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                border: "1px solid #f0f0f0",
                animation: isVisible
                  ? "rotate 30s linear infinite reverse"
                  : "none",
              }}
            />

            <Avatar
              src="/me.jpg"
              alt="Ali Asgar Laut"
              sx={{
                width: 200,
                height: 200,
                border: "4px solid white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                bgcolor: "#f5f5f5",
                fontSize: "4rem",
                fontWeight: 600,
                color: "#666",
              }}
            >
              AL
            </Avatar>
          </Box>

          <Stack
            spacing={4}
            sx={{
              flex: 1,
              maxWidth: isMobile ? "100%" : 500,
            }}
          >
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  Hi, I&apos;m Ali
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: "text.secondary",
                    fontSize: "1.1rem",
                  }}
                >
                  I&apos;m a passionate Full Stack Developer with a love for
                  creating innovative digital solutions. With expertise in
                  modern web technologies, I enjoy turning complex problems into
                  simple, beautiful, and intuitive solutions.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: "text.secondary",
                    fontSize: "1.1rem",
                  }}
                >
                  When I&apos;m not coding, you&apos;ll find me exploring
                  different things, lately I&apos;ve been into swimming,
                  capturing moments with photography, and playing badminton!
                </Typography>
              </Stack>
            </Paper>

            {/* Interests */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  color: "#000",
                }}
              >
                What I Love
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
                {interests.map((interest, index) => (
                  <Chip
                    key={index}
                    icon={interest.icon}
                    label={interest.label}
                    variant="outlined"
                    sx={{
                      borderColor: "#e0e0e0",
                      color: "#666",
                      "&:hover": {
                        borderColor: "#000",
                        color: "#000",
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutSection;
