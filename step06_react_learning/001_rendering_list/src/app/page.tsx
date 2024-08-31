import Image from "next/image";
import React from "react";

const products = [
  { title: "Apple", id: 1, name: "Fruits" },
  { title: "Tomato", id: 2, name: "Vegitables" },
  { title: "chicken", id: 3, name: "Meat" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>React Learning- Rendering list</h1>
        <h2>Manual rendering</h2>
        <div>
          {/* Manually Display/Render the above Array */}
          <p>{products[0].title}</p>
          <p>{products[1].title}</p>
          <p>{products[2].title}</p>
        </div>
        <h1>Automatic rendering through map function</h1>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id} className="grid gap-2">
                <p>{product.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
