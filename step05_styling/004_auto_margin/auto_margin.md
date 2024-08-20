## Auto Margins in Tailwind CSS

Auto margins in Tailwind CSS are used to center block-level elements (like divs) horizontally within their parent containers.

## Question:

`If we have justify-center utility available to center the items then why we are required to use auto margins?`

## Answer:

The center postion from the `justify center` will be achived without looking the position of outer div (Parent div), while `mx-auto` utility adjust its center location in accordance with the outer div (parent div).

So It is better to use `mx-auto` only if you wanted to adjust inner div along with the position of outer div (parent div).

use `justify-center` if you wanted to adjust the center position of items/childs within the flex box irrespective of looking at the position of outer div.

## Uses of Auto Margin

it can be used as `mx-auto`

Where:
`mx` stands for "margin on the x-axis" (left and right), and
`auto` makes the margin automatically adjust to fill the remaining space.

## Example via Visual Analogy:

`mx-auto`: Imagine you have a picture frame (the parent container), and you want to center a photo (the block element) inside the frame. You'd push the photo equally from the left and right sides until it's centered. That's what mx-auto does.

`justify-center`: Now, imagine you have a row of three photos (child elements) inside a picture frame (the flex container), and you want to push them all together to be in the center of the frame witout looking the position of a parent/frame/outerDiv. That's what `justify-center` does.

Properties of `auto` margins are given below:

`mx-auto`: Sets both left and right margins to auto, centering the element horizontally within its parent container.
`my-auto`: Sets both top and bottom margins to auto, centering the element vertically within a flex container.
`ml-auto`: Sets the left margin to auto, pushing the element to the right within its container. This is useful for aligning elements to the end of the container in a flexbox layout.
`mr-auto`: Sets the right margin to auto, pushing the element to the left within its container. This is often used to align elements to the start of the container in a flexbox layout.

For Example: In the footer you only need one (second) element at right while other at left side then following code will help:

<footer className=flex>
<div className="footer-col">Item 1</div>
<div className="footer-col ml-auto">Item 2</div>
<div className="footer-col">Item 3</div>
<div className="footer-col">Item 4</div>
</footer>

`Without flex`: Auto margins work based on block-level layout.They can be used for horizontal centering (mx-auto) or pushing elements to the sides (ml-auto, mr-auto).

`With flex`: Auto margins align elements within the flex container, and they are particularly useful for alignment in a flexbox layout.
And by default the styling of flex move from the left to right.with flex, items will be displayed from at the left.
