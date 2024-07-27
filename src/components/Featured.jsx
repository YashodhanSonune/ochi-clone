import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/all'

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index1, index2) => {
    cards[index1].start({y: "0"})
    cards[index2].start({y: "100%"})
  }
  
  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"})
  }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-200 pb-10'>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Project</h1>
        </div>
        <div className="cards_main">
            <div className="cards w-full flex gap-10 px-20 py-20">
                <motion.div 
                onHoverStart={() => handleHover(0, 1)} 
                onHoverEnd={() => handleHoverEnd(0)}
                className="cardcontainer relative w-1/2 h-[70vh]">
                    <h1 className="absolute flex overflow-hidden text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-['Test_Founders_Grotesk_X-Condensed']">
                        {"FYDE".split('').map((item, index) => <motion.span 
                        initial={{y: "100%"}}
                        animate={cards[0]}
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                        className="inline-block"
                        >{item}
                        </motion.span>)}
                    </h1>
                    <div className="card w-full rounded-xl h-full bg-zinc-300 overflow-hidden">
                    </div>
                </motion.div>
                <motion.div 
                onHoverStart={() => handleHover(1, 0)} 
                onHoverEnd={() => handleHoverEnd(1)}
                className="cardcontainer relative w-1/2 h-[70vh]">
                    <h1 className="absolute flex overflow-hidden text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-['Test_Founders_Grotesk_X-Condensed']">
                        {"VISE".split('').map((item, index) => <motion.span
                        initial={{y: "100%"}}
                        animate={cards[1]}
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                        className="inline-block"
                        >{item}
                        </motion.span>)}
                    </h1>
                    <div className="card w-full rounded-xl h-full bg-zinc-700 overflow-hidden">
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured