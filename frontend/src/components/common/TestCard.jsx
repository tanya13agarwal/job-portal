import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const TestCard = ({heading , desc , link}) => {
  return (
    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <a href={link} class="px-4 flex items-center gap-2 w-32 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue">
            <p className='text-nowrap'>Take Test</p>
            <IoMdArrowRoundBack className='rotate-180'/>
        </a>
    </div>
  )
}

export default TestCard


