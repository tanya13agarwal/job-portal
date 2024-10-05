import React from 'react'
import Template from '../components/core/Auth/Template';
import signupImg from "../assets/images/signup.jpeg"


const Signup = () => {
  return (
    <div>
      <Template
      title="Where Every Click Leads to Your Dream Job!"
      description1="Join OpportuNest today and turn opportunities into success-"
      description2="Your future starts here!"
      image={signupImg}
      className = "h-full md:h-3/5 lg:h-[70%]"
      classSet = "flex items-center justify center"
      formType="signup"
    />
    </div>
  )
}

export default Signup