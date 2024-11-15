import React, { useEffect, useState } from 'react';
import logo from "../../../../../assets/images/logo.jpeg";
import { fetchAllPublishedCompanyDetails } from '../../../../../services/operations/companyDetailsAPI';
import CompanyCard from '../../../../common/CompanyCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { JOB_STATUS } from '../../../../../utils/constants';

const OnCampus = () => {
    const [loading, setLoading] = useState(false);
    const [allJobs, setAllJobs] = useState([]);
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            setLoading(true);
            const allCompanies = await fetchAllPublishedCompanyDetails();
            if (allCompanies) {
                // Flatten all jobs into a single array
                const jobs = allCompanies.flatMap(company => 
                    company.jobs.map(job => ({
                        ...job,
                        companyName: company.companyName,
                        thumbnail: company.thumbnail,
                        companyLocation: company.companyLocation,
                        companyWebsite: company.companyWebsite
                    }))
                );
                setAllJobs(jobs);
            }
            setLoading(false);
        })();
    }, []);

    const handleApplyJob = (jobId) => {
        navigate(`/dashboard/on-campus/apply/${jobId}`);
    };

    const handleTakeTest = () => {
        navigate("/dashboard/on-campus/test");
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
                    <div className='flex w-full items-center justify-center text-4xl mb-10'>On-Campus Opportunities</div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        {allJobs.map((job) => (
                            <CompanyCard
                                key={job._id}
                                image={job.thumbnail}
                                CompanyName={job.companyName}
                                Position={job.jobName}
                                Batch={job.batch}
                                Branch={job.branch}
                                Stipend={job.stipend}
                                MinSalary={job.minSalary}
                                MaxSalary={job.maxSalary}
                                JobLocation={job.companyLocation}
                                Requirements={job.instructions}
                                JobDescription={job.jobDescription}
                                jobDescPDF={job.jobDescriptionFile}
                                companyWebsite={job.companyWebsite}
                                status={user?.additionalDetails?.jobEnrolled?.includes(job._id) ? JOB_STATUS.PUBLISHED : JOB_STATUS.DRAFT}
                                btn1Handler={() => handleApplyJob(job._id)}
                                btn2Handler={handleTakeTest}
                                compbtn1={user?.additionalDetails?.jobEnrolled?.includes(job._id) ? "Edit Application" : "Apply Now"}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OnCampus;