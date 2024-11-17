// import React from 'react'

// const Team = () =>{
//     return (
//         <>
//         <section id = "team" className='flex flex-col p-10 items-center gap-4'>
//         <div class="bg-white p-8 rounded-lg">
//             <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//                 <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-500">Team</h2>
//                 <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Meet the talented people behind the scenes who brought this project to life.</p>
//             </div> 
//             <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          
//                 <div class="items-center bg-customDarkBlue text-white rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    
//                     <div class="p-5">
//                         <h3 class="text-2xl font-bold tracking-tight  dark:text-gray-600">
//                             <a href="#">Tanya Agarwal</a>
//                         </h3>
//                         <span class="text-gray-300 text-lg mt-2 dark:text-gray-400">CSE</span>
//                         <p class="mt-3 mb-4 font-light text-gray-300 dark:text-gray-400">She integrated AI features into the website, including machine learning models that power personalized recommendations and smart automation. Her work enhances user experience by providing intelligent features such as predictive analytics and chatbot services.</p>
                        
//                     </div>
//                 </div> 
//                 <div class="items-center bg-customDarkBlue rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    
//                     <div class="p-5">
//                         <h3 class="text-2xl font-bold tracking-tight text-white dark:text-gray-600">
//                             <a href="#">Saumya Sachan</a>
//                         </h3>
//                         <span class="text-gray-300 text-xl mt-2 dark:text-gray-400">CSE</span>
//                         <p class="mt-3 mb-4 font-light text-gray-300 dark:text-gray-400">She is responsible for bringing the website to life through responsive design and interactive elements using HTML, CSS, and JavaScript. She ensures that users experience a seamless and engaging interface</p>
                        
//                     </div>
//                 </div> 
//                 <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    
//                     <div class="p-5">
//                         <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
//                             <a href="#">Chandni Kalwani</a>
//                         </h3>
//                         <span class="text-gray-500 dark:text-gray-400">CSE</span>
//                         <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">She has conducted thorough testing of the website,ensuring that all features work as intended, and providing feedback to the development team.She also handled the UI/UX portion of website</p>
                       
//                     </div>
//                 </div> 

//                 <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    
//                     <div class="p-5">
//                         <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
//                             <a href="#">Divyanshu Pathak</a>
//                         </h3>
//                         <span class="text-gray-500 dark:text-gray-400">CSE</span>
//                         <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">He handled the entire backend of the website, including database management, APIs, and server-side logic using Python and Django. His work ensures the website's data is stored securely and served efficiently</p>
                        
//                     </div>
//                 </div> 
                 
//             </div>  
//         </div>
//       </section>

//         </>
//     )
// };

// export default Team;


import React from 'react';
import teamDetails from '../../utils/teamDetails'
import TeamDetails from "../core/TeamDetails"

const Team = () => {
  return (
    <div  id = "team" className='flex  flex-col  items-center gap-4'>
      <div class="w-full flex items-center justify-center flex-col p-8 rounded-lg">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Team</h1>
        <div className="bg-customDarkBlue h-[4px] w-1/5 mt-1 mx-auto"></div>
        <TeamDetails reviews={teamDetails}></TeamDetails>
      </div>
      </div>

    </div>
  );
}

export default Team;