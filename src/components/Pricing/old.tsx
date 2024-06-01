import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { navigate } from "@site/src/utils";
import { ComponentProps, ReactNode, useMemo } from "react";

export type PricingCardData = {
  title: string;
  description: string;
  price: string;
  features: string[];
  button: {
    label: string;
    redirect: string;
    icon?: ReactNode;
    variant?: ComponentProps<typeof Button>["variant"];
  };
  backgroundColor?: `#${string}`;
};

type PricingCardProps = PricingCardData & {
  width?: number | string;
  backgroundColor?: `#${string}`;
  fontColor?: `#${string}`;
};

export default function PricingCard({
  title,
  description,
  price,
  features,
  button,
  width = 400,
  backgroundColor = "#34c",
  fontColor,
}: PricingCardProps) {
  const fontColorCalc = useMemo(() => {
    if (fontColor) return fontColor;

    const bgCol = backgroundColor?.slice(1);

    const bgColParts = bgCol.match(/.{6}/)
      ? bgCol.match(/.{2}/g)
      : bgCol.match(/./g);
    if (!bgColParts) return "#fff";

    const bgColPartsNum = bgColParts.map((part) => parseInt(part, 16));

    const [red, green, blue] = bgColPartsNum as [number, number, number];
    const contrast = red * 0.299 + green * 0.587 + blue * 0.114;

    if (contrast > 186 && !isNaN(contrast)) return "#000";

    return "#fff";
  }, [backgroundColor, fontColor]);

  return (
    <Paper
      elevation={3}
      
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width,
        height: "100%",
        borderRadius: "25px"
      }}
    >
      <Box
        style={{
          width: "100%",
          
        }}
      >
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor,
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px"
          }}
        >
          <Typography
            variant='h4'
            color={fontColorCalc}
          >
            {title}
          </Typography>
        </Paper>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Grid
            container
            direction='column'
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              padding: 16,
              paddingTop: 32,
              paddingBottom: 32,
            }}
          >
            <Grid
              item
              xs={4}
              style={{ marginBottom: 40 }}
            >
              <Typography variant='h5'>{price}</Typography>
            </Grid>

            <Grid xs={12}>
              <Box component='img' src='/img/bunger.png' width='100%' borderRadius='16px'  />
            </Grid>

            <Grid
              item
              xs={4}
            >
              <Typography
                variant='body1'
                style={{
                  minHeight: 80,
                  textAlign: "center",
                }}
              >
                {description}
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
            >
              <ul
                style={{
                  marginBottom: 30,
                }}
              >
                {features.map((feature, i) => (
                  <li key={`pricingopt-${title}-feat-${i}`}>
                    <Typography variant='body1'>{feature}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        style={{
          padding: 16,
          marginBottom: 32,
        }}
      >
        <Button
          onClick={() => navigate(button.redirect)}
          sx={{
            paddingX: 4,
          }}
          {...{
            ...(button.icon ? { endIcon: button.icon } : {}),
            ...(button.variant ? { variant: button.variant } : {}),
          }}
        >
          {button.label}
        </Button>
      </Box>
    </Paper>
  );
}
