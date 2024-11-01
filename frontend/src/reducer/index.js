import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import applicationReducer from "../slices/applicationSlice";
import jobPostReducer from "../slices/jobPostSlice";
import companyPostReducer from "../slices/companyPostSlice";
import viewCourseReducer from "../slices/viewCourseSlice"
import dashboardReducer from "../slices/dashboardSlice"



const rootReducer = combineReducers({
    auth : authReducer,
    profile: profileReducer,
    application: applicationReducer,
    jobPost : jobPostReducer,
    companyPost : companyPostReducer,
    dashboard : dashboardReducer,
    viewCourse:viewCourseReducer,
})

export default rootReducer;