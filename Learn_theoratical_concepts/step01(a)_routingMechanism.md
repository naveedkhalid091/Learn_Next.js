`Routing is a Path.`

## Terminologies:

i) Tree:A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc.

ii) SubTree: Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).

iii) Root - The first node in a tree or subtree, such as a root layout. or the folder which is growing itself called Root.

iv) Leaf- It doesn't grow, Nodes in a subtree that have no children, such as the last segment in a URL path.

URL constist of Domain & Segments (the content in between the `slash` is called segment).

v) URL Segment: Part of the URL path delimited by slashes.
vi) URL Path: Part of the URL that comes after the domain (composed of segments.

## App Router

Imagine a website as a house with many rooms. The App Router is like the map that helps you navigate through these rooms.

In version 13, Next.js introduced a `new App Router` built on React Server Components. Previously the page router was available instead of `app router`.

`app Router` supports shared layouts, nested routing, loading states, error handling, and more.

By default, components inside app are React Server Components. This is a performance optimization and allows you to easily adopt them, and you can also use Client Components.

## Roles of Folders and Files

Next.js uses a `file-system` based router where:
`Folders are used to define routes.` : Creating folder means that you have created a route.
`Files are used to create UI` so after creating a folder/Route you need to create a file called `page.tsx` for UI. if you will not create a a file then Route UI will not be visible.

## Route Segments

"In Next.js, every folder you create for a route is like a part of the website address (URL) and is called a route segment. Each folder’s name helps to build a part of the web address where users can visit your pages.

## Nested Routes:

To create a nested route, you can nest folders inside each other. For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.

The `/dashboard/settings` route is composed of three segments:

`/` = (Root segment)
`dashboard` = (Segment)
`settings` (Leaf segment)

## File Conventions:

Next.js provides a set of special files to create UI with specific behavior in nested routes:

- layout - Shared UI for a segment and its children
- page - Unique UI of a route and make routes publicly accessible
- loading - Loading UI for a segment and its children
- not-found - Not found UI for a segment and its children
- error - Error UI for a segment and its children
- global-error - Global Error UI
- route - Server-side API endpoint
- template - Specialized re-rendered Layout UI
- default - Fallback UI for Parallel Routes

## Component Hierarchy

The following hierarchy does not mean that you need to follow a certain pattern of creating files/pages (You can create any file first or at last). Instead it means that how Next.js respond to these files if these are present in a specific route.

So Next.js will render `layout.tsx` at first and `page.tsx` at last. The complete order of execution is mentioned below:

HINT - (LTE-LNP)

    i) `layout.tsx` - Render the overall structure and layout for the route at stage first.
     ii)`template.tsx` - Provides and render a reusable template for content at stage second.
    iii) `error.tsx` - Manages error states for the route at stage third.
    iv) loading.tsx  - Displays a loading state while the route is being prepared at stage four.
    v) not-found.tsx - Handles cases where a route or resource is not found at stage five.
    vi) page.tsx - and Finally render the page.tsx at last.

## Colocation:

In Next.js, You have the option to colocate (keep related files together in a same folder) your own files (e.g. Layout components, styles, tests, etc) inside folders in the app directory.
This is because while folders define routes, only the contents returned by page.tsx or route.tsx are publicly visible.

## Advanced Routing Patterns

The App Router also provides a set of conventions to help you implement more advanced routing patterns. These include:

`Parallel Routes`: Parallel Routes let you display multiple pages or sections at the same time within the same view. Each section can have its own navigation and can be interacted with independently. For example, in a dashboard with a sidebar and main content area, you can view and navigate the sidebar while separately interacting with the main content.

`Intercepting Routes`: Allows you to display new or detailed content without leaving the current page.
`For example`: When you click on a photo or video in your feed, Facebook shows the media in a lightbox or overlay while keeping the rest of your feed visible. This allows you to interact with the media without navigating away from your main feed.

`Difference between Parallel and Intercepting Routes`
This is different from Intercepting Routes, where you stay on the same page but show additional details or content (like a modal) within the existing view. Parallel Routes split the view into separate, independently navigable sections, while Intercepting Routes add new content on top of the current page without changing the main view.

###############`Optional reading for further clarification` ############

## How it works:

The App Router works in a new directory named `app`.

1. `Structure:` The App Router organizes your website into pages and layouts.
   Layouts are like the outer walls of the house,providing a common structure for all rooms (pages). Pages are the individual rooms with specific content.
2. `Navigation:` When you click a link on a page, the App Router updates the "map" to show the new room you want to visit. This happens smoothly without reloading the entire page.
3. `Data Fetching:` The App Router can fetch data for a page before it's even displayed. This makes the page load faster.
4. `Server-Side Rendering (SSR):` The App Router can generate HTML on the server, which is then sent to the browser. This improves SEO and performance.
5. `Code Splitting:` It divides your website into smaller pieces, so only the necessary code is loaded, making it faster.

##############################################################################
