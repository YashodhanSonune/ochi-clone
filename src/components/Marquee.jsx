import React from 'react'
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43] text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-100 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 8 }} className='text-[22vw] uppercase leading-none font-["Test_Founders_Grotesk_X-Condensed"] pt-[4vw] mb-[6vw] font-semibold pr-20'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 8 }} className='text-[22vw] uppercase leading-none font-["Test_Founders_Grotesk_X-Condensed"] pt-[4vw] mb-[6vw] font-semibold pr-20'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 8 }} className='text-[22vw] uppercase leading-none font-["Test_Founders_Grotesk_X-Condensed"] pt-[4vw] mb-[6vw] font-semibold pr-20'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee