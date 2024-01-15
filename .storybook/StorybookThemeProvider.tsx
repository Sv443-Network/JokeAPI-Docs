import { ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "storybook-dark-mode";
import React, { ComponentProps } from "react";
import { createTheme } from "../src/theme";

export default function StorybookThemeProvider(props: Omit<ComponentProps<typeof ThemeProvider>, "theme">) {
  const darkMode = useDarkMode();
  const theme = createTheme({ darkMode });

  return (
    <ThemeProvider {...{ theme }}>
      {props.children}
    </ThemeProvider>
  );
}
