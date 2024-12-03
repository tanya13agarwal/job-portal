import React from 'react';
import homePage from "../assets/videos/homePage.mp4";
import About from '../components/core/About';
import Contact from '../components/core/Contact';
import { Features } from '../components/core/Features';
import Placements from '../components/core/Placements';
import Navbar from '../components/common/Navbar';
import Testimonials from '../components/core/Testimonials';
import Team from '../components/core/Team';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ACCOUNT_TYPE } from '../utils/accoutnType';

const Home = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const handleClick = () => {
    if(token === null) {
      navigate('/signup');
    }
    else if (user.accountType === ACCOUNT_TYPE.STUDENT){
      navigate("/dashboard/on-campus")
    }
  };

  return (
    <>
      <Navbar />


      <div className="w-full max-w-[1280px] mx-auto px-6 gap-4 flex flex-col">

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 py-12" id="home">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start w-full md:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              OpportuNest - Campus Career Management System
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4 lg:text-left">
              "Where Every Click Leads to Your Dream Job!"
            </p>
            <button
              onClick={handleClick}
              className={`${token !== null && user.accountType !== ACCOUNT_TYPE.STUDENT ? "hidden" : ""} px-6 py-3 mt-6 text-sm md:text-base border border-customDarkBlue rounded-md hover:bg-customDarkBlue hover:text-white transition-all duration-200 lg:self-start`}
            >
              Get Started
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center lg:translate-x-[7.5%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[400px] sm:max-w-[500px] rounded shadow-lg"
            >
              <source src={homePage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <About />
        <Features />
        <Placements />
        <Testimonials />
        <Team />
        <Contact />
      </div>
    </>
  );
};

export default Home;
