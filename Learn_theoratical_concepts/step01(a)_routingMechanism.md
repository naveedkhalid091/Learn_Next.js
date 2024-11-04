# Next.js Routing Made Simple

## Important Terms

- **Tree**: A way to show structure, like folders and files in your project.
- **Subtree**: A smaller part of a larger tree, like a folder and its subfolders.
- **Root**: The first or main item in a tree (like the main folder in a project).
- **Leaf**: The last part of a tree that has no more items below it (like a file without subfolders).
- **URL Segment**: Each part of a URL separated by slashes (`/`).
- **URL Path**: Everything in the URL that comes after the domain (like `example.com/path`).

## The App Router in Next.js

- **App Router**: A new way to set up routes in Next.js (added in version 13).
- It’s based on **React Server Components**, which makes pages load faster.
- Supports features like **nested routes**, **loading states**, and **error handling**.
- **Server Components** are the default, but you can also use **Client Components**.

## How Folders and Files Work in Routes

- In Next.js, the **file system** (your folders and files) defines your routes:
  - **Folders** = routes (each folder is a route).
  - **Files** = the actual content/UI for a route (use `page.tsx` to show the route’s content).

## Route Segments and Nesting

- Each folder acts like a **URL segment** (a part of the URL).
- **Nested routes** are created by placing folders inside other folders:
  - Example: `/dashboard/settings` has:
    - `/` (root)
    - `dashboard` (middle segment)
    - `settings` (last/leaf segment)

## Special Files for Routes

Next.js has specific files you can use in routes to add special features:

- `layout.tsx`: Shared UI for a route and its children (like a common header for a page).
- `page.tsx`: The main content/UI for a route.
- `loading.tsx`: Shows a loading screen while the page loads.
- `not-found.tsx`: Shows a "Not Found" page if the route doesn’t exist.
- `error.tsx`: Handles errors that happen in a route.
- `global-error.tsx`: Shows a global error page.
- `route.tsx`: Creates an API endpoint (for server requests).
- `template.tsx`: Reusable template for changing content.
- `default.tsx`: Fallback content for parallel routes.

## Order of Rendering Files

Next.js displays these files in a certain order when loading a route:

1. `layout.tsx` - First, shows the layout for the route
2. `template.tsx` - Then, loads reusable template content
3. `error.tsx` - Next, manages errors
4. `loading.tsx` - Shows loading state while waiting
5. `not-found.tsx` - Handles “Not Found” page if needed
6. `page.tsx` - Finally, shows the main page content

**Tip**: Remember this order with **LTE-LNP** (layout, template, error, loading, not-found, page).

## Colocating Files

- **Colocating** means keeping related files (layouts, styles, tests) together in the same folder.
- In Next.js, only `page.tsx` and `route.tsx` are publicly visible files.

## Advanced Routing Patterns

- **Parallel Routes**: Let you show multiple pages or sections side-by-side in one view. Each section works independently (like a sidebar and main content that you can scroll separately).
- **Intercepting Routes**: Shows extra content on top of the current page (like a popup/modal) without reloading or leaving the main page.

## How the App Router Works

1. **Structure**: Organizes your pages and layouts.
2. **Navigation**: Allows smooth navigation without reloading the page.
3. **Data Fetching**: Loads data before the page displays, making it faster.
4. **Server-Side Rendering (SSR)**: Creates HTML on the server to improve SEO and load speed.
5. **Code Splitting**: Loads only the code you need for faster performance.
