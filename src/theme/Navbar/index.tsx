import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "@theme-original/Navbar";
import { SignIn } from "@site/src/components/SignIn";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@site/src/theme";
import { useColorMode } from "@docusaurus/theme-common";

export default function NavbarWrapper(props: Record<string, unknown>) {
  const { colorMode } = useColorMode();
  const theme = createTheme({ darkMode: colorMode === "dark" });

  useEffect(() => {
    const navbarItemsRight = document.querySelector(".navbar__items--right");
    if(!navbarItemsRight)
      return;
  
    const oldSigninCont = document.querySelector("#signin-container");
    if(oldSigninCont)
      oldSigninCont.remove();

    const signinContainer = document.createElement("div");
    signinContainer.id = "signin-container";
    signinContainer.style.marginLeft = "16px";
    navbarItemsRight.appendChild(signinContainer);
  
    const root = createRoot(signinContainer);
    root.render((
      <ThemeProvider {...{ theme }}>
        <SignIn />
      </ThemeProvider>
    ));
  }, [theme]);

  return (
    <>
      <Navbar {...props} />
    </>
  );
}
