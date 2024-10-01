import React from 'react';
import  { Link }  from "react-router-dom";
import logo from "../../assets/images/logo.jpeg"

const Navbar = () => {

  // const handleLogin = () => {

  // }

  // const handleSignup = () => {

  // }

  return (
    <div className='flex items-center bg-[#fff] justify-between rounded shadow-xl'>
      <div>
        <img src = {logo} alt='Logo' className='m-2 w-[30%] h-[20%]'/>
      </div>
      <div className='flex items-center gap-4'>
        <Link to={"/home"}>
           Home
        </Link>
        <Link to={"/about"}>
           About
        </Link>
        <Link to={"/features"}>
           Features
        </Link>
        <Link to={"/testimonials"}>
           Testimonials
        </Link>
        <Link to={"/contact"}>
           Contact
        </Link>
        <Link to={"/statistics"}>
           Statistics
        </Link>
      </div>
      <div className='flex gap-3 items-center mr-4'>
        <Link to={"/login"} className='px-4 py-2 rounded active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-[#fff]'>Login</Link>
        <Link to={"/signup"} className='px-4 py-2 rounded active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200'>Signup</Link>
      </div>
    </div>
  )
}

export default Navbar
