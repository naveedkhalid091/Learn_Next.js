# Next.js Project Structure - Summary

### Top-Level Folders

These folders organize code, assets, and structure.

- **`app`** - Defines the App Router for route-based structures.
- **`pages`** - Page Router (not covered here).
- **`public`** - Stores static assets.
- **`src`** - Optional folder for application source files.

### Top-Level Files

These files configure app settings, manage dependencies, and define environments.

- **`next.config.js`** - Configuration for Next.js settings.
- **`package.json`** - Lists project dependencies and scripts.
- **`middleware.ts`** - Middleware for handling requests.
- **`.env` / `.env.local`** - Define environment variables.
- **`.eslintrc.json`** - ESLint configuration.
- **`.gitignore`** - Files and folders to ignore in Git.
- **`next-env.d.ts`** - TypeScript declarations for Next.js.
- **`tsconfig.json` / `jsconfig.json`** - TypeScript and JavaScript configurations.

### App Routing Conventions

Define routes within the `app` folder.

- **`layout.tsx`** - Layout for pages.
- **`page.tsx`** - Main UI for a page.
- **`loading.tsx`** - Loading screen UI.
- **`not-found.tsx`** - Not found UI.
- **`error.tsx`** - Page-level error UI.
- **`global-error.tsx`** - Global error handling UI.
- **`route.tsx`** - API route handler.
- **`template.tsx`** - Layout that re-renders on update.
- **`default.tsx`** - Fallback for parallel routes.

### Nested Routes

Set up nested structures by creating subfolders.

- **`folder`** - Basic route segment.
- **`folder/folder`** - Nested segment.

### Dynamic Routes

Create dynamic and catch-all routes.

- **`[folder]`** - Dynamic route.
- **`[...folder]`** - Catch-all route.
- **`[[...folder]]`** - Optional catch-all route.

### Route Groups and Private Folders

Organize routes and exclude folders from routing.

- **`(folder)`** - Groups routes without affecting routing structure.
- **`_folder`** - Excludes folder and its children from routing.

### Parallel and Intercepted Routes

Define alternative or intercepted routes within different segments.

- **`@folder`** - Defines a named slot for content.
- **`(.)folder`** - Intercepts at the same level.
- **`(..)folder`** - Intercepts one level up.
- **`(...)folder`** - Intercepts all the way from the root level.
