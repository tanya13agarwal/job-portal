import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab from "../../../Auth/Tab";

import dsa from "../../../../../assets/images/courses/dsa.png";
import webDev from "../../../../../assets/images/courses/webDev.png";
import os from "../../../../../assets/images/courses/os.png";
import systemDesign from "../../../../../assets/images/courses/systemDesign.png";
import git from "../../../../../assets/images/courses/git.png";
import dbms from "../../../../../assets/images/courses/dbms.png";
import ml from "../../../../../assets/images/courses/ml.jpg";
import { fetchAllCourseDetails } from "../../../../../services/operations/courseDetailsAPI";

const Courses = () => {
  const [courseType, setCourseType] = useState("onCampus");
  const [onCampusCourses, setOnCampusCourses] = useState([]);
  const navigate = useNavigate();

  const tabData = [
    { id: 1, tabName: "On-Campus", type: "onCampus" },
    { id: 2, tabName: "Off-Campus", type: "offCampus" },
  ];

  useEffect( ()=>{
    const fetchData = async() => {
      try{
        const result = await fetchAllCourseDetails();
        if (result)
          setOnCampusCourses(result);
        }
      catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[])

  
  const offCampusCourses = [
    {
      courseName: "Data Structures and Algorithms (DSA)",
      courseDescription: "Master essential DSA topics with online lectures and coding challenges. Enhance your problem-solving skills for competitive coding.",
      courseLink: "off-campus/dsa",
      thumbnail: dsa,
    },
    {
      courseName: "Web Development",
      courseDescription: "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive websites. Create full-stack projects from scratch.",
      courseLink: "off-campus/web-development",
      thumbnail: webDev,
    },
    {
      courseName: "Data Science / ML / DL",
      courseDescription: "Gain expertise in data analysis, machine learning algorithms, and deep learning frameworks. Work on projects using Python and TensorFlow.",
      courseLink: "off-campus/data-science-ml-dl",
      thumbnail: ml,
    },
    {
      courseName: "System Design",
      courseDescription: "Understand high-level design patterns and architectural principles. Prepare for designing scalable systems in technical interviews.",
      courseLink: "off-campus/system-design",
      thumbnail: systemDesign,
    },
    {
      courseName: "Operating Systems",
      courseDescription: "Learn the internals of operating systems, including CPU scheduling and deadlock handling. Apply concepts in real-world projects.",
      courseLink: "off-campus/operating-systems",
      thumbnail: os,
    },
    {
      courseName: "DBMS and SQL",
      courseDescription: "Study database schemas, normalization, and SQL queries. Build robust databases and understand transaction management.",
      courseLink: "off-campus/dbms-sql",
      thumbnail: dbms,
    },
    {
      courseName: "Git / Version Control",
      courseDescription: "Learn Git commands and workflows for version control. Master collaboration techniques with GitHub and other platforms.",
      courseLink: "off-campus/git-version-control",
      thumbnail: git,
    },
  ];

  const handleViewCourse = (link) => {
    window.open(link, "_blank");  // Navigate to the specific course details page
  };

  return (
    <div>
      <div className="flex w-full items-center justify-center text-4xl mb-10">
        Certifications / Resources
      </div>

      {/* Toggle Tabs */}
      <Tab
        className="w-full max-w-sm mx-auto"
        tabData={tabData}
        field={courseType}
        setField={setCourseType}
      />

      {/* Courses Display */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mt-10">
        {(courseType === "onCampus" ? onCampusCourses : offCampusCourses).map((course, index) => (
          <div
            key={index}
            className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <img
              src={course.thumbnail}
              alt={course.courseName}
              className="w-24 h-24 my-4 rounded-xl object-cover translate-x-[80%]"
            />
            <h5 className="mb-2 text-2xl font-bold text-gray-900">
              {course.courseName}
            </h5>
            <p className="mb-5 text-gray-700">
              {course.courseDescription.length > 100 ? `${course.courseDescription.slice(0 , 100)}...` : `${course.courseDescription}`}
            </p>
            <button
              className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
              onClick={() => handleViewCourse(course.courseLink)}
            >
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

