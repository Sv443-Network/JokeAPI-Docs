import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  getAvatarGroupUtilityClass,
} from "@mui/material";
import Layout from "@site/src/components/Layout";
import Link from "@docusaurus/Link";
import { useEffect, useState } from "react";
import { useUserStore } from "../../store";
import { AccountCircle, Email, PhotoLibrary } from "@mui/icons-material";
import styled from "@emotion/styled";

interface FormData {
  avatarUrl: string;
  username: string;
  email: string;
  privacyAgreement: boolean;
  cookiesAgreement: boolean;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Register() {
  const [formData, setFormData] = useState({
    avatarUrl: "/img/default-pfp.png",
    username: "",
    email: "",
    privacyAgreement: false,
    cookiesAgreement: false,
  });

  const [selection, setSelection] = useState({
    usernameSelected: true,
    emailSelected: false,
  });

  const [isPhotoHovered, setPhotoHovered] = useState(false);

  const useRegister = () =>
    useUserStore((state) => state.setUser({ ...formData }));

  useEffect(() => console.log(formData), [formData]);

  return (
    <Layout>
      <Box
        minHeight='75vh'
        gap='10vh'
        mx='auto'
      >
        <Stack
          component={Paper}
          m='auto'
          my={{ xs: "2.5vh", sm: "5vh", lg: "7vh" }}
          p='35px'
          justifyContent='center'
          borderRadius='25px'
          gap={3}
          width={{
            xs: "90vw",
            sm: "575px",
          }}
        >
          <Typography fontSize='27px'>Create a JokeAPI account</Typography>
          <Stack
            id='first-section-container'
            flexDirection={{ xs: "column-reverse", sm: "row" }}
            gap={{ xs: "2em", sm: "3vw" }}
            height='100%'
            py='15px'
          >
            <Stack
              id='text-input-container'
              gap={{ xs: "1.5em" }}
              mr='auto'
            >
              <Stack
                gap={1}
                id='username-input'
              >
                <Typography
                  color={
                    selection.usernameSelected ? "#673ab7" : "text.default"
                  }
                  sx={{ transition: ".3s" }}
                >
                  Username
                </Typography>

                <TextField
                  id='input-with-icon-textfield'
                  helperText={
                    "Set up a username for the platform"
                  }
                  variant='standard'
                  fullWidth={true}
                  autoFocus={true}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <AccountCircle
                          sx={{
                            width: 27,
                            height: 27,
                            marginBottom: 0.5,
                          }}
                        />
                      </InputAdornment>
                    ),
                    style: { fontSize: 14 },
                  }}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      username: e.currentTarget.value,
                    })
                  }
                  onFocus={() =>
                    setSelection({ ...selection, usernameSelected: true })
                  }
                  onBlur={() =>
                    setSelection({ ...selection, usernameSelected: false })
                  }
                  sx={{ marginBottom: { sm: "auto" } }}
                />
              </Stack>

              <Stack
                id='email-input'
                gap={1}
              >
                <Typography
                  color={selection.emailSelected ? "#673ab7" : "text.default"}
                  sx={{ transition: ".3s" }}
                >
                  Email
                </Typography>

                <TextField
                  id='input-with-icon-textfield'
                  variant='standard'
                  fullWidth={true}
                  helperText={
                    "For communication and account recovery"
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <Email
                          sx={{
                            width: 27,
                            height: 27,
                            marginBottom: 0.5,
                          }}
                        />
                      </InputAdornment>
                    ),
                    style: { fontSize: 14 },
                  }}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.currentTarget.value,
                    })
                  }
                  onFocus={() =>
                    setSelection({ ...selection, emailSelected: true })
                  }
                  onBlur={() =>
                    setSelection({ ...selection, emailSelected: false })
                  }
                />
              </Stack>
            </Stack>

            <Button
              component='label'
              color='blacke'
              role={undefined}
              variant='contained'
              tabIndex={-1}
              sx={{
                width: "max-content",
                padding: 0,
                borderRadius: "28px",
                mx: { xs: "auto", sm: "0" },
              }}
              onMouseEnter={() => {
                setPhotoHovered(true);
              }}
              onMouseLeave={() => setPhotoHovered(false)}
            >
              <Box
                component='img'
                borderRadius='25px'
                mx='auto'
                id='profile-picture'
                alt='Profile Picture'
                src={formData.avatarUrl}
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
                    setFormData({
                      ...formData,
                      avatarUrl: URL.createObjectURL(newPicture),
                    });
                  }
                  console.log("reirog");
                }}
              />
            </Button>
          </Stack>

          <Box width='100%'>
            <FormGroup sx={{ position: "relative", maxWidth: "max-content" }}>
              <FormControlLabel

                control={<Checkbox size='small' />}
                label={
                  <Typography
                    fontSize='14px'
                    display='inline'
                  >
                    Use email
                  </Typography>
                }
              />

              <FormControlLabel
                control={<Checkbox size='small' />}
                label={
                  <Typography
                    display='inline'
                    fontSize='14px'
                  >
                    Use profile picture
                  </Typography>
                }
              />
            </FormGroup>
          </Box>

          <Divider orientation='horizontal' />

          <Box>
            <FormGroup sx={{ position: "relative" }}>
              <FormControlLabel
                checked={formData.privacyAgreement}
                onChange={() =>
                  setFormData({
                    ...formData,
                    privacyAgreement: !formData.privacyAgreement,
                  })
                }
                sx={{ maxWidth: "max-content" }}
                control={
                  <Checkbox
                    size='small'
                    required
                  />
                }
                label={
                  <Typography
                    display='inline'
                    fontSize='14px'
                  >
                    I read and agree to the{" "}
                    <Link href='/legal/privacy-policy'>privacy policy</Link> and{" "}
                    <Link href='/legal/terms-of-service'>terms of service</Link>
                  </Typography>
                }
              />

              <FormControlLabel
                required
                control={<Checkbox size='small' sx={{ marginTop: { md: -.5, lg: "unset"}}}  />}
                checked={formData.cookiesAgreement}
                onChange={() =>
                  setFormData({
                    ...formData,
                    cookiesAgreement: !formData.cookiesAgreement,
                  })
                }
                label={
                  <Typography
                    display='inline'
                    fontSize='14px'
                  >
                    I agree to the use of cookies and similar technologies to
                    allow for basic site functionality like login
                  </Typography>
                }
                sx={{ maxWidth: "max-content", alignItems: "flex-start" }}
              />
            </FormGroup>
          </Box>

          <Stack
            flexDirection='row'
            justifyContent='right'
            gap={3}
            mt='1em'
          >
            <Box>
              <Button
                size='large'
                variant='outlined'
              >
                Cancel
              </Button>
            </Box>

            <Box>
              <Button
                size='large'
                onClick={() => useRegister}
              >
                Register
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}
