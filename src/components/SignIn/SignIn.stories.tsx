// SignIn.stories.tsx
import React from "react";
import { Meta } from "@storybook/react";
import { useUserStore } from "@site/src/store";
import { SignIn } from ".";

export default {
  title: "Components/SignIn",
  component: SignIn,
} as Meta;

export const NotSignedIn = () => {
  const setUser = useUserStore(state => state.setUser);
  setUser({
    avatarUrl: undefined,
    username: undefined,
  });
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-end",
    }}>
      <SignIn />
    </div>
  );
};
  
export const SignedIn = () => {
  const setUser = useUserStore(state => state.setUser);
  setUser({
    avatarUrl: "https://github.com/Sv443.png",
    username: "Sv443",
  });
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-end",
    }}>
      <SignIn />
    </div>
  );
};
