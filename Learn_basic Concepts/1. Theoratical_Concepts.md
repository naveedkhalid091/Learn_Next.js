## Starting Note: 
This is the first file of Learning Next.js 

## React  (https://react.dev/)

* A react component is a function that returns a piece of `User Interface`, typically in the form of markup(HTML). 
* It is a library for web and native user inferfaces, this library is component based. 
* React let's you build a user interface out of individual pieces called `components`. 
* As you work based on the `components`, you make components based on the `reusability` 
    i.e. You simply call the component (same a functions) wherever/whenever you wanted to use or update.
 

 ## Next.js

 ## What is Next.js? 
    * Next.js is the everything you need to build the great products on the web.   

 ## Features of Next.js
 1) `Built-in Optimization`: Next.js provide us the buildin optimization which means making something more efficient, effective and functional. These optimization includes: 
    
        * Automatic code Spliting: This breaks down the application into smaller chunks that are loaded only when needed, reducing the initial load time.
    
        * Static Site Generation(SSG) & Server Side Rendering(SSR): These techniques generate HTML on the server side, leading to faster initial page loads and better SEO.

        * Image Optimization: Next.js provides tools to automatically optimize images, reducing their size without losing quality, which speeds up page loading times.

        * PreFetching: Links are preloaded as they appear in the viewport, speeding up navigation.
2) `Dynamic HTML Streaming`: It Allows to show the page dynamically (Show the components on the page as soon as components finished loading) rather then showing the page at once when it gets load.

3) `React Server Components`: Next.js provides built-in support to make React Server Components, which are rendered on the server by default. This approach reduces the loading time since the server sends fully rendered HTML to the client. As a result, the user sees the UI more quickly because the page content is visible immediately, without needing additional client-side rendering to display the initial content.  
 
    * There are two types of Components one is `client side Components`and other is `server side components`.   

    * `Client-Side Components`: These components are rendered in the browser and can handle interactions and updates on the client side.
    
    * `Server-Side Components`: These components are rendered on the server and sent as fully-formed HTML to the client. They do not require client-side JavaScript for initial rendering, which can improve load times.

4) `Data Fetching`: APIs are used to fetch data. However, Next.js provides advanced features for Data fetching byond just APIs. 
    * Advance Data Fetching Features: 
        i) Static Generation (SG);
           * `getStaticProps`: Fetches data at build time. This method allows you to pre-render pages with data that is fetched when the application is built, ensuring that users receive fully-rendered HTML quickly. 
           * `getStaticPaths`: Works with `getStaticProps` to generate static pages for dynamic routes based on a list of paths. 
        ii) Server-Side Rendering (SSR);
           * `getServerSideProps`: Fetches data on each request, allowing for server-side rendering. This method ensures that the data is up-to-date on each page request and is ideal for dynamic content that changes frequently.

        ii) Incremental Static Regeneration (ISR); Allows you to update static content after the application has been built. With ISR, you can specify revalidation intervals to regenerate static pages in the background while serving the existing static pages to users.  

        iv) Client-Side Fetching: Using React `hooks` (e.g., useEffect with fetch or axios) to fetch data on the client side. This method is useful for dynamic content or user-specific data that doesn’t need to be pre-rendered.

5) `CSS Support`: Next.js support the CSS Modules, Tailwind CSS and other popular community libraries.

6) `Route Handlers`: Route Handlers in Next.js are a feature designed to handle HTTP requests and define server-side logic for routing. They allow you to create server-side endpoints directly in your Next.js project. 

## Basic Idea Behind Route Handlers: 

The basic idea for introducing Route Handlers in Next.js was to:

  ## Simplify Server-Side Logic: 
    Allow developers to define server-side endpoints and handle HTTP requests directly within their Next.js application, eliminating the need for a separate backend framework or server setup.

7) Advanced Routes and Nested Layouts: 

    Next.js offers powerful features for managing routing and layouts, including advanced routing capabilities and nested layouts. These features help build complex, scalable web applications with sophisticated navigation and consistent UI structures.
    
    ## Advanced Routing in Next.js

    i) Dynamic Routes:
        Dynamic routes allow you to create pages with dynamic segments in the URL. For instance, you can create a page for blog posts where the URL includes a unique identifier.

8) Middleware: 

Middleware provides a way to intercept and process requests at the edge. it allows you to run custom code before a request is completed, enabling various functionalities such as authentication, redirects, and logging

## Ending Note:
Now go to 2.GettingStarted.md file for more information.
