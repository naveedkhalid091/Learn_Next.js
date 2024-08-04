"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function About(){
    const router=useRouter()
    return (
        <main>
            <div>
                About Page
                <br/>
                <button type="button" onClick={()=>router.push(`/about/profile`)}> Go to Profile Page</button>
                <br/>
                <Link href="/"> Back to Home Page</Link>
                
            </div>
            
        </main>
    )
}