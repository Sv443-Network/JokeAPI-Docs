import {
  Button,
  ButtonBase,
  Icon,
  Popover,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AutoFixHigh,
  EmailOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { useCallback, useState, MouseEvent, ComponentProps } from "react";
import clsx from "clsx";
import { useUserStore } from "@site/src/store";
import type { OAuthProvider } from "@site/src/types";
import { navigate } from "@site/src/utils";
import styles from "./index.module.css";

type SignInProps = ComponentProps<typeof ButtonBase>;

// TODO
const placeholderUrl = "https://picsum.photos/100/100";

export default function SignIn({ ...rest }: SignInProps) {
  const { username, avatarUrl, setUser } = useUserStore();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();

  const openProfilePopover = useCallback(
    ({ currentTarget }: MouseEvent<HTMLElement>) => {
      currentTarget?.classList.contains("signin-buttonbase") &&
        setAnchorEl(currentTarget);
      setPopoverOpen(true);
    },
    [setAnchorEl, setPopoverOpen],
  );

  const closeProfilePopover = useCallback(() => {
    setPopoverOpen(false);
  }, [setPopoverOpen]);

  const getOAuthLogo = useCallback((provider: OAuthProvider) => {
    return (
      <img
        src={`/img/external/${provider}.svg`}
        style={{ width: "1em", height: "1em" }}
      />
    );
  }, []);

  const oauthSignIn = useCallback((provider: OAuthProvider) => {
    alert(`TODO: sign in with ${provider}`);
  }, []);

  const devSignIn = useCallback(() => {
    setUser({
      username: "Sv443",
      avatarUrl: "https://github.com/Sv443.png",
    });
    closeProfilePopover();
  }, [closeProfilePopover, setUser]);

  return (
    <>
      <ButtonBase
        className='signin-buttonbase'
        onClick={openProfilePopover}
        color='primary'
        {...rest}
      >
        <div
          style={{
            // border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 5,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 40,
              ...(username
                ? {
                    paddingLeft: 4,
                    paddingRight: 10,
                  }
                : {
                    paddingLeft: 14,
                    paddingRight: 10,
                  }),
            }}
          >
            {username ? (
              <div className={clsx(styles.loggedInBtnContainer)}>
                <img
                  src={avatarUrl ?? placeholderUrl}
                  alt='Avatar'
                  style={{
                    marginRight: 10,
                    width: 32,
                    height: 32,
                    // backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: 2,
                  }}
                />
                <Typography
                  variant='body1'
                  style={{ fontWeight: 500 }}
                  color={theme.palette.text.secondary}
                >
                  {username}
                </Typography>
              </div>
            ) : (
              <>
                <Typography
                  variant='body1'
                  style={{ fontWeight: 500, marginRight: 5 }}
                  color={theme.palette.text.secondary}
                >
                  Sign in
                </Typography>
              </>
            )}
            {popoverOpen ? (
              <KeyboardArrowUp
                style={{ color: theme.palette.text.secondary }}
              />
            ) : (
              <KeyboardArrowDown
                style={{ color: theme.palette.text.secondary }}
              />
            )}
          </div>
        </div>
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
            <Stack
              direction='column'
              gap={2}
            >
              <Button
                color='secondary'
                onClick={() => navigate("/profile?TODO")}
              >
                Profile
              </Button>
              <Button
                color='secondary'
                onClick={() => navigate("/profile/submissions?TODO")}
              >
                Submissions
              </Button>
              <Button
                color='secondary'
                variant='outlined'
                onClick={() => alert("TODO: sign out & refresh")}
                sx={{ marginTop: 2 }}
              >
                Sign out
              </Button>
            </Stack>
          ) : (
            <>
              <Stack
                direction='column'
                gap={2}
              >
                <Button
                  color='secondary'
                  onClick={() => {
                    oauthSignIn("github");
                  }}
                  className={clsx(styles.oauthBtn)}
                  startIcon={getOAuthLogo("github")}
                >
                  Sign in with GitHub
                </Button>

                <Button
                  color='secondary'
                  onClick={() => oauthSignIn("discord")}
                  className={clsx(styles.oauthBtn)}
                  startIcon={getOAuthLogo("discord")}
                >
                  Sign in with Discord
                </Button>

                <Button
                  color='secondary'
                  onClick={() => oauthSignIn("google")}
                  className={clsx(styles.oauthBtn)}
                  startIcon={getOAuthLogo("google")}
                >
                  Sign in with Google
                </Button>

                <Button
                  color='secondary'
                  variant='outlined'
                  onClick={devSignIn}
                  className={clsx(styles.oauthBtn)}
                  startIcon={<AutoFixHigh />}
                >
                  Debug
                </Button>
              </Stack>
            </>
          )}
        </div>
      </Popover>
    </>
  );
}
