import { Box, Grid, Stack, Typography } from "@mui/material";
import { oauth_providers } from ".";
import Link from "@site/src/components/Link";

export function ConnectedAccounts() {
  return (
    <Stack gap={1} style={{ position: "relative" }}>
      <Typography 
        fontSize='22px'
        fontWeight={400}
        fontFamily='Inter Variable'
      >
        Connected Accounts
      </Typography>

      <Typography
        fontSize='16px'
        fontWeight={300}
        fontFamily='Inter Variable'
        color='text.primary'
        mb={2}
      >
        Manage your sign in methods
      </Typography>

      <Grid container id='connected-providers' gap={2}>
        {Object.keys(oauth_providers).map((key) =>
          <Grid
            container
            key={key}
            flexDirection='row'
            justifyContent='space-between'
          >
            <Grid item xs={5}>
              <Stack flexDirection='row' gap={1.5} alignItems="center">
                <img
                  src={oauth_providers[key as keyof typeof oauth_providers].iconUrl as string}
                  alt={key}
                  width='35px'
                />

                <Typography
                  my='auto'
                  fontSize='14px'
                  fontWeight={300}
                >
                  {key}
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={3}>
              <Box height="100%" display="flex" alignItems="center">
                <Typography
                  fontWeight={300}
                  fontSize={14}
                  whiteSpace='nowrap'
                  my='auto'
                >
                  Connected
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box height="100%" display="flex" alignItems="center">
                <Link
                  href={oauth_providers[key as keyof typeof oauth_providers].providerLink}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Disconnect
                </Link>
              </Box>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
}
