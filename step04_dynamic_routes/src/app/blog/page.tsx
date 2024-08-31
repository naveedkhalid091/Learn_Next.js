import React from "react";
import Link from "next/link";
import { blogs } from "@/constants";

// Links are created below without having seperate page.tsx
// of each blog file.

export default function Blog() {
  return (
    <main>
      <div className="flex gap-5 py-10">Blog Page</div>
      <div className="flex gap-5 py-10">
        {blogs.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            {item.title}
          </Link>
        ))}

        {/* <Link href="/blog/blog1"> Blog1</Link>
  <Link href="/blog/blog2"> Blog2</Link>
  <Link href="/blog/blog3"> Blog3</Link>
  <Link href="/blog/blog4"> Blog4</Link>
  <Link href="/blog/blog5"> Blog5</Link>
  */}
      </div>
    </main>
  );
}
