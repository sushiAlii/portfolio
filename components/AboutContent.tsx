import {
  Flex,
  Center,
  Text,
  Container,
  Avatar,
  Box,
  Img,
  Wrap,
  WrapItem,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export const AboutContent = () => {
  const aboutMe: string =
    "Hi! I'm Ali! a freelance software engineer based in the Philippines." +
    "My passion in programming started in college during data structure classes. Back then I didn't really intended to strive being a software engineer," +
    'and here I am writing an "about me" content for my portfolio. ';
  const me = {
    img: "assets/my-photo.jpg",
    name: "Ali Asgar L. Laut",
    aboutMe:
      "Hi! I'm Ali! a freelance software engineer based in the Philippines. " +
      "My passion in programming started in college during data structure class. " +
      "I then majored in Database Systems where it gave me proficiency in SQL and handling different kinds of DBMS. " +
      "It is around that time where I started building systems and applications. Which prompted me in learning Javascript Frameworks like Vue and React. " +
      "I am also interested and have been learning Web3 techs like Solidity, and my photo over here is the only decent one I have. :)",
    languages: "Python SQL Java Dart Javascript Typescript Solidity",
    frameworks: "React Vue Flutter Laravel",
    tools: "Apache Nginx Hardhat Supabase",
  };

  return (
    <Center h="100%">
      <div>
        <Center>
          <Text fontSize="4xl" px={4} color="gray.400">
            About Me
          </Text>
        </Center>
        <Box width={1000} p={10}>
          <Wrap>
            <WrapItem>
              <Flex align="start">
                <Text align="start" color="gray.500" mr={10}>
                  <Text>
                    <Text as="span" color="gray.400">
                      Hi! I`m Ali! a freelance software engineer
                    </Text>{" "}
                    based in the Philippines. My passion in programming started
                    in college during data structure class. I then majored in{" "}
                    <Text as="span" color="gray.400">
                      Database Systems
                    </Text>{" "}
                    where it gave me proficiency in SQL and handling different
                    kinds of DBMS. It is around that time where I started
                    building systems and applications. Which prompted me in
                    learning{" "}
                    <Text as="span" color="gray.400">
                      Javascript and PHP Frameworks like Vue, React, Laravel
                    </Text>
                    {", "}
                    etc. I am also interested and have been learning{" "}
                    <Text as="span" color="gray.400">
                      Web3
                    </Text>{" "}
                    techs like{" "}
                    <Text as="span" color="gray.400">
                      Solidity
                    </Text>
                    , and my photo over here is the only decent one I have. :)
                  </Text>
                  <Text my={2} color="gray.500">
                    Here are some of the techs I have been using:
                  </Text>
                  <Text as="kbd" color="gray.400">
                    <UnorderedList>
                      <ListItem>{me.languages}</ListItem>
                      <ListItem>{me.frameworks}</ListItem>
                      <ListItem>{me.tools}</ListItem>
                    </UnorderedList>
                  </Text>
                </Text>
              </Flex>
              <Flex>
                <Img src={me.img} maxW={275} borderRadius="md" ml={10}></Img>
              </Flex>
            </WrapItem>
          </Wrap>
        </Box>
      </div>
    </Center>
  );
};
