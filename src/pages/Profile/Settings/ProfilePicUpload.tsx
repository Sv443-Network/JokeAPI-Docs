import { PhotoLibrary } from "@mui/icons-material";
import { Box, Button, Modal, Paper, Stack, Typography, useTheme } from "@mui/material";
import VisuallyHiddenInput from "@site/src/components/VisuallyHiddenInput";
import type { ProfileSettingsActionData } from ".";
import type { UserStore } from "@site/src/store";

type ProfilePicUploadProps = {
  avatarUrl: string | undefined;
  actionData: ProfileSettingsActionData;
  setActionData: React.Dispatch<React.SetStateAction<ProfileSettingsActionData>>;
  userData: UserStore;
  setUser: (user: Pick<UserStore, "avatarUrl" | "username" | "email" | "emailNotifs">) => void;
};

export function ProfilePicUpload({
  avatarUrl,
  setActionData,
  actionData,
  userData,
  setUser,
}: ProfilePicUploadProps) {
  const theme = useTheme();

  return (
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
          sx={{ objectFit: "cover", objectPosition: "10% top" }}
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
  );
}
