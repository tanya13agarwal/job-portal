import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import CampusNav from '../../../../common/CampusNav';
import TestCard from '../../../../common/TestCard';

const MockTest = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

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
    navigate(`/test?api=${encodeURIComponent(api)}`); // use navigate instead of history.push
  };

  return (
    <>
      <div className='mt-10 mb-10 flex flex-col gap-4'>
        <div className='text-4xl mb-4 font-bold flex items-center justify-center'>Mock Test</div>
        <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between'>
          {topics.map((topic) => (
            // <div
            //   key={topic.name}
            //   className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100"
            //   onClick={() => startTest(topic.api)}
            // >
            //   <h2 className="text-xl font-bold">{topic.name}</h2>
            // </div>
            <TestCard
            heading = {topic.name}
            // desc = {topic?.desc}
            desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eos, vel saepe voluptates adipisci alias amet quaerat ea officia voluptatum? Beatae natus distinctio molestiae, tempore atque minima corrupti eaque. Veritatis?"
            link = {`/test?api=${encodeURIComponent(topic.api)}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MockTest;
