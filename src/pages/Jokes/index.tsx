import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function JokesHome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Jokes"
      description={siteConfig.tagline}>
      <div>
      Yo gimmie jokes
      </div>
    </Layout>
  );
}
