import { Box, Button, Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from "@mui/material";
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
        height: "100%",
        width: "100%",
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
            paddingTop: 12,
            paddingBottom: 12,
            backgroundColor,
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
          sx={{ backgroundImage: title === "Professional" ? "/img/premium-background.png" : ""}}
        >
          <Typography
            variant='h4'
            color={fontColorCalc}
            bgcolor={backgroundColor}
            fontWeight={400}
            fontFamily='Inter Variable'
          >
            {title}
          </Typography>
        </Paper>

        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='center'
          width='100%'
        >
          <Grid
            container
            direction='column'
            alignItems='center'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              padding: 23
            }}
          >
            <Grid item width='100%%' mx='auto'>
              {/*TODO: Plug in actual pricing images */}
              <Box component='img' src='/img/bunger.png' borderRadius='16px' width='100%' mx='auto' sx={{ objectFit: "cover"}} />
            </Grid>

            <Grid item xs={12} mr='auto' mb={1} mt={1}>
              <Stack flexDirection='row' gap={1}>
                <Typography
                  fontWeight={400} 
                  fontSize='32px' 
                  fontFamily='Inter Variable'
                >
                  {price}
                </Typography>

                <Typography fontSize='16px' color='GrayText' mt='calc(1em + 5px)' display={price !== "Free!" ? "unset" : "none"}>/mo</Typography>
              </Stack>
            </Grid>

            <Grid
              item
              mr='auto'
            >
              <Typography
                variant='body1'
                fontSize='16px'
                fontWeight={300}
                fontFamily='Inter Variable'
              >
                {description}:
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ width: "100%", marginTop: 0}}
            >
              <List
                sx={{ listStyleType: "disc", width: "100%"}}
                style={{ width: "100%" }}
              >
                {features.map((feature, i) => (
                  <ListItem  key={`pricingopt-${title}-feat-${i}`} sx={{ marginRight: "auto", maxHeight: "max-content", maxWidth: "max-content", paddingY: 0 }}>
                    <ListItemText sx={{ display: "list-item" }}>
                      <Typography variant='body1' fontSize='16px' fontWeight={300} fontFamily='Inter Variable'>{feature[0].toUpperCase() + feature.slice(1)}</Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        style={{
          padding: 16,
          marginBottom: 32,
          width: "100%"
        }}
      >
        <Button
          fullWidth={true}
          onClick={() => navigate(button.redirect)}
          sx={{
            width: "100%",
            paddingY: "8px"
          }}
          {...{
            ...(button.icon ? { endIcon: button.icon } : {}),
            ...(button.variant ? { variant: button.variant } : {}),
          }}
        >
          <Typography width={"max-content"} fontFamily='Inter Variable'>{button.label}</Typography>
          
        </Button>
      </Box>
    </Paper>
  );
}
