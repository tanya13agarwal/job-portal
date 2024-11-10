// import React, { useRef } from 'react';
// import useOnClickOutside from '../../hooks/useOnClickOutside';

// const DescriptionModal = (modalData) => {
//     const ref = useRef(null);
//     useOnClickOutside(ref, modalData.btn2Handler);
//     console.log(modalData.branch);
//     return (
//         <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
//             <div ref={ref} className='w-11/12 max-w-[650px] rounded-lg shadow-lg border border-richblack-50 bg-white p-6 h-fit'>

//                 <h2 className='text-2xl font-semibold mb-4 text-center'>
//                     {modalData.compName}
//                 </h2>
                
                
//                 <div className='overflow-x-auto mb-6'>  
//                     <table className='min-w-full text-left border-collapse border border-gray-300'>
//                         <tbody>
                          
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Campus Date</th>
//                                 <td className='border border-gray-300 px-4 py-2'>Will be communicated later</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Job Role</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData.jobRole}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Eligible Batch</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData?.batch ? modalData?.batch.join(', ') : "Not specified"}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Eligible Branch</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData?.branch ? modalData?.branch.join(', ') : "Not specified"}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Stipend</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData.stipend}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>CTC</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData.MinSalary ? `${modalData.MinSalary} -`  : ""} {modalData.MaxSalary}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Requirements</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData?.requirements ? modalData?.requirements.join(', ') : "No requirements specified"}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Location</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData.location}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Job Description</th>
//                                 <td className='border border-gray-300 px-4 py-2'>{modalData.JobDescription}</td>
//                             </tr>
//                             <tr>
//                                 <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Website</th>
//                                 <td className='border border-gray-300 px-4 py-2'><a className="text-blue-600" href={modalData.companyWebsite}>{modalData.compName}</a></td>
//                             </tr>

//                         </tbody>
//                     </table>
//                 </div>
            
                
//                 <div className='flex items-center gap-x-4 mt-6'>
//                     <a
//                         href={modalData?.btn1Handler}
//                         target='_blank'
//                         rel='noopener noreferrer'
//                         className='px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue'
//                     >
//                         {modalData?.btn1Text}
//                     </a>
//                     <button 
//                         onClick={modalData?.btn2Handler}
//                         className='active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-white px-4 py-2 rounded'
//                     >
//                         {modalData?.btn2Text}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DescriptionModal;
import React, { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const DescriptionModal = (modalData) => {
    const ref = useRef(null);
    useOnClickOutside(ref, modalData.btn2Handler);
    console.log(modalData.branch);

    return (
        <div className='fixed inset-0 z-[1000] grid place-items-center bg-white bg-opacity-10 backdrop-blur-sm'>
            {/* Outer Modal Wrapper */}
            <div ref={ref} className='w-11/12 max-w-[650px] rounded-lg shadow-lg border border-richblack-50 bg-white p-6 h-fit'>
                {/* Fixed modal header */}
                <h2 className='text-2xl font-semibold mb-4 text-center'>
                    {modalData.compName}
                </h2>

                {/* Scrollable content area */}
                <div className='overflow-y-auto mb-6 h-[60vh]'>
                    <table className='min-w-full text-left border-collapse border border-gray-300'>
                        <tbody>
                            {/* Table content here */}
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Campus Date</th>
                                <td className='border border-gray-300 px-4 py-2'>Will be communicated later</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Job Role</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData.jobRole}</td>
                            </tr>
                            {/* Add other rows as needed */}
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Eligible Batch</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData?.batch ? modalData?.batch.join(', ') : "Not specified"}</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Eligible Branch</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData?.branch ? modalData?.branch.join(', ') : "Not specified"}</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Stipend</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData.stipend}</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>CTC</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData.MinSalary ? `${modalData.MinSalary} -`  : ""} {modalData.MaxSalary}</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Requirements</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData?.requirements ? modalData?.requirements.join(', ') : "No requirements specified"}</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Location</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData.location}</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Job Description</th>
                                <td className='border border-gray-300 px-4 py-2'>{modalData.JobDescription}</td>
                            </tr>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2 bg-gray-200'>Website</th>
                                <td className='border border-gray-300 px-4 py-2'><a className="text-blue-600" href={modalData.companyWebsite}>{modalData.compName}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
                {/* Footer actions */}
                <div className='flex items-center gap-x-4 mt-6'>
                    <a 
                        href={modalData?.btn1Handler}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='cursor-pointer text-nowrap px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue'
                    >
                        {modalData?.btn1Text}
                    </a>
                    <button 
                        onClick={modalData?.btn2Handler}
                        className='cursor-pointer active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-white px-4 py-2 rounded text-nowrap'
                    >
                        {modalData?.btn2Text}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DescriptionModal;
