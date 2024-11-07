## What is an Event Handler in React?

In React, an `event handler is a function` that execute `when a certain event happens`.
For example, when a user clicks a `button`, we might want something to happen, like showing a message. To do this, we create an event handler function and attach it to the button.

Key Points to Understand:

#### 1. Declaring the Event Handler:

We create a function inside our component that will handle the event. This function contains the code that we want to run when the event happens (e.g., when the button is clicked).

#### 2. Passing the Event Handler:

In typeScript or any other language, we normally call the function as `handleClick()` but in react we only mention the name of a function without parentheses `()`.

We pass the function's name, like `handleClick`, without parentheses. React will automatically call this function when the event occurs.

```typescript
function MyButton() {
  // This is the event handler function
  function handleClick() {
    alert("You clicked me!");
  }

  // The event handler is attached to the button's onClick event
  return <button onClick={handleClick}>Click me</button>;
}
```

## How It Works:

#### i) Event Handler Function (i.e. handleClick):

This function just shows an alert message when it runs. We define it inside the MyButton component.

#### ii) Attaching the Handler (ie. onClick={handleClick}):

When the user clicks the button, React notices that we've set up an event handler (handleClick) for the onClick event. React will automatically call the handleClick function for users, when the button is clicked.

## Use Case of event handler:

Imagine we have a form, when a user clicks a button to submit the data. You would create a handleSubmit function as an event handler and attach it to the button's `onClick` event.
