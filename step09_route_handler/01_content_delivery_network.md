## Content Delivery Network (CDN):

- CDN (Content Delivery Network) refers to a geographically distributed network of servers.

* The purpose of a CDN is to deliver content to users from a location that is geographically closer to them, reducing latency (the time it takes for data to travel) and speeding up content delivery.

OR

A CDN (Content Delivery Network) is a network of distributed servers that deliver web content to users based on their geographic location, the origin of the webpage, and the server's proximity to the user

For Example:
If I am in pakistan and have hosted my website on AWS (Cloud service provider):
AWS has a network of servers around the world and AWS will provide data to the users from the nearest server location so that users may fetch data quickly.

Why you will convince your customers to come into the Next.js?

- Next.js is a full stack framework
- The another huge benefit of using Next.js is that Next.js support `Server Side Renering (SSR)` & `client side rendering`:

* Next.js offers SEO friendly web applicatons means you just have to provide the metadata and then Next/js will maintain your SEO, This facility is not avaiable in other frameworks
  If your customers use another framework then they will need to have SEO of their web applications by intergrating other tools and librarries etc.
* As Next.js is full stack framework so the connectivity of front-end with the backend is easy and you don't need a seperate deployment of your front and backend.
* When you declare a `route.ts` file inside the `api` folder then during deployment Next.js automatically understand that this is a file of `api server` which is to be used as a serverless.
  We don't need to tell the framework about the front-end and back-code, because Next.js automatically distinguish the front-end code & backend code.
