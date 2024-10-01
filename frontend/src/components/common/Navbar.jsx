import React from 'react';
import  { Link }  from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className='h-14 flex items-center justify-between bg-white rounded shadow-xl'>
      <div>
        <img src = {logo} alt='Logo' className='w-[10%] h-[12%]'/>
      </div>
      <div className='flex items-center gap-4'>
        <Link to={""}>
           Home
        </Link>
        <Link to={""}>
           About
        </Link>
        <Link to={""}>
           Features
        </Link>
        <Link to={""}>
           Testimonials
        </Link>
        <Link to={""}>
           Contact
        </Link>
        <Link to={""}>
           Statistics
        </Link>
      </div>
      <div>
        <button className=''>
          Login / Signup
        </button>
      </div>
    </div>
  )
}

export default Navbar