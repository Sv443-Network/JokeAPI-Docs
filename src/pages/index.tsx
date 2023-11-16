import Heading from "@theme/Heading";
import clsx from "clsx";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Layout } from "@site/src/components/Layout";
import { HomepageFeatures } from "@site/src/components/HomepageFeatures";
import { navigate } from "../utils";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.logoContainer)}>
          <img src="./img/JAPI3_temp_128.png" alt="Logo" className={styles.logo} />
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Button
            size="large"
            onClick={() => navigate("/docs/intro")}
            endIcon={<ArrowForward />}
          >
            Get started now
          </Button>
        </div>
      </div>
    </header>
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
