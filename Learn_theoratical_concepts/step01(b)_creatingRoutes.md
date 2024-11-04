# Routing and UI Creation in Next.js

## 1. Defining Routes

`https://nextjs.org/docs/app/building-your-application/routing/defining-routes`

- In Next.js, to make a route accessible, add a `page.jsx` or `page.tsx` file in the route’s folder.
- **Example**: For the URL `/dashboard/analytics`, create a `page.tsx` file in `app/dashboard/analytics`.
- Without this `page` file, the route won’t be accessible in the browser.
- You can store other files like components, stylesheets, and images in the same folder without affecting route accessibility.

## 2. Creating UI for Routes

- **Pages**: Use the `page.tsx` file to create UI that is unique to each route (e.g., `/about` or `/contact`).
- **Layouts**: Use layouts to add UI elements that are shared across multiple routes (e.g., navigation bars or footers).

### Steps to Create a Basic Page:

1. In the `app` folder, create a new folder for the route.

2. Inside the route folder, add a `page.tsx` file and define a React component to render the UI content.

   ```typeScript
   // Example of a page component
   export default function Page() {
     return <div>Welcome to the Dashboard Analytics</div>;
   }
   ```
