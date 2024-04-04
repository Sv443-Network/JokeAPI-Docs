import { AspectRatio } from "@mui/icons-material";
import {
  Box,
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
            flexDirection={{ md: "row", lg: "row" }}
            gap={{ sm: "3em" }}
            height='100%'
          >
            <Stack
              id='text-input-container'
              gap={4}
            >
              <Stack gap={"5px"}>
                <Typography fontSize='14px'>Username</Typography>

                <FormGroup>
                  <TextField
                    required
                    variant='outlined'
                    size='small'
                  />
                </FormGroup>
              </Stack>

              <Stack gap={1}>
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
                    sx={{ width: "235px", fontSize: "14px" }}
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
              width={{ sm: "200px" }}
              height={{ sm: "auto" }}
              sx={{ objectFit: "cover" }}
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
                sx={{ alignContent: "center" }}
                control={
                  <Checkbox
                    size='small'
                    sx={{ mb: "auto" }}
                  />
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
        </Stack>
      </Box>
    </Layout>
  );
}
