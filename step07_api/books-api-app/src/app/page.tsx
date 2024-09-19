import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      Home Page
      <br />
      <Link href="./static">Static page</Link>
      <br />
      <Link href="./server">Server Page</Link>
    </div>
  );
}
