import React from 'react'

import headcoordinator from '../../assets/images/headcoordinator.jpg';
import tnpHead from '../../assets/images/tnpHead.jpg';
import assistant from '../../assets/images/assistant.jpg';
import dg from '../../assets/images/dg.jpg';

const Testimonials =()=>{
    return (
        <div id="testimonials">
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-500">Testimonials</h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Hear from our management and faculties about outstanding placements records</p>
            </div> 
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          
                

                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={headcoordinator} alt="Bonnie Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Nirmal Joshi</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Head Coordinator</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">The synergy between our students and placement support team yields remarkable placement records. Employers 
                            commend our graduates' adaptability and competence, reinforcing our standing as a top choice for recruiting top-tier talent</p>
                        
                    </div>
                </div> 
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={tnpHead} alt="Jese Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Dr. Rakesh Srivastava</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Dean-Training & Placement</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">AKGEC has established itself as an institution par excellence, dedicated to provide students with a 
                            strong scientific, technical and humanistic foundation. What distinguishes AKGEC from other institutions is the unswerving commitment towards 
                              transform students into professionals and technocrats who will stand tall amongst the crowd </p>
                        
                    </div>
                </div> 
                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={assistant} alt="Michael Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Rajesh Kumar Upadhyay</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Placement Asst</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Consistent excellence in placements reflects our institution's commitment to nurturing employable talent. Employers consistently laud our graduates for their skills and readiness for the workforce, affirming our status as a preferred recruitment hub. </p>
                       
                    </div>
                </div> 

                <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-white dark:border-gray-300">
                    <a href="#">
                        <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={dg} alt=""/>
                    </a> 
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600">
                            <a href="#">Rk Agarwal</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">Director general</span>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Our strong collaboration between students and the placement team consistently delivers impressive results. Employers praise our graduates for their versatility and skills, solidifying our reputation as a premier source for top talent recruitment.</p>
                        
                    </div>
                </div> 
                 
            </div>  
        </div>
      </section>
        </div>
    )
};
export default Testimonials;
