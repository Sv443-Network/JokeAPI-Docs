import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useDarkMode } from "storybook-dark-mode";
import React, { ComponentProps } from "react";
import { createTheme } from "../src/theme";

export function ThemeProvider(props: Omit<ComponentProps<typeof MuiThemeProvider>, "theme">) {
  const darkMode = useDarkMode();
  const theme = createTheme({ darkMode });

  return (
    <MuiThemeProvider {...{ theme }}>
      {props.children}
    </MuiThemeProvider>
  );
}
