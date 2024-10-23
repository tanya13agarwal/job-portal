import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    application : null,
    loading: false,
};
  

const applicationSlice = createSlice({
    name : "application",
    initialState : initialState,
    reducers : {
        setLoading(state , value) {
            state.loading = value.payload;
        },
        setApplication(state , value) {
            state.signupData = value.payload;
        },
    },
})

export const {setApplication , setLoading} = applicationSlice.actions;
export default applicationSlice.reducer;