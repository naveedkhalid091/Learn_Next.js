import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Linking and Navigation Assignment
          <p>This is Home Page</p>
          <Link href="/name">Go to NamePage</Link>
        </div>
    </main>
  );
}
