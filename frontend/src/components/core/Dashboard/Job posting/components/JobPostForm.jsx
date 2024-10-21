import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../components/Style.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
// import { baseURL } from "@/utils/constant";
import PostBoxForm from "./PostBoxForm";
import { Language } from "@mui/icons-material";
import TimerIcon from "@mui/icons-material/Timer";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ClearIcon from "@mui/icons-material/Clear";
import { parse, stringify } from "flatted";
import { TiDocumentText } from "react-icons/ti";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { FiX } from "react-icons/fi";
import Template from "./subComponents/Template";
import { HiOutlineTemplate } from "react-icons/hi";
import { PiPlus } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const initialFormData = {
  created_on: null,
  applicantsId: [],
  employerId: '',
  job_details: {
    status: '',
    job_type: '',
    night_shift: false,
    categories: [],
    categories_list: [],
  },
  jobtitle: {
    name: '',
    classification : null,
  },
  job_category: {
    type: '',
    description: '',
  },
  status: 'Pending', // Default value
  last_updated: null,
  expiry: null,
  organization: {
    name: '',
    external_id: '',
    domains: [],
    is_consultant: false,
    organization_type: '',
    business_lead_type: '',
    is_verified: false,
    verification_level: null,
  },
  title: '',
  work_hours_desc: '',
  work_days_desc: '',
  gender: '',
  no_of_openings: null,
  is_part_time: false,
  job_timing: '',
  shift: '',
  job_data: {
    is_regional_language_required: false,
    isSpecificDepartmentCriteria: false,
    isPremiumPricingEligible: false,
    is_pricing_seen: false,
    question: '',
    english: '',
    benefits: [],
    experience: '',
    minimum_experience: '',
    min_salary: null,
    description: '',
    rich_description: '',
    min_education: '',
    interview_info: {
      mode: '',
      walk_in_enabled: false,
      walk_in_details: {
        date_details: {
          start_date: null,
          end_date: null,
          exclude_days: [],
        },
        time_details: {
          start_time: '',
          end_time: '',
        },
        other_instructions: '',
      },
    },
  },
  interview_address: '',
  company_address: '',  
  salary_breakdown: {
    salary_type: '',
    maxSalary: '',
    minSalary: '',
    averageIncentive: '',
    other_perks: '',
    earning_potential: null,
  },
  remote_applicant_eligible: false,
  max_experience: null,
  min_experience: null,
  employer_preference_values: {
    call: false,
    whatsapp: false,
    wa_mini: false,
  },
  phone_number_details: {
    hr: {
      is_under_review_verified: false,
      is_self_verified: false,
      is_suspicious: false,
      employer_number: '',
      hr_number: '',
      is_blocked: false,
      ban_type: '',
    },
    employer: {
      is_under_review_verified: false,
      is_self_verified: false,
      is_suspicious: false,
      employer_number: '',
      hr_number: '',
      is_blocked: false,
      ban_type: '',
    },
  },
  is_any_industry: false,
  is_any_graduate_course: false,
  is_any_post_graduate_course: false,
  job_format: '',
  gender_selected: false,
  applicant_location_selected: false,
  candidateReachScore: '',
  candidate_ecc_matching_preference: '',
  assessable_skills: [],
  job_location_type: '',
  category: '',
  experience_in_years: '',
  education_level: '',
  edu_ordered_id: null,
  applicant_address: '',
  credits: null,
  is_incentives_involved: false,
  is_wfh: false,
  address_representation: '',
  preview_address_representation: '',
  salary_representation: '',
  computed_job_location_type: '',
  job_sub_category: {
    order_id: null,
    name: '',
  },
  job_sub_category_id: '',
  department: {
    name: '',
    classification: null,
    icon: '',
  },
  sub_department: {
    name: '',
    classification: null,
  },
  courses: [],
  industries: [],
  graph_skills: [],
  courses_list: [],
  departments: [],
  preferred_sub_departments: [],
  job_type: '',
  job_description: '',
  nb_migration: false,
  created_by: {
    full_name: '',
    phone_number: '',
    email: '',
    is_internal_user: false,
    lead_type: '',
    consultancy: '',
    is_consultant: false,
    company_verification_status: '',
  },
  hr: {
    full_name: '',
    phone_number: '',
    email: '',
    is_internal_user: false,
    lead_type: '',
    consultancy: '',
    is_consultant: false,
    company_verification_status: '',
  },
  poc_verification_status: '',
  poc_verification: {
    creator_status: '',
    hr_status: '',
  },
  job_auto_activation_failed: false,
  is_auto_renewal: false,
  coins_spent: null,
  is_premium: false,
  comments: [],
  last_activated: null,
  is_promoted: false,
  is_staled: false,
  assets_required: [],
  is_tecc_staled: false,
  is_fulfillment_staled: false,
  leads_received: null,
  response_rate: null,
  response_score: null,
  ecc_leads_count: null,
  is_ecc_staled: false,
  is_field_missing: false,
  candidate_profile_markers: {
    dl: false,
    audio: false,
    assets: false,
    resume: false,
    prev_exp: false,
    skill_tags: false,
    current_role: false,
    current_company: false,
  },
  is_ineligible_for_paid_promotion: false,
  reference_code: '',
  datePosted: '',
  reports: [],
  office_location: '',
  fees: {
    fee_amount: '',
    payment_reason: '',
    fee_reason: '',
    payment_time: '',
    inventory_charge: [],
  },
  plot_number: '',
  shop_number: '',
  contactPreference: '',
  contactPreferenceFilter: '',
  recruiter_details: {
    recruiterName: '',
    recruiterPhoneNumber: null,
    recruiterEmail: '',
  },
  notifications: '',
  additional_requirements: {
    selected_req: [],
    degrees: [],
    skills: [],
    language: [],
    gender: '',
    minAge: null,
    maxAge: null,
    industry: [],
  },
  applicant_location : {
    address : {
      city : "",
      country : "",
      postcode : "",
      state : "",
      state_district : "",
      suburb : ""
    },
    display_name : "",
    lat :"",
    lon:"",
  },
  office_address : {
    address : {
      city : "",
      country : "",
      postcode : "",
      state : "",
      state_district : "",
      suburb : ""
    },
    display_name : "",
    lat :"",
    lon:"",
  },
  location_type : "",
};

