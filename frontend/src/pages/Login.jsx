import React, { useState } from 'react'
import loginImg from "../assets/images/login.webp"
import Template from '../components/core/Auth/Template';
import { useSelector } from 'react-redux';
import logo from "../assets/images/logo.jpeg"


const Login = () => {
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
                title = "Hello Trailblazers!"
                description1="Log in and seize new opportunities with OpportuNest -"
                description2="Let’s continue your journey to success"
                image = {loginImg}
                fromType = "login" 
                description3 = "New User?"
                buttonText = "Signup"
            />
        )
      }
    </div>
    )
}

export default Login