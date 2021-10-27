import React from "react";
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

interface Props {
  index: number;
  project: {
    name: string;
    src: string;
    align: string;
    description: string;
    descriptionAlign: string;
    tools: string;
  };
}

export const ProjectContent: React.FC<Props> = ({ index, project }) => {
  if (index % 2 === 0) {
    return (
      <WrapItem key={index}>
        <Box mt={5} width={1000}>
          <Flex justify={project.align}>
            <Img
              m={10}
              borderRadius="md"
              boxShadow="dark-lg"
              src={project.src}
              alt={project.name}
              maxW={550}
            />

            <Flex justify={project.descriptionAlign} w="100%" align="center">
              <Wrap m={10}>
                <Text align="end">
                  <Box pb={4}>
                    <Text fontSize="3xl" color="gray.400">
                      {project.name}
                    </Text>
                    <Text fontSize="md" color="gray.500">
                      {project.description}
                    </Text>
                  </Box>

                  <Text as="kbd" fontSize="sm" color="gray.400">
                    {project.tools}
                  </Text>
                </Text>
              </Wrap>
            </Flex>
          </Flex>
        </Box>
      </WrapItem>
    );
  }
  return (
    <WrapItem key={index}>
      <Box mt={5} outlineColor="whiteAlpha.100" width={1000}>
        <Flex justify={project.align}>
          <Flex justify={project.descriptionAlign} w="100%" align="center">
            <Wrap m={10}>
              <Text align="start">
                <Box pb={4}>
                  <Text fontSize="3xl" color="gray.400">
                    {project.name}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    {project.description}
                  </Text>
                </Box>

                <Text as="kbd" fontSize="sm" color="gray.400">
                  {project.tools}
                </Text>
              </Text>
            </Wrap>
          </Flex>
          <Img
            m={10}
            borderRadius="md"
            boxShadow="dark-lg"
            src={project.src}
            alt={project.name}
            maxW={550}
          />
        </Flex>
      </Box>
    </WrapItem>
  );
};
