import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import { RiEditBoxLine } from "react-icons/ri"


import {formattedDate} from "../../../utils/dateFormatter"

export default function MyProfile() {

    const {user} = useSelector( (state) => state.profile );
    const navigate = useNavigate();

  return (
    <div>
        

        <h1 className='mb-14  text-4xl text font-medium'>
            My Profile
        </h1>

        {/* Section 1 */}

        <div className='flex shadow-lg bg-richblack-800 items-center justify-between rounded-md border-[1px] border-richblack-700 p-8 px-12'>
            <div className='flex items-center gap-x-4'>
                <img
                src={user?.image}
                alt={`profile-${user?.firstName}`}
                className='aspect-square w-[78px] rounded-full object-cover '/>
                <div className='space-y-1'>
                    <p className='text-lg font-semibold text-richblack-5'>
                        {user?.firstName + " " + user?.lastName}
                    </p>
                    <p className='text-sm text-richblack-300'>
                        {user?.email}
                    </p>
                </div>
            </div>
            <button
                // text="Edit"
                className='flex text-richblack-300 items-center justify-center'
                onClick={() => {
                    navigate("/dashboard/settings")
            }}>
                <p>Edit</p>
                <RiEditBoxLine />
            </button>
        </div>

        {/* Section 2 */}

        <div className='my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12'>
            <div className='flex w-full items-center justify-between'>
                <p className='text-lg font-semibold text-richblack-5'>
                    {
                        user.accountType === "Student" ? "Career Objective" 
                        : "Designation" 
                    }
                </p>
                <button
                // text="Edit"
                    className='flex text-richblack-300 items-center justify-center'
                    onClick={() => {
                        navigate("/dashboard/settings")
                }}>
                    <p>Edit</p>
                    <RiEditBoxLine />
                </button>
            </div>
            <p
                className={`${user?.additionalDetails?.about
                    ? "text-richblack-5"
                    : "text-richblack-400"} text-sm font-medium`}
            >
                {
                    user?.additionalDetails?.about 
                    ? user.additionalDetails.about
                    : user.accountType === "Student" ? "eg: I am a MERN stack Developer" 
                        : "eg: Head"
                }
            </p>
        </div>

        {/* Section 3 */}
        <div className='flex flex-col my-10 gap-y-10 bg-richblack-800 rounded-md border-[1px] border-richblack-700 p-8 px-12'>
            <div className='flex w-full items-center justify-between'>
                <p className='text-lg font-semibold text-richblack-5'>
                    Personal Details
                </p>
                <button
                // text="Edit"
                    className='flex text-richblack-300 items-center justify-center'
                    onClick={() => {
                        navigate("/dashboard/settings")
                }}>
                    <p>Edit</p>
                    <RiEditBoxLine />
                </button>
            </div>
                <div className='flex max-w-[500px] justify-between'>
                    <div className='flex flex-col gap-y-5'>
                        <div >
                            <p className='mb-2 text-sm text-richblack-600'>First Name</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.firstName}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Email</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.email}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Gender</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.gender ?? "Add Gender"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Address</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.addr ?? "Add Address"}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Last Name</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.lastName}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Phone Number</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.ph_num ?? "Add Phone Number"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Date Of Birth</p>
                            <p className='text-sm font-medium text-richblack-5'>
                                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                                "Add Date Of Birth"}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        
        {/* Section 4 */}
        <div className={`${user.accountType === "Student" ? "flex flex-col" : "hidden"} my-10 gap-y-10 bg-richblack-800 rounded-md border-[1px] border-richblack-700 p-8 px-12`}>
            <div className='flex w-full items-center justify-between'>
                <p className='text-lg font-semibold text-richblack-5'>
                    Professional Details
                </p>
                <button
                // text="Edit"
                    className='flex text-richblack-300 items-center justify-center'
                    onClick={() => {
                        navigate("/dashboard/settings")
                }}>
                    <p>Edit</p>
                    <RiEditBoxLine />
                </button>
            </div>
                <div className='flex max-w-[500px] justify-between'>
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Semester</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.sem ?? "Add Your Sem"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Branch</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.brch ?? "Add Branch"}</p>
                        </div>
                        <div >
                            <p className='mb-2 text-sm text-richblack-600'>CGPA</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.cgpa ?? "Add CGPA"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Backlogs</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.bklgs ?? "Add Backlogs"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Resume</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.resume ?? "Add Gender"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Leetcode</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.leetcode ?? "Add Leetcode"}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Portfolio Website</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.website ?? "Add Portfolio Website"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Roll Number</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.rollNo ?? "Add Roll Number Link"}</p>
                        </div>
                        
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Github</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.github ?? "Add Github"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>LinkedIn</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.linkedin ?? "Add LinkedIn"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Codechef</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.codechef ?? "Add Codechef"}</p>
                        </div>
                        <div>
                            <p className='mb-2 text-sm text-richblack-600'>Stack Overflow</p>
                            <p className='text-sm font-medium text-richblack-5'>{user?.additionalDetails?.stkoflw ?? "Add Stack Overflow Link"}</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
