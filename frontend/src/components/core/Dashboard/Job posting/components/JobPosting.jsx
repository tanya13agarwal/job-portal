import React from "react";
import HorizontalLinearStepper from "./JobPostForm";
import Header from "../login/Header";

const JobPosting = () => {

  return (
    <div>
      <Header />
      <div className="w-full bg-blue-500"></div>
      <div
        // style={{
        //   margin: "100px",
        //   paddingTop: "100px",
        //   background: "",
        // }}
      >
        <HorizontalLinearStepper />
      </div>
    </div>
  );
};

export default JobPosting;
