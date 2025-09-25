import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
       <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20   '>
        <h1 className='tracking-tight font-["Neue-Montreal-Regular"] text-8xl'>Featured Projects</h1>
        
        </div>

        <div className='px-20'>
          <div className='cards gap-5 mt-10 flex'>
          <div className=' relative cardcontainer w-1/2   h-[80vh] '>
             <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-8xl leading-one tracking-tight'>FYDDE</h1>
            <div className='card w-full h-full rounded-xl bg-green-500  overflow-hidden'>
              <img className=' w-full h-full' src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png'/>
            </div>
          </div>
           <div className=' relative cardcontainer w-1/2   h-[80vh]  '>
           <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-8xl leading-one tracking-tight'>VISE</h1>
            <div className='card w-full h-full rounded-xl bg-green-500 overflow-hidden'>
              <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png'/>
            </div>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Featured