## Grid Columns

The utilities `grid-cols-*` is used to specify how many columns you need and of what size each:

## utlities of creating columns

`grid-cols-1`: Creates one grid column occupying full width of the container
`grid-cols-2`: Creates two grid columns occupying 50% width each
`grid-cols-3 `: Creates three grid columns occupying 33.33% width each:

You can use utilities from `grid-cols-1` until
`grid-cols-12` (It means grid has maximum of 12 columns).

Using `grid-cols-2` in a grid layout doesn't limit you to only having two elements(vertically). Instead, it divides the available page space into two equal columns. If you have more than two elements, the additional content will flow into the next row, with each row containing two elements within those columns.

`custom setting`
Sometimes we need grid columns with `unequal widths or custom setting of grid`, this can be achived as :

add custom settings insdie the []:

<div className=grid-cols-[40%,60%]>
        <p>----</p>
</div>

The above code means that the div has two columns one with 40% width while the other's width is 60%.

You can also `create sidebar` using this split method.

## Utilities for Controlling Element Placement in Grid Columns:

The elements will be auto adjusted or placed into the created columns according to the default settings but If you want to adjust customly then you can use following utilities.

`col-start-1`: The element will be placed into first column.
`col-start-2`: The element will be placed into the second column.

If you wanted to span/spread the whole one conent (upper or lower div) unto the other multiple columns then you can use following properties:

`cols-span-1`: This will spread your content into one column
`cols-span-2`: This will spread your content into two columns.

(Look below mentioned ref for cols-span-2 or check the attached picture span.png)

![Alt Text](span.png)

Or

![Alt Text](https://play.tailwindcss.com/MSKC60Te0R?size=800x600)
