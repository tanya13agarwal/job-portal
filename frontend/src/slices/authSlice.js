import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData: null,
    isAdmin : false,
    isPlacement : false,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};
  

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {
        setToken(state , value) {
            state.token = value.payload;
        },
        setAdmin(state , value) {
            state.isAdmin = value.payload;
        },
        setPlacement(state , value) {
            state.isPlacement = value.payload;
        },
        setLoading(state , value) {
            state.loading = value.payload;
        },
        setSignupData(state , value) {
            state.signupData = value.payload;
        },
    },
})

export const {setToken , setSignupData , setLoading , setPlacement , setAdmin} = authSlice.actions;
export default authSlice.reducer;