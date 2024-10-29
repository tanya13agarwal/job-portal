import React, { useEffect, useRef, useState } from 'react'
import DescriptionModal from './DescriptionModal';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({image , CompanyName , Position , description , jobDesc , status = "Draft" , compbtn1 = "Apply Now" , compbtn2 = "Take Test"}) => {
    
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
    <div class={`${status === "Published" ? "bg-green-300 text" : "bg-white" } w-full transition-all hover:shadow-xl duration-200  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
        
        <div onClick={toggleHandler} class="flex  transition-all duration-200 cursor-pointer flex-col items-center px-4 pt-8 pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{CompanyName}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{Position}</span>
            <div onClick={(e) => e.stopPropagation()} class="flex items-center gap-3 mt-4 md:mt-6">
                <a href="" class="px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue ">{compbtn1}</a>
                <button disabled = {disable} href="/test" class={`${disable ? "text-gray-400 bg-gray-200" : "active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-[#fff]"} px-4 py-2 rounded `}>{compbtn2}</button>
            </div>
        </div>
        {
            descModal && <DescriptionModal 
                            text1 = {`${Position} , ${CompanyName}`}
                            text2 = {description}
                            btn1Text = "Job Description"
                            btn2Text = "Close"
                            btn1Handler = {jobDesc}
                            btn2Handler = {toggleHandler}
                        />
        }
        
    </div>
  )
}

export default CompanyCard