import { ThemeProvider } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";
import { ComponentProps } from "react";
import { createTheme } from "../theme";

export default function MuiThemeProvider(props: Omit<ComponentProps<typeof ThemeProvider>, "theme">) {
  const { colorMode } = useColorMode();
  const theme = createTheme({ darkMode: colorMode === "dark" });

  return (
    <ThemeProvider {...{ theme }}>
      {props.children}
    </ThemeProvider>
  );
}
