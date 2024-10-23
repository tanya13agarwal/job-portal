import React, { useState } from 'react';
import Card from '../common/Card';
import Tab from "../core/Auth/Tab";
import { ACCOUNT_TYPE } from '../../utils/accoutnType';


export const Features = () => {

    // const [accountType , setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
    const [isStudent , setIsStudent] = useState("Student");


    const tabData = [
        {
            id : 1,
            tabName : "Student",
            type : ACCOUNT_TYPE.STUDENT,
        },
        {
            id : 2,
            tabName : "Admin",
            type : ACCOUNT_TYPE.ADMIN,
        },
    ]

  return (
    <div id='features' className='flex flex-col p-10 items-center gap-4'>

        <div className='flex items-center justify-center font-edu-sa font-semibold text-4xl '>
            Features
        </div>

        <Tab
            className = "w-[20%] flex items-center justify-between"
            tabData={tabData} 
            field={isStudent} 
            setField={setIsStudent}
        />

        <div className={`${isStudent === "Student" ? "" : "hidden"} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between`}>
            <Card
                image = ""
                heading = "Off-Campus Drives" 
                para = "Expand your reach and connect with diverse recruiters through our off-campus drive feature." 
                link = "/"
            />
            <Card
                image = ""
                heading = "On-Campus Drives" 
                para = "Network with top recruiters on campus through our exclusive on-campus drive feature."
                link = "/"
            />
            <Card
                image = ""
                heading = "Courses" 
                para = "Access exclusive courses designed to enhance your skills and boost your placement preparation."
                link = "/"
            />

            <Card
                image = ""
                heading = "Hackathons / Internships" 
                para = "Participate in dynamic hackathons and internships, both on and off campus, for all students" 
                link = "/"
            />
            <Card
                image = ""
                heading = "Resume Building" 
                para = "Create an ATS-friendly resume, check its score, and gain insights from alumnis’ to boost applications."
                link = "/"
            />
            
        </div>

        <div className={`${isStudent === "Admin" ? "" : "hidden"} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between`}>
        <Card
                image = ""
                heading = "Job Posting" 
                para = "Easily create and post job openings, including detailed descriptions and requirements, to attract top talent and streamline the hiring process."
                link = "/"
            />
            <Card
                image = ""
                heading = "Analytics" 
                para = "Provides employers and admins insights on student data and recruitment metrics, such as application rates and demographics."
                link = "/"
            />
            <Card
                image = ""
                heading = "Student Database" 
                para = "Student database with academic details, skills, contact info, and resumes for easy employer search of qualified candidates"
                link = "/"
            />
        </div>
    </div>
  )
}
