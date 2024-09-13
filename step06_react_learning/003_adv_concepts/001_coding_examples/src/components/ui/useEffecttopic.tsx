import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Increament() {
    setCount(count + 1);
  }

  function decreament() {
    setCount(count - 1);
  }

  useEffect(() => {
    alert("Hay welcome to my App");
  }, []);

  useEffect(() => {
    alert("Count Changed");
  }, [count]);

  return (
    <>
      <button onClick={Increament}>Increament{count}</button>
      <br />
      <button onClick={decreament}>Decreament {count}</button>
    </>
  );
}

export default App;
