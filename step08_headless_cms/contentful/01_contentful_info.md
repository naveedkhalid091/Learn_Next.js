## Contentful:

Contentful is a `Headless CMS` that allows users to `Manage website content independently`, reducing the need for developer intervention. `For example`, an authorized editor at a newspaper can write and publish articles directly through Contentful, updating the web application without redeploying it. `Additionally`, business owners can integrate Contentful with their applications to easily manage and publish new inventory, ensuring that their products are always up to date. This setup enables developers to focus on building features instead of handling content updates.

#### How developers fetch data from the contentful and to show the content into the website?

Before data fetching we need to confirm the existence of the content or need to create the content inside the contentful. If the data is created then in the second step we will be required to fetch the data from contentful into your application.

So initially there are following steps involved:

1. Creating data into the contentful.
2. Test data from postman
3. Fetch the data from contentful through through app.

## 1. Creating data into the contentful.

Step # 1 - Go to the contentful and signup for free:
Step # 2 - Create a Space and give a descrivptive name like `content is king`
Step # 3 - Create a content model/structure by clicking on the space and then click on the content model and then finally define the content types by clicking on the `create content type` button
Step # 4 - Add information to the content model.
Step 5: Add content and click on `publish` button.
Step 6 : Create an access token of your content by going to `settings`> `API keys`>`Add API key`, write the name of your API token and click on the `add API key` to create the access token.

As we have now learn to publish the blogs or contents now we will learn how to fetch this created content into our web application throught contentful APIs.

## 2. Test data from postman:

You will need to login into the postman and copy paste the url link into the postman

Morveover, read the Postman notes on how to use it.

## 2. Fetch the data from contentful into the web app.

Now, You need a `Content Delivery API (CDA)` to connect your data with your appliacation.

Note that CDA is the read only API means that you can't use the `post` method into the CDA.

Read the documentation by clicking on the [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) to connect your data easily.

Note: Mention the `Bearer` word inside the key before mentioning of access token, otherwise your data will not be fetched.

To fetch the specific part of your content then you need to read from the `Reference` and follow the process of fetching the relevent content.

See the coding example from `contentful_data_fetch`:

Important Information: As fetching of data involves API keys and Space Id in the url like below:

    fetch("https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/entries?access_token=${ACCESS_TOKEN}&content_type=article`s");

The complete url will be visible in the github after pushing the data so to prevent the leackage or missuse of your content and you must protect your API keys using the `environment variables`.

#### What are environment variables?

- Environment Variables are key & value pairs
- They can store data, such as file paths, system preferences, and credentials.

- Env variables can store sensitive information and these are globally available accross all the running OS.

* They don't need to install or import.

Click on the follwing link to create an environment variable.
[Environment variables](https://nextjs.org/docs/pages/api-reference/next-config-js/env)

However, you can add the non sensitive IDs into the `next.config.ts` but if your information is sensetive then you can create `.env` folder and pass all the sensitive information or Ids into the `.env` folder.
`.env` forlder will be considered as your local file and will not be even pushed into the gitgub.

Watch the [Video](https://www.youtube.com/watch?v=4W9NLESQA18&t=2885s) after the first 40 minutes to check how the data is being fetched.
