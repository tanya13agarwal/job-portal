import React, { useState } from 'react';
import indust from "../../data/industries";

const IndustryList = ({ setAnchorEl , option , setIndex , props}) => {
  // const [subList, setSubList] = useState(Array(indust.industries.length).fill(false));

  const toggleSubList = (index) => {
    // setSubList((prev) => {
    //   const newList = [...prev];
    //   newList[index] = !newList[index];
    //   return newList;
    // });
    setAnchorEl((prevAnchorEl) => (prevAnchorEl === index ? null : index));
    setIndex(index)
  };

  return (
    <div className=' shadow-lg p-2'>
      {indust.industries.map((list, index) => (
        <div key={index} className='flex gap-4 mb-2 relative'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-1'>
                <input type='checkbox' className='w-4 h-4 ' />
                <label className=''>{list.title}</label>
            </div>
            <button onClick={() => toggleSubList(index)}>
              $
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryList;
