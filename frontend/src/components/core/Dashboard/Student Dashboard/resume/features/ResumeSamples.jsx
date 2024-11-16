
import React from 'react';
import { Link } from 'react-router-dom';

const samples = [
  { id: 1, name: 'John Doe', college: 'Computer Science', image: 'john-doe.png', file: 'john-doe.pdf' },
  { id: 2, name: 'Jane Smith', college: 'Engineering', image: 'jane-smith.png', file: 'jane-smith.pdf' },
  { id: 3, name: 'Bob Johnson', college: 'Business Administration', image: 'bob-johnson.png', file: 'bob-johnson.pdf' },
  { id: 4, name: 'Alice Brown', college: 'Design', image: 'alice-brown.png', file: 'alice-brown.pdf' },
];

const ResumeSamples = () => {
  return (
    <div>
    <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
        Resume Samples
    </h2>
    <p className="mb-14 text-gray-700">
      Here are resumes of our past alumni who have secured placements in reputed companies with attractive packages.
    </p>
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {samples.map((sample) => (
          <div key={sample.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={`/${sample.image}`} alt={sample.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{sample.name}</h3>
            <p className="text-gray-600">{sample.college}</p>
            <a
              href={`/${sample.file}`}
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
