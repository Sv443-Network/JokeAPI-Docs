import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Layout } from "@site/src/components/Layout";

export default function SubscribeHome() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Joke Submissions"
      description={siteConfig.tagline}>
      <div>
      gib moni pls
      </div>
    </Layout>
  );
}
