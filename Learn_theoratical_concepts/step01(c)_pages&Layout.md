# Next.js Pages and Layouts Guide

This guide explains how to use `page.tsx`, `layout.tsx`, and `template.tsx` files in a Next.js project to structure pages and layouts.

---

## 1. Pages (`page.tsx`)

A `page.tsx` file defines a single page in your app, tied to a specific route.

### Basic Usage:

To create a page, make a new folder in the `app` directory and add a `page.tsx` file inside. The page will be accessible at a route matching the folder's name.

- **Example: Home Page**
  - File: `app/page.tsx`
    ```typescript
    export default function Page() {
      return <h1>Hello, Home Page!</h1>;
    }
    ```
  - This displays "Hello, Home Page!" when visiting `/` in the browser.

### Creating Additional Pages

To create another page at a different route, repeat the pattern by creating a new folder with `page.tsx` inside.

- **Example: Dashboard Page**
  - File: `app/dashboard/page.tsx`
    ```typescript
    export default function Page() {
      return <h1>Hello, Dashboard Page!</h1>;
    }
    ```
  - Visiting `/dashboard` now displays this content.

---

## 2. Layouts (`layout.tsx`)

A `layout.tsx` file defines shared UI that wraps around multiple pages. This helps retain UI elements like headers, sidebars, or footers that should remain consistent across related pages.

### Basic Usage:

Create a `layout.tsx` file in a folder to define a layout for all pages within that folder.

- **Example: Dashboard Layout**
  - File: `app/dashboard/layout.tsx`
    ```typescript
    export default function DashboardLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <section>
          <nav>Dashboard Menu</nav>{" "}
          {/* Shared navigation for dashboard pages */}
          {children} {/* Renders specific page content */}
        </section>
      );
    }
    ```
  - This `DashboardLayout` layout wraps all pages in the `/dashboard` folder. The `{children}` placeholder will be replaced by each page’s content when rendered.

### Root Layout (Required)

The root layout is a special `layout.tsx` at the top level of the `app` folder. It applies to all pages in your app and should include `<html>` and `<body>` tags.

- **Example: Root Layout**
  - File: `app/layout.tsx`
    ```typescript
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body>
            <main>{children}</main>
          </body>
        </html>
      );
    }
    ```
  - This layout wraps every page and layout within your app.

---

## 3. Nesting Layouts

Layouts in nested folders wrap each other by default. This allows you to create a main layout, like the root layout, and then have sub-layouts for specific sections of the site.

### Example: Nested Layouts for `/dashboard` and `/dashboard/settings`

1. **Root Layout** (`app/layout.tsx`): Wraps the entire app.
2. **Dashboard Layout** (`app/dashboard/layout.tsx`): Wraps all pages in the dashboard.
3. **Settings Page** (`app/dashboard/settings/page.tsx`): A page inside the dashboard that uses the dashboard layout.

- **Example: Nested Structure**

  ```typescript
  // app/layout.tsx
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          {children} {/* Wraps all nested layouts and pages */}
        </body>
      </html>
    );
  }

  // app/dashboard/layout.tsx
  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        <nav>Dashboard Navigation</nav>
        {children} {/* Wraps all nested pages in the dashboard */}
      </section>
    );
  }

  // app/dashboard/settings/page.tsx
  export default function Page() {
    return <h1>Dashboard Settings</h1>;
  }
  ```

  - Visiting `/dashboard/settings` will render `RootLayout` -> `DashboardLayout` -> `Page`.

---

## Summary

- **`page.tsx`**: Defines individual pages for specific routes.
- **`layout.tsx`**: Adds shared UI around multiple pages. Nested layouts wrap pages within their scope.
- **Root Layout**: A top-level layout for the entire app, must include `<html>` and `<body>` tags.

By structuring your pages and layouts this way, you can manage your app’s layout and shared components efficiently!
