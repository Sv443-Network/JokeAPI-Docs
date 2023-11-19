import { Button, Grid, Paper, Typography } from "@mui/material";
import { navigate } from "@site/src/utils";
import { ComponentProps, ReactNode } from "react";

export type PricingOptionData = {
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
  backgroundColor?: string;
};

type PricingOptionProps = PricingOptionData & {
  width?: number | string;
  backgroundColor?: string;
}

export function PricingOption({
  title,
  description,
  price,
  features,
  button,
  width = 400,
  backgroundColor = "#34c",
}: PricingOptionProps) {
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
      }}
    >
      <div style={{
        width: "100%",
      }}>
        <Paper style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: 16,
          paddingBottom: 16,
          backgroundColor,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}>
          <Typography variant="h4">{title}</Typography>
        </Paper>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
          <Grid
            container
            direction="column"
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
            <Grid item xs={4}>
              <Typography
                variant="body1"
                style={{
                  minHeight: 80,
                  textAlign: "center",
                }}
              >
                {description}
              </Typography>
            </Grid>
            <Grid item xs={4} style={{ marginBottom: 40 }}>
              <Typography variant="h5">{price}</Typography>
            </Grid>
            <Grid item xs={4}>
              <ul style={{
                marginBottom: 30,
              }}>
                {features.map((feature, i) => (
                  <li key={`pricingopt-${title}-feat-${i}`}>
                    <Typography variant="body1">{feature}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{
        padding: 16,
        marginBottom: 32,
      }}>
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
      </div>
    </Paper>
  );
}
