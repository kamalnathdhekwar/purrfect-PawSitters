import React from 'react'
import ll from '../../assets/squares.svg'

function RightImg({img,title,content}) {
  return (
    <div>
        <div className="flex justify-center items-center  max max-w-screen-lg m-auto gap-32 sm:flex-row  flex-col">
            {/* left */}
            <div className="space-y-9  max-w-sm ">
            <h1 className="text-4xl font-bold text-center">{title}</h1>
                <p className="text-2xl font-semibold text-center">{content}</p>
                <a href="#_" class="mx-auto  max-w-[126px]  realtive flex px-4 py-2 font-medium group bg-black rounded-lg">
                  <span class="relative  text-white  ">Enquire now</span>
                </a>
            </div>

            {/* right */}
            <div className="">
             <img src={img} alt="" className="" />
            </div>
        </div>
    </div>
  )
}

export default RightImg