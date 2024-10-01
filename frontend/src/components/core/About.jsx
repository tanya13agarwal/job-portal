import React from 'react';
import CountUp from 'react-countup';
import about from '../../assets/images/about.jpeg';
import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Container */}
      <div className="flex flex-col md:flex-row max-w-7xl w-full items-center bg-[#fff] shadow-lg rounded overflow-hidden p-6">
        
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={about}
            alt="Campus Recruitment Illustration"
            className="w-[80%] max-w-full h-auto"
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-1/2 p-4">
          <p className="text-2xl md:text-3xl font-bold mb-4 text-lightBlack">
          "Unlock a world of career opportunities with our innovative campus recruitment platform."
          </p>
          <p className="text-md mb-2">
          Welcome to OpportuNest, a comprehensive campus recruitment system designed to bridge the gap between employers and talented students. 
          </p>
          <ul className="mb-2 text-lg">
            <li className='flex gap-2 items-center'><FaRegCheckCircle className='text-customDarkBlue text-xl'/><p>We simplify the job search process by offering personalized job recommendations based on student skills, preferences, and resume data.</p></li>
            <li className='flex gap-2 items-center'><FaRegCheckCircle className='text-customDarkBlue'/><p>Our platform features AI-powered tools for resume building, ATS score evaluation, and placement prediction to enhance student preparation.</p></li>
            <li className='flex gap-2 items-center'><FaRegCheckCircle className='text-customDarkBlue'/><p>We provide resources for both on-campus and off-campus opportunities, giving students access to certified courses, internships, and hackathons.</p></li>
            <li className='flex gap-2 items-center'><FaRegCheckCircle className='text-customDarkBlue'/><p>Realistic mock tests simulate actual recruitment exams, helping students practice and improve their chances of success.</p></li>
          </ul>
          <p className="text-lg mb-6">
             Our dedicated team ensures exceptional support for both students and employers, making OpportuNest the go-to platform for seamless campus placements.
          </p>

          {/* Stats with counting animation */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-customDarkBlue">
                <CountUp className='text-customDarkBlue' end={305} duration={2.5} />+
              </h2>
              <p className="text-lg mt-2">Companies</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-customDarkBlue">
                <CountUp className='text-customDarkBlue' end={610} duration={2.5} />+
              </h2>
              <p className="text-lg mt-2">Registrations</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-customDarkBlue">
                <CountUp className='text-customDarkBlue' end={488} duration={2.5} />+
              </h2>
              <p className="text-lg mt-2">Placements</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-customDarkBlue">
                <CountUp className='text-customDarkBlue' end={31} duration={2.5} /> LPA
              </h2>
              <p className="text-lg mt-2 text-customDarkBlue">Highest Package</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
