import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";

const TestCard = ({ heading, desc, link }) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full hover:scale-105 hover:bg-gray-100 transition-all duration-300">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      </div>
      <a
        href={link}
        className="px-4 flex items-center gap-2 w-32 py-2 rounded border border-transparent active:scale-90 text-white bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue mt-auto"
      >
        <p className="whitespace-nowrap">Take Test</p>
        <IoMdArrowRoundBack className="rotate-180" />
      </a>
    </div>
  );
};

export default TestCard;
