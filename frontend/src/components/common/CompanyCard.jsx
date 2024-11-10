import React, { useEffect, useRef, useState } from 'react';
import DescriptionModal from './DescriptionModal';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useNavigate } from 'react-router-dom';
import { JOB_STATUS } from '../../utils/constants';

const CompanyCard = ({
    image ,
    CompanyName , 
    Position , 
    JobDescription , 
    jobDescPDF , 
    status = "Draft" , 
    compbtn1 = "Apply Now" , 
    compbtn2 = "Take Test",
    btn1Handler,
    btn2Handler,
    companyWebsite,
    Batch,
    Branch,
    Stipend,
    MinSalary,
    MaxSalary,
    JobLocation,
    Requirements
}) => {
    console.log(status)
    const [disable , setDisable] = useState(true);
    const [descModal , setDescModal] = useState(false);

    const navigate = useNavigate()
    const ref = useRef(null);

    const toggleHandler = () => {
        setDescModal((prev) => !prev);
    }

    useEffect(() => {
        if(compbtn1 !== "Apply Now") {
            setDisable(false)
        }
    } , [])

  return (
    <div className={`${status === JOB_STATUS.PUBLISHED ? "bg-[#93C572] " : "bg-white" } w-full transition-all hover:shadow-xl duration-200  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>

        <div onClick={toggleHandler} className="flex  transition-all duration-200 cursor-pointer flex-col items-center px-4 pt-8 pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="Bonnie image"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{CompanyName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{Position}</span>
            <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-3 mt-4 md:mt-6">
                <button onClick={btn1Handler} className="text-nowrap px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue ">{compbtn1}</button>
                <button onClick={btn2Handler} disabled = {disable} href="/test" className={`${disable ? "text-gray-400 bg-gray-200" : "active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-[#fff]"} px-4 py-2 rounded text-nowrap`}>{compbtn2}</button>
            </div>
        </div>
        {
            descModal && <DescriptionModal 
                            compName ={CompanyName}
                            jobRole={Position}
                            batch={Batch}
                            branch={Branch}
                            stipend={Stipend}
                            JobDescription={JobDescription}
                            MinSalary={MinSalary}
                            MaxSalary={MaxSalary}
                            location={JobLocation}
                            companyWebsite={companyWebsite}
                            requirements={Requirements}
                            btn1Text = "Job Description"
                            btn2Text = "Close"
                            btn1Handler = {jobDescPDF}
                            btn2Handler = {toggleHandler}
                        />
        }
        
    </div>
  )
}

export default CompanyCard
