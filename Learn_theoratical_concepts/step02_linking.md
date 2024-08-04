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
