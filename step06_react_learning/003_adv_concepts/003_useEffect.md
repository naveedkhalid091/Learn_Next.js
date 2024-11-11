## useEffect Hook:

The use of `useEffect()` function is required/mendatory in a case if you need to run another set of code after something has already been fetched or rendered.

or

It is a react hook which is used to handle the `side effects` in your components.

The syntax of useEffect is:

```tsx
    useEffect(setup,dependencies?)

    /* e.g `useEffect(()=>{}, [])` */
```

Where:
setup = arrow function as above, `()=>{},` :
dependencies = are written inside `[]`:

## Use cases of useEffects hook:

**_Examples:_**

**_1. Fetching Data after a Component Loads:_** If you’re loading data from an API (like showing a list of users), useEffect will run the API call once when the component loads.

```tsx
useEffect(() => {
  fetch("https://api.example.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));
}, []); // Empty dependency array means it runs once, when the component mounts
```

**_2. Running Code When a Value Changes:_**
If you want to run some code whenever a specific variable or prop changes (like tracking the user’s selected item), you use useEffect and put that variable in the dependency array.

```tsx
useEffect(() => {
  console.log("User selected:", selectedItem);
}, [selectedItem]); // Runs whenever selectedItem changes
```

**_3. Setting Up Timers, Intervals, or Subscriptions:_**

If you want to set up an interval to a data source (like a real-time stock price feed), use useEffect to start it when the component mounts and clean it up when the component unmounts.

```tsx
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("This runs every second");
  }, 1000);

  return () => clearInterval(intervalId); // Clean up when component unmounts
}, []);
```

**_4. Updating the Page Title or Any External State:_**
If you want to update the browser tab title based on a component state, _`useEffect`_ lets you change it whenever that state changes.

```tsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Updates title every time `count` changes
```
