import React, { useState } from 'react';
import Card from '../common/Card';
import Tab from "../core/Auth/Tab";
import { ACCOUNT_TYPE } from '../../utils/accoutnType';
import offCampus from '../../assets/images/off-campus-icon.jpg';
import onCampus from '../../assets/images/on-campus-icon.png';
import courses from '../../assets/images/courses-icon.png';
import hackathon from '../../assets/images/hackathon-icon.png';
import resumeBuilder from '../../assets/images/resume-builder-icon.jpg';

import studentData from "../../assets/images/student-data.jpg";
import jobPosting from "../../assets/images/job-posting.jpeg";
import analytics from "../../assets/images/analytics.jpeg";


export const Features = () => {
    const [isStudent, setIsStudent] = useState("Student");

    const tabData = [
        {
            id: 1,
            tabName: "Student",
            type: ACCOUNT_TYPE.STUDENT,
        },
        {
            id: 2,
            tabName: "Admin",
            type: ACCOUNT_TYPE.ADMIN,
        },
    ];

    return (
        <div id='features' className='flex flex-col items-center gap-8'>
            {/* Header */}
            <div className='text-center font-semibold text-2xl sm:text-4xl'>
                Features
            </div>

            {/* Tabs for Admin and Student */}
            <Tab
                className="w-full max-w-xs sm:max-w-sm flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-3xl shadow-md"
                tabData={tabData}
                field={isStudent}
                setField={setIsStudent}
            />

            {/* Student Features */}
            <div
                className={`${isStudent === "Student" ? "" : "hidden"} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full`}
            >
                <Card
                    image={offCampus}
                    heading="Off-Campus Drives"
                    para="Expand your reach and connect with diverse recruiters through our off-campus drive feature."
                />
                <Card
                    image={onCampus}
                    heading="On-Campus Drives"
                    para="Network with top recruiters on campus through our exclusive on-campus drive feature."
                />
                <Card
                    image={courses}
                    heading="Courses"
                    para="Access exclusive courses designed to enhance your skills and boost your placement preparation."
                />
                <Card
                    image={hackathon}
                    heading="Hackathons / Internships"
                    para="Participate in dynamic hackathons and internships, both on and off campus, for all students"
                />
                <Card
                    image={resumeBuilder}
                    heading="Resume Building"
                    para="Create an ATS-friendly resume, check its score, and gain insights from alumni to boost applications."
                />
            </div>

            {/* Admin Features */}
            <div
                className={`${isStudent === "Admin" ? "" : "hidden"} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full`}
            >
                <Card
                    image={jobPosting}
                    heading="Job Posting"
                    para="Easily create and post job openings, including detailed descriptions and requirements, to attract top talent and streamline the hiring process."
                />
                <Card
                    image={analytics}
                    heading="Analytics"
                    para="Provides employers and admins insights on student data and recruitment metrics, such as application rates and demographics."
                />
                <Card
                    image={studentData}
                    heading="Student Database"
                    para="Student database with academic details, skills, contact info, and resumes for easy employer search of qualified candidates."
                />
            </div>
        </div>
    );
};
