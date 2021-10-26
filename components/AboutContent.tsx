import { Flex, Center, Text, Container } from "@chakra-ui/react";

export const AboutContent = () => {
  const aboutMe: string =
    "Hi! I'm Ali! a freelance software engineer based in the Philippines." +
    "My passion in programming started in college during data structure classes. Back then I didn't really intended to strive being a software engineer," +
    'and here I am writing an "about me" content for my portfolio. ';

  return (
    <Center h="100%">
      <div>
        <Text fontSize="4xl" align="center">
          About Me 🍣
        </Text>

        <Container maxW="container.md" m={10} p={10}>
          <Text align="center">{aboutMe}</Text>
        </Container>
      </div>
    </Center>
  );
};
