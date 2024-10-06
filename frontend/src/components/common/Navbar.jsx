import React from 'react';
import  { Link }  from "react-router-dom";
import logo from "../../assets/images/logo.jpeg"

const Navbar = () => {
  
  const handleScroll = (event, id) => {
    event.preventDefault(); // Prevent the default anchor jump

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start' // Align the element to the top
      });
    }
  };

  return (
    <div className='flex items-center bg-[#fff] gap-36 rounded shadow-xl '>
      <div>
        <img src = {logo} alt='Logo' className='m-2 w-[30%] h-[20%]'/>
      </div>
      <div className='flex items-center gap-4'>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className='transition-all scroll-smooth'>
          Home
        </a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className='transition-all scroll-smooth'>
          About
        </a>
        <a href="#features" onClick={(e) => handleScroll(e, 'features')} className='transition-all scroll-smooth'>
          Features
        </a>
        <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className='transition-all scroll-smooth'>
          Testimonials
        </a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className='transition-all scroll-smooth'>
          Contact
        </a>
        <a href="#placements" onClick={(e) => handleScroll(e, 'placements')} className='transition-all scroll-smooth'>
          Placements
        </a>
      </div>
      <div className='flex gap-3 items-center mr-4 ml-auto'>
        <Link to={"/login"} className='px-4 py-2 rounded active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-[#fff]'>Login</Link>
        <Link to={"/signup"} className='px-4 py-2 rounded active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border hover:border-customDarkBlue'>Signup</Link>
      </div>
    </div>
  )
}

export default Navbar
