import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PricingCard, {
  PricingCardData,
} from "@site/src/components/Pricing/PricingCard";
import Layout from "@site/src/components/Layout";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { ArrowForward, ArrowOutward } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import { useId } from "react";
import Container from "@mui/material/Container";

const pricingData: PricingCardData[] = [
  {
    title: "Free (Public)",
    description: "For the smallest of projects or testing",
    price: "Free!",
    features: [
      "2 requests per minute",
      "30 requests per day",
      "basic filter parameters",
      "ads in the documentation",
      // "ads in requests", //?
    ],
    button: {
      label: "Start using it",
      redirect: "/docs/intro",
      icon: <ArrowOutward />,
      variant: "outlined",
    },
    backgroundColor: "#23c",
  },
  {
    title: "Free (Sign up)",
    description:
      "For small projects on a tight (or nonexistent) budget or evaluation",
    price: "Free!",
    features: [
      "10 requests per minute",
      "500 requests per day",
      "basic filter parameters",
      "ads in the documentation",
    ],
    button: {
      label: "Sign up",
      redirect: "/login?TODO",
      icon: <ArrowForward />,
      variant: "contained",
    },
    backgroundColor: "#193",
  },
  {
    title: "Professional",
    description: "For larger projects and teams",
    price: "$6",
    features: [
      "200 requests per minute",
      "50,000 requests per day",
      "advanced joke filters",
      "no ads in the documentation",
      "no repetition of jokes",
    ],
    button: {
      label: "Subscribe",
      redirect: "/subscribe?plan=pro&TODO",
      icon: <ArrowForward />,
      variant: "contained",
    },
    backgroundColor: "#913",
  },
];

export default function PricingHome() {
  const { siteConfig } = useDocusaurusContext();
  const { breakpoints } = useTheme();

  

  return (
    <Layout
      title='Pricing'
      description={siteConfig.tagline}
    >
      <Container maxWidth='lg' sx={{ py: "5vh"}}>
        <Stack maxWidth={{xs: "95%", lg: "30vw"}} textAlign='center' mx='auto' mb={4}>
          <Typography fontFamily='Outfit Variable' fontWeight={400} fontSize='48px'>Pricing</Typography>

          <Typography fontSize='18px' fontWeight={300}>{"Enjoy a variety of jokes for free with smaller projects. Upgrade for large requests, advanced features, and ad-free documentation."}</Typography>
        </Stack>

        <Stack justifyContent='center' flexDirection={{ md: "column", lg: "row"}} gap={{ xs: 4, md: 4, lg: "2vw", xl: "2vw"}}>
          {pricingData.map(({title, description, price, features, button, backgroundColor}: PricingCardData) => 
            <Box key={title} width={{ xs: "95%", sm: "360px" }} mx={{xs: "auto", sm: "auto", lg: "unset"}}>
              <PricingCard  title={title} description={description} backgroundColor={backgroundColor} price={price} features={features} button={button}/>
            </Box>
            
          )}
        </Stack>
      </Container>
    </Layout>
  );
}
