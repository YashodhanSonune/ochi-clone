import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-200 pb-10'>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Project</h1>
        </div>
        <div className="cards_main">
            <div className="cards w-full flex gap-10 px-20 py-20">
                <div className="cardcontainer relative w-1/2 h-[70vh]">
                    <h1 className="absolute text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-['Test_Founders_Grotesk_X-Condensed']">
                        {"FYDE".split('').map((item, index) => <span>{item}</span>)}
                    </h1>
                    <div className="card w-full rounded-xl h-full bg-zinc-300 overflow-hidden">
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[70vh]">
                <h1 className="absolute text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-['Test_Founders_Grotesk_X-Condensed']">
                    {"VISE".split('').map((item, index) => <span>{item}</span>)}
                </h1>
                    <div className="card w-full rounded-xl h-full bg-zinc-700 overflow-hidden">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured