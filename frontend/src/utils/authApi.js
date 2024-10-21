import axios from 'axios';
import { baseURL } from './constant';

export const generateOTP = async (phone_number) => {
    try {
        console.log('mobile number is ', phone_number)
        const response = await axios.post(`${baseURL}/employee/auth/generateOTP`, {
            phone_number,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verifyOTP = async (phone_number, otp) => {
    try {
        const response = await axios.post(`${baseURL}/employee/auth/verifyOTP`, {
            phone_number,
            otp,
        });
        
        console.log(response,'this is the backend responce!!')
        localStorage.removeItem('accessToken');
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        const accessTokenData = {
            accessToken: response.data.accessToken,
            expiry: expiryDate.getTime()
        };
        localStorage.setItem('accessToken', JSON.stringify(accessTokenData));
        localStorage.setItem('user', JSON.stringify(response.data.employerDetails));
        return response.data;
    } catch (error) {
        return 'error'
    }
};
