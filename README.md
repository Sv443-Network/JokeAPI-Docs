# JokeAPI Homepage
<h4>

[JokeAPI](https://github.com/Sv443/JokeAPI) is a RESTful API that serves uniformly and well formatted jokes.  
This is its homepage, powered by [Docusaurus.](https://docusaurus.io/)  
  
View the live page at [v3.jokeapi.dev](https://v3.jokeapi.dev)

</h4>

<br><br>

## Contributing
Please refer to the [contributing guide](./contributing.md) for information on how to contribute to this project.

<br><br>

## Development
### Installation
1. Install Node.js v18+
2. Clone the repository
3. Install the dependencies with `npm i`
4. Refer to [CLI commands](#clicommands)

<br>

### CLI commands
| Command | Description |
| :-- | :-- |
| `npm run start` | Builds the page and serves it locally. Rebuilds and hot-reloads it automatically when code changes. |
| `npm run lint` | Runs ESLint to find any errors and bad formatting. |
| `npm run storybook` | Runs Storybook for testing components without the overhead of the rest of the website. |
| `npm run clear` | Deletes the cache and generated files of Docusaurus. |
| `npm run build` | Builds the static page into the `build` folder for deployment. |
| `npm run swizzle @docusaurus/theme-classic <component_name>` | Generates a [swizzled](https://docusaurus.io/docs/swizzling) component, i.e. allows for modifying components that are part of the preset theme. |
| `npm run docusaurus -- <command>` | Runs any Docusaurus CLI command |
| `npm run serve` | Serves the static output of `npm run build` for locally testing a production deployment. |
| `npm run write-translations` | Extracts the translatable strings into JSON files in the `i18n` folder. |
| `npm run write-heading-ids` | Generates heading IDs in markdown files. |
| `npm run typecheck` | Uses TypeScript compiler to check for type errors. |

<br><br>

## License
The homepage is licensed under the [MIT License](./LICENSE.txt)

<br><br><br><br>

<div align="center" style="text-align: center;">

Made with ❤️ by [Sv443](https://github.com/Sv443)  
Please consider [supporting the development](https://github.com/sponsors/Sv443)

</div>
