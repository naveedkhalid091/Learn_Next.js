## Fetching data from server (dynamic):

In this concept when user will visit a webapplication then everytime a new request of data fetching will be made and fresh data will be fetched.

All the code of static and dynamic fetching is same but only one change is required in fetch function which is given below:

    fetch("URL", {cache: "no-store",});

You only add an object {cache: "no-store",} after the URL in fetch function.

This command will let the Next.js not o store the fetched data into cache.

You can view the exmaple in the `Server` page created inside the `books-api-app`
But you will only see a coding difference, the UI will be same.

## How to judge if the data was dynamically fetched or statically?

Users can't judge if the data was fetched dynamically or statically only developer can see this after runing the command `pnpm run built`:

When the data will built then terminal will show the status: there you can easily find the instructions of Next.js and the behaviour of data fetched.
