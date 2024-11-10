import { useState , useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import Upload from "../Upload"

import {setEditJob, setStep} from "../../../../../../slices/jobPostSlice"
import { setCompany , setEditCompany, } from "../../../../../../slices/companyPostSlice"
import {
  addCompanyDetails,
  editCompanyDetails,
} from "../../../../../../services/operations/companyDetailsAPI"
import IconBtn from "../../../../../common/IconBtn"



export default function CompanyInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const { job } = useSelector((state) => state.jobPost);
  const { company , editCompany } = useSelector((state) => state.companyPost);
  // const { course, editCourse } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [editCompanyName, setEditCompanyName] = useState(null)
  const dispatch = useDispatch()

// console.log()
  useEffect(() => {
    // if form is in edit mode
    console.log("data populated", company)
    if (editCompany) {
      setValue("companyName", company?.companyName)
      setValue("companyShortDesc", company?.companyDescription)
      setValue("companyLocation", company?.companyLocation)
      setValue("companyWebsite", company?.companyWebsite)
      setValue("companyImage", company?.thumbnail)
      // setValue("jobId", job?._id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const isFormUpdated = () => {
    const currentValues = getValues()
    // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.companyName !== company.companyName ||
      currentValues.companyShortDesc !== company.companyDescription ||
      currentValues.companyLocation !== company.companyLocation || 
      currentValues.companyWebsite !== company.companyWebsite ||
      currentValues.companyImage !== company.thumbnail
    ) {
      return true
    }
    return false
  }


  // handle form submission
  const onSubmit = async (data) => {
    console.log("submit pe data",data)
    setLoading(true)

    // let result

    if (editCompany) {

      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        // console.log(data)
        formData.append("companyId", company._id)
        if (currentValues.companyName !== company.companyName) {
          formData.append("companyName", data.companyName)
        }
        if (currentValues.companyShortDesc !== company.companyDescription) {
          formData.append("companyDescription", data.companyShortDesc)
        }
        if (currentValues.companyLocation !== company.companyLocation) {
          formData.append("companyLocation", data.companyLocation)
        }
        if (currentValues.companyWebsite !== company.companyWebsite) {
          formData.append("companyWebsite", data.companyWebsite)
        }
        if (currentValues.companyImage !== company.thumbnail) {
          formData.append("thumbnail", data.companyImage)
        }
        if (currentValues.jobId !== job._id) {
          formData.append("jobId", job?._id)
        }
        console.log("Edit Form data: ", formData)
        setLoading(true)
        const result = await editCompanyDetails(formData, token)
        setLoading(false)
        if (result) {
          dispatch(setStep(3))
          dispatch(setCompany(result))
        }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    const formData = new FormData()
    formData.append("companyName", data.companyName)
    formData.append("companyDescription", data.companyShortDesc)
    formData.append("companyLocation", data.companyLocation)
    formData.append("companyWebsite", data.companyWebsite)
    formData.append("thumbnail", data.companyImage)
    formData.append("jobId", job?._id)

    setLoading(true)

    const result = await addCompanyDetails(formData, token)
    console.log(result)
    if (result) {
      dispatch(setStep(3))
      dispatch(setCompany(result))
    }
    else {
      dispatch(setStep(2))
    }
    setLoading(false)
  }

  const cancelEdit = () => {
    dispatch(setEditCompany(false))
    dispatch(setStep(3))
  }

  const goToNext = () => {
  //TODO :- ADD SOME VALIDATION OR CHECK 
    dispatch(setStep(3))
  }

  const goBack = () => {
    dispatch(setStep(1))
    dispatch(setEditJob(true))
  }

  return (
    <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">Company Information</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="companyName">
            Company Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="companyName"
            disabled={loading}
            placeholder="Enter the company name"
            {...register("companyName", { required: true })}
            className="form-style w-full"
          />
          {errors.companyName && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Company name is required
            </span>
          )}
        </div>

        <Upload
          name="companyImage"
          label="Company Thumbnail"
          register={register}
          setValue={setValue}
          errors={errors}
          editData={editCompany ? company?.thumbnail : null}
        />

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="companyLocation">
            Company Location <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="companyLocation"
            disabled={loading}
            placeholder="Enter the company name"
            {...register("companyLocation", { required: true })}
            className="form-style w-full"
          />
          {errors.companyLocation && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Company location is required
            </span>
          )}
        </div>

        {/* COMPANY DESCRIPTION    */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="companyShortDesc">
            Company Short Description <sup className="text-pink-600">*</sup>
          </label>
          <textarea
            id="companyShortDesc"
            placeholder="Enter Description"
            {...register("companyShortDesc", { required: true })}
            className="form-style resize-x-none min-h-[130px] w-full"
          />
          {errors.companyShortDesc && (
            <span className="ml-2 text-xs tracking-wide text-pink-600">
              Company Description is required
            </span>
          )}
        </div>
        
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="companyWebsite">
            Company Website <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="companyWebsite"
            disabled={loading}
            placeholder="Enter the company website"
            {...register("companyWebsite", { required: true })}
            className="form-style w-full"
          />
          {errors.companyWebsite && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Company website is required
            </span>
          )}
        </div>

        <div className="flex items-end gap-x-4">
          <IconBtn
            type="submit"
            disabled={loading}
            text={editCompany ? "Edit Company Details" : "Next"}
            outline={true}
          >
            <MdNavigateNext size={20} className="text-yellow-50" />
          </IconBtn>
          {editCompany && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-richblack-300 underline"
            >
              Cancel Edit
            </button>
          )}
          
          <div className={`${editCompany ? "ml-auto" : "flex justify-end gap-x-3"}`}>
            <button
              type="button"
              onClick={goBack}
              className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
            >
              Back
            </button>
          </div>
        </div>
          
      </form>
      {/* Next Prev Button */}
      {/* <div className="flex justify-end gap-x-3">
        <button
          onClick={goBack}
          className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
        >
          Back
        </button>
        <IconBtn disabled={loading} text="Next" onclick={goToNext}>
          <MdNavigateNext />
        </IconBtn>
      </div> */}
    </div>
  )
}