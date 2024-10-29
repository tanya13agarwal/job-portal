import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCompanyDetails, fetchCompanyDetails } from '../../../../services/operations/companyDetailsAPI'
import logo from "../../../../assets/images/logo.jpeg"
import CompanyCard from '../../../common/CompanyCard'
import ConfirmationModal from '../../../common/ConfirmationModal'
import { deleteJob, fetchJobDetails } from '../../../../services/operations/jobDetailsAPI'
import { setEditJob, setJob } from '../../../../slices/jobPostSlice'
import { setCompany, setEditCompany } from '../../../../slices/companyPostSlice'
import { useNavigate } from 'react-router-dom'

const JobView = () => {

  const [loading ,  setLoading] = useState()
  const [allCompany ,  setAllCompany] = useState([])
  const [allJob ,  setAllJob] = useState([])
  const [confirmationModal , setConfirmationModal] = useState(false)
  const [specificJob , setSpecificJob] = useState()

  const {token} = useSelector((state) => state.auth)
  const {job , editJob} = useSelector((state) => state.jobPost)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const allCompanies = await fetchAllCompanyDetails()
      console.log("allCompanies: " , allCompanies)
      if(allCompanies) {
        setAllCompany(allCompanies);
      }
      console.log("allCompany: " , allCompany)
      setLoading(false)
    })()
  } , [allJob])

  const editJobDetails = async(jobId , companyId) => {
    const jobDetail = await fetchJobDetails(jobId)
    if(jobDetail.success) {
      dispatch(setJob(jobDetail.data))
    }
    const companyDetail = await fetchCompanyDetails(companyId)
    if(companyDetail.success) {
      dispatch(setCompany(companyDetail.data))
    }
    dispatch(setEditJob(true));
    dispatch(setEditCompany(true));
    navigate("/dashboard/job-posting")
  }

  const handleDeleleJob = async (jobId) => {
    const result = await deleteJob({
      jobId,
      token,
    })

    if (result) {
      console.log(result)
      setAllJob(result)
    }
    setConfirmationModal(null)
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
            <div className='flex w-full items-center justify-center text-4xl mb-10'>All Jobs</div>
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
                          status={job.status}
                          compbtn1='Edit Job'
                          compbtn2='Delete Job'
                          btn1Handler={() => editJobDetails(job._id , company._id)}
                          btn2Handler={() =>
                            setConfirmationModal({
                              text1: "Delete this Job?",
                              text2: "All the details in this job will be deleted",
                              btn1Text: "Delete",
                              btn2Text: "Cancel",
                              btn1Handler: () => handleDeleleJob(job._id),
                              btn2Handler: () => setConfirmationModal(null),
                            })
                          }
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
        {
          confirmationModal && <ConfirmationModal modalData={confirmationModal}/>
        }
    </div>
  )
}

export default JobView