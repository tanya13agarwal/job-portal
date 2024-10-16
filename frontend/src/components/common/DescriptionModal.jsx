import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const DescriptionModal = (modalData) => {
    const ref = useRef(null)
    useOnClickOutside(ref, modalData.btn2Handler);
  return (
        <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
            <div ref={ref} className='w-11/12 max-w-[550px] rounded-lg shadow-lg border border-richblack-50 bg-white p-6'>
                <p className='text-2xl font-semibold mb-2'>
                    {modalData.text1}
                </p>
                <hr></hr>
                <p className='mt-3 mb-5 leading-6'>
                    {modalData.text2}
                </p>
                <div className='flex items-center gap-x-4'>
                    <a
                        href={modalData?.btn1Handler}
                        target='_blank'
                        className='px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue ' 
                        // onclick={modalData?.btn1Handler}
                    >
                        {modalData?.btn1Text}
                    </a>
                    <button 
                        onClick={modalData?.btn2Handler}
                        className='active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-white px-4 py-2 rounded '
                    >
                        {modalData?.btn2Text}
                    </button>
                </div>
            </div>
            
        </div>
  )
}

export default DescriptionModal