import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothes",
  description: "by Tasneem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
   <html lang="en">
   <body className="font-edu-vic">
    
    <header className={styles.customClass}>
       <div className="space-x-8">
       <Link href="/">HOME</Link>
       <Link href="/clothing/unstitched-cloths">UNSTITCHED CLOTHING</Link>
       <Link href="/clothing/stitched-cloths">STITCHED CLOTHING</Link>
      </div>   
    </header>
             <main>
              {children}
            </main>       
      <footer className={styles.customClass}>
      <div className="flex flex-col p-4">
        <h1 className="font-bold text-lg mr-2 flex">Links</h1>
          <Link href="/">HOME</Link>
          <Link href="/account">My Account</Link>
      </div>
        <div>
          <form action="naveedkhalid091@yahoo.com">
            <p className="flex justify-end text-orange-400 p-4">
              Subscribe: <input type="email" className="flex  text-orange-400 border-amber-50"/>
            </p> 
          </form>
        </div>
      </footer>
      </body>
      </html>
  );
}

