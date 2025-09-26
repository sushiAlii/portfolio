"use client";

import { useState, useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";

interface NavigationProps {
  sections: string[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  const sectionIds = useMemo(
    () => ({
      Intro: "intro",
      "About Me": "about",
      Experiences: "experiences",
      Projects: "projects",
      Contact: "contact",
    }),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const element = document.getElementById(
          sectionIds[section as keyof typeof sectionIds]
        );
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, sectionIds]);

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(
      sectionIds[sectionName as keyof typeof sectionIds]
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      {sections.map((section, index) => {
        const isActive = activeSection === index;

        return (
          <Box
            key={section}
            onClick={() => scrollToSection(section)}
            sx={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.5,
              p: 1,
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: -8,
                top: "50%",
                transform: "translateY(-50%)",
                width: 3,
                height: isActive ? 30 : 0,
                backgroundColor: (theme) => theme.palette.primary.main,
                borderRadius: "0 2px 2px 0",
                transition: "height 0.3s ease",
              }}
            />

            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                fontWeight: isActive ? 600 : 400,
                color: (theme) =>
                  isActive
                    ? theme.palette.text.primary
                    : theme.palette.text.secondary,
                textAlign: "center",
                whiteSpace: "nowrap",
                transition: "all 0.3s ease",
                opacity: isActive ? 1 : 0.7,
                borderRadius: 2,
                backdropFilter: "blur(10px)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {section}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Navigation;
