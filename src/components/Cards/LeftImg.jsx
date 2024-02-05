import React from 'react'
import ll from '../../assets/squares.svg'

function LeftImg({img,title,content}) {
  return (
    <div className=''>
        <div className="flex justify-center items-center max max-w-screen-lg m-auto gap-32 sm:flex-row  flex-col-reverse dark:text-slate-100">
            {/* left */}
            <div className="">
             <img src={img} alt="" className="h-[90%]" />
            </div>

            {/* right */}
            <div className="space-y-9  max-w-sm ">
                <h1 className="text-4xl font-bold text-center dark:text-orange-300">{title}</h1>
                <p className="text-2xl font-semibold text-center">{content}</p>
                <a href="#_" class="mx-auto  max-w-[126px]  realtive flex px-4 py-2 font-medium group bg-black dark:bg-orange-300 rounded-lg">
                  <span class="relative  text-white  dark:text-slate-100">Enquire now</span>
                </a>
            </div>


        </div>
    </div>
  )
}

export default LeftImg