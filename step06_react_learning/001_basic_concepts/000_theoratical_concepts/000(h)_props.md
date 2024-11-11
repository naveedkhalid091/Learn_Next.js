## Understanding Props in React:

The analogy of concepts between the `props` and `attributes` is similar.

- In HTML, **attributes are predefined** and can't be customized. However, in React, props are also predefined (like `children`, `key`, `ref` etc.) but props can also be created, we use the props in another components after creating them, particularly from the parent to child
  elements.

* You can only use these reserved props according to specific rules defined by React. For Example: `key` prop can be used efficiently when re-rendering of lists. and `children` prop is used when you need to render the `page.tsx` content into the layout etc.

* The child component receiving the props cannot modify them directly.

#### Comparison between attributes and props:

- **First:** In **attributes** you can only pass string or Boolean data types but in **props** you can pass any data types including arrays, objects and functions.
- **Second:** Attributes are pre defined but props are fully customizable.
- **Third:** Attributes only support the **static data** but props also support the **dynamic data as well the static data**.

### Syntax: Creating and Using Props:

Here's how you can create and use props in a React component:

```tsx
// Greeting.tsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Parent.tsx
<Greeting name="Naveed" />;
```

**_Different ways of calling props:_**

- using the props inside the element is similar to the attribute as:

```tsx
<h1 name="Naveed" key=" " ref=" ">
```

- But the children props would be used as:

```tsx
<div>{ children }<div>;
```

The reasons of why **_children props_** has different method of calling, are given below:

- The children props is considered a special prop in react because it also renders the nested content inside the `page.tsx`.

The second reason of why {children} props uses the different way is given below:

If you will `console.log` the `props` then you will know that the props prints in object form. so if the props are objects then you can de-structure the pre-built props as well and destructuring is done as `{children}=props`
