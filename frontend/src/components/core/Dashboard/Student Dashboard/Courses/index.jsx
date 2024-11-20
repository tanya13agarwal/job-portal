import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab from "../../../Auth/Tab";

import dsa from "../../../../../assets/images/courses/dsa.png";
import webDev from "../../../../../assets/images/courses/webDev.png";
import os from "../../../../../assets/images/courses/os.png";
import systemDesign from "../../../../../assets/images/courses/systemDesign.png";
import git from "../../../../../assets/images/courses/git.png";
import dbms from "../../../../../assets/images/courses/dbms.png";
import ml from "../../../../../assets/images/courses/ml.jpg";

const Courses = () => {
  const [courseType, setCourseType] = useState("onCampus");
  const navigate = useNavigate();

  const tabData = [
    { id: 1, tabName: "On-Campus", type: "onCampus" },
    { id: 2, tabName: "Off-Campus", type: "offCampus" },
  ];

  const onCampusCourses = [
    {
      heading: "Data Structures",
      para: "Learn core data structures like arrays, linked lists, and trees with practical campus sessions. Build a strong foundation for problem-solving.",
      link: "on-campus/data-structures",
      image: "/images/data-structures.jpg",
    },
    {
      heading: "Operating Systems",
      para: "Understand key OS concepts like process management, threads, and memory allocation. Gain hands-on experience with real-world scenarios.",
      link: "on-campus/operating-systems",
      image: "/images/operating-systems.jpg",
    },
    {
      heading: "Database Management",
      para: "Dive into relational databases, ER models, and SQL. Learn to design and manage data storage solutions effectively in campus labs.",
      link: "on-campus/database-management",
      image: "/images/database-management.jpg",
    },
    {
      heading: "Algorithms",
      para: "Explore algorithmic paradigms like divide and conquer, dynamic programming, and greedy algorithms. Strengthen your analytical thinking.",
      link: "on-campus/algorithms",
      image: "/images/algorithms.jpg",
    },
    {
      heading: "HR Questions",
      para: "Get familiar with common HR interview questions and best practices for answering them. Build confidence for personal interaction rounds.",
      link: "on-campus/hr-questions",
      image: "/images/hr-questions.jpg",
    },
    {
      heading: "Interview Questions",
      para: "Practice a mix of technical and behavioral questions to prepare for coding interviews. Tackle challenges with a structured approach.",
      link: "on-campus/interview-questions",
      image: "/images/interview-questions.jpg",
    },
  ];

  const offCampusCourses = [
    {
      heading: "Data Structures and Algorithms (DSA)",
      para: "Master essential DSA topics with online lectures and coding challenges. Enhance your problem-solving skills for competitive coding.",
      link: "off-campus/dsa",
      image: dsa,
    },
    {
      heading: "Web Development",
      para: "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive websites. Create full-stack projects from scratch.",
      link: "off-campus/web-development",
      image: webDev,
    },
    {
      heading: "Data Science / ML / DL",
      para: "Gain expertise in data analysis, machine learning algorithms, and deep learning frameworks. Work on projects using Python and TensorFlow.",
      link: "off-campus/data-science-ml-dl",
      image: ml,
    },
    {
      heading: "System Design",
      para: "Understand high-level design patterns and architectural principles. Prepare for designing scalable systems in technical interviews.",
      link: "off-campus/system-design",
      image: systemDesign,
    },
    {
      heading: "Operating Systems",
      para: "Learn the internals of operating systems, including CPU scheduling and deadlock handling. Apply concepts in real-world projects.",
      link: "off-campus/operating-systems",
      image: os,
    },
    {
      heading: "DBMS and SQL",
      para: "Study database schemas, normalization, and SQL queries. Build robust databases and understand transaction management.",
      link: "off-campus/dbms-sql",
      image: dbms,
    },
    {
      heading: "Git / Version Control",
      para: "Learn Git commands and workflows for version control. Master collaboration techniques with GitHub and other platforms.",
      link: "off-campus/git-version-control",
      image: git,
    },
  ];

  const handleViewCourse = (link) => {
    navigate(link); // Navigate to the specific course details page
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
            className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <img
              src={course.image}
              alt={course.heading}
              className="w-24 h-24 my-4 rounded-xl object-cover translate-x-[80%]"
            />

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {course.heading}
            </h5>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              {course.para}
            </p>
            <button
              className="mt-auto px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
              onClick={() => handleViewCourse(course.link)}
            >
              {courseType==="onCampus" ? "View Course" : "View All Courses"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

