import  { useState, useEffect, useRef } from "react";
// import { generateOTP, verifyOTP } from "@/utils/authApi";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import './styles.css'; 
// import { ToastContainer, toast } from 'react-toastify';
import toast from "react-hot-toast";
// import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [startTimer, setStartTimer] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);
  const navbarHeight = 50; // Height of your navbar, adjust as needed
  const [focusedInput, setFocusedInput] = useState(null); 

  useEffect(() => {
    const handleScroll = () => {
      const buttonTop = ref.current.getBoundingClientRect().top;
      const buttonBottom = ref.current.getBoundingClientRect().bottom;

      // Log the current vertical scroll position of the window
      // console.log('Current scroll position:', window.scrollY);

      if (window.scrollY > 526) {
        setIsSticky(true);
      }
      if (window.scrollY < 526) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarHeight]); // Dependency on navbarHeight ensures that this effect updates if navbarHeight changes

  useEffect(() => {
    console.log(responseMessage);

    let interval = null;
    if (startTimer && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setResendTimer(0);
      setStartTimer(false);
    }
    return () => clearInterval(interval);
  }, [startTimer, resendTimer]);

  const onClickButton = (event) => {
    if (isSticky) {
      window.location.hash = "#loginbox";
      window.location.hash = "";

      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
    } else {
      // Call the handleGenerateOtp function

      handleGenerateOtp(event);
    }
  };

  const notify = () => toast.error('OTP is either invalid or expired', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


  const handleGenerateOtp = async (event) => {
    event.preventDefault();
    // setLoading(true);
    // if (mobileNumber.length !== 10) {
    //   setErrorMessage("Please enter a valid mobile number");
    //   setLoading(false);
    //   return;
    // }

    // // const res = await generateOTP(mobileNumber);
    // window.alert(`Your login Otp: ${res.otp} `);
    // setLoading(false);
    // setResponseMessage(res.message);
    // setOtpSent(true);
    // setLoading(false);
    // setStartTimer(true);
  };

  const handleVerifyOTP = async () => {

    // event.preventDefault();
   
    // setLoading(true);
    // if (otp.length !== 4) {
    //   setErrorMessage("OTP should be 4 characters.");
    //   setLoading(false);
    //   return;
    // }
    // const res = await verifyOTP(mobileNumber, otp);
    // if(res === 'error'){
    //   notify();
    //   // setOtp('');
    // }
    //  else{
    //   if (responseMessage === "New user created successfully.") {
    //     navigate("/onboarding", { state: { mobileNumber } });
    //   } else {
    //     // console.log('otp galat hai mere dost')
    //     // alert('otp is wrong!!')
    //     navigate("/employers-dashboard");
    //   }
    //   setLoading(false);
    //  }
  };

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // if (name === "mobileNumber") {
      
    //   if(value.length <= 10){
    //     setMobileNumber(value);
    //   }
      
    // } else if (name === "otp") {
    //   setOtp(value);
    // }
    // setErrorMessage("");
  };

  const handleResendOtp = async () => {  
    // setResendTimer(30);
    // setLoading(true);
    // const res = await generateOTP(mobileNumber);
    // setResponseMessage(res.message);
    // window.alert(`Your login Otp: ${res.otp} `);
    // setOtpSent(true);
    // setLoading(false);
    // setStartTimer(true);
  };

  const handleEditPhoneNumber = () => {
    setOtpSent(false);
    setOtpVerified(false);
    setErrorMessage("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!otpSent) {
        handleGenerateOtp(event);
      }
    }
  };


  useEffect(()=>{
     if(otp.length === 4){
      handleVerifyOTP();
     }
  },[otp])
  return (
    <section
      className="w-full mt-20 p-7 gap-y-10  lg:pt-20 flex flex-col lg:flex-row  items-center justify-between flex-wrap md:flex-nowrap lg:pl-28 "
      id="loginbox"
    >
      
      <div
        className=" md:text-left md:w-[50%]  flex flex-col gap-y-3 items-start justify-center"
        data-aos="fade-up"
      >
        <span className="text-xl lg:text-4xl text-[#1f8268] font-bold">
          INDIA’S #1 HIRING PLATFORM
        </span>
        <div className=" text-4xl lg:text-6xl md:text-5xl font-bold flex flex-col gap-y-2 items-start">
          <span>Find the right</span>
          <span>candidate. Fast.</span>
        </div>
        <span className="text-xl lg:text-2xl font-bold text-[#5b5e76] opacity-[80%]">
          Trusted by 5 Cr+ Candidates | 7 Lakh+ Employers
        </span>
      </div>

      <form
        action="#"
        className="bg-white md:flex md:flex-col md:justify-center md:items-center p-[18px] py-5 md:p-5 rounded-lg shadow-lg max-w-md w-full mx-auto md:mx-0 relative lg:absolute lg:right-20 "
      >
        <span className="text-xl md:text-2xl font-bold relative top-[-20px] md:top-[-5px] ">
         {!otpSent? 'Employer Login/Sign Up':'Enter OTP'}
        </span>
        <div>
          {!otpVerified && (
            <>
              {!otpSent ? (
             <div>
                  <div
                  className="flex gap-x-5"
                  style={{ marginTop: "10px" }}
                  >
                  <div className="d-flex align-items-center justify-content-center fw-bold bg-[#f6f4ff] p-2 rounded-md">
                    +91
                  </div>
                  <input
                    className="bg-[#f6f4ff] w-[300px] px-2 rounded-md"
                    type="number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    minLength={10}
                    maxLength={10}
                    style={{border:errorMessage?'1px solid red':''}}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    required
                  />
                </div>

                { <p className="text-center h-2 mb-3" style={{ color: "red" }}>{errorMessage?errorMessage:''}</p>}
             </div>
              ) : (
                <div className="flex gap-x-3 flex-col md:flex-row md:w-[450px] justify-center items-center">
                <div className="flex flex-col gap-y-4 justify-center items-center ">
                  <div className="flex gap-2 ">
                       <p >OTP sent to <span className="font-bold text-[#6b7c8f]"> {mobileNumber}</span>.</p>
                       <button
                    style={{ color: "blue" }}
                    type="button"
                    className="btn-edit"
                    onClick={handleEditPhoneNumber}
                  >
                    Edit
                  </button>
                  </div>
             
                  
                  <p >Enter the 4-digit code(OTP)</p>
                </div>
               
                </div>
              )}
            </>
          )}
          <div>
            {otpSent && !otpVerified && (
              <div className="flex justify-center items-center flex-col">
                 <OtpInput
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  numInputs={4}
                  renderInput={(props, index) => (
                    <input
                      {...props}
                      onFocus={() => setFocusedInput(index)}
                      onBlur={() => setFocusedInput(null)}
                      className={focusedInput === index ? 'focused' : ''}
                    />
                  )}
                  inputStyle={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0.5rem",
                    padding: "0.5rem",
                    fontSize: "1.2rem",
                    borderRadius: "0.25rem",
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                  }}
                  isInputNum
                  shouldAutoFocus
                />
                <div className="form-group col-lg-5 flex justify-center items-center">
                  {resendTimer > 0 && (
                    <div style={{ whiteSpace: "nowrap" }}>
                      Resend OTP in {resendTimer} seconds
                    </div>
                  )}
                </div>
                {resendTimer === 0 && (
                  <button
                    style={{ color: "blue" }}
                    type="button"
                    className="btn-edit"
                    onClick={handleResendOtp}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            )}
          </div>
          <div>
            {!otpSent && !otpVerified && (
              <div
                ref={ref}
                className={`${
                  isSticky
                    ? "fixed bottom-[0px] md:top-[-7px] lg:right-56 z-[9999] w-[100vw] left-0 md:left-auto bg-[#ffff] md:w-[150px] sm:top-3  md:bg-transparent lg:p-0 p-3"
                    : ""
                }`}
                style={{height:"fit-content"}}
              >
                <button
                  type="button"
                  className={`${
                    isSticky
                      ? "w-full bg-[#3b82f6] text-white hover:bg-[#5a99ff] rounded-lg mt-3 h-[34px] p-1"
                      : "w-full md:w-[365px] h-12 bg-[#3b82f6] text-white hover:bg-[#5a99ff] rounded-lg mt-3 font-bold relative top-0"
                  }`}
                  onClick={(event)=>{
                      
                    console.log('cliack huaa');

                    if(!isSticky && (mobileNumber.length !== 10 || loading)){
                      onClickButton(event);
                    }
                     else if(mobileNumber.length === 10){
                      onClickButton(event);
                    }
                    }}
                  // disabled={
                  //   !isSticky && (mobileNumber.length !== 10 || loading)
                  // }
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            )}
            {/* {otpSent && !otpVerified && (
              <button
                type="submit"
                className="w-full h-12 bg-[#3b82f6] text-white hover:bg-[#5a99ff] rounded-lg mt-3 font-bold"
                onClick={handleVerifyOTP}
                disabled={otp.length !== 4 || loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm" />
                ) : (
                  "Verify Otp"
                )}
              </button>
            )} */}
          </div>
        </div>
       
      </form>

      {/* <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> */}
    </section>
  );
};

export default Index;
