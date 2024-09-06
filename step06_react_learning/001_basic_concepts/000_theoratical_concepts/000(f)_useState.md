## Updating the Screen:

When you're building a React component, sometimes you want from that part component to `remember` some information and show it on the screen.

##### For Example:

You might want to keep track of how many times a button has been clicked.

To acheive this, you need to add `state` into your component.

## How to Add State:

#### 1. Import state:

First you need to import the `state` from react as follows:

      import {useState} from `react`

#### 2. Declare a state variable:

Inside your component you can declare the `state` variable. A `state` variable wil keep the track of for you.

    function MyButton() {
            const [count, setCount] = useState(0);
    }

Where:
`count` is the current state (in this case, how many times the button has been clicked).

`setCount` is the function you use to update `count`.

You can give them any names, but the convention is to write `[something, setSomething]`.

The first time the button is displayed, count will be `0` because you passed 0 to `useState()`. When you want to change state, call `setCount()` and pass the new value to it. Clicking this button will increment the counter:

    function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
        Clicked {count} times
        </button>
    );
    }

React will call your component function again. This time, count will be 1. Then it will be 2. And so on.

## Multiple Components:

If you render the same component multiple times, each will get its own state. Click each button separately:

    import { useState } from 'react';

    export default function MyApp() {
    return (

    <div>
    <h1>Counters that update separately</h1>
    <MyButton />
    <MyButton />
    </div>
    );
    }

function MyButton() {
const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
        Clicked {count} times
        </button>
    );
    }

#### Counters that update separately/independently

`Clicked 0 times`
`Clicked 0 times`

Notice how each button “remembers” its own count state and doesn’t affect other buttons.

#### Counters that update together:

Sometimes you want buttons to share the same number (or "count") that goes up every time you click either button,

In other words you want the all available buttons to update together.

The Coding example is given below:

    import { useState } from 'react';

    export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
        </div>
    );
    }

    function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
        Clicked {count} times
        </button>
    );
    }
