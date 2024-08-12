"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  return (

    <main className="bg-white">
    <div className="justify-start m-28 bg-white text-charcoal">
      <h1 className="text-2xl mr-3">Welcome to Mehria Boutique</h1>
      <h1 className="text-4xl text-orange-300">PREMIUM FASHION, LOWEST PRICE.</h1>
      <br/>
      <button type="button" onClick={()=>router.push(`/clothing`)} className="bg-orange-400 mr-2 text-lg p-3">SHOP NOW</button>
    </div>
    </main>
  );
}
