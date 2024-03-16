import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@site/src/components/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { navigate } from "../utils";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	const jokesAmount = 69;
	const usersAmount = 420;

	return (
		<Box
			component='header'
			bgcolor='primary.main'
			p='4rem'
			py='5rem'
		>
			<Stack
				flexDirection='column'
				className='container'
				width='100%'
				textAlign='center'
				gap={2}
			>
				<Stack
					flexDirection='row'
					justifyContent='center'
				>
					<img
						src='./img/JAPI3_temp_128.png'
						alt='Logo'
						className={styles.logo}
					/>

					<Typography
						color='#ffff'
						variant='h1'
						fontSize='50px'
						fontWeight='800'
						my='auto'
						ml={"10px"}
					>
						{siteConfig.title}
					</Typography>
				</Stack>

				<Typography
					mb={4}
					component='h2'
					color='#fff'
					fontSize='19px'
					fontWeight={300}
					fontFamily='Inter'
				>
					{/* {siteConfig.tagline} */}
					Get your funny up, bozo.
				</Typography>

				<Typography
					component='h2'
					color='#fff'
					fontSize='16px'
					fontWeight={300}
					fontFamily='Inter'
				>
					{/* {siteConfig.tagline} */}
					Serving 69 jokes to 420 users.
				</Typography>

				<Box>
					<Button
						size='large'
						variant='contained'
						onClick={() => navigate("/docs/intro")}
						// endIcon={<ArrowForward />}
						sx={{ backgroundColor: "#fff", color: "black" }}
					>
						<Typography
							fontFamily='Inter'
							fontWeight={800}
						>
							Get started
						</Typography>
					</Button>
				</Box>
			</Stack>
		</Box>
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
