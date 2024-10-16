import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();

  const backBtn = () => {
    navigate("/on-campus")
  }

  // Fetch a question from the API
  const fetchNextQuestion = async () => {
    try {
      const response = await axios.get('https://aptitude-api.vercel.app/Random');
      setCurrentQuestion(response.data);
      setSelectedAnswer('');
      setIsAnswerSubmitted(false);
      setCorrectAnswer(response.data.answer);
      setExplanation(response.data.explanation);
    } catch (error) {
      console.error('Error fetching question', error);
    }
  };

  // Load the first question
  useEffect(() => {
    fetchNextQuestion();
  }, []);

  // Timer effect (30 minutes countdown)
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        clearInterval(interval);
        setIsTestFinished(true); // Finish the test if time is up
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

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

  // If the test is finished, display the score
  if (isTestFinished) {
    return (
        <>
            <button onClick={backBtn} className='bg-customDarkBlue text-white w-[50px] px-3 py-3 mt-3 mx-5 rounded-full'>
                <IoMdArrowRoundBack className='text-2xl'/>
            </button>
            
            <div className="p-6 w-11/12 mx-auto bg-white mt-10 rounded-lg font mb-10">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-center font-edu-sa">Test Finished</h1>
                <p className="text-xl font-semibold mb-4 flex items-center justify-center font-edu-sa">Your Score: {score} / 30</p>
            </div>
        </>
    );
  }

  return (
    <>
        <button  onClick={backBtn} className='bg-customDarkBlue text-white w-[50px] px-3 py-3 mt-3 mx-5 rounded-full'>
            <IoMdArrowRoundBack className='text-2xl'/>
        </button>

        <div className="p-6 w-11/12 mx-auto bg-white mt-10 rounded-lg font mb-10">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center font-edu-sa">Aptitude Mock Test</h1>
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
                <div className='text-2xl font-edu-sa'>Loading Questions...</div>
            </div>
        )}
        </div>
    </>
  );
};

export default Test;
