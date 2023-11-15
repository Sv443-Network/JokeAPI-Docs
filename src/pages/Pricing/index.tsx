import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function PricingHome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Pricing"
      description={siteConfig.tagline}>
      <div>
      Yo gimmie money
      </div>
    </Layout>
  );
}
