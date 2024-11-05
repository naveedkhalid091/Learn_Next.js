Read `Chapter # 2` from `Modren CSS with Tailwind` second Edition Flexible styling without the Fuss.

We will discuss:

1. ## Installation of TailwindCss

   - TailwindCSS is automatically installed with the creation of a Next.js project.

2. ## Types of Styling and their preferences:

   - ### Traditional CSS Styling Types:

     - 1. **Internal Styling:** CSS written within **style tags** in HTML.
     - 2. **Inline Styling:** CSS applied directly in the element’s **style attribute**.
     - 3. **External Styling:** CSS applied from an external .css file.

   - ### Tailwind Styling types are:

   - 1. **Utility Classes:** Instead of keys and values, Tailwind uses pre-defined classes directly in className, simplifying inline styling.

     - **Example:**

     ```html
     <h1 className="bg-white text-left"></h1>
     ```

     - **Examples of Using `Utility Class` Styling:**

   - **Common Utility Classes:**

     - **Color:** Background, text, and border colors (e.g., bg-blue-500, text-gray-700, border-red-500).
     - **Spacing:** Margin and padding (e.g., p-4, m-4, pt-2, pl-4).
     - **Typography:** Font size, weight, line height (e.g., text-lg, font-bold, leading-tight).
     - **Layout:** Flex, grid, width, height (e.g., flex, w-1/2, h-12).
     - **Border:** Width, color, radius (e.g., border, border-2, rounded-full).
     - **Shadow:** Basic and custom shadows (e.g., shadow-md, shadow-lg).
     - **Position:** Positioning options and offsets (e.g., relative, absolute, top-0).
     - **Flexbox/Grid:** Flex direction, alignment, gap (e.g., flex-row, items-center, gap-4).
     - **Visibility:** Visibility and opacity settings (e.g., visible, hidden, opacity-50).
     - **Z-Index:** Layer order (e.g., z-10).

   - 2. **External Styling in TailwindCSS:** Tailwind's `@apply` directive allows for creating custom styles using utility classes in external stylesheets.

        - **Example**
          global.css file:

        ```typescript
        .btn-primary {
        @apply bg-blue-500 text-white py-2 px-4 rounded;
        }
        ```

3. ### Directives
   Key Directives in styles.css:
   - **@tailwind base:** Sets up the base styling, affecting global HTML/CSS rules.
   - **@tailwind utilities:** Enables direct utility class usage in HTML.
   - **@tailwind components:** Allows grouping multiple utility classes into reusable component styles.
