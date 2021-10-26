import {
  Flex,
  Center,
  Text,
  Stack,
  Box,
  Wrap,
  Img,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import inventory from "../assets/blackscoop.png";
import { ProjectContent } from "./ProjectContent";

export const MainContent = () => {
  const projects = [
    {
      name: "Black Scoop Saguiran Inventory Management App",
      src: "assets/blackscoop.png",
      align: "start",
      description: "Gi",
      descriptionAlign: "end",
    },
    {
      name: "Sushi Wave",
      src: "assets/sushi-wave.png",
      align: "end",
      description: "",
      descriptionAlign: "start",
    },
    {
      name: "Axiefy",
      src: "assets/axiefy.png",
      align: "start",
      description: "",
      descriptionAlign: "end",
    },
    {
      name: "PSD Tracking (Document Tracking System)",
      src: "assets/document-tracking.png",
      align: "end",
      description: "",
      descriptionAlign: "start",
    },
  ];
  return (
    <>
      <Center pt={12}>
        <div>
          <Text fontSize="4xl" align="center">
            Projects
          </Text>

          <Wrap pt={6} maxW="5xl" justify="center">
            {projects.map((project, index) => {
              return (
                <ProjectContent key={index} project={project} index={index} />
              );
            })}
          </Wrap>
        </div>
      </Center>
    </>
  );
};
