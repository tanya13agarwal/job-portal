import React from 'react';
import { useNavigate } from 'react-router-dom';
import CampusNav from '../../../../common/CampusNav';
import TestCard from '../../../../common/TestCard';

const MockTest = () => {
  const navigate = useNavigate();

  const topics = [
    {
      name: 'Mixture and Alligation',
      id: 'mixture-and-alligation',
      api: 'https://aptitude-api.vercel.app/MixtureAndAlligation',
      desc: 'Test your skills on mixing solutions or ingredients to find the final concentration. Understand the concepts of alligation rule and weighted average.'
    },
    {
      name: 'Age',
      id: 'age',
      api: 'https://aptitude-api.vercel.app/Age',
      desc: 'Practice problems based on age calculations. Solve questions involving present, past, and future ages of individuals.'
    },
    {
      name: 'Permutation and Combination',
      id: 'permutation-and-combination',
      api: 'https://aptitude-api.vercel.app/PermutationAndCombination',
      desc: 'Learn the basics of counting principles. Solve problems on arranging items and selecting groups with different conditions.'
    },
    {
      name: 'Profit and Loss',
      id: 'profit-and-loss',
      api: 'https://aptitude-api.vercel.app/ProfitAndLoss',
      desc: 'Master the concepts of cost price, selling price, and discounts. Calculate profit or loss percentage in various business scenarios.'
    },
    {
      name: 'Pipes and Cisterns',
      id: 'pipes-and-cisterns',
      api: 'https://aptitude-api.vercel.app/PipesAndCistern',
      desc: 'Solve problems involving filling and emptying of tanks using multiple pipes. Understand the efficiency of pipes working together or individually.'
    },
    {
      name: 'Speed Time Distance',
      id: 'speed-time-distance',
      api: 'https://aptitude-api.vercel.app/SpeedTimeDistance',
      desc: 'Practice questions on calculating speed, time, and distance. Learn concepts of relative speed, average speed, and different types of motion.'
    },
    {
      name: 'Calendars',
      id: 'calendars',
      api: 'https://aptitude-api.vercel.app/Calendar',
      desc: 'Solve problems related to day, date, and month calculations. Understand concepts like leap year, odd days, and determining the day of the week.'
    },
    {
      name: 'Simple Interest',
      id: 'simple-interest',
      api: 'https://aptitude-api.vercel.app/SimpleInterest',
      desc: 'Learn to calculate interest earned or paid over a period of time. Understand the basic formula for simple interest and its applications in financial problems.'
    },
  ];

  const startTest = (api) => {
    navigate(`/test?api=${encodeURIComponent(api)}`);
  };

  return (
    <>
      <div className='mb-10 flex flex-col gap-4'>
        <div className='text-4xl mb-4 flex items-center justify-center'>Mock Test</div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between'>
          {topics.map((topic) => (
            <TestCard
              heading={topic.name}
              desc={topic.desc}
              link={`on-campus/test/${topic.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MockTest;
