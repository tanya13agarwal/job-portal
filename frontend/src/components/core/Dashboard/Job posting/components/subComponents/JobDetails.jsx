import TooltipBtn from "./TooltipBtn";
import OptInfo from "../OptInfo";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState, useEffect, useMem, useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../Style.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import AutoComplete from "./AutoComplete";
// import { Autocomplete } from "@mui/material";
import jobData from "../../data/jobData.json";
import cities from '../../data/cities.json';
import { Autocomplete, Checkbox} from '@mui/material';
import CreatableSelect from "react-select/creatable";
import ClearIcon from '@mui/icons-material/Clear';
import { ListItemText, MenuItem, Select, FormControl, InputLabel, OutlinedInput,Tooltip, IconButton } from '@mui/material';
import {Modal, Box, Typography, InputAdornment, Radio, RadioGroup, FormControlLabel, FormLabel, Popover} from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import { FiX } from 'react-icons/fi';
import logo from "../../../../../../assets/images/logo.jpeg";
import { Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import { BiExpandVertical } from "react-icons/bi";
import MapComponent from "../common/MapComponent";

import {
  companyName,
  titlesCategory,
  // categories,
  departments,
  PreferredCityOptions,
} from "../../../../../../utils/onboardingData/companydata";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { ArrowDropUp, ArrowDropDown ,  PlusOne } from "@mui/icons-material";
// import { MdPlusOne } from 'react-icons/md';
import { FaPlus } from "react-icons/fa6";
// import ImageTooltip from "./ImageTooltip";
import { MdInfo } from "react-icons/md";

import { MdMyLocation } from "react-icons/md";
import CandidateTooltip from "./CandidateTooltip";
import location from "../../../../../../assets/images/logo.jpeg";


let selectedPerksDefault = [];

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const defaultOptions = [
  createOption("One"),
  createOption("Two"),
  createOption("Three"),
];


const LocationModal = ({ open, handleClose, locationData, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="flex flex-col items-center justify-center"
      maxWidth="md"
      fullWidth
    >
      <div className="flex flex-col items-center justify-center px-3 py-2">
        <FiX className="self-end text-2xl cursor-pointer mt-2" onClick={handleClose} />
        <img src={location} alt="Location Icon" className="w-[45%] h-[45%]" />
        <DialogTitle>
          <p className="text-xl font-semibold text-black">Location found</p>
        </DialogTitle>
        <DialogContent className="mb-2 text-center">
          <Typography variant="body1" className="pb-2">Your Location</Typography>
          <Typography variant="body2"><p className="font-semibold text-md text-black">{locationData}</p></Typography>
        </DialogContent>
        <DialogActions className="flex items-center gap-2 mb-2">
          <button onClick={handleClose} className="px-4 py-2 rounded border border-gray-700 text-black font-medium">Back</button>
          <button onClick={() => onConfirm(locationData)} className="px-4 py-2 rounded font-medium bg-[#1967d2] text-white">Confirm</button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default function JobDetails({ formData, onFormChange, activeStep, errors, setErrors , refs}) {
  const [jobCategories, setJobCategories] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [shdetail, setShowDetail] = useState(false);
  const [additionalInfoVisible, setAdditionalInfoVisible] = useState(false);
  const [minSalary, setMinSalary] = useState(
    formData?.salary_breakdown?.minSalary || null
  );
  // const [minSalary, setMinSalary] = useState("");
  const [showRecruiterFields, setShowRecruiterFields] = useState(false);
  // const [filteredCategories, setFilteredCategories] = useState(categories);

  const [maxSalary, setMaxSalary] = useState(
    formData?.salary_breakdown?.maxSalary || null
  );
  // const [maxSalary, setMaxSalary] = useState("");
  const [averageIncentive, setAverageIncentive] = useState(
    formData?.salary_breakdown?.averageIncentive || null
  );
  // const [averageIncentive, setAverageIncentive] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedPerks, setSelectedPerks] = useState(formData?.job_Data?.benefits || []);
  const [companyNames, setCompanyNames] = useState(companyName);
  const [newPerkInput, setNewPerkInput] = useState("");
  const [showAddPerkInput, setShowAddPerkInput] = useState(false);
  const [perksOptions, setPerksOptions] = useState(jobData.perksOptionsDefault );
  const [showOfficeAddress, setShowOfficeAddress] = useState(formData?.job_location_type === "Work From Office" ? true : false);
  const [showReceiveApplications, setShowReceiveApplications] = useState(true);
  const [showCityNameField, setShowCityNameField] = useState(false);
  const [showFieldJobArea, setShowFieldJobArea] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState(null);
  // const [showList, setShowList] = useState(false);
  const [payType , setPayType] = useState("");
  const [minSalaryTouched, setMinSalaryTouched] = useState(false);
  const [maxSalaryTouched, setMaxSalaryTouched] = useState(false);
  const [averageIncentiveTouched, setAverageIncentiveTouched] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState(null);
  const [titleInputValue, setTitleInputValue] = useState("");

  const [fieldJob,setFieldJob] = useState(false);
  const [consulClick,setConsulClick] = useState(false);
  const categories = departments.reduce((acc, department) => {
    acc[department?.name] = department.sub_department.map(subDept => subDept?.name);
    return acc;
  }, {});

  const [showList, setShowList] = useState(false);
  const [selectedRole, setSelectedRole] = useState(formData?.subdepartment?.name || "") ;
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [expandedItems, setExpandedItems] = useState([]);
  const [allExpanded, setAllExpanded] = useState(false);
  const [accordionKey, setAccordionKey] = useState(Date.now()); // Used to force re-render when expanding all
  const selectedRef = useRef(null);

  useEffect(() => {
    if(formData?.job_category?.description) {
      setSelectedRole(formData?.job_category?.description)
    }
  } , [formData?.job_category?.description])
  
  useEffect(() => {
      setShowOfficeAddress(formData?.job_location_type === "Work From Office" ? true : false)
  } , [formData?.job_location_type])

  const handleRoleChange = (data) => {
    setSelectedRole(data);
    // onFormChange("job_category.description", data);
    onFormChange("sub_department.name", data);
    
    for (const department of departments) {
      const subDept = department.sub_department.find(subDept => subDept?.name === data);
      if (subDept) {
        onFormChange("sub_department.classification", subDept.classification);
        break;
      }
    }
    // setFilteredCategories(categories); // Reset filtered categories
    setFilteredCategories(categories); // Reset filtered categories
    setExpandedItems([]); // Collapse all when a role is selected
    setShowList(false); // Hide the dropdown list
  };

  const filterCategories = (value) => {
    if (value.trim() === "") {
      setFilteredCategories(categories);
      setShowList(true); // Keep dropdown open
      return;
    }

    const newFilteredCategories = {};
    let matchFound = false;

    Object.keys(categories).forEach((category) => {
      const filteredJobs = categories[category].filter((job) =>
        job.toLowerCase().startsWith(value.toLowerCase())
      );
      if (filteredJobs.length > 0) {
        newFilteredCategories[category] = filteredJobs;
        matchFound = true;
      }
    });

    if (!matchFound) {
      newFilteredCategories["Others"] = ["Other"];
    }

    setFilteredCategories(newFilteredCategories);
    setShowList(true); // Ensure the dropdown is open when there are filtered results
  };

  const handleAccordionClick = (category) => {
    setExpandedItems(prevExpandedItems =>
      prevExpandedItems.includes(category)
        ? prevExpandedItems.filter(item => item !== category)
        : [...prevExpandedItems, category]
    );
  };

  const handleToggleExpandAll = () => {
    if (allExpanded) {
      setExpandedItems([]);
    } else {
      setExpandedItems(Object.keys(filteredCategories));
    }
    setAllExpanded(!allExpanded);
    setAccordionKey(Date.now()); // Force re-render to refresh the accordion state
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  useEffect(() => {
    console.log("csdvs: ",filteredCategories)
    const expandedCategories = Object.keys(filteredCategories).filter(category =>
      filteredCategories[category].some(job => job.toLowerCase().includes(selectedRole.toLowerCase()))
    );
    // Extract department names where a match was found
    setExpandedItems(expandedCategories);
  }, [selectedRole, filteredCategories]);




  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setNewJobTitle(inputValue);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      handleTitleChange(newOption);
    }, 1000);
  };

  const titleChangeHandler = (newValue) => {
    handleTitleChange(newValue);
    if (newValue && titlesCategory.jobs.some(job => job.value.title === newValue.value.title)) {
      setNewJobTitle(null); // Clear the new job title message if a predefined title is selected
    }
  };

  const handleAddPerkClick = () => {
    setShowAddPerkInput(true);
  };

  const handleNewPerkInputChange = (event) => {
    setNewPerkInput(event.target.value);
  };
  

  useEffect(() => {
    setSelectedPerks(formData?.job_data?.benefits || [])
    // console.log("hello",formData?.job_data?.benefits)
  } , [formData?.job_data?.benefits])


  const handleAddPerk = () => {
    const perkInput = newPerkInput.split(",");
    const newPerk = [];
    let updatedPerks = [...selectedPerks];
  
    perkInput.forEach((perk) => {
      const trimmedPerk = perk.trim().toLowerCase();
      const perkExists = perksOptions.some((p) => p.value?.toLowerCase() === trimmedPerk);
  
      if (!perkExists) {
        const newPerkObj = {
          value: trimmedPerk,
          label: perk.trim(),
        };
        newPerk.push(newPerkObj);
        updatedPerks.push(trimmedPerk);
        selectedPerksDefault.push(trimmedPerk);
      } else {
        updatedPerks.push(trimmedPerk);
      }
    });
  
    setSelectedPerks(updatedPerks);
    setPerksOptions([...perksOptions, ...newPerk]);
    onFormChange("job_data.benefits", updatedPerks);
    setNewPerkInput(""); // reset the input when the work is done
    setShowAddPerkInput(false); // close the input
  };


  const handlePerkToggle = (perk) => {
    // perk.preventDefault();

    const updatedPerks = selectedPerks.includes(perk)
      ? selectedPerks.filter((p) => p !== perk)
      : [...selectedPerks, perk];
    setSelectedPerks(updatedPerks);
    selectedPerksDefault = [...updatedPerks];
    onFormChange("job_data.benefits", updatedPerks);
  };

   // Merge selectedPerks with perksOptions to ensure all selected perks are displayed
   const mergedPerks = [
    ...perksOptions,
    ...selectedPerks.filter(
      (perk) => !perksOptions.some((option) => option.value.toLowerCase() === perk.toLowerCase())
    ).map((perk) => ({ value: perk, label: perk })),
  ];



  useEffect(() => {
    // Update job categories based on selected title

    const selectedTitleObj = jobData.titlesCategory.jobs.find(
      (job) => job.title === selectedTitle
    );
    if (selectedTitleObj) {
      setJobCategories(selectedTitleObj.category);
      // Populate the role input field with the category value
      setSelectedRole(selectedTitleObj.category);
      // Save the selected role
      onFormChange("role", selectedTitleObj.category);
    }
  }, [selectedTitle]);



  const handleMaxSalaryChange = (e) => {


    let value = e.target.value;
    setMaxSalaryTouched(true);

    if (value[0] === "0") {
      value = value.slice(1);
    }

    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    onFormChange("salary_breakdown.maxSalary", value);

    setMaxSalary(value);
    // setShowDetails(true);
  };

  const handleAverageIncentiveChange = (e) => {

    let value = e.target.value;

    setAverageIncentiveTouched(true)

    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    onFormChange("salary_breakdown.averageIncentive", value);

    setAverageIncentive(value);
    // setShowDetails(true);
  };

  const totalAmount = (parseInt(maxSalary) ? parseInt(maxSalary) : 0) + (parseInt(averageIncentive) ? parseInt(averageIncentive) : 0);

  const toggleAdditionalInfo = () => {
    setAdditionalInfoVisible(!additionalInfoVisible);
  };

  
  useEffect(() => {
    // Set the initial value based on formData.title if it exists
    if (formData?.title) {
      const matchingOption = titlesCategory.jobs.find(
        (option) => option.value.title === formData.title
      );
      if (matchingOption) {
        setValue(matchingOption);
        // setSelectedRole(matchingOption.value.category);
      } else {
        // If no matching option, create a custom one
        const customOption = {
          label: formData.title,
          value: { title: formData.title, category: "Select Category" },
        };
        setValue(customOption);
      }
    }
  }, [formData?.title, titlesCategory.jobs]);

  const handleTitleChange = (newValue) => {
    if (newValue) {
      if (!newValue.value.title) {
        newValue.value = {
          title: newValue.label,
          category: "Select Category",
        };
      }
      setValue(newValue);
      setSelectedRole(newValue.value.category);
      onFormChange("sub_department.name", newValue.value.category);
      onFormChange("jobtitle.name", newValue.value.title);
    } else {
      // Handle clear
      setValue(null);
      setSelectedRole("");
      onFormChange("jobtitle.name", "");
    }
    console.log(newValue, "this is the value that we received");
  };

  const handleTitleInputChange = (inputValue, actionMeta) => {
    // Update the input value state
    if (actionMeta.action === 'input-change') {
      setTitleInputValue(inputValue);
    }
  };


// Function to highlight matched text
const highlightMatchedText = (text, query) => {
  if (!query) return text;
  const startIndex = text.toLowerCase().indexOf(query.toLowerCase());
  if (startIndex === -1) return text;
  const endIndex = startIndex + query.length;
  return (
    <span>
      {text.substring(0, startIndex)}
      <span className="text-[#1967d2]">{text.substring(startIndex, endIndex)}</span>
      {text.substring(endIndex)}
    </span>
  );
};


    // Handle minimum salary change
    const handleMinSalaryChange = (e) => {
      let value = e.target.value;
      setMinSalaryTouched(true)
  
        // Limit input length to 8 characters
      if (value.length > 8) {
        value = value.slice(0, 8);
      }

      else {


      // Update minSalary state
      setMinSalary(value);
  
      // Update form data using the provided function
      onFormChange("salary_breakdown.minSalary", value);
  
      
    }

    
    };

    useEffect(() => {
      if(formData?.salary_breakdown?.salary_type === "Fixed Only") {
        if(minSalary && maxSalary && (maxSalary>=minSalary)) {
          setShowDetails(true)
        }
        else {
          setShowDetails(false)
        }
      }
    } , [minSalary , maxSalary , formData?.salary_breakdown?.salary_type ])

    useEffect(() => {
      if(formData?.salary_breakdown?.salary_type === "Fixed + Incentive") {
        if(minSalary && (maxSalary >= 1000) && (maxSalary>=minSalary) && averageIncentive) {
          setShowDetails(true)
        }
        else {
          setShowDetails(false)
        }
      }
    } , [minSalary , maxSalary , averageIncentive , formData?.salary_breakdown?.salary_type])

    useEffect(() => {
      if(formData?.salary_breakdown?.salary_type === "Incentive Only") {
        if(averageIncentive) {
          setShowDetails(true)
        }
        else {
          setShowDetails(false)
        }
      }
    } , [minSalary , maxSalary , averageIncentive , formData?.salary_breakdown?.salary_type])


  
  const handleButtonClick = (fieldName, option) => {
    // Update the form data with the selected option
    onFormChange(fieldName, option);
    setErrors((prevErrors) => ({
      ...prevErrors,
      job_type: "",
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

  const showDetail = (value) => {
    if (value === "Yes") {
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  };


  console.log(selectedPerks)

  const handleFormChange = (fieldName, value) => {
    // event.preventDefault();

    setErrors((prevErrors) => ({
        ...prevErrors,
        fieldName: "",
      }));

    onFormChange(fieldName, value);
    if (fieldName === "job_location_type") {
      if (value === "Work From Office") {
        setShowOfficeAddress(true);
        setShowReceiveApplications(false);
        setShowCityNameField(false);
        setShowFieldJobArea(false);
      } else if (value === "Work From Home") {
        setShowReceiveApplications(true); // Show receive applications only when "Work From Home" is clicked
        setShowOfficeAddress(false);
        setShowCityNameField(false);
        setShowFieldJobArea(false);
      } else if (value === "Field Job") {
        setShowFieldJobArea(true);
        setShowReceiveApplications(false);
        setShowOfficeAddress(false);
        setShowCityNameField(false);
      } else {
        setShowOfficeAddress(false);
        setShowReceiveApplications(false);
        setShowCityNameField(false);
        setShowFieldJobArea(false);
      }
    }
    if (fieldName === "location_type") {
      if (value === "Specific City") {
        setShowCityNameField(true);
      } else {
        setShowCityNameField(false);
      }
    }
  };
  {
    ["Yes", "No"].map((location) => (
      <p
        key={location}
        className={`btn btn-custom ${
          formData?.job_data?.question === location
            ? "btn-primary"
            : "btn-outline-secondary"
        }`}
        onClick={() => {
          showDetail(location);
          handleButtonClick("job_data.question", location);
        }}
      >
        {location}
      </p>
    ));
  }
  setTimeout(() => {
    if (
      formData?.salary_breakdown?.minSalary !== "" &&
      formData?.salary_breakdown?.maxSalary !== ""
    ) {
      setMaxSalary(formData.salary_breakdown.maxSalary);
      setMinSalary(formData.salary_breakdown.minSalary);
      setAverageIncentive(formData.salary_breakdown.averageIncentive);

      // setShowDetails(true);
    } else {
      // setShowDetails(false);
    }

    if (formData?.job_location_type === "Work From Home") {
      setShowReceiveApplications(true);
    }
    else{
      setShowReceiveApplications(false);
    }

   
  }, 500);


  const [locations, setLocations] = useState([
    'ZZ Architects, Senapati Bapat Marg, Lower Parel, W, Maharashtra, India',
    'Sarafa Bazar, FHG+XH9, Manik Chowk, Jhansi, Uttar Pradesh 284002, India',
  ]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      setSelectedLocation(newValue);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setLocations((prev) => [...prev, newValue.inputValue]);
      setSelectedLocation(newValue.inputValue);
    } else {
      setSelectedLocation(newValue);
    }
  };


  const ref = useRef(null);
  const dropdownRef = useRef(null);



  const [showDropdown, setShowDropdown] = useState(false);
  const [isSavedAddress, setIsSavedAddress] = useState(true);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [locationData, setLocationData] = useState("");
  // const [fieldJob, setFieldJob] = useState(false);
  const [showRelocationQuestion, setShowRelocationQuestion] = useState(false);
  const [receiveApplications, setReceiveApplications] = useState(null);
  const [isFieldJobHovered, setisFieldJobHovered] = useState(false);
  const [isOfficeHovered, setIsOfficeHovered] = useState(false);
  const [mapLocation, setMapLocation] = useState({
    lat: "",
    lng: "",
  }); 
  const [officeMapLocation, setOfficeMapLocation] = useState(false); 


  const handleFieldJobClick = () => {
    setFieldJob(true);
    setShowDropdown(true);
  };

  const handleOfficeAddressClick = () => {
    setShowOfficeAddress(true);
    setShowDropdown(true);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        ref.current && !ref.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const useCurrentLocationForWorkLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const data = await fetchAddress(latitude, longitude);
          console.log("data:", data);
          setLocationData(data.display_name); // Set the location data for the modal
          setLocationModalOpen(true); // Open the modal

          if (fieldJob) {
            onFormChange("applicant_location", data);
          } else {
            onFormChange("office_address", data);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };


  const useCurrentLocationForOffice = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          // const address = await fetchAddress(latitude, longitude);
          const data = await fetchAddress(latitude, longitude);
          // setLocationData(address);
          console.log("data:", data);
          setLocationData(data.display_name);

          onFormChange("office_address", data);

          setLocationModalOpen(true); // Open the modal
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };



  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      console.log("data:", data);
      return data || {};
    } catch (error) {
      console.error("Error fetching address:", error);
      return "";
    }
  };

  const handleModalClose = () => {
    setLocationModalOpen(false);
  };

  const handleModalConfirm = (locationData) => {
    // handleFormChange("applicant_location.applicant_location", locationData);
    setLocationModalOpen(false);
    setShowRelocationQuestion(true);
    setMapLocation({ // Set the map location state
      lat: formData?.applicant_location?.lat,
      lng: formData?.applicant_location?.lon,
    });
  };

  const handleModalConfirmForOffice = (locationData) => {
    // console.log("adadca" , locationData);
    // onFormChange("office_address.location", locationData);
    setLocationModalOpen(false);
    setShowRelocationQuestion(true);
    setOfficeMapLocation(true);
    // setMapLocation({ // Set the map location state
    //   lat: formData?.office_address?.address?.latitude,
    //   lng: formData.office_address?.address?.longitude,
    // });
  }


  const handleReceiveApplicationsChange = (value) => {
    setReceiveApplications(value);
    handleFormChange("receive_applications_from_anywhere", value);
  };


  const [selectedItems, setSelectedItems] = useState([]);
  const [customItem, setCustomItem] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const assetsDropdownRef = useRef(null);

  const items = ['Bag', 'Laptop', 'Toolkit', 'Uniform', 'Others'];

  const assetsHandleChange = (event) => {
    const { value } = event.target;
    const newValue = typeof value === 'string' ? value.split(', ') : value;

    if (newValue.includes('Others')) {
      setShowCustomInput(true);
    } else {
      // setShowCustomInput(false);
    }

    setSelectedItems(newValue.filter(item => item !== 'Others'));
  };

  const handleCustomItemChange = (event) => {
    const newValue = event.target.value;
    setCustomItem(event.target.value);

    if (selectedItems.includes(customItem)) {
      setSelectedItems(selectedItems.map(item => (item === customItem ? newValue : item)));
    }
  };

  const saveSelection = () => {
    const trimmedCustomItem = customItem.trim();
    if (trimmedCustomItem) {
      if (!selectedItems.includes(trimmedCustomItem)) {
        setSelectedItems([...selectedItems, trimmedCustomItem]);
      } else {
        setSelectedItems(selectedItems.map(item => (item === customItem ? trimmedCustomItem : item)));
      }
    } else {
      setSelectedItems(selectedItems.filter(item => item !== customItem));
    }

    setDropdownVisible(false);
  };

  useEffect(() => {
    console.log(selectedItems)
    onFormChange("fees.inventory_charge" , selectedItems)
  } , [selectedItems])

  const handleClickOutside2 = (event) => {
    if (assetsDropdownRef.current && !assetsDropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside2);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // Handle checkbox change including showing custom input for "Others"
  const handleCheckboxChange = (item) => {
    if (item === 'Others') {
      setShowCustomInput(!showCustomInput);
    } else {
      const newSelectedItems = selectedItems.includes(item)
        ? selectedItems.filter(i => i !== item)
        : [...selectedItems, item];
      setSelectedItems(newSelectedItems);
    }
  };


  useOnClickOutside(dropdownRef, () => setDropdownVisible(false));

//This hook detects clicks outside of the specified component and calls the provided handler function.
function useOnClickOutside(ref , handler) {
  useEffect( ()=> {
    //Define the listener function to be called on click/touch events
    const listener = (event) => {
      //If the click/touch event originated inside the ref element , do nothing
      if(!ref.current || ref.current.contains(event.target)) {
        return;
      }
      //If click/touch is done outside the ref element, call the provided handler fumction
      handler(event);
    };

    //Add event listeners fro mousedown and touchstart events on the document
    document.addEventListener("mousedown" , listener);
    document.addEventListener("touchstart" , listener);

    //cleanup function to remove the event listeners when the component unmounts or when the ref/handler dependencies change
    return() => {
      document.addEventListener("mousedown" , listener);
      document.addEventListener("touchstart" , listener);  
    };

  } , [ref , handler])//Only run this effect when the ref or handler function changes
}




  const [selectedCity, setSelectedCity] = useState("");
  const [cityInputValue, setCityInputValue] = useState('');

  const [cityOptions, setCityOptions] = useState(cities?.tier_1_clusters.map(city => ({
    value: city?.name,
    label: ( <div className="flex gap-1 items-center"><p>{city?.name}</p><CandidateTooltip title={`Includes ${city?.childrens?.length} locations: ${city.childrens.join(', ')}`}/></div> ),
    // label: (
    //   <Tooltip title={city.children.join(', ')} arrow>
    //     <span>{city.name}</span>
    //   </Tooltip>
    // )
  })));

  console.log("dhbhbchbcdhd::::::::::",cityOptions);

  const handleCityChange = (newValue) => {
    // console.log("new value:::::",newValue.value);
    setSelectedCity(newValue?.value);
    // console.log("seleted ciyt::",selectedCity);
    onFormChange("applicant_location.address.city", newValue ? newValue.value : '');
  };

  // const handleInputChange = (input) => {
  //   setCityInputValue(input);
  // };
  const handleInputChange = (input) => {
    console.log("fff",input);
    setCityInputValue(input);
    const filteredCities = cities?.tier_1_clusters.filter(city => 
      city?.name.toLowerCase().includes(input.toLowerCase())
    );
    setOptions(filteredCities.length > 0 ? filteredCities.map(city => ({
      value: city?.name,
      label: ( <div className="flex gap-1 items-center"><p>{city?.name}</p><CandidateTooltip title={`Includes ${city?.childrens?.length} locations: ${city.childrens.join(', ')}`}/></div> ),
      // label: (
      //   <Tooltip title={city.children.join(', ')} arrow>
      //     <span>{city.name}</span>
      //   </Tooltip>
      // )
    })) :
    //  [{ value: ''
    //   , label: 'City not found'
    //  }]
    {value: "", label:"City Not Found"}
    );
  };

  // const handleClear = () => {
  //   setSelectedCity(null);
  //   setCityInputValue('');
  //   onFormChange("applicant_location.city.name", '');
  // };
  const handleClear = () => {
    setSelectedCity(null);
    setCityInputValue('');
    setOptions(cities?.tier_1_clusters.map(city => ({
      value: city?.name,
      label: ( <div className="flex gap-1 items-center"><p>{city?.name}</p><CandidateTooltip title={`Includes ${city?.childrens?.length} locations: ${city.childrens.join(', ')}`}/></div> ),
      // label: (
      //   <Tooltip title={city.children.join(', ')} arrow>
      //     <span>{city.name}</span>
      //   </Tooltip>
      // )
    })));
    onFormChange("applicant_location.address.city", '');
  };



  useEffect(() => {
    // Set the initial value based on formData.title if it exists
    if (formData?.applicant_location?.address?.city) {
      setSelectedCity(formData.applicant_location.address.city);
    }
  }, [formData?.applicant_location?.address?.city]);



  const [anchorEl, setAnchorEl] = useState(null);
  const [company_Name, setCompany_Name] = useState();
  const [display_Name, setDisplay_Name] = useState(user?.organization?.name);
  const [numEmployee, setNumEmployee] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [centerModalOpen, setCenterModalOpen] = useState(false);
  const [newCompany_Name, setNewCompany_Name] = useState('');
  const [popoverModalOpen, setPopoverModalOpen] = useState(false);
  const [isConsultancy, setIsConsultancy] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [companyNameChanged, setCompanyNameChanged] = useState(false);

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem('modalState'));
    if (storedState) {
      setPopoverModalOpen(storedState.popoverModalOpen);
      setSelectedOption(storedState.selectedOption);
      setCenterModalOpen(storedState.centerModalOpen);
      setNewCompany_Name(storedState.newCompany_Name);
      setIsConsultancy(storedState.isConsultancy);
      setConfirmationModalOpen(storedState.confirmationModalOpen);
      setNumEmployee(storedState.numEmployee);
      setCompanyNameChanged(storedState.companyNameChanged);
    }
  }, []);

  useEffect(() => {
    const modalState = {
      popoverModalOpen,
      selectedOption,
      centerModalOpen,
      newCompany_Name,
      isConsultancy,
      confirmationModalOpen,
      numEmployee,
      companyNameChanged,
    };
    localStorage.setItem('modalState', JSON.stringify(modalState));
  }, [popoverModalOpen, selectedOption, centerModalOpen, newCompany_Name, isConsultancy, confirmationModalOpen, numEmployee, companyNameChanged]);

  const handleCompanyChange = (value) => {
    setNewCompany_Name(value);
    handleFormChange('organization.name', value);
    // setCompanyNameChanged(true); // Mark that company name has been changed
  };

  useEffect(()=> {
    if(formData.organization.name) {
      setDisplay_Name(formData?.organization?.name)
    }
    else {
      setDisplay_Name(user?.organization?.name)
    }
  } , [formData?.organization?.name])

  useEffect(()=> {
    if(!formData.organization.name) {
      onFormChange("organization.name" , user?.organization?.name)
    }
  } , [])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setSelectedOption('');
    setNewCompany_Name('');
    // setCompanyNameChanged(false); // Reset company name changed status
    setPopoverModalOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopoverModalOpen(false);
  };

  const handleRadioChange = (event) => {
    
    setSelectedOption(event.target.value);
    if (event.target.value === 'consultancy') {
      setConsulClick(true);
    } else {
      setConsulClick(false)
      setNewCompany_Name('');
      handleFormChange('organization.name', '');
    }
    setCenterModalOpen(true);
    setPopoverModalOpen(false);
  };

  const handleCenterModalClose = () => {
    setCenterModalOpen(false);
  };

  const handleCenterModalChange = () => {
    setConfirmationModalOpen(true);
    setCenterModalOpen(false);
    // if(consulClick) {
    //   setIsConsultancy(true);
    // }
    // else{
    //   setIsConsultancy(false);
    // }
    // setCompanyNameChanged(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationModalOpen(false);
    // setCompanyNameChanged(true);
  };

  const handleConfirmChanges = () => {
    setCompany_Name(newCompany_Name || formData?.organization?.name);
    setDisplay_Name(newCompany_Name || formData?.organization?.name)
    setConfirmationModalOpen(false);
    setCenterModalOpen(false);
    setNewCompany_Name('');
    setCompanyNameChanged(true); // Reset company name changed status
    if(consulClick) {
      setIsConsultancy(true);
    }
    else{
      setIsConsultancy(false);
    }
    setCompanyNameChanged(true);
    
  };

  const handleEmployeeRangeChange = (range) => {
    setNumEmployee(range);
  };

  const handleCompanyCheckboxChange = (event) => {
    setConsulClick(event.target.checked)
    if(event.target.checked) {
      setSelectedOption('consultancy')
    }
  };


  return (
    <div
      className="row sm:mx-0 bg-white  sm:mr-0 mb-[10px] p-6"
      id="jobDetails"
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
          Job Details
        </h1>
        <p>We use this information to find the best candidates for the job.</p>
        <p style={{ color: "red" }}>*Marked fields are mandatory</p>
      </div>

      {/* <div className="mb-3 col-lg-12 col-md-12">
        <label className="customlabel">
          Company you are hiring for
          <span style={{ color: "red" }}> *</span>
        </label>
        <AutoComplete
          options={companyNames}
          onFormChange={onFormChange}
          onChange={handleChange}
          formData={formData}
          // label={formData?.organization?.name}
        />
        {errors.company_name && <div className="text-red-500 text-sm">{errors.company_name}</div>}
      </div> */}

<div className="relative mb-4">
      <label className="customlabel">
        <p className="mb-1 text-lg text-nowrap">
          {isConsultancy && (
            <div className="mb-8">
              Company you belong to <b>{company_Name} </b>
              <span className="mb-3 text-lg">(Consultancy)</span>
              <button
                aria-describedby={id}
                onClick={handleClick}
                className="text-[#1967d2] hover:underline ml-3"
              >
                Change
              </button>
            </div>
          ) }
            <div>
              <div className="flex items-center">
                <p className="customlabel">Company you’re hiring for</p>
                <span style={{ color: 'red' }}> *</span>
              </div>
              {/* {
                !isConsultancy && (
                  <button
                    aria-describedby={id}
                    onClick={handleClick}
                    className="text-[#1967d2] hover:underline ml-3"
                  >
                    Change
                  </button>
                ) 
              } */}
            </div>
         
        </p>
      </label>

      <div className="relative mb-4">
        {
          !isConsultancy ? (
            <TextField
              ref={refs.company_name}
              value={display_Name}
              variant="outlined"
              disabled
              InputProps={{
              readOnly: true,
              endAdornment: isConsultancy ? null : (
                <button
                  aria-describedby={id}
                  onClick={handleClick}
                  className="text-[#1967d2] hover:underline"
                >
                  Change
                </button>
                ),
              }}
              fullWidth
              InputLabelProps={{ shrink: false }}
            />
          ) : (
          <AutoComplete
            ref={refs.company_name}
            options={companyNames}
            onFormChange={handleFormChange}
            onChange={handleCompanyChange}
            formData={formData}
            value={""} // Add this line to control the AutoComplete component's value
          />
        ) 
        }
        <Popover
          id={id}
          open={popoverModalOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            className: 'relative',
          }}
        >
          <Box
            className="relative bg-white rounded-lg shadow-lg"
            sx={{
              width: 400,
            }}
          >
            <div className="absolute px-4 -top-2 right-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
            <div className="p-4 flex justify-between items-center mb-2">
              <Typography variant="h6" component="h2">
                <p className="text-lg text-black font-medium">Reason to change the company name</p>
              </Typography>
              <IconButton onClick={handleClose} className="p-1">
                <FiX />
              </IconButton>
            </div>
            <FormControl component="fieldset" className="px-4 pb-4">
              <RadioGroup
                aria-label="reason"
                name="reason"
                value={selectedOption}
                onChange={handleRadioChange}
              >
                <div className="p-2 border border-gray-800 rounded-md mb-2">
                  <FormControlLabel value="changedCompany" control={<Radio />} label="I changed my company" />
                </div>
                <div className="p-2 border border-gray-800 rounded-md mb-2">
                  <FormControlLabel value="consultancy" control={<Radio />} label="I belong to a consultancy & want to post for my client's company" />
                </div>
                <div className="p-2 border border-gray-800 rounded-md">
                  <FormControlLabel value="otherCompany" control={<Radio />} label="I want to post for another company/business/consultancy of my own" />
                </div>
              </RadioGroup>
            </FormControl>
            <div className="w-full bg-black p-1 border rounded-b"></div>
          </Box>
        </Popover>
        <Modal
          open={centerModalOpen}
          onClose={handleCenterModalClose}
          aria-labelledby="center-modal-title"
          aria-describedby="center-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="bg-white rounded shadow-lg w-full max-w-md h-auto">
            <div className="p-4 flex justify-between items-center mb-2">
              <Typography id="center-modal-title" variant="h6" component="h2">
                <p className="text-lg text-black font-medium">Company Hiring For</p>
              </Typography>
              <IconButton onClick={handleCenterModalClose} className="p-1">
                <FiX />
              </IconButton>
            </div>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            <Typography id="center-modal-description" className="px-4 mt-4 mb-4">
              {selectedOption === 'consultancy'
                ? 'Please click on continue to confirm that you are associated with a consultancy'
                : selectedOption === 'otherCompany'
                  ? 'You’re posting a job for your other company/business/consultancy. Please select/add company below:'
                  : `You’re changing your company from ${user?.organization?.name}. Please select/add company below:`}
            </Typography>
            <div className="px-4">
              <label className="text-lg font-medium">Your company name <span style={{ color: 'red' }}> *</span></label>
              <AutoComplete
                options={companyNames}
                onFormChange={handleFormChange}
                onChange={handleCompanyChange}
                formData={formData}
                value={`${selectedOption === 'consultancy' ? user.organization?.name : newCompany_Name}`} // Add this line to control the AutoComplete component's value
              />
              {errors.company_name && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.company_name}</p></div>}
            </div>
            <div className="mx-4 mb-4 flex items-center">
              <FormControlLabel
                control={<Checkbox checked={consulClick} onChange={handleCompanyCheckboxChange} />}
                label={<span className="text-sm">This is a Consultancy (Hiring or Staffing agency)</span>}
                className="mr-2"
              />
              <CandidateTooltip title="Select this option if you are a hiring agency staffing for other companies" />
            </div>
            <div className="form-group2 mb-4 px-4">
              <label className="block mb-2">Number of employees in your company<span> *</span></label>
              <div className="grid grid-cols-3 gap-2">
                {['0-50', '50-200', '200-500', '500-1000', '1000+'].map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => handleEmployeeRangeChange(range)}
                    className={`border border-gray-500 rounded-xl p-2 text-sm ${numEmployee === range ? 'bg-blue-500 text-white' : ''}`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-gray-300 w-full h-[1px]"></div>
            <div className="flex items-center justify-end gap-2 p-4">
              <Button
                onClick={handleCenterModalClose}
                variant="outlined"
                color="primary"
                className="mr-2"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCenterModalChange}
                variant="contained"
                color="primary"
              >
                Change
              </Button>
            </div>
          </Box>
        </Modal>
        <Modal
          open={confirmationModalOpen}
          onClose={handleConfirmationClose}
          aria-labelledby="confirmation-modal-title"
          aria-describedby="confirmation-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="bg-white rounded shadow-lg w-full max-w-md h-auto">
            <div className="p-4 flex justify-end items-center mb-2">
              <IconButton onClick={handleConfirmationClose} className="p-1">
                <FiX />
              </IconButton>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={logo} className="w-[20%] h-[20%] mb-4" alt="" />
              <p className="text-xl font-medium text-black text-center text-nowrap">Will suspend your previous jobs</p>
              <Typography id="confirmation-modal-description" className="px-4 mt-2 mb-4 text-center">
                Jobs you have posted for previous employer will be suspended if you change the company
              </Typography>
            </div>
            <div className="flex items-center justify-end gap-2 p-4">
              <Button
                onClick={handleConfirmChanges}
                variant="contained"
                color="primary"
                className="mr-2"
              >
                Confirm Changes
              </Button>
              <Button
                onClick={handleConfirmationClose}
                variant="outlined"
                color="primary"
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>


      <div ref={refs.title} className="flex w-[51%] flex-col mb-3 col-lg-12 col-md-12">
        <label className="customlabel">
          Job Title / Designation <span style={{ color: "red" }}> *</span>
        </label>
        <CreatableSelect
          isClearable = {true}
          placeholder={formData?.jobtitle?.name}
          value={value}
          inputValue={titleInputValue} // Use the separate input value state
          isDisabled={isLoading}
          isLoading={isLoading}
          // onChange={(newValue) => handleTitleChange(newValue)}
          onChange={titleChangeHandler}
          onInputChange={handleTitleInputChange} // Handle input changes to update state
          onCreateOption={handleCreate}
          options={titlesCategory.jobs}
          formatCreateLabel={(inputValue) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaPlus className="text-[#1967d2]" style={{ marginRight: '5px' }} />
              {`Add "${inputValue}"`}
            </div>
          )}
        />
        {errors.title && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.title}</p></div>}
      </div>
      {newJobTitle && (
        <div className="mx-2.5 mb-2 rounded flex gap-2 p-2 w-[98.3%] items-center bg-blue-100">
          <MdInfo className="text-xl text-[#1967d2] ml-2"/>
          <p className="text-md text-black">Select title from dropdown to get better responses</p>
        </div>
      )}

      {formData?.jobtitle?.name && (
        <div ref={refs.description} className="form-group col-lg-12 col-md-12">
          <label className="customlabel flex items-center">
            Job Role/ Category <span style={{ color: "red" }}> *</span> 
            <CandidateTooltip title = {"Job role/ category defines the responsibilities and nature of work this job involves"}/>
          </label>
          <input
            onFocus={() => {
              setShowList(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowList(false);
              }, 100); // Add a slight delay to allow click events to propagate
            }}
            onClick={() => {
              setShowList(true);
            }}
            type="text"
            value={selectedRole}
            onChange={(e) => {
              handleRoleChange(e.target.value);
              filterCategories(e.target.value);
            }}    
            style={{
              height: "40px",
              backgroundColor: "white",
              width: "50%",
              borderColor: showList ? "blue" : "darkgrey",
              borderWidth: "2px",
            }}
            placeholder="Role"
            required
          />
          {showList && (

            <div
              className="w-[80vw] md:w-[41vw] text-xs h-[200px] overflow-auto shadow p-1 absolute z-[9999] bg-white"
              onMouseDown={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold">
                  {
                    !selectedRole ? "All Job Roles" : "Search results"
                  }
                </div>
                <button onClick={handleToggleExpandAll} className="m-2 p-2 flex items-center">
                  <BiExpandVertical/>
                  {allExpanded ? 'Collapse All' : 'Expand All'}
                </button>
              </div>
              <Accordion allowZeroExpanded key={accordionKey} preExpanded={expandedItems}>
                {Object.keys(filteredCategories).map((category) => (
                  <AccordionItem key={category} uuid={category}>
                    <AccordionItemHeading onClick={() => handleAccordionClick(category)} className="h-[30px] ">
                      <AccordionItemButton className="bg-[#f4f5f7] my-1 flex justify-between items-center p-2">
                        {category}
                        <span className="h-[3px] flex justify-center items-center">
                          {
                            expandedItems.includes(category) ? <ArrowDropUp /> : <ArrowDropDown />
                          }
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="p-0 m-0">
                      <ul className="pt-2">
                        {filteredCategories[category].map((job) => (
                          <li
                            key={job}
                            ref={job === selectedRole ? selectedRef : null}
                            className="text-sm cursor-pointer hover:bg-slate-200 p-1 w-full "
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => handleRoleChange(job)}
                          >
                            {/* {job} */}
                            {highlightMatchedText(job, selectedRole)}
                          </li>
                        ))}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
          {errors.description && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.description}</p></div>}
        </div>
      )}

      <div ref={refs.job_type} className="form-group col-lg-8 col-md-12">
        <label className="customlabel">
          Type of Job <span style={{ color: "red" }}> *</span>
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
          }}
          className="flex flex-row flex-wrap "
        >
          {jobData.jobTypes.map((type) => (
            <p
              key={type}
              className={` default-btn ${
                formData?.job_details?.job_type === type
                  ? "active-btn"
                  : "inactive-btn"
              }`}
              onClick={() => handleButtonClick("job_details.job_type", type)}
            >
              {type}
            </p>
          ))}
        </div>
        {errors.job_type && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.job_type}</p></div>}
      
      </div>

      <div className=" mb-3 flex ">
        <input
          type="checkbox"
          id="nightShiftCheckbox"
          className="checkbox-info rounded-sm  w-4 h-5"
          checked={formData?.job_details?.night_shift || false}
          onChange={(e) =>
            onFormChange("job_details.night_shift", e.target.checked)
          }
        />
        <label
          htmlFor="nightShiftCheckbox"
          style={{ marginLeft: "10px", fontSize: "14px" }}
          className="cursor-pointer "
        >
          This is a night shift job
        </label>
      </div>
      <div className=" mt-2 -ml-6 w-[105%] bg-[#F5F5F5] h-3"></div>

      <div ref={refs.job_location_type} className="form-group col-lg-12 col-md-12 mt-4">
        <h1
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 600,
            color: "rgb(23, 43, 77)",
            fontFamily: "sans-serif",
          }}
        >
          Location
        </h1>
        <p>Let candidates know where they will be working from.</p>
        {/* {errors.job_location_type && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.job_location_type}</p></div>} */}
      </div>
      {/* Type of Job buttons */}

      <div className="form-group col-lg-12 col-md-12">
        <label className="customlabel">
          Work Location Type <span style={{ color: "red" }}> *</span>
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
          }}
          className="flex flex-row flex-wrap "
        >
          {jobData.jobLocationType.map((type, index) => (
            <React.Fragment key={type}>
              {index === 2 ? (
                <div className="gap-0 flex">
                  <button
                    className={`default-btn ${
                      formData?.job_location_type === type
                        ? "active-btn"
                        : "inactive-btn"
                    }`}
                    onClick={() => handleFormChange("job_location_type", type)}
                  >
                    {type}
                  </button>
                  <TooltipBtn
                    title={
                      "Candidates will be required to work in field,  with minimal time spent in the office."
                    }
                  />
                </div>
              ) : (
                <button
                  className={`default-btn ${
                    formData?.job_location_type === type
                      ? "active-btn"
                      : "inactive-btn"
                  }`}
                  onClick={() => handleFormChange("job_location_type", type)}
                >
                  {type}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* {errors.office_address && <div className="text-red-500 text-sm">{errors.office_address}</div>} */}
        {errors.job_location_type && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.job_location_type}</p></div>}
      </div>


      <div>
      {showOfficeAddress && (
        <div ref={refs.office_address} className="flex w-full flex-col pb-3 col-lg-12 col-md-12">
          <label className="customlabel">
          Office address / landmark{" "}
            <span style={{ color: "red" }}> *</span>
          </label>
          <div className="relative mt-2 w-full" onMouseEnter={() => setIsOfficeHovered(true)} onMouseLeave={() => setIsOfficeHovered(false)}>
            <input
              type="text"
              ref={ref}
              name="field_job_area"
              className="mt-2 border-[2px] px-3 py-2 rounded-md w-full"
              style={{
                backgroundColor: "white",
                borderColor: "darkgrey",
              }}
              onClick={handleOfficeAddressClick}
              placeholder={`Search for your address/locality ${showDropdown ? "" : ""}`}
              value={formData?.office_address?.display_name || ""}
              onChange={(e) => onFormChange("office_address.display_name", e.target.value)}
              required
            />
            {showDropdown && (
              <div>
                <div ref={dropdownRef} className="absolute mt-2 left-0 right-0 top-12 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <button
                    type="button"
                    className="text-left flex items-center gap-2 rounded p-2 mx-2 mt-4 bg-[#1967d2]"
                    onClick={useCurrentLocationForOffice}
                  >
                    <MdMyLocation className="text-white text-xl"/>
                    <p className="text-white font-medium">Use my current location</p>
                  </button>
                  {isSavedAddress && (
                    <div>
                      <button className="w-[98.5%] bg-gray-100 text-gray-600 px-2 py-1 my-3 mx-2 rounded flex justify-start">Saved addresses</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {isOfficeHovered && formData?.office_address?.address && (
              <FiX
                className="text-2xl  absolute right-20 -translate-x-[4rem] translate-y-[3rem] transform text-gray-400 cursor-pointer"
                onClick={() => handleFormChange("office_address.display_name", "")}
              />
          )}

          {errors.office_address && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.office_address}</p></div>}

          
        </div>
        
      )}

      {showOfficeAddress && showRelocationQuestion && (
        <div className="flex flex-col pb-3 col-lg-12 col-md-12">
          <label className="customlabel">
            Would you also like to receive candidate applications from anywhere in India if they are willing to move to {formData?.applicant_location?.address?.city || "this region"} for this job?{" "}
            <span style={{ color: "red" }}> *</span>
          </label>
          <div className="flex gap-3 mt-2 mb-2">
            <button
              type="button"
              className={`px-3 py-1.5 rounded-2xl border-1 ${receiveApplications === true ? 'border-[#1967d2] bg-blue-100' : 'border-gray-700'} text-black font-medium`}
              onClick={() => handleReceiveApplicationsChange(true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-3 py-1.5 rounded-2xl border-1 ${receiveApplications === false ? 'border-[#1967d2] bg-blue-100' : 'border-gray-700'} text-black font-medium`}
              onClick={() => handleReceiveApplicationsChange(false)}
            >
              No
            </button>
          </div>
          {receiveApplications === true && (
            <div className="mt-2 p-2 border-1 border-[#1967d2] bg-blue-100 rounded w-full flex items-center gap-2">
              <MdInfo className="text-[#1967d2] text-xl"/>
              <p className="text-black">Kindly discuss travel reimbursement details directly with the candidates.</p>
            </div>
          )}
          {receiveApplications === false && (
            <div className="mt-2 p-2 border-1 border-[#1967d2] bg-blue-100 rounded w-full flex items-center gap-2">
              <MdInfo className="text-[#1967d2] text-xl"/>
             <p className="text-black"> You will be receiving applications from within {formData?.applicant_location?.address?.city || "this region"}</p>
            </div>
          )}
        </div>
      )}

{/* <LocationModal open={locationModalOpen} handleClose={handleModalClose} locationData={locationData} onConfirm={handleModalConfirmForOffice} />
      {true && <MapComponent formData={{lat: formData?.office_address?.lat, lng: formData?.office_address?.lon}}/>} {/* Render the map component if mapLocation is set */}
    </div> 



      {/* Additional fields for Work From Office */}
       {showOfficeAddress && (
        <div className="flex flex-col justify-start items-start col-lg-12 col-md-12">

          {/* {errors.office_address && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.office_address}</p></div>} */}

          {showOfficeAddress && !showRelocationQuestion && <div
            style={{ cursor: "pointer", marginTop: "2px" }}
            onClick={toggleAdditionalInfo}
            className=" hover:underline flex items-center gap-1"
          >
            <FaPlus className="text-[#1967d2]"/>
            <p className="text-[#1967d2]">Add Floor/ Plot No/ Shop No (Optional)</p>
          </div>
          }
          {additionalInfoVisible && (
            <input
              type="text"
              name="additional_info"
              className="px-3 py-2 border-[1px] rounded-md form-group col-md-12"
              style={{
                width: "100%",
                backgroundColor: "white",
                borderColor: "darkgrey",
                marginTop: "5px",
              }}
              placeholder="Enter office floor or plot no (optional)"
              value={formData.additional_info}
              onChange={(e) => onFormChange("plot_number", e.target.value)}
            />
          )}
        </div>
      )} 

      



      {/* Additional field for Work From Home */}
      <div className="form-group col-lg-6 col-md-12 ">
        {showReceiveApplications && (
          <label className="customlabel">
            Receive applications from <span style={{ color: "red" }}> *</span>
          </label>
        )}
        <div ref={refs.applicant_location} className="flex items-start gap-[10px]">
          {showReceiveApplications &&
            ["Specific City", "Anywhere in India"].map((location) => (
              <React.Fragment key={location}>
                {location === "Anywhere in India" ? (
                  <div className="w-full">
                    <p
                      key={location}
                      className={`default-btn ${
                        formData.location_type === location
                          ? "active-btn"
                          : "inactive-btn"
                      }`}
                      onClick={() =>
                        handleFormChange("location_type", location)
                      }
                    >
                      {location}
                    </p>
                    {formData?.location_type === "Anywhere in India" && (
                      <OptInfo
                        content={
                          "You will be receiving applications from Entire India"
                        }
                      />
                    )}
                    </div>
                ) : (
                  <div>
                    <p
                    key={location}
                    className={`default-btn ${
                      formData.location_type === location
                        ? "active-btn"
                        : "inactive-btn"
                    }`}
                    onClick={() =>
                      handleFormChange("location_type", location)
                    }
                  >
                    {location}
                  </p>
                    </div>
                )}
                
              </React.Fragment>
            ))}
                  
        </div>
        
        {errors.applicant_location && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.applicant_location}</p></div>}
        
      </div>

      {/* Additional field for Specific City */}
      {showCityNameField && (

        <div ref={refs.city} className="w-[51%] flex flex-col mb-3  col-lg-12 col-md-12">
          <label className="customlabel">
            Job City <span style={{ color: "red" }}> *</span>
          </label>
      <CreatableSelect
        // value={formData.applicant_location.city.name}
        // value={selectedCity}
        value={cityOptions.find(
                (city) => city.value === formData.applicant_location.address.city
              )}
        onChange={handleCityChange}
        onInputChange={handleInputChange}
        options={cityOptions}
        isClearable
        inputValue={cityInputValue}
        placeholder="Select City"
        noOptionsMessage={() => 'City not found'}
        formatCreateLabel={() => (
          <div className="text-red-500">City Not Found</div>
        )}
      />
      {selectedCity && (
        <IconButton
          aria-label="clear"
          onClick={handleClear}
          style={{ position: 'absolute', right: 0 }}
        >
          <ClearIcon />
        </IconButton>
      )}
      {errors.city && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.city}</p></div>}
    </div>
      )}

      {/* Additional field for Field Job area */}
      <div>
      {showFieldJobArea && (
        <div ref={refs.applicant_address} className="flex w-full flex-col pb-3 col-lg-12 col-md-12">
          <label className="customlabel">
            Which area will the candidates be working in ?{" "}
            <span style={{ color: "red" }}> *</span>
          </label>
          <div className="relative mt-2 w-full" onMouseEnter={() => setisFieldJobHovered(true)} onMouseLeave={() => setisFieldJobHovered(false)}>
            <input
              type="text"
              ref={ref}
              name="field_job_area"
              className="mt-2 border-[2px] px-3 py-2 rounded-md w-full"
              style={{
                backgroundColor: "white",
                borderColor: "darkgrey",
              }}
              onClick={handleFieldJobClick}
              placeholder={`Search for your address/locality ${showDropdown ? "" : ""}`}
              value={formData?.applicant_location?.display_name || ""}
              onChange={(e) => handleFormChange("applicant_location.display_name", e.target.value)}
              required
            />
            {errors.applicant_address && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.applicant_address}</p></div>}
            {showDropdown && (
              <div>
                <div ref={dropdownRef} className="absolute mt-2 left-0 right-0 top-12 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <button
                    type="button"
                    className="text-left flex items-center gap-2 rounded p-2 mx-2 mt-4 bg-[#1967d2]"
                    onClick={useCurrentLocationForWorkLocation}
                  >
                    <MdMyLocation className="text-white text-xl"/>
                    <p className="text-white font-medium">Use my current location</p>
                  </button>
                  {isSavedAddress && (
                    <div>
                      <button className="w-[98.5%] bg-gray-100 text-gray-600 px-2 py-1 my-3 mx-2 rounded flex justify-start">Saved addresses</button>
                    </div>
                  )}
                </div>
              </div>
            )}
            {isFieldJobHovered && formData?.applicant_location?.display_name && (
              <FiX
                className="text-2xl absolute right-2 top-1/3 transform text-gray-400 cursor-pointer"
                onClick={() => handleFormChange("applicant_location.display_name", "")}
              />
            )}
          </div>
        </div>
      )}
      {showFieldJobArea && showRelocationQuestion && (
        <div className="flex flex-col pb-3 col-lg-12 col-md-12">
          <label className="customlabel">
            Would you also like to receive candidate applications from anywhere in India if they are willing to move to {formData?.applicant_location?.address.city || "this region"} for this job?{" "}
            <span style={{ color: "red" }}> *</span>
          </label>
          <div className="flex gap-3 mt-2 mb-2">
            <button
              type="button"
              className={`px-3 py-1.5 rounded-2xl border-1 ${receiveApplications === true ? 'border-[#1967d2] bg-blue-100' : 'border-gray-700'} text-black font-medium`}
              onClick={() => handleReceiveApplicationsChange(true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-3 py-1.5 rounded-2xl border-1 ${receiveApplications === false ? 'border-[#1967d2] bg-blue-100' : 'border-gray-700'} text-black font-medium`}
              onClick={() => handleReceiveApplicationsChange(false)}
            >
              No
            </button>
          </div>
          {receiveApplications === true && (
            <div className="mt-2 p-2 border-1 border-[#1967d2] bg-blue-100 rounded w-full flex items-center gap-2">
              <MdInfo className="text-[#1967d2] text-xl"/>
              <p className="text-black">Kindly discuss travel reimbursement details directly with the candidates.</p>
            </div>
          )}
          {receiveApplications === false && (
            <div className="mt-2 -ml-6 w-[105%]  h-3 p-2 border-1 border-[#1967d2] bg-blue-100 rounded  flex items-center gap-2">
              <MdInfo className="text-[#1967d2] text-xl"/>
             <p className="text-black"> You will be receiving applications from within {formData?.applicant_location?.address?.city || "this region"}</p>
            </div>
          )}

{showFieldJobArea && showRelocationQuestion  && (
            <MapComponent formData={{ lat: formData.applicant_location?.lat, lng: formData.applicant_location?.lon }} />
          )}
          
        </div>
      )}
      <LocationModal open={locationModalOpen} handleClose={handleModalClose} locationData={locationData} onConfirm={handleModalConfirm} />
      {/* {mapLocation.lat && <MapComponent location={mapLocation} />} */}
    </div>



      <div className=" mt-2 -ml-6 w-[105%] bg-[#F5F5F5] h-3"></div>

      {/* Work Location Type buttons */}
      <div className="form-group col-lg-12 mt-4 col-md-12">
        <h1
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 600,
            color: "rgb(23, 43, 77)",
            fontFamily: "sans-serif",
          }}
        >
          Compensation <span style={{ color: "red" }}> *</span>
        </h1>
        <p>
          Job postings with right salary & incentives will help you find the
          right candidates.
        </p>
      </div>

      {/* Pay Type buttons */}
      <div ref={refs.salary_type} className="form-group col-lg-12 col-md-12">
        <label className="customlabel">
          Pay Type <span style={{ color: "red" }}> *</span>
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
          }}
          className="flex flex-row flex-wrap "
        >
          {jobData.payTypes.map((type) => (
            <p
              key={type}
              className={`default-btn ${
                formData?.salary_breakdown?.salary_type === type
                  ? "active-btn"
                  : "inactive-btn"
              }`}
              onClick={() => {
                setPayType("");
                setMinSalary(null);
                onFormChange("salary_breakdown.minSalary", null)
                setMaxSalary(null);
                onFormChange("salary_breakdown.maxSalary", null)
                setMaxSalaryTouched(false);
                setAverageIncentive(null)
                onFormChange("salary_breakdown.averageIncentive", null)
                setAverageIncentiveTouched(false)
                setPayType(type);
                onFormChange("salary_breakdown.salary_type", type)
              }  }
            >
              {type}
            </p>
          ))}
        </div>

          {errors.salary_type && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.salary_type}</p> </div>}


        {formData?.salary_breakdown?.salary_type === "Fixed Only" && (
          <div ref={refs.minSalary} style={{ marginTop: "20px" }}>
            <label className="customlabel flex items-center">Fixed salary / month <CandidateTooltip title = {"In-hand salary based on experience"}/></label>
            <div  ref={refs.maxSalary} className="flex flex-row">
            {/* Min salary */}
              <div className="flex flex-col">
              <input
                className="form-hide-spin-buttons col-md-12 p-2 px-2.5 mt-3"
                type="number"
                placeholder={
                  // formData?.salary_breakdown?.minSalary
                  //   ? formData?.salary_breakdown?.minSalary
                  //   : "Min Salary"
                  "Minimum fixed salary"
                }
                value={minSalary}
                style={{
                  backgroundColor: "white",
                  borderColor: "darkgrey",
                  height: "45px",
                  borderRadius: 0
                }}
                onChange={(e) => handleMinSalaryChange(e)}
              />
              {errors.minSalary && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.minSalary}</p></div>}
              </div>

              <div className="py-2.5 px-2.5 mt-3 bg-gray-300 border-y h-fit border-black">to</div>


              <div className="flex flex-col">
              <input
                type="number"
                className=" hide-spin-buttons col-md-12 p-2 px-2.5 mt-3 "
                placeholder={
                  // formData?.salary_breakdown?.maxSalary
                  //   ? formData?.salary_breakdown?.maxSalary
                  //   : "Max Salary"
                  "Maximum fixed salary"
                }
                style={{
                  backgroundColor: "white",
                  borderColor: "darkgrey",
                  height: "45px",
                  borderRadius: 0
                }}
                value={maxSalary}
                onChange={(e) => handleMaxSalaryChange(e)}
              />
              {errors.maxSalary && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.maxSalary}</p></div>}
              </div>
            </div>
          </div>
        )}
        


        {formData?.salary_breakdown?.salary_type === "Fixed + Incentive" && (
          <div className="salary-incentive-inputs">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr ",
                gap: "20px",
              }}
            >
              <div  style={{ marginTop: "20px" }}>
                <label className="customlabel flex items-center" htmlFor="">
                  Fixed salary / month (excluding incentives){" "}
                  <span style={{ color: "red" }}> *</span>
                  <CandidateTooltip title = {"In-hand salary based on experience"}/>
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr ",
                    gap: "20px",
                  }}
                >
                  <div  ref={refs.minSalary} className="flex flex-col">
                  <input
                    type="number"
                    placeholder={
                      // formData?.salary_breakdown?.minSalary
                      //   ? formData?.salary_breakdown?.minSalary
                      //   : "Min Salary"
                      "Minimum fixed salary"
                    }
                    style={{
                      backgroundColor: "white",
                      borderColor: "darkgrey",
                      height: "40px",
                    }}
                    value={minSalary}
                    className="hide-spin-buttons"
                    onChange={(e) => handleMinSalaryChange(e)}
                  />
                  {errors.minSalary && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.minSalary}</p></div>}
                  </div>
                    

                  <div ref={refs.maxSalary} className="flex flex-col">
                  <input
                    type="number"
                    placeholder={
                      // formData?.salary_breakdown?.maxSalary
                      //   ? formData?.salary_breakdown?.maxSalary
                      //   : "Max Salary"
                      "Maximum fixed salary"
                    }
                    style={{
                      backgroundColor: "white",
                      borderColor: "darkgrey",
                      height: "40px",
                    }}
                    value={maxSalary}
                    className="hide-spin-buttons"
                    onChange={(e) => handleMaxSalaryChange(e)}
                  />
                  {errors.maxSalary && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.maxSalary}</p></div>}
                  </div>

                </div>
              </div>
              <div ref={refs.averageIncentive} style={{ marginTop: "20px" }}>
                <label className="customlabel flex items-center" htmlFor="">
                  Average Incentive / month{" "}
                  <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="number"
                  className="hide-spin-buttons"
                  placeholder={
                    // averageIncentive
                    "Eg. ₹2000"
                  }
                  style={{
                    backgroundColor: "white",
                    borderColor: "darkgrey",
                    height: "40px",
                  }}
                  value={averageIncentive}
                  onChange={(e) => handleAverageIncentiveChange(e)}
                />
                {errors.averageIncentive && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.averageIncentive}</p></div>}
              </div>
            </div>
          </div>
        )}

        {formData?.salary_breakdown?.salary_type === "Incentive Only" && (
          <div className="incentive-input" style={{ marginTop: "20px" }}>
            <label className="customlabel flex items-center" htmlFor="">
              Average Incentive / month <span style={{ color: "red" }}> *</span>
              <CandidateTooltip title = {"Variable pay that candidate can earn on average"}/>
            </label>
            <input
              ref={refs.averageIncentive}
              type="number"
              className="hide-spin-buttons"
              style={{
                backgroundColor: "white",
                borderColor: "darkgrey",
                height: "40px",
              }}
              placeholder={
                // formData?.salary_breakdown?.averageIncentive !== ""
                //   ? formData.salary_breakdown.averageIncentive
                //   : "Average Incentive / Month"
                "Eg. ₹2000"
              }
              value={averageIncentive}
              onChange={(e) => handleAverageIncentiveChange(e)}
            />
            {errors.averageIncentive && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.averageIncentive}</p></div>}
          </div>
        )}
        {Number(totalAmount ) > 149999 && ((payType === "Fixed Only") || (payType === "Fixed + Incentive")) && (
          // <p className="text-red-400 text-sm flex  items-center gap-2">
          //   <svg
          //     className="h-[25px] w-[25px]"
          //     xmlns="http://www.w3.org/2000/svg"
          //     fill="none"
          //     viewBox="0 0 24 24"
          //     stroke="currentColor"
          //   >
          //     <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          //   </svg>
          //   <p className="text-red-400 text-sm">
          //     {" "}
          //     Total salary cannot exceed ₹ 149,999
          //   </p>
          // </p>
          <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{" "}
          Total salary cannot exceed ₹ 149,999
          </p>
          </div>
        )}

        {(Number(minSalary) > Number(maxSalary)) &&  ((payType === "Fixed Only") || (payType === "Fixed + Incentive")) && (
          // <p className="text-red-400 font-bold flex items-center gap-2">
          //   <svg
          //     className="h-[25px] w-[25px]"
          //     xmlns="http://www.w3.org/2000/svg"
          //     fill="none"
          //     viewBox="0 0 24 24"
          //     stroke="currentColor"
          //   >
          //     <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          //   </svg>
          //   <p className="text-red-400 text-sm">
          //     {" "}
          //     max salary must be greater then min salary
          //   </p>
          // </p>
          <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{" "}
          max salary must be greater then min salary
          </p>
          </div>
        )}

        {(Number(maxSalary) < 1000) && maxSalaryTouched &&  ((payType === "Fixed Only") || (payType === "Fixed + Incentive")) && (
          // <p className="text-red-400 font-bold flex items-center gap-2">
          //   <svg
          //     className="h-[25px] w-[25px]"
          //     xmlns="http://www.w3.org/2000/svg"
          //     fill="none"
          //     viewBox="0 0 24 24"
          //     stroke="currentColor"
          //   >
          //     <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          //   </svg>
          //   <p className="text-red-400 text-sm">
          //     {" "}
          //     salary should be at least ₹1000
          //   </p>
          // </p>
          <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{" "}
          salary should be at least ₹1000
          </p>
          </div>
        )}
        {(Number(averageIncentive) < 1000 ||
        Number(averageIncentive) > 99999) && averageIncentiveTouched && ((payType === "Fixed + Incentive") || (payType === "Incentive Only")) && (
        <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{" "}
        {Number(averageIncentive < 1000)
          ? "Incentive should be at least ₹1000"
          : ""}
        {Number(averageIncentive > 99999)
          ? "Incentive should be less then ₹99999"
          : ""}</p></div>
      )}
      </div>

      
      {showDetails && (
        <div
          className="details-box mb-4 "
          style={{
            background: "rgb(255, 246, 224)",
            borderRadius: "4px",
            border: "1px solid rgb(255, 209, 102)",
            padding: "16px",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "500", color: "black" }}>
            Salary Breakup shown to candidates
          </p>
          <div className="mt-2 w-full">
            {(formData?.salary_breakdown?.salary_type === "Fixed Only" ||
              formData?.salary_breakdown?.salary_type ===
                "Fixed + Incentive") && (
              <div className="flex  justify-between py-2">
                <p>Fixed salary / Month:</p>
                <span>
                  <span className="flex flex-col items-end">
                    <p>
                      ₹ {minSalary} - ₹ {maxSalary}
                    </p>
                    {/* {Number(minSalary) > Number(maxSalary) && (
                      <p className="text-red-400 font-bold flex justify-center items-center gap-2">
                        <svg
                          className="h-[25px] w-[25px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                        <p className="text-red-400 font-bold">
                          {" "}
                          max salary must be greater then min salary
                        </p>
                      </p>
                    )} */}
                    
                    {/* {Number(totalAmount ) > 149999 && (
                      <p className="text-red-400 font-bold flex justify-center items-center gap-2">
                        <svg
                          className="h-[25px] w-[25px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                        <p className="text-red-400 font-bold">
                          {" "}
                          Total salary cannot exceed ₹ 149,999
                        </p>
                      </p>
                    )}

                    {(Number(maxSalary) < 1000) && (
                      <p className="text-red-400 font-bold flex justify-center items-center gap-2">
                        <svg
                          className="h-[25px] w-[25px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                        <p className="text-red-400 font-bold">
                          {" "}
                          salary should be at least ₹1000
                        </p>
                      </p>
                    )} */}
                  </span>
                </span>
              </div>
            )}

            {(formData?.salary_breakdown?.salary_type === "Fixed + Incentive" ||
              formData?.salary_breakdown?.salary_type === "Incentive Only") && (
              <div className="flex  justify-between py-2">
                <p>Average Incentive:</p>
                <p className="flex flex-col justify-center items-end">
                  <p>₹{averageIncentive}</p>
                  {/* {(Number(averageIncentive) < 1000 ||
                    Number(averageIncentive) > 99999) && (
                    <p className="text-red-400 font-bold flex justify-center items-center gap-2">
                      <svg
                        className="h-[25px] w-[25px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>
                      <p className="text-red-400 font-bold">
                        {" "}
                        {Number(averageIncentive < 1000)
                          ? "Incentive should be at least ₹1000"
                          : ""}
                        {Number(averageIncentive > 99999)
                          ? "Incentive should be less then ₹99999"
                          : ""}
                      </p>
                    </p>
                  )} */}
                </p>
              </div>
            )}

            <div className="flex font-semibold  justify-between border-t-[1px] border-[#FFD779] mt-2 py-2">
              <p className="font-bold">Earning Potential / Month:</p>
              <p className="font-bold">
               {formData?.salary_breakdown?.salary_type === "Incentive Only" ? `₹ ${totalAmount}` :  `₹ ${minSalary} - ₹ ${totalAmount}`}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="form-group col-lg-12 col-md-12">
        <label className="customlabel">
          Do you offer any additional perks?
        </label>
        <div className="perks-buttons-container flex flex-col ">
          <div>
            {mergedPerks.map((perk) => (
              <button
                key={perk.value}
                onClick={() => handlePerkToggle(perk.value.toLowerCase())}
                className={`perk-button ${
                  selectedPerks.includes(perk.value.toLowerCase()) 
                  // formData?.job_Data?.benefits.includes(perk.value.toLowerCase())
                    ? "selected"
                    : ""
                }`}
              >
                {perk.label}{" "}
                {selectedPerks.includes(perk.value.toLowerCase())
                  // formData?.job_Data?.benefits.includes(perk.value.toLowerCase()) 
                  ? (
                  <RemoveIcon className="p-[2px]" />
                ) : (
                  <AddIcon className="p-[2px]" />
                )}
              </button>
            ))}
          </div>
          <div>
            {showAddPerkInput ? (
              <div className="w-[51%]">
                <button className="font-semibold pt-4 pb-1">Add other perks</button>
                <div className="flex">
                  <input
                    type="text"
                    value={newPerkInput}
                    onChange={handleNewPerkInputChange}
                    placeholder="Add other perks separated by comma"
                    className="bg-white border rounded border-gray-600 focus:ring-1 focus:ring-gray-500"
                  />
                  <div
                    onClick={handleAddPerk}
                    className="text-blue-400 font-semibold absolute pl-[46%] self-center cursor-pointer"
                  >
                    Add
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddPerkClick();
                }}
                className="flex items-center gap-1"
              >
                <FaPlus className="text-md text-[#1967d2]"/>
                <p className="text-md font-semibold text-[#1967d2]">Add other perks</p>
              </button>
            )}
          </div>
        </div>
      </div>

      <div ref={refs.question}  className="form-group col-lg-12 col-md-12">
        <label className="customlabel">
          Is there any joining fee or deposit required from the candidate?{" "}
          <span style={{ color: "red" }}> *</span>
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-center",
            gap: "10px",
          }}
          className="items-center"
        >
          {["Yes", "No"].map((location) => (
            <p
              key={location}
              className={`  default-btn ${
                formData?.job_data?.question === location
                  ? "active-btn"
                  : "inactive-btn"
              }`}
              onClick={() => {
                showDetail(location);
                handleButtonClick("job_data.question", location);
              }}
            >
              {location}
            </p>
          ))}
        </div>
        {errors.question && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.question}</p></div>}

        { formData.job_data.question === "Yes" && (
          <div>

            <div ref={refs.fee_amount} className="form-group col-lg-12 w-full lg:w-1/2 col-md-12">
              <label className="customlabel" style={{ marginTop: "10px" }}>
                Fee Amount <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="number"
                name="fee_amount"
                placeholder="₹1000"
                className="bg-white border border-gray-600 rounded -p-2 focus:ring-1 focus:ring-gray-500"
                value={formData?.fees?.fee_amount || ""}
                onChange={(e) => onFormChange("fees.fee_amount", e.target.value)}
                required
              />
              {Number(formData?.fees?.fee_amount) > 3000 && (
                <p className="text-red-400 font-bold flex  gap-2">
                  <svg
                    className="h-[25px] w-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                  <p className="text-red-400 font-bold">
                    {" "}
                    Fee Amount should be less then ₹3000
                  </p>
                </p>
              )}
              {errors.fee_amount && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.fee_amount}</p></div>}
            </div>

            <div ref={refs.payment_reason} className="form-group col-lg-12 col-md-12">
              <label className="customlabel">
                What is this fees for?
                <span style={{ color: "red" }}> *</span>
              </label>
              <div className="flex flex-col">
              <div
                style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                className="flex flex-row flex-wrap "
              >
                {jobData.feeReason.map((option, index) => (
                  <button
                    key={index}
                    className={`default-btn ${
                      formData?.fees?.payment_reason === option
                        ? "active-btn"
                        : "inactive-btn"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      onFormChange("fees.payment_reason", option);
                    }}
                  >
                    {option}
                  </button>
                ))}  
              </div>
              {errors.payment_reason && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.payment_reason}</p></div>}
              </div>
            </div>

            {formData?.fees?.payment_reason === "Other Reason" && (
              <div ref={refs.fee_reason}  className="form-group col-lg-12 col-md-12">
                <label className="customlabel">
                  Mention your reason here
                  <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  name="fee_reason"
                  placeholder="Please mention the reason for charging here"
                  value={formData.fees.fee_reason || ""}
                  onChange={(e) => onFormChange("fees.fee_reason", e.target.value)}
                  // required
                  className="bg-white border border-gray-600 rounded -p-2 focus:ring-1 focus:ring-gray-500"
                />
              {errors.fee_reason && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.fee_reason}</p></div>}
              </div>
            )}



            {/* {formData?.fees?.payment_reason === "Assets/ Inventory charge" && (
              <div className="form-group col-lg-12 col-md-12">
                <label className="customlabel">
                  Mention assets/inventory
                  <span style={{ color: "red" }}> *</span>
                </label>
                <input
                  type="text"
                  name="fee_reason"
                  placeholder="Eg. Bag, Laptop, etc."
                  value={formData.fees.fee_reason || ""}
                  onChange={(e) => onFormChange("fees.fee_reason", e.target.value)}
                  // required
                  className="bg-white border border-gray-600 rounded -p-2 focus:ring-1 focus:ring-gray-500"
                />
                {errors.fee_reason && <div className="text-red-500 text-sm">{errors.fee_reason}</div>}
              </div>
            )} */}


            {formData?.fees?.payment_reason === "Assets/ Inventory charge" && (




              <div ref={refs.assests} className="relative">

                <FormControl variant="outlined" className="relative w-[51%] mb-4">
                  <InputLabel id="assets-dropdown-label" ref = {dropdownRef}>Mention assets/inventory</InputLabel >
                  <Select
                    labelId="assets-dropdown-label"
                    id="assets-dropdown"
                    multiple
                    value={selectedItems}
                    onChange={assetsHandleChange}
                    input={<OutlinedInput label="Mention assets/inventory" />}
                    renderValue={(selected) => selected.join(', ')}
                    className="bg-white border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                    open={false}
                    onClick={() => setDropdownVisible((prev) => !prev)}
                  >
                    
                  </Select>
                </FormControl>
                {dropdownVisible && (
                    <div ref = {dropdownRef} className="absolute bg-white rounded z-50 w-[51%] shadow-lg h-fit top-[10%]">
                      {items.map((item) => (
                        <MenuItem key={item} value={item} onClick={() => handleCheckboxChange(item)}>
                          <Checkbox 
                            checked={selectedItems.includes(item) || (item === 'Others' && showCustomInput)}
                            onChange={() => handleCheckboxChange(item)}
                            className="gap-0 p-0"
                          />
                          <ListItemText primary={item} />
                        </MenuItem>
                      ))}
                      {showCustomInput && (
                        <div className="flex items-center p-1">
                          <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Enter custom item"
                            value={customItem}
                            onChange={handleCustomItemChange}
                            className="mr-2"
                          />
                        </div>
                      )}
                      <div className="flex items-center p-2 cursor-pointer">
                        <Button onClick={saveSelection} variant="contained" color="primary">
                          Save
                        </Button>
                      </div>
                      {errors.assests && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.assests}</p></div>}
                    </div>
                  )}
              </div>


            )}
  
  {formData?.fees?.payment_reason === "Registration/ Training Fees" && (
    <div  ref={refs.fee_reason} className="form-group col-lg-12 col-md-12">
      <label className="customlabel">
        Mention your reason here
        <span style={{ color: "red" }}> *</span>
      </label>
      <input
        type="text"
        name="fee_reason"
        placeholder="Please mention the reason for charging here"
        value={formData?.fees?.fee_reason || ""}
        onChange={(e) => onFormChange("fees.fee_reason", e.target.value)}
        // required
        className="bg-white border border-gray-600 rounded -p-2 focus:ring-1 focus:ring-gray-500"
      />
      {errors.fee_reason && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.fee_reason}</p></div>}
    </div>
  )}
            <div  ref={refs.payment_time}  className="form-group col-lg-12 col-md-12">
              <label className="customlabel">
                When should the fee be paid?{" "}
                <span style={{ color: "red" }}> *</span>
              </label>
              <div
                style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                className="flex flex-row flex-wrap "
              >
                {[
                  "Before the interview",
                  "After the job confirmation",
                  "Upon deduction from salary",
                ].map((option, index) => (
                  <button
                    key={index}
                    className={`default-btn ${
                      formData?.fees?.payment_time === option
                        ? "active-btn"
                        : "inactive-btn"
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      onFormChange("fees.payment_time", option);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.payment_time && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.payment_time}</p></div>}
            </div>
          </div>
        )}

        {shdetail &&
          formData?.job_data?.fees?.payment_reason === "Assets/ Inventory charge" && (
            <div  ref={refs.fee_reason} className="form-group col-lg-12 col-md-12">
              <label className="customlabel">
                Mention assets/inventory
                <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                name="fee_reason"
                placeholder="Please mention the reason for charging here"
                value={formData.fees.fee_reason || ""}
                onChange={(e) => onFormChange("fees.fee_reason", e.target.value)}
                // required
                className=""
              />

            {errors.fee_reason && <div className="text-red-500 text-sm flex items-center gap-1"><MdInfo className="text-red-500"/><p className="text-red-500">{errors.fee_reason}</p> </div>}
            </div>
          )}

      </div>
    </div>
  );
}