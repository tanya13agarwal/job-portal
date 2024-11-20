import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const CourseDetails = ({ title, content, modules }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <button
        className="mb-8 p-2 rounded-full bg-customDarkBlue hover:scale-95 transition-all duration-200 active:scale-105"
        onClick={() => navigate(-1)} // Navigate back to the previous page
      >
        <IoMdArrowRoundBack className="text-white text-2xl"/>
      </button>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-lg">{content}</p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Modules:</h3>
        <ul className="list-disc pl-6 mt-2">
          {modules.map((module, index) => (
            <li key={index} className="text-lg">{module}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
