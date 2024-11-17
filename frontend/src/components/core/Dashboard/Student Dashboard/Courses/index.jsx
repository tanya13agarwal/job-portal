import React, { useState, useEffect } from "react";
import Tab from "../../../Auth/Tab";
import Card from "../../../../common/Card";
import logo from "../../../../../assets/images/logo.jpeg"; // Update the path to your logo image

const Courses = () => {
  const [courseType, setCourseType] = useState("onCampus");
  const [loading, setLoading] = useState(true);

  const tabData = [
    { id: 1, tabName: "On-Campus", type: "onCampus" },
    { id: 2, tabName: "Off-Campus", type: "offCampus" },
  ];

  const onCampusCourses = [
    {
      heading: "Data Structures",
      para: "Master data structures with hands-on campus sessions.",
    },
    {
      heading: "Operating Systems",
      para: "Explore OS concepts through expert-led on-campus classes.",
    },
    {
      heading: "Database Management",
      para: "Learn to manage data efficiently with practical campus workshops.",
    },
    {
      heading: "Algorithms",
      para: "Understand algorithms through campus-driven interactive sessions.",
    },
  ];

  const offCampusCourses = [
    {
      heading: "Web Development",
      para: "Learn full-stack development from industry experts online.",
    },
    {
      heading: "Machine Learning",
      para: "Dive into ML with virtual training and real-world projects.",
    },
  ];

  useEffect(() => {
    // Simulating a delay for loading data
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
        <div>
          <div className="flex w-full items-center justify-center text-4xl mb-10">
            Courses
          </div>

          {/* Toggle Tabs */}
          <Tab
            className="w-full max-w-sm mx-auto"
            tabData={tabData}
            field={courseType}
            setField={setCourseType}
          />

          {/* Courses Display */}
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {courseType === "onCampus" &&
              onCampusCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <img src={course.image} alt="img"/>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {course.heading}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {course.para}
                    </p>
                    <button
                        className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
                    >
                        View Full Course
                    </button>
                </div>
              ))}

            {courseType === "offCampus" &&
              offCampusCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <img src={course.image} alt="img"/>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {course.heading}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {course.para}
                    </p>
                    <button
                        className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
                    >
                        View Full Course
                    </button>
                </div>
              ))}
          </div>
        </div>
  );
};

export default Courses;
