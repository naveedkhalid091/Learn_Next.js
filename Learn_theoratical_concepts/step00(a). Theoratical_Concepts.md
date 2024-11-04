## Starting Note:

This is the first file of Learning Next.js

In this Repository, we will not only Next.js concepts but we will also be exploring the folloiwng libraries/tools.

**React.js**,
**TailwindCss**,
**API Testing through PostMan**,
**API development though Router Handlers.**,
**React Hook Form and Zod**,
**Headless CMS**,
**Relational Database concepts Drizzle ORM and Supabase.**,

## React Overview (https://react.dev/)

#### React Basics:

- **Components**: React components are functions that create pieces of a user interface, often written in HTML-like markup.
- **Reusability**: Components are reusable—just like calling a function, you can use them anywhere in your app.

## Next.js Overview

Next.js is a full-featured and full-stack framework to build high-performing web applications. Here’s a breakdown of its core features:

## Key Features of Next.js

1. `Built-in Optimization`: Next.js improves efficiency through:

   - **Automatic code Spliting:** Loads only what’s needed at first, making pages load faster.

   - **(SSG) & (SSR):** Allows generating HTML on the server side for faster page loads and improved SEO.

   - **Image Optimization:** Automatically reduces image sizes while keeping quality high.

   - **PreFetching:** Automatically preloads links as they appear, speeding up navigation.

2. **Dynamic HTML Streaming**: This feature allows different sections of a webpage to show up as soon as they’re ready. Instead of waiting for everything to finish loading before seeing anything, you can start viewing parts of the page right away. This makes the webpage feel faster and more responsive.

3. `React Server Components`:

   - **Client-Side Components`:** handle interactions and updates directly in the browser.

   - **Server-Side Components**: load on the server, providing users with immediate content since they don’t need client-side JavaScript.

4. **Data Fetching:** Different methods are available to fetch and update data:

   i) **Static Generation (SG):** Fetches data during the build process, making pages fast to load.

   **getStaticProps:** Gets data once during build time.

   **getStaticPaths:** Works with dynamic routes to create static pages.

   ii) **Server-Side Rendering (SSR):** Fetches fresh data on each request.

   - **getServerSideProps:** Ensures data is always up-to-date.

   iii) **Client-Side Fetching:** Uses React hooks like useEffect to load data in the browser for user-specific or dynamic data.

5. **CSS Support:** Easily use CSS Modules, Tailwind CSS, and more.

6. **Route Handlers:** Directly define server-side endpoints within Next.js, which eliminates the need for a separate server framework.

7. **Advanced Routes and Nested Layouts:**

   **Dynamic Routes:** Allows unique URL segments, such as blog posts or product pages.
   **Nested Layouts:** Helps maintain consistent navigation and layouts across pages.

8. **Middleware:** Runs code before completing a request, useful for features like authentication and redirects.

## Ending Note:

Now go to 2.GettingStarted.md file for more information.
