import Stack from "@mui/material/Stack";
import Layout from "@theme/Layout";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Button, FormControl, TextField } from "@mui/material";
import VisuallyHiddenInput from "@site/src/components/VisuallyHiddenInput";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function ProfileSettings() {
  const [isPfpModalOpen, setPfpModalOpen] = useState(false);
  const [isEditingUsername, setEditingUsername] = useState(false);
  const [isEditingEmail, setEditingEmail] = useState(false);
  const [profilePicture, setProfilePicture] = useState("/img/default-pfp.png");
  const [newProfilePicture, setNewProfilePicture] = useState("/img/default-pfp.png");
  const [isPhotoHovered, setPhotoHovered] = useState(false);
  // TODO: replace placeholder with user state email
  const [email, setEmail] = useState("example@gmail.com");
  const [newEmail, setNewEmail] = useState(email);

  return (
    <Layout>
      <Box fontFamily='Inter Variable' display='flex' justifyContent='center' alignContent='center' py='5vh'>
        <Stack component={Paper} width='650px' gap={3} borderRadius='25px' p='35px' sx={{ backgroundColor: "Background" }}>
          <Stack gap={1}>
            <Typography fontFamily='Inter Variable' fontWeight={400} fontSize='27px' color='ActiveCaption'>
              Profile Settings
            </Typography>

            <Typography fontFamily='Inter Variable' fontSize='16px' fontWeight={300}>
              Manage your profile settings
            </Typography>
          </Stack>
          
          <Divider variant='fullWidth' />

          <Stack id='username-form'>
            <Typography mb={1} fontSize='16px' fontWeight={400} fontFamily='Inter Variable'>Username</Typography>

            <Stack flexDirection='row' gap={1}>
              <TextField variant='outlined' size='small' sx={{ maxWidth: "50%" }} inputProps={{ style: { fontSize: "14px", fontWeight: 300 } }}
                onChange={(e) => {
                  if (e.currentTarget.value !== email) {
                    setEditingEmail(true);
                    setNewEmail(e.currentTarget.value);
                  } else if (e.currentTarget.value === email)
                    setEditingEmail(false);
                  setNewEmail(e.currentTarget.value);
                }}
              />
            
              <Button variant='contained' color='primary' sx= {{ backgroundColor: "#673AB7", ":hover": { backgroundColor: "#673AB7"} }}>Change</Button>
            </Stack>
          </Stack>

          <Stack id='username-form'>
            <Typography mb={1} fontSize='16px' fontWeight={400} fontFamily='Inter Variable'>Email</Typography>

            <Stack flexDirection='row' gap={1}>
              <TextField variant='outlined' size='small' sx={{ maxWidth: "45%" }} inputProps={{ style: { fontSize: "14px", fontWeight: 300 } }}
                onChange={(e) => {
                  if (e.currentTarget.value !== email) {
                    setEditingEmail(true);
                    setNewEmail(e.currentTarget.value);
                  } else if (e.currentTarget.value === email)
                    setEditingEmail(false);
                  setNewEmail(e.currentTarget.value);
                }}
              />
            
              <Button variant='contained' color='primary' disabled={isEditingEmail ? false : true} sx= {{ backgroundColor: "#673AB7", ":hover": { backgroundColor: "#673AB7"} }}>Change</Button>
            </Stack>
          </Stack>

          <Divider variant='fullWidth' />

          <Stack gap={1}>
            <Typography fontSize='18px' fontWeight={400} fontFamily='Inter Variable'>Profile Picture</Typography>

            <Typography fontSize='16px' fontWeight={300} fontFamily='Inter Variable' color='text.primary'>We only support .mlg under 420mb</Typography>

            <Stack flexDirection='row' gap={3} mt={1}>
              {/* TODO: get image from user state */}
              <Box component='img' src={profilePicture} borderRadius={999} width='100px' height='100px' sx= {{ objectFit: "cover",
                objectPosition: "10% top"}} />
              
              <Box my='auto'>
                <Button
                  component='label'
                  color='primary'
                  variant='contained'
                  role={undefined}
                  tabIndex={-1}
                  onClick={() => setPfpModalOpen(true)}
                  sx= {{ backgroundColor: "#673AB7", ":hover": { backgroundColor: "#673AB7"} }}
                >
                  Upload
                </Button>
              </Box>
              
              <Modal open={isPfpModalOpen} onClose={() => { setPfpModalOpen(false); setNewProfilePicture("/img/default-pfp.png"); }} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Stack component={Paper} width='max-content' padding='35px' gap={3}>
                  <Button
                    component='label'
                    role={undefined}
                    variant='contained'
                    tabIndex={-1}
                    onMouseEnter={() => {
                      setPhotoHovered(true);
                    }}
                    onMouseLeave={() => setPhotoHovered(false)}
                    sx={{
                      width: "max-content",
                      padding: 0,
                      borderRadius: 999,
                      mx: { xs: "auto", sm: "0" },
                      backgroundColor: "#000",
                      ":hover": { backgroundColor: "#000" }
                    }}
                  >
                    <Box
                      component='img'
                      borderRadius={999}
                      mx='auto'
                      id='profile-picture'
                      alt='Profile Picture'
                      src={newProfilePicture}
                      height={"200px"}
                      width={"200px"}
                      sx={{
                        objectFit: "cover",
                        objectPosition: "10% top",
                        transition: ".2s",
                        opacity: isPhotoHovered ? 0.5 : 1,
                      }}
                    />

                    <PhotoLibrary
                      sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        opacity: isPhotoHovered ? 1 : 0,
                        transition: ".2s",
                        color: "white",
                      }}
                    />

                    <VisuallyHiddenInput
                      type='file'
                      accept='image/png, image/jpeg'
                      onChange={(e) => {
                        const newPicture = e.currentTarget?.files?.[0];

                        if (newPicture) {
                          setNewProfilePicture(
                            URL.createObjectURL(newPicture)
                          );
                        }
                        console.log("reirog");
                      }}
                    />
                  </Button>

                  <Stack flexDirection='row' gap={2} mx='auto'>
                    <Button variant='outlined' color='error' onClick={() => {
                      setNewProfilePicture("/img/default-pfp.png");
                      setPfpModalOpen(false);
                    }}>Cancel</Button>
                    
                    <Button variant='contained' color='success' onClick={() => { setProfilePicture(newProfilePicture);
                      setPfpModalOpen(false);
                    }}>Confirm</Button>
                  </Stack>
                </Stack>
              </Modal>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}
