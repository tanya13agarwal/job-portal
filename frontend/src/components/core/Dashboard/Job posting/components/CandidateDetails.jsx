import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const CandidateDetailsForm = ({ activeStep, formData, handleFormChange, handleEducationLevelChange, handleWorkExperienceChange, handleAddWorkExperience, handleRemoveWorkExperience }) => {
  return (
    <form className="default-form">
      {activeStep === 0 && (
        <div className="row mt-4">
          <div className="form-group col-lg-6 col-md-12">
            <label>Full Name</label>
            <input
              onChange={(e) => handleFormChange("fullName", e.target.value)}
              type="text"
              value={formData.fullName}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Email</label>
            <input
              onChange={(e) => handleFormChange("email", e.target.value)}
              type="email"
              value={formData.email}
              placeholder="Email"
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Date of Birth</label>
            <input
              onChange={(e) => handleFormChange("dob", e.target.value)}
              type="date"
              value={formData.dob}
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Gender</label>
            <select
              onChange={(e) => handleFormChange("gender", e.target.value)}
              value={formData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      )}
      {activeStep === 1 && (
        <div className="row mt-4">
          <div className="form-group col-lg-12 col-md-12">
            <label>Education Level</label>
            <select
              onChange={(e) => handleEducationLevelChange(e.target.value)}
              value={formData.educationLevel}
            >
              <option value="10th or below 10th">10th or below 10th</option>
              <option value="12th passed">12th passed</option>
              <option value="Diploma">Diploma</option>
              <option value="ITI">ITI</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
          </div>
          {/* Render additional fields based on education level */}
          {/* Example: if (formData.educationLevel === "Graduate") ... */}
          {/* Render input fields specific to the selected education level */}
        </div>
      )}
      {activeStep === 2 && (
        <div className="row mt-4">
          <div className="form-group col-lg-6 col-md-12">
            <label>Total Years of Experience</label>
            <input
              onChange={(e) =>
                handleFormChange("experienceYears", e.target.value)
              }
              type="text"
              value={formData.experienceYears}
              placeholder="Total Years of Experience"
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Work Experience</label>
            <Button onClick={handleAddWorkExperience}>Add</Button>
            {formData.workExperience.map((experience, index) => (
              <div key={index}>
                <input
                  onChange={(e) =>
                    handleWorkExperienceChange(
                      index,
                      "companyName",
                      e.target.value
                    )
                  }
                  type="text"
                  value={experience.companyName || ""}
                  placeholder="Company Name"
                />
                {/* Render other fields for work experience */}
                <Button onClick={() => handleRemoveWorkExperience(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeStep === 3 && (
        <div className="row mt-4">
          <div className="form-group col-lg-6 col-md-12">
            <label>English Level</label>
            <select
              onChange={(e) => handleFormChange("englishLevel", e.target.value)}
              value={formData.englishLevel}
            >
              <option value="No English">No English</option>
              <option value="Basic English">Basic English</option>
              <option value="Good English">Good English</option>
            </select>
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label>Other Languages</label>
            <input
              onChange={(e) =>
                handleFormChange("otherLanguages", e.target.value)
              }
              type="text"
              value={formData.otherLanguages}
              placeholder="Other Languages (Optional)"
            />
          </div>
        </div>
      )}
    </form>
  );
};

const steps = [
  "About Me",
  "Education",
  "Work Experience",
  "Language Skills",
];

export default function CandidateDetailsStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    gender: "",
    educationLevel: "10th or below 10th",
    educationDetails: "",
    experienceYears: "",
    workExperience: [],
    englishLevel: "No English",
    otherLanguages: "",
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    const savedActiveStep = localStorage.getItem("activeStep");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
    if (savedActiveStep) {
      setActiveStep(parseInt(savedActiveStep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    
    localStorage.setItem("activeStep", activeStep);
  }, [activeStep]);

  const handleFormChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleEducationLevelChange = (value) => {
    setFormData({ ...formData, educationLevel: value, educationDetails: "" });
  };

  const handleWorkExperienceChange = (index, fieldName, value) => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience[index][fieldName] = value;
    setFormData({ ...formData, workExperience: updatedWorkExperience });
  };

  const handleAddWorkExperience = () => {
    setFormData({
      ...formData,
      workExperience: [...formData.workExperience, {}],
    });
  };

  const handleRemoveWorkExperience = (index) => {
    const updatedWorkExperience = [...formData.workExperience];
    updatedWorkExperience.splice(index, 1);
    setFormData({ ...formData, workExperience: updatedWorkExperience });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      fullName: "",
      email: "",
      dob: "",
      gender: "",
      educationLevel: "10th or below 10th",
      educationDetails: "",
      experienceYears: "",
      workExperience: [],
      englishLevel: "No English",
      otherLanguages: "",
    });
    localStorage.removeItem("formData");
    localStorage.removeItem("activeStep");
  };

  return (
    <Box className="m-4 p-4">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <CandidateDetailsForm 
        activeStep={activeStep}
        formData={formData}
        handleFormChange={handleFormChange}
        handleEducationLevelChange={handleEducationLevelChange}
        handleWorkExperienceChange={handleWorkExperienceChange}
        handleAddWorkExperience={handleAddWorkExperience}
        handleRemoveWorkExperience={handleRemoveWorkExperience}
      />
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </div>
        ) : (
          <div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </Box>
  );
}
