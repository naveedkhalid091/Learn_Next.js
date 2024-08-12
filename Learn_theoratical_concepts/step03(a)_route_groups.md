## Route Groups

With Route Groups, you can organize your folders in a way that doesn’t change the URL paths. This means you can put related files into folders for better organization, but the URLs will stay the same as if those folders didn’t exist. This makes it easier to manage your project without affecting how users access your pages.


`CREATING A ROUTE GROUP`
A route group can be created by wrapping a folder's name in parenthesis: (folderName)


Route groups are useful for:
 - `Organizing routes into groups` e.g. by site section, intent, or team.
 - Enabling `nested layouts` in the same route segment level:
    - Creating multiple nested layouts in the same segment, including multiple root layouts
    - Adding a layout to a subset of routes in a common segment


## Examples:
## Organize routes without affecting the URL path
To organize routes without affecting the URL, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL 
`(e.g. (marketing) or (shop))`. 

## Creating multiple root layouts: 

To create multiple root layouts, remove the top-level layout.js file, and add a layout.js file inside each route groups. This is useful for partitioning an application into sections that have a completely different UI or experience. The <html> and <body> tags need to be added to each root layout.

## Important Notes: 

1) You can only create a `layout.tsx`, `error.tsx` and `loading.tsx` file inside the group routes because of specific layouts, errors and loading for specific group related routes. e.g. Blue colour header for all (settings) related paths/pages. 

2) You can't add a `page.tsx` indside the group routes. 

