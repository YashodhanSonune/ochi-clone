import { motion } from 'framer-motion'
import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[2vw] leading-[2.5vw] tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta tempore rerum, repellendus esse beatae. Sapiente iure doloribus accusamus molestiae quae ab, nesciunt enim odit harum neque a dolores. Voluptatum?
        </h1>
        <div className="w-full flex border-t-[1px] mt-20 pt-10 border-[#a1b562]">
            <div className="w-1/2">
                <h1 className="text-7xl">Our Approach:</h1>
                <button className="px-10 py-6 flex gap-10 items-center bg-zinc-900 mt-10 rounded-full text-white">Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]">

            </div>
        </div>
    </div>
  )
}

export default About