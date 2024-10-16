import React from 'react';
import  { Link }  from "react-router-dom";
import logo from "../../assets/images/logo.jpeg"



const CampusNav = ({para1 , link1 , para2 , link2 , para3 , link3 , para4 , link4 , para5 , link5 , para6 , link6 , button1 , btnLink1 , button2 , btnLink2 }) => {
  return (
    <div className='text-nowrap flex items-center bg-[#fff] gap-36 rounded shadow-xl '>
      <div>
        <img src = {logo} alt='Logo' className='m-2 w-[30%] h-[20%]'/>
      </div>
      <div className='flex items-center gap-4'>
        <a href={link1} className='transition-all duration-200 scroll-smooth hover:bg-customDarkBlue p-2 rounded hover:text-white'>
          {para1}
        </a>
        <a href={link2} className='transition-all duration-200 scroll-smooth hover:bg-customDarkBlue p-2 rounded hover:text-white'>
          {para2}
        </a>
        <a href={link3} className='transition-all duration-200 scroll-smooth hover:bg-customDarkBlue p-2 rounded hover:text-white'>
          {para3}
        </a>
        <a href={link4} className='transition-all duration-200 scroll-smooth hover:bg-customDarkBlue p-2 rounded hover:text-white'>
          {para4}
        </a>
        <a href={link5} className='transition-all duration-200 scroll-smooth hover:bg-customDarkBlue p-2 rounded hover:text-white'>
          {para5}
        </a>
        <a href={link6} className='transition-all duration-200 scroll-smooth hover:bg-customDarkBlue p-2 rounded hover:text-white'>
          {para6}
        </a>
      </div>
      <div className='flex gap-3 items-center mr-4 ml-auto'>
        <Link to={btnLink1} className='px-4 py-2 rounded active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-[#fff]'>{button1}</Link>
        <Link to={btnLink2} className='px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue '>{button2}</Link>
      </div>
    </div>
  )
}

export default CampusNav