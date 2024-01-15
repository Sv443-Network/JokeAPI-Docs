import { ComponentProps } from "react";
import OriginalLayout from "@theme/Layout";
import MuiThemeProvider from "./MuiThemeProvider";

export default function Layout(props: ComponentProps<typeof OriginalLayout>) {
  const { children, ...rest } = props;

  return (
    <OriginalLayout {...rest}>
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    </OriginalLayout>
  );
}
