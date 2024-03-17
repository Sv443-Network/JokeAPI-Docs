import { createTheme as muiCreateTheme } from "@mui/material";

interface CreateThemeOptions {
	darkMode: boolean;
}

export const createTheme = ({ darkMode }: CreateThemeOptions) =>
  muiCreateTheme({
    palette: {
      ...(darkMode
        ? {
          mode: "dark",
          background: { default: "#1b1b1d" },
          text: {
            primary: "#fff",
            secondary: "#e3e3e3",
          },
          primary: { main: "#673AB7" },
          secondary: { main: "#FFC107" },
          error: { main: "#cf6679" },
          contrastText: "#000",
        }
        : {
          mode: "light",
          background: { default: "#fff" },
          text: { primary: "#000", secondary: "#333" },
          primary: { main: "#673AB7" },
          secondary: { main: "#FFC107" },
          error: { main: "#cf6679" },
          contrastText: "#fff",
          secondaryBackground: "#F0F0F0",
        }),
    },
    components: {
      MuiButton: {
        defaultProps: { variant: "contained" },
        styleOverrides: {
          root: {
            "&.Mui-disabled": {
              pointerEvents: "unset", // allow :hover styles to be triggered
              cursor: "not-allowed",
            },
          },
          text: { textTransform: "none" },
        },
      },
    },
    typography: {
      fontFamily: "\"Inter\", \"Roboto\", \"serif\"",
    },
  });
