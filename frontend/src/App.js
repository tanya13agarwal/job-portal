import React from "react";
import {Routes , Route} from "react-router-dom";
// import Navbar from "./components/common/Navbar";
import { ACCOUNT_TYPE } from "./utils/accoutnType";
import { useSelector } from "react-redux";
// import About from "./components/core/About";


// import { Features } from "./components/core/Features";
// import Placements from "./components/core/Placements";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import Test from "./pages/Test";
import OnCampus from "./components/core/Dashboard/Student Dashboard/OnCampus";
import MockTest from "./components/core/Dashboard/Student Dashboard/MockTest/MockTest";
import AdminLogin from "./pages/Admin/AdminLogin";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings";
// import JobPosting from "./components/core/Dashboard/Job posting/components/JobPosting"
import JobPosting from "./components/core/Dashboard/jobPosting"
import JobView from "./components/core/Dashboard/JobView"
import { ApplyJob } from "./components/core/Dashboard/Student Dashboard/ApplyJob";





function App() {

  const {user} = useSelector((state) => state.profile);

  return (
    <div className="bg-[#EAE4DD] w-screen min-h-screen flex flex-col font-inter">
      {/* <Navbar/> */}
      <Routes>
        
        <Route path="/" element = {<Home/>}/> 

        {/* <Route path="catalog/:catalogName" element = {<Catalog/>}/> */}
        
        <Route path="login" element = {<Login/>}/>

        <Route path="admin" element = {<AdminLogin/>}/>
        
        <Route path="placement" element = {<AdminLogin/>}/>
        
        <Route path="signup" element = {<Signup/>}/>
        
        <Route path="verify-email" element = {<VerifyEmail/>}/>
        
        
        
        {/* <Switch> */}
          {/* <Route path="/test" component={Test} /> */}
        {/* </Switch> */}

       
        
        {/* <Route path="forgot-password" element = {<ForgotPassword/>}/> */}
        
        
        {/* <Route path="about" element = {<About/>}/>
        <Route path="features" element = {<Features/>}/>
        <Route path="placements" element = {<Placements/>}/> */}
        
        {/* /*<Route path="update-password/:id" element = {<UpdatePassword/>}/>  */}
        
        
        
        <Route element = {
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }>

          <Route path="dashboard/my-profile" element = {<MyProfile/>}/>
          <Route path="dashboard/Settings" element={<Settings />} />

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                
                <Route path="/dashboard/mock-test" element={<MockTest/>} />
                <Route path="/dashboard/on-campus" element = {<OnCampus/>}/>
                <Route path="/dashboard/on-campus/test" element = {<Test/>}/>
                <Route path="/dashboard/on-campus/apply/:jobId" element = {<ApplyJob/>}/>
                
              </>
            )
          }
          
          
          {
            user?.accountType === ACCOUNT_TYPE.PLACEMENT_CELL && (
              <>
                <Route path="/dashboard/job-posting" element={<JobPosting/>} />
                <Route path="/dashboard/jobs" element={<JobView/>} />
                {/* <Route path="dashboard/add-course" element = {<AddCourse/>}/>
                <Route path="dashboard/my-courses" element = {<MyCourses/>}/>
                <Route path="dashboard/edit-course/:courseId" element = {<EditCourse/>}/>      */}
              </>
            )
          }
          
          
          {
            user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>
                {/* <Route path="dashboard/add-course" element = {<AddCourse/>}/>
                <Route path="dashboard/my-courses" element = {<MyCourses/>}/>
                <Route path="dashboard/edit-course/:courseId" element = {<EditCourse/>}/>      */}
              </>
            )
          }
        
        </Route>

        {/* <Route path="*" element={<Error/>}/> */}
      
      </Routes>
    </div>
  );
}

export default App;
