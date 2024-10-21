import "../components/Style.css";
import JobDetails from "./subComponents/JobDetails";
import CandidateReq from "./subComponents/CandidateReq";
import InterviewInfo from "./subComponents/InterviewInfo";
import JobPreview from "./subComponents/JobPreview";
import PricingPage from "./subComponents/PricingPage";
const PostBoxForm = ({ activeStep, setActiveStep, formData, onFormChange, onSubmit, errors, setErrors , refs}) => {
  console.log("post box form errorsss:-",errors);
  return (
    <form
      className="default-form"
      onSubmit={(e) => {
        e.preventDefault();
        // onSubmit();
      }}
    >
      {activeStep === 0 && (
        <JobDetails
          formData={formData}
          onFormChange={onFormChange}
          activeStep={activeStep}
          errors={errors}
          setErrors={setErrors}
          refs = {refs}
        />
      )}

      {activeStep === 1 && (
        <CandidateReq
          formData={formData}
          onFormChange={onFormChange}
          activeStep={activeStep}
          errors={errors}
          setErrors={setErrors}  
          refs = {refs}      
        />
      )}

      {activeStep === 2 && (
        <InterviewInfo
          formData={formData}
          activeStep={activeStep}
          onFormChange={onFormChange}
          errors={errors}
          setErrors={setErrors}
          refs = {refs}
        />
      )}

      {activeStep === 3 && (
        <JobPreview
          formData={formData}
          activeStep={activeStep}
          onFormChange={onFormChange}
          setActiveStep={setActiveStep}
        />
      )}

      {activeStep === 4 && (
        <PricingPage
          formData={formData}
          activeStep={activeStep}
          onFormChange={onFormChange}
        />
      )}
    </form>
  );
};

export default PostBoxForm;