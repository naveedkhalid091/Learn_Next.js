## Understanding CSS Units:

Units of CSS are:

1. pixel (px):
2. Percentage(%):
3. Root elements(rem):
4. fraction(fr):

All of the above units measure the `width and height of the elements`, but their use cases are different, which are given below:

**Use Cases:**

#### 1. pixel (px):

Pixels are a **fixed unit** that do not scale with screen size. Once you set an element's width and height in pixels, it will stay the same across different devices, making `px` a **non-responsive unit**.

#### Usage Example in tailwind`:

```html
<div class="w-[200px] h-[200px]">Fixed size box</div>
```

The box will stay at 200px by 200px regardless of the screen size.

#### 2. Percentage(%):

Percentages set sizes relative to the parent element. If the parent element changes size, the percentage-based size will adjust, making it responsive.

`For Example`:

```html
<div class="w-400px bg-gray-200">
  <div class="w-[50%] bg-blue-500 text-white">Responsive child</div>
</div>
```

If the parent element's width is 400px, the child’s width (50%) will be 200px. If the parent’s width changes, so will the child’s.

#### usage of % in Parent elements and child`

If you wanted to make both the parent and child elements responsive then you can also write % in both elments (parent and child). e.g

```html
<div class="w-[100%] bg-gray-200">
  <div class="w-[50%] bg-blue-500 text-white">Responsive child</div>
</div>
```

#### 3. Root elements(rem):

As you are now aware that the % is applied relative to the parent element, but the `rem` is applied relative to the root elements especially which is most likely in the html tag.

The default brower's font size of html is set at 16px. which is equal to `1rem`.
if the default html font is `16px` then the `1rem`=`16px`
if you change the default html font, let say `18px` then `1rem=18px`

If you will apply unit of `2rem` then it would means that the font size would be double then the default font size i.e (2\*16=32px).

You can apply `rem` to increase the size of the following:

Font Size:
Padding:
Margin:
Width and Height
Line-Height:

`For Example`:

`className="grid-cols-[2rem,1fr]"`

where:
As `rem` is applied with column, so [2rem,1fr] means that two columns will be created with following size:
`2rem`: means one column width would be double size (2rem) then the default size.
`1fr`: the remaining space will be occupied by the other column.

You can also customize the `rem` value, in html tag.

#### 4. fraction(fr):

`fr` is specifically used within CSS Grid Layouts to divide available space among grid items. We will learn it in the grid section.
