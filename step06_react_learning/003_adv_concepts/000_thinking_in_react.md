# Thinking in React:

Thinking in React is a design and development philosophy that emphasizes breaking down your user interface into small, reusable components. This method allows you to manage how data flows through these components, making it easier to create interactive applications.

Let's break this down with a real-world example and simple terms:

## Step 1: Break the UI into a component hierarchy:

Before coding, imagine you have a simple shopping website where users can search for products.

Let's say the designer provided you with a **mockup:** **(In software development, mockups are commonly used to present the look and feel of a website, mobile app, or other digital products before they are built, allowing stakeholders to review and provide feedback on the design.)** that includes:

- A search bar where users can type in product names.

- A product list where you see items like fruits and vegetables.

- Products are categorized into Fruits and Vegetables sections.

- Each item has a price and stock status (in stock or out of stock).

When breaking this UI into components:

- The entire page can be thought of as one big component: FilterableProductTable.

* Inside it, you'll have smaller components like:

  - `SearchBar` (for the search functionality).
  - `ProductTable` (displays all products).
  - `ProductCategoryRow` (displays category headings like "Fruits" or "Vegetables").
  - `ProductRow` (shows individual products like Apple, Dragonfruit, etc.):

#### Hierarchy:

1. FilterableProductTable

   - SearchBar

   * ProductTable
     - ProductCategoryRow
     * ProductRow

## Step 2: Build a static version in React:

Now that you have your component hierarchy, it's time to implement your app.
The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity… yet!!!
It's often easier to build the static version first and add interactivity later.
Building a static version requires a lot of typing and no thinking but adding interactivity requires a lot of thinking without typing.

To build a static version of your app that renders your data model, you'll want to build components that reuse other components and pass data using props. Props are a way of passing data from parent to child.
You can either build “top down” by starting with building the components higher up in the hierarchy (like FilterableProductTable) or “bottom up” by working from components lower down (like ProductRow).
In simpler examples, it's usually easier to go top-down, and on larger projects, it’s easier to go bottom-up.
