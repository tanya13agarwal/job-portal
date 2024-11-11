import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// import { editCourseDetails } from "../../../../../services/operations/courseDetailsAPI"
import { resetJobState, setStep } from "../../../../../../slices/jobPostSlice"
import { JOB_STATUS } from "../../../../../../utils/constants"
import IconBtn from "../../../../../common/IconBtn"
import { editJobDetails } from "../../../../../../services/operations/jobDetailsAPI"
import { setEditCompany } from "../../../../../../slices/companyPostSlice"

export default function PublishCourse() {
  const { register, handleSubmit, setValue, getValues } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const { job } = useSelector((state) => state.jobPost)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (job?.status === JOB_STATUS.PUBLISHED) {
      setValue("public", true)
    }
  }, [])

  const goBack = () => {
    dispatch(setEditCompany(true))
    dispatch(setStep(2))
  }

  const goToJobs = () => {
    dispatch(resetJobState())
    navigate("/dashboard/jobs")
  }

  const handleJobPublished = async () => {
    // check if form has been updated or not
    if (
      (job?.status === JOB_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (job?.status === JOB_STATUS.DRAFT && getValues("public") === false)
    ) {
      // form has not been updated
      // no need to make api call
      goToJobs()
      return
    }
    const formData = new FormData()
    formData.append("jobId", job._id)
    const jobStatus = getValues("public")
      ? JOB_STATUS.PUBLISHED
      : JOB_STATUS.DRAFT
    formData.append("status", jobStatus)
    setLoading(true)
    const result = await editJobDetails(formData, token)
    if (result) {
      goToJobs()
    }
    setLoading(false)
  }

  const onSubmit = (data) => {
    // console.log(data)
    handleJobPublished()
  }

  return (
    <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">
        Publish Settings
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Checkbox */}
        <div className="my-6 mb-8">
          <label htmlFor="public" className="inline-flex items-center text-lg">
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
            />
            <span className="ml-2 text-richblack-400">
              Make this Job as public
            </span>
          </label>
        </div>

        {/* Next Prev Button */}
        <div className="ml-auto flex max-w-max items-center gap-x-4">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
          >
            Back
          </button>
          <IconBtn type="submit" disabled={loading} text="Save Changes" />
        </div>
      </form>
    </div>
  )
}