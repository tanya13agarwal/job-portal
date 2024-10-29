import { ACCOUNT_TYPE } from "../utils/accoutnType";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.PLACEMENT_CELL,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Dashboard",
    path: "/dashboard/admin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  },
  {
    id: 4,
    name: "Dashboard",
    path: "/dashboard/student",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscDashboard",
  },
  {
    id: 5,
    name: "Job-Posting",
    path: "/dashboard/job-posting",
    type: ACCOUNT_TYPE.PLACEMENT_CELL,
    icon: "VscAdd",
  },
  {
    id: 6,
    name: "Student Data",
    path: "/dashboard/student-data",
    type: ACCOUNT_TYPE.PLACEMENT_CELL,
    icon: "VscVm",
  },
  {
    id: 7,
    name: "Analysis",
    path: "/dashboard/analysis",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscServer",
  },
  {
    id: 8,
    name: "Analysis",
    path: "/dashboard/analysis",
    type: ACCOUNT_TYPE.PLACEMENT_CELL,
    icon: "VscServer",
  },
  {
    id: 9,
    name: "Off-Campus",
    path: "/dashboard/off-campus",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 10,
    name: "On-Campus",
    path: "/dashboard/on-campus",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 11,
    name: "Hackathon",
    path: "/dashboard/hackathon",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 12,
    name: "Create Resume",
    path: "/dashboard/resume",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 13,
    name: "Internship",
    path: "/dashboard/internship",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 14,
    name: "Courses",
    path: "/dashboard/courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 15,
    name: "Mock Test",
    path: "/dashboard/mock-test",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
  {
    id: 16,
    name: "Job-View",
    path: "/dashboard/jobs",
    type: ACCOUNT_TYPE.PLACEMENT_CELL,
    icon: "VscServer",
  },
];
