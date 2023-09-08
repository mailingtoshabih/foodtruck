import React from 'react'

export const Articles = ({ img, heading, article }) => {


    return (

        <div className='w-full my-10 lg:w-1/3 border-2 rounded-3xl p-4 lg:p-9 space-y-5 md:m-2 text-center md:text-start font-poppins'>

            <img className='w-full' src={img} alt="" />

            <p className='text-xl font-bold text-[#0E2368]'>
                {heading}
            </p>

            <p className='text-sm md:text-md'>
                {article}
            </p>

            <button className='border-4 text-md rounded-full px-4 py-2 font-semibold'>
                Read More
            </button>

        </div>
    )
}
