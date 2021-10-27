import { Box, Stack, Text, Center } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";

export const Footer = (props: ButtonGroupProps) => (
  <Box
    className="footer"
    as="footer"
    role="contentinfo"
    py="9"
    px={{ base: "4", md: "8" }}
  >
    <Box mx="auto" maxW="7xl">
      <Stack>
        <Center>
          <Text as="kbd" color="gray.400">
            Made by SushiAlii 🍣
          </Text>
        </Center>

        <Center>
          <Stack align="center">
            <ButtonGroup variant="ghost" color="gray.400" {...props}>
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/ali-laut-224496205/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="https://github.com/sushiAlii"
                aria-label="GitHub"
                icon={<FaGithub fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="https://twitter.com/AliiiLucmanLaut"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="20px" />}
              />
            </ButtonGroup>
          </Stack>
        </Center>
      </Stack>
    </Box>
  </Box>
);
