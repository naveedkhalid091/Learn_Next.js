## Rendering list

In React/Next.js the `rendering list` is the process of displaying the `dynamicaly generating and displaying multiple elements or components` on an array of data.

This is a common task in building user interfaces where you need to display list of items such as list of products, users, or blog posts.

## How Data is rendered?:

#### 1. Data Structure:

At first step you must have you an array of objects/data where each element represents an item you want to display. For example, an array of objects, with each object containing information about a product (name, price, etc.).

#### 2. Mapping Data to JSX:

You use the .map() function in typeScript to iterate over the array. During each iteration, you generate a piece of JSX (React's syntax for defining UI elements) for each item in the array.

#### 3. key prop

When rendering a list, React requires you to include `a unique key prop` for `each element`. This `helps` React optimize rendering by `identifying which items have changed`, been added, or removed.

#### Why the key Prop is Important:

React uses the key prop to track elements between updates. This allows React to determine if an element should be re-rendered, which improves performance and prevents unnecessary updates.

## Considerations:

- Always ensure key values are unique within the list.
- If the list data changes, React will efficiently update only the necessary parts of the DOM.

* React don't allow to use for Loop that's why we use the map function to render the data.

## Use in Next.js:

In `Next.js`, the approach is the same as in React because Next.js is built on top of React.

However, in Next.js, you might often render lists based on data fetched from an external source (e.g., an API) within `getStaticProps` or `getServerSideProps`.
