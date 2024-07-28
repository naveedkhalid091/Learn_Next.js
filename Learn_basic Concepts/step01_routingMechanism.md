`Routing is a Path.`

## Terminologies:
i) Tree:A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc.
ii) SubTree: Subtree: Part of a tree, starting at a new root (first) and ending at the leaves (last).

iii) Root - The folder which is growing itself called Root. or the first node in a tree or subtree, such as a root layout.

iv) Leaf node- It doesn't grow, Nodes in a subtree that have no children, such as the last segment in a URL path.

URL constist of Domain & Segments (the content in between the `slash` is called segment).

v) URL Segment: Part of the URL path delimited by slashes.
vi) URL Path: Part of the URL that comes after the domain (composed of segments.


## App Router

Imagine a website as a house with many rooms. The App Router is like the map that helps you navigate through these rooms.

## How it works:
1. `Structure:` The App Router organizes your website into pages and layouts.
Layouts are like the outer walls of the house,providing a common structure for all rooms (pages). Pages are the individual rooms with specific content.
2. `Navigation:` When you click a link on a page, the App Router updates the "map" to show the new room you want to visit. This happens smoothly without reloading the entire page.
3. `Data Fetching:` The App Router can fetch data for a page before it's even displayed. This makes the page load faster.
4. `Server-Side Rendering (SSR):` The App Router can generate HTML on the server, which is then sent to the browser. This improves SEO and performance.
5. `Code Splitting:` It divides your website into smaller pieces, so only the necessary code is loaded, making it faster.

## Roles of Folders and Files

Next.js uses a file-system based router where:
  - Folders are used to define routes, and the file name inside the folder must be page.tsx to enable the Nextjs routing. 
  - Files are used to create UI that is shown for a route segment.

## Route Segments: 
Each folder in a route represents a route segment.

## Nested Routing: 

To create a nested route, you can nest folders inside each other. For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory. 

The /dashboard/settings route is composed of three segments:

- / (Root segment)
- dashboard (Segment)
- settings (Leaf segment)


## File Conventions: 

Next.js provides a set of special files to create UI with specific behavior in nested routes:

 - layout        - Shared UI for a segment and its children
 - page          - Unique UI of a route and make routes publicly accessible
 - loading       - Loading UI for a segment and its children
 - not-found     - Not found UI for a segment and its children
 - error         - Error UI for a segment and its children
 - global-error  - Global Error UI
 - route         - Server-side API endpoint  
 - template      - Specialized re-rendered Layout UI
 - default       - Fallback UI for Parallel Routes


## Component Hierarchy
The React components defined in special files of a route segment are rendered in a specific hierarchy:

    layout.tsx
    template.tsx
    error.tsx
    loading.tsx
    not-found.tsx
    page.tsx


## Colocation: 

In addition to special files, you have the option to colocate your own files (e.g. components, styles, tests, etc) inside folders in the app directory.

This is because while folders define routes, only the contents returned by page.js or route.js are publicly addressable.