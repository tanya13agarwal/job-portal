const BASE_URL = process.env.REACT_APP_BASE_URL;

//AUTH ENDPOINTS/API
export const authEndpoints = {
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    ADMIN_SIGNUP_API : BASE_URL + "/auth/adminsignup",
    LOGIN_API : BASE_URL + "/auth/login",
    RESETPASSWORDTOKEN_API : BASE_URL + "/auth/resetPasswordToken",
    RESETPASSWORD_API : BASE_URL + "/auth/resetPassword"
}

// SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
    GET_ALL_PROFILE_API: BASE_URL + "/profile/getAllUser",
}

// job ENDPOINTS
export const jobEndpoints = {
    // GET_ALL_job_API: BASE_URL + "/job/getAlljobs",
    JOB_DETAILS_API: BASE_URL + "/job/getJobDetails",
    EDIT_JOB_API: BASE_URL + "/job/editJob",
    APPLY_FOR_A_JOB_API: BASE_URL + "/job/applyForJob",
    // job_CATEGORIES_API: BASE_URL + "/job/showAllCategories",
    CREATE_JOB_API: BASE_URL + "/job/createJob",
    // CREATE_SECTION_API: BASE_URL + "/job/addSection",
    // CREATE_SUBSECTION_API: BASE_URL + "/job/addSubSection",
    // UPDATE_SECTION_API: BASE_URL + "/job/updateSection",
    // UPDATE_SUBSECTION_API: BASE_URL + "/job/updateSubSection",
    // GET_ALL_INSTRUCTOR_jobS_API: BASE_URL + "/job/getInstructorjobs",
    // DELETE_SECTION_API: BASE_URL + "/job/deleteSection",
    // DELETE_SUBSECTION_API: BASE_URL + "/job/deleteSubSection",
    DELETE_JOB_API: BASE_URL + "/job/deleteJob",
    // GET_FULL_job_DETAILS_AUTHENTICATED:
      // BASE_URL + "/job/getFulljobDetails",
    // LECTURE_COMPLETION_API: BASE_URL + "/job/updatejobProgress",
    // CREATE_RATING_API: BASE_URL + "/job/createRating",
  }

  // company ENDPOINTS
export const companyEndpoints = {
    COMPANY_DETAILS_API: BASE_URL + "/company/getCompanyDetails",
    PUBLISHED_COMPANY_DETAILS_API: BASE_URL + "/company/getPublishedCompanyDetails",
    EDIT_COMPANY_API: BASE_URL + "/company/editCompany",
    CREATE_COMPANY_API: BASE_URL + "/company/createCompany",
    DELETE_COMPANY_API: BASE_URL + "/company/deleteCompany",
    GET_ALL_COMPANY_API: BASE_URL + "/company/getAllCompany",
  }

  export const courseEndpoints = {
    COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
    PUBLISHED_COURSE_DETAILS_API: BASE_URL + "/course/getPublishedCourseDetails",
    EDIT_COURSE_API: BASE_URL + "/course/editCourse",
    CREATE_COURSE_API: BASE_URL + "/course/createCourse",
    DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
    GET_ALL_COURSE_API: BASE_URL + "/course/showAllCourses",
  }