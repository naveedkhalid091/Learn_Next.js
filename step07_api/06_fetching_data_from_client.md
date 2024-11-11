## fetching data from client

#### Definition:

Data is explicitly requested by the client through user actions, like clicks or form submissions.

Users initiate the data request in client side rendering.

#### Example:

A user clicks on a button to load more products on an e-commerce site, and the browser fetches new products from the server without refreshing the page.

#### Use Cases:

Form submissions, search queries, or loading additional content on demand.

#### Coding Example:

See the project `books-api-app` for coding Exmaples, I have fetched data from client side using two following methods:

1. Fetched data by using Hooks
2. Fetched data after installing the `swr` library

(see the code inside the books-api-app under folder swr_method).

You can Install the swr library as:

`pnpm install swr`
