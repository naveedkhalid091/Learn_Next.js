## Align-self

Align-self specifically targets the alignment of `individual` grid items.

Values:
`self-auto:` Resets the alignment to the value set by the grid container.
`self-start`: Aligns the item at the start of the cross axis (typically the top).
`self-end`: Aligns the item at the end of the cross axis (typically the bottom).
`self-center`: Centers the item vertically within the container.
`self-baseline`: Aligns the item based on its content's baseline.
`self-stretch`: Stretches the item to fill the full height of the container.

`For Example:`

Suppose there is a card component with utility  
`grid-col`. By default, all the elements are stretched full width (along the cross axis). But you want the button alone to be pushed to the right, instead of stretching full width.

Below is the code to achive the result.

Parent tag: `class="container grid grid-col"`
Child tag: `class="self-end"`
