import { createTheme as muiCreateTheme } from "@mui/material";

interface CreateThemeOptions {
  darkMode: boolean;
}

export const createTheme = ({ darkMode }: CreateThemeOptions) => muiCreateTheme({
  palette: {
    ...(darkMode ? {
      mode: "dark",
      background: { default: "#1b1b1d" },
      text: { primary: "#fff" },
      primary: { main: "#2e8555" },
      secondary: { main: "#25c2a0" },
      error: { main: "#cf6679" },
    } : {
      mode: "light",
      background: { default: "#fff" },
      text: { primary: "#000" },
      primary: { main: "#2e8555" },
      secondary: { main: "#25c2a0" },
      error: { main: "#cf6679" },
    }),
  },
});
