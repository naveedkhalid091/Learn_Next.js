## Pages and Layouts

The special files `layout.tsx, page.tsx, and template.tsx` allow you to create UI for a route. This file will guide you through how and when to use these special files.

## Pages

You can define a page by default exporting a component from a `page.tsx` file.

e.g. `[app/page.tsx]`

    `export default function Page() {
        return <h1>Hello, Home page!</h1>
    }`

Then, to create further pages, create a new folder and add the `page.tsx` file inside it.

#### For example:

To create a page for the `/dashboard` route, create a new folder called dashboard, and add the `page.tsx` file inside it:

e.g. [app/dashboard/page.tsx]

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

    export default function Page() {
        return <h1>Hello, Dashboard Page!</h1>
    }

## Layouts

A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.

You can define a layout by default exporting a React component from `layout.tsx` file.

The Layout component must have a {children} that will be populated with a child layout (if it exists) or a page during rendering.

`For example`, the layout will be shared with the `/dashboard` and
`/dashboard/settings` pages:

e.g. [app/dashboard/layout.tsx]

export default function DashboardLayout(
{children}:{children:React.ReactNode}){
return (

<section>
{/_ Include shared UI here e.g. a header or sidebar _/}
<nav></nav>
{children}
</section>
)
}

## Root Layout (Required)

The root layout is defined at the top level of the app directory and applies to all routes. This layout is required and must contain html and body tags, allowing you to modify the initial HTML returned from the server.

e.g. [app/layout.tsx]

export default function RootLayout({children,}: {children: React.ReactNode}) {
return (

<html lang="en">
<body>
{/_ Layout UI _/}
<main>{children}</main>
</body>
</html>
)
}

## Nesting Layouts

By default, layouts in the folder hierarchy are nested, which means they wrap child layouts via their children prop. You can nest layouts by adding layout.js inside specific route segments (folders).

For example, to create a layout for the /dashboard route, add a new layout.js file inside the dashboard folder:

e.g. [app/dashboard/layout.tsx]

export default function DashboardLayout({
children,
}: {
children: React.ReactNode
}) {
return <section>{children}</section>
}
