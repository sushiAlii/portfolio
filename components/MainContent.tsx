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
      name: "Black Scoop Saguiran Inventory Management",
      src: "assets/blackscoop.png",
      align: "start",
      description:
        "This is my first project as a freelance software engineer. Manage, manipulate, oversee your inventory, and see what's left and used.",
      descriptionAlign: "end",
      tools: "Vue  Vuetify  PostgreSQL  Supabase",
    },
    {
      name: "Sushi Wave",
      src: "assets/sushi-wave.png",
      align: "end",
      description:
        "A personal project created in culmination of learning solidity. Wave portal grants user to wave using ETH in Rinkeby Test Net",
      descriptionAlign: "start",
      tools: "Solidity React Chakra UI Hardhat",
    },
    {
      name: "Axiefy",
      src: "assets/axiefy.png",
      align: "start",
      description:
        "Created in collaboration with @carlomigueldy, for Supabase Hackathon held at October 2021. Axiefy is an app for Axie Infinity Managers/Players which could help them monitor their SLPs",
      descriptionAlign: "end",
      tools: "Nuxt Vue Vuetify PostgreSQL Supabase",
    },
    {
      name: "PSD Tracking ",
      src: "assets/document-tracking.png",
      align: "end",
      description:
        "Started as my undergraduate CAPSTONE project, PSD Tracking System aims to help ease the workload of Procurement and Supply Department of MSU-IIT from recording the whereabouts of the documents.",
      descriptionAlign: "start",
      tools: "Vue Vuetify PostgreSQL Laravel",
    },
  ];
  return (
    <>
      <Center pt={12}>
        <div>
          <Text fontSize="4xl" align="center" color="gray.500">
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
