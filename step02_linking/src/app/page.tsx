"use client"

import Image from "next/image";
import Link from "next/link"; 
import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>Hello from Home page</div>
    <button onClick={()=>router.push(`/about`)}> Go to About Page</button>
    <Link href="/about"> Go to About Page</Link>
    <br/>
    <Link href="/about/profile"> Go to Profile Nested Page</Link>
    </main>
  );
}
