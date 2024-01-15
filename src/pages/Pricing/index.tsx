// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import PricingOption, { PricingOptionData } from "./PricingOption";
// import Layout from "@site/src/components/Layout";
// import { Grid, useTheme } from "@mui/material";
// import { ArrowForward, ArrowOutward } from "@mui/icons-material";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@site/src/components/Layout";

// const pricingOptions: PricingOptionData[] = [
//   {
//     title: "Free (Public)",
//     description: "For the smallest of projects or testing",
//     price: "Free!",
//     features: [
//       "2 requests per minute",
//       "30 requests per day",
//       "basic filter parameters",
//       "ads in the documentation",
//       // "ads in requests", //?
//     ],
//     button: {
//       label: "Start using it",
//       redirect: "/docs/intro",
//       icon: <ArrowOutward />,
//       variant: "outlined",
//     },
//     backgroundColor: "#23c",
//   },
//   {
//     title: "Free (Sign up)",
//     description: "For small projects on a tight (or nonexistent) budget or evaluation",
//     price: "Free!",
//     features: [
//       "10 requests per minute",
//       "500 requests per day",
//       "basic filter parameters",
//       "ads in the documentation",
//     ],
//     button: {
//       label: "Sign up",
//       redirect: "/login?TODO",
//       icon: <ArrowForward />,
//       variant: "contained",
//     },
//     backgroundColor: "#193",
//   },
//   {
//     title: "Professional",
//     description: "For larger projects and teams",
//     price: "$6 / mo",
//     features: [
//       "200 requests per minute",
//       "50,000 requests per day",
//       "advanced joke filters",
//       "no ads in the documentation",
//       "no repetition of jokes",
//     ],
//     button: {
//       label: "Subscribe",
//       redirect: "/subscribe?plan=pro&TODO",
//       icon: <ArrowForward />,
//       variant: "contained",
//     },
//     backgroundColor: "#913",
//   },
// ];

// export default function PricingHome() {
//   const { siteConfig } = useDocusaurusContext();
//   const { breakpoints } = useTheme();

//   return (
//     <Layout
//       title="Pricing"
//       description={siteConfig.tagline}>
//       <div style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//       }}>
//         {/* Wrap on mobile devices */}
//         <Grid
//           container
//           direction="row"
//           justifyContent="space-between"
//           gap={8}
//           sx={{
//             flexWrap: "nowrap",
//             [breakpoints.down("sm")]: {
//               flexWrap: "wrap !important",
//             },
//             marginTop: 10,
//             marginBottom: 6,
//             width: "auto",
//           }}>
//           {pricingOptions.map((option) => (
//             <Grid item xs={6} key={`pricingopt-${option.title}`}>
//               <PricingOption
//                 {...{
//                   ...option,
//                   width: "100%",
//                 }}
//               />
//               {JSON.stringify(option)}
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </Layout>
//   );
// }

export default function PricingHome() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Pricing"
      description={siteConfig.tagline}
    >
      pricing yo
    </Layout>
  );
}
