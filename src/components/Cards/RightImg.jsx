import React from 'react'
import ll from '../../assets/squares.svg'

function RightImg() {
  return (
    <div>
        <div className="flex justify-evenly max max-w-screen-md m-auto gap-32">
            {/* left */}
            <div className="space-y-5 ">
            <h1 className="text-4xl font-bold"></h1>
                <p className="text-2xl font-semibold text-center"></p>
                <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span class="relative text-black group-hover:text-white">Button Text</span>
</a>
            </div>

            {/* right */}
            <div className="">
             <img src="" alt="" className="" />
            </div>
        </div>
    </div>
  )
}

export default RightImg