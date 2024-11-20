import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ACCOUNT_TYPE } from "./utils/accoutnType";
import { useSelector } from "react-redux";

// Lazy loading the components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const Test = lazy(() => import("./components/core/Dashboard/Student Dashboard/OnCampus/Test"));
const OnCampus = lazy(() => import("./components/core/Dashboard/Student Dashboard/OnCampus"));
const MockTest = lazy(() => import("./components/core/Dashboard/Student Dashboard/MockTest/MockTest"));
const AdminLogin = lazy(() => import("./pages/Admin/AdminLogin"));
const PrivateRoute = lazy(() => import("./components/core/Auth/PrivateRoute"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const MyProfile = lazy(() => import("./components/core/Dashboard/MyProfile"));
const Settings = lazy(() => import("./components/core/Dashboard/Settings"));
const ApplyJob = lazy(() => import("./components/core/Dashboard/Student Dashboard/ApplyJob"));
const Resume = lazy(() => import("./components/core/Dashboard/Student Dashboard/resume"));
const PlacementDashboard = lazy(() => import("./components/core/Dashboard/Placement Dashboard/Dashboard"));
const StudentDashboard = lazy(() => import("./components/core/Dashboard/Student Dashboard/StudentDashboard"));
const StudentData = lazy(() => import("./components/core/Dashboard/Placement Dashboard/studentData"));
const Table = lazy(() => import("./components/core/Dashboard/Placement Dashboard/studentData/Table"));
const Companies = lazy(() => import("./components/core/Companies"));
const JobView = lazy(() => import("./components/core/Dashboard/Placement Dashboard/JobView"));
const JobPosting = lazy(() => import("./components/core/Dashboard/Placement Dashboard/jobPosting"));
const PlacementRecords = lazy(() => import("./components/core/PlacementRecords"));
const CreateResume = lazy(() => import("./components/core/Dashboard/Student Dashboard/resume/features/CreateResume"));
const ChooseTemplate = lazy(() => import("./components/core/Dashboard/Student Dashboard/resume/features/ChooseTemplate"));
const ResumeSamples = lazy(() => import("./components/core/Dashboard/Student Dashboard/resume/features/ResumeSamples"));
const ATSScoreChecker = lazy(() => import("./components/core/Dashboard/Student Dashboard/resume/features/ATSScoreChecker"));
const AdminDashboard = lazy(() => import("./components/core/Dashboard/Admin Dashboard/AdminDashboard"));
const Error = lazy(() => import("./pages/Error"));
const Courses = lazy(() => import("./components/core/Dashboard/Student Dashboard/Courses"));

function App() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="bg-customBeige w-screen min-h-screen flex flex-col font-inter">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/placement-records" element={<PlacementRecords />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="placement" element={<AdminLogin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-email" element={<VerifyEmail />} />

          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/Settings" element={<Settings />} />

            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route path="/dashboard/mock-test" element={<MockTest />} />
                <Route path="/dashboard/on-campus" element={<OnCampus />} />
                <Route path="/dashboard/on-campus/test" element={<Test />} />
                <Route path="/dashboard/on-campus/apply/:jobId" element={<ApplyJob />} />
                <Route path="/dashboard/resume" element={<Resume />} />
                <Route path="/dashboard/courses" element={<Courses />} />
                <Route path="/dashboard/student" element={<StudentDashboard />} />
                <Route path="/dashboard/resume/createResume" element={<CreateResume />} />
                <Route path="/dashboard/resume/chooseTemplate" element={<ChooseTemplate />} />
                <Route path="/dashboard/resume/resumeSamples" element={<ResumeSamples />} />
                <Route path="/dashboard/resume/atsScoreChecker" element={<ATSScoreChecker />} />
              </>
            )}

            {user?.accountType === ACCOUNT_TYPE.PLACEMENT_CELL && (
              <>
                <Route path="/dashboard/job-posting" element={<JobPosting />} />
                <Route path="/dashboard/jobs" element={<JobView />} />
                <Route path="/dashboard/placement" element={<PlacementDashboard />} />
                <Route path="/dashboard/student-data" element={<StudentData />} />
                <Route path="/dashboard/student-data/all-students" element={<Table />} />
              </>
            )}

            {user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>
                <Route path="/dashboard/student-data" element={<StudentData />} />
                <Route path="/dashboard/student-data/all-students" element={<Table />} />
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
              </>
            )}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
