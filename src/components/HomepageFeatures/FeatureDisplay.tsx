import { Box, Stack } from "@mui/material";

export default function FeatureDisplay() {
  return (
    <Stack flexDirection={{ sm: "column", md: "row", lg: "row" }}>
      <Box
        component='img'
        width='auto'
        src=''
      />
    </Stack>
  );
}
