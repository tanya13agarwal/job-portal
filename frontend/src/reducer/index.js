import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import applicationReducer from "../slices/applicationSlice";
import jobPostReducer from "../slices/jobPostSlice";
import courseReducer from "../slices/courseSlice"
import viewCourseReducer from "../slices/viewCourseSlice"



const rootReducer = combineReducers({
    auth : authReducer,
    profile: profileReducer,
    application: applicationReducer,
    jobPost : jobPostReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer,
})

export default rootReducer;