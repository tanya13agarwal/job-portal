const BASE_URL = process.env.REACT_APP_BASE_URL;

//AUTH ENDPOINTS/API
export const authEndpoints = {
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API : BASE_URL + "/auth/signup",
    LOGIN_API : BASE_URL + "/auth/login",
    RESETPASSWORDTOKEN_API : BASE_URL + "/auth/resetPasswordToken",
    RESETPASSWORD_API : BASE_URL + "/auth/resetPassword"
}