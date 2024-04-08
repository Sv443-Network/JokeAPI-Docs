import {
  Box,
  Button,
  ButtonBase,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "@site/src/components/Layout";
import Link from "@docusaurus/Link";
import { useEffect, useState } from "react";
import { useUserStore } from "../../store";
import EmailInputForm from "./EmailInputForm";
import { AccountCircle, Email, PhotoLibrary } from "@mui/icons-material";

interface FormData {
  avatarUrl: string;
  username: string;
  email: string;
  privacyAgreement: boolean;
  cookiesAgreement: boolean;
}

export default function Register() {
  const [formData, setFormData] = useState({
    avatarUrl: "",
    username: "",
    email: "",
    privacyAgreement: false,
    cookiesAgreement: false,
  });

  const [selection, setSelection] = useState({
    usernameSelected: true,
    emailSelected: false,
  });

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
          my={{ xs: "2.5vh", sm: "5vh", lg: "15vh" }}
          p='35px'
          justifyContent='center'
          borderRadius='25px'
          gap={3}
          width={{ xs: "90vw", sm: "575px", md: "60vw" }}
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
                    <Box mt={0.5}>
                      Set up a username for the JokeAPI platform
                    </Box>
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
                    <Box mt={0.5}>For communication and account recovery</Box>
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
              id='profile-picture-input'
              borderRadius='25px'
            >
              <Box
                mb='unset'
                id='profile-picture'
                component='img'
                alt='Profile Picture'
                src='/img/default-pfp.png'
                borderRadius='25px'
                width={{ xs: "200px", sm: "200px" }}
                height={"200px"}
                mx='auto'
                sx={{
                  objectFit: "cover",
                  objectPosition: "10% top",
                }}
              />
            </Button>
          </Stack>

          <Box width='100%'>
            <FormGroup sx={{ position: "relative" }}>
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
                control={<Checkbox size='small' />}
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
