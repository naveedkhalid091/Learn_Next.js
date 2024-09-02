## Rendering list

#### (Check its code in coding example's section)

In React/Next.js the `rendering list` is the process of displaying an array of data `dynamically`.

## How Data is rendered?:

`For example`, let’s say you have an array of products:

    const products = [

{ title: 'Cabbage', id: 1 },
{ title: 'Garlic', id: 2 },
{ title: 'Apple', id: 3 },
];

You can display above data into any page through `map function` after inporting the `array` page into the required page.

The map fucntion works same as loops. It is a method of an array.

The map function i.e `map()` iterate over the array, during each iteration it generates a piece of JSX for each item of the array.

#### `key prop`:

When rendering a list, React requires you to include `a unique key prop` for `each element`. This `helps` React optimize rendering by `identifying which items have changed`, been added, or removed.

#### For Example:

    const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
    );

    return (
    <ul>{listItems}</ul>
    );

Notice how `<li>` has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

#### Why the key Prop is Important:

React uses the key prop to track elements between updates. This allows React to determine if an element should be re-rendered, which improves performance and prevents unnecessary updates.

## Exmaple 2 with styling impact:

const products = [
{ title: 'Cabbage', isFruit: false, id: 1 },
{ title: 'Garlic', isFruit: false, id: 2 },
{ title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {

    const listItems = products.map(product =>
            <li key={product.id} style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }} >
            {product.title}

        </li>

);

return (

    <ul>{listItems}</ul>
    );

}
