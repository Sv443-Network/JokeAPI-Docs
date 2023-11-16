import { Button, Paper } from "@mui/material";
import { navigate } from "@site/src/utils";

export type PricingOptionData = {
  title: string;
  description: string;
  price: string;
  features: string[];
  button: {
    label: string;
    redirect: string;
  };
};

type PricingOptionProps = PricingOptionData & {
  width?: number | string;
}

export function PricingOption({
  title,
  description,
  price,
  features,
  button,
  width = 400,
}: PricingOptionProps) {
  return (
    <Paper sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 4,
      paddingTop: 2,
      width,
      height: "100%",
    }}>
      <h2>{title}</h2>
      <p style={{
        minHeight: 80,
      }}>
        {description}
      </p>
      <h3>{price}</h3>
      <ul style={{
        marginBottom: 30,
      }}>
        {features.map((feature, i) => (
          <li key={`pricingopt-${title}-feat-${i}`}>{feature}</li>
        ))}
      </ul>
      <Button onClick={() => navigate(button.redirect)}>
        {button.label}
      </Button>
    </Paper>
  );
}
