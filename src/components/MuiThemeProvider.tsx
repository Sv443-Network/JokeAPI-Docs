import { ThemeProvider } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";
import { ComponentProps } from "react";
import { createTheme } from "../theme";
import { CssBaseline } from "@mui/material";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
