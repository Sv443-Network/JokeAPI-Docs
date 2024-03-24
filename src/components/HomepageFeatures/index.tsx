/* eslint-disable @typescript-eslint/no-var-requires */

import Link from "../Link";
import { Box, Icon, Stack, Typography } from "@mui/material";

type FeatureProps = {
  title: string;
  svgPath: string;
  description: JSX.Element;
  index: number;
};

const jokesAmt = 420; // TODO: get this from the API
const languagesAmt = 69; // TODO: get this from the API too

const featureList = [
  {
    title: "Choose from a large variety of jokes",
    svgPath: "/img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        JokeAPI offers a wide variety of jokes to fit everyone&apos;s taste.
        {` With ${jokesAmt} jokes in ${languagesAmt} languages, you're guaranteed to find something you like.`}
      </>
    ),
  },
  {
    title: "Easy filtering",
    svgPath: "/img/undraw_docusaurus_tree.svg",
    description: (
      <>
        With JokeAPI, you can filter jokes by category, type, language, and
        more. This way you can get the jokes you want, and nothing else. With
        JokeAPI, you can filter jokes by category, type, language, and more.
      </>
    ),
  },
  {
    title: "Community",
    svgPath: "/img/undraw_docusaurus_react.svg",
    description: (
      <>
        With jokes submitted by the community, there will always be new jokes to
        discover.
        <br />
        You can even{" "}
        <Link
          href='https://example.org/TODO'
          target='_self'
        >
          submit your own jokes
        </Link>{" "}
        to share with the world!
      </>
    ),
  },
];

function Feature({ title, svgPath, description, index }: FeatureProps) {
  return (
    <Stack
      flexDirection={{
        sm: "column",
        md: index % 2 === 0 ? "row" : "row-reverse",
      }}
      alignContent='center'
      justifyContent='center'
      gap={{ xs: 4, sm: 3, md: "5em", lg: "8em" }}
      bgcolor={index % 2 === 0 ? "background.default" : "secondaryBackground"}
      py='3rem'
      px={{ xs: "5vw", sm: "unset", md: "unset", lg: "unsset", xl: "unset" }}
    >
      <Box
        component='img'
        src={svgPath}
        width={{ xs: "80vw", md: "35vw", lg: "36vw" }}
        height='auto'
      />

      <Stack
        flexDirection='column'
        justifyContent='center'
        gap={4}
        maxWidth={{ sm: "85%", md: "25%" }}
        textAlign={{ sm: "left", md: "left" }}
        mt={{ sm: 5, md: "unset" }}
      >
        <Typography
          component='h3'
          fontWeight={700}
          fontSize={{ lg: "47px" }}
          pt='5px'
          fontFamily='Outfit Variable'
          lineHeight='1.3'
        >
          {title}
        </Typography>

        <Typography
          component='p'
          fontSize={{ lg: "20px" }}
          sx={{ fontWeight: 300 }}
          fontFamily='Inter Variable'
          color='text.secondary'
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <Box component='section'>
      <Stack
        direction='column'
        justifyContent='center'
        gap={10}
      >
        {featureList.map((props, idx) => (
          <Feature
            key={idx}
            index={idx}
            {...props}
          />
        ))}
      </Stack>
    </Box>
  );
}
