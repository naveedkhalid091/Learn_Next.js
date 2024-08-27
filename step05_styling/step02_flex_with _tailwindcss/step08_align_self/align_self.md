## Align-self

Align-self specifically targets the alignment of individual flex items.
It controls the vertical alignment of an individual flex item within its flex container.

Values:
`self-auto:` Resets the alignment to the value set by the flex container.
`self-start`: Aligns the item at the start of the cross axis (typically the top).
`self-end`: Aligns the item at the end of the cross axis (typically the bottom).
`self-center`: Centers the item vertically within the container.
`self-baseline`: Aligns the item based on its content's baseline.
`self-stretch`: Stretches the item to fill the full height of the container.

`For Example:`

Suppose there is a card component with utility  
`flex-col`. By default, all the elements are stretched full width (along the cross axis). But you want the button alone to be pushed to the right, instead of stretching full width.

Below is the image and if you wanted to display button at right side then you can achive this by writting following attribute in `button` element.

`class="self-end"`

![Alt text](https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300)
