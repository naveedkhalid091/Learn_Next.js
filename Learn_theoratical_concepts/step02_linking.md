## Linking and Navigating


There are four ways to navigate between routes in Next.js:

     i) Using the <Link> Component
    ii) Using the useRouter hook (Client Components)
    iii) Using the redirect function (Server Components)
    iv) Using the native History API.

    i) <Link> Component: 

<Link> is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes. It is the primary and recommended way to navigate between routes in Next.js.
 
 
 - Using Link Components 

    You can use it by importing it from next/link, and passing a href prop to the component:
 Coding is mentioned below: 
    ` import Link from 'next/link' `
    export default function Home() { 
         return <Link href="/dashboard">Dashboard</Link> 
        }
 
 For Navigating back to the Home Page you can mention / only in the `href` property. e.g 

 ` import Link from 'next/link' `
    export default function About() { 
         return <Link href="/">Home Page</Link> 
        }

 Navigating into the nested pages. 

 ` import Link from 'next/link' `
    export default function Home() { 
         return <Link href="/dashboard/profile">Home Page</Link> 
        }


Navigating into back to the root pages. 

 ` import Link from 'next/link' `
    export default function About() { 
         return <Link href="/dashboard">Home Page</Link> 
        }



ii) Using the useRouter() hook (Client Components)

The useRouter hook allows you to programmatically change routes from Client Components.

Programmatically means? Programmatic navigation refers to the ability to navigate between pages in your application based on conditions or logic. 

Here are some common scenarios where programmatic navigation is used:
`Form Submissions`:
Redirect a user to a new page after they successfully submit a form.
Example: After submitting a login form, you might want to redirect the user to their dashboard.

`Dynamic Routes:`
Change routes dynamically based on user input or application state.
Example: Navigate to a specific product page based on the product ID entered by the user.

`Conditional Navigation:`
Navigate based on certain conditions, such as user roles, authentication status, or specific application state.
Example: Redirect users to a login page if they try to access a protected route without being authenticated.

`How Routing and Navigation Works`

The App Router uses a hybrid approach for routing and navigation. On the server, your application code is automatically code-split by route segments. And on the client, Next.js prefetches and caches the route segments. This means, when a user navigates to a new route, the browser doesn't reload the page, and only the route segments that change re-render - improving the navigation experience and performance.

