## Grid Rows

The poperty of grid row is given below:

`grid-rows-writeNumber`

## Use cases of `grid-rows-WriteNumber`:

use this utility if you need to create horizontal space (Row wise) of a page as per your requirments.

`For Example`:

Using `grid-rows-2` doesn’t limit you to only two pieces of content/elements, but it divides the availble space of a page into two sections (Row wise).

## Utilities of rows:

`grid-rows-1`: Creates one grid row occupying full row wise space of the main/parent container
`grid-rows-2`: Creates two grid rows occupying 50% row wise space of each of the main/parent container.
`grid-rows-3`: Creates three grid rows occupying 33% row wised spcae of each of the main/parent container.

The aboe utilites will auto adjust the space in between them but However if you want to create or define the `custom space` of each the containers/element then you can follow the same column based syntax, as follows:

i) grid-rows-[60%,40%] : Two rows will be created with the first row at 60% space while the othe row will take up the 40% space.
e.g

 <div className=grid-cols-[60%,40%]>
        <p>----</p>
 </div>
 
ii) grid-rows-[auto,1fr,auto]: Here the three rows will be created: first and last will take automatic spaces while the middle row will take the remaining space after the first and third row.
