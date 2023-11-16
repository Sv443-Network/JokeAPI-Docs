import { createTheme as muiCreateTheme } from "@mui/material";

interface CreateThemeOptions {
  darkMode: boolean;
}

export const createTheme = ({ darkMode }: CreateThemeOptions) => muiCreateTheme({
  palette: {
    ...(darkMode ? {
      mode: "dark",
      background: { default: "#1b1b1d" },
      text: { primary: "#fff", secondary: "#e3e3e3" },
      primary: { main: "#2e8555" },
      secondary: { main: "#25c2a0" },
      error: { main: "#cf6679" },
    } : {
      mode: "light",
      background: { default: "#fff" },
      text: { primary: "#000", secondary: "#1c1e21" },
      primary: { main: "#4ebf81" },
      secondary: { main: "#25c2a0" },
      error: { main: "#cf6679" },
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
});
