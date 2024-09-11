import React from "react";
import { Button } from "@/components/ui/button";
function Mehria() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>Mehria</div>
      <div>
        <h1> Below Button is simple Button made by myself </h1>
        <button className=" px-1 my-4 bg-blue-500 rounded hover:text-lg hover:bg-blue-300">
          {" "}
          Test Button
        </button>
        <h1> Below Button is Shadcn UI button </h1>
        <Button> Shadcn UI Button</Button>
      </div>
    </main>
  );
}

export default Mehria;
