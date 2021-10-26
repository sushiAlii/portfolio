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
  };
}

export const ProjectContent: React.FC<Props> = ({ index, project }) => {
  if (index % 2 === 0) {
    return (
      <WrapItem key={index}>
        <Box mt={5} outlineColor="whiteAlpha.100" width={1000}>
          <Flex justify={project.align}>
            <Img
              m={10}
              borderRadius="lg"
              boxShadow="dark-lg"
              src={project.src}
              alt={project.name}
              maxW={450}
            />

            <Flex justify={project.descriptionAlign}>
              <Text fontSize="2xl" m={10}>
                {project.name}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </WrapItem>
    );
  } else {
    return (
      <WrapItem key={index}>
        <Box mt={5} outlineColor="whiteAlpha.100" width={1000}>
          <Flex justify={project.align}>
            <Flex justify={project.descriptionAlign}>
              <Text fontSize="2xl" m={10}>
                {project.name}
              </Text>
            </Flex>
            <Img
              m={10}
              borderRadius="lg"
              boxShadow="dark-lg"
              src={project.src}
              alt={project.name}
              maxW={450}
            />
          </Flex>
        </Box>
      </WrapItem>
    );
  }
};
