import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { adminSignup } from "../../services/operations/authAPI";
// import { bgGradient } from "../../constants/color";
// import { adminLogin, getAdmin } from "../../redux/thunks/admin";
// import adminbg from "../../constants/data/adminbg.jpeg";


const AdminLogin = () => {
  const { signupData } = useSelector((state) => state.auth);
  const { isAdmin } = useSelector((state) => state.auth);
  const { isPlacement } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [secretKey , setSecretKey] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
      const {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          accountType,
      } = signupData;
 
      console.log("Change ho gyaa bhai: ");
      dispatch(
        adminSignup(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            secretKey,
            navigate
        ));

        setSecretKey("");

    // dispatch(adminLogin(secretKey.value));
  };


  useEffect(() => {
    // dispatch(getAdmin());
  }, [dispatch]);

  if (isAdmin) return <Navigate to="/admin/dashboard" />;
  if (isPlacement) return <Navigate to="/placement/dashboard" />;

  return (
    <div className="flex items-center justify-center my-auto">
      <div
        className="w-[400px] flex items-center justify-center rounded-lg shadow-xl bg-white p-8"
      >
        <div
          className="flex items-center justify-center flex-col gap-6 w-full"
        >
          <div className="text-2xl">Admin/Tnp Login!</div>
          <form
            
            className="flex items-center justify-center flex-col gap-3 w-full"
            onSubmit={submitHandler}
          >
            <input
              required
              placeholder="Secret Key"
              type="password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='w-full rounded-[0.5rem] p-[12px]'
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />

            <button
              className='px-4 w-[50%] py-2 rounded border border-transparent active:scale-90 text-[#fff] bg-customDarkBlue transition-all duration-200 hover:bg-transparent hover:text-black hover:border-[0.5px] hover:border-customDarkBlue '
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;