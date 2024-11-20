
import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const templates = [
  { id: 1, name: 'Modern', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874788/JobPortal/resumeTemplatePreview/resumePreview4_phyacg.jpg', description: 'A sleek and modern template' , url:'https://www.overleaf.com/latex/templates/deedy-resume-reversed/hqnwfgjbbddt'},
  { id: 2, name: 'Classic', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874787/JobPortal/resumeTemplatePreview/resumePreview2_suolhb.jpg', description: 'A traditional and timeless template', url: 'https://www.overleaf.com/latex/templates/rendercv-sb2nov-theme/gdspgtsnfncm'},
  { id: 3, name: 'Creative', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874787/JobPortal/resumeTemplatePreview/resumePreview3_o3ngsr.jpg', description: 'A unique and creative template', url: 'https://www.overleaf.com/latex/templates/nit-patna-resume-template-v2-dot-1/hkwrzcwrfgqj'},
  { id: 4, name: 'Minimalist', image: 'https://res.cloudinary.com/dxo2kr9bz/image/upload/v1731874787/JobPortal/resumeTemplatePreview/resumePreview1_bivptd.jpg', description: 'A simple and minimalist template', url: 'https://www.overleaf.com/latex/templates/yuans-resume-template/hzkxnqxyfgnr'},
];

const ChooseTemplate = () => {
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
        Choose a Template
    </h2>
    <p className="text-gray-700 text-center">
      Here are popular ATS-friendly resume templates, designed to help you create a professional resume and increase your chances of getting shortlisted easily.
    </p>
    <div className="p-6 border-gray-200 rounded-lg ">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {templates.map((template) => (
          <div key={template.id} className="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-all duration-200">
            <img src={template.image} alt={template.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{template.name}</h3>
            <p className="text-gray-600">{template.description}</p>
            <Link
              to={`${template.url}`}
              className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue mt-4"
            >
              Select Template
            </Link>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default ChooseTemplate;
