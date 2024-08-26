## Creating Rows in Grid (auto sizing):

The utilities `grid-rows-*` is used to specify how many rows you need on a web page with the size of each row:

`For Example`

`grid-rows-1`: creates one row with 100% width on a web page.
`grid-rows-2`: creates two rows with 50% width of each web page.
`grid-rows-3`: creates three rows with 33.34% width of each web page.

`For Example`:

Using `grid-rows-2` All the written content on a web page will be fixed into two rows.

## Creating rows in a web page (custom sizing)

<div className=grid-rows-[30%,70%]>
        <p>----</p>
</div>

The above code will split a web page into two rows one with 30% width while the other with the 70% width

## Placement of content in Rows (Custom palcement):

`Starting Postion of Contents`:

`row-start-1`: The content/items will be placed on the first available row on the web page.
`row-start-2`: The content/items will be placed on the second available row on the web page.

`Ending Postion of Contents`:

`row-end-2`: It means that limiting the content till the `first row only`(end-2 means second row is not included).

`row-end-3`: It means that limiting the content till the `second row` (end-3 means third row is not included).

## Row Spaning

`rows-span-1`: This will spread your content into one row only.
`rows-span-2`: This will spread your content starting from first and utill the second row.
