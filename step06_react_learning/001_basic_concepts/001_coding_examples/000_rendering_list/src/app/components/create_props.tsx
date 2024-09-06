"use client";
import React from "react";
import { useState } from "react";

// IF you could not understand the below code and don't worry check another component for second example.
function Props(props: any) {
  // We have decleared `props` above and created a key `count` as `props.count`
  // the value or key will be passed as an attributes in anoth other component.
  const [value, setValue] = useState(props.count);

  const increament = () => {
    setValue(value + 1);
  };
  const decreament = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <br />
      <h1 className="font-bold">Props Topic starts below</h1>
      <p>
        Below are the buttons created using the <b>useState()</b> function. but
        we have added props into the main component
        <br />
        For details please read the concepts from `theoratical concept` folder
      </p>
      <button onClick={increament} className="bg-blue-400 p-2 rounded-lg m-3">
        Increament
      </button>
      {value}
      <button onClick={decreament} className="bg-red-400 p-2 rounded-lg m-3">
        decreament
      </button>
    </div>
  );
}

export default Props;
