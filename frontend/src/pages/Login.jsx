import React, { useState } from 'react'
import loginImg from "../assets/images/login.webp"
import Template from '../components/core/Auth/Template';


const Login = () => {
    return (
        <Template
            title = "Hello Trailblazers!"
            description1="Log in and seize new opportunities with OpportuNest -"
            description2="Let’s continue your journey to success"
            image = {loginImg}
            fromType = "login" 
        />
    )
}

export default Login