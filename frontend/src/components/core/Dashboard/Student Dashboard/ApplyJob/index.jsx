import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

// import { setCourse, setStep } from "../../../../../slices/courseSlice"
import IconBtn from "../../../../common/IconBtn"
import { genders , courses , branches } from '../../Settings/EditProfile';
import { setEditApplication } from '../../../../../slices/applicationSlice';
import { applyForJob } from '../../../../../services/operations/jobDetailsAPI';
import { setUser } from '../../../../../slices/profileSlice';
// import Upload from "../Upload"
// import ChipInput from "./ChipInput"
// import RequirementsField from "./RequirementField";


export const ApplyJob = () => {

    const params = useParams()  
    console.log(params.jobId);
    
    const {
      register,
      handleSubmit,
      setValue,
      getValues,
      formState: { errors },
    } = useForm()
  
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { editApplication } = useSelector((state) => state.application)
    const [loading, setLoading] = useState(false)
    // const [editCompanyName, setEditCompanyName] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    useEffect(() => {
      console.log("data populated", user);
      if (editApplication) {
        setValue("firstName", user?.firstName)
        setValue("lastName", user?.lastName)
        setValue("email", user?.email)
        setValue("dateOfBirth", user?.additionalDetails?.dateOfBirth)
        setValue("gender", user?.additionalDetails?.gender || 'Male')
        setValue("contactNumber", user?.additionalDetails?.ph_num)
        setValue("address", user?.additionalDetails?.addr || "")
        setValue("semester", user?.additionalDetails?.sem)
        setValue("branch", user?.additionalDetails?.brch)
        setValue("cgpa", user?.additionalDetails?.cgpa)
        setValue("portfolio", user?.additionalDetails?.website)
        setValue("backlogs", user?.additionalDetails?.bklgs)
        setValue("github", user?.additionalDetails?.github)
        setValue("linkedIn", user?.additionalDetails?.linkedin)
        setValue("stackOverflow", user?.additionalDetails?.stkoflw)
        setValue("codechef", user?.additionalDetails?.codechef)
        setValue("leetcode", user?.additionalDetails?.leetcode)
        setValue("resume", user?.additionalDetails?.resume)
        setValue("course", user?.additionalDetails?.course)
      }
    }, [])
  
  
    const isFormUpdated = () => {
      const currentValues = getValues()
      console.log("changes after editing form values:", currentValues)
      if (
        currentValues.firstName !== user.firstName ||
        currentValues.lastName !== user?.lastName ||
        currentValues.email !== user?.email || 
        currentValues.dateOfBirth !== user?.additionalDetails?.dateOfBirth ||
        currentValues.gender !== user?.additionalDetails?.gender ||
        currentValues.contactNumber !== user?.additionalDetails?.ph_num ||
        currentValues.address !== user?.additionalDetails?.addr ||
        currentValues.semester !== user?.additionalDetails?.sem ||
        currentValues.branch !== user?.additionalDetails?.brch ||
        currentValues.portfolio !== user?.additionalDetails?.website ||
        currentValues.backlogs !== user?.additionalDetails?.bklgs ||
        currentValues.github !== user?.additionalDetails?.github ||
        currentValues.linkedIn !== user?.additionalDetails?.linkedin ||
        currentValues.stackOverflow !== user?.additionalDetails?.stkoflw ||
        currentValues.codechef !== user?.additionalDetails?.codechef ||
        currentValues.leetcode !== user?.additionalDetails?.leetcode ||
        currentValues.course !== user?.additionalDetails?.course ||
        currentValues.resume !== user?.additionalDetails?.resume 
      ) {
        return true
      }
      return false
    }
  
  
    // handle form submission
    const onSubmit = async (data) => {
      console.log(data)
      setLoading(true)
  
      // let result
  
      if (editApplication) {
  
        if (isFormUpdated()) {
          const currentValues = getValues()
          const formData = new FormData()
          // console.log(data)
          formData.append("userId", user._id)
          if (currentValues.firstName !== user?.firstName) {
            formData.append("firstName", data?.firstName)
          }
          if (currentValues.lastName !== user?.lastName) {
            formData.append("lastName", data?.lastName)
          }
          if (currentValues.email !== user?.email) {
            formData.append("email", data?.email)
          }
          if (currentValues.dateOfBirth !== user?.additionalDetails?.dateOfBirth) {
            formData.append("dateOfBirth", data.dateOfBirth)
          }
          if (currentValues.gender !== user?.additionalDetails?.gender) {
            formData.append("gender", data.gender)
          }
          if (currentValues.contactNumber !== user?.additionalDetails?.ph_num) {
            formData.append("ph_num", data.contactNumber)
          }
          if (currentValues.address !== user?.additionalDetails?.addr) {
            formData.append("addr", data.address)
          }
          if (currentValues.semester !== user?.additionalDetails?.sem) {
            formData.append("sem", data.semester)
          }
          if (currentValues.branch !== user?.additionalDetails?.brch) {
            formData.append("brch", data.branch)
          }
          if (currentValues.cgpa !== user?.additionalDetails?.cgpa) {
            formData.append("cgpa", data.cgpa)
          }
          if (currentValues.portfolio !== user?.additionalDetails?.website) {
            formData.append("website", data.portfolio)
          }
          if (currentValues.backlogs !== user?.additionalDetails?.bklgs) {
            formData.append("bklgs", data.backlogs)
          }
          if (currentValues.github !== user?.additionalDetails?.github) {
            formData.append("github", data.github)
          }
          if (currentValues.linkedIn !== user?.additionalDetails?.linkedin) {
            formData.append("linkedIn", data.linkedin)
          }
          if (currentValues.stackOverflow !== user?.additionalDetails?.stkoflw) {
            formData.append("stkoflw", data.stackOverflow)
          }
          if (currentValues.codechef !== user?.additionalDetails?.codechef) {
            formData.append("codechef", data.codechef)
          }
          if (currentValues.leetcode !== user?.additionalDetails?.leetcode) {
            formData.append("leetcode", data.leetcode)
          }
          if (currentValues.course !== user?.additionalDetails?.course) {
            formData.append("course", data.course)
          }
          if (currentValues.resume !== user?.additionalDetails?.resume) {
            formData.append("resume", data.resume)
          }
          if (currentValues.jobId !== params.jobId) {
            formData.append("jobId", params.jobId)
          }
          console.log("Edit Form data: ", formData)
          setLoading(true)
  
          const result = await applyForJob(formData, token)
          console.log(result)
          if (result) {
            dispatch(setUser(result))
            navigate("/dashboard/on-campus")
          }
          setLoading(false)
          } else {
            toast.error("No changes made to the form")
          }
        return
      }
  
      const formData = new FormData()
      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("email", data.email)
      formData.append("dateOfBirth", data.dateOfBirth)
      formData.append("gender", data.gender)
      formData.append("ph_num", data.contactNumber)
      formData.append("addr", data.address)
      formData.append("sem", data.semester)
      formData.append("brch", data.branch)
      formData.append("cgpa", data.cgpa)
      formData.append("website", data.portfolio)
      formData.append("bklgs", data.backlogs)
      formData.append("github", data.github)
      formData.append("linkedIn", data.linkedin)
      formData.append("stkoflw", data.stackOverflow)
      formData.append("codechef", data.codechef)
      formData.append("leetcode", data.leetcode)
      formData.append("resume", data.resume)
      formData.append("course", data.course)
      formData.append("jobId", params?.jobId)
      formData.append("userId", user._id)
  
      setLoading(true)
  
      const result = await applyForJob(formData, token)
      console.log(result)
      if (result) {
        dispatch(setUser(result))
        navigate("/dashboard/on-campus")
      }
      setLoading(false)
    }
  
    const cancelEdit = () => {
      // dispatch(setEditCompany(false))
      // dispatch(setStep(3))
    }
  
    const goToNext = () => {
    //TODO :- ADD SOME VALIDATION OR CHECK 
      // dispatch(setStep(3))
    }
  
    const goBack = () => {
      // dispatch(setStep(1))
      // dispatch(setEditJob(true))
    }
  
    return (
    <div  className="flex w-full items-start gap-x-6" >
      
      <div className='flex flex-1 flex-col min-w-[130px]'>

        <div className='flex  flex-col'>
          
          <div className='text-4xl mb-10 mx-auto flex items-center'>Apply For Job</div>
          
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
          >
            {/* FULL NAME */}
            <div className="flex  items-center gap-4">
              
              <div className="flex w-full flex-col space-y-2">
                <label className="text-sm text-richblack-5" htmlFor="jobTitle">
                  First Name <sup className="text-pink-600">*</sup>
                </label>
                <input
                  id="firstName"
                  placeholder="Enter first name"
                  {...register("firstName", { required: true })}
                  className="form-style w-full"
                  defaultValue={user?.firstName}
                />
                {errors.firstName && (
                  <span className="ml-2 text-xs tracking-wide text-pink-600">
                    First name is required
                  </span>
                )}
              </div>

              <div className="flex w-full flex-col space-y-2">
                <label className="text-sm text-richblack-5" htmlFor="jobTitle">
                  Last Name <sup className="text-pink-600">*</sup>
                </label>
                <input
                  id="lastName"
                  placeholder="Enter last name"
                  {...register("lastName", { required: true })}
                  className="form-style w-full"
                  defaultValue={user?.lastName}
                />
                {errors.lastName && (
                  <span className="ml-2 text-xs tracking-wide text-pink-600">
                    Last name is required
                  </span>
                )}
              </div>

            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="dateOfBirth" className="lable-style">
                  Date of Birth <sup className="text-pink-600">*</sup>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  className="form-style"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Please enter your Date of Birth.",
                    },
                    max: {
                      value: new Date().toISOString().split("T")[0],
                      message: "Date of Birth cannot be in the future.",
                    },
                  })}
                  defaultValue={user?.additionalDetails?.dateOfBirth}
                />
                {errors.dateOfBirth && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    {errors.dateOfBirth.message}
                  </span>
                )}
              </div>
                
              <div className="flex flex-col w-full gap-2">
                <label htmlFor="gender" className="lable-style">
                  Gender <sup className="text-pink-600">*</sup>
                </label>
                <select
                  type="text"
                  name="gender"
                  id="gender"
                  className="form-style"
                  {...register("gender", { required: true })}
                  defaultValue={user?.additionalDetails?.gender}
                >
                  {genders.map((ele, i) => {
                    return (
                      <option key={i} value={ele}>
                        {ele}
                      </option>
                    )
                  })}
                </select>
                {errors.gender && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your Gender.
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
              
              <div className="flex flex-col w-full gap-2 ">
                <label htmlFor="contactNumber" className="lable-style">
                Phone Number <sup className="text-pink-600">*</sup>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  id="contactNumber"
                  placeholder="Enter Contact Number"
                  className="form-style"
                  {...register("contactNumber", {
                    required: {
                      value: true,
                      message: "Please enter your Contact Number.",
                    },
                    maxLength: { value: 12, message: "Invalid Contact Number" },
                    minLength: { value: 10, message: "Invalid Contact Number" },
                  })}
                  defaultValue={user?.additionalDetails?.ph_num}
                />
                {errors.contactNumber && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    {errors.contactNumber.message}
                  </span>
                )}
              </div>
              
              <div className="flex flex-col w-full gap-2 ">
                <label htmlFor="semester" className="lable-style">
                  Semester <sup className="text-pink-600">*</sup>
                </label>
                <input
                  type="number"
                  name="semester"
                  id="semester"
                  placeholder="Enter semester result"
                  className="form-style"
                  {...register("semester", { required: true })}
                  defaultValue={user?.additionalDetails?.sem}
                />
                {errors.firstName && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your semester marks.
                  </span>
                )}
              </div>
            
            </div>
            
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="email" className="lable-style">
                Email <sup className="text-pink-600">*</sup>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="form-style"
                {...register("email", { required: true })}
                defaultValue={user?.email}
              />
              {errors.email && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Address.
                </span>
              )}
            </div>
            
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="about" className="lable-style">
                Address <sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
                className="form-style"
                {...register("address", { required: true })}
                defaultValue={user?.additionalDetails?.addr}
              />
              {errors.addr && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Address.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
                
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="portfolio" className="lable-style">
                  Portfolio Website
                </label>
                <input
                  type="text"
                  name="portfolio"
                  id="portfolio"
                  placeholder="Enter portfolio link"
                  className="form-style"
                  {...register("portfolio" , {required : false})}
                  defaultValue={user?.additionalDetails?.website}
                />
                {errors.portfolio && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your last name.
                  </span>
                )}
              </div>
            
            </div>
            <div className="flex flex-col gap-5 lg:flex-row">
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="course" className="lable-style">
                  Course <sup className="text-pink-600">*</sup>
                </label>
                {/* <input
                  type="text"
                  name="course"
                  id="course"
                  placeholder="Enter semester result"
                  className="form-style"
                  {...register("course", { required: true })}
                  defaultValue={user?.additionalDetails?.course}
                /> */}
                <select
                  type="text"
                  name="course"
                  id="course"
                  placeholder="Choose your course"
                  className="form-style"
                  {...register("course", { required: true })}
                  defaultValue={user?.additionalDetails?.course}
                >
                  {courses.map((ele, i) => {
                    return (
                      <option key={i} value={ele}>
                        {ele}
                      </option>
                    )
                  })}
                </select>
                {errors.course && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your course.
                  </span>
                )}
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="branch" className="lable-style">
                  Branch <sup className="text-pink-600">*</sup>
                </label>
                {/* <input
                  type="text"
                  name="branch"
                  id="branch"
                  placeholder="Enter semester result"
                  className="form-style"
                  {...register("branch", { required: true })}
                  defaultValue={user?.additionalDetails?.brch}
                /> */}
                <select
                  type="text"
                  name="branch"
                  id="branch"
                  placeholder="Choose your branch"
                  className="form-style"
                  {...register("branch", { required: true })}
                  defaultValue={user?.additionalDetails?.brch}
                >
                  {branches.map((ele, i) => {
                    return (
                      <option key={i} value={ele}>
                        {ele}
                      </option>
                    )
                  })}
                </select>
                {errors.branch && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your branch.
                  </span>
                )}
              </div>
            
            </div>
            <div className="flex flex-col gap-5 lg:flex-row">
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="cgpa" className="lable-style">
                  CGPA <sup className="text-pink-600">*</sup>
                </label>
                <input
                  type="number"
                  name="cgpa"
                  id="cgpa"
                  placeholder="Enter CGPA"
                  className="form-style"
                  {...register("cgpa", { required: true })}
                  defaultValue={user?.additionalDetails?.cgpa}
                />
                {errors.cgpa && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your cgpa.
                  </span>
                )}
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="backlogs" className="lable-style">
                  Backlogs <sup className="text-pink-600">*</sup>
                </label>
                <input
                  type="number"
                  name="backlogs"
                  id="backlogs"
                  placeholder="Enter backlogs"
                  className="form-style"
                  {...register("backlogs", { required: true })}
                  defaultValue={user?.additionalDetails?.bklgs}
                />
                {errors.backlogs && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter backlogs.
                  </span>
                )}
              </div>
              
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="stackOverflow" className="lable-style">
                Stack Overflow
              </label>
              <input
                type="text"
                name="stackOverflow"
                id="stackOverflow"
                placeholder="Enter stack overflow link"
                className="form-style"
                {...register("stackOverflow" , {required : false})}
                defaultValue={user?.additionalDetails?.stkoflw}
              />
              {errors.stackOverflow && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your stack overflow link.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="github" className="lable-style">
                Github <sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="github"
                id="github"
                placeholder="Enter github link"
                className="form-style"
                {...register("github", { required: true })}
                defaultValue={user?.additionalDetails?.github}
              />
              {errors.github && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your github link.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="linkedIn" className="lable-style">
                  LinkedIn
                </label>
                <input
                  type="text"
                  name="linkedIn"
                  id="linkedIn"
                  placeholder="Enter linkedIn link"
                  className="form-style"
                  {...register("linkedIn" , {required : false})}
                  defaultValue={user?.additionalDetails?.linkedIn}
                />
                {errors.linkedIn && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your linkedIn link.
                  </span>
                )}
              </div>
            
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="leetcode" className="lable-style">
                  Leetcode
                </label>
                <input
                  type="text"
                  name="leetcode"
                  id="leetcode"
                  placeholder="Enter your leetcode link"
                  className="form-style"
                  {...register("leetcode" , {required : false})}
                  defaultValue={user?.additionalDetails?.leetcode}
                />
                {errors.leetcode && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your leetcode link.
                  </span>
                )}
              </div>
            
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="codechef" className="lable-style">
                Codechef
              </label>
              <input
                type="text"
                name="codechef"
                id="codechef"
                placeholder="Enter codechef link"
                className="form-style"
                {...register("codechef" , {required : false})}
                defaultValue={user?.additionalDetails?.codechef}
              />
              {errors.codechef && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your codechef link.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="resume" className="lable-style">
                  Resume <sup className="text-pink-600">*</sup>
                </label>
                <input
                  type="text"
                  name="resume"
                  id="resume"
                  placeholder="Upload your resume"
                  className="form-style"
                  {...register("resume", { required: true })}
                  defaultValue={user?.additionalDetails?.resume}
                />
                {errors.resume && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please upload your resume.
                  </span>
                )}
              </div>
            </div>


            {/* Next Button */}
            <div className="flex justify-end gap-x-2">
              {/* {false && (
                <button
                  // onClick={() => dispatch(setStep(2))}
                  disabled={loading}
                  className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
                >
                  Continue Wihout Saving
                </button>
              )} */}
              <IconBtn
                disabled={loading}
                type={"submit"}
                text={!true ? "Next" : "Apply"}
              >
                <MdNavigateNext />
              </IconBtn>
            </div>
          
          </form>
        
        </div>  
      
      </div>
      
      <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Job Application Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Tailor your resume: Customize your resume for each job application and focus on the most relevant information. Keep it to one page so that hiring managers can quickly assess your qualifications. </li>
            <li>Follow directions: Pay close attention to the application instructions and follow them carefully. Recruiters and hiring managers often reject candidates who don't follow directions. </li>
            <li>Research the company: Learn about the company by reading the job posting, visiting their website, and checking out their blog. You can also read about the people who work there and learn about the company's news.  </li>
            <li>Proofread: Review your resume for grammar, punctuation, and spelling errors. Proofreading shows that you are diligent and meticulous, and that you can communicate information in a professional and concise manner.</li>
            <li>Use a professional name and email address. </li>
            <li>Tidy your social media profiles. </li>
            <li>Review before submitting. </li>
          </ul>
        </div>
    </div>
    )
}
