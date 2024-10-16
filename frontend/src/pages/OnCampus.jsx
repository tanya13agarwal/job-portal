import React from 'react'
import CampusNav from '../components/common/CampusNav'
import CompanyCard from '../components/common/CompanyCard'

const OnCampus = () => {
  return (
    <>
        <CampusNav
            para1={"Mock Test"}
            link1={""}
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
        <div className='w-11/12 mx-auto mt-10'>
            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between'>
                <CompanyCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    CompanyName={"Google"}
                    Position={"Software Developer"}    
                />
                <CompanyCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    CompanyName={"Google"}
                    Position={"Software Developer"}    
                />
                <CompanyCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    CompanyName={"Google"}
                    Position={"Software Developer"}    
                />
                <CompanyCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    CompanyName={"Google"}
                    Position={"Software Developer"}    
                />
                <CompanyCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    CompanyName={"Google"}
                    Position={"Software Developer"}    
                />
                <CompanyCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    CompanyName={"Google"}
                    Position={"Software Developer"}    
                />
                <CompanyCard
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    CompanyName={"Google"}
                    Position={"Software Developer"}    
                />
                
            </div>
        </div>
    </>
  )
}

export default OnCampus