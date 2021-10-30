import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box backgroundImage="url(/assets/background.svg)">
        <Box>
          <Component {...pageProps} />;
        </Box>
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;
