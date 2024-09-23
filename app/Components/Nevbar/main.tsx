
import React from 'react'

export default function Nevbar() {
  return (
    <div className='bg-black h-12'>
       <div className='text-yellow-200 flex justify-between item center'>
        
        <h1 className='text-xl m-2 font-antialiased'>Rida</h1>
        <button>login</button>
        <ul className='flex gap-4 mr-4 mt-2 cursor-pointer'>
      <a className='hover:text-white  ' href="">home</a>
      <a className='hover:text-white ' href="">about</a>
      <a className='hover:text-white ' href="">contact</a>
     
    </ul>
    
    </div>
    </div>
  )
}
