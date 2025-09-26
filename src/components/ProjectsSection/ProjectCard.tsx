"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  CardMedia,
  CardActions,
} from "@mui/material";
import { GitHub, Launch, Visibility, VisibilityOff } from "@mui/icons-material";
import { Project } from "@/constants/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
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

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Card
      ref={cardRef}
      sx={{
        maxWidth: 450,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        transition: "all 0.6s ease",
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        opacity: isVisible ? 1 : 0,
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
          transform: isVisible ? "translateY(-8px)" : "translateY(40px)",
        },
      }}
    >
      {/* Project Image */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.name}
          sx={{
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        {/* Category Badge */}
        <Chip
          label={project.category}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            },
          }}
        />
        {/* Featured Badge */}
        {project.featured && (
          <Chip
            label="Featured"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Project Name */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: "#000",
            fontSize: "1.4rem",
          }}
        >
          {project.name}
        </Typography>

        {/* Project Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            fontSize: "0.95rem",
          }}
        >
          {showFullDescription
            ? project.description
            : truncateDescription(project.description)}
        </Typography>

        {/* Show More/Less Button */}
        {project.description.length > 120 && (
          <Button
            size="small"
            onClick={toggleDescription}
            startIcon={showFullDescription ? <VisibilityOff /> : <Visibility />}
            sx={{
              mb: 2,
              textTransform: "none",
              color: "#666",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </Button>
        )}

        {/* Technologies */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#e0e0e0",
                color: "#666",
                fontSize: "0.75rem",
                "&:hover": {
                  borderColor: "#000",
                  color: "#000",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
        <Button
          variant="outlined"
          size="medium"
          startIcon={<GitHub />}
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            flex: 1,
            textTransform: "none",
            borderColor: "#000",
            color: "#000",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
              borderColor: "#000",
            },
          }}
        >
          Code
        </Button>
        {project.liveLink && (
          <Button
            variant="contained"
            size="medium"
            startIcon={<Launch />}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,
              textTransform: "none",
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
