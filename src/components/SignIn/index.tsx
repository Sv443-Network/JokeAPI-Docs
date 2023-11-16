import { Button, ButtonBase, Paper, Popover, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useCallback, useState, MouseEvent } from "react";
import { useUserStore } from "@site/src/store";
import { OAuthProvider } from "@site/src/types";

interface SignInProps {
  
}

// TODO
const placeholderUrl = "https://picsum.photos/100/100";

export function SignIn(_props: SignInProps) {
  const { username, avatarUrl } = useUserStore();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const toggleProfilePopover = useCallback(({ currentTarget }: MouseEvent<HTMLElement>) => {
    currentTarget && !popoverOpen && setAnchorEl(currentTarget);
    setPopoverOpen(!popoverOpen);
  }, [popoverOpen, setAnchorEl, setPopoverOpen]);

  const oauthSignIn = useCallback((provider: OAuthProvider) => {
    alert(`TODO: sign in with ${provider}`);
  }, []);

  return (
    <>
      <ButtonBase onClick={toggleProfilePopover} color="primary">
        <Paper>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 6,
          }}>
            {username ? (
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginRight: 10,
              }}>
                <img
                  src={avatarUrl ?? placeholderUrl}
                  alt="Avatar"
                  style={{
                    marginRight: 10,
                    width: 32,
                    height: 32,
                    borderRadius: "10%",
                  }}
                />
                <Typography variant="body1">{username}</Typography>
              </div>
            ) : (
              <>
                <Typography variant="body1">Sign in</Typography>
              </>
            )}
            {popoverOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </div>
        </Paper>
      </ButtonBase>
      <Popover
        anchorEl={anchorEl}
        open={popoverOpen}
        onClose={toggleProfilePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
        }}>
          <Typography variant="h6">Sign in with OAuth:</Typography>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 15,
            gap: 5,
          }}>
            <Button variant="contained" onClick={() => oauthSignIn("github")}>GitHub</Button>
            <Button variant="contained" onClick={() => oauthSignIn("discord")}>Discord</Button>
            <Button variant="contained" onClick={() => oauthSignIn("google")}>Google</Button>
          </div>
        </div>
      </Popover>
    </>
  );
}
