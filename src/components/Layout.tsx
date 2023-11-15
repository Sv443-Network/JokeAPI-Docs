import { ComponentProps } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";
import OriginalLayout from "@theme/Layout";
import { createTheme } from "../theme";

export function Layout(props: ComponentProps<typeof OriginalLayout>) {
  const { children, ...rest } = props;

  return (
    <OriginalLayout {...rest}>
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    </OriginalLayout>
  );
}

function MuiThemeProvider(props: Omit<ComponentProps<typeof ThemeProvider>, "theme">) {
  const { colorMode } = useColorMode();
  const theme = createTheme({ darkMode: colorMode === "dark" });

  return (
    <ThemeProvider {...{ theme }}>
      {props.children}
    </ThemeProvider>
  );
}
