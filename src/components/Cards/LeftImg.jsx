import React from 'react'
import ll from '../../assets/squares.svg'
function LeftImg() {
  return (
    <div className=''>
        <div className="flex justify-evenly max max-w-screen-md m-auto gap-32">
            {/* left */}
            <div className="">
             <img src={ll} alt="" className="" />
            </div>

            {/* right */}
            <div className="space-y-5 ">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-2xl font-semibold text-center">{contents}</p>
                <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span class="relative text-black group-hover:text-white">Button Text</span>
</a>
            </div>


        </div>
    </div>
  )
}

export default LeftImg