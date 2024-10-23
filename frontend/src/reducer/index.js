import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import applicationReducer from "../slices/applicationSlice";
import jobPostReducer from "../slices/jobPostSlice";
import viewCourseReducer from "../slices/viewCourseSlice"



const rootReducer = combineReducers({
    auth : authReducer,
    profile: profileReducer,
    application: applicationReducer,
    jobPost : jobPostReducer,
    viewCourse:viewCourseReducer,
})

export default rootReducer;