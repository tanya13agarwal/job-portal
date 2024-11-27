import { toast } from "react-hot-toast"

// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector"
import { courseEndpoints } from "../apis"

const {
  COURSE_DETAILS_API,
  CREATE_COURSE_API ,
  EDIT_COURSE_API,
  DELETE_COURSE_API,
  GET_ALL_COURSE_API,
} = courseEndpoints

export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
        courseId,
    })
    console.log("COURSE_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const fetchAllCourseDetails = async () => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API)
    console.log("COURSE_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    // console.log("ALL COURSE DETAILS API RESPONSE: " , result)
    result = response.data.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// export const fetchAllPublishedCourseDetails = async () => {
//   const toastId = toast.loading("Loading...")
//   //   dispatch(setLoading(true));
//   let result = null
//   try {
//     const response = await apiConnector("GET", PUBLISHED_COURSE_DETAILS_API)
//     console.log("PUBLISHED_COURSE_DETAILS_API API RESPONSE............", response)

//     if (!response.data.success) {
//       throw new Error(response.data.message)
//     }
//     // console.log("ALL COMPANY DETAILS API RESPONSE: " , result)
//     result = response.data.data
//   } catch (error) {
//     console.log("PUBLISHED_COURSE_DETAILS_API API ERROR............", error)
//     result = error.response.data
//     // toast.error(error.response.data.message);
//   }
//   toast.dismiss(toastId)
//   //   dispatch(setLoading(false));
//   return result
// }

// add the course details
export const addCourseDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details")
    }
    toast.success("Course Details Added Successfully")
    result = response?.data?.data
    console.log( "akdsjvb: ",response?.data)
  } catch (error) {
    console.log("CREATE COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// edit the course details
export const editCourseDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Course Details")
    }
    toast.success("Course Details Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("EDIT Course API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// delete a course
export const deleteCourseDetails = async (courseId, token) => {
  const toastId = toast.loading("Loading...")
  let result = null;
  try {
    const response = await apiConnector("DELETE", DELETE_COURSE_API, {courseId:courseId}, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE COURSE API RESPONSE............", response)

    if (!response?.data?.success) {
      
      throw new Error("Could Not Delete Course")
    }
    result=response.data;
    toast.success("Course Deleted")
  } catch (error) {
    console.log("DELETE Course API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result;
}