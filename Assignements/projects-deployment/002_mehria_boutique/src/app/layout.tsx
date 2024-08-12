import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehira Boutique",
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
    <header className= "flex justify-between items-center p-6 bg-cream text-charcoal">
       <div className="space-x-8">
       <Link href="/">HOME</Link>
       <Link href="/clothing">CLOTHING</Link>
       <Link href="/accessories">ACCESSORIES</Link>
       <Link href="/jewellery">JEWELLERY</Link>
       <Link href="/bridal">BRIDAL</Link> 
      </div>   
      <div className="space-x-12 p-5 text-charcoal">
          <Link href="/about">ABOUT</Link>
          <Link href="/contact_us">CONTACT US</Link>
      </div>
      </header>
             <main>
              {children}
            </main>       
      <footer className="font-edu-vic bg-slate-200 p-10">
      <div className="flex flex-col p-4">
        <h1 className="font-bold text-lg mr-2 flex text-orange-300">Links</h1>
          <Link href="/">HOME</Link>
          <Link href="/about">About Us</Link>
          <Link href="/account">My Account</Link>
          <Link href="/contact_us"> Contact Us</Link>
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