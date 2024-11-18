import React, { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ResumeTemplate = () => {
  
  const navigate = useNavigate()

  const handleClick = (activeComponent) => {
    
     if (activeComponent === "createResume"){
      window.open('https://ats-resume-maker-ruby.vercel.app/');
     }
     else if(activeComponent === "atsScoreChecker"){
      window.open('https://ats-score-checker-cwtnaa48nx73qv4xfiqhxk.streamlit.app/');
     }
     else
      navigate(`${activeComponent}`);
  }

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between'>
      {[
        {
          title: "Create your own resume",
          description: "With pre-designed, professional template already available, all you need to do is enter your personal details, skills, work experience, and other relevant information. The template does the rest, organizing your information into a polished, visually appealing format that stands out to employers. Just fill in your details, and your resume is ready to download and use!",
          buttonText: "Create Resume",
          route: "createResume",
        },
        {
          title: "Templates",
          description: "Our website offers a variety of professional resume templates to help you create a resume that’s uniquely yours. You can choose from multiple styles and formats, each designed to highlight your skills and experience effectively. With these templates as your starting point, you have the freedom to add your personal information, customize sections, and make adjustments to suit your career goals.",
          buttonText: "Choose Template",
          route: "chooseTemplate",
        },
        {
          title: "Resume Samples",
          description: "Our website offers access to sample resumes from successful alumni of our college, giving you valuable insights into effective resume-building. These samples showcase different formats, experiences, and styles tailored to various industries, serving as a helpful reference. By studying these examples, you can better understand how to present your achievements and skills to stand out to potential employers.",
          buttonText: "View Resume Samples",
          route: "resumeSamples",
        },
        {
          title: "Check ATS Score",
          description: "Our website features an ATS (Applicant Tracking System) checker to help you optimize your resume for automated screening. Many companies use ATS to filter applications, and our tool analyzes your resume to ensure it meets the criteria to pass through these systems. With our ATS checker, you can increase your chances of getting noticed by recruiters and landing your dream job.",
          buttonText: "Check ATS Score",
          route: "atsScoreChecker",
        },
      ].map((card, index) => (
        <div key={index} className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
          <button 
            onClick={() => handleClick(card.route)} 
            className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
          >
            <p className="text-nowrap">{card.buttonText}</p>
            <IoMdArrowRoundBack className="rotate-180" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplate;
