/* eslint-disable @typescript-eslint/no-var-requires */

import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "../Link";
import { Box, Stack, Typography } from "@mui/material";

type FeatureProps = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
	index: number;
};

const jokesAmt = 420; // TODO: get this from the API
const languagesAmt = 69; // TODO: get this from the API too

const featureList = [
	{
		title: "Large variety of jokes",
		Svg: (await import("@site/static/img/undraw_docusaurus_mountain.svg"))
			.default,
		description: (
			<>
				JokeAPI offers a wide variety of jokes to fit everyone's taste.
				{` With ${jokesAmt} jokes in ${languagesAmt} languages, you're guaranteed to find something you like.`}
			</>
		),
	},
	{
		title: "Easy filtering",
		Svg: (await import("@site/static/img/undraw_docusaurus_tree.svg"))
			.default,
		description: (
			<>
				With JokeAPI, you can filter jokes by category, type, language,
				and more. This way you can get the jokes you want, and nothing
				else. With JokeAPI, you can filter jokes by category, type,
				language, and more.
			</>
		),
	},
	{
		title: "Community",
		Svg: (await import("@site/static/img/undraw_docusaurus_react.svg"))
			.default,
		description: (
			<>
				With jokes submitted by the community, there will always be new
				jokes to discover.
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

function Feature({ title, Svg, description, index }: FeatureProps) {
	return (
		<Stack
			flexDirection={{
				sm: "column",
				md: index % 2 === 0 ? "row" : "row-reverse",
			}}
			alignContent='center'
			justifyContent='center'
			gap={{ sm: 3, md: "5em" }}
			bgcolor={
				index % 2 === 0 ? "background.default" : "secondaryBackground"
			}
			py='3rem'
		>
			<Box maxWidth={{ sm: "80%", md: "65%" }}>
				<Svg
					width='auto'
					height='300px'
				/>
			</Box>

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
					fontWeight={800}
					fontSize='40px'
					pt='5px'
				>
					{title}
				</Typography>

				<Typography
					component='p'
					fontSize='18px'
					fontWeight={300}
					fontFamily='Inter'
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
