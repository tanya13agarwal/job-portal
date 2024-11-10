import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

import {
  fetchCourseCategories,
  addJobDetails,
  editJobDetails,
} from "../../../../../services/operations/jobDetailsAPI"
// import { setCourse, setStep } from "../../../../../slices/courseSlice"
import { setJob, setStep } from "../../../../../slices/jobPostSlice"
import { JOB_STATUS } from "../../../../../utils/constants"
import IconBtn from "../../../../common/IconBtn"
// import Upload from "../Upload"
import ChipInput from "./ChipInput"
import RequirementsField from "./RequirementField";
import job_types from "../../../../../data/jobCategories.json"
import Upload from "../Upload"

export default function JobInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()


  const parseSalaryInput = (input) => {
    // Ensure input is a string
    if (typeof input !== 'string') {
      console.error('Input is not a string:', input);
      return null;
    }
  
    console.log('Parsing salary input:', input);
  
    const matchLPA = input.match(/(\d+(\.\d+)?)\s*LPA/i);
    if (matchLPA) {
      const result = parseFloat(matchLPA[1]) * 100000;
      console.log('Parsed as LPA:', result);
      return result;
    }
  
    const matchPerMonth = input.match(/(\d+(\.\d+)?)\s*per\s*month/i);
    if (matchPerMonth) {
      const result = parseFloat(matchPerMonth[1]) * 12;
      console.log('Parsed as per month:', result);
      return result;
    }
  
    const matchNumber = input.match(/^\d+(\.\d+)?$/);
    if (matchNumber) {
      const result = parseFloat(matchNumber[0]);
      console.log('Parsed as number:', result);
      return result;
    }
  
    console.error('Invalid salary input format:', input);
    return null;
  };
  
  

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { job, editJob } = useSelector((state) => state.jobPost)
  const [loading, setLoading] = useState(false)
  const [jobCategories, setJobCategories] = useState(job_types.job_types)
  
  // console.log(job_types.job_types)

  useEffect(() => {
    // if form is in edit mode
    console.log("data populated: ", job)
    if (editJob) {
      setValue("jobTitle", job?.jobName)
      setValue("jobShortDesc", job?.jobDescription)
      setValue("jobDescriptionFile", job?.jobDescriptionFile)
      setValue("stipend", job?.stipend)
      setValue("minSalary", job?.minSalary)
      setValue("maxSalary", job?.maxSalary)
      setValue("jobLocation", job?.jobLocation)
      setValue("branchTags", job?.branch ? job.branch.toString() : "");
      setValue("batchTags", job?.batch ? job.batch.toString() : "");
      setValue("jobRequirements", job?.instructions ? job.instructions.toString() : "");
      // setValue("branchTags", job?.branch?.toString() || job?.branch)
      // setValue("batchTags", job?.batch?.toString() || job?.batch)
      setValue("jobBenefits", job?.whatYouWillGet)
      setValue("jobCategory", job?.category)
      // setValue("jobRequirements", job?.instructions.toString())
      setValue("jobId", job?._id)
      // setValue("jobImage", job?.thumbnail)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isFormUpdated = () => {
    const currentValues = getValues()
    // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.jobTitle !== job.jobName ||
      currentValues.jobShortDesc !== job.jobDescription ||
      currentValues.jobDescriptionFile !== job.jobDescriptionFile ||
      currentValues.jobLocation !== job.jobLocation || 
      currentValues.stipend !== job.stipend || 
      currentValues.minSalary !== job.minSalary ||
      currentValues.maxSalary !== job.maxSalary ||
      currentValues.branchTags.toString() !== job?.branch?.toString() ||
      currentValues.batchTags.toString() !== job.batch.toString() ||
      currentValues.jobBenefits !== job.whatYouWillGet ||
      currentValues.jobCategory !== job.category ||
      currentValues.jobRequirements.toString() !==
          job.instructions.toString() 
      // currentValues.courseImage !== course.thumbnail
    ) {
      return true
    }
    return false
  }

  //   handle next button click
  const onSubmit = async (data) => {
    // console.log(data)

    const minSalary = String(data.minSalary);
    const maxSalary = String(data.maxSalary);
  
    console.log('Min Salary Input:', minSalary);
    console.log('Max Salary Input:', maxSalary);
  
    const parsedMinSalary = parseSalaryInput(minSalary);
    const parsedMaxSalary = parseSalaryInput(maxSalary);
  
    if (parsedMinSalary === null || parsedMaxSalary === null) {
      toast.error("Invalid salary format");
      return;
    }
  
    data.minSalary = parsedMinSalary;
    data.maxSalary = parsedMaxSalary;
  
    console.log('Parsed Min Salary:', parsedMinSalary);
    console.log('Parsed Max Salary:', parsedMaxSalary);

    if (editJob) {

      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        // console.log(data)
        formData.append("jobId", job._id)
        if (currentValues.jobTitle !== job.jobName) {
          formData.append("jobName", data.jobTitle)
        }
        if (currentValues.jobShortDesc !== job.jobDescription) {
          formData.append("jobDescription", data.jobShortDesc)
        }
         if (currentValues.jobDescriptionFile !== job.jobDescriptionFile) {
          formData.append("jobDescriptionFile", data.jobDescriptionFile)
        }
        if (currentValues.jobLocation !== job.jobLocation) {
          formData.append("jobLocation", data.jobLocation)
        }
        if (currentValues.stipend !== job.stipend) {
          formData.append("stipend", data.stipend)
        }
        if (currentValues.minSalary !== job.minSalary) {
          formData.append("minSalary", data.minSalary)
        }
        if (currentValues.maxSalary !== job.maxSalary) {
          formData.append("maxSalary", data.maxSalary)
        }
        if (currentValues.branchTags.toString() !== job.branch.toString()) {
          formData.append("branch", JSON.stringify(data.branchTags))
        }
        if (currentValues.batchTags.toString() !== job.batch.toString()) {
          formData.append("batch", JSON.stringify(data.batchTags))
        }
        if (currentValues.jobBenefits !== job.whatYouWillGet) {
          formData.append("whatYouWillGet", data.jobBenefits)
        }
        if (currentValues.jobCategory !== job.category) {
          formData.append("category", data.jobCategory)
        }
        if (
          currentValues.jobRequirements.toString() !==
          job.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.jobRequirements)
          )
        }
        // if (currentValues.jobImage !== job.thumbnail) {
        //   formData.append("thumbnailImage", data.jobImage)
        // }
        // console.log("Edit Form data: ", formData)
        setLoading(true)
        const result = await editJobDetails(formData, token)
        setLoading(false)
        if (result) {
          dispatch(setStep(2))
          dispatch(setJob(result))
        }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    const formData = new FormData()
    formData.append("jobName", data.jobTitle)
    formData.append("jobDescription", data.jobShortDesc)
    formData.append("jobDescriptionFile", data.jobDescriptionFile)
    formData.append("jobLocation", data.jobLocation)
    formData.append("stipend",data.stipend)
    formData.append("minSalary", data.minSalary)
    formData.append("maxSalary", data.maxSalary)
    formData.append("branch", JSON.stringify(data.branchTags))
    formData.append("batch", JSON.stringify(data.batchTags))
    formData.append("whatYouWillGet", data.jobBenefits)
    formData.append("category", data.jobCategory)
    formData.append("status", JOB_STATUS.DRAFT)
    formData.append("instructions", JSON.stringify(data.jobRequirements))
    // formData.append("thumbnailImage", data.courseImage)
    setLoading(true)
    const result = await addJobDetails(formData, token)
    if (result) {
      dispatch(setStep(2))
      dispatch(setJob(result))
    }

    dispatch(setStep(2))
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
    >
      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="jobTitle">
          Job Title <sup className="text-pink-600">*</sup>
        </label>
        <input
          id="jobTitle"
          placeholder="Enter Job Title"
          {...register("jobTitle", { required: true })}
          className="form-style w-full"
        />
        {errors.jobTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-600">
            Job title is required
          </span>
        )}
      </div>
      {/* Course Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="jobShortDesc">
          Job Short Description <sup className="text-pink-600">*</sup>
        </label>
        <textarea
          id="jobShortDesc"
          placeholder="Enter Description"
          {...register("jobShortDesc", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.jobShortDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-600">
            Job Description is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="stipend">
          Stipend <sup className="text-pink-600">*</sup>
        </label>
        <input
          id="stipend"
          placeholder="Enter stipend"
          {...register("stipend")}
          className="form-style w-full"
        />
      </div>

      {/* Minimum and Maximum salary */}
      <div className="flex items-center gap-4">
        <div className="flex w-full  flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="minSalary">
            Min Salary <sup className="text-pink-600">*</sup>
          </label>
          <div className="relative">
            <input
              id="minSalary"
              placeholder="Enter Min Salary"
              {...register("minSalary",{required: true})}
              className="form-style w-full !pl-12"
            />
            <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
          </div>
          {errors.maxSalary && (
            <span className="ml-2 text-xs tracking-wide text-pink-600">
              Max Salary is required
            </span>
          )}
        </div>
        <div className="flex w-full flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="maxSalary">
            Max Salary <sup className="text-pink-600">*</sup>
          </label>
          <div className="relative">
            <input
              id="maxSalary"
              placeholder="Enter Max Salary"
              {...register("maxSalary", {required: true})}
              className="form-style w-full !pl-12"
            />
            <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
          </div>
          {errors.maxSalary && (
            <span className="ml-2 text-xs tracking-wide text-pink-600">
              Max Salary is required
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="jobLocation">
          Job Location <sup className="text-pink-600">*</sup>
        </label>
        <input
          id="jobLocation"
          placeholder="Enter Job Location"
          {...register("jobLocation", { required: true })}
          className="form-style w-full"
        />
        {errors.jobLocation && (
          <span className="ml-2 text-xs tracking-wide text-pink-600">
            Job location is required
          </span>
        )}
      </div>
      {/* Course Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="jobCategory">
          Job Category <sup className="text-pink-600">*</sup>
        </label>
        <select
          {...register("jobCategory", { required: false })} //true krrr dena
          defaultValue=""
          id="jobCategory"
          className="form-style w-full"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            jobCategories?.map((category, indx) => (
              <option key={indx} value={category?._id}>
                {category?.category}
              </option>
            ))}
        </select>
        {errors.jobCategory && (
          <span className="ml-2 text-xs tracking-wide text-pink-600">
            Job Category is required
          </span>
        )}
      </div>
      {/* Course Tags */}
      <ChipInput
        label="Branch"
        name="branchTags"
        placeholder="Enter Branch and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />

      <ChipInput
        label="Batch"
        name="batchTags"
        placeholder="Enter Batch and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      {/* Course Thumbnail Image */}
      {/* <Upload
        name="companyImage"
        label="Company Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      /> */}
      {/* Benefits of the course */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="jobBenefits">
          Benefits of the job <sup className="text-pink-600">*</sup>
        </label>
        <textarea
          id="jobBenefits"
          placeholder="Enter benefits of the job"
          {...register("jobBenefits", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.jobBenefits && (
          <span className="ml-2 text-xs tracking-wide text-pink-600">
            Benefits of the job is required
          </span>
        )}
      </div>
      {/* Requirements/Instructions */}
      <RequirementsField
        name="jobRequirements"
        label="Requirements/Instructions"
        register={register}
        setValue={setValue}
        errors={errors}
        getValues={getValues}
      />

      {/* Upload JD */}
      <div className="flex flex-col space-y-2">
        {/* <label className="text-sm text-richblack-5" htmlFor="jobDescription">
          Upload Job Description<sup className="text-pink-600">*</sup>
        </label> */}
        <Upload
          name="jobDescriptionFile"
          label="Upload Job Description File"
          register={register}
          setValue={setValue}
          getValues = {getValues}
          errors={errors}
          acceptedExtensions={[".pdf", ".doc", ".docx"]}
          fileTypeLabel="a PDF or DOC file"
        />
        {/* {errors.jobDescription && (
          <span className="ml-2 text-xs tracking-wide text-pink-600">
            Job Description file is required
          </span>
        )} */}
      </div>

      {/* Next Button */}
      <div className="flex justify-end gap-x-2">
        {editJob && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Continue Wihout Saving
          </button>
        )}
        <IconBtn
          disabled={loading}
          text={!editJob ? "Next" : "Save Changes"}
        >
          <MdNavigateNext />
        </IconBtn>
      </div>
    </form>
  )
}
