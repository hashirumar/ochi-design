import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl
    text-black'>
   <h1 className="Neue Montreal Regular text-6xl leading-[4vw] ">
    We craft category-defining presentations, brand identities, and digital 
    experiences that drive funding, sales, and market leadership.
   </h1>    
   
   
   <div className="w-full flex gap-10 border-t-[1px]  mt-10 pt-10 border-[#8b9f45]">
    <div className='w-1/2'>
     <h1 className='text-5xl'>How we can help:</h1>
     <button className='flex  items-center gap-10 px-10 py-4 bg-zinc-900 rounded-full text-white text-xl mt-4'>Read More
     <div className='w-2  h-2  rounded-full bg-white'></div>
     </button>
    </div>
    
    <div className='w-1/2 h-[70vh] bg-[#48512a] rounded-3xl'></div>
    </div>
  </div>
  )
}

export default About