import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';

import { sendotp } from '../../../services/operations/authAPI';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from '../../../utils/accoutnType';
import Tab from './Tab';

import { setSignupData } from '../../../slices/authSlice';

const SignupForm = () => {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const signupData = {
      ...formData,
      accountType,
    };

    // Setting signup data to state to use after OTP verification
    dispatch(setSignupData(signupData));

    // Send OTP to user for verification
    if (signupData.accountType === "Admin") {
      navigate("/admin");
    } else if (signupData.accountType === "Placement") {
      navigate("/placement");
    } else {
      dispatch(sendotp(email, navigate));
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  // Data to pass to Tab component
  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Placement",
      type: ACCOUNT_TYPE.PLACEMENT_CELL,
    },
    {
      id: 3,
      tabName: "Admin",
      type: ACCOUNT_TYPE.ADMIN,
    },
  ];

  return (
    <div>
      {/* Tab with white background */}
      <div className="bg-white py-3 px-3 rounded-xl shadow-md flex flex-wrap justify-center gap-5 mt-4">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setAccountType(tab.type)}
            className={`px-4 py-2 rounded-lg font-medium ${
              accountType === tab.type
                ? "bg-customDarkBlue text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            style={{
              minWidth: "120px",
              transition: "transform 0.2s",
            }}
          >
            {tab.tabName}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleOnSubmit} className="w-full flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col md:flex-row md:items-center gap-x-4">
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
              First Name <span className="text-pink-600">*</span>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
              className="w-full rounded-[0.5rem] p-[12px]"
            />
          </label>

          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
              Last Name <span className="text-pink-600">*</span>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
              className="w-full rounded-[0.5rem] p-[12px]"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
            Email Address <span className="text-pink-600">*</span>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            className="w-full rounded-[0.5rem] p-[12px]"
          />
        </label>

        <div className="flex flex-col md:flex-row gap-x-4">
          <label className="relative w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
              Create Password <span className="text-pink-600">*</span>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter password"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
              className="w-full rounded-[0.5rem] p-[12px] pr-10"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer z-10"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem]">
              Confirm Password <span className="text-pink-600">*</span>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm password"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
              className="w-full rounded-[0.5rem] p-[12px]"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer z-10"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-customDarkBlue py-[8px] px-[12px] font-medium text-white"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