const steps = [
  "Job Details",
  "Candidate Requirements",
  "Interviewer Information",
  "Job Preview",
  "Select Plan",
];
const JOB_POST_DATA_KEY = "job_post_data";

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [step1Valid, setStep1Valid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showPreviousForm, setShowPreviousForm] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [savedData, setSavedData] = useState(null);
  const [next, setNext] = useState(true);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [loading , setLoading] = useState(false);
  const [jobId , setJobId] = useState("");


// Define refs for form fields
const refs = {
  company_name: useRef(null),
  title: useRef(null),
  description: useRef(null),
  job_type: useRef(null),
  job_location_type: useRef(null),
  office_address: useRef(null),
  applicant_address: useRef(null),
  applicant_location: useRef(null),
  city: useRef(null),
  salary_type: useRef(null),
  minSalary: useRef(null),
  maxSalary: useRef(null),
  averageIncentive: useRef(null),
  question: useRef(null),
  fee_amount: useRef(null),
  payment_reason: useRef(null),
  fee_reason: useRef(null),
  assests: useRef(null),
  payment_time: useRef(null),
  education_level: useRef(null),
  english: useRef(null),
  experience: useRef(null),
  minimum_experience: useRef(null),
  interview_mode: useRef(null),
  interview_address: useRef(null),
  walk_in_enabled: useRef(null),
  start_date: useRef(null),
  end_date: useRef(null),
  start_time: useRef(null),
  end_time: useRef(null),
  other_instructions: useRef(null),
  interview_office_address: useRef(null),
  contactPreferenceFilter: useRef(null),
  candidatePreference: useRef(null),
  recruiterName: useRef(null),
  recruiterPhoneNumber: useRef(null),
  recruiterEmail: useRef(null),
};

  useEffect(() => {
    // Check for saved data in localStorage on component mount
    const savedFormData = JSON.parse(localStorage.getItem(JOB_POST_DATA_KEY));
    if (savedFormData) {
      console.log("Found saved data:", savedFormData);
      console.log("Data Title:", savedFormData?.title);

      setShowPreviousForm(true);
      setSavedData(savedFormData);
    }
  }, []);

  useEffect(() => {
    // Saving form data to localStorage whenever it changes
    if (formData !== initialFormData) {
      console.log("Saving form data:", formData);
      localStorage.setItem(JOB_POST_DATA_KEY, JSON.stringify(formData));
    }
  }, [formData]); 

  const handleContinue = () => {
    if (savedData) {
      setFormData(savedData);
      setShowPreviousForm(false);
      localStorage.removeItem(JOB_POST_DATA_KEY);
      console.log("Continued with saved data and cleared storage");
    }
  };

  const handleClose = () => {
    setShowPreviousForm(false);
    localStorage.removeItem(JOB_POST_DATA_KEY);
    console.log("Closed continue option and cleared storage");
  };
  const navigate = useNavigate();

  const scrollToFirstError = (errors) => {
    const firstErrorKey = Object.keys(errors)[0];
    if (firstErrorKey && refs[firstErrorKey] && refs[firstErrorKey].current) {
      refs[firstErrorKey].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };



  const [errors, setErrors] = useState({});
  const [continueClicked, setContinueClicked] = useState(false);

const validateFieldsForJobDetails = () => {
  const newErrors = {}; // Create a new errors object
  let mainFieldsValidated = false;

  if (!formData?.organization?.name) {
    newErrors.company_name = "Company is required.";
  }
  if (!formData?.jobtitle?.name) {
    newErrors.title = "Job Title is required.";
  }
  if (!formData?.sub_department?.name) {
    newErrors.description = "Job Role is required.";
  }
  if (!formData?.job_details?.job_type) {
    newErrors.job_type = "Job Type is required.";
  }
  if (!formData?.job_location_type) {
    newErrors.job_location_type = "Work Location Type is required.";
  }

  // if (!formData?.job_location_type) {
  //   newErrors.job_location_type = "Work Location Type is required.";
  // } else {
  //   if (formData?.job_location_type === "Work From Office" && !formData?.office_address) {
  //     newErrors.office_address = "Office Address is required.";
  //   }
  //   if (formData?.job_location_type === 'Field Job' && !formData?.applicant_address) {
  //     newErrors.applicant_address = "Field Job Area is required.";
  //   }
  //   if (formData?.job_location_type === "Work From Home") {
  //     if (!formData?.applicant_location?.applicant_location) {
  //       newErrors.applicant_location = "Applicant Location is required.";
  //     }
  //     if (formData?.applicant_location?.applicant_location === 'Specific City' && !formData?.applicant_location?.city?.name) {
  //       newErrors.city = "City is required.";
  //     }
  //   }
  // }


  if (formData?.job_location_type === "Work From Office" && !formData?.office_address?.display_name) {
    newErrors.office_address = "Office Address is required.";
  }

  if (formData?.job_location_type === 'Field Job' && !formData?.applicant_location.display_name) {
    newErrors.applicant_address = "Field Job Area is required.";
  }
  if (formData?.job_location_type === "Work From Home") {
    if (!formData?.location_type) {
      newErrors.applicant_location = "Applicant Location is required.";
    }
    if (formData?.location_type === 'Specific City' && !formData?.applicant_location?.address?.city) {
      newErrors.city = "City is required.";
    }
  }

  if (!formData?.salary_breakdown?.salary_type) {
    newErrors.salary_type = "Pay Type is required.";
  }
  if (formData.salary_breakdown.salary_type === 'Fixed Only') {
    if (!formData.salary_breakdown.minSalary) {
      newErrors.minSalary = 'Min Salary is required';
    }
    if (!formData.salary_breakdown.maxSalary) {
      newErrors.maxSalary = 'Max Salary is required';
    }
  }
  if (formData.salary_breakdown.salary_type === 'Fixed + Incentive') {
    if (!formData.salary_breakdown.minSalary) {
      newErrors.minSalary = 'Min Salary is required';
    }
    if (!formData.salary_breakdown.maxSalary) {
      newErrors.maxSalary = 'Max Salary is required';
    }
    if (!formData.salary_breakdown.averageIncentive) {
      newErrors.averageIncentive = 'Average Incentive is required';
    }
  }
  if (formData.salary_breakdown.salary_type === 'Incentive Only' && !formData.salary_breakdown.averageIncentive) {
    newErrors.averageIncentive = 'Average Incentive is required';
  }
  if (!formData.job_data.question) {
    newErrors.question = 'Joining fee/deposit question is required';
  }
  if (formData.job_data.question === "Yes") {
    if (!formData?.fees?.fee_amount) {
      newErrors.fee_amount = 'Fee Amount is required';
    } else if (Number(formData.fees.fee_amount) > 3000) {
      newErrors.fee_amount = 'Fee Amount should be less than ₹3000';
    }
    if (!formData?.fees?.payment_reason) {
      newErrors.payment_reason = 'Payment reason is required';
    }
    if (formData?.fees?.payment_reason === "Other Reason" && !formData?.fees?.fee_reason) {
      newErrors.fee_reason = 'Reason for charging is required';
    }
    if (formData?.fees?.payment_reason === "Assets/ Inventory charge" && !formData?.fees?.inventory_charge) {
      newErrors.assests = 'Mention assets/inventory is required';
    }
    if (formData?.fees?.payment_reason === "Registration/ Training Fees" && !formData?.fees?.fee_reason) {
      newErrors.fee_reason = 'Reason for charging is required';
    }
    if (!formData?.fees?.payment_time) {
      newErrors.payment_time = 'Payment time is required';
    }
  }

  setErrors(newErrors);
  scrollToFirstError(newErrors);
  return Object.keys(newErrors).length === 0;
};

const validateFieldsForCandidateReq = () => {
  const newErrors = {};

  if (!formData.education_level) {
    newErrors.education_level = 'Minimum Education Required is required';
  }
  if (!formData?.job_data?.english) {
    newErrors.english = "English Level is required.";
  }
  if (!formData?.job_data?.experience) {
    newErrors.experience = "Total Experience is required.";
  }
  if (formData.job_data.experience === "Experienced" && !formData?.job_data?.minimum_experience) {
    newErrors.minimum_experience = "Minimum Experience is required.";
  }
  if (formData?.skills_required?.length === 0) {
    errors.selectedSkills = "At least one job title is required.";
  }
  // if (!formData?.job_description) {
  //   newErrors.job_description = "Job description is required.";
  // }

  setErrors(newErrors);
  scrollToFirstError(newErrors);
  return Object.keys(newErrors).length === 0;
};

const validateFieldsForInterviewInfo = () => {
  const newErrors = {};

  if (!formData?.job_data?.interview_info?.mode) {
    newErrors.interview_mode = "Type Of Interview is required.";
  }
  if (formData.job_data?.interview_info?.mode === "In-Person Interview") {
    if (!formData.interview_address) {
      newErrors.interview_address = "Interview Address is required.";
    }
    if (!formData?.job_data?.interview_info?.walk_in_enabled) {
      newErrors.walk_in_enabled = "Walk-in Interview selection is required.";
    }
    if (formData?.job_data?.interview_info?.walk_in_enabled === "yes" && !formData?.job_data?.interview_info?.walk_in_details?.date_details?.start_date) {
      newErrors.start_date = "Start Date is required.";
    }
    if (formData?.job_data?.interview_info?.walk_in_enabled === "yes" && !formData?.job_data?.interview_info?.walk_in_details?.date_details?.end_date) {
      newErrors.end_date = "End Date is required.";
    }
    if (formData?.job_data?.interview_info?.walk_in_enabled === "yes" && !formData?.job_data?.interview_info?.walk_in_details?.time_details?.start_time) {
      newErrors.start_time = "Start Time is required.";
    }
    if (formData?.job_data?.interview_info?.walk_in_enabled === "yes" && !formData?.job_data?.interview_info?.walk_in_details?.time_details?.end_time) {
      newErrors.end_time = "End Time is required.";
    }
    if (!formData?.job_data?.interview_info?.walk_in_details?.other_instructions) {
      newErrors.other_instructions = "Other Instructions are required.";
    }
  }
  if (formData.job_data?.interview_info?.mode === "Telephonic/Online Interview" && !formData?.office_location) {
    newErrors.interview_office_address = "Office address is required.";
  }
  if (!formData?.contactPreference) {
    newErrors.contactPreferenceFilter = "Contact preference filter is required.";
  }
  if (formData.contactPreference === "Yes, to myself" && !formData.contactPreferenceFilter) {
    newErrors.candidatePreference = "Candidate preference is required.";
  }
  if (formData.contactPreference === "Yes, to other recruiter") {
    if (!formData.recruiter_details?.recruiterName) {
      newErrors.recruiterName = "Recruiter Name is required.";
    }
    if (!formData.recruiter_details?.recruiterPhoneNumber) {
      newErrors.recruiterPhoneNumber = "Recruiter Phone Number is required.";
    }
    if (!formData.recruiter_details?.recruiterEmail) {
      newErrors.recruiterEmail = "Recruiter Email is required.";
    }
  }

  setErrors(newErrors);
  scrollToFirstError(newErrors);
  return Object.keys(newErrors).length === 0;
};

const postTheData = async() => {
  try {
    setLoading(true);
    const res = await axios.post(`${baseURL}/jobPostingSQL/formData/${activeStep+1}/${(activeStep+1 !== 1) && jobId ? jobId : ""}` , 
      formData
    );//
    
    console.log("RESPONSE OF DATA STORED IN DB: " , res);
    if(res.data.jobPostingId) {
      setJobId(res.data.jobPostingId);
    }
    console.log("JOB ID ------> : " , jobId)
  }
  catch(error) {
    console.error(error);
    console.log("COULD NOT POST THE DATA TO DB")
  }
  finally {
    setLoading(false);
  }
};

const handleNext = async() => {
  setContinueClicked((prev)=>!prev);

  if (activeStep === 0 && validateFieldsForJobDetails()) {
    setNext(true);
    await postTheData();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  } else if (activeStep === 1 && validateFieldsForCandidateReq()) {
    setNext(true);
    await postTheData();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  } else if (activeStep === 2 && validateFieldsForInterviewInfo()) {
    setNext(true);
    await postTheData();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  } else if(activeStep === 3) {
    setNext(true);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  } else {
    setNext(false);
    console.error("Validation failed for current step.");
  }
};

useEffect(() => {
  if (continueClicked) {
    if (activeStep === 0) {
      validateFieldsForJobDetails();
    } else if (activeStep === 1) {
      validateFieldsForCandidateReq();
    } else if (activeStep === 2) {
      validateFieldsForInterviewInfo();
    }
    // setContinueClicked(false);
  }
}, [formData, activeStep, continueClicked]);



useEffect(() => {   
    setContinueClicked(false);

}, [activeStep]);



  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData(initialFormData);
  };

 
  const handleFormChange = (fieldName, value) => {
    console.log("inside handle form change:::::::::::::::",fieldName);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
    setFormData((prevFormData) => {
      const newData = {...prevFormData}; // Deep copy to avoid circular references
      // const newData = JSON.parse(JSON.stringify(prevFormData)); // Deep copy to avoid circular references
  
      const keys = fieldName.split(".");
      let currentLevel = newData;  
      for (let i = 0; i < keys.length - 1; i++) {
        if (!currentLevel[keys[i]]) {
          currentLevel[keys[i]] = {};
        }
        currentLevel = currentLevel[keys[i]];
      }
  
      currentLevel[keys[keys.length - 1]] = value;
      return newData;
    });
  };
  
  

  const handleFormSubmit = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = JSON.parse(localStorage.getItem("accessToken"));
      console.log(accessToken)
      const response = await fetch(`${baseURL}/jobPost/create?id=${user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken.accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate("/employers-dashboard/manage-jobs");
        handleReset();
      } else {
        const errorData = await response.json();
        alert(`Error:${errorData.message}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
    finally{
      // navigate('/verification');
    }
  };


  const handleTemplate = () => {
    setIsTemplateModalOpen(true);
  };

  const handleTemplateClose = () => {
    setIsTemplateModalOpen(false);
  };


  return (
    <>
    {
      loading ? (<div></div>) : (
    
    <div className="flex flex-col min-h-screen w-full ">
      {savedData && showPreviousForm && (
        <div className="w-full mb-2">
          <div className="bg-[#070230] flex flex-row items-center justify-between text-white rounded-sm  h-20 ">
            <div>
              <p className="text-white text-lg font-[400] pt-[.6rem]">
                <TimerIcon className="mr-1"/> Save Time: Continue where you left off
              </p>
              <span className="flex flex-row space-x-2 text-white divide-x-2">
                {savedData?.title && (
                  <p className="text-white">
                    <BusinessCenterIcon className="mr-2"/>
                    {savedData?.title}
                  </p>
                )}

                <p className="text-white pl-2 mx-2">
                  ₹ {savedData?.salary_breakdown?.minSalary || ""} -{" "}
                  {(parseFloat(
                    savedData?.salary_breakdown?.averageIncentive
                  ) || 0) +
                    (parseFloat(
                      savedData?.salary_breakdown?.maxSalary
                    ) || 0)}{" "}
                  per month (
                  {savedData?.salary_breakdown?.salary_type || ""})
                </p>
              </span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <button
                onClick={handleContinue}
                className="px-6 py-2 bg-white text-black font-[450]"
              >
                Continue
              </button>
              <button onClick={handleClose}>
                <ClearIcon />
              </button>
            </div>
          </div>
        </div>
      )}
      <Box className={`${activeStep===3 ? " flex-grow overflow-y-auto" : ""} `}>
        <div className="flex items-center justify-between  pb-3 pt-4">
          <p className="text-4xl font-semibold text-black">Post a new job</p>
          <button onClick={handleTemplate} className="flex items-center gap-2 px-2 py-1.5 bg-white rounded border border-black">
            <TiDocumentText className="text-xl"/>
            <p className="font-medium text-black text-md">Use Template</p>
          </button>
        </div>
        <Stepper
          style={{
            padding: "30px",
            background: "white",
          }}
          activeStep={activeStep}
          className="text-7xl sm:mx-0  mb-[10px]"
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{index === activeStep ? label : ""}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <PostBoxForm

          activeStep={activeStep}
          setActiveStep={setActiveStep}
          formData={formData}
          // handleRoleChange={handleRoleChange}
          onFormChange={handleFormChange}
          onSubmit={handleFormSubmit}
          errors={errors}
          setErrors={setErrors}
          refs = {refs}
        />
        <Box
          style={{
            padding: "30px",
            background: "white",
            
            // position: 'fixed', // Added to fix position
            // bottom: 0, // Added to stick to bottom
            // width: '100%', // Ensure it spans the full width
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            mt: 2,
          }}
          className={`sm:mx-0  ${activeStep===3 ? "mb-5 w-[100%]" : ""}`}
        >
          {activeStep !== 0 && (
            <button
              className="px-4 py-2 rounded active:scale-90 transition-all duration-200 border border-customDarkBlue hover:bg-customDarkBlue hover:text-[#fff]"
              // style={{ border: "1px solid #000000", height: "40px" }}
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {activeStep < steps.length - 1 ? (
            <div className="outer-box">
              <div className="btn-box">
                <button
                  className={`px-4 py-2 rounded border border-transparent active:scale-90 text-[#fff]  transition-all duration-200 hover:bg-transparent  ${
                    isButtonDisabled
                      ? "bg-gray-300 hover:bg-gray-400"
                      : "bg-customDarkBlue hover:text-black hover:border-[0.5px] hover:border-customDarkBlue"
                  }`}
                  style={{ height: "40px" }}
                  onClick={handleNext}
                  disabled={isButtonDisabled}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : (
            <div className="outer-box">
              <div className="btn-box">
                <button
                  className="theme-btn btn-style-one"
                  onClick={handleFormSubmit}
                  style={{ height: "40px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </Box>
      </Box>



      <Modal
      open={isTemplateModalOpen}
      onClose={handleTemplateClose}
      closeAfterTransition
      className="flex items-center justify-center"
    >
      <Fade in={isTemplateModalOpen}>
        <div className="bg-white rounded-md shadow-md  overflow-hidden">

          {/* Navbar */}
          {/* <div className="p-4 flex items-center justify-between fixed bg-white sm:w-[73%] w-[85%] top-6 rounded z-10 border-b border-gray-300">
            <p className="text-xl font-semibold text-black">Job Templates</p>
            <div className="relative w-[63.5%]">
              <input
                placeholder="Search template by name, job title"
                className="border rounded w-full pl-10 py-2"
              />
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 -translate-x-1/4 text-gray-500 text-xl" />
            </div>
            <FiX onClick={handleTemplateClose} className="text-2xl cursor-pointer" />
          </div> */}

          <div className="flex w-full h-full mt-[95px]">
            {/* Left section */}
            <div className="p-3 h-[85%] flex flex-col justify-between bg-white w-[17%] fixed top-[12%] left-[14.8%] bottom-0 overflow-auto border-r border-gray-300">
              <div className="flex items-center gap-1 py-2 px-1 bg-blue-200 mt-4 justify-center rounded">
                <HiOutlineTemplate className="text-xl"/>
                <div className="font-semibold text-nowrap md:text-sm text-xs">JobChaahiye Templates</div>
              </div>

              <button className="text-black text-nowrap flex gap-1 items-center py-2 px-2 rounded border justify-center border-black w-full hover:bg-gray-100">
                <PiPlus className="text-xl font-semibold"/>
                <p className="font-semibold md:text-sm text-xs">Start with new post</p>
              </button>
            </div>

            {/* Right Section */}
            <div className="ml-[25%] w-[75%] h-full overflow-auto">
              <Template handleTemplateClose={handleTemplateClose}/>
            </div>

          </div>

        </div>
      </Fade>
    </Modal>

    </div>
      )}
    </>
  );
}