import { Box, Stack, Text, Center } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  Link,
} from "@chakra-ui/react";

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
          <Text as="kbd" fontSize="sm" color="gray.400">
            Designed & Built by Ali Asgar Laut 🍣
          </Text>
        </Center>

        <Center>
          <Stack align="center">
            <ButtonGroup variant="ghost" color="gray.400" {...props}>
              <Link
                href="https://www.linkedin.com/in/ali-laut-224496205/"
                isExternal
              >
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="20px" />}
                />
              </Link>
              <Link href="https://github.com/sushiAlii" isExternal>
                <IconButton
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="20px" />}
                />
              </Link>
              <Link href="https://twitter.com/AliiiLucmanLaut" isExternal>
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="20px" />}
                />
              </Link>
            </ButtonGroup>
          </Stack>
        </Center>
      </Stack>
    </Box>
  </Box>
);
