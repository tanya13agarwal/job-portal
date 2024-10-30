import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'

import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

// import { setCourse, setStep } from "../../../../../slices/courseSlice"
import IconBtn from "../../../../common/IconBtn"
import { genders } from '../../Settings/EditProfile';
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
    const [loading, setLoading] = useState(false)
    // const [editCompanyName, setEditCompanyName] = useState(null)
    // const dispatch = useDispatch()

    console.log(user)
    useEffect(async() => {
      console.log("data populated", user);
      if (user) {
        setValue("firstName", user?.firstName)
        setValue("lastName", user?.lastName)
        setValue("dateOfBirth", user?.additionalDetails?.dateOfBirth)
        setValue("gender", user?.additionalDetails?.gender || 'Male')
        setValue("contactNumber", user?.additionalDetails?.ph_num)
        setValue("address", user?.additionalDetails?.addr || "")
        setValue("semester", user?.additionalDetails?.sem)
        setValue("contactNumber", user?.additionalDetails?.brch)
        setValue("contactNumber", user?.additionalDetails?.cgpa)
        setValue("portfolio", user?.additionalDetails?.website)
        setValue("contactNumber", user?.additionalDetails?.bklgs)
        setValue("contactNumber", user?.additionalDetails?.github)
        setValue("contactNumber", user?.additionalDetails?.linkedin)
        setValue("contactNumber", user?.additionalDetails?.stkoflw)
        setValue("contactNumber", user?.additionalDetails?.codechef)
        setValue("contactNumber", user?.additionalDetails?.leetcode)
        setValue("contactNumber", user?.additionalDetails?.resume)
        // setValue("companyShortDesc", user?.scription)
        // setValue("companyLocation", user?.cation)
        // setValue("companyWebsite", user?.bsite)
        // setValue("companyImage", user?.)
        // setValue("jobId", job?._id)
      }
    }, [])
    
    useEffect(() => {
      // if form is in edit mode
      // console.log("data populated", company)
      // if (editCompany) {
      //   setValue("companyName", company?.companyName)
      //   setValue("companyShortDesc", company?.companyDescription)
      //   setValue("companyLocation", company?.companyLocation)
      //   setValue("companyWebsite", company?.companyWebsite)
      //   setValue("companyImage", company?.thumbnail)
      //   // setValue("jobId", job?._id)
      // }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
  
    const isFormUpdated = () => {
      const currentValues = getValues()
      // console.log("changes after editing form values:", currentValues)
      // if (
      //   currentValues.companyName !== company.companyName ||
      //   currentValues.companyShortDesc !== company.companyDescription ||
      //   currentValues.companyLocation !== company.companyLocation || 
      //   currentValues.companyWebsite !== company.companyWebsite ||
      //   currentValues.companyImage !== company.thumbnail
      // ) {
      //   return true
      // }
      // return false
    }
  
  
    // handle form submission
    const onSubmit = async (data) => {
      console.log(data)
      setLoading(true)
  
      // let result
  
      // if (editCompany) {
  
      //   if (isFormUpdated()) {
      //     const currentValues = getValues()
      //     const formData = new FormData()
      //     // console.log(data)
      //     formData.append("companyId", company._id)
      //     if (currentValues.companyName !== company.companyName) {
      //       formData.append("companyName", data.companyName)
      //     }
      //     if (currentValues.companyShortDesc !== company.companyDescription) {
      //       formData.append("companyDescription", data.companyShortDesc)
      //     }
      //     if (currentValues.companyLocation !== company.companyLocation) {
      //       formData.append("companyLocation", data.companyLocation)
      //     }
      //     if (currentValues.companyWebsite !== company.companyWebsite) {
      //       formData.append("companyWebsite", data.companyWebsite)
      //     }
      //     if (currentValues.companyImage !== company.thumbnail) {
      //       formData.append("thumbnail", data.companyImage)
      //     }
      //     if (currentValues.jobId !== job._id) {
      //       formData.append("jobId", job?._id)
      //     }
      //     console.log("Edit Form data: ", formData)
      //     setLoading(true)
      //     const result = await editCompanyDetails(formData, token)
      //     setLoading(false)
      //     if (result) {
      //       dispatch(setStep(3))
      //       dispatch(setCompany(result))
      //     }
      //   } else {
      //     toast.error("No changes made to the form")
      //   }
      //   return
      // }
  
      // const formData = new FormData()
      // formData.append("companyName", data.companyName)
      // formData.append("companyDescription", data.companyShortDesc)
      // formData.append("companyLocation", data.companyLocation)
      // formData.append("companyWebsite", data.companyWebsite)
      // formData.append("thumbnail", data.companyImage)
      // formData.append("jobId", job?._id)
  
      // setLoading(true)
  
      // const result = await addCompanyDetails(formData, token)
      // console.log(result)
      // if (result) {
      //   dispatch(setStep(3))
      //   dispatch(setCompany(result))
      // }
      // else {
      //   dispatch(setStep(2))
      // }
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
                    Date of Birth
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
                    Gender
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
                  Phone Number
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
                    Semester
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
                  <label htmlFor="about" className="lable-style">
                    Address
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
                    {...register("portfolio", { required: true })}
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
                    Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    id="course"
                    placeholder="Enter semester result"
                    className="form-style"
                    {...register("course", { required: true })}
                    defaultValue={user?.additionalDetails?.course}
                  />
                  {errors.course && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                      Please enter your course.
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="branch" className="lable-style">
                    Branch
                  </label>
                  <input
                    type="text"
                    name="branch"
                    id="branch"
                    placeholder="Enter semester result"
                    className="form-style"
                    {...register("branch", { required: true })}
                    defaultValue={user?.additionalDetails?.brch}
                  />
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
                    CGPA
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
                    Backlogs
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
                    {...register("stackOverflow", { required: true })}
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
                    Github
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
                    {...register("linkedIn", { required: true })}
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
                    {...register("leetcode", { required: true })}
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
                    {...register("codechef", { required: true })}
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
                    Resume
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
              {false && (
                <button
                  // onClick={() => dispatch(setStep(2))}
                  disabled={loading}
                  className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
                >
                  Continue Wihout Saving
                </button>
              )}
              <IconBtn
                disabled={loading}
                text={!true ? "Next" : "Apply"}
              >
                <MdNavigateNext />
              </IconBtn>
            </div>
          </form>
        </div>  
      </div>
      
      <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Apply Job Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          </ul>
        </div>
    </div>
    )
}
