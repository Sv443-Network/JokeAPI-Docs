/* eslint-disable @typescript-eslint/no-var-requires */

import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "../Link";

type FeatureProps = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const jokesAmt = 420; // TODO: get this from the API
const languagesAmt = 69; // TODO: get this from the API too

const featureList: FeatureProps[] = [
  {
    title: "Variety",
    Svg: (await import("@site/static/img/undraw_docusaurus_mountain.svg")).default,
    description: (
      <>
        {"JokeAPI offers a wide variety of jokes to fit everyone's taste."}<br/>
        {`With ${jokesAmt} jokes in ${languagesAmt} languages, you're guaranteed to find something you like.`}
      </>
    ),
  },
  {
    title: "Filtering",
    Svg: (await import("@site/static/img/undraw_docusaurus_tree.svg")).default,
    description: (
      <>
        With JokeAPI, you can filter jokes by category, type, language, and more.<br/>
        This way you can get the jokes you want, and nothing else.
      </>
    ),
  },
  {
    title: "Community",
    Svg: (await import("@site/static/img/undraw_docusaurus_react.svg")).default,
    description: (
      <>
        With jokes submitted by the community, there will always be new jokes to discover.<br/>
        You can even <Link href="https://example.org/TODO" target="_self">submit your own jokes</Link> to share with the world!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureProps) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
