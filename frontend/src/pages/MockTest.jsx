// import React from 'react'

// const MockTest = () => {
//   return (
//     <div>MockTest</div>
//   )
// }

// export default MockTest


import React from 'react';
import { useHistory } from 'react-router-dom';

const MockTest = () => {
  const history = useHistory();

  const topics = [
    { name: 'Mixture and Alligation', api: 'https://aptitude-api.vercel.app/MixtureAndAlligation' },
    { name: 'Age', api: 'https://aptitude-api.vercel.app/Age' },
    { name: 'Permutation and Combination', api: 'https://aptitude-api.vercel.app/PermutationAndCombination' },
    { name: 'Profit and Loss', api: 'https://aptitude-api.vercel.app/ProfitAndLoss' },
    { name: 'Pipes and Cisterns', api: 'https://aptitude-api.vercel.app/PipesAndCistern' },
    { name: 'Speed Time Distance', api: 'https://aptitude-api.vercel.app/SpeedTimeDistance' },
    { name: 'Calendars', api: 'https://aptitude-api.vercel.app/Calendar' },
    { name: 'Simple Interest', api: 'https://aptitude-api.vercel.app/SimpleInterest' },
  ];

  const startTest = (api) => {
    history.push(`/test?api=${encodeURIComponent(api)}`);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <div
          key={topic.name}
          className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100"
          onClick={() => startTest(topic.api)}
        >
          <h2 className="text-xl font-bold">{topic.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default MockTest;
