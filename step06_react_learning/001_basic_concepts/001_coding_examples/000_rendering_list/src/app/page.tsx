import Image from "next/image";
import React from "react";
import UsesState from "./components/usestate";
import Props from "./components/create_props";
import Value from "./components/create_props";
import Second_props from "./components/second_props";

const products = [
  { title: "Apple", id: 1, name: "Fruits" },
  { title: "Tomato", id: 2, name: "Vegitables" },
  { title: "chicken", id: 3, name: "Meat" },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className="font-bold text-4xl">React Learning</h1>
          <p className="font-bold text-lg">1. Topic - Rendering list</p>
          <h2 className="font-bold text-sm p-3">Manual rendering</h2>
          <div className="p-3">
            {/* Manually Display/Render the above Array */}
            <p>{products[0].title}</p>
            <p>{products[1].title}</p>
            <p>{products[2].title}</p>
          </div>
          <h1 className="font-bold text-sm p-3">
            Automatic rendering through map function
          </h1>
          <ul className=" p-3">
            {products.map((product) => {
              return (
                <li key={product.id} className="grid gap-2">
                  <p>{product.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <h1 className="p3">
          {/* This is component*/}
          {/* We can only use props below if these are created and defined*/}
          <UsesState />
        </h1>
        <h1>
          {/* This is another component*/}
          <Props count={10} count1={20} count2={30} count3={40} />
        </h1>
        <h1>
          <Second_props
            name="Naveed Khalid"
            name1="Muhammad Khalid Malik"
            name2="Shahida Tasneem"
          />
        </h1>
      </main>
    </>
  );
}
