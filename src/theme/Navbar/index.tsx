import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "@theme-original/Navbar";
import SignIn from "@site/src/components/SignIn";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@site/src/theme";
import { useColorMode } from "@docusaurus/theme-common";

export default function NavbarWrapper(props: Record<string, unknown>) {
  const { colorMode } = useColorMode();
  const theme = createTheme({ darkMode: colorMode === "dark" });

  useEffect(() => {
    const navbarItemsRight = document.getElementsByClassName(
      "navbar__items--right",
    )?.[0];
    if (navbarItemsRight) {
      const signinContainer = document.createElement("div");
      signinContainer.id = "signin-container";
      signinContainer.style.marginLeft = "10px";
      navbarItemsRight.appendChild(signinContainer);

      const signinRoot = createRoot(signinContainer);
      signinRoot.render(
        <ThemeProvider {...{ theme }}>
          <SignIn />
        </ThemeProvider>,
      );
    }

    return () => {
      document.getElementById("signin-container")?.remove();
    };
  }, [theme]);

  return (
    <>
      <Navbar {...props} />
    </>
  );
}
