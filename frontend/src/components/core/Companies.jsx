import React, { useEffect, useState } from 'react';
import { fetchAllCompanyDetails } from '../../services/operations/companyDetailsAPI';
import logo from '../../assets/images/logo.jpeg';

const Companies = () => {

    const [loading ,  setLoading] = useState()
    const [allCompany ,  setAllCompany] = useState([])
    const [allJob ,  setAllJob] = useState([])

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

    const handlePastRecruitersClick = () => {
        window.location.href = 'https://www.akgec.ac.in/placements/our-recruiters/';
      };

  return (
    <div className="w-11/12 mx-auto p-4 md:p-6 lg:p-8 mt-8">
        {
            loading ? (
              <div className='w-full h-screen flex flex-col items-center justify-center'>
                <img src={logo} alt="logo"/>
                <p className='font-semibold text-2xl mt-6'>Please Wait while the page is loading...</p>
              </div>
          ) : (
            <>
                <h1 className="text-4xl font-bold mb-10 text-center">Companies</h1>
            
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {allCompany.map((company) => (
                    <div key={company.id} className="text-center bg-white rounded shadow-md py-6 px-10 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                        <img src={company.thumbnail} alt={company.companyName} className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{company.companyName}</h2>
                        <p className="text-gray-600">Average Package: <span className="font-bold text-green-600">{company?.jobs?.minSalary ? `${company?.jobs[0]?.minSalary} - ` : ""} {company?.jobs[0]?.maxSalary}</span></p>
                    </div>
                    ))}
                </div>

                <div className='mt-10 flex items-center justify-center gap-3'>
                    <p>Want to see where your Alumnis are recruited?</p>
                    <button
                    onClick={handlePastRecruitersClick}
                    className=" hover:bg-customDarkBlue text-customDarkBlue rounded hover:text-white px-4 py-2 border border-customDarkBlue transition-all duration-300 hover:scale-105"
                    >
                        Past Recruiters
                    </button>
                </div>
            </>
          )
        }
    </div>
  );
};

export default Companies;

