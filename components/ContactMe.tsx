import { Center, Text, Box, Link } from "@chakra-ui/react";

export const ContactMe = () => {
  const email: string = "aliasgar.laut@gmail.com";
  return (
    <>
      <Box py={10}>
        <Center>
          <Text fontSize="4xl" color="gray.400">
            Don`t be Shy
          </Text>
        </Center>
        <Center my={4}>
          <Box maxW={400}>
            <Text color="gray.500" align="center">
              I`m always eager to sharpen my skills, and is open to any
              <Text as="del" color="gray.400">
                {" "}
                (I mean..not really any)
              </Text>{" "}
              opportunities! My inbox is always open and I`ll always send you a
              reply! Email me at{" "}
              <Text as="kbd" color="gray.400">
                <Link href={"mailto:" + email}>{email}</Link>
              </Text>
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
};
