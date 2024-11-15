import React from 'react'
import Template from '../components/core/Auth/Template';
import signupImg from "../assets/images/signup.jpeg"
import { useSelector } from 'react-redux';
import logo from "../assets/images/logo.jpeg"


const Signup = () => {
  const {loading} = useSelector((state) => state.auth);
  return (
    <div>
      {
        loading ? (
          <div className='w-full h-screen flex flex-col items-center justify-center'>
            <img src={logo} alt="logo"/>
            <p className='font-semibold text-2xl mt-6'>Please Wait while the page is loading...</p>
          </div>
        ) : (
          <Template
          title="Where Every Click Leads to Your Dream Job!"
          description1="Join OpportuNest today and turn opportunities into success-"
          description2="Your future starts here!"
          image={signupImg}
          className = "h-full md:h-3/5 lg:h-[70%]"
          classSet = "flex items-center justify center"
          formType="signup"
          description3 = "Already have an account?"
          buttonText = "Login"
        />
        )
      }
    </div>
  )
}

export default Signup