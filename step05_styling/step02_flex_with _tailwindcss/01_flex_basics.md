## 1. What is FlexBox?

Flexbox is a one-dimensional layout system used for aligning items along a single axis (either a row or a column). It’s ideal for simpler layouts needing alignment in one direction.

## Creating a flex container.

To make an element a `flex container`, you write the `flex` property into a parent element i.e. **className="flex"**. After writting this, all the child elements will become `flex items` of the `flex container`.

**Note**: Flex property would not work in child elements if you will not metion `flex` keyword inside the parent elements.

## Flexbox-utility types:

i) `Justify Content`
ii) `align-items`
iii) `Flex Wrap`
iv) `Flex Direction`
v) `Flex Grow and Shrink`:

We will discuss all of these in detail in coming steps

## Comparison of Flexbox with Grid

In flexbox you can move your items from rows to column or from column to rows but child elements will move in accordance with the direction of parent element's direction.

While in the **Grid**: child elements can be moved with any direction irrespective of the direction of parent element's direction.

**_Analogy:_**

**Using flex,** we would be able to move the parents and child in the same direction.

While **using the Grid**, any direction can be taken of child or parent elements, i.e. left to right of parent items and right to left of child items etc.

Flexbox is one-dimensional layout system while grid offers two-dimensional layout system.

- **When `flex-direction: row`** is set, the main axis is horizontal, and items align along this single row axis.

- **When `flex-direction: column`** is set, the main axis switches to vertical, and items align along this single column axis.

In Flexbox, you cannot set both `flex-direction: row` and `flex-direction: column` on a single container simultaneously because Flexbox can only manage one direction (one axis) at a time.

However, in CSS Grid, this is possible because it allows you to define both rows and columns on the same container.
