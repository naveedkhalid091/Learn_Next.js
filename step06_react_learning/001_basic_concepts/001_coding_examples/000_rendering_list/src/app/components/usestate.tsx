"use client";
import React from "react";
import { useState } from "react";

function UseState() {
  const [value, setValue] = useState(0);

  const increament = () => {
    setValue(value + 1;
  };
  const decreament = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <br />
      <h1 className="font-bold">Use State Topic starts below</h1>
      <p>
        Below are the buttons created using the <b>useState()</b> function.
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

export default UseState;
