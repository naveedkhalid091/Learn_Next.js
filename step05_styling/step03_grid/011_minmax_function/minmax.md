## What is minmax( ):

`minmax()`: This is a function used in CSS Grid to define the minimum and maximum sizes of a grid track (which can be a row or a column).

for Example:

<div className="grid minmax(100px,1fr)">

`100px`: This is the minimum size that a grid column (or row) can be. No matter how small the container gets, each column will always be at least 100 pixels wide.

`1fr:` This is the maximum size that a grid column can grow to. The fr stands for "fraction of the available space." So 1fr means the column will take up one fraction of the remaining space, allowing it to grow and fill up the container as needed.
Each column will never be smaller than 100 pixels wide.

`minmax(100px, 1fr) means`:

- Each column will never be smaller than 100 pixels wide.
- But, if there's extra space in the container, the column can grow to fill up that space proportionally with other columns.
