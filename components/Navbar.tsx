import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  useColorMode,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={{ base: "4", md: "8" }} pt={10}>
      <Flex
        h={20}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx="auto"
        maxW="5xl"
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text fontSize="3xl">SushiAlii</Text>
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text>Projects</Text>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Text>About Me</Text>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
