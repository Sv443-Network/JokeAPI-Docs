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
      py={{ md: "6.6em", lg: "4em" }}
    >
      <Stack
        flexDirection='column'
        className='container'
        width='100%'
        textAlign='center'
      >
        <Stack gap={4}>
          <Stack
            flexDirection='row'
            justifyContent='center'
          >
            <Box
              component='img'
              src='./img/JAPI3_temp_128.png'
              width={{ xs: "65px", md: "80px", lg: "80px" }}
              alt='Logo'
            />

            <Typography
              color='#ffff'
              variant='h1'
              my='auto'
              ml={"10px"}
              fontFamily='Outfit Variable'
              fontSize={{
                xs: "40px",
                sm: "3rem",
                md: "60px",
                lg: "60px",
              }}
              fontWeight='bold'
            >
              {siteConfig.title}
            </Typography>
          </Stack>

          <Typography
            component='h2'
            color='#fff'
            fontSize={{ xs: "18px", sm: "20px", md: "24px", lg: "24px" }}
            fontFamily='Inter Variable'
            fontWeight={600}
          >
            {/* {siteConfig.tagline} */}
            Uniformly funny. Perfectly formatted. JokeAPI delivers.
          </Typography>

          <Typography
            component='h2'
            color='#fff'
            fontSize={{ xs: "18px", sm: "20pz", md: "21px" }}
            maxWidth={{ md: "60%" }}
            fontFamily='"Inter Variable", system-ui'
            fontWeight='300'
            mx='auto'
          >
            {/* {siteConfig.tagline} */}
            Integrate laughter into your app with our powerful joke API.
          </Typography>
        </Stack>

        <Box
          className='cta-button'
          mt='15px'
        >
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
