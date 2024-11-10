import React from 'react'

function ConfirmationModal({modalData}) {
  return (
        <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
            <div className='w-11/12 max-w-[350px] rounded-lg shadow-lg bg-white p-6'>
                <p className='text-2xl font-semibold '>
                    {modalData.text1}
                </p>
                <p className='mt-3 mb-5 leading-6 text-richblack-200'>
                    {modalData.text2}
                </p>
                <div className='flex items-center gap-x-4'>
                    <button
                        onClick={modalData?.btn1Handler}
                        // text=
                        className='px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue '
                    >
                        {modalData?.btn1Text}
                    </button>
                    <button 
                        onClick={modalData?.btn2Handler}
                        className='px-4 py-2 rounded active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-[#fff]'
                    >
                        {modalData?.btn2Text}
                    </button>
                </div>
            </div>
            
        </div>
  )
}

export default ConfirmationModal
