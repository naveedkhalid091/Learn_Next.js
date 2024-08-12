import React from 'react'

export default function ContactUs() {
  return (
    <main className='bg-white'>

        <div className='flex flex-col gap-8 space-x-44 p-4'>
          <h1 className='text-2xl flex text-charcoal'>Contact Us</h1>
          <h1 className='text-lg flex text-charcoal' >Have Any Queries?</h1>
          <h2 className='flex text-center text-4xl text-charcoal'>We are here to help.</h2>
          <h2 className='text-lg flex text-charcoal'> Dont be a stranger!</h2>
          <h2 className='text-4xl flex text-orange-400'>You Tell Us. We will Listen</h2> 
        
          <div className='flex'>
            <form className='flex flex-col text-lg'>
              <input type="name" placeholder='Name'  className='p-4 border border-gray-400 rounded  w-96'/>
              <input type="subject" placeholder='Subject' className='p-4 border border-gray-400 rounded w-96' />
              <input type="email" placeholder='Email' className=' p-4 border border-gray-400 rounded  w-96' />
              <textarea placeholder='Message' className=' p-4 border border-gray-400 rounded w-96' />
              <br/>
    
            <button className='bg-orange-400 border-amber-50 p-4'>Send message</button>
            </form>
          </div>
        
        </div>
        
      
    </main>
    
  )
}

