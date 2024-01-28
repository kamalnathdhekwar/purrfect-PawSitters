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
            <div className="space-y-5 flex flex-col jus justify-center m-auto">
                <h1 className="text-4xl font-bold">Day Care</h1>
                <p className="text-2xl font-semibold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio dicta maiores aperiam ut, impedit.</p>
                <button className="bg-black text-white p-3 px-5 rounded-xl font-semibold">Enquire now</button>
            </div>


        </div>
    </div>
  )
}

export default LeftImg