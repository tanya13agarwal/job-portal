import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TestiCard from '../common/TestiCard';

const TeamDetails = (props) => {
  const reviews = props.reviews; // Array of team member details
  const [index, setIndex] = useState(0); // Index for the current team member

  // Navigate to the previous team member
  const leftShiftHandler = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Navigate to the next team member
  const rightShiftHandler = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="flex bg-white flex-col w-[85vw] md:w-[700px] justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      {/* Display the card for the current team member */}
      <TestiCard review={reviews[index]} />

      {/* Navigation buttons */}
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}>
          <FiChevronLeft />
        </button>
        <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TeamDetails;
