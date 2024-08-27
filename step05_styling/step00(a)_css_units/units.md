## Understanding CSS Units:

Units of CSS are:

1. pixel (px):
2. Percentage(%):
3. Root elements(rem):
4. fraction(fr):

All of the above units measure the `width and height ofthe elements`, but their use cases are different, which are given below:

`Use Cases:`

## 1. pixel (px):

    It measures the fixed width and height of an element (item or content) in webpage. Once its size{w & h} is defined then it will not change its width or height with respect to the change in screen size(no responsiveness), `Hence` it is not a responsive unit.

## Usage Example in tailwind`:

`className="w-200px h-200-px" `

The elements under the above setting will be fixed at 200px even when the webpage's screen size is changing.

## 2. Percentage(%):

It also measures the width and height of items but relative to the parent element's size.

`For Example`:
If you have a parent div that is 400px wide, and you set a child div inside it to width:50% the child div will be 50% of the parent's width, which equals 200px (50% of 400px).

Unlike `px`, which is a fixed size, `%` is relative. This means that if the parent element changes size the child element’s size (in %) will change accordingly.

#### usage of % in child elements`

Parent div: `className="100px bg-gray-200"`
Child div: `className="w-[50%] bg-blue-500 text-white" `

#### usage of % in Parent elements and child`

If you wanted to make both the parent and child elements responsive then you can also write % in both elments (parent and child). e.g

Parent div: `className="w-[100%] bg-gray-200"`
Child div: `className="w-[50%] bg-blue-500 text-white"`

## 3. Root elements(rem):

As you are now aware that the % is applied relative to the parent element, but the `rem` is applied relative to the root elements especially which is most likely in the html tag.

The default brower's font size of html is set at 16px. which is equal to `1rem`.
if the default html font is `16px` then the `1rem`=`16px`
if you change the default html font, let say `18px` then `1rem=18px`

If you will apply unit of `2rem` then it would means that the font size would be double then the default font size.

You can apply rem to increase the size of the following:

Font Size:
Padding:
Margin:
Width and Height
Line-Height:

`For Example`:

`className="grid-cols-[2rem,1fr]"`

where:
As `rem` is applied with column, so [2rem,1fr] means that two columns will be created wih following size:
`2rem`: means one column width would be double size (2rem) then the default size.
`1fr`: the remaining space will be occupied by the other column.

You can also customize the rem value.

## 4. fraction(fr):

`fr` is specifically used within CSS Grid Layouts to divide available space among grid items. We will learn it in the grid section.
