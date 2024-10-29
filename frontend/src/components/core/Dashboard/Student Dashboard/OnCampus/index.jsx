import React, { useEffect , useState} from 'react'
import logo from "../../../../../assets/images/logo.jpeg"
import { fetchAllPublishedCompanyDetails } from '../../../../../services/operations/companyDetailsAPI';
import CompanyCard from '../../../../common/CompanyCard';

const OnCampus = () => {
  
    const [loading ,  setLoading] = useState()
    const [allCompany ,  setAllCompany] = useState([])
    const [allJob ,  setAllJob] = useState([])
    const [confirmationModal , setConfirmationModal] = useState(false)
  
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

    }
  
    const handleTakeTest = async () => {
      
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
                          <div className={``}>
                            <CompanyCard 
                            image = {company.thumbnail}
                            CompanyName={company.companyName}
                            Position={job?.jobName}
                            description={job.jobDescription}
                            jobDesc={""}
                            btn1Handler={handleApplyJob(job._id)}
                            btn2Handler={handleTakeTest}
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