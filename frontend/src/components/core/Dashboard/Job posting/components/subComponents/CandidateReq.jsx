import TooltipBtn from "./TooltipBtn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState, useEffect } from "react";
import "../Style.css";
import ReactQuill from "react-quill";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import jobData from "../../data/jobData.json";
import OptInfo from "../OptInfo";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import { degrees } from "../../../../../../utils/onboardingData/companydata";
import Select from "react-select";
import { Autocomplete, Chip, TextField, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import JobTitleOption from "../../data/apnaJobPost/jobTitle";
import { Padding } from "@mui/icons-material";
import CandidateTooltip from "./CandidateTooltip";
import { FiX } from "react-icons/fi";
import { MdInfo } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { TiInfo } from "react-icons/ti";
import IndustryList from "../common/IndustryList";
import industries from "../../data/industries.json"

export default function CandidateReq({ formData, onFormChange, activeStep, errors, setErrors , refs}) {
  console.log("errors in candidate request:-",errors);
  const [isValid, setIsValid] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
    const [isShowRolesMore, setIsShowRolesMore] = useState(false);
  const [skillsShowMore, setSkillsShowMore] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(formData?.skills_required);
  const [selectedInfo, setSelectedInfo] = useState( formData?.additional_requirements?.selected_req || []);
  const [gender, setGender] = useState("");
  const [degree, setDegree] = useState(formData?.additional_requirements?.degrees || []);
  const [minage, setMinAge] = useState(formData?.additional_requirements?.minAge || 18);
  const [maxage, setMaxAge] = useState(formData?.additional_requirements?.maxAge || 60);
  const [regionalLanguage, setRegionalLanguage] = useState(formData?.additional_requirements?.language || []);
  const [asset, setAsset] = useState(formData?.additional_requirements?.assets|| []);
  // const [isAssetsVisible, setIsAssetsVisible] = useState(false);
  const [skills, setSkills] = useState("");
  let isDegree = selectedInfo.includes("degree") ? true : false;
  let isIndustry = selectedInfo.includes("industry") ? true : false;
  let isAssets = selectedInfo.includes("assets") ? true : false;
  let isAge = selectedInfo.includes("age") ? true : false;
  let isGender = selectedInfo.includes("gender") ? true : false;
  let isRegionalLanguage = selectedInfo.includes("language") ? true : false;
  let isSkills = selectedInfo.includes("skills") ? true : false;
  const [skillsList, setSkillsList] = useState(formData?.additional_requirements?.skills ||[]);
  const [newSkill, setNewSkill] = useState("");
  const [degreelist, setDegreeList] = useState([]);
  const [options, setOptions] = useState(JobTitleOption.options);
  const [roleOptions, setRoleOptions] = useState(JobTitleOption.options);
  const [inputValue, setInputValue] = useState("");
  const [roleInputValue, setRoleInputValue] = useState("");
  const [skillInputValue, setSkillInputValue] = useState("");
  const [selectedTitles, setSelectedTitles] = useState(formData?.job_title?.description || []);
  const [selectedIndustry, setSelectedIndustry] = useState(formData?.additional_requirements.industry || []);

  const [selectedRole, setSelectedRole] = useState(formData?.job_category?.description_list || []);
  const [selectedSkill, setSelectedSkill] = useState(formData?.additional_requirements?.skills || []);

  const [maxSlice, setMaxSlice] = useState(12);
  const [skillsMaxSlice, setSkillsMaxSlice] = useState(8);

  const [maxIndustry, setMaxIndustry] = useState(10);
  const [maxRoleSlice, setMaxRoleSlice] = useState(3);
  const totalRoles = jobData.suggestedRoles.length;
  const [maxSkillSlice, setMaxSkillSlice] = useState(8);

  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const [clickedGenderType,setClickedGenderType] = useState("");

  console.log("AdaDFAS",selectedTitles)

  const handleAddSkillOption = (newValue) => {
    const newOption = jobData.suggestedSkills.find((option) => option.name === newValue);

    if (
      newOption &&
      !selectedSkill.includes(newOption.name) &&
      selectedSkill.length < 10
    ) {
      const newTitles = [...selectedSkill, newOption.name];
      setSelectedSkill(newTitles);
      onFormChange("additional_requirements.skills", newTitles);
    }
    setSkillInputValue(""); // Clear the input field after adding
  };


  const handleAddRoleOption = (newValue) => {
    const newOption = jobData.jobRole.find((option) => option.label === newValue);

    if (
      newOption &&
      !selectedRole.includes(newOption.value) &&
      selectedRole.length < 10
    ) {
      const newTitles = [...selectedRole, newOption.value];
      setSelectedRole(newTitles);
      onFormChange("job_category.description_list", newTitles);
    }
    setRoleInputValue(""); // Clear the input field after adding
  };
  
  const handleIndustryOption = (newValue) => {
    const newOption = jobData.industry.find((option) => option.label === newValue);

    if (
      newOption &&
      !selectedIndustry.includes(newOption.value) &&
      selectedIndustry.length < 10
    ) {
      const newTitles = [...selectedIndustry, newOption.value];
      setSelectedIndustry(newTitles);
      onFormChange("additional_requirements.industry", newTitles); // add a new feild to handle industry in backend
    }
    setInputValue(""); // Clear the input field after adding
  };
  
  const handleAddOption = (newValue) => {
    const newOption = options.find((option) => option.label === newValue);

    if (
      newOption &&
      !selectedTitles.includes(newOption.value) &&
      selectedTitles.length < 10
    ) {
      const newTitles = [...selectedTitles, newOption.value];
      setSelectedTitles(newTitles);
      onFormChange("job_title.description", newTitles);
    }
    setInputValue(""); // Clear the input field after adding
  };

  const handleIndustryToggle = (skill) => {
    const newSkills = selectedTitles.filter((s) => s !== skill);
    setSelectedIndustry(newSkills);
    onFormChange("additional_requirements.industry", newSkills);
  };

  const handleTitleToggle = (skill) => {
    const newSkills = selectedTitles.filter((s) => s !== skill);
    setSelectedTitles(newSkills);
    onFormChange("job_title.description", newSkills);
  };

  const handleRoleToggle = (skill) => {
    const newSkills = selectedRole.filter((s) => s !== skill);

    setSelectedRole(newSkills);
    onFormChange("job_category.description_list", newSkills); //for creating a list of job role we need an array
  };

  const handleSkillToggle = (skill) => {
    const newSkills = selectedSkill.filter((s) => s !== skill);

    setSelectedSkill(newSkills);
    onFormChange("additional_requirements.skills", newSkills); //for creating a list of job role we need an array
  };

  useEffect(() => {
  isDegree = selectedInfo.includes("degree") ? true : false;
  isAge = selectedInfo.includes("age") ? true : false;
  isIndustry = selectedInfo.includes("industry") ? true : false;
  isAssets = selectedInfo.includes("assets") ? true : false;
  isGender = selectedInfo.includes("gender") ? true : false;
  isRegionalLanguage = selectedInfo.includes("language") ? true : false;
  isSkills = selectedInfo.includes("skills") ? true : false;
  } , [selectedInfo])
  

  const validateForm = () => {
    // Check if any of the fields are empty
    for (const key in formData) {
      if (typeof formData[key] === "object") {
        for (const innerKey in formData[key]) {
          if (formData[key][innerKey] === "") {
            setIsValid(false);
            return;
          }
        }
      } else {
        if (formData[key] === "") {
          setIsValid(false);
          return;
        }
      }
    }
    // If no empty fields found, set isValid to true
    setIsValid(false);
  };
  useEffect(() => {
    // !isDegree && handleButtonClick("additional_requirements.degree", [""]);
    // isGender
    //   ? handleButtonClick("additional_requirements.gender", "null")
    //   : null;
    // !isRegionalLanguage &&
    //   handleButtonClick("additional_requirements.language", [""]);
    // !isSkills && handleButtonClick("additional_requirements.skills", [""]);
  }, [isGender, isDegree , isIndustry , isRegionalLanguage, isAssets, isSkills]);

  useEffect(() => {
    validateForm();
  }, [formData]); // Run whenever formData changes

  const [showMinimumExperience, setShowMinimumExperience] = useState(false);

  const handleExperienceButtonClick = (option) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      experience: "",
    }));
    handleButtonClick("job_data.experience", option);
    if (option === "Experienced") {
      setShowMinimumExperience(true);
    } else {
      setShowMinimumExperience(false);
    }
  };

  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  };

  // useEffect(() => {
  //   const form = document.querySelector(".default-form");
  //   if (form) {
  //     form.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [activeStep]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  const handleJobTitleToggle = (jobTitle) => {
    const updatedSkills = selectedSkills.includes(jobTitle)
      ? selectedSkills.filter((skill) => skill !== jobTitle)
      : [...selectedSkills, jobTitle];
  
    setSelectedSkills(updatedSkills);
    
    onFormChange("skills_required", updatedSkills);
    setErrors((prevErrors) => ({
      ...prevErrors,
      selectedSkills: "",
    }));
  };

  const handleAddSkill = () => {
    if (newSkill && !skillsList.includes(newSkill)) {
      const updatedSkills = [...skillsList, newSkill];
      setSkillsList(updatedSkills);
      onFormChange("additional_requirements.skills", updatedSkills);
      console.log("Updated Skills:", updatedSkills);
      setNewSkill(""); // Clear the input field after adding
    }
  };

  console.log("selectedInfo", selectedInfo);
  // console.log("degree", isDegree);

  const handleAddReq = (title) => {
    console.log(title)

    const updatedReq = selectedInfo.includes(title)
      ? selectedInfo.filter((skill) => skill !== title)
      : [...selectedInfo, title];

    setSelectedInfo(updatedReq);

    if (!updatedReq.includes(selectedInfo)) {
      onFormChange("additional_requirements.selected_req", updatedReq);
    }
  };

  const handleLanguage = (language) => {
    const updatedLanguage = regionalLanguage.includes(language)
      ? regionalLanguage.filter((lang) => lang !== language)
      : [...regionalLanguage, language];

    setRegionalLanguage(updatedLanguage);
    onFormChange("additional_requirements.language", updatedLanguage);
  };

  const handleAssets = (as) => {
    const updatedAsset = asset.includes(as)
      ? asset.filter((lang) => lang !== as)
      : [...asset, as];

    setAsset(updatedAsset);
    onFormChange("additional_requirements.assets", updatedAsset);
  };

  // const toggleAssetsVisibility = () => {
  //   setIsAssetsVisible(!isAssetsVisible);
  // };


  const handleAdditionalClose = (item) => {
    if(selectedInfo.includes(item)) {
      setSelectedInfo(selectedInfo.filter((val) => (val !== item) ))
    }
  }

  const handleButtonClick = (fieldName, option) => {
    setClickedGenderType(option);
    // Update the form data with the selected option
    onFormChange(fieldName, option);
    console.log("errors in handle button click BEFORE:-",errors);
    setErrors((prevErrors) => ({
      ...prevErrors,
      fieldName: "",
    }));
    console.log("errors in handle button click AFTER:-",errors);


    // Additional functionality based on the field name and option
    // if (fieldName === "contactPreference") {
    //   // Modify as needed based on the option
    //   if (option === "Yes, to other recruiter") {
    //     setShowRecruiterFields(true);
    //   } else {
    //     setShowRecruiterFields(false);
    //   }
    // }
    // Add additional conditions for other field names if needed
  };

  const handleFormChange = (fieldName, value) => {
    // event.preventDefault();

    onFormChange(fieldName, value);
    console.log("inside onform change in cr::::",fieldName);
    setErrors((prevErrors) => ({
      ...prevErrors,
      english: "",
    }));
  };

  return (
    <div
      className="row sm:mx-0 bg-white  sm:mr-0 mb-[10px] p-6"
      id="candidateRequirements"
    >
      <div className="form-group col-lg-12 col-md-12">
        <h1
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 600,
            color: "rgb(23, 43, 77)",
            fontFamily: "sans-serif",
          }}
        >
          Candidate Requirements <span style={{ color: "red" }}> *</span>
        </h1>
        <p>
          We’ll use these requirement details to make your job visible to the
          right candidates.
        </p>
      </div>
      {/* Minimum Education Required buttons */}
      <div ref={refs.education_level}  className="form-group col-lg-12 col-md-12">
        <label className="customlabel">
          Minimum Education Required <span style={{ color: "red" }}> *</span>
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
            marginTop: "5px",
          }}
          className="flex flex-row flex-wrap "
        >
          {jobData.educationLevels.map((level) => (
            <p
              key={level}
              className={`default-btn ${
                formData.education_level === level
                  ? "active-btn"
                  : "inactive-btn"
              }`}
              onClick={() => handleButtonClick("education_level", level)}
            >
              {level}
            </p>
          ))}
        </div>
        {errors.education_level && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.education_level}</p></div>)}
      </div>

      <div ref={refs.english} className="form-group col-lg-12 col-md-12">
        <label className="customlabel">
          English Level Required <span style={{ color: "red" }}> *</span>
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
          }}
          className="flex flex-row flex-wrap "
        >
          {jobData.englishLevels.map((level) => (
            <React.Fragment key={level}>
              {level === "No English" ? (
                <div className="gap-0 flex">
                  <button
                    className={`default-btn ${
                      formData.job_data?.english === level
                        ? "active-btn"
                        : "inactive-btn"
                    }`}
                    onClick={() => handleFormChange("job_data.english", level)}
                  >
                    {level}
                  </button>
                </div>
              ) : (
                <div className="flex">
                  <button
                    className={`default-btn ${
                      formData.job_data?.english === level
                        ? "active-btn"
                        : "inactive-btn"
                    }`}
                    onClick={() => handleFormChange("job_data.english", level)}
                  >
                    {level}
                  </button>
                  <TooltipBtn
                    className="ml-0 "
                    title={
                      level === "Basic English"
                        ? "Candidates can understand and read english sentences."
                        : "Candidate can read, understand and speak english."
                    }
                  />
                </div>
              )}
            </React.Fragment>
          ))}
          {errors.english && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.english}</p></div>)}
        </div>
      </div>


      <div ref={refs.experience} className="form-group col-lg-12 col-md-12">
        <label className="customlabel">
          Total Experience Required <span style={{ color: "red" }}> *</span>
        </label>
        <div className="flex  items-start gap-[10px]">
          {jobData.experienceOptions.map((option, index) => (
            <p
              key={option}
              className={`default-btn  ${
                formData.job_data?.experience === option
                  ? "active-btn"
                  : "inactive-btn"
              }`}
              onClick={() => handleExperienceButtonClick(option)}
            >
              {option}
            </p>
          ))}
          {errors.experience && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.experience}</p></div>)}
        </div>
        <div className="ml-[100px]">
          {formData.job_data.experience === "Fresher" && (
            <OptInfo
              content={
                "Only candidates with upto 1 year of experience will be eligible to apply"
              }
            />
          )}
          {formData.job_data.experience === "Any" && (
            <OptInfo
              content={
                "Both fresher & experienced candidates will be able to apply"
              }
            />
          )}
        </div>

        {showMinimumExperience && (
          <div
            className="form-group col-lg-12 col-md-12"
            style={{ marginTop: "15px" }}
            ref={refs.minimum_experience}
          >
            <label className="customlabel">Minimum Experience <span style={{ color: "red" }}> *</span></label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-center",
                gap: "10px",
              }}
              className="flex flex-row flex-wrap "
            >
              {jobData.minimumExperienceOptions.map((option) => (
                <p
                  key={option}
                  className={`default-btn ${
                    formData.job_data?.minimum_experience === option
                      ? "active-btn"
                      : "inactive-btn"
                  }`}
                  onClick={() =>
                    handleButtonClick("job_data.minimum_experience", option)
                  }
                >
                  {option}
                </p>
              ))}
            </div>
            {errors.minimum_experience && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.minimum_experience}</p></div>)}
          </div>
        )}
        <div className="">
          {formData.job_data.experience !== "Fresher" && (
            <div>
              <div className="mt-3">
              <label className="customlabel">
                Candidates from which other job title can apply ?
              </label>
              <div className="flex flex-wrap gap-2 mt-3 mb-1">
                {formData.title && (
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={formData.title}
                  />
                )}

                {selectedTitles.map((skill) => (
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={skill}
                    onDelete={() => {
                      handleTitleToggle(skill);
                      setMaxSlice(maxSlice - 1);
                    }}
                  />
                ))}

              </div>


<div className="relative w-1/2 mt-2">
      <Autocomplete
        freeSolo
        disableClearable
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, newValue) => {
          if (newValue === "matching title not found") {
            setInputValue('');
          } else {
            handleAddOption(newValue);
          }
        }}
        options={options.map((option) => option.label)}
        filterOptions={(options, { inputValue }) => {
          const filtered = options.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
          );

          if (inputValue !== "" && filtered.length === 0) {
            return ["matching title not found"];
          }

          return filtered;
        }}
        renderOption={(props, option) => (
          <li
            {...props}
            style={option === "matching title not found" ? { color: 'red' } : {}}
            onMouseDown={(event) => {
              // Prevent the default behavior of closing the dropdown
              if (option === "matching title not found") {
                event.preventDefault();
                setInputValue('');
              }
            }}
          >
            {option}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Type to search for title"
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  {/* <MdSearch /> */}
                </InputAdornment>
              ),
              endAdornment: isOpen ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              ),
            }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          />
        )}
      />
    </div>
              {/* <div className="bg-gray-100 mt-3 p-2 rounded-sm">
                <h4>Suggested titles:</h4>
                <span className="flex flex-wrap  mt-2 mb-3">
                  {options.slice(0, maxSlice).map((option, index) => (
                    <div key={index}>
                      {!selectedTitles.includes(option.label) && (
                        <Chip
                          className="bg-white mx-1 my-1 px-1"
                          variant="outlined"
                          key={option.value}
                          label={option.label}
                          onClick={() => {
                            setMaxSlice(maxSlice + 1);
                            handleAddOption(option.label);
                          }}
                        />
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      if (isShowMore) {
                        setMaxSlice(maxSlice - 2);
                        setIsShowMore(false);
                      } else {
                        setMaxSlice(maxSlice + 2);
                        setIsShowMore(true);
                      }
                    }}
                    className="text-blue-400 font-semibold cursor-pointer ml-2 underline"
                  >
                    {isShowMore ? "Show less" : "Show 2 more"}
                  </button>
                </span>
              </div> */}
            </div>

            <div className="mt-3">
              <label className="customlabel flex items-center gap-1">
                <p className="text-black font-semibold">Candidates from which other job role / category can apply ?</p>
                <CandidateTooltip title={"Let us know which job roles/categories are a good fit, so we can show this job to the right candidates"}/>
                <div className="px-2.5 py-1 bg-[#1967d2] rounded-2xl text-white text-xs">New</div>
              </label>
              <div className="flex flex-wrap gap-2 mt-3 mb-1">
                {formData?.job_category?.description && (
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={formData.sub_department.name} //description should be an array of string to add more values
                  />
                )}

                {selectedRole.map((skill) => (
                  <Chip
                  key={skill}
                  variant="outlined"
                  color="primary"
                  label={skill}
                  onDelete={() => {
                    handleRoleToggle(skill);
                    setMaxRoleSlice(maxRoleSlice - 1);
                  }}
                />
                ))}

              </div>
              {/* <Autocomplete
                className="w-1/2 mt-2"
                freeSolo
                disableClearable
                // inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  // setRoleInputValue(newInputValue);
                }}
                onChange={(event, newValue) => {
                  handleAddRoleOption(newValue);
                }}
                options={jobData.jobRole.map((option) => option.label)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              /> */}

{/* <Autocomplete
    className="w-1/2 mt-2"
    freeSolo
    disableClearable
    inputValue={roleInputValue}
    onInputChange={(event, newInputValue) => {
      setRoleInputValue(newInputValue);
    }}
    onChange={(event, newValue) => {
      if (newValue === "No job role/title found") {
        setRoleInputValue('');
      } else {
        handleAddRoleOption(newValue);
      }
    }}
    options={jobData.jobRole.map((option) => option.label)}
    filterOptions={(options, { inputValue }) => {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      );

      if (inputValue !== "" && filtered.length === 0) {
        return ["No job role/title found"];
      }

      return filtered;
    }}
    renderOption={(props, option) => (
      <li
        {...props}
        style={option === "No job role/title found" ? { color: 'red' } : {}}
        onMouseDown={(event) => {
          if (option === "No job role/title found") {
            event.preventDefault();
            setRoleInputValue('');
          }
        }}
      >
        {option}
      </li>
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        InputProps={{
          ...params.InputProps,
          type: "search",
        }}
      />
    )}
  /> */}


<div className="relative w-1/2 mt-2">
      <Autocomplete
        freeSolo
        disableClearable
        inputValue={roleInputValue}
        onInputChange={(event, newInputValue) => {
          setRoleInputValue(newInputValue);
        }}
        onChange={(event, newValue) => {
          if (newValue === "No job role/title found") {
            setRoleInputValue('');
          } else {
            handleAddRoleOption(newValue);
          }
        }}
        options={jobData.jobRole.map((option) => option.label)}
        filterOptions={(options, { inputValue }) => {
          const filtered = options.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
          );

          if (inputValue !== "" && filtered.length === 0) {
            return ["No job role/title found"];
          }

          return filtered;
        }}
        renderOption={(props, option) => (
          <li
            {...props}
            style={option === "No job role/title found" ? { color: 'red' } : {}}
            onMouseDown={(event) => {
              if (option === "No job role/title found") {
                event.preventDefault();
                setRoleInputValue('');
              }
            }}
          >
            {option}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Type to search for title"
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  {/* <MdSearch /> */}
                </InputAdornment>
              ),
              endAdornment: isOpen ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              ),
            }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          />
        )}
      />
    </div>
              


