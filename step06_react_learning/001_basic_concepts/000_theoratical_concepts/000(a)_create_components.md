## Creating and nesting components:

React components are `JavaScript functions` that `return markup (in html syntax)`:

- React apps are made out of components.
- A component is a piece of the UI that has its own logic and appearance.
- A component can be as small as a button, or as large as an entire page.

The example of React component is given below: This component is returning the markup but has a similar syntax of javaScript function.

```typescript
export function MyButton() {
  return <button>I'm a button</button>;
}
```

Now that you’ve declared MyButton above, you can nest it into another component as:

```typescript
import { Mybutton } from "./write component Path";
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

Notice that `MyButton` tag starts with a capital letter. That’s how you know it’s a React component.
React component names must always start with a capital letter, while HTML tags must be lowercase.

Have a look at the result:

```typescript
export function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

Above code will show the following result:
`Welcome to my app`
`I'm a button`

## Writing markup with JSX:

The markup syntax you’ve seen above is called `JSX`. It is optional, but most React projects use JSX for its convenience.

Your component also can’t return multiple JSX tags. You have to **wrap them into a shared parent**, like a `<div>...</div>` or an empty `<>...</>` wrapper:

```typescript
export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}
```

## Adding styles

In React, you specify a CSS class with `className`. It works the same way as the HTML `class` attribute:

You write the CSS rules first in a separate CSS file, like below:

```CSS
/*CSS file*/

.avatar {
            border-radius: 50%;
        }
```

and use the CSS code inside the TSX syntax as below:

```html
<img className="avatar" />
```
