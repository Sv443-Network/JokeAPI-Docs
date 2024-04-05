import { AspectRatio } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "@site/src/components/Layout";
import Link from "@docusaurus/Link";

export default function Register() {
  const oauth_name = "Jared";

  return (
    <Layout>
      <Box
        minHeight='75vh'
        gap='10vh'
        width={{ xs: "90vw", sm: "85vw", md: "60vw" }}
        mx='auto'
        my={{ xs: "2.5vh", sm: "5vh" }}
      >
        <Stack
          component={Paper}
          m='auto'
          my={{ lg: "15vh" }}
          p='35px'
          justifyContent='center'
          borderRadius='25px'
          gap={3}
          width={{ lg: "550px" }}
        >
          <Stack
            id='first-section-container'
            flexDirection='row'
            gap={{ xs: "2em", sm: "3em" }}
            height='100%'
          >
            <Stack
              id='text-input-container'
              py='10px'
              gap={{ xs: "1.5em" }}
            >
              <Stack
                gap={{ xs: "10px", sm: "10px", md: "1rem" }}
                mb='auto'
              >
                <Typography fontSize='14px'>Username</Typography>

                <FormGroup>
                  <TextField
                    required
                    variant='outlined'
                    size='small'
                    sx={{
                      width: "235px",
                      fontSize: "14px",
                    }}
                  />
                </FormGroup>
              </Stack>

              <Stack gap={{ xs: "10px", sm: "10px", md: "1rem" }}>
                <Typography
                  fontSize='14px'
                  fontWeight={500}
                >
                  Email
                </Typography>

                <FormGroup sx={{ position: "relative" }}>
                  <TextField
                    variant='outlined'
                    size='small'
                    sx={{
                      width: "235px",
                      fontSize: "14px",
                    }}
                  />
                </FormGroup>
              </Stack>
            </Stack>

            <Box
              mb='unset'
              id='profile-picture'
              component='img'
              alt='Profile Picture'
              src='/img/man.png'
              borderRadius='25px'
              width={{ xs: "200px", sm: "200px" }}
              height={"200px"}
              mx='auto'
              sx={{ objectFit: "cover", objectPosition: "10% top" }}
            />
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
                    Use {oauth_name}&apos;s email
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
                    Use {oauth_name}&apos;s profile picture
                  </Typography>
                }
              />
            </FormGroup>
          </Box>

          <Divider orientation='horizontal' />

          <Box>
            <FormGroup sx={{ position: "relative" }}>
              <FormControlLabel
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
            gap={2}
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
              <Button size='large'>Register</Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}
