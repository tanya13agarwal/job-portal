import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../../../../assets/images/logo.jpeg';

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [explanation, setExplanation] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [timer, setTimer] = useState(1800); // 30 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState(false); // New state for timer activation
  const [placementPercentage, setPlacementPercentage] = useState(0); // New state for placement percentage

  const [improvementRemarks, setImprovementRemarks] = useState(""); 
  const [recommendations, setRecommendations] = useState("");

  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const navigate = useNavigate();
  const params = useParams();


  const backBtn = () => {
    navigate(-1)
  }
  const topics = {
    'mixture-and-alligation': 'https://aptitude-api.vercel.app/MixtureAndAlligation',
    'age': 'https://aptitude-api.vercel.app/Age',
    'permutation-and-combination': 'https://aptitude-api.vercel.app/PermutationAndCombination',
    'profit-and-loss': 'https://aptitude-api.vercel.app/ProfitAndLoss',
    'pipes-and-cisterns': 'https://aptitude-api.vercel.app/PipesAndCistern',
    'speed-time-distance': 'https://aptitude-api.vercel.app/SpeedTimeDistance',
    'calendars': 'https://aptitude-api.vercel.app/Calendar',
    'simple-interest': 'https://aptitude-api.vercel.app/SimpleInterest',
  };
  
 // Ensure the key exists in the topics object
 const topicKey = params.topic.trim(); // Handle any whitespace issues
 const selectedTopicUrl = topics[topicKey];

  // Fetch a question from the API and start the timer
  const fetchNextQuestion = async () => {
    try {
      const response = await axios.get(selectedTopicUrl || 'https://aptitude-api.vercel.app/Random');
      setCurrentQuestion(response.data);
      setSelectedAnswer('');
      setIsAnswerSubmitted(false);
      setCorrectAnswer(response.data.answer);
      setExplanation(response.data.explanation);
      
      // Activate the timer after the first question is fetched
      if (!isTimerActive) {
        setIsTimerActive(true);
      }
    } catch (error) {
      console.error('Error fetching question', error);
    }
  };

  // Load the first question when component mounts
  useEffect(() => {
    fetchNextQuestion();
  }, []);

  // Timer effect (30 minutes countdown), only runs when timer is active
  useEffect(() => {
    let interval;
    if (isTimerActive) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(interval);
          setIsTestFinished(true); // Finish the test if time is up
          // fetchPlacementPercentage();
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  // console.log(timer);
  const fetchPlacementPercentage = async () => {
    try {
      setIsLoading(true); 
      const timeTaken = 1800 - timer; // Correctly calculate the time taken
      console.log("Score:", score);
      console.log("Time Taken:", timeTaken);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/dashboard/predict-placement`, {
        score,
        timeTaken, // Send timeTaken (not time_taken directly, adjust in backend if needed)
      });
  
      const percentage = response.data.placementPercentage;
      setPlacementPercentage(percentage);

      // Set remarks and recommendations based on percentage
      if (percentage < 20) {
        setImprovementRemarks("Needs significant improvement.");
        setRecommendations(
          "Focus on strengthening basic concepts and practice more mock tests to build confidence."
        );
      } else if (percentage >= 20 && percentage < 40) {
        setImprovementRemarks("Below average performance.");
        setRecommendations(
          "Revise key topics and attempt topic-specific practice sessions. Analyze your mistakes carefully."
        );
      } else if (percentage >= 40 && percentage < 60) {
        setImprovementRemarks("Average performance.");
        setRecommendations(
          "Consistent practice is essential. Work on time management and try solving questions faster."
        );
      } else if (percentage >= 60 && percentage < 80) {
        setImprovementRemarks("Good performance!");
        setRecommendations(
          "Keep up the good work! Aim to polish weaker sections to reach top performance levels."
        );
      } else {
        setImprovementRemarks("Excellent performance!");
        setRecommendations(
          "Maintain your high standards. Keep practicing and focus on advanced problems to stay ahead."
        );
      }

    } catch (error) {
      console.error('Error predicting placement percentage:', error);
    }finally {
      setIsLoading(false); // End loading state
    }
  };
  
  // Trigger fetchPlacementPercentage when the test is finished
  useEffect(() => {
    if (isTestFinished) {
      console.log("Timer at test end:", timer);
      fetchPlacementPercentage();
    }
  }, [isTestFinished]); // Add `timer` as a dependency
  
  // Handle answer selection and auto-submit
  const handleAnswerChange = (option) => {
    setSelectedAnswer(option);
    setIsAnswerSubmitted(true);

    if (option === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (questionCount < 29) { // Since there are 30 questions
      setQuestionCount((prevCount) => prevCount + 1);
      fetchNextQuestion();
    } else {
      setIsTestFinished(true); // Finish the test after 30 questions
    }
  };

  // Format time in mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (isLoading) {
    return (
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        <img src={logo} alt="logo" />
        <p className='font-semibold text-2xl mt-6'>Please Wait while the page is loading...</p>
      </div>
    );
  }

  // If the test is finished, display the score and placement percentage
  if (isTestFinished) {
    return (
      <>
        <button onClick={backBtn} className="bg-customDarkBlue text-white w-[50px] px-3 py-3 mt-3 rounded-full hover:scale-95 active:scale-105 transition-all duration-200">
          <IoMdArrowRoundBack className="text-2xl" />
        </button>

        <div className="p-6 mx-auto bg-white mt-10 rounded-lg font mb-10 shadow-lg">
          <h1 className="text-3xl font-extrabold my-6 text-center text-customDarkBlue">Test Finished!</h1>
          
          <div className="my-3 p-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300">
  <p className="text-2xl font-semibold text-customDarkBlue">
    Your Score: <span className="text-green-600">{score} / 30</span>
  </p>
  <p className="text-lg text-gray-600 mt-3">
    Your score reflects your current performance in key placement areas. Keep improving to increase your chances of securing a placement.
  </p>
</div>

<div className="my-3 p-6 mt-8 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300">
  <p className="text-lg text-gray-600 mb-3">
    Based on your score, let's calculate how strong your placement prospects are in top companies.
  </p>
  <p className="text-2xl text-customDarkBlue font-bold">
    {placementPercentage !== null
      ? `Your Placement Probability: ${placementPercentage.toFixed(2)}%`
      : "Calculating..."}
  </p>
</div>


          {placementPercentage !== null && (
  <div className="mb-6 mt-6 px-6 py-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition-all duration-300">
    <div className="mb-12">
      <p className="text-sm text-gray-500 uppercase tracking-wide">
        Areas of Improvement Identified
      </p>
      <hr className="my-2 border-gray-300" />
      <p className="text-black font-semibold">{improvementRemarks}</p>
    </div>

    <div>
      <p className="text-sm text-gray-500 uppercase tracking-wide">
        Suggested Actions for Better Results
      </p>
      <hr className="my-2 border-gray-300" />
      <p className="text-black font-semibold">{recommendations}</p>
    </div>
  </div>
)}


<div className="mt-12 text-start flex flex-col gap-4 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
  <div className="text-gray-700 text-lg leading-relaxed">
    <p>
      Maximize your preparation for the placement season with our curated resources! Explore a wide range of on-campus and off-campus certification courses, along with expertly designed study materials tailored to key placement topics. 
    </p>
  </div>
  <button
    onClick={() => navigate("/dashboard/courses")}
    className="self-start px-6 py-3 bg-customDarkBlue text-white rounded-md shadow-md hover:bg-transparent hover:text-customDarkBlue border hover:border-customDarkBlue transition-all duration-200"
  >
    Browse Certifications & Resources
  </button>
</div>

        </div>
      </>
    );
  }


  return (
    <>
        <button  onClick={backBtn} className='bg-customDarkBlue text-white w-[50px] px-3 py-3 mt-3 rounded-full hover:scale-95 active:scale-105 transition-all duration-200'>
            <IoMdArrowRoundBack className='text-2xl'/>
        </button>

        <div className="p-6  mx-auto bg-white mt-10 rounded-lg font mb-10">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Aptitude Mock Test</h1>
        <div className='flex items-center justify-between my-4'>
            <div className=" mb-4 bg-transparent border border-customDarkBlue px-4 py-2 rounded-md">
                <span className="text-lg">Question {questionCount + 1} / 30</span>
            </div>
            <div className=" mb-4 bg-customDarkBlue text-white px-4 py-2 rounded-md">
                <span className="text-lg">Time Left: {formatTime(timer)}</span>
            </div>
        </div>
        {currentQuestion ? (
            <div>
            <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>
            <div className="mb-4">
                {currentQuestion.options.map((option) => (
                <label
                    key={option}
                    className={`block p-2 rounded  ${
                    isAnswerSubmitted
                        ? option === correctAnswer
                        ? 'bg-green-200 border-green-500' // Highlight correct answer in green
                        : option === selectedAnswer && option !== correctAnswer
                        ? 'bg-red-200 border-red-500' // Highlight incorrect selection in red
                        : ''
                        : ''
                    }`}
                >
                    <input
                    type="radio"
                    name="answer"
                    value={option}
                    onChange={() => handleAnswerChange(option)}
                    disabled={isAnswerSubmitted}
                    className="mr-2"
                    />
                    {option}
                </label>
                ))}
            </div>

            {isAnswerSubmitted && (
                <div className="mt-4">
                <p className="text-lg font-semibold">Explanation:</p>
                <p className="text-gray-700">{explanation}</p>
                </div>
            )}

            {isAnswerSubmitted && (
                <button
                onClick={handleNextQuestion}
                className="px-4 mt-2 py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
                >
                Next Question
                </button>
            )}
            </div>
        ) : (
            <div className=' flex flex-col gap-3 items-center justify-center text-black'>
                <div className='spinner'></div>
                <div className='text-2xl'>Loading Questions...</div>
            </div>
        )}
        </div>
    </>
  );
};

export default Test;