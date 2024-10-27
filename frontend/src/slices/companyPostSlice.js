import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  company: null,
  editCompany: false,
}

const companyPostSlice = createSlice({
  name: "companyPost",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload
    },
    setEditCompany: (state, action) => {
      state.editCompany = action.payload
    },
    resetCompanyState: (state) => {
      state.company = null
      state.editCompany = false
    },
  },
})

export const {
  setCompany,
  setEditCompany,
  resetCompanyState,
} = companyPostSlice.actions

export default companyPostSlice.reducer