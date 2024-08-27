Read `Chapter # 2` from `Modren CSS with Tailwind` second Edition Flexible styling without the Fuss.

We will discuss:

1.  `Installation of TailwindCss`

2.  `Types of Styling and their preferences:`

3.  `Examples of Using `Utility Class` Styling in Tailwind:`

4.  `Examples of Using `external` Styling in Tailwind:`

5.  `Directives`

## 1) `Installation of TailwindCss:`

The TailwindCSS automatically installed when create the `Next.js` project.

## 2) `Types of Styling and their preferences:`

i) `Internal styling:`

ii) `Inline styling:`

iii)` External styling:`

Above mentioned methods are the traditional methods in CSS.

## `utility class`

We normally put `keys and values` in CSS inline styling method but in TailwindCss we only write the `pre-defined utility class` directly in the `className` attribute.
For Example:

`className='bg-white text-left`

## `External Styling in tailwindCSS`

If we wanted to use external styling in TailwindCss then through `@apply` derivative we can use the external styling.

`for Example`:

#### .btn-primary {@apply bg-blue-500 text-white py-2 px-4 rounded;} `

## 3) Examples of utility classes in TailwindCss.

#### `Main Utility Classes in Tailwind CSS`

`

#### `Color`:

bg-{color}: Background color (e.g., bg-blue-500)
text-{color}: Text color (e.g., text-gray-700)
border-{color}: Border color (e.g., border-red-500)

#### `Spacing`

p-{size}: Padding (e.g., p-4)
m-{size}: Margin (e.g., m-4)
pt-{size}: Padding-top (e.g., pt-2)
pb-{size}: Padding-bottom (e.g., pb-2)
pl-{size}: Padding-left (e.g., pl-4)
pr-{size}: Padding-right (e.g., pr-4)

#### `Typography`

text-{size}: Font size (e.g., text-lg)
font-{weight}: Font weight (e.g., font-bold)
leading-{size}: Line height (e.g., leading-tight)
text-{color}: Text color (e.g., text-blue-600)

#### `Layout`

flex: Flexbox display
grid: Grid display
block: Block display
inline: Inline display
w-{size}: Width (e.g., w-1/2)
h-{size}: Height (e.g., h-12)

#### `Border`

border: Border width (e.g., border, border-2)
border-{color}: Border color (e.g., border-gray-400)
rounded: Border radius (e.g., rounded-md, rounded-full)

#### `Shadow`

shadow: Basic shadow (e.g., shadow-md)
shadow-{size}: Shadow size (e.g., shadow-lg)

#### `Position`

relative: Relative positioning
absolute: Absolute positioning
fixed: Fixed positioning
top-{size}: Top position (e.g., top-0)
left-{size}: Left position (e.g., left-0)

#### `Flexbox`

flex-{direction}: Flex direction (e.g., flex-row, flex-col)
items-{alignment}: Align items (e.g., items-center)
justify-{content}: Justify content (e.g., justify-between)

#### `Grid`

grid-cols-{number}: Number of columns (e.g., grid-cols-3)
gap-{size}: Grid gap (e.g., gap-4)

#### `Visibility`

visible: Visible
invisible: Invisible
hidden: Hidden

#### `Opacity`

opacity-{level}: Opacity level (e.g., opacity-50)

#### `Z-Index`

z-{index}: Z-index value (e.g., z-10)

## 4) Examples of external styling in TailwindCss.

.btn-primary {
`@apply` bg-blue-500 text-white py-2 px-4 rounded;
}

## 5) Directives

Following directives are available in the styles.css which must not be removed:

`@tailwind base`; - This class restrict HTML/CSS styling.

`@tailwind utilities`; Works by applying specific utility classes directly in HTML,

`@tailwind components`; It consolidates multiple utility classes into one class.
