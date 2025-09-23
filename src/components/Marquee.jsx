import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl py-10 bg-[#004D43]">
    <div className='text border-t-2 border-b-2 text-zinc-300 flex overflow-hidden whitespace-nowrap '>
        <motion.h1  className="text-[15vw] leading-none  font-['Founders Grotesk X-Condensed'] uppercase pt-4 mb-5 font-bold">we are ochi</motion.h1>
        <motion.h1  className="text-[15vw] leading-none  font-['Founders Grotesk X-Condensed'] uppercase pt-4 mb-5  font-bold">we are ochi</motion.h1>    
    </div>
    </div>
  )
}

export default Marquee