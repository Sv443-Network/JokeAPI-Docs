import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PricingOption, PricingOptionData } from "./PricingOption";
import { Layout } from "@site/src/components/Layout";

const pricingOptions: PricingOptionData[] = [
  {
    title: "Open Source",
    description: "For small projects on a tight (or nonexistent) budget and for evaluation",
    price: "$0",
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
  },
  {
    title: "Premium",
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
  },
];

export default function PricingHome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Pricing"
      description={siteConfig.tagline}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "start",
          gap: "3rem",
          flexWrap: "nowrap",
          marginTop: 50,
          marginBottom: 50,
        }}>
          {pricingOptions.map((option) => (
            <PricingOption
              key={`pricingopt-${option.title}`}
              {...{
                ...option,
                width: 400,
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
