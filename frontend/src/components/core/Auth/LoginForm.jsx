import React, { useState } from 'react'

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';


function LoginForm() {

    const [showPassword , setShowPassword] = useState(false);
    const [formData , setFormData] = useState({
        email : "",
        password : "",
    });


    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const {email , password} = formData;

    const handleOnSubmit = (event) => {
        event.preventDefault()
        // dispatch(login(email , password , navigate));
    }
    
    const handleOnChange = (event) => {
        setFormData((prevData) => ({
            ...prevData , 
            [event.target.name] : event.target.value,
        }))
    }


  return (
    <form 
    onSubmit={handleOnSubmit}
    className='flex flex-col w-full mt-6 gap-y-4'>
        <label className='w-full'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] '>
                Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
            required 
            type='email'
            name='email'
            value={email}
            onChange={handleOnChange}
            placeholder='Enter email address'
            style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
            className='w-full rounded-[0.5rem] p-[12px] '/>
        </label>
        <label className='relative'>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] '>
                Password <sup className="text-pink-200">*</sup>
            </p>
            <input
            required
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={password}
            onChange={handleOnChange}
            placeholder='Enter Password'
            style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
            className='w-full rounded-[0.5rem] p-[12px] '
            />
            <span onClick={() => setShowPassword((prev) => !prev)} 
            className='absolute right-3 top-[38px] cursor-pointer'>
                {
                    showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )
                }
            </span>
            <Link to={"/forgot-password"}>
                <p className='mt-1 ml-auto max-w-max text-xs text-customDarkBlue'>
                    Forgot Password
                </p>
            </Link>
            <button
            type='submit'
            className='w-full mt-10 rounded-[8px] bg-customDarkBlue px-[12px] py-[8px] font-medium text-white'>
                Sign In
            </button>
        </label>
    </form>
  )
}

export default LoginForm