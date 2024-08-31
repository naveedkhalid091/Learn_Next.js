import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col items-center justify-between p-24">
      <p>Home Page </p>
      <p> Topic Name: Dymanic Routes</p>
      <Link href="/blog">Blog Page</Link>
    </main>
  );
}
