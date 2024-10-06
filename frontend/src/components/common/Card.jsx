import React from 'react'

const Card = ({image , heading , para , link}) => {
  return (
    <div>
        
        <a href={link} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 hover:scale-105 transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-black dark:text-white text-nowrap">{heading}</h5>
                <p class="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">{para}</p>
            </div>
        </a>

    </div>
  )
}

export default Card