
import React, { useState } from 'react';

const ATSScoreChecker = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [score, setScore] = useState(0);
  const [analysis, setAnalysis] = useState({});

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleCheckScore = () => {
    // TO DO: Implement ATS score checking logic here
    // For demonstration purposes, a random score is generated
    const randomScore = Math.floor(Math.random() * 100);
    setScore(randomScore);

    // Example analysis data
    const analysisData = {
      keywordMatch: '80%',
      formattingScore: '90%',
      readabilityScore: '85%',
    };
    setAnalysis(analysisData);
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
        ATS Score Checker
      </h2>
      <input
        type="file"
        accept=".pdf, .docx, .doc"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent focus:ring-2 focus:ring-customDarkBlue"
      />
      {resumeFile && (
        <button
          onClick={handleCheckScore}
          className="px-4 flex items-center gap-2 w-fit py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue mt-4"
        >
          Check ATS Score
        </button>
      )}
      {score > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2">ATS Score: {score}%</h3>
          <ul>
            {Object.keys(analysis).map((key) => (
              <li key={key} className="text-gray-600">
                <span className="font-bold">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {analysis[key]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ATSScoreChecker;

