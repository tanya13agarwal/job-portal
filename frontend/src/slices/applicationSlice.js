import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    application : null,
    editApplication : false,
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
            state.application = value.payload;
        },
        setEditApplication(state , value) {
            state.editApplication = value.payload;
        },
    },
})

export const {setApplication , setEditApplication , setLoading} = applicationSlice.actions;
export default applicationSlice.reducer;