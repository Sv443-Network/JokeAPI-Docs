import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PricingOption, PricingOptionData } from "./PricingOption";
import { Layout } from "@site/src/components/Layout";
import { Grid, useTheme } from "@mui/material";

const pricingOptions: PricingOptionData[] = [
  {
    title: "Open Source",
    description: "For small projects on a tight (or nonexistent) budget and for evaluation",
    price: "Free!",
    features: [
      "1 request per minute",
      "10 requests per day",
      "basic filter parameters",
      "ads on documentation",
    ],
    button: {
      label: "Start now for free",
      redirect: "/docs/intro",
    },
    backgroundColor: "#34c",
  },
  {
    title: "Professional",
    description: "For larger projects and teams",
    price: "$69.99",
    features: [
      "2 requests per minute",
      "11 requests per day",
      "advanced filters",
      "no repetition of jokes",
      "no ads on documentation",
    ],
    button: {
      label: "Sign up now",
      redirect: "/subscribe?plan=pro",
    },
    backgroundColor: "#1a3",
  },
];

export default function PricingHome() {
  const { siteConfig } = useDocusaurusContext();
  const { breakpoints } = useTheme();

  return (
    <Layout
      title="Pricing"
      description={siteConfig.tagline}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {/* Wrap on mobile devices */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          gap={8}
          sx={{
            flexWrap: "nowrap",
            [breakpoints.down("sm")]: {
              flexWrap: "wrap !important",
            },
            marginTop: 10,
            marginBottom: 6,
            width: "auto",
          }}>
          {pricingOptions.map((option) => (
            <Grid item xs={6} key={`pricingopt-${option.title}`}>
              <PricingOption
                {...{
                  ...option,
                  width: "100%",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
