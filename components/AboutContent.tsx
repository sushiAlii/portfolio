import { Flex, Center, Text, Container } from "@chakra-ui/react";

export const AboutContent = () => {
  return (
    <Center mt={10}>
      <div>
        <Text fontSize="4xl" align="center">
          About Me
        </Text>

        <Container m={10} p={10} bg="blue.300">
          <Text>Hi! I`m Ali, a software engineer based in Philippines.</Text>
        </Container>
      </div>
    </Center>
  );
};
