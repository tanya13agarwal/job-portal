import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import React, { useState, useEffect } from "react";
import "../Style.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import Person from "../../../../../../assets/images/logo.jpeg";
import CandidateReq from "../../../../../../assets/images/logo.jpeg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AutoOpenModal from "../common/AutoOpenModal";

export default function JobPreview({ formData, activeStep, setActiveStep }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedPerks, setSelectedPerks] = useState([]);
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [section, setSection] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [modalOpen, setModalOpen] = useState(true);

  const averageIncentive = parseFloat(formData?.salary_breakdown?.averageIncentive) || 0;
  const mSalary = parseFloat(formData?.salary_breakdown?.maxSalary) || 0;
  const total = averageIncentive + mSalary;

  const redirectToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollTo(0, 0);
      // element.scrollIntoView({ behavior: "smooth" });
      setSection(sectionId);
    }
  };

  // const validateForm = () => {
  //   for (const key in formData) {
  //     if (typeof formData[key] === "object") {
  //       for (const innerKey in formData[key]) {
  //         if (formData[key][innerKey] === "") {
  //           setIsValid(false);
  //           return;
  //         }
  //       }
  //     } else {
  //       if (formData[key] === "") {
  //         setIsValid(false);
  //         return;
  //       }
  //     }
  //   }
  //   setIsValid(true);
  // };

  // useEffect(() => {
  //   validateForm();
  // }, [formData]);

  // useEffect(() => {
  //   const form = document.querySelector(".default-form");
  //   if (form) {
  //     form.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [activeStep]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep , modalOpen]);


  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full justify-center mx-0 lg:px-[6.2vw]">
      <AutoOpenModal open={modalOpen} handleClose={handleCloseModal} />
      {/* Job Details */}
      <Accordion
        defaultExpanded
        className="col-lg-6 col-md-12 w-full lg:w-[87vw] border-0"
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="py-2 px-10"
          expandIcon={<ExpandMoreIcon />}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex px-2 justify-between min-w-[80vw]">
            <h1 className="font-[sans-serif] flex gap-3 leading-[24px] font-semibold text-[16px] align-middle">
              <BusinessCenterRoundedIcon />
              Job Details
            </h1>
            <Link
              onClick={(event) => {
                event.stopPropagation();
                redirectToSection("basicDetails");
              }}
              type="button"
              className="flex gap-2 align-middle ml-[10px]"
            >
              <CreateRoundedIcon
                onClick={()=>setActiveStep(0)}
                style={{ color: "blue" }}
                className="bg-blue-100 rounded-full p-1"
                fontSize="medium"
              />
            </Link>
          </div>
        </AccordionSummary>
        <div className="min-w-fit mt-2 bg-[#575757] h-[1px]"></div>

        <AccordionDetails onClick={(event) => event.stopPropagation()} className="flex flex-col gap-4 px-5 justify-between text-nowrap items-start">
          <div className="flex flex-row items-start gap-10">
            <div className="flex flex-col gap-4">
              <p className="col-lg-6 col-md-12">Company name</p>
              <p className="col-lg-6 col-md-12">Job title</p>
              <p className="col-lg-6 col-md-12">Job role/ category</p>
              <p className="col-lg-6 col-md-12">Job type</p>
              <p className="col-lg-6 col-md-12">Work type</p>
              <p className="col-lg-6 col-md-12">Job City</p>
              <p className="col-lg-6 col-md-12">Monthly Salary | Pay Type</p>
              <p className="col-lg-6 col-md-12">Additional Perks</p>
              <p className="col-lg-6 col-md-12">Joining Fee</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">{formData?.organization?.name || "-"}</p>
              <p className="font-semibold">{formData?.title || "-"}</p>
              <p className="font-semibold">{formData?.job_category?.description || "-"}</p>
              <p className="font-semibold">{formData?.job_details?.job_type || "-"}</p>
              <p className="font-semibold">{formData?.job_location_type || "-"}</p>
              <p className="font-semibold">{formData?.applicant_location?.city?.name || "-"}</p>
              {/* min salary ki initial value set krni hai */}
              <p className="font-semibold">
                {formData?.salary_breakdown?.minSalary ? "₹ " : ""}
                {formData?.salary_breakdown?.minSalary !== 0 ? formData?.salary_breakdown?.minSalary : "" }  
                {formData?.salary_breakdown?.minSalary ? " - " : ""}
                ₹{total} ({formData?.salary_breakdown?.salary_type || "-"})
              </p>
              <p className="font-semibold">{formData?.job_data?.benefits?.join(", ") || "-"}</p>
              <p className="font-semibold">₹{formData?.fees?.fee_amount || "-"}</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Candidate Requirements */}
      <Accordion className="col-lg-6 col-md-12 w-full lg:w-[87vw] border-0">
        <AccordionSummary
          className="flex justify-between min-w-[80vw]"
          aria-controls="panel2-content"
          id="panel2-header"
          expandIcon={<ExpandMoreIcon />}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex px-2 justify-between min-w-[80vw]">
            <h1 className="font-[sans-serif] flex gap-3 leading-[24px] font-semibold text-[16px] align-middle">
              <img src={CandidateReq} alt="" />
              Candidate Requirements
            </h1>
            <Link
              onClick={(event) => {
                event.stopPropagation();
                redirectToSection("candidateRequirements");
              }}
              type="button"
              className="flex gap-2 align-middle ml-[10px]"
            >
              <CreateRoundedIcon
              onClick={()=>setActiveStep(1)}
                style={{ color: "blue" }}
                className="bg-blue-100 rounded-full p-1"
                fontSize="medium"
              />
            </Link>
          </div>
        </AccordionSummary>
        <div className="min-w-fit mt-2 bg-[#575757] h-[1px]"></div>

        <AccordionDetails onClick={(event) => event.stopPropagation()} className="flex flex-col gap-4 px-4">
          <div className="w-full flex flex-row gap-2 bg-blue-100 py-2 px-2 mt-4 border-[1px] border-blue-500">
            <HowToRegIcon className="text-blue-500" fontSize="medium" />
            <span className="flex flex-col gap-1">
              <h6 className="text-[500]">Eligible requirements</h6>
              <p>Your job will only be visible to the candidates who meet these requirements.</p>
            </span>
          </div>
          <div className="flex flex-row items-start gap-24">
            <div className="flex flex-col gap-4 text-nowrap">
              <p className="col-lg-6 col-md-12">Minimum Education</p>
              <p className="col-lg-6 col-md-12">Experience Required</p>
              <p className="col-lg-6 col-md-12">English</p>
              <p className="col-lg-6 col-md-12">Skills Required</p>
              <p className="col-lg-6 col-md-12">Languages</p>
              <p className="col-lg-6 col-md-12">Gender</p>
              <p className="col-lg-6 col-md-12">Age</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">{formData?.education_level || "-"}</p>
              <p className="font-semibold">{formData?.job_data?.experience || "-"}</p>
              <p className="font-semibold">{formData?.job_data?.english || "-"}</p>
              <p className="font-semibold">{formData?.additional_requirements?.skills?.join(", ") || "-"}</p>
              <p className="font-semibold">{formData?.additional_requirements?.language?.join(", ") || "-"}</p>
              <p className="font-semibold">{formData?.additional_requirements?.gender || "-"}</p>
              <p className="font-semibold">{formData?.additional_requirements?.minAge ?? ""} - {formData?.additional_requirements?.maxAge ?? ""} {formData?.additional_requirements?.maxAge ?"yes" : ""}</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Interview Information */}
      <Accordion className="col-lg-6 col-md-12 w-full lg:w-[87vw] border-0">
        <AccordionSummary
          className="flex justify-between min-w-[80vw]"
          aria-controls="panel3-content"
          id="panel3-header"
          expandIcon={<ExpandMoreIcon />}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex px-2 justify-between min-w-[80vw]">
            <h1 className="font-[sans-serif] flex gap-3 leading-[24px] font-semibold text-[16px] align-middle">
              <img src={Person} alt="" />
              Interview Information
            </h1>
            <Link
              onClick={(event) => {
                event.stopPropagation();
                redirectToSection("interviewDetails");
              }}
              type="button"
              className="flex gap-2 align-middle ml-[10px]"
            >
              <CreateRoundedIcon
                onClick={()=>setActiveStep(2)}
                style={{ color: "blue" }}
                className="bg-blue-100 rounded-full p-1"
                fontSize="medium"
              />
            </Link>
          </div>
        </AccordionSummary>
        <div className="h-[1px] bg-black mb-4"></div>

        <AccordionDetails onClick={(event) => event.stopPropagation()} className="flex flex-col gap-4 px-5 justify-start">
          <div className="flex flex-row items-start gap-10">
            <div className="flex flex-col gap-4 text-nowrap">
              <p>Type of Interview</p>
              <p>Company address</p>
              <p>HR Details</p>
              <p>Can candidates contact</p>
              <p>JobChaahiye whatsapp alerts</p>
            </div>
            <div className="flex flex-col gap-4 text-nowrap">
              <p className="font-semibold">{formData?.job_data?.interview_info?.mode || "-"}</p>
              <p className="font-semibold">{formData?.office_location || "-"}</p>
              <p className="font-semibold">{user?.user?.full_name} {user?.user?.phone_number}</p>
              <p className="font-semibold">{formData?.contactPreference || "-"}</p>
              <p className="font-semibold">{formData?.notifications || "-"}</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}