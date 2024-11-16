import React, { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ResumeTemplate = () => {
  
  const navigate = useNavigate()

  const handleClick = (activeComponent) => {
      navigate(`${activeComponent}`);
  }

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between'>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create your own resume</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">With pre-designed, professional template already available, all you need to do is enter your personal details, skills, work experience, and other relevant information. The template does the rest, organizing your information into a polished, visually appealing format that stands out to employers. Just fill in your details, and your resume is ready to download and use!</p>
        <button onClick={() => handleClick('createResume')} className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue">
          <p className="text-nowrap">Create Resume</p>
          <IoMdArrowRoundBack className="rotate-180" />
        </button>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Templates</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our website offers a variety of professional resume templates to help you create a resume that’s uniquely yours. You can choose from multiple styles and formats, each designed to highlight your skills and experience effectively. With these templates as your starting point, you have the freedom to add your personal information, customize sections, and make adjustments to suit your career goals.</p>
        <button onClick={() => handleClick('chooseTemplate')} className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue">
          <p className="text-nowrap">Choose Template</p>
          <IoMdArrowRoundBack className="rotate-180" />
        </button>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resume Samples</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our website offers access to sample resumes from successful alumni of our college, giving you valuable insights into effective resume-building. These samples showcase different formats, experiences, and styles tailored to various industries, serving as a helpful reference. By studying these examples, you can better understand how to present your achievements and skills to stand out to potential employers.</p>
        <button onClick={() => handleClick('resumeSamples')} className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue">
          <p className="text-nowrap">View Resume Samples</p>
          <IoMdArrowRoundBack className="rotate-180" />
        </button>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Check ATS Score</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our website features an ATS (Applicant Tracking System) checker to help you optimize your resume for automated screening. Many companies use ATS to filter applications, and our tool analyzes your resume to ensure it meets the criteria to pass through these systems. With our ATS checker, you can increase your chances of getting noticed by recruiters and landing your dream job.</p>
        <button onClick={() => handleClick('atsScoreChecker')} className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue">
          <p className="text-nowrap">Check ATS score</p>
          <IoMdArrowRoundBack className="rotate-180" />
        </button>
      </div>

     
    </div>
  );
};

export default ResumeTemplate;
