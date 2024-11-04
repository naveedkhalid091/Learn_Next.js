# Navigating Between Routes in Next.js

In Next.js, you can navigate between different pages (or routes) in four main ways:

1. **Using the `<Link>` Component**
2. **Using the `useRouter` Hook (for Client Components)**
3. **Using the `redirect` Function (for Server Components)**
4. **Using the Native History API**

## 1. `<Link>` Component

The `<Link>` component is a built-in feature in Next.js that makes navigating between pages easy. It works like a regular HTML `<a>` tag but with added benefits like prefetching and client-side navigation.

### How to Use `<Link>`

To use the `<Link>` component, you need to import it from `next/link` and provide a `href` property that points to the route you want to navigate to. Here’s a simple example:

```typescript
import Link from "next/link";

export default function Home() {
  return <Link href="/dashboard">Dashboard</Link>;
}
```

#### Navigating Back to the Home Page:

To link back to the home page, you can set href to `/`:

```typescript
import Link from "next/link";

export default function About() {
  return <Link href="/">Home Page</Link>;
}
```

## 2. Using the `useRouter` Hook (for Client Components)

The useRouter hook lets you change routes programmatically from Client Components. This means you can navigate based on certain conditions or events in your application.

**_When to Use Programmatic Navigation_**

Here are a few common scenarios where you might want to use programmatic navigation:

**Form Submissions:** Redirect users to a different page after they successfully submit a form. For example, after logging in, you might send them to their dashboard.

**Dynamic Routes:** Change the route based on user input. For instance, you could navigate to a specific product page when a user enters a product ID.

#### How Routing and Navigation Work:

Next.js uses a smart system for routing and navigation. On the server side, your code is automatically split into smaller chunks based on the routes. On the client side, Next.js prefetches and caches these route segments. This means when you navigate to a new page, the browser doesn't reload everything; only the parts that need to change are updated.
