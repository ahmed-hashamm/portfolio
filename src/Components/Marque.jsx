import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
  return (
    <div data-scroll data-scroll-speed=".06" className="w-full py-10 carter-one-regular bg-[#23a7dfa5] text-zinc-100 -mt-44 md:-mt-0 ">
        <div className='text border-t-2 border-b-2 border-zinc-400 flex   overflow-hidden  whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:8}} className='text-[19vw] leading-none tracking-tighter font-["Neue Montreal"] font-bold uppercase pb-2  pr-8'> Scroll Down</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:8}} className='text-[19vw] leading-none tracking-tighter font-["Neue Montreal "] font-bold uppercase pb-2 pr-8'> Scroll Down</motion.h1>
        </div>
    </div>
  )
}

export default Marque