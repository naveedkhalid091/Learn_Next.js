## How to create an API in Next.js

Creating an API in Next.js with the App Router is straightforward Follow these steps:

**Step 1: Set Up Your Project:**
Make sure you have a Next.js project set up. If you haven’t created one yet, you can start a new project with the following commands:

`npx create-next-app@latest my-next-app`
`cd my-next-app`

**Step 2: Create the API Route Folder:**

i) Inside the app directory, **create a folder named api**. This will contain all your API routes.
ii) Within the **api** folder, create another folder that **describes your endpoint** (e.g., hello). This structure lets Next.js know that it’s an API route.

Your folder structure should look like this:

         my-next-app
                  └── app
                     └── api
                        └── endPoint(folders-name)
                           └── route.ts

**Step 3: Create the Route File:**

Inside the end-point folder, create a file named
`route.ts`. This file will handle your API logic.

**Step 4: Define the API Handler:**

In the `route.ts` file, write the following code:

```tsx
import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ message: "Hello, World!" });
}
```

Here’s a breakdown:

- **_NextResponse:_** This is a helper from Next.js to create `JSON` responses easily.
- **_`GET` function:_** This function will run when a GET request is made to your API endpoint (/api/hello). It returns a JSON response with a message.

**Step 5: Test Your API**

To test your API:

1. Run your Next.js project:
   `npm run dev`
2. Open your browser and navigate to http://localhost:3000/api/hello.

You should see a JSON response:

```tsx
{
  "message": "Hello, World!"
}
```

**Step 6: Add More API Methods (Optional)**
You can handle other **HTTP methods**, like `POST`, `PUT`, and `DELETE`, by exporting additional functions in the same `route.ts` file. Here’s an example:

```tsx
export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ receivedData: data });
}
```

In this example, the `POST` function will accept JSON data from the request body.

**Q: If `Hello World` is not available or saved in the database then how can I test it by navigating to the http://localhost:3000/api/hello?**

Ans: If "Hello, World!" is not saved in any database, the endpoint at `http://localhost:3000/api/hello` would still work if your code is hardcoded to return it.

This does not require any database at all, it's just returning a fixed response. Visiting http://localhost:3000/api/hello would simply return `{"message": "Hello, World!"}` every time because it's hard coded and intentionally calling `Hello World`,

If you want it to retrieve "Hello, World!" specifically from a database (rather than hardcoding it), you’d need to:

1. Save the message in the database first so it exists to be retrieved.
2. Modify the code to fetch the message from the database:

For Example:

```tsx
// File: app/api/hello/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/drizzle"; // Import Drizzle setup with Supabase
import { messages } from "@/lib/schema"; // Import messages schema

export async function GET() {
  try {
    // Query the `messages` table for a record with id 1
    const [messageRecord] = await db
      .select({
        message: messages.message,
      })
      .from(messages)
      .where(messages.id.eq(1)); // Assuming `id = 1` holds "Hello, World!"

    if (messageRecord) {
      // If message is found, return it
      return NextResponse.json({ message: messageRecord.message });
    } else {
      // If message is not found, return a default "Hello, World!" message
      return NextResponse.json({ message: "Hello, World!" });
    }
  } catch (error) {
    // Log the error for debugging
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}
```
