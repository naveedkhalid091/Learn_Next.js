## Dynamic Routes: 

##########`Real world senario`############

### Issue-1 Creating a Page/route Based on a Variable and Future Data:

Consider a situation when a facebook developer want to `create a page name` based on a userID then obviously no one knows who will `signup` in future. How FaceBook Developers will create a page in advance for upcoming users?

## Issue-2 Handling a Large Number of Pages:
Secondly, Developers can't create a separate `page/route` for each user, if especially when user count increase to millions or billions.
  
Both of the above reasons are addressed in dynamic routes.

However the core reason behind the introduction of dynamic routes was to `Handling a large number of pages` because if a website has millions of users or items then creating and managing a separate `static page` for each one would be impractical and inefficient.

## Creating a Dynamic Segment

A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]

Dynamic Segments are passed as the params prop to `layout`, `page`, `route`, and `generateMetadata` functions.

## Use cases of Dynamic Routes: 

1.) Dynamic Content `at Request Time`:

`Scenario:` When users are either `known or unknown`, but the content is dynamic and may change frequently.

`Approach:` Use `dynamic routes` with `getServerSideProps` to fetch and render the page on each request. This ensures that users always see the most up-to-date information.

2.) Static Content `Prerendered at Build Time`:

`Scenario:` When `users` are `known or unknown`, but the `content is static` or `does not change` frequently.

`Approach:` Use dynamic routes with `getStaticPaths` and `getStaticProps` to pre-render pages at build time. This method `generates static HTML for each page based on known data.`


