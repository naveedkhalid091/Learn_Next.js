We use Tailwind Containers for making navBar, SideBar 

There are two weapons in TilwindCss which are called 
- `Flexbox`
- `Grid`

## 1. `What is FlexBox`? 

Flexbox in Tailwind CSS is `a utility or set of classes` that `provides a flexible layout` system for creating responsive and dynamic designs.

Let look at a very simple exmaple to begin with: 

Qoute side by side: 

Assume you have three motivational qoutes to display on your web page in a single row (on Desktop screen size). You `want blocks` to `occupy` the same height and hence adjust widths based on the lenght of each qoute. These qoutes are randomly picked. You don't know how long or short each qoute is, so you can't specify widths in fixed units for them. 


you only need to me mention the `flex` property to have the desired results. 

e.g 

<div class="flex">
    <div>.....</div>
    <div>.....</div>
    <div>.....</div>
</div>


`Flex` property allow us to arrange elements in one direction (Horizontally or vertically) and control thier dimensions, alignments, order of appearance and more. In below mentioned properties/utilities (after ---- lines). 
__________________________________________________
- A parent element is called `flex container`. 
- While a child element is called `flex item`.
- Only the immediate child elements of th container becomes flex items. Childrens of flex items are not affected. 

`Note`: if you wanted to use the below flex utilities then first you have to under write `flex` and then write below utilities. if you will not follow this pattren then flex properties will not work._____________________________________________________

## Flexbox-utility types: 

i) `Justify Content`:

`justify-content`: Use this property `to Manage the distances` in accordance to the `main axis` (horizontal in a row, vertical in a column).

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

iii) `Flex Wrap`: use it `when your screen size run out of space` because of too much items and use it to keep the items within the boundry following properties are used to adjust the items. 

Properties/methods are given below: 

`flex-wrap`: Allows flex items to wrap onto multiple lines.
`flex-wrap-reverse`: Wraps flex items onto multiple lines in reverse order.
`flex-nowrap`: Prevents flex items from wrapping onto multiple lines.

iv) `Flex Direction`:

Use it when you wanted an item to be laid out in a row (horizontally) or column (vertically) or whether the order should be reversed. 
_____________________________________________________________________________
We have two types of exis `main exis` and `cross exis`. If we are making the row flex then our main exis would be `main exis` and if we are making column flex then our main exis would be  `corss exis`.
____________________________________________________________________________

 - `flex-row`: Arranges flex items in a horizontal row (left to right). 
 - `flex-row-reverse`: Arranges flex items in a horizontal row, but in reverse order (right to left).
 - `flex-col`: Arranges flex items in a vertical column (top to bottom).
 - `flex-col-reverse`: Arranges flex items in a vertical column, but in reverse order (bottom to top). 

v) `Flex Grow and Shrink`:

It is used when you want certain items to take up more space if there is extra room in the container.

Example: Imagine you have three boxes inside a container. If you want one of the boxes to expand and fill more of the available space, you can use the flex-grow property.

<div class="flex">
  <div class="flex-grow-0 bg-red-500 p-4">Box 1</div>
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