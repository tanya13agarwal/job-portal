import React from 'react';

const PricingPage = () => {
  return (
    <div className="p-6 font-sans">

      
     <div className='flex justify-center items-center flex-col gap-y-4'>
     <span className='text-2xl md:text-4xl font-bold'>Smart Hiring Start Here</span>
      <span className='text-sm md:text-xl mb-2'>Explore our job posting options - each designed for diverse hiring needs and budgests.</span>
     </div>

      <div className='flex gap-x-3 justify-center items-center'>
      <span>Available balance: </span> <span className='font-bold'>0 job credits</span>
      </div>
      
      <div className='flex  justify-center items-center'>
      <h2 className="bg-teal-100 p-2 text-center text-md md:text-xl font-semibold w-[100vw] md:w-[60vw]">
        Congratulations! FIRST60 offer unlocked! Get 60% off up to ₹300 on your first job posting
        <span className="text-red-600"> Expires in 24 hours</span>
      </h2>
      </div>


    <div className='flex justify-center items-center'>
    <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row justify-center items-center mt-6 space-x-4 w-[60vw] ">
        <div className="border border-gray-300 rounded-lg bg-white p-6 shadow-md w-[90vw] md:w-1/3 relative h-[400px]">
          <div className='flex justify-between items-center'>
              <h3 className="text-2xl font-bold mb-2">Classic</h3>
             <input type="radio" name="plan" className=" w-6 h-6"/>
          </div>
        

          <p className="text-3xl font-semibold mb-4">1 Credit</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Valid for 15 days
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Job branding
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Detailed job description
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">✘</span>Smart boost via Whatsapp
              <span className="ml-1 "><img src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.png" alt="WhatsApp" className="w-9 h-9 inline"/></span>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">✘</span>Higher visibility to candidates
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">✘</span>Urgently hiring tag
            </li>
          </ul>
  
        </div>

        <div className="border border-gray-300 rounded-lg p-6 shadow-md w-[90vw] md:w-1/3 relative bg-white h-[400px]">
          <div className="absolute top-0 right-0 bg-green-400 text-white text-xs p-1 rounded-bl-md">Recommended</div>
          <div className='flex justify-between items-center'>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
             <input type="radio" name="plan" className=" w-6 h-6"/>
          </div>
          <p className="font-semibold mb-4 text-3xl">2 Credits</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Valid for 15 days
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Job branding
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Detailed job description
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Smart boost via Whatsapp
              <span className="ml-1"><img src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.png" alt="WhatsApp" className="w-9 h-9 inline"/></span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Higher visibility to candidates
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Urgently hiring tag
            </li>
          </ul>
        </div>

        <div className="border border-gray-300 bg-white rounded-lg p-6 shadow-md w-[90vw] md:w-1/3 relative h-[400px]">
          <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-xs p-1 rounded-bl-md">
            {/* <img src="rocket_icon.png" alt="Super Premium" className="w-4 h-4 inline"/> */}
          
          </div>

          <div className="absolute top-0 right-0 bg-purple-400 text-white text-xs p-1 rounded-bl-md">Super premium</div>
          <div className='flex justify-between items-center'>
              <h3 className="text-2xl font-bold mb-2">Super premium</h3>
             <input type="radio" name="plan" className=" w-6 h-6"/>
          </div>
          <p className="text-3xl font-semibold mb-4">4 Credits</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Valid for 15 days
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Job branding
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Detailed job description
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>2x Smart boost via Whatsapp
              <span className="ml-1"><img src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.png" alt="WhatsApp" className="w-9 h-9 inline"/></span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>2x Higher visibility to candidates
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>Urgently hiring tag
            </li>
          </ul>
        
        </div>
      </div>
    </div>
      <div className="mt-6 text-center">
        <input type="checkbox" id="terms" className="mr-2"/>
        <label htmlFor="terms">
          I agree to Apna's <a href="#" className="text-blue-600">Terms of Services</a> and <a href="#" className="text-blue-600">Code of Conduct</a>
        </label>
      </div>
 
    </div>
  );
};

export default PricingPage;
