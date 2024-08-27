## 1. `What is FlexBox`?

Flex is a one dimensional layout setting system.

It is best to use flex for simpler layouts where alignment is in one direction, it aligns items along a single axis (row or column).

When we define an element as a `flex` its childs (flex items) are automatically arranged according to the rules defined in `flex` as a parent.

## Creating a flex container.

To make an element a `flex container`, you write the `flex` property into a parent element i.e. <div className="grid">. This mentioning will make all the nested childs the 'flex items or elements'. These `flex items` will then follow the `flex layout rules` defined by the parent.

For Example:

<div class="flex">   
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

In this example, the <div> with the class flex is the flex container, and the three child <div> elements (Item 1, Item 2, Item 3) are the flex items.
Only the immediate child elements of the container becomes flex items. Childrens of `flex items` are not affected.

`Note`: if you wanted to use the below flex utilities then first you have to write `flex` and then write below utilities. If you will not follow this pattren then flex properties will not work.

## Flexbox-utility types:

i) `Justify Content`
ii) `align-items`
iii) `Flex Wrap`
iv) `Flex Direction`
v) `Flex Grow and Shrink`:

We will discuss all of these in detail in coming steps
