import React from 'react'

import headcoordinator from '../../assets/images/headcoordinator.jpg';
import tnpHead from '../../assets/images/tnpHead.jpg';
import assistant from '../../assets/images/assistant.jpg';
import dg from '../../assets/images/dg1.jpg';

const Testimonials =()=>{
    return (
        <div id="testimonials" className='flex  flex-col p-10 items-center gap-4'>
            <div className='bg-white rounded-lg p-10 '>
                <div class="mx-auto max-w-screen-sm  text-center mb-2 ">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-500">Testimonials</h2>
                    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Hear from our management and faculties about outstanding placements records</p>
                </div> 
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between mb-10">
                    <div class="cursor-pointer bg-customDarkBlue border  border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <a href="" >
                            <img class="rounded-t-lg " src={headcoordinator} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Nirmal Joshi</h5>
                            </a>
                            <p class="mb-3 font-semibold text-xl text-gray-300 dark:text-gray-400">Head Coordinator</p>
                            <p class="mb-3 font-normal text-sm text-gray-300 dark:text-gray-400">The synergy between our students and placement support team yields remarkable placement records. Employers 
                            commend our graduates' adaptability and competence, reinforcing our standing as a top choice for recruiting top-tier talent </p>
                        </div>
                    </div>                  
                    <div class=" bg-customDarkBlue border  border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className=''>
                            <img class="rounded-t-lg" src={tnpHead} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Dr. Rakesh Srivastava</h5>
                            </a>
                            <p class="mb-3 font-semibold text-xl text-gray-300 dark:text-gray-400">Dean-Training & Placement</p>
                            <p class="mb-3 font-normal text-sm text-gray-300 dark:text-gray-400">
                            AKGEC is dedicated to providing a strong foundation in science, technology, and human values, with a commitment to transforming students into professionals and technocrats who excel in their fields. This focus distinguishes AKGEC from other institutions. </p>
                        </div>
                    </div>

                    <div class=" bg-customDarkBlue border  border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg " src={dg} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">R.K. Agarwal</h5>
                            </a>
                            <p class="mb-3 font-semibold text-xl text-gray-300 dark:text-gray-400">Director general</p>
                            <p class="mb-3 font-normal text-sm text-gray-300 dark:text-gray-400">Our strong collaboration between students and the placement team consistently delivers impressive results. Employers praise our graduates for their versatility and skills, solidifying our reputation as a premier source for top talent recruitment.</p>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </div>
    )
};
export default Testimonials;






