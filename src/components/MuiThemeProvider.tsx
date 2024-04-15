import { ThemeProvider } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";
import { ComponentProps } from "react";
import { createTheme } from "../theme";
import { Box, CssBaseline } from "@mui/material";

import "@fontsource-variable/inter";

import "@fontsource/roboto";

// Supports weights 100-900
import "@fontsource-variable/roboto-condensed";

// Supports weights 100-900
import "@fontsource-variable/outfit";

import "@fontsource/poppins";

import "@fontsource/staatliches";

export default function MuiThemeProvider(
  props: Omit<ComponentProps<typeof ThemeProvider>, "theme">,
) {
  const { colorMode } = useColorMode();
  const theme = createTheme({ darkMode: colorMode === "dark" });

  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />

      {props.children}
      
    </ThemeProvider>
  );
}
