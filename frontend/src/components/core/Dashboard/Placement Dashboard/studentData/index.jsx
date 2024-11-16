import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentData = () => {

  const navigate = useNavigate();
  // const [selectedBranch, setSelectedBranch] = useState("");

  const branches = [
    { branch: "CSE", fullForm: "Computer Science And Engineering" },
    { branch: "CS", fullForm: "Computer Science" },
    { branch: "CSE - AI/ML", fullForm: "Computer Science And Engineering - Artificial Intelligence And Machine Learning" },
    { branch: "CSE - DS", fullForm: "Computer Science And Engineering - Data Science" },
    { branch: "CSE - Hindi", fullForm: "Computer Science And Engineering - Hindi" },
    { branch: "AI/ML", fullForm: "Artificial Intelligence And Machine Learning" },
    { branch: "CS/IT", fullForm: "Computer Science / Information Technology" },
    { branch: "IT", fullForm: "Information Technology" },
    { branch: "ECE", fullForm: "Electronics And Communication Engineering" },
    { branch: "EN", fullForm: "Electrical And Electronics Engineering" },
    { branch: "ME", fullForm: "Mechanical Engineering" },
    { branch: "CE", fullForm: "Civil Engineering" },
  ];

  const handleClick = (branch) => {
    navigate(`/dashboard/student-data/all-students?branch=${branch}`);
  };

  return (

    <div className="flex flex-col gap-10 items-center">
      <div className="text-4xl">Students Data (Branch Wise)</div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {branches.map((branch, index) => (
          <button
            onClick={() => handleClick(branch.branch)}
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{branch.branch}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{branch.fullForm}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentData;
