import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      Home Page
      <br />
      <br />
      <Link className="text-blue-500" href="./server-static">
        Server side Static rendering{" "}
      </Link>
      <br />
      <br />
      <Link className="text-blue-500" href="./server-dynamic">
        Server side dynamic rendering
      </Link>
      <br />
      <br />
      <Link className="text-blue-500" href="./client">
        Client rendering using Hooks
      </Link>
      <br />
      <br />
      <Link className="text-blue-500" href="./client2">
        Client rendering using SWR
      </Link>
      <br />
      <br />
      <Link className="text-blue-500" href="./parallel-display">
        Parallel rendering of two or more APIs
      </Link>
      <br />
      <br />
      <Link className="text-blue-500" href="./sequential-display">
        Sequential rendering of two or more APIs
      </Link>
    </div>
  );
}