<div className="bg-gray-100 mt-3 p-2 rounded-sm">
      <h4 className="font-medium">Suggested Roles:</h4>
      <span className="flex flex-wrap mt-2 mb-3">
        {jobData.suggestedRoles.slice(0, isShowRolesMore ? jobData.suggestedRoles.length : maxRoleSlice).map((option, index) => (
          <div key={index}>
            {!selectedRole.includes(option.name) && (
              <Chip
                className="bg-white mx-1 my-1 px-1"
                variant="outlined"
                key={option.name}
                label={option.name}
                onClick={() => {
                  handleAddRoleOption(option.name);
                }}
              />
            )}
          </div>
        ))}
        <button
          onClick={() => {
            setIsShowRolesMore(!isShowRolesMore);
          }}
          className="font-semibold text-[#1967d2] cursor-pointer ml-2 flex items-center"
        >
          {isShowRolesMore ? "Show less" : "Show more"}
          {isShowRolesMore ? <IoIosArrowUp className="ml-1 text-md text-[#1967d2]" /> : <IoIosArrowDown className="ml-1 text-md text-[#1967d2]" />}
        </button>
      </span>
    </div>


            </div>
            </div>
          )}
        </div>
      </div>
      <div className=" mt-2 -ml-6 w-[105%] bg-[#F5F5F5] h-3"></div>
      <div>
        <div className="py-4">
          <div>
            <p className="text-md text-black font-semibold ">
              Additional Requirements (Optional)
            </p>
            <p className="text-sm">
              Add additional requirement so that we can help you find the right
              candidates
            </p>
          </div>
          <div>
            <div className="mt-2 flex">
              {jobData.skillOptions &&
                jobData.additionalRequirement_1.map((value, index) => {
                  if (
                    (index === 1 && formData.education_level === "Diploma") ||
                    formData.education_level === "Graduate" ||
                    formData.education_level === "Post Graduate"
                  ) {
                    return (
                      <button
                        key={index}
                        onClick={() => handleAddReq(value.value)}
                        className={`flex gap-1 items-center job-title-button ${
                          selectedInfo.includes(value.value) ? "selected" : ""
                        }`}
                      >
                        {value.label}
                        {selectedInfo.includes(value.value) ? (
                          <FiX className="p-[2px] text-2xl" />
                        ) : (
                          <AddIcon className="p-[2px]" />
                        )}
                      </button>
                    );
                  } else if (index !== 1) {
                    return (
                      <button
                        key={index}
                        onClick={() => handleAddReq(value.value)}
                        className={`flex gap-1 items-center job-title-button ${
                          selectedInfo.includes(value.value) ? "selected" : ""
                        }`}
                      >
                        {value.label}
                        {selectedInfo.includes(value.value) ? (
                          <FiX className="p-[2px] text-2xl" />
                        ) : (
                          <AddIcon className="p-[2px]" />
                        )}
                      </button>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          {isIndustry && (
            <div className="p-2 flex flex-col gap-2">
              
              <div className="flex items-center justify-between pb-3 ">
                <h4 className="font-semibold">Previous industry experience</h4>
                <FiX className="text-xl cursor-pointer text-gray-500" onClick={()=>handleAdditionalClose("industry")}/>
              </div>

              <p className="text-sm">Add industries in which candidates should have prior experience for this job</p>
              
              <div className="flex flex-wrap gap-2 mt-3 mb-1">
                {selectedIndustry.map((skill) => (
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={skill}
                    onDelete={() => {
                      handleIndustryToggle(skill);
                      setMaxIndustry(maxSlice - 1);
                    }}
                  />
                ))}

              </div>
              <Autocomplete
                className="w-1/2 mt-2 relative"
                freeSolo
                disableClearable
                // inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  // setInputValue(newInputValue);
                }}
                onChange={(event, newValue) => {
                  handleIndustryOption(newValue);
                }}
                options={industries.industries.map((option) => option.title)}
                filterSelectedOptions
                sx={{
                  // width: "100%",
                  // backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    padding: "0px",
                    // borderRadius: "8px",
                  },
                }}
                renderOption={(props, option) => (
                  <IndustryList setAnchorEl={setAnchorEl} setIndex = {setIndex} props = {props} option = {options} />
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    placeholder = " Type to search Industry"
                  />
                )}
              />
              {anchorEl && (
              <div>
                {industries.industries[index].keywords.map((sub, subIndex) => (
                <div key={subIndex} className='flex items-center mb-2'>
                  <input type='checkbox' />
                  <div className='ml-2'>{sub}</div>
                </div>
              ))}
              </div>
              )}
              <div className="flex flex-col">
                <label
                  htmlFor="degree"
                  className="text-sm font-thin text-black"
                >
                  You can select upto 10 degrees
                </label>
              </div>
            </div>
          )}

          {isDegree && (
            <div className="p-2 ">

              <div className="flex items-center justify-between pb-3 ">
                <h4 className="font-semibold">Degree / specialization</h4>
                <FiX className="text-xl text-gray-500" onClick={()=>isDegree((prev)=> !prev)}/>
              </div>
              
              <div className="flex flex-col">
                <Select
                  onChange={(newValue) => {
                    const newData = newValue.map((mp) => mp.value);
                    console.log(newData)
                    setDegree(newData)
                    onFormChange("additional_requirements.degrees", newData);
                  }}
                  closeMenuOnSelect={false}
                  // value={formData?.additional_requirements?.degrees}
                  value={degree.map(value => degrees.find(deg => deg.value === value))}
                  isMulti
                  options={degrees}
                />
                <label
                  htmlFor="degree"
                  className="text-sm font-thin text-black"
                >
                  You can select upto 10 degrees
                </label>
              </div>
            </div>
          )}

          {isGender && (
            <div>
              <div className="h-[1px] w-[85.8vw] -ml-[2.3vw] bg-[#F5F5F5] mt-3 mb-3"></div>
              <div className="form-group col-lg-8 col-md-12">

                <div className="flex items-center justify-between w-[149%]">
                <label className="customlabel flex items-center gap-2">
                  Gender{" "}
                  <CandidateTooltip title="Your job will be specially highlighted to candidates with selected gender,  but other interested candidates will still be able to apply"/>
                </label>
                <FiX className="text-xl cursor-pointer text-gray-500" onClick={()=>handleAdditionalClose("gender")}/>
                </div>
              
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-center",
                    gap: "10px",
                  }}
                  className="flex flex-row flex-wrap pb-4 pt-2"
                >
                  {jobData.genders.map((type) => (
                    <p
                      key={type}
                      className={`default-btn ${
                        formData.additional_requirements.gender === type
                          ? "active-btn"
                          : "inactive-btn"
                      }`}
                      onClick={() =>
                        handleButtonClick(
                          "additional_requirements.gender",
                          type
                        )
                      }
                    >
                      {type}
                    </p>
                  ))}
                </div>
                
              </div>
              {(clickedGenderType==="Male" || clickedGenderType==="Female") && (
                <div className="my-2.5 rounded flex gap-2 p-2 w-full items-center bg-[#fff9db] border-[1px] border-[#ffea92]">
                  <TiInfo className="text-xl text-yellow-700 ml-2"/>
                  <p className="text-md text-black">This may reduce the number of applications for this job</p>
                </div>
              )}
            </div>
          )}

          {isSkills && (
            <div className="p-2 ">
              <div className="h-[1px] w-[85.8vw] -ml-[2.8vw] bg-[#F5F5F5]  mb-3"></div>

              

              <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">Skills preference</h4>
                <CandidateTooltip title={"Your job will be specially highlighted to candidates with selected skill, but candidates with other skills can still apply."}/>
              </div> 
              <FiX className="text-xl cursor-pointer text-gray-500" onClick={()=>handleAdditionalClose("skills")}/>
              </div>
              

              <p className="text-sm pt-1">
                You can add up to 10 key skills to make your job visible to the
                right candidates.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsList.map((skill, index) => (
                  <Chip
                    variant="outlined"
                    color="info"
                    className="border-blue-600 bg-blue-200"
                    label={skill}
                    deleteIcon={<ClearIcon />}
                    onDelete={() => {
                      const updatedSkills = skillsList.filter(
                        (value) => value !== skill
                      );
                      setSkillsList(updatedSkills);
                      onFormChange(
                        "additional_requirements.skills",
                        updatedSkills
                      );
                    }}
                    onClick={() => {
                      const updatedSkills = skillsList.filter(
                        (value) => value !== skill
                      );
                      setSkillsList(updatedSkills);
                      onFormChange(
                        "additional_requirements.skills",
                        updatedSkills
                      );
                    }}
                  />
                ))}
                {selectedSkill.map((skill) => (
                  <Chip
                    variant="outlined"
                    color="info"
                    className="border-blue-600 bg-blue-200"
                    deleteIcon={<ClearIcon />}
                    label={skill}
                    onDelete={() => {
                      handleSkillToggle(skill);
                      setMaxSkillSlice(maxRoleSlice - 1);
                    }}
                  />
                ))}
              </div>

              


              <div className="flex">
                <input
                  type="text"
                  value={newSkill}
                  placeholder="Enter new perk"
                  className="focus:border-blue-600 border-[1.6px] hover:border-blue-400 border-gray-300 w-1/2 mt-3 h-10 rounded-md p-2"
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <button
                  onClick={handleAddSkill}
                  className="text-blue-400 font-semibold -ml-10 pt-3 right-7 self-center cursor-pointer"
                >
                  Add
                </button>
              </div>


<div className="bg-gray-100 mt-3 p-2 pt-3 rounded">
      <h4 className="font-medium text-gray-500">Suggested skills:</h4>
      <span className="flex flex-wrap mt-2 mb-3">
        {jobData?.suggestedSkills.slice(0, skillsShowMore ? jobData.suggestedSkills.length : skillsMaxSlice).map((option, index) => (
          <div key={index}>
            {!selectedSkill.includes(option.name) && (
              <Chip
                className="bg-white mx-1 my-1 px-1"
                variant="outlined"
                key={option.name}
                label={option.name}
                onClick={() => {
                  handleAddSkillOption(option.name);
                }}
              />
            )}
          </div>
        ))}
        <button
          onClick={() => {
            setSkillsShowMore(!skillsShowMore);
          }}
          className="font-semibold text-[#1967d2] cursor-pointer ml-2 flex items-center"
        >
          {skillsShowMore ? "Show less" : "Show more"}
          {skillsShowMore ? <IoIosArrowUp className="ml-1 text-md text-[#1967d2]" /> : <IoIosArrowDown className="ml-1 text-md text-[#1967d2]" />}
        </button>
      </span>
    </div>


            </div>
          )}

          {isRegionalLanguage && (
            <div className="mt-3">
              <div className="h-[1px] w-[85.8vw] -ml-[2.3vw] bg-[#F5F5F5] mt-3 mb-3"></div>

              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">Regional Language required</p>
                <FiX className="text-xl cursor-pointer text-gray-500" onClick={()=>handleAdditionalClose("language")}/>
              </div>

              <div className="mt-2 flex flex-wrap ">
                {jobData.languages.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguage(value)}
                    className={`flex items-center gap-1 job-title-button ${
                      regionalLanguage.includes(value) ? "selected" : ""
                    }`}
                  >
                    {value}
                    {regionalLanguage.includes(value) ? (
                      <FiX className="p-[2px] text-2xl" />
                    ) : (
                      <AddIcon className="p-[2px]" />
                    )}
                  </button>
                ))}
              </div>
              {isRegionalLanguage && (
                <div className="mx-1.5 my-2.5 rounded flex gap-2 p-2 w-[99%] items-center bg-blue-100">
                  <MdInfo className="text-xl text-[#1967d2] ml-2"/>
                  <p className="text-md text-black">The candidates who apply will be able to speak atleast one of selected languages</p>
                </div>
              )}

            </div>
          )}
          {isAge && (
            <div>
              <div className="h-[1px] w-[85.8vw] -ml-[2.3vw] bg-[#F5F5F5] mt-3 mb-3"></div>

              
              <div className="flex items-center justify-between">
              <p className="text-black font-semibold flex items-center gap-2">
                Age (in years)
                {/* <Tooltip title="Your job will be specially highlighted to candidates within selected age bracket,  but other interested candidates will still be able to apply">
                  <InfoOutlinedIcon fontSize="14px" sx={{ color: "#7e7e7e" }} />
                </Tooltip> */}
                <CandidateTooltip title="Your job will be specially highlighted to candidates within selected age bracket,  but other interested candidates will still be able to apply"/>
              </p>
              <FiX className="text-xl cursor-pointer text-gray-500" onClick={()=>handleAdditionalClose("age")}/>
              </div>

              <div className="flex items-center">
                <input
                  type="number"
                  name="minAge"
                  id="minAge"
                  value={minage}
                  min={18}
                  className="focus:border-blue-600 border-[1.6px] hover:border-blue-400 border-gray-300  mt-3 h-10 rounded-l-md p-2"
                  onChange={(e) => {
                    setMinAge(e.target.value)
                    onFormChange(
                      "additional_requirements.minAge",
                      e.target.value
                    )
                  }}
                />
                <div className="p-2 px-2.5 mt-3 bg-gray-300">to</div>
                <input
                  type="number"
                  name="minAge"
                  id="minAge"
                  value={maxage}
                  className="focus:border-blue-600 border-[1.6px] hover:border-blue-400 border-gray-300  mt-3 h-10 rounded-r-md p-2"
                  onChange={(e) =>{
                    setMaxAge(e.target.value)
                    onFormChange(
                      "additional_requirements.maxAge",
                      e.target.value
                    )
                  }}
                />
              </div>
              <div className="flex items-center gap-1 mt-1">
                <IoMdInformationCircle fontSize="12px" className="text-gray-400"/>
                <label htmlFor="minAge" className="text-sm text-gray-500 mt-[2px]">
                  Min. age must be above 18
                </label>
              </div>
            </div>
          )}
          {isAssets && (
            <div className="mt-3 mb-3">
            <div className="h-[1px] w-[85.8vw] -ml-[2.3vw] bg-[#F5F5F5] mt-3 mb-3"></div>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-black">Assets required</p>
              <FiX className="text-xl cursor-pointer text-gray-500" onClick={()=>handleAdditionalClose("assets")}/>
            </div>

            <div className="mt-2 flex flex-wrap">
              {jobData.assetsDetails.map((value, index) => (
                <button
                  key={index}
                  onClick={() => handleAssets(value)}
                  className={`flex items-center gap-1 job-title-button ${
                   asset.includes(value) ? "selected" : ""
                  }`}
                >
                  {value}
                  {asset.includes(value) ? (
                    <FiX className="p-[2px] text-2xl" />
                  ) : (
                    <AddIcon className="p-[2px]" />
                  )}
                </button>
              ))}
            </div>

          </div>
          )}
        </div>
      </div>

      <div className=" mt-2 -ml-6 w-[105%] bg-[#F5F5F5] h-3"></div>

      <div className="form-group col-lg-12 col-md-12 mt-4">
        <h1
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 600,
            color: "rgb(23, 43, 77)",
            fontFamily: "sans-serif",
          }}
        >
          Job Description 
          {/* <span style={{ color: "red" }}> *</span> */}
        </h1>
        <p>
          Describe the responsibilities of this job and other specific
          requirements here.
        </p>
      </div>
      <div className="form-group col-lg-12 col-md-12">
        <label className="customlabel" style={{ marginTop: "10px" }}>
          Job description / Additional requirement{" "}
          {/* <span style={{ color: "red" }}> *</span> */}
        </label>
        <ReactQuill
          theme="snow"
          value={formData.job_description}
          placeholder="Enter the job description, including the main responsibility and tasks..."
          modules={quillModules}
          onChange={(content) => onFormChange("job_description", content)}
          required
          style={{ height: "200px", paddingBottom: "20px" }}
        />
        <p className="pt-4">
          Please mention if you have any specific requirements here, we will
          check the candidates for you.
        </p>
        {/* {errors.job_description && (<span style={{ color: "red" }}>{errors.job_description}</span>)} */}
      </div>
    </div>
  );
}