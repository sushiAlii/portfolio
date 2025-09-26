"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    primary: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#666666",
      light: "#999999",
      dark: "#333333",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: "#000000",
      fontSize: "2.5rem",
      letterSpacing: "-0.02em",
      "@media (min-width: 900px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontWeight: 500,
      color: "#000000",
    },
    h3: {
      fontWeight: 500,
      color: "#000000",
    },
    h4: {
      fontWeight: 400,
      color: "#666666",
      fontSize: "1.2rem",
      "@media (min-width: 900px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontWeight: 500,
      color: "#000000",
    },
    h6: {
      fontWeight: 500,
      color: "#000000",
    },
    body1: {
      color: "#666666",
      fontSize: "1.1rem",
      lineHeight: 1.7,
    },
    body2: {
      color: "#666666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
        contained: {
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#333333",
          },
        },
        outlined: {
          borderColor: "#000000",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#f5f5f5",
            borderColor: "#000000",
          },
        },
        sizeLarge: {
          fontSize: "1.2rem",
          px: 8,
          py: 2.5,
          minHeight: 56,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});
