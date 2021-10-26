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

export const MainContent = () => {
  const projects = [
    {
      name: "Inventory Management",
      src: "assets/blackscoop.png",
    },
    {
      name: "Sushi Wave",
      src: "assets/sushi-wave.png",
    },
    {
      name: "Axiefy",
      src: "assets/axiefy.png",
    },
  ];
  return (
    <>
      <Center mt={10}>
        <div>
          <Text fontSize="4xl" align="center">
            Projects
          </Text>

          <Wrap mt={10} maxW="5xl" justify="center">
            {projects.map((project, index) => {
              return (
                <WrapItem key={index}>
                  <Box mt={5} outlineColor="whiteAlpha.100">
                    <Flex>
                      <Img
                        m={10}
                        borderRadius="lg"
                        boxShadow="dark-lg"
                        src={project.src}
                        alt={project.name}
                        maxW={400}
                      />
                    </Flex>
                  </Box>
                </WrapItem>
              );
            })}
          </Wrap>
        </div>
      </Center>
    </>
  );
};
