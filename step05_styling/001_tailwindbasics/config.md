When initializing a Next.js project, if you select `Yes` in response to the prompt `Would you like to use Tailwind CSS?`, the following software will be automatically installed:

`postcss`
`Tailwind CSS`

After the installation, two files will be added to your project directory:

`postcss.config.mjs`
`tailwind.config.ts`

Additionally, your `package.json` file will include the following `packages` with their respective version numbers:

`"postcss": "^8"`
`"tailwindcss": "^3.4.1"`

Now lets discuss the `tailwindcc` file. becasue we need to change some configurations in this file.

The `config` object is present inside the `tailiwindcss.config.ts`

Three keys are available inside the `config` file
i) `content:` The routes/paths of your project are mentioned where you wanted to apply the tailwindCss styles.

ii)`theme:` The `default styles` of your project are mentioned here. e.g some background images for all the website pages can be used here.

iii) `plugins`: Which `third party libraries` you want yo use, are mentioned here.

i) `Content:` As we have already learned that in this part, the path/routes are mentioned where Tailwind is required to implement. However mentioned the routes have specific pattern. Now we will learn about format of routes.

The format of Routes is written below:

`"./src/app/**/*.{js,ts,jsx,tsx,mdx}"`

The above path means that `tailwindcss will be applied` inside the app directory, `in the pages and its childrens`.
where:  
`**/` means pages and further `/*` means its childrens.
`.` dot means extensions.
`{js,ts,jsx,tsx,mdx}`, file types where tailwind will apply.
