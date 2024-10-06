import React from 'react'

const Placements = () => {
  return (
    <div id="placements" className='p-10'>
      <div className='bg-white flex flex-col items-center gap-6 p-6'>
        <p className='text-4xl font-edu-sa font-bold'>Placements</p>
        <div className='flex items-center gap-10 justify-center rounded-full p-2'>
            <a href='https://www.akgec.ac.in/placements/our-recruiters/' target='_blank' className='hover:bg-customDarkBlue rounded-full hover:text-white px-2 py-1 transition-all duration-200 hover:scale-105'>Companies</a>
            <a href='https://akgec.almaconnect.com/' target='_blank' className='hover:bg-customDarkBlue rounded-full hover:text-white px-2 py-1 transition-all duration-200 hover:scale-105'>Alumni</a>
            <a href='https://www.akgec.ac.in/placements/placement-records/' target='_blank'  className='hover:bg-customDarkBlue rounded-full hover:text-white px-2 py-1 transition-all duration-200 hover:scale-105'>Placement Records</a>
        </div>
      </div>
        
    </div>
  )
}

export default Placements
