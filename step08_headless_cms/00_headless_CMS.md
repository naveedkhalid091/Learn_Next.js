## Headless CMS (content Management System):

A headless CMS seperate your content from your presentation.

There are two famous systems of headless CMS which are:

i) Contentful
ii) Sanity

#### Q: Why Developers should choose/opt for the headless CMS even Developers can write all the content e.g Images, text and videos into the website?

#### Answer:

The need for a headless CMS like Sanity comes from the limitations of hardcoding content directly into the application. Let’s break down why developers choose a headless CMS like Sanity instead of just writing the content and deploying it themselves:

1. Separation of Content from Code:

- `Traditional Approach`: As a developer, you can hardcode content into your application, but every time the content needs updating (like text, images, or product details), you need to change the code, redeploy the site, and sometimes push a new version to production.

* `With a Headless CMS`: Content and code are separated. The content can be managed by non-technical users (like marketers, editors, or product managers) via Sanity Studio, while developers focus on building the functionality and design of the app. This means content changes can be made without requiring a redeploy or involving developers.

2. Scalability:
   `Traditional Approach`: As your content grows (e.g., a blog with hundreds of posts or an eCommerce site with thousands of products), managing it manually in the code becomes time-consuming and inefficient.

   `With headless CMS`: Headless CMS is built for scale. You can manage massive amounts of content (including images, text, products, etc.) from one central location and push it out to multiple platforms, websites, or apps. The structured content can be queried flexibly, so you don’t need to change the code for every new content update.

3. Content Reusability Across Platforms:

`Traditional Approach`: If you're managing content manually in the codebase, it's often tied to one platform or one front-end (e.g., a website). To reuse content across a mobile app, another website, or social media, you'd need to copy and paste or duplicate content.

`With Headless CMS`: Since it’s headless, you can serve the same content via APIs to different front ends, whether it’s a website, mobile app, IoT device, or social media. This API-first approach allows content to be reused and repurposed across multiple channels without duplicating effort.

4. Non-Technical User-Friendly:

`Traditional Approach`: Non-developers (e.g., marketers or content creators) would need to wait for developers to push content updates.

`With Headless`: Non-developers can manage content via an easy-to-use interface (Sanity Studio). They don’t need coding skills, and they can handle their content independently, freeing up developers to focus on technical tasks.

5. Faster Time-to-Market:

`Traditional Approach`: If a marketing campaign or content update requires developer involvement, the turnaround time may be slow due to code updates, testing, and redeployment.

`With Headless CMS`: Content teams can quickly update and publish content without relying on the development team, leading to faster turnaround times and reduced bottlenecks.

## Processes/Features of headless CMS:

There are following processes of a headless CMS:

1. `Content Modeling`: The process of defining the structure and relationships of different types of content that an application will manage.
2. `Content Creation & Management`: Editors create and manage content using the CMS interface without worrying about how it will display.
3. `Storage and Delivery (CDN-content delivery network)`: Content is stored and ready to be delivered via APIs.
4. `APIs first approach`: The content is accessible through the APIs and that's why APIs are built before any front-end interface.However, Pre-built APIs from `Contentful` and `Sanity` can be used, but building a custom API may still be required when additional functionality or integrations are required.
5. `Front-End Development`: Build custom front-ends (websites, apps) that request and display content from the CMS.
6. `Multi-Channel Distribution`: Distribute content across multiple platforms (web, mobile, IoT) with the same source content.

Now we will learn how contentful and sanity ataully works:
