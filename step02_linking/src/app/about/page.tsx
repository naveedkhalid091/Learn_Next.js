import Link from "next/link";


export default function About(){
    return (
        <main>
            <div>
                About Page
                <br/>
                <Link href="/about/profile"> Go to Profile Page</Link>
                <br/>
                <Link href="/"> Back to Home Page</Link>
                
            </div>
            
        </main>
    )
}