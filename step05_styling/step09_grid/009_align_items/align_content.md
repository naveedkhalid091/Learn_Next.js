## Align_items

`align-items`: Use this property `to Manage the distances` in accordance to align the cross axis (vertical in a row, horizontal in a column).

`Note`: `align-items` only manages single-line content. This is correct in the context of Flexbox.
`In Grid`, `align-items` will align items within each grid area, regardless of the content being single-line or multi-line. For multi-line content, align-items still aligns items within their respective grid cells, but if you're looking to manage the overall alignment of all the rows, align-content is used.

The `items-*` utilities allow us to vertically align the content within the rows, while the previous property `content-*` allowed us to control spacing of entire rows. We have already seen the available utilities when we covered this concept with respect to flexbox.

Here they are again, for reference.

`items-start`: Aligns items to the start of the cross axis.
`items-end`: Aligns items to the end of the cross axis.
`items-center`: Centers items along the cross axis.
`items-stretch`: Stretches flex items to fill the container (default).
