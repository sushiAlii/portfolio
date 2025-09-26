"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack, IconButton, Container } from "@mui/material";
import { Email } from "@mui/icons-material";
import { socialLinks } from "@/constants/socials";

const email = "aliasgar.laut@gmail.com";

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 8,
        transition: "all 0.6s ease",
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            sx={{
              background: "linear-gradient(45deg, #000000, #666666)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#666",
              fontWeight: 400,
              maxWidth: 600,
            }}
          >
            I&apos;m always open to discussing new opportunities, creative
            projects, or just having a chat about technology.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#888",
              maxWidth: 500,
            }}
          >
            Feel free to reach out through any of the platforms below or send me
            an email directly.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              borderRadius: 3,
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                cursor: "pointer",
              },
            }}
            onClick={() => window.open(`mailto:${email}`)}
          >
            <Email sx={{ color: "#000000", fontSize: 28 }} />
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.text.primary,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {email}
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Stack
                  spacing={1}
                  key={social.name}
                  sx={{
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <IconButton
                    onClick={() => window.open(social.url, "_blank")}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: social.color,
                        borderColor: social.color,
                        transform: "scale(1.1)",
                        boxShadow: `0 8px 32px ${social.color}40`,
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      },
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: 32,
                        color: social.color,
                        transition: "color 0.3s ease",
                      }}
                    />
                  </IconButton>

                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      textAlign: "center",

                      fontWeight: 500,
                      color: "#666",
                      fontSize: "0.8rem",
                    }}
                  >
                    {social.name}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: "#999",
              fontStyle: "italic",
            }}
          >
            Let&apos;s build something amazing together! 🚀
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;
