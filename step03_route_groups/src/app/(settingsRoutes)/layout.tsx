import React, { Children } from 'react'
import Link from "next/link";

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <html>
    <body>
        <header className='bg-blue-900 p-5 flex gap-5'>
        <Link href="/">Back</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/settings1">Settings-1</Link>
        <Link href="/settings2">Settings-2</Link>
        <Link href="/settings3">Settings-3</Link>    
        </header>
        {children}  
    </body>
    </html>    
  )
}
