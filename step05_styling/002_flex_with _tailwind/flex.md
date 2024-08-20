Read Book: `CSS Flex and Grid` by SHRUTI BALASA for flex related information.

There are two weapons in TilwindCss which are called

- `Flexbox`
- `Grid`

## 1. `What is FlexBox`?

Flexbox allows us to create flexible and responsive layouts. When we define an element as a `flex` its childs (flex items) are automatically arranged according to the rules defined in `flex` as a parent.

Creating a flex container.

To make an element a `flex container`, you apply the `flex` property to it. This changes the behavior of the container and its child elements.

For Example:

<div class="flex">   
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

In this example, the <div> with the class flex is the flex container, and the three child <div> elements (Item 1, Item 2, Item 3) are the flex items.
Only the immediate child elements of th container becomes flex items. Childrens of `flex items` are not affected.

`Note`: if you wanted to use the below flex utilities then first you have to write `flex` and then write below utilities. If you will not follow this pattren then flex properties will not work.\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***\_\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***

## Flexbox-utility types:

i) `Justify Content`
ii) `align-items`
iii) `Flex Wrap`
iv) `Flex Direction`
v) `Flex Grow and Shrink`:

`justify-content`: Use this property `to Manage the content's location` in accordance to the `main axis` (horizontal in a row, vertical in a column).

The properties are mentioned below:

`justify-start`: Aligns flex items to the start of the container.
`justify-end`: Aligns flex items to the end of the container.
`justify-center`: Centers flex items within the container.
`justify-between:` Distributes flex items evenly with space between them.
`justify-around`: Distributes flex items evenly with space around them.
`justify-evenly`: Distributes flex items evenly with equal space between them.

ii).`align-items`:

`align-items`: Use this property `to Manage the distances` in accordance to align the cross axis (vertical in a row, horizontal in a column).

`items-start`: Aligns items to the start of the cross axis.
`items-end`: Aligns items to the end of the cross axis.
`items-center`: Centers items along the cross axis.
`items-baseline`: Aligns flex items to their baseline.
`items-stretch`: Stretches flex items to fill the container (default).

iii) `Flex Wrap`: use it when you need to display `flex items` onto `multiple lines` espcially when your screen size run out of space when your `due to large number of items in navbar`.

Properties/methods are given below:

`flex-wrap`: Allows flex items to wrap onto multiple lines.
`flex-wrap-reverse`: Wraps flex items onto multiple lines in reverse order.
`flex-nowrap`: Prevents flex items from wrapping onto multiple lines.

iv) `Flex Direction`:

As we have studied `justify-content` which allows to move the items along the main exis (Horizontall) without changing the exis direction and we have also studied the `align-item` which allows to move the items alon with the cross exis(Vertical direction) it also does't change the exis postion.

But `flex direction` does `change the direction of an exis` if you have mentioned justify content it will move the items horizontally and similary if you will mention now the flex direction property it will change the horizontall exis into verical exist and will allow you to move in vertical postion as well.

- `flex-row`: Arranges flex items in a horizontal row (left to right).
- `flex-row-reverse`: Arranges flex items in a horizontal row, but in reverse order (right to left).
- `flex-col`: Arranges flex items in a vertical column (top to bottom).
- `flex-col-reverse`: Arranges flex items in a vertical column, but in reverse order (bottom to top).

v) `Flex Grow and Shrink`:

It is used when you want certain items to take up more space if there is extra room in the container.

Example: Imagine you have three boxes inside a container. If you want one of the boxes to expand and fill more of the available space, you can use the flex-grow property.

<div class="flex">
  <div class="flex-grow bg-red-500 p-4">Box 1</div>
  <div class="flex-grow bg-green-500 p-4">Box 2</div>
  <div class="flex-grow bg-blue-500 p-4">Box 3</div>
</div>

`Explanation:` In this example, Box 2 and Box 3 will grow to fill any extra space in the container. Box 1 won’t grow because it has flex-grow-0.

Summary
Flex Grow (flex-grow): Controls how much an item grows to fill available space. Use it when you want certain items to expand and occupy more space in the container.

Flex Shrink (flex-shrink): Controls how much an item shrinks when there isn’t enough space. Use it when you want certain items to shrink less or more depending on the available space.

<u> Properties of Grow and shirnk are mentioned below:</u>

`flex-grow-0`: Prevents the flex item from growing (This is default).
`flex-grow`: Allows the flex item to grow.
`flex-shrink-0`: Prevents the flex item from shrinking.
`flex-shrink`: Allows the flex item to shrink.

We use Tailwind Containers for making navBar, SideBar
