import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector"
import { companyEndpoints } from "../apis"

const {
  COMPANY_DETAILS_API,
  CREATE_COMPANY_API ,
  EDIT_COMPANY_API,
  DELETE_COMPANY_API,
} = companyEndpoints

export const fetchCompanyDetails = async (companyId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", COMPANY_DETAILS_API, {
        companyId,
    })
    console.log("COMPANY_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("COMPANY_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// add the course details
export const addCompanyDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_COMPANY_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE COMPANY API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Company Details")
    }
    toast.success("Company Details Added Successfully")
    result = response?.data?.data
    console.log( "akdsjvb: ",response?.data)
  } catch (error) {
    console.log("CREATE COMPANY API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// edit the course details
export const editCompanyDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_COMPANY_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT COMPANY API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Company Details")
    }
    toast.success("Company Details Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("EDIT Company API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// delete a course
export const deleteCompany = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_COMPANY_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE COMPANY API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Company")
    }
    toast.success("Company Deleted")
  } catch (error) {
    console.log("DELETE Company API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}