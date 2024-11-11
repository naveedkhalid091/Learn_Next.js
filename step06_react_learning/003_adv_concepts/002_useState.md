## UseState():

You can think of **state** as any information in your UI that changes over time, usually triggered by user interaction.

**Use Cases:**

You can use **useState()** to:
**_firstly:_** store the number of user's clicks and **_secondly_** to increment the number of times a user has clicked the button.

The **_useState()_** returns an array, you can access and use the array values though array destructuring as:

**const [value,setValue] = useState();**

The **first item** in the array is the state value, which is **used to store the values**, while the **_second item_** in the array **is a function to update the value**.

You can name anything to the first and the second items but it's recommended to name these items something descriptive:

Code Example:

```tsx
    import {useState} from "react";

    export function counter(){
    const [Likes,setLikes]=useState(0);
    return(
    <div>
     <p>You Liked {Likes} Times</p>
       <button onClick={()=>setLikes(Likes+1)}>
          Likes
       </button>
    <div>
    )
}
```

### Lets understand above code in steps

#### 1. Updating the Screen:

When you're building a React component, sometimes you want from that part component to `remember` some information and show it on the screen.

To acheive this, you need to add `state` into your component.

```tsx
import {useState} from `react`
```

secondly, declare the state variable.

```tsx
function MyButton() {
  const [Likes, setLikes] = useState(0);
}
```

The first time the button is displayed, count will be `0` because you passed 0 to `useState()`. When you want to change state, call `setCount()` and pass the new value to it. Clicking this button will increment the counter:

```tsx
function MyButton() {
  const [Likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(Likes + 1);
  }

  return <button onClick={handleLikes}>Liked {Likes} times</button>;
}
```

React will call your component function again. This time, count will be 1. Then it will be 2. And so on.

## Rendering the same built components multiple times:

If you render the same component multiple times, each will get its own state. Click each button separately:

```tsx
import { useState } from "react";

export default function MyApp() {
  return (
    <div>
      <h1>Likes that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
```

#### Likes that update separately/independently

`Liked 0 times`
`Liked 0 times`

Notice how each button “remember” its own count state and doesn’t affect other buttons.

#### Counters that update together:

Sometimes, you want the all available buttons to update together.

here is the example to achieve the result:

```tsx
import { useState } from "react";

export default function MyApp() {
  const [Likes, setLikes] = useState(0);

  function handleLikes() {
    setCount(Likes + 1);
  }

  return (
    <div>
      <h1>Likes that update together</h1>
      <MyButton count={Likes} onClick={handleLikes} />
      <MyButton count={Likes} onClick={handleLikes} />
    </div>
  );
}
```
