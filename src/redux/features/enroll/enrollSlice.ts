import { createSlice } from "@reduxjs/toolkit";

export interface EnrollInfo {
  id: string;
  name: string;
  imageUrl: string;
}

const initialState: EnrollInfo = {
  id: "",
  name: "",
  imageUrl: "",
};

export const enrollSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addEnrollInfo: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.imageUrl = payload.imageUrl;
    },
    resetEnrollInfo: (state) => {
      state.id = "";
      state.name = "";
      state.imageUrl = "";
    },
  },
});

export const { addEnrollInfo, resetEnrollInfo } = enrollSlice.actions;

export default enrollSlice.reducer;
