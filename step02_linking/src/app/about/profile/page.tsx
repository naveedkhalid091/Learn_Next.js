import Link from "next/link"

export default function Profile(){

    return (
       <main>
        <div>
         Profile Page
         <br/>
         <Link href="/about"> Go to About Page</Link>
         <br/>
        
        </div>
    </main> 
    )
}