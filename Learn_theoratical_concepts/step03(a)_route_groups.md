# Route Groups in Next.js

Route Groups allow developers to organize their project folders without changing the URL paths, which makes it easier to manage related files while ensuring that user access remains unaffected. Here’s a summary of how to create and utilize Route Groups effectively.

## Creating a Route Group

To create a route group, simply wrap the folder name in parentheses.

For example, `(folderName)` will create a group without altering the URL structure.

### Benefits of Using Route Groups

1. **Organize Routes**: Group related routes together based on site sections, intents, or teams without impacting the URL paths. For instance, you can use `(marketing)` or `(shop)` to categorize routes.
2. **Nested Layouts**: Enable the use of multiple nested layouts within the same segment. This allows you to create different layouts for various subsets of routes, making it easier to maintain a consistent UI where needed.

## Creating Multiple Root Layouts

To set up multiple root layouts:

- Remove the top-level `layout.js` file.
- Add a `layout.js` file inside each route group. This approach is useful for creating distinct sections of an application that may have completely different user interfaces or experiences.

Each root layout must include the `<html>` and `<body>` tags.

## Important Notes

- You can only include `layout.tsx`, `error.tsx`, and `loading.tsx` files within route groups. This allows you to define specific layouts, error handling, and loading states for related routes (e.g., having a blue header for all paths under `(settings)`).

- **Limitations**: You cannot add a `page.tsx` file inside route groups, as these files are meant to define the actual pages within the application.

By leveraging Route Groups, developers can create a cleaner project structure while maintaining user-friendly URL paths, enhancing both organization and scalability.
