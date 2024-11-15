import React from 'react';
import logo from "../assets/images/logo.jpeg";
import error from "../assets/images/error.png";

const Error = () => {
  return (
    <div className='w-full h-screen flex flex-col '>
        <img src={logo} alt="logo" className='w-[15%] m-2'/>
        <div className= 'rounded-xl w-[50%] mx-auto flex flex-col items-center'>
            <img src={error} alt='' className='shadow-xl'/>
            <p className='font-semibold text-8xl mt-2 '>Oops!</p>
            <p className='text-2xl  mt-3'>We can't seem to find the page you're looking for</p>
            <p className='mt-3 font-semibold'>Error code: 404</p>
        </div>
    </div>
  )
}

export default Error