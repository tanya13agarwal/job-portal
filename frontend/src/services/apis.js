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
}

// job ENDPOINTS
export const jobEndpoints = {
    // GET_ALL_job_API: BASE_URL + "/job/getAlljobs",
    JOB_DETAILS_API: BASE_URL + "/job/getJobDetails",
    EDIT_JOB_API: BASE_URL + "/job/editJob",
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