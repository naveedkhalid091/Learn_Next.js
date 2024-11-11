# State as a Snapshot:

Imagine React takes a picture (snapshot) of the component's state every time it `re-renders`.This "picture" is what React uses during that specific render. Even if you change the state right after, React won't look at the new state until the next "picture/render" is taken, meaning React only works with the `state at that moment` in time.

React doesn't update the state immediately when you change it. It waits until it's ready to re-render the component. So, if you try to use the updated state immediately after changing it, React will still be using the old state (the snapshot it took before the change).

#### Coding Example:

See what happens when you click the “+3” button in below code:

```tsx
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
```

#### Behavior Explanation:

When you click the button, number increments by `1` per click, instead of `3`.

React does not `re-render` the component untill event handler (onClick) completes all the functions in it after that react process `all the state updates together`. Since all the `setNumber(number + 1) calls` are made within the same event handler, React uses the current state (0) for all three updates and all functions are showing `setNumber(number + 1) =1` hence react will re-render `1` on the screen.

#### Explaination of `onClick` Event

As you know the javascript is asynchronous language so `onClick` reads the code line by line:

In the provided code:

1. setNumber(number + 1) schedule an update to set number = 1.
2. Before React can re-render, the second setNumber(number + 1) is executed, but it still uses the initial `number = 0`, scheduling another update to set `number = 1` again.
3. The third setNumber(number + 1) does the same, scheduling the value of `number = 1`.

Thus, even though you are calling setNumber three times, all of them use the same initial snapshot of `number = 0`. Therefore, when React re-renders, the final value shown is `1` because all three calls incremented number based on its `initial value (0)`.

# State value over the time:

Read the below code carfully:

```tsx
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          alert(number);
        }}
      >
        +5
      </button>
    </>
  );
}
```

Now Guess what the `alert` message will show? either 5 or 0?

As we discussed above, the `onclick` function will execute first before rendering hence we have the alert message inside the `onClick` function that's why alter will take snapshopt of state's initial value which is zero. so `alert` will display `zero` value and then rendering of `5` number will be done.

Now Read the Below code carefully for further explaination of snapshot concept:

```tsx
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +5
      </button>
    </>
  );
}
```

Now Guess what the `alert` message will show? either 5 or 0?
The answer is: It will still show `0` in an alert message despite of Rendering `5` first.

The Reason is mentioned below:

As we discussed above, the `onclick` function will execute first before rendering hence we have instructed the `onClick` function to display the alert message before rendering but with a delay of 3 seconds. Hence React will take a snapshot of its initial value before rendering but will display later on after the 3 seconds so, here the Rendering will be done first with printing of state value later on (but snapshot was taken before rendering).
