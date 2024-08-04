'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Name(){
   const router=useRouter();
   return <main>
        <div>
            This is Name Page
        </div>
        <div>
            <button onClick={()=>{router.push(`/`)}}> Go to HomePage</button>
        </div>
    </main>
}