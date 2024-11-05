# Initializing a Next.js Project with Tailwind CSS

When initializing a Next.js project, if you select `Yes` in response to the prompt `Would you like to use Tailwind CSS?`, the following software will be automatically installed:

- `postcss`
- `tailwindcss`

After the installation, two files will be added to your project directory:

**postcss.config.mjs**
**tailwind.config.ts**

Additionally, your `package.json` file will include the following dependencies with their respective versions:

```json
"postcss": "^8",
"tailwindcss": "^3.4.1"
```

### Configuring the tailwind.config.ts File

Now lets discuss about the `tailwindcc` file. because you need to change some configurations in this file.

The `config` object is present inside the `tailiwindcss.config.ts`

The object `config` has three following keys:

i) **content:** Specifies the routes or paths in your project where you want Tailwind CSS to be applied.

ii)**theme:** The `default styles` of your project are mentioned here. e.g some background images for all the website pages can be used here.

iii) **plugins**: Lists any third-party libraries you want to use with Tailwind CSS.

**_Content key:_** the default path in the content key is mentioned as :

        "./src/app/\*_/_.{js,ts,jsx,tsx,mdx}"

In this path:

- tailwindcss will be applied inside the app directory, covering the pages and their child components.
- \*\*/ means all subdirectories, and /\* represents files within those directories.

* The . (dot) before {js,ts,jsx,tsx,mdx} indicates the file extension types where Tailwind CSS styles will be applied.
