"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  IconButton,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface ExperienceCardProps {
  company: string;
  logo?: string;
  position: string;
  tenure: string;
  description: string;
  technologies?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  logo,
  position,
  tenure,
  description,
  technologies = [],
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: 600,
        width: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        transition: "all 0.6s ease",
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        opacity: isVisible ? 1 : 0,
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transform: isVisible ? "translateY(-2px)" : "translateY(30px)",
        },
      }}
    >
      <CardContent
        sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <Avatar
              src={logo}
              alt={`${company} logo`}
              sx={{
                width: 56,
                height: 56,
                bgcolor: "#f5f5f5",
                color: "#666",
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              {!logo && company.charAt(0).toUpperCase()}
            </Avatar>

            <Stack>
              <Typography variant="h6" fontWeight={600}>
                {position}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {company}
              </Typography>
            </Stack>
          </Stack>

          <IconButton
            onClick={handleExpandClick}
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <ExpandMore />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {tenure}
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Stack spacing={2}>
            <Typography variant="body1">{description}</Typography>
            {technologies.length > 0 && (
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "#e0e0e0",
                      color: "#666",
                      "&:hover": {
                        borderColor: "#000",
                        color: "#000",
                      },
                    }}
                  />
                ))}
              </Stack>
            )}
          </Stack>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
