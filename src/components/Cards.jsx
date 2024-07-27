import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-16 gap-5">
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className='card rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className='card rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
            </div>
            <div className='card rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
            </div>
        </div>
    </div>
  )
}

export default Cards