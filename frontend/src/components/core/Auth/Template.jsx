import React, { useState } from 'react'

import frameImg from "../../../assets/images/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
// import { useSelector } from 'react-redux';

function Template({title , description1 , description2 , image , className , classSet , formType}) {

//   const {loading} = useSelector((state) => state.auth);
    const [loading , setLoading] = useState(false);
  
  return (
    <div className='flex min-h-[calc(100vh-3.5rem)] place-items-center'>
        {
            loading ? (
            <div className='spinner'></div>
            ) : (
            <div className='mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12  md:flex-row md:gap-y-0 md:gap-x-12'>
              <div className='mx-auto w-11/12 max-w-[450px] md:mx-0'>
                <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] '>
                  {title}
                </h1>
                <p className='mt-4 text-[1.125rem] leading-[1.625rem]'>
                  <span className='text-richblack-500'>{description1}</span>{" "}
                  <span className='font-edu-sa font-bold italic '>
                    {description2}
                  </span>
                </p>
                {formType === "signup" ? <SignupForm/> : <LoginForm/>}
              </div>
              <div className={`relative mx-auto w-11/12 max-w-[450px] md:mx-0 `}>
                <img
                src={frameImg}
                alt='Pattern'
                width={558}
                height={504}
                loading='lazy'/>

                <img
                src={image}
                alt='Pattern'
                width={558}
                // height={510}
                loading='lazy'
                className={`${className ?? ""} absolute -top-4 right-4 z-10`}/>
              </div>
            </div>
            )
        }
    </div>
  )
}

export default Template