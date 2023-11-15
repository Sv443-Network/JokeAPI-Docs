import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = "Sv443-Network";
const projectName = "JokeAPI-Docs-Test";

const config: Config = {
  title: "JokeAPI",
  tagline: "Get your funny up bozo",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://v3.jokeapi.dev/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/packages/create-docusaurus/templates/shared/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/packages/create-docusaurus/templates/shared/`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "JokeAPI",
      logo: {
        alt: "JokeAPI Logo",
        src: "img/logo_128.png",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
        },
        {
          label: "Documentation",
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
        },
        {
          label: "Pricing",
          to: "/pricing",
          position: "left",
        },
        {
          label: "Jokes",
          to: "/jokes",
          position: "left",
        },
        {
          label: "Submissions",
          to: "/submissions",
          position: "left",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },
        {
          type: "search",
          position: "right",
        },
        {
          label: "GitHub",
          href: "https://github.com/Sv443/JokeAPI",
          position: "right",
        },
      ],
    },
    // TODO:
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: "YOUR_APP_ID",

    //   // Public API key: it is safe to commit it
    //   apiKey: "YOUR_SEARCH_API_KEY",

    //   indexName: "YOUR_INDEX_NAME",

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: "external\\.com|domain\\.com",

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: "/docs/", // or as RegExp: /\/docs\//
    //     to: "/",
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: "search",

    //   //... other Algolia params
    // },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://dc.sv443.net/",
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/Sv443/JokeAPI/discussions",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Sv443/JokeAPI",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sv443 Network. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
