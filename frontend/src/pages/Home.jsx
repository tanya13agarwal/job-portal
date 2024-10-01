import React from 'react';
import homePage from "../assets/videos/homePage.mp4";

const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center p-[5.5%] min-h-screen'>
      {/* Left Section */}
      <div className='flex flex-col items-start justify-start w-full md:w-[50%] mb-8 md:mb-0'>
        <p className='text-4xl md:text-5xl font-bold w-full md:w-[80%]'>
          OpportuNest - Campus Career Management System
        </p>
        <p className='text-lg md:text-xl text-darkGray pt-4'>
          "Where Every Click Leads to Your Dream Job!"
        </p>
        <button className='px-8 py-3 mt-8 active:scale-90 transition-all duration-200 rounded border border-customDarkBlue text-customDarkBlue shadow-xl hover:bg-customDarkBlue hover:text-[#fff]'>
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-[50%] flex justify-center'>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className='w-full max-w-[600px] h-auto rounded-lg shadow-lg'>
          <source src={homePage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;