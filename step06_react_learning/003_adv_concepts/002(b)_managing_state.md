## Managing State

Managing State explains how to structure state, share it across components, and make your React application more maintainable as it grows.

#### 1. Reacting to Input with State

- In React, you don’t manually control the UI (e.g., enable/disable buttons, show/hide messages). Instead, you describe how the UI should look depending on the state.

* The state changes based on user input (e.g., typing in a form), and React automatically updates the UI based on that state.

* Example: A quiz form can enable or disable the submit button based on the current state (e.g., typing, submitting, success).

#### 2. defining the structure of state:

- It’s important to structure your state properly. Avoid redundant or duplicated state, which can lead to bugs because you might forget to update all the related state.

* **For Example:**, if you have firstName, lastName as state variables, you will not need fullName as a separate state. You can calculate fullName on the fly by combining firstName and lastName instead.

#### 3. Sharing State Between Components (Lifting State Up):

- Sometimes, two components need to share the same state. In this case, you move the state to the closest common parent and pass it down to the child components via props.

- Example: In an **accordion** where only one panel should be open at a time, instead of storing the active state inside each panel, the parent component holds the active state and passes it to the panels.

In the below coding example: we have decided when to disable and when to enable the button and text area using the state.

```tsx
import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
```

Above is the code for asking the `City Quiz`, we have intructed in the code to disable and enable the 'send' button in perticular situation and to enable and disable the taxt erea in perticular situations. This is only happen due to using and Managing state.
