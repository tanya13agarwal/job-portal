import React from "react";
import {Routes , Route} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import About from "./components/core/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import { Features } from "./components/core/Features";
import Placements from "./components/core/Placements";


function App() {
  return (
    <div className="bg-[#EAE4DD] w-screen min-h-screen flex flex-col font-inter">
      <Navbar/>
      <Routes>
        
         <Route path="/" element = {<Home/>}/> 

        // {/* <Route path="catalog/:catalogName" element = {<Catalog/>}/> */}
        
        <Route path="login" element = {<Login/>}/>
        
        <Route path="signup" element = {<Signup/>}/>
        
        <Route path="verify-email" element = {<VerifyEmail/>}/>

       
        
        {/* <Route path="forgot-password" element = {<ForgotPassword/>}/> */}
        
        
        // <Route path="about" element = {<About/>}/>
        // <Route path="features" element = {<Features/>}/>
        // <Route path="placements" element = {<Placements/>}/>
        
        {/* /*<Route path="update-password/:id" element = {<UpdatePassword/>}/>  */}
        
        
        
        {/* <Route element = {
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }>

          <Route path="dashboard/my-profile" element = {<MyProfile/>}/>
          

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="dashboard/cart" element = {<Cart/>}/>
                <Route path="dashboard/enrolled-courses" element = {<EnrolledCourses/>}/>     
              </>
            )
          }
          
          
          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/add-course" element = {<AddCourse/>}/>
                <Route path="dashboard/my-courses" element = {<MyCourses/>}/>
                <Route path="dashboard/edit-course/:courseId" element = {<EditCourse/>}/>     
              </>
            )
          }
        
        </Route> */}

        {/* <Route path="*" element={<Error/>}/> */}
      
      </Routes>
    </div>
  );
}

export default App;
