import React from "react";

interface Props {
  name?: string;
  name1?: string;
  name2?: string;
}

function Second_props(props: Props) {
  // Keys craeaton below:
  return (
    <>
      <div> This is second example of creating and using props</div>;
      <p>Name1: {props.name}</p>
      <p>Name1: {props.name1}</p>
      <p>Name1: {props.name2}</p>
    </>
  );
}

export default Second_props;
