## Fetching data from server (dynamic):

#### Definition:

Data is fetched automatically in real-time based on user actions or conditions, without direct requests from the user.

In this case users may not even be aware that data is being fetched.

Example: News articles loading dynamically as you scroll down on a page (infinite scroll).

#### Use Cases:

Infinite scrolling, live updates, or notifications where new data is required without user intervention.

#### User Experience:

Can feel seamless and responsive as users receive updates automatically.

## Coding Example:

All the code of static and dynamic fetching is same but only one change is required in fetch function which is given below:

    fetch("URL", {cache: "no-store",});

You only add an object {cache: "no-store",} after the URL in fetch function.

This command will let the Next.js not to store the fetched data into cache.

You can view the coding exmaple inside the `books-api-app`

## How to judge if the data was dynamically fetched or statically?

Users can't judge if the data was fetched dynamically or statically only developer can see this after runing the command `pnpm run built`:

When the data is built then terminal show the status:
There you can easily find the instructions of Next.js and the behaviour of data fetched.
