## Flex Grow and Shrink:

It is used when you want certain items to take up more space if there is extra room in the container.

Example: Imagine you have three boxes inside a container. If you want one of the boxes to expand and fill more of the available space, you can use the flex-grow property.

<div class="flex">
  <div class="flex-grow bg-red-500 p-4">Box 1</div>
  <div class="flex-grow bg-green-500 p-4">Box 2</div>
  <div class="flex-grow bg-blue-500 p-4">Box 3</div>
</div>

`Explanation:` In this example, Box 2 and Box 3 will grow to fill any extra space in the container. Box 1 won’t grow because it has flex-grow-0.

Summary
Flex Grow (flex-grow): Controls how much an item grows to fill available space. Use it when you want certain items to expand and occupy more space in the container.

Flex Shrink (flex-shrink): Controls how much an item shrinks when there isn’t enough space. Use it when you want certain items to shrink less or more depending on the available space.

<u> Properties of Grow and shirnk are mentioned below:</u>

`flex-grow-0`: Prevents the flex item from growing (This is default).
`flex-grow`: Allows the flex item to grow.
`flex-shrink-0`: Prevents the flex item from shrinking.
`flex-shrink`: Allows the flex item to shrink.
