import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
     <div className="textstructure mt-48 px-20">
    {["We Create","Eye Opening", "Presentations"].map((item,index)=>{
      return(
      
        <div className='masker'>
          <div className='w-fit flex items-end overflow-hidden'>
          {index==1 &&(<div className="w-[9vw] h-[5vw] relative  rounded-md  bg-blue-500"></div>)}
            <h1 className="uppercase leading-[.85] tracking-tighter font-bold text-[7vw]  font-['Founders Grotesk X-Condensed']">{item}</h1>
          </div>
        </div>
      
       )
       })};
      </div>
      
      
      

      <div className="border-t-[1px] border-zinc-700 mt-20 flex items-center justify-between py-5 px-20 ">
        {["Presentation and storytelling agency","For innovation teams and global brands"]
        .map((item,index)=><p className="text-md font-light">{item}</p>)}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase">start the project</div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
           
            <span className='rotate-[45deg]'><FaArrowUpLong/></span>
          </div>
          </div>
        </div>
      
    </div>
  )
}

export default LandingPage