## Fetching data from server (static method):

#### Definition:

Static fetching means data is fetched from the server once at build time (when the developer had built the website using `pnpm run built` command). This data remains fixed without any additional API calls. This is the default behaviour.

If you are using SSG (Static site generation) method to fetch the data then you would need to rebuilt the website again and again when you add new content or data to the website. This method is good for SEO of a website.

#### Coding:

For Coding Examples, please ref to the `books-api-app` project. where static side page is separately generated.
