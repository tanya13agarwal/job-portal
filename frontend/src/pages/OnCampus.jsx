import React from 'react'
import CampusNav from '../components/common/CampusNav'
import CompanyCard from '../components/common/CompanyCard'
import {company} from "../utils/companyNames";

const OnCampus = () => {

  return (
    <>
        <CampusNav
            para1={"Mock Test"}
            link1={"/test"}
            para2={"Courses"}
            link2={""}
            para3={"Hackathons"}
            link3={""}
            para4={"Internships"}
            link4={""}
            para5={"Resume"}
            link5={""}
            para6={"Seminar"}
            link6={""}
            button1={"Feedback"}
            btnLink1={""}
            button2={"Help"}
            btnLink2={""}
        />
        <div className='w-11/12 mx-auto mt-10 mb-10'>
            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between'>
                {
                    company.map((companyData) => (
                        <CompanyCard
                            image = {companyData.image}
                            CompanyName = {companyData.CompanyName}
                            Position = {companyData.Position}    
                            description={companyData.description}
                            jobDesc={companyData.jobDesc}
                        />
                    )) 
                }
                
            </div>
        </div>
    </>
  )
}

export default OnCampus