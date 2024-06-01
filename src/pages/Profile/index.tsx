import { Stack, Typography } from "@mui/material";
import Layout from "@site/src/components/Layout";
import Paper from "@mui/material/Paper";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Profile() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Profile"
      description={siteConfig.tagline}
    >
      <Stack component={Paper}>
        <Typography>Profile</Typography>
      </Stack>
    </Layout>
  );
}
