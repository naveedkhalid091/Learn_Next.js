## What is Grid?

It is a 2-Dimensional layout settings system with rows and columns.

It is best to use `grid` for complex layouts settings where alignment is required in two direction, it aligns items along two axis (row and column) simultaneously.

When we define an element as a `grid` its childs (grid items) are automatically arranged according to the rules defined in `grid` as a parent.

## Creating a Grid container.

To make an element a `grid container`, you write the `grid` property into a parent element i.e. <div className="grid">. This mentioning will make all the childs the 'grid items or elements'. These grid items will then follow the grid layout rules defined by the parent.

For Example:

<div class="grid">   
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

In this example, the <div> with the class `grid` is the grid container, and the `three child <div>` elements (Item 1, Item 2, Item 3) are `the grid items`.
Only the immediate child elements of the container becomes grid items. Childrens of `grid items` are not affected.
