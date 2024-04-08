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
              secondary: "#000",
            },
            primary: { main: "#19161d" },
            secondary: { main: "#FFC107" },
            error: { main: "#cf6679" },
            contrastText: "#000",
            blacke: { main: "#0000" },
          }
        : {
            mode: "light",
            background: { default: "#fff" },
            text: { primary: "#000" },
            primary: { main: "#673AB7" },
            secondary: { main: "#FFC107" },
            error: { main: "#cf6679" },
            contrastText: "#fff",
            secondaryBackground: "#F0F0F0",
            blacke: { main: "#000" },
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
      MuiInputLabel: {
        defaultProps: { variant: "outlined" },
        styleOverrides: {
          root: {
            fontSize: "13px",
          },
        },
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "serif"',
    },
  });
