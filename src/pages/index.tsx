import { Box, Button, Stack, Typography } from "@mui/material";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@site/src/components/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { navigate } from "../utils";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // const jokesAmount = 69;
  // const usersAmount = 420;

  return (
    <Box
      component='header'
      bgcolor='primary.main'
      p={{ xs: "2.5em", lg: "4em" }}
      py='5rem'
    >
      <Stack
        flexDirection='column'
        className='container'
        width='100%'
        textAlign='center'
        gap={6}
      >
        <Stack gap={3}>
          <Stack
            flexDirection='row'
            justifyContent='center'
          >
            <Box
              component='img'
              src='./img/JAPI3_temp_128.png'
              width='80px'
              alt='Logo'
            />

            <Typography
              color='#ffff'
              variant='h1'
              my='auto'
              ml={"10px"}
              fontFamily='Outfit Variable'
              fontSize={{
                xs: "50px",
                sm: "55px",
                md: "60px",
                lg: "65px",
                xl: "65px",
              }}
              fontWeight='bold'
            >
              {siteConfig.title}
            </Typography>
          </Stack>

          <Typography
            component='h2'
            color='#fff'
            fontSize={{
              xs: "25px",
              sm: "25px",
              md: "27px",
              lg: "30px",
              xl: "33px",
            }}
            fontFamily='"Staatliches", system-ui'
          >
            {/* {siteConfig.tagline} */}
            Get your funny up, bozo!
          </Typography>
        </Stack>

        <Box>
          <Button
            size='large'
            variant='contained'
            onClick={() => navigate("/docs/intro")}
            sx={{
              backgroundColor: "#fff",
              color: "black",
              fontFamily: "Inter Variable",
              fontWeight: 500,
            }}
          >
            Get Started
          </Button>

          <Typography
            mt={2}
            component='h2'
            color='#fff'
            fontSize='14px'
            fontWeight={500}
            fontFamily='Inter Variable'
          >
            {/* {siteConfig.tagline} */}
            Serving 69 jokes to 420 users.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Home"}
      description={siteConfig.tagline}
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
