
import React from 'react';
import { Link } from 'react-router-dom';

const templates = [
  { id: 1, name: 'Modern', image: 'modern-template.png', description: 'A sleek and modern template' },
  { id: 2, name: 'Classic', image: 'classic-template.png', description: 'A traditional and timeless template' },
  { id: 3, name: 'Creative', image: 'creative-template.png', description: 'A unique and creative template' },
  { id: 4, name: 'Minimalist', image: 'minimalist-template.png', description: 'A simple and minimalist template' },
];

const ChooseTemplate = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
        Choose a Template
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <div key={template.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={`/${template.image}`} alt={template.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{template.name}</h3>
            <p className="text-gray-600">{template.description}</p>
            <Link
              to={`/template/${template.id}`}
              className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue mt-4"
            >
              Select Template
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseTemplate;
