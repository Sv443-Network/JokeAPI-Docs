import { Button, ButtonBase, Paper, Popover, Stack, Typography, useTheme } from "@mui/material";
import { Google, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useCallback, useState, MouseEvent } from "react";
import clsx from "clsx";
import { useUserStore } from "@site/src/store";
import { OAuthProvider } from "@site/src/types";
import { navigate } from "@site/src/utils";
import styles from "./index.module.css";

interface SignInProps {
  
}

// TODO
const placeholderUrl = "https://picsum.photos/100/100";

export function SignIn(_props: SignInProps) {
  const { username, avatarUrl } = useUserStore();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();

  const openProfilePopover = useCallback(({ currentTarget }: MouseEvent<HTMLElement>) => {
    currentTarget?.classList.contains("signin-buttonbase") && setAnchorEl(currentTarget);
    setPopoverOpen(true);
  }, [setAnchorEl, setPopoverOpen]);

  const closeProfilePopover = useCallback(() => {
    setPopoverOpen(false);
  }, [setPopoverOpen]);

  const oauthSignIn = useCallback((provider: OAuthProvider) => {
    alert(`TODO: sign in with ${provider}`);
  }, []);

  return (
    <>
      <ButtonBase className="signin-buttonbase" onClick={openProfilePopover} color="primary">
        <Paper sx={{ backgroundColor: theme.palette.primary.main }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 44,
            ...(username ? {
              paddingLeft: 10,
              paddingRight: 10,
            } : {
              paddingLeft: 18,
              paddingRight: 12,
            }),
          }}>
            {username ? (
              <div className={clsx(styles.loggedInBtnContainer)}>
                <img
                  src={avatarUrl ?? placeholderUrl}
                  alt="Avatar"
                  style={{
                    marginRight: 10,
                    width: 32,
                    height: 32,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "10%",
                  }}
                />
                <Typography variant="body1">{username}</Typography>
              </div>
            ) : (
              <>
                <Typography variant="body1" style={{ marginRight: 5 }}>Sign in</Typography>
              </>
            )}
            {popoverOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </div>
        </Paper>
      </ButtonBase>
      <Popover
        anchorEl={anchorEl}
        open={popoverOpen}
        onClose={closeProfilePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className={clsx(styles.popoverContainer)}>
          {username ? (
            <Stack direction="column" gap={2}>
              <Button variant="contained" onClick={() => navigate("/profile?TODO")}>Profile</Button>
              <Button variant="contained" onClick={() => navigate("/profile/submissions?TODO")}>Submissions</Button>
              <Button variant="outlined" onClick={() => alert("TODO: sign out & refresh")} sx={{ marginTop: 2 }}>Sign out</Button>
            </Stack>
          ) : (
            <>
              <Typography variant="h6">Sign in with OAuth:</Typography>
              <div className={clsx(styles.popoverLoginContainer)}>
                {/* TODO: SVG images & put in "img/" */}
                <Button
                  variant="contained"
                  onClick={() => oauthSignIn("github")}
                  startIcon={<img className={clsx(styles.buttonImg)} src="https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/github.png" />}
                >
                GitHub
                </Button>
                <Button
                  variant="contained"
                  onClick={() => oauthSignIn("discord")}
                  startIcon={<img className={clsx(styles.buttonImg)} src="https://raw.githubusercontent.com/Sv443/BetterYTM/develop/assets/external/discord.png" />}
                >
                Discord
                </Button>
                <Button
                  variant="contained"
                  onClick={() => oauthSignIn("google")}
                  startIcon={<Google />}
                >
                Google
                </Button>
              </div>
            </>
          )}
        </div>
      </Popover>
    </>
  );
}
