import React from 'react';
import Card from './Card';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonial = (props) => {

  let reviews = props.reviews;
  const [index, setIndex] = useState(0); // index tells which review is currently accessed on display

  function leftShiftHandler() {
    if( index-1 < 0 ){
      setIndex(reviews.length - 1);
    }
    else{
      setIndex(index-1);
    }
  }

  function rightShiftHandler() {
    if(index+1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }

  // using this button randomly any testimonial will be displayed : we need between 0 to reviews.length
  function surpriseHandler() {
    // value needed in int
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);   
  }
 
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">

      {/* Card me abhi ek hi review access kr rhe */}
      <Card review={reviews[index]}></Card>

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}>
          <FiChevronLeft />
        </button>
        <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}>
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        onClick={surpriseHandler}> Surprise Me
        </button>
      </div>

 
    </div>
  )
}

export default Testimonial
