
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const samples = [
  { id: 1, name: 'Gaurav Singh', company: 'GovTech', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731876464/JobPortal/resumeSample/preview/SamplePreview1_douqfa.jpg', file: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874620/JobPortal/resumeSample/resumeSample1_yep9iq.pdf' },
  { id: 2, name: 'Varun Anand', company: 'Droid', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731876464/JobPortal/resumeSample/preview/SamplePreview2_xv7mli.jpg', file: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874620/JobPortal/resumeSample/resumeSample2_uiir0k.pdf' },
  { id: 3, name: 'Sidhartha Singh', company: 'Amazon Ads', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731876463/JobPortal/resumeSample/preview/SamplePreview3_spiwia.jpg', file: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874620/JobPortal/resumeSample/resumeSample3_s1wayv.pdf' },
  { id: 4, name: 'Shivam Kumar Jha', company: 'Mercari', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731876463/JobPortal/resumeSample/preview/SamplePreview4_kubv25.jpg', file: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874620/JobPortal/resumeSample/resumeSample4_k6gbhj.pdf' },
];


const ResumeSamples = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-6'>
     <button
      onClick={() => navigate(-1)} 
      className="bg-customDarkBlue text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:scale-105 transition"
    >
      <IoMdArrowRoundBack size={20} />
    </button>
    <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
        Resume Samples
    </h2>
    <p className="text-gray-700 text-center">
      Here are resumes of our past alumni who have secured placements in reputed companies with attractive packages.
    </p>
    <div className="p-6 border border-gray-200 rounded-lg ">
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samples.map((sample) => (
          <div key={sample.id} className="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-all duration-200">
            <img src={sample.image} alt={sample.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{sample.name}</h3>
            <p className="text-gray-600">Company : {sample.company}</p>
            <a
              href={sample.file}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue mt-4"
            >
              View Sample
            </a>
           
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ResumeSamples;
