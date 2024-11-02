import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { updateProfile } from "../../../../services/operations/SettingsAPI"


export default function EditProfessional() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitProfileForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>  
      <form 
        className={`${user.accountType === "Student" ? "block" : "hidden"}`} 
        onSubmit={handleSubmit(submitProfileForm)}
      >
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Professional Details
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="rollNo" className="lable-style">
                Roll Number
              </label>
              <input
                type="text"
                name="rollNo"
                id="rollNo"
                placeholder="Enter Roll Number link"
                className="form-style"
                {...register("rollNo", { required: true })}
                defaultValue={user?.additionalDetails?.rollNo}
              />
              {errors.rollNo && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Roll Number.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
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
            <div className="flex flex-col gap-2 lg:w-[48%]">
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

        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50 transition-all duration-200 hover:scale-95"
          >
            Cancel
          </button>
          <button type="submit" className="border cursor-pointer rounded-md py-2 px-5 font-semibold hover:bg-richblack-700 hover:text-richblack-50 transition-all duration-200 hover:scale-95 border-richblack-700">Save</button>
        </div>
      </form>
    </>
  )
}