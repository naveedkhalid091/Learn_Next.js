import Image from "next/image";
import Link from "next/link"; 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>Hello from Home page</div>
    <Link href="/about"> Go to About Page</Link>
    <br/>
    <Link href="/about/profile"> Go to Profile Nested Page</Link>
  
    </main>
  );
}
