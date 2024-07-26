import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-100 pt-1'>
        <div className='textstructure mt-[8rem] px-20'>
            {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
                return (
                    <div className="masker">
                        <div className="w-fit flex items-end">
                            {index == 1 && (<div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-[1.2vw] relative bg-[#1072b8]"></div>)}
                            <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[0.7] font-["Test_Founders_Grotesk_X-Condensed"] font-semibold'>
                                {item}
                            </h1>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="border-t-[1px] border-zinc-900 mt-[10rem] flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p className="text-md font-light traking-tight leading-none">{item}</p>
            ))}
            <div className="start flex items-center gap-3">
                <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md captalize">Start the Project</div>
                <div className="w-10 h-10 border-[1px] border-zinc-400 flex items-center justify-center rounded-full">
                    <span className="rotate-[45deg]">
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage