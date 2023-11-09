import { createSlice } from "@reduxjs/toolkit";

export interface StudentInfo {
  id: string;
}

const initialState: StudentInfo = {
  id: "",
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudentId: (state, { payload }) => {
      state.id = payload;
    },
  },
});

export const { addStudentId } = studentSlice.actions;

export default studentSlice.reducer;
