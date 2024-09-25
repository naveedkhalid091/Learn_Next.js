"use client";
import { useEffect, useState } from "react";

/* Books API is not working in client side, there is an issue of API ports, 
this is why we are using another API endpoint to fetch the data from client side.
  */

type Posts = {
  id: number;
  title: string;
};
export default function ClientSide() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function dataFetch() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json.slice(0, 50));
    }
    dataFetch();
  }, []);
  return (
    <div>
      <h1>Client Side API Fetching</h1>
      <ul>
        {data && data.map((item: Posts) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}
