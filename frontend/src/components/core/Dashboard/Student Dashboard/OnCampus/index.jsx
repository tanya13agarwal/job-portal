import React, { useEffect , useState} from 'react'
import logo from "../../../../../assets/images/logo.jpeg"
import { fetchAllPublishedCompanyDetails } from '../../../../../services/operations/companyDetailsAPI';
import CompanyCard from '../../../../common/CompanyCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { JOB_STATUS } from '../../../../../utils/constants';

const OnCampus = () => {
  
    const [loading ,  setLoading] = useState()
    const [allCompany ,  setAllCompany] = useState([])
    const [allJob ,  setAllJob] = useState([])
    const [confirmationModal , setConfirmationModal] = useState(false)
    const { user } = useSelector((state) => state.profile)
    console.log("COMPANY CARD: " , user?.additionalDetails?.jobEnrolled?.includes("671e5f79fbda65ad2bf2f680"))
    const navigate = useNavigate();
  
    useEffect(() => {
      ;(async () => {
        setLoading(true)
        const allCompanies = await fetchAllPublishedCompanyDetails()
        console.log("allCompanies: " , allCompanies)
        if(allCompanies) {
          setAllCompany(allCompanies);
        }
        console.log("allCompany: " , allCompany)
        setLoading(false)
      })()
    } , [allJob])
    
  
    const handleApplyJob = async(jobId) => {
      navigate(`/dashboard/on-campus/apply/${jobId}`)
    }
  
    const handleTakeTest = async () => {
      navigate("/dashboard/on-campus/test");
    }
  
    return (
      <div className='mx-auto w-full mt-10 mb-10'>
          {
            loading ? (
              <div className='w-full h-screen flex flex-col items-center justify-center'>
                <img src={logo} alt="logo"/>
                <p className='font-semibold text-2xl mt-6'>Please Wait while the page is loading...</p>
              </div>
          ) : (
            <div>
              <div className='flex w-full items-center justify-center text-4xl mb-10'>On-Campus Opportunities</div>
              <div className = 'grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 '>
                {
                  allCompany.map((company , index) => (
                    <div key={index}>
                      {
                        company.jobs.map((job) => (
                          <div key={job._id} className={``}>
                            <CompanyCard 
                            image = {company.thumbnail}
                            CompanyName={company.companyName}
                            Position={job?.jobName}
                            description={job.jobDescription}
                            jobDesc={""}
                            status = {user?.additionalDetails?.jobEnrolled?.includes(job?._id) ? JOB_STATUS.PUBLISHED : JOB_STATUS.DRAFT}
                            btn1Handler={() => handleApplyJob(job._id)}
                            btn2Handler={handleTakeTest}
                            compbtn1 = {user?.additionalDetails?.jobEnrolled?.includes(job?._id) ? "Edit Application" : "Apply Now"}
                          />
                        </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          )
          }
      </div>
    )
}

export default OnCampus;