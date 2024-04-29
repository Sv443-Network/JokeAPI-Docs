import Stack from "@mui/material/Stack";
import Layout from "@theme/Layout";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {
  Button,
  Checkbox,
  FormControlLabel, Link, TextField, 
  useTheme}from "@mui/material";
import VisuallyHiddenInput from "@site/src/components/VisuallyHiddenInput";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useUserStore } from "@site/src/store";

// Go to bottom for regex rules description

export default function ProfileSettings() {
  const userData = useUserStore(
    state => state
  );

  const { email, username, avatarUrl, setUser } = userData;

  const [actionData, setActionData] = useState({
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

  const theme = useTheme();

  // TODO: link to the oauth process idk how it works
  const oauth_providers = {
    Github: { providerLink: "https://github.com", iconUrl: "/img/github.svg" },
    Discord: { providerLink: "https://discord.com",
      iconUrl: "/img/discord.svg" },
    Google: { providerLink: "https://google.com", iconUrl: "/img/google.svg" }
  };

  useEffect(() => console.log(userData), [userData]);

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
              color='ActiveCaption'
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
          
          <Divider variant='fullWidth' />

          <Stack gap={1}>
            <Typography
              fontSize='22px'
              fontWeight={400}
              fontFamily='Inter Variable'
            >
              Profile Picture
            </Typography>

            <Typography
              fontSize='16px'
              fontWeight={300}
              fontFamily='Inter Variable'
              color='text.primary'
            >
              We only support .mlg under 420mb
            </Typography>

            <Stack flexDirection='row' gap={3} mt={1}>
              <Box
                component='img'
                src={avatarUrl}
                width='100px'
                height='100px'
                borderRadius={2}
                border='1px solid'
                borderColor={theme.palette.primary.main}
                sx= {{ objectFit: "cover",
                  objectPosition: "10% top"}}
              />
              
              <Box my='auto'>
                <Button
                  component='label'
                  color='primary'
                  variant='contained'
                  role={undefined}
                  tabIndex={-1}
                  onClick={() => setActionData({
                    ...actionData,
                    isAvatarModalOpen: true
                  })}
                  sx={{
                    backgroundColor: "#673AB7",
                    ":hover": { backgroundColor: "#673AB7"}
                  }}
                >
                  Upload
                </Button>
              </Box>
              
              <Modal
                open={actionData.isAvatarModalOpen}
                onClose={() => { setActionData({ 
                  ...actionData,
                  isAvatarModalOpen: false
                });
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Stack
                  component={Paper}
                  width='max-content'
                  padding='35px'
                  gap={3}
                >
                  <Button
                    id='avatar-input'
                    component='label'
                    role={undefined}
                    variant='contained'
                    tabIndex={-1}
                    onMouseEnter={() => {
                      setActionData({
                        ...actionData,
                        isPhotoHovered: true
                      });
                    }}
                    onMouseLeave={() => {
                      setActionData({
                        ...actionData,
                        isPhotoHovered: false
                      });
                    }
                    }
                    sx={{
                      width: "max-content",
                      padding: 0,
                      borderRadius: 2,
                      mx: { xs: "auto", sm: "0" },
                      backgroundColor: "rgba(0,0,0,0)",
                      ":hover": { backgroundColor: "gray" }
                    }}
                  >
                    <Box
                      component='img'
                      borderRadius={2}
                      tabIndex={-2}
                      mx='auto'
                      alt='Avatar'
                      src={actionData.avatarUrlInput ?? avatarUrl}
                      height={"200px"}
                      width={"200px"}
                      sx={{
                        objectFit: "cover",
                        objectPosition: "10% top",
                        transition: ".2s",
                        opacity: actionData.isPhotoHovered ? 0.5 : 1,
                      }}
                    />

                    <PhotoLibrary
                      sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        opacity: actionData.isPhotoHovered ? 1 : 0,
                        transition: ".2s",
                        color: "white",
                      }}
                    />

                    <VisuallyHiddenInput
                      type='file'
                      accept='image/png, image/jpeg'
                      onChange={(e) => {
                        const newPicture = e.currentTarget?.files?.[0] as File;
                        
                        if (newPicture) {
                          setActionData({
                            ...actionData,
                            avatarUrlInput: URL.createObjectURL(newPicture)
                          });
                        }
                      }}
                    />
                  </Button>

                  <Stack flexDirection='row' gap={2} mx='auto'>
                    <Button variant='outlined' color='error' onClick={() => {
                      setActionData({
                        ...actionData,
                        isAvatarModalOpen: false
                      });
                    }}>
                      Cancel
                    </Button>
                    
                    <Button
                      variant='contained'
                      color='success'
                      disabled={ avatarUrl === actionData.avatarUrlInput }
                      onClick={() => {
                        setUser({
                          ...userData,
                          avatarUrl: actionData.avatarUrlInput
                        });

                        setActionData({
                          ...actionData,
                          isAvatarModalOpen: false
                        });
                      }}
                    >
                      Confirm
                    </Button>
                  </Stack>
                </Stack>
              </Modal>
            </Stack>
          </Stack>

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
                onClick={(e) => {
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
            disabled={email ? false : true}
            control={<Checkbox
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

          
          <Stack gap={1}>
            <Typography 
              fontSize='22px'
              fontWeight={400}
              fontFamily='Inter Variable'
            >
              Connected Accounts
            </Typography>

            <Typography
              fontSize='16px'
              fontWeight={300}
              fontFamily='Inter Variable'
              color='text.primary'
              mb={2}
            >
              Manage your sign in methods
            </Typography>

            <Stack id='connected-providers' gap={2}>
              {Object.keys(oauth_providers).map((key, index) =>
                <Stack
                  key={key}
                  flexDirection='row'
                  justifyContent='space-between'
                >
                  <Stack flexDirection='row' gap={1.5} width='20%'>
                    <img
                      src={oauth_providers[key as keyof typeof oauth_providers]
                        .iconUrl as string}
                      alt={key}
                      width='35px'
                    />

                    <Typography
                      my='auto'
                      fontSize='14px'
                      fontWeight={300}
                    >
                      {key}
                    </Typography>
                  </Stack>

                  <Typography
                    fontWeight={300}
                    fontSize={"14px"}
                    width='10%'
                    whiteSpace='nowrap'
                    my='auto'
                  >
                    Connected
                  </Typography>

                  <Link
                    href={oauth_providers[key as keyof typeof oauth_providers]
                      .providerLink}
                    width='20%'
                    my='auto'
                    whiteSpace='nowrap'
                  >
                    Disconnect
                  </Link>
                </Stack>
              )}
            </Stack>
          </Stack>
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
