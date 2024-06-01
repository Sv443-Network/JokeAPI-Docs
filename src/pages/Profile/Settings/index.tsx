import Stack from "@mui/material/Stack";
import Layout from "@site/src/components/Layout";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useUserStore } from "@site/src/store";
import { ConnectedAccounts } from "./ConnectedAccounts";

// TODO: link to the oauth process idk how it works
export const oauth_providers = {
  Github: { providerLink: "https://github.com", iconUrl: "/img/github.svg" },
  Discord: { providerLink: "https://discord.com",
    iconUrl: "/img/discord.svg" },
  Google: { providerLink: "https://google.com", iconUrl: "/img/google.svg" }
};

export type ProfileSettingsActionData = {
  isAvatarModalOpen: boolean;
  isEditingUsername: boolean;
  isEditingEmail: boolean;
  isPhotoHovered: boolean;
  avatarUrlInput: string | undefined;
};

// Go to bottom for regex rules description

export default function ProfileSettings() {
  const userData = useUserStore(
    state => state
  );

  const { email, username, avatarUrl, setUser } = userData;

  const [actionData, setActionData] = useState<ProfileSettingsActionData>({
    isAvatarModalOpen: false,
    isEditingUsername: false,
    isEditingEmail: false,
    isPhotoHovered: false,
    avatarUrlInput: avatarUrl
  });

  const [formData, setFormData] = useState({
    username: { value: username, error: false },
    email: { value: email, error: false },
    avatarUrl: { value: avatarUrl, error: false },
  });

  const emailRegex = new RegExp(
    "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/");

  const usernameRegex = new RegExp(
    "^(?=.{2,32}$).?[a-z0-9_]+(?:.[a-z0-9_]+)*.?$"
  );

  return (
    <Layout>
      <Box
        fontFamily='Inter Variable'
        display='flex'
        justifyContent='center'
        alignContent='center'
        py={{ xs: "0", sm: "5vh" }}
      >
        <Stack
          component={Paper}
          width='650px' gap={3}
          borderRadius='25px' p='35px'
          sx={{ backgroundColor: "Background" }}
        >
          <Stack gap={1}>
            <Typography
              fontFamily='Inter Variable'
              fontWeight={400}
              fontSize='27px'
              color='InfoText'
            >
              Account Settings
            </Typography>

            <Typography
              fontFamily='Inter Variable'
              fontSize='16px'
              fontWeight={300}
            >
              Manage your account settings
            </Typography>
          </Stack>
          
          {/* <Divider variant='fullWidth' />

          <ProfilePicUpload {...{
            avatarUrl,
            actionData,
            setActionData,
            userData,
            setUser,
          }} /> */}

          <Divider variant='fullWidth' />

          <Stack id='username-form'>
            <Typography
              mb={1}
              fontSize='16px'
              fontWeight={400}
              fontFamily='Inter Variable'
            >
              Username
            </Typography>

            <Stack flexDirection='row' gap={1}>
              <TextField
                variant='outlined'
                size='small'
                error={formData.username.error}
                defaultValue={formData.username.value}
                sx={{ maxWidth: { xs: "100%" , md: "50%" } }}
                inputProps={{ style: { fontSize: "14px", fontWeight: 300 } }}
                onChange={(e) => {
                  setFormData({ 
                    ...formData,
                    username: {
                      ...formData.username,
                      value: e.currentTarget.value
                    }
                  });

                  if (usernameRegex.test(e.currentTarget.value))
                    setFormData({
                      ...formData,
                      username: { ...formData.username, error: false}
                    });
                  else if (!usernameRegex.test(e.currentTarget.value))
                    setFormData({
                      ...formData,
                      username: { ...formData.username, error: true}
                    });


                  if (e.currentTarget.value !== username) {
                    setActionData({
                      ...actionData,
                      isEditingUsername: true,
                    });
                  } else if (e.currentTarget.value === username) {
                    setActionData({ ...actionData, isEditingUsername: false });
                  }
                }}
              />
            
              <Button
                variant='contained'
                color='primary'
                disabled={
                  (actionData.isEditingUsername ? false : true) ||
                  formData.username.error
                }
                sx={{
                  backgroundColor: "#673AB7",
                  ":hover": { backgroundColor: "#673AB7"}
                }}
                onClick={() => {
                  setUser({
                    ...userData,
                    username: formData.username.value
                  });
                
                  setActionData({ ...actionData, isEditingUsername: false });
                }
                }
              >
                Change
              </Button>
            </Stack>
          </Stack>

          <Stack id='email-form'>
            <Typography
              mb={1}
              fontSize='16px'
              fontWeight={400}
              fontFamily='Inter Variable'
            >
              Email
            </Typography>

            <Stack flexDirection='row' gap={1}>
              <TextField
                variant='outlined'
                size='small'
                defaultValue={email}
                error={formData.email.error}
                sx={{ maxWidth: { xs: "100%" , md: "50%" } }}
                inputProps={{ style: { fontSize: "14px", fontWeight: 300 } }}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: { ...formData.email, value: e.currentTarget.value }
                  });
                    
                  // Validation
                  if (emailRegex.test(e.currentTarget.value))
                    setFormData({
                      ...formData,
                      email: { 
                        ...formData.email,
                        error: false
                      }
                    });
                  else if (!emailRegex.test(e.currentTarget.value))
                    setFormData({
                      ...formData,
                      email: { 
                        ...formData.email,
                        error: true
                      }
                    });

                  if (e.currentTarget.value !== email) {
                    setActionData({
                      ...actionData,
                      isEditingEmail: true
                    });
                  } else if (e.currentTarget.value === email) {
                    setActionData({
                      ...actionData,
                      isEditingEmail: true
                    });
                  }
              
                }}
              />
            
              <Button
                variant='contained'
                color='primary'
                disabled={(
                  actionData.isEditingEmail ? false : true) ||
                  (formData.email.error)
                }
                sx={{
                  backgroundColor: "#673AB7",
                  ":hover": { backgroundColor: "#673AB7"}
                }}
                onClick={() => setUser({
                  ...userData,
                  email: formData.email.value
                })}
              >
                Change
              </Button>
            </Stack>
          </Stack>

          <FormControlLabel
            control={
              <Checkbox
                size='small'
                onChange={(e) => setUser({
                  ...userData,
                  emailNotifs: e.currentTarget.value
                })}
              />
            }
            label={
              <Typography
                fontSize='14px'
                display='inline'
                color={email ? "CaptionText" : "InactiveCaptionText"}
              >
                Receive email notifications
              </Typography>
            }
          />

          <Divider variant='fullWidth' />

          <ConnectedAccounts />
        </Stack>
      </Box>
    </Layout>
  );
}

// Email regex checks for:
// - One or more word characters at the beginning (username).
// - Optional periods or hyphens separating word characters in the username.
// - An "@" symbol.
// - A domain name consisting of word characters separated by
// periods or hyphens.
// - A top-level domain (like ".com", ".org", etc.) with 2 or 3 characters.

// Username regex checks for:
// ^ - start of string
// (?=.{2,32}$) - the string must contain two to thirty-two chars
// (?!(?:everyone|here)$) - the string cannot be equal to "everyone" or "here"
// \.? - an optional dot
// [a-z0-9_]+ - one or more lowercase letters/digits/underscores
// (?:\.[a-z0-9_]+)* - zero or more sequences of a . 
// and then one or more lowercase letters/digits/underscores
// \.? - an optional dot
// $ - end of string.
