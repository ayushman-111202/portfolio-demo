import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <h1 className='text-[18vw] leading-none font-["Founders_Grotesk Condensed"] uppercase font-bold pt-10 mb-10'>We are Ochi</h1>
        <h1 className='text-[18vw] leading-none font-["Founders_Grotesk Condensed"] uppercase font-bold pt-10 mb-10'>We are Ochi</h1>
      </div>
    </div>
  )
}

export default Marquee
