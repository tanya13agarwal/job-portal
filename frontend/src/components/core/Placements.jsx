// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Placements = () => {
//   const navigate = useNavigate();

//   const handleCompaniesClick = () => {
//     navigate('/companies');
//   };

//   const handlePlacementRecordsClick = () => {
//     navigate('/placement-records');
//   };

//   return (
//     <div id="placements" className='p-10'>
//       <div className='border-white flex flex-col items-center gap-6 p-6'>
//         <p className='text-4xl font-bold'>Placements</p>
//         <div className='flex items-center gap-10 justify-center rounded-full p-2'>
//           <button
//             onClick={handleCompaniesClick}
//             className='hover:bg-customDarkBlue rounded hover:text-white px-2 py-1 border border-customDarkBlue transition-all duration-200 hover:scale-105'
//           >
//             Companies
//           </button>
//           <a
//             href='https://akgec.almaconnect.com/'
//             target='_blank'
//             className='hover:bg-customDarkBlue hover:text-white px-2 rounded py-1 transition-all border border-customDarkBlue duration-200 hover:scale-105'
//           >
//             Alumni
//           </a>
//           <button
//             onClick={handlePlacementRecordsClick}
//             className='hover:bg-customDarkBlue rounded hover:text-white px-2 py-1 transition-all border border-customDarkBlue duration-200 hover:scale-105'
//           >
//             Placement Records
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Placements;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Placements = () => {
  const navigate = useNavigate();

  const handleCompaniesClick = () => {
    navigate('/companies');
  };

  const handlePlacementRecordsClick = () => {
    navigate('/placement-records');
  };

  return (
    <div id="placements" className="p-6 sm:p-10">
      <div className="flex flex-col items-center gap-6">
        {/* Header */}
        <p className="text-2xl sm:text-4xl font-bold">Placements</p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={handleCompaniesClick}
            className="hover:bg-customDarkBlue rounded-md hover:text-white px-4 sm:px-6 py-2 text-sm sm:text-base border border-customDarkBlue transition-all duration-200 hover:scale-105"
          >
            Companies
          </button>
          <a
            href="https://akgec.almaconnect.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-customDarkBlue rounded-md hover:text-white px-4 sm:px-6 py-2 text-sm sm:text-base border border-customDarkBlue transition-all duration-200 hover:scale-105"
          >
            Alumni
          </a>
          <button
            onClick={handlePlacementRecordsClick}
            className="hover:bg-customDarkBlue rounded-md hover:text-white px-4 sm:px-6 py-2 text-sm sm:text-base border border-customDarkBlue transition-all duration-200 hover:scale-105"
          >
            Placement Records
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placements;
