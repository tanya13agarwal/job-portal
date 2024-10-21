import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  createFilterOptions,
} from "@mui/material";
import OptInfo from "../OptInfo";
import debounce from "lodash.debounce";
import React, { useState, useEffect, useMemo } from "react";
import "../Style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ClearIcon from "@mui/icons-material/Clear";
import WalkinKnowMore from "../common/WalkinKnowMore";
import { FaPlus } from "react-icons/fa6";
import { MdDownload, MdInfo } from "react-icons/md";
import InterviewInfoImage from '../../../../../../assets/images/logo.jpeg';


const filter = createFilterOptions();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const interviewTypes = ["In-Person / Walk-in Interview", "Telephonic/Online Interview"];
const yesToMyselfOptions = [
  "All Candidates",
  "Only matched Candidates (~60% of all candidates)",
];

export default function InterviewInfo({ formData, activeStep, onFormChange, errors, setErrors , refs }) {

 
  const [recruiter_Name, setRecruiter_Name] = React.useState(null);
  const recruiter_names = [];

  const [open, setOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [startDate, setStartDate] = useState(formData?.job_data?.interview_info?.walk_in_details?.date_details?.start_date);
  const [endDate, setEndDate] = useState(formData?.job_data?.interview_info?.walk_in_details?.date_details?.end_date);
  const [startTime, setStartTime] = useState(formData?.job_data?.interview_info?.walk_in_details?.time_details?.start_time);
  const [endTime, setEndTime] = useState(formData?.job_data?.interview_info?.walk_in_details?.time_details?.end_time);
  const [filteredCompanyNames, setFilteredCompanyNames] = useState([]);
  const [validationMessage, setValidationMessage] = useState("");
  const [timeValidationMessage, setTimeValidationMessage] = useState("");
  const [dis, setDis] = useState(false);
  const [additionalInfoVisible, setAdditionalInfoVisible] = useState(false);
  const [isContact,setIsContact] = useState(false);
  const [yesToMyselfOpt,setYesToMyselfOpt] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if(isChecked) {
      onFormChange("company_address" , formData.interview_address)
    }
  } , [isChecked])

  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const options = [
    "Yes, to myself",
    "Yes, to other recruiter",
    formData.walk_in_interview === "Yes"
      ? ""
      : "No, I will contact candidates first",
  ].filter(Boolean  ); // Options for contactPreference

  console.log(isValid, "Hello");
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
    setIsValid(true);
  };

  useEffect(() => {
    if (formData.job_data.interview_info.walk_in_details.date_details) {
      const { startDate, endDate } = formData?.job_data?.interview_info?.walk_in_details?.date_details;

      if (startDate && endDate) {
        if (new Date(startDate) > new Date(endDate)) {
          setValidationMessage("Start date cannot be greater than end date.");
        } else {
          setValidationMessage("");
        }
      }
    }
  }, [formData?.job_data?.interview_info?.walk_in_details?.date_details]);

  useEffect(() => {
    if (formData.job_data.interview_info.walk_in_details.time_details) {
      const { startTime, endTime } = formData.job_data.interview_info.walk_in_details.time_details;
      if (startTime && endTime) {
        const start = new Date(`1970-01-01T${startTime}:00`);
        const end = new Date(`1970-01-01T${endTime}:00`);
        if (start > end) {
          setTimeValidationMessage(
            "Start time cannot be greater than end time."
          );
        } else {
          setTimeValidationMessage("");
        }
      }
    }
  }, [formData?.job_data?.interview_info?.walk_in_details?.time_details]);

  useEffect(() => {
    validateForm();
  }, [formData]); // Run whenever formData changes

  useEffect(() => {
    if(startDate && endDate) {
      onFormChange("job_data.interview_info.walk_in_details.date_details", {
        start_date: startDate,
        end_date: endDate,
      });
    }

    if (startTime && endTime) {
      onFormChange("job_data.interview_info.walk_in_details.time_details", {
        start_time: startTime,
        end_time: endTime,
      });
    }
  }, [startDate, endDate, startTime, endTime]);

  const [selectedSkills, setSelectedSkills] = useState([]);

  // useEffect(() => {
  //   const form = document.querySelector(".default-form");
  //   if (form) {
  //     form.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [activeStep]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);
  
  useEffect(() => {
    setShowRecruiterFields(formData.contactPreference === "Yes, to other recruiter" ? true : false)
  }, [formData.contactPreference]);

  const [showRecruiterFields, setShowRecruiterFields] = useState(false);
  const handleButtonClick = (fieldName, option) => {
    // Update the form data with the selected option
    console.log("bshbs:",option);
    
    onFormChange(fieldName, option);
    setErrors((prevErrors) => ({
      ...prevErrors,
      interview_mode: "",
    }));

    // Additional functionality based on the field name and option
    if (fieldName === "contactPreference") {
      // Modify as needed based on the option
      if (option === "Yes, to other recruiter") {
        setShowRecruiterFields(true);
      } else {
        setShowRecruiterFields(false);
      }
    }
    // Add additional conditions for other field names if needed
  };

  const handleFormChange = (fieldName, value) => {
    // event.preventDefault();

    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   fieldName: "",
    // }));
    const limitedValue = value.slice(0, 300);
    onFormChange(fieldName, limitedValue);
    
  };

  const toggleAdditionalInfo = () => {
    setAdditionalInfoVisible(!additionalInfoVisible);
  };

  return (
    <div
      className="row sm:mx-0 bg-white lg:mx-[100px] lg:mr-[100px] sm:mr-0 mb-[10px] p-6"
      id="interViewDetails"
      ref={refs.interview_mode}
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
          Interview method and address
        </h1>
        <p>Let candidates know how interview will be conducted for this job.</p>
      </div>
      <div className="form-group col-lg-8 col-md-12">
        <label className="customlabel">
          Type Of Interview <span style={{ color: "red" }}> *</span>
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
          }}
        >
          {interviewTypes.map((type) => (
            <p
              key={type}
              className={`default-btn ${
                formData?.job_data?.interview_info?.mode === type
                  ? "active-btn"
                  : "inactive-btn"
              }`}
              onClick={() => handleButtonClick("job_data.interview_info.mode", type)}
            >
              {type}
            </p>
          ))}
          {errors.interview_mode && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.interview_mode}</p></div>)}
        </div>
      </div>

      {formData?.job_data?.interview_info?.mode === "" && (
        <div className="form-group col-lg-8 col-md-12 w-full">
        <label className="customlabel">
          Company Address <span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          name="office_address"
          placeholder="Search for your address / locality"
          style={{
            backgroundColor: "white",
            borderColor: "darkgrey",
          }}
          value={formData.office_location}
          onChange={(e) => handleFormChange("office_location", e.target.value)}
          // required
        />
        {/* <CreatableSelect
        isClearable
        placeholder={formData?.office_location}
        value={value}
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => handleTitleChange(newValue)}
        onCreateOption={handleCreate}
        options={titlesCategory.jobs}
        formatCreateLabel={(inputValue) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaPlus className="text-[#1967d2]" style={{ marginRight: '5px' }} />
            {Add "${inputValue}"}
          </div>
        )}
        /> */}
        {errors.interview_office_address && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.interview_office_address}</p></div>)}
      </div>
      )}

      {formData?.job_data?.interview_info?.mode === "In-Person / Walk-in Interview" && (
        <div ref={refs.interview_address}>
          <div className="form-group col-lg-8 col-md-12 w-full">
            <label className="customlabel">
              Interview Address <span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              name="interview_address"
              placeholder="Interview Address"
              style={{
                backgroundColor: "white",
                borderColor: "darkgrey",
              }}
              value={formData.interview_address}
              onChange={(e) =>
                onFormChange("interview_address", e.target.value)
              }
              // required
            />
            {errors.interview_address && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.interview_address}</p></div>)}
          </div>

          <div
            style={{ cursor: "pointer", marginTop: "2px" }}
            onClick={toggleAdditionalInfo}
            className="mb-4"
          >
            {!additionalInfoVisible ? <div className="flex items-center gap-1">
              <FaPlus className="text-[#1967d2]"/>
              <p className="text-[#1967d2]">Add Floor/ Plot No. / Shop No. (Optional)</p>
              </div> : <div className="">
              <p className="text-black font-medium">Add Floor/ Plot No. / Shop No. (Optional)</p>
              </div>}

          </div>
          {additionalInfoVisible && (
            <input
              type="text"
              name="additional_info"
              className="px-3 py-2 -translate-y-[34%] border-[1px] rounded-md form-group col-md-12"
              style={{
                backgroundColor: "white",
                borderColor: "darkgrey",
                // marginTop: "5px",
              }}
              placeholder="Enter office floor / plot no. / shop no. (optional)"
              value={formData.additional_info}
              onChange={(e) => onFormChange("shop_number", e.target.value)}
            />
          )}


            <div className="flex flex-col gap-2 pb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="form-checkbox w-[17px] h-[17px]"
                />
                <span>Company address is same as Interview address</span>
              </label>
              {!isChecked && (
                <div className="pt-3">
                  <label className="font-semibold">Company address<span style={{ color: "red" }}>*</span></label>
                  <input
                    type="text"
                    placeholder="Search for your address/locality"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    onChange={(e) => onFormChange("company_address" , e.target.value)}
                  />
                </div>
              )}
            </div>



          <div ref={refs.walk_in_enabled} className="form-group col-lg-8 col-md-12">
            <label className="customlabel">
              Is this a Walk-in Interview?<span style={{ color: "red" }}>*</span>{" "}
              <button className="mr-2 underline text-sm font-medium" onClick={() => setIsModalOpen(true)}>Know More</button>
              <span className="bg-[#1967d2] rounded-xl text-white text-xs font-normal py-[1px] px-[9px]">New</span>
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <button
                className={`default-btn ${
                  formData?.job_data?.interview_info?.walk_in_enabled === "Yes"
                    ? "active-btn"
                    : "inactive-btn"
                }`}
                onClick={() => handleFormChange("job_data.interview_info.walk_in_enabled", "Yes")}
              >
                Yes
              </button>
              <button
                className={`default-btn ${
                  formData?.job_data?.interview_info?.walk_in_enabled === "No"
                    ? "active-btn"
                    : "inactive-btn"
                }`}
                onClick={() => handleFormChange("job_data.interview_info.walk_in_enabled", "No")}
              >
                No
              </button>
            </div>
            {errors.walk_in_enabled && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.walk_in_enabled}</p></div>)}
          </div>

          {formData?.job_data?.interview_info?.walk_in_enabled === "Yes" && (
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }} className="w-full flex flex-row gap-0">
                  <div className=" col-lg-4 col-md-6 w-[50%]">
                    <label className="customlabel">
                      Start Date <span style={{ color: "red" }}> *</span>
                    </label>
                    {/* {errors.walk_in_enabled && (<span style={{ color: "red" }}>{errors.walk_in_enabled}</span>)} */}
                  </div>
                  <div className=" col-lg-4 col-md-6 w-[50%]">
                    <label
                      className="customlabel"
                      style={{ fontSize: "15px", marginLeft: "18px" }}
                    >
                      End Date <span style={{ color: "red" }}> *</span>
                    </label>
                    {/* {errors.walk_in_enabled && (<span style={{ color: "red" }}>{errors.walk_in_enabled}</span>)} */}
                  </div>
                  
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                  <div ref={refs.start_date} className="form-group col-lg-2 col-md-4 w-[50%]">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {setStartDate(date);
                        setErrors((prevErrors) => ({
                        ...prevErrors,
                        startDate: "",
                        }));
                        
                      }}
                      // onChange={(date)=>{setStartDate(date); handleFormChange("job_data.interview_info.walk_in_details.date_details.startDate",startDate);}}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/mm/yyyy"
                      className="form-control"
                      // required
                      customInput={<input style={{ height: "40px" }} />}
                    />
                    {errors.start_date && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.start_date}</p></div>)}
                  </div>
                  <div ref={refs.end_date} className="form-group col-lg-2 col-md-4 w-full">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {setEndDate(date);
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          endDate: "",
                          }));
                      }}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/mm/yyyy"
                      className="form-control w-full"
                      // required
                      customInput={<input style={{ height: "40px", width: "100%" }} />}
                    />
                    {errors.end_date && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.end_date}</p></div>)}
                  </div>
                </div>
                <span className="text-red-400 font-bold mb-2 flex justify-center items-center gap-2">
                  {validationMessage && (
                    <svg
                      className="h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                  )}

                  <span> {validationMessage}</span>
                </span>
              </div>

              {/* <div style={{ display: "flex", gap: "20px" }}>
                <div className="form-group col-lg-4 col-md-6 ">
                  <label className="customlabel">
                    Walk-in timings <span style={{ color: "red" }}> *</span>
                  </label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => {setStartTime(e.target.value);
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        endDate: "",
                      }));
                    }}
                    className="form-control"
                    style={{ width: "90%", height: "40px" }}
                    // required
                  />
                  {errors.start_time && (<span style={{ color: "red" }}>{errors.start_time}</span>)}
                </div>

                <div className="form-group col-lg-4 col-md-6">
                  <label className="customlabel">
                    {/* End Time <span style={{ color: "red" }}> *</span> */}
                  {/* </label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => {setEndTime(e.target.value);
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        endDate: "",
                      }));
                    }}
                    className="form-control"
                    style={{ width: "90%", height: "40px" }}
                    // required
                  />
                  {errors.end_time && (<span style={{ color: "red" }}>{errors.end_time}</span>)}
                </div>
              </div>
              <span className="text-red-400 font-bold mb-2 flex justify-center items-center gap-2"> */}
                {timeValidationMessage && (
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                )}

                <span> {timeValidationMessage}</span>
              {/* </span> */}


              {/* Walk-in timings */}
              <label className="customlabel pb-2">
                    Walk-in timings <span style={{ color: "red" }}> *</span>
              </label>
              <div className="flex pb-2 form-group col-lg-4 col-md-6 ">
              
                <div ref={refs.start_time} >
                  <FormControl sx={{ minWidth: 270 }}  size="small">
                    <Select
                      value={startTime}
                      defaultValue={10}
                      onChange={(e) => {setStartTime(e.target.value);
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          endDate: "",
                        }));
                      }}
                      // className="form-control"
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem> */}
                      <MenuItem value={"8:00"}>8:00 AM</MenuItem>
                      <MenuItem value={"8:30"}>8:30 AM</MenuItem>
                      <MenuItem value={"9:00"}>9:00 AM</MenuItem>
                      <MenuItem value={"9:30"}>9:30 AM</MenuItem>
                      <MenuItem value={"10:00"}>10:00 AM</MenuItem>
                      <MenuItem value={"10:30"}>10:30 AM</MenuItem>
                      <MenuItem value={"11:00"}>11:00 AM</MenuItem>
                      <MenuItem value={"11:30"}>11:30 AM</MenuItem>
                      <MenuItem value={"12:00"}>12:00 PM</MenuItem>
                      <MenuItem value={"12:30"}>12:30 PM</MenuItem>
                      <MenuItem value={"1:00"}>1:00 PM</MenuItem>
                      <MenuItem value={"1:30"}>1:30 PM</MenuItem>
                      <MenuItem value={"2:00"}>2:00 PM</MenuItem>
                      <MenuItem value={"2:30"}>2:30 PM</MenuItem>
                      <MenuItem value={"3:00"}>3:00 PM</MenuItem>
                      <MenuItem value={"3:30"}>3:30 PM</MenuItem>
                    </Select>
                    {/* <FormHelperText>Without label</FormHelperText> */}
                  </FormControl>
                  {errors.start_time && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.start_time}</p></div>)}
                </div>

                <div className="text-black text-xl p-2 font-semibold"> - </div>

                <div ref={refs.end_time}>
                  <FormControl sx={{ minWidth: 270 }}  size="small">
                    <Select
                      value={endTime}
                      defaultValue={16}
                      onChange={(e) => {setEndTime(e.target.value);
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          endDate: "",
                        }));
                      }}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem> */}
                      <MenuItem value={"10:30"}>10:30 AM</MenuItem>
                      <MenuItem value={"11"}>11:00 AM</MenuItem>
                      <MenuItem value={"11:30"}>11:30 AM</MenuItem>
                      <MenuItem value={"12"}>12:00 PM</MenuItem>
                      <MenuItem value={"12:30"}>12:30 PM</MenuItem>
                      <MenuItem value={"1:00"}>1:00 PM</MenuItem>
                      <MenuItem value={"1:30"}>1:30 PM</MenuItem>
                      <MenuItem value={"2:00"}>2:00 PM</MenuItem>
                      <MenuItem value={"2:30"}>2:30 PM</MenuItem>
                      <MenuItem value={"3:00"}>3:00 PM</MenuItem>
                      <MenuItem value={"3:30"}>3:30 PM</MenuItem>
                      <MenuItem value={"4:00"}>4:00 PM</MenuItem>
                      <MenuItem value={"4:30"}>4:30 PM</MenuItem>
                      <MenuItem value={"5:00"}>5:00 PM</MenuItem>
                      <MenuItem value={"5:30"}>5:30 PM</MenuItem>
                      <MenuItem value={"6:00"}>6:00 PM</MenuItem>
                      <MenuItem value={"6:30"}>6:30 PM</MenuItem>
                      <MenuItem value={"7:00"}>7:00 PM</MenuItem>
                      <MenuItem value={"7:30"}>7:30 PM</MenuItem>
                      <MenuItem value={"8:00"}>8:00 PM</MenuItem>
                    </Select>
                    {/* <FormHelperText>Without label</FormHelperText> */}
                  </FormControl>
                  {errors.end_time && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.end_time}</p></div>)}
                </div>

              </div>


              <div ref={refs.other_instructions} className="form-group col-lg-8 col-md-12 w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Other Instructions
                  {/* <span className="text-red-500"> *</span> */}
                </label>
                <div className="relative">
                <input
                  type="text"
                  name="additional_docs"
                  placeholder="e.g, Bring ID card, CV / Resume etc."
                  className="w-full bg-white border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 text-left"
                  maxLength={300}
                  // style={{ height: '130px',paddingTop: '-50%'}}
                  value={formData?.job_data?.interview_info?.walk_in_details?.other_instructions || ''}
                  onChange={(e) =>
                    handleFormChange("job_data.interview_info.walk_in_details.other_instructions", e.target.value)
                  }
                  // required
                />
                {/* {errors.other_instructions && (<span className="text-red-500">{errors.other_instructions}</span>)} */}
                <div className="text-gray-500 mt-1 text-sm flex justify-end">
                  {`${formData?.job_data?.interview_info?.walk_in_details?.other_instructions?.length || 0}/300`}
                </div>
                </div>
              </div>

              
            </div>
          )}
        </div>
      )}

      {formData?.job_data?.interview_info?.mode === "Telephonic/Online Interview" && (
        <div ref={refs.interview_office_address} className="form-group col-lg-8 col-md-12 w-full">
          <label className="customlabel">
            Company Address <span style={{ color: "red" }}> *</span>
          </label>
          <input
            type="text"
            name="office_address"
            placeholder="Search for your address / locality"
            style={{
              backgroundColor: "white",
              borderColor: "darkgrey",
            }}
            className="w-full"
            value={formData.office_location}
            onChange={(e) => handleFormChange("office_location", e.target.value)}
            // required
          />
          {/* <CreatableSelect
          isClearable
          placeholder={formData?.office_location}
          value={value}
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={(newValue) => handleTitleChange(newValue)}
          onCreateOption={handleCreate}
          options={titlesCategory.jobs}
          formatCreateLabel={(inputValue) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaPlus className="text-[#1967d2]" style={{ marginRight: '5px' }} />
              {Add "${inputValue}"}
            </div>
          )}
          /> */}
          {errors.interview_office_address && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.interview_office_address}</p></div>)}
        </div>
      )}



      <div className="min-w-[110vw] mb-6 -ml-5 lg:-ml-[24px] bg-[#F5F5F5] mt-4 h-3"></div>

      {/* Contact Preference as buttons */}
      <div ref={refs.contactPreferenceFilter} className="form-group col-lg-8 col-md-12">
        <label className="customlabel">
          Communication Preferences <span style={{ color: "red" }}> *</span>
        </label>
        <div className="mt-1 mb-4">
          {/* <OptInfo
            content={Leads information will be accessible on Job chaahiye portal and can be downloaded in excel format}
          /> */}
          <div className="flex gap-2 w-[84%] items-center p-2 bg-blue-100 border-1 rounded border-blue-300">
            <MdDownload className="text-xl text-[#1967d2]"/>
            <p className="text-black">Leads information will be accessible on Apna portal and can be <b>downloaded in excel</b> format</p>
          </div>
        </div>
        <p className="customlabel">
          Do you want candidates to contact you via Call / Whatsapp after they
          apply?
          <span style={{ color: "red" }}> *</span>
        </p>
        <FormControl component="fieldset" style={{ marginTop: "6px" }}>
          <RadioGroup
            aria-label="contact preference"
            name="contactPreference"
            value={formData.contactPreference}
            onChange={(e) =>
              handleButtonClick("contactPreference", e.target.value)
            }
            onClick={()=>setIsContact(true)}
            col // Display options in a row
          >
            {options.map((option) => {
              
              let dis ;              
              if(formData?.job_data?.interview_info?.walk_in_enabled === "Yes" && option === "No, I will contact candidates first") {
                // setDis(true);
                dis = true;
              }
              else {
                dis = false;
              }

              return (
                <>
                  <FormControlLabel
                    key={option}
                    disabled = {dis}
                    value={option}
                    control={<Radio fontSize="small" />}
                    label={option}
                  />
                  <div className={`${dis ? "block" : "hidden"} bg-gray-50 p-1 text-sm ml-7 rounded`}>
                    This option is not available for walk-in interview
                  </div>
                </>
              )
            })}
          </RadioGroup>
          {errors.contactPreferenceFilter && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.contactPreferenceFilter}</p></div>)}
        </FormControl>
        
      </div>

      {showRecruiterFields && (
        <div>
          <div className="font-semibold">Fill other recruiter details</div>
          <div ref={refs.recruiterName} className="flex flex-col">
            <p style={{ marginTop: "10px" }} className="customlabel">
              Recruiter's Name<span style={{ color: "red" }}> *</span>
            </p>
            {/* <TextField
            placeholder="Enter Full Name"
              value={formData.recruiterName}
              onChange={(e) => handleFormChange("recruiter_details.recruiterName", e.target.value)}
              style={{ width: "50%", height: "30px" }}
            /> */}
            <Autocomplete
            value={formData?.recruiter_details?.recruiterName}
            // onChange={(event, newValue) => {
            //   if (typeof newValue === 'string') {
            //     setRecruiterName({
            //       title: newValue,
            //     });
            //   } else if (newValue && newValue.inputValue) {
            //     // Create a new value from the user input
            //     setRecruiterName({
            //       title: newValue.inputValue,
            //     });
            //   } else {
            //     setRecruiterName(newValue);
            //   }
            // }}
            onChange={(e, newValue) => {if (typeof newValue === 'string') {
                  setRecruiter_Name({
                    title: newValue,
                  });
                  onFormChange("recruiter_details.recruiterName", newValue);
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setRecruiter_Name({
                    title: newValue.inputValue,
                  });
                  onFormChange("recruiter_details.recruiterName", newValue.inputValue);
                } else {
                  setRecruiter_Name(newValue);
                  onFormChange("recruiter_details.recruiterName", newValue);
                }}}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some((option) => inputValue === option.title);
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `+ Add "${inputValue}"`,
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeyss
            id="free-solo-with-text-demo"
            options={recruiter_names}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  {option.title}
                </li>
              );
            }}
            sx={{ width: 583 }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="" />
            )}
            />
            {errors.recruiterName && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.recruiterName}</p></div>)}
          </div>


          <div ref={refs.recruiterPhoneNumber} className="flex flex-col">
            <p style={{ marginTop: "40px" }} className="customlabel">
              Recruiter's Whatsapp Number <span style={{ color: "red" }}> *</span>
            </p>
            <TextField
            placeholder="Enter Number"
              value={formData.recruiterPhoneNumber}
              onChange={(e) =>
                handleFormChange("recruiter_details.recruiterPhoneNumber", e.target.value)
              }
              style={{ width: "50%", height: "30px" }}
            />
            {errors.recruiterPhoneNumber && (<div className="text-red-500 text-sm flex items-center gap-1 translate-y-[120%]"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.recruiterPhoneNumber}</p></div>)}
          </div>

          <div ref={refs.recruiterEmail} className="flex flex-col">
            <p style={{ marginTop: "40px" }} className="customlabel">
              Recruiter's Email ID<span style={{ color: "red" }}> *</span>
            </p>
            <TextField
            placeholder="Enter Email"
              value={formData.recruiterEmail}
              onChange={(e) => handleFormChange("recruiter_details.recruiterEmail", e.target.value)}
              style={{ width: "50%", height: "30px" }}
            />
            {errors.recruiterEmail && (<div className="text-red-500 text-sm flex items-center gap-1 translate-y-[120%]"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.recruiterEmail}</p></div>)}
            </div>
        </div>
      )}


      {(formData.contactPreference === "Yes, to myself" || formData.contactPreference ==="Yes, to other recruiter") && (
        <div>
          <p ref={refs.candidatePreference} className={`flex gap-1 items-center ${formData.contactPreference ==="Yes, to other recruiter" ? "mt-12":"" }`}>
            <p className="customlabel ">Which candidates should be able to contact you ?<span style={{ color: "red" }}> *</span></p>
            <div className="px-2.5 py-0.5 rounded-xl bg-[#1967d2] text-sm text-white">New</div>
          </p>
          <FormControl component="fieldset" style={{ marginTop: "6px" }}>
            <RadioGroup
              aria-label="contact preference"
              name="contactPreferenceFilter"
              value={formData.contactPreferenceFilter}
              onChange={(e) =>
                handleButtonClick("contactPreferenceFilter", e.target.value)
              }
              col // Display options in a row
            >
              {yesToMyselfOptions.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  onChange={()=>setYesToMyselfOpt(option)}
                  control={<Radio fontSize="small" />}
                  label={option}
                />
              ))}
            </RadioGroup>
            {errors.candidatePreference && (<div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.candidatePreference}</p></div>)}
            
            <span className="flex flex-row gap-2 bg-stone-100 mt-2 px-2 py-0.5 items-center rounded">
              <p className="text-sm">
                Matched candidates have some OR all key criteria such as
                education, work experience, skills, industry, or language as
                well as those who fulfil preferences like age and location.
              </p>
              <button className="underline text-sm" onClick={() => setOpen(true)}>
                Know more
              </button>
            </span>
          </FormControl>
        </div>
      )}


      <div className="min-w-[110vw] mb-6 -ml-5 lg:-ml-[24px] bg-[#F5F5F5] mt-4 h-3"></div>
      
      {isContact && 
      <div className="form-group col-lg-6 col-md-12">
        <label className="customlabel" style={{ marginTop: "13px" }}>
          Notification Preferences
        </label>
        <div className="flex">
        <p className="font-semibold flex items-center">
          <p className="text-nowrap font-semibold pr-1">Every time you receive a </p>
          {yesToMyselfOpt==="All Candidates" ? <p></p> : <p className="font-semibold pr-1">matched </p>}
          <p className="text-nowrap font-semibold pr-1">candidate application,do you want</p>
          <svg
            width={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="whatsapp"
            className="mx-2"
          >
            <path
              fill="#4CAF50"
              d="M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8z"
            ></path>
            <path
              fill="#FAFAFA"
              d="M12.657 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z"
            ></path>
          </svg>
        </p>
        <p className="text-nowrap font-semibold">Whatsapp Alerts from JobChaahiye?<span style={{ color: "red" }}>*</span></p>
        
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="notifications"
              name="notifications"
              value={formData.notifications}
              onChange={(e) =>
                handleButtonClick("notifications", e.target.value)
              }
              col // Display options in a row
            >
              {["Yes, to other recruiter", "No, send me summary once a day"].map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
                
              ))}
              {formData?.recruiter_details?.recruiterName !== "" && <p>Application alerts will be sent to {formData?.recruiter_details?.recruiterName}</p> }
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      }


      {/* Modal */}
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="rounded-md" sx={{
            ...style,
            border: 'none',
            boxShadow: 'none', 
          }}>
            <div className="flex justify-end absolute right-3 top-3">
              <button onClick={() => setOpen(false)}>
                <ClearIcon />
              </button>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-200 w-full h-[300px] flex items-center rounded">
              <img src={InterviewInfoImage} className="w-[90%] h-[100%] pt-4 translate-x-[2%]" alt=""/>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <h4 className="text-xl font-semibold">
                  Who is a matched candidate?
                </h4>
                <p className="text-[16px] ">
                  Applicants meeting your job criteria will have a{" "}
                  <b>‘Matched’</b>tag in your dashboard.
                </p>
                <span className="flex flex-row gap-1 items-start">
                  <TaskAltIcon fontSize="small" className="text-blue-500" />
                  <p className="text-[16px] ">
                    This includes candidates who match some OR all key criteria
                    such as education, work experience, skills, industry, or
                    language as well as those who fulfill preferences like age
                    and location.
                  </p>
                </span>
                <p className="bg-slate-100 text-[16px] mt-2 px-3 py-2 rounded">
                  When you view them in your job dashboard, they have a
                  <b> ‘Matched’</b> tag.
                </p>
              </div>
              <div className="flex justify-center mt-4 -mb-2">
                <button
                  className="px-7 py-2 bg-blue-500 w-fit text-white rounded"
                  onClick={() => setOpen(false)}
                >
                  Okay, got it
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>


      {isModalOpen && <WalkinKnowMore isOpen={isModalOpen} onClose={handleCloseModal} />}

    </div>
  );
}
