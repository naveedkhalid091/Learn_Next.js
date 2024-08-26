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

`Usage Example in tailwind`:

<div className='w-200px h-200-px'>
  <h1> Hello world </h1>
  <button>Click Me<button>
</div>

The heading and buttons will be fixed at 200px even when the webpage's screen size is changing.

## 2. Percentage(%):

It also measures the width and height of items but relative to the parent element's size.

`For Example`:
If you have a parent <div> that is 400px wide, and you set a child <div> inside it to width:50% the child <div> will be 50% of the parent's width, which equals 200px (50% of 400px).

Unlike `px`, which is a fixed size, `%` is relative. This means that if the parent element changes size the child element’s size (in %) will change accordingly.

`usage of % in child elements`

<div className="100px bg-gray-200">
  <button className="w-[50%] bg-blue-500 text-white">Click me</button>
</div>

`usage of % in Parent elements and child`

If you wanted to make both the parent and child elements responsive then you can also write % in both elments (parent and child). e.g

<div className="w-[100%] bg-gray-200">
  <button className="w-[50%] bg-blue-500 text-white">Click me</button>
</div>

## 3. Root elements(rem):

As you are now aware that the % is applied relative to the parent element, but the `rem` is applied relative to the root elements especially which is most likely the <html>.

The default brower's font size of html is set at 16px. which is equal to `1rem`.

if you will apply unit of `2rem` then it would means that the font size would be double then the default font size.

`For Example`:

 <html>
  <div className="grid-col-[2rem,1fr]">
   <h1> This is Heading</h1>
   <p> This is Paragraph</p>
  </div>
 </html>

You can also customize the rem value

4. fraction(fr):

`fr` is specifically used within CSS Grid Layouts to divide available space among grid items. We will learn it in the grid section at step
`010_grid > 004_fraction_unit`
