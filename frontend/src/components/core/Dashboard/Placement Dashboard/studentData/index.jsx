import React, { useEffect, useState } from "react";

const StudentData = () => {
  const branches = [
    {
      branch : "CSE" , 
      fullForm : "Computer Science And Engineering"
    }, 
    {
      branch : "CS" , 
      fullForm : "Computer Science"
    }, 
    {
      branch : "CSE-AI/ML" , 
      fullForm : "Computer Science And Engineering - Artificial Inteligence And Machine Learning"
    }, 
    {
      branch : "CSE-DS" , 
      fullForm : "Computer Science And Engineering - Data Science"
    }, 
    {
      branch : "AI/ML" , 
      fullForm : "Artificial Inteligence And Machine Learning"
    }, 
    {
      branch : "CS/IT" , 
      fullForm : "Computer Science / Information Technology"
    }, 
    {
      branch : "IT" , 
      fullForm : "Information Technology"
    }, 
    {
      branch : "ECE" , 
      fullForm : "Electronics And Communication Engineering"
    }, 
    {
      branch : "EN" , 
      fullForm : "Electrical And Electronics Engineering"
    }, 
    {
      branch : "ME" , 
      fullForm : "Mechanical Engineering"
    }, 
    {
      branch : "CE" , 
      fullForm : "Civil Engineering"
    }, 
  ]
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="text-4xl ">
        Branch Wise Data
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-5 ">
      {
        branches.map((branch , index) => (
          <button key={index} class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{branch.branch}</h5>
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{branch.fullForm}</p>
          </button>
        ))
      }
    </div>
    </div>
    
  );
};

export default StudentData;
