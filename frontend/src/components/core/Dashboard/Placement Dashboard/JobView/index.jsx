import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCompanyDetails, fetchCompanyDetails } from '../../../../../services/operations/companyDetailsAPI';
import logo from "../../../../../assets/images/logo.jpeg";
import CompanyCard from '../../../../common/CompanyCard';
import ConfirmationModal from '../../../../common/ConfirmationModal';
import { deleteJob, fetchJobDetails } from '../../../../../services/operations/jobDetailsAPI';
import { setEditJob, setJob } from '../../../../../slices/jobPostSlice';
import { setCompany, setEditCompany } from '../../../../../slices/companyPostSlice';
import { useNavigate } from 'react-router-dom';
import { JOB_STATUS } from '../../../../../utils/constants';

const JobView = () => {
  const [loading, setLoading] = useState(true);
  const [publishedJobs, setPublishedJobs] = useState([]);
  const [unpublishedJobs, setUnpublishedJobs] = useState([]);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    ;(async () => {
      setLoading(true);
      const allCompanies = await fetchAllCompanyDetails();
      if (allCompanies) {
        const jobs = allCompanies.reduce((acc, company) => {
          const companyJobs = company.jobs.map(job => ({
            ...job,
            companyDetails: {
              companyId: company._id,
              companyName: company.companyName,
              thumbnail: company.thumbnail,
              companyLocation: company.companyLocation,
              companyWebsite: company.companyWebsite,
            }
          }));
          return [...acc, ...companyJobs];
        }, []);
        
        const published = jobs.filter(job => job.status === JOB_STATUS.PUBLISHED);
        const unpublished = jobs.filter(job => job.status !== JOB_STATUS.PUBLISHED);
        console.log("nnnnnn:", published);
        setPublishedJobs(published);
        setUnpublishedJobs(unpublished);
      }
      setLoading(false);
    })();
  }, []);

  const editJobDetails = async (jobId, companyId) => {
    const jobDetail = await fetchJobDetails(jobId);
    if (jobDetail.success) {
      dispatch(setJob(jobDetail.data));
    }
    const companyDetail = await fetchCompanyDetails(companyId);
    if (companyDetail.success) {
      console.log("f vf  f v:", companyDetail);
      dispatch(setCompany(companyDetail.data));
    }
    dispatch(setEditJob(true));
    dispatch(setEditCompany(true));
    navigate("/dashboard/job-posting");
  };

  const handleDeleteJob = async (jobId) => {
    const result = await deleteJob({ jobId, token });
    if (result) {
      setPublishedJobs(publishedJobs.filter(job => job._id !== jobId));
      setUnpublishedJobs(unpublishedJobs.filter(job => job._id !== jobId));
    }
    setConfirmationModal(null);
  };

  return (
    <div className='mx-auto w-full mt-10 mb-10'>
      {loading ? (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <img src={logo} alt="logo" />
          <p className='font-semibold text-2xl mt-6'>Please Wait while the page is loading...</p>
        </div>
      ) : (
        <div>
          <div className='flex w-full items-center justify-center text-4xl mb-10'>All Jobs</div>
          
          <div className='mb-10'>
            <h2 className='text-2xl font-medium mb-5'>Published Jobs</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-5'>
              {publishedJobs.map((job, index) => (
                <div key={index}>
                  <CompanyCard
                    image={job.companyDetails.thumbnail}
                    CompanyName={job.companyDetails.companyName}
                    Position={job.jobName}
                    description={job.jobDescription}
                    jobDesc={""}
                    Batch={job.batch}
                    Branch={job.branch}
                    Stipend={job.stipend}
                    MinSalary={job.minSalary}
                    MaxSalary={job.maxSalary}
                    JobLocation={job.companyDetails.companyLocation}
                    Requirements={job.instructions}
                    JobDescription={job.jobDescription}
                    jobDescPDF={job.jobDescriptionFile}
                    companyWebsite={job.companyDetails.companyWebsite}
                    status={job.status}
                    compbtn1='Edit Job'
                    compbtn2='Delete Job'
                    btn1Handler={() => editJobDetails(job?._id, job?.companyDetails?.companyId)}
                    btn2Handler={() =>
                      setConfirmationModal({
                        text1: "Delete this Job?",
                        text2: "All the details in this job will be deleted",
                        btn1Text: "Delete",
                        btn2Text: "Cancel",
                        btn1Handler: () => handleDeleteJob(job._id),
                        btn2Handler: () => setConfirmationModal(null),
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-medium mb-5 pt-8'>Unpublished Jobs</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-5'>
              {unpublishedJobs.map((job, index) => (
                <div key={index}>
                  <CompanyCard
                    image={job.companyDetails.thumbnail}
                    CompanyName={job.companyDetails.companyName}
                    Position={job.jobName}
                    description={job.jobDescription}
                    jobDesc={""}
                    Batch={job.batch}
                    Branch={job.branch}
                    Stipend={job.stipend}
                    MinSalary={job.minSalary}
                    MaxSalary={job.maxSalary}
                    JobLocation={job.companyDetails.companyLocation}
                    Requirements={job.instructions}
                    JobDescription={job.jobDescription}
                    jobDescPDF={job.jobDescriptionFile}
                    companyWebsite={job.companyDetails.companyWebsite}
                    status={job.status}
                    compbtn1='Edit Job'
                    compbtn2='Delete Job'
                    btn1Handler={() => editJobDetails(job._id, job.companyId)}
                    btn2Handler={() =>
                      setConfirmationModal({
                        text1: "Delete this Job?",
                        text2: "All the details in this job will be deleted",
                        btn1Text: "Delete",
                        btn2Text: "Cancel",
                        btn1Handler: () => handleDeleteJob(job._id),
                        btn2Handler: () => setConfirmationModal(null),
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
}

export default JobView;
