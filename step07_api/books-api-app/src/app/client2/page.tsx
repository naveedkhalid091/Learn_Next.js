"use client";
import useSWR from "swr";

/* Books API is not working in client side, there is an issue of API ports, 
this is why we are using another API endpoint to fetch the data from client side.
  */

type Posts = {
  id: number;
  title: string;
};

/* following fetcher function and mentioning the url 
inside the container is a swr method/convention*/

const url = "https://jsonplaceholder.typicode.com/posts";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ClientPage() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading Data......</div>;
  return (
    <div>
      <h1>Client Side API Fetching -SWR method</h1>
      <ul>
        {data.map((item: Posts) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
