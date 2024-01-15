import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@site/src/components/Layout";

export default function JokesHome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Joke Submissions"
      description={siteConfig.tagline}>
      <div>
      Yo gimmie submissions
      </div>
    </Layout>
  );
}
