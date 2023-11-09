/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../utils/url";

interface IUser {
  profile: any;
  isLoading: boolean;
}

const initialState: IUser = {
  profile: null,
  isLoading: true,
};

export const fetchedUserProfile = createAsyncThunk(
  "user/fetchedUserProfile",
  async () => {
    const response = await fetch(`${baseUrl}user/profile`, {
      headers: {
        Authorization: localStorage.getItem("token") as string,
      },
    });
    const data = await response.json();

    if (!data.success) {
      localStorage.removeItem("token");
    }

    return data.data.student;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedUserProfile.pending, (state) => {
        state.isLoading = true;
        state.profile = null;
      })
      .addCase(fetchedUserProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.profile = payload;
      })
      .addCase(fetchedUserProfile.rejected, (state) => {
        state.isLoading = false;
        state.profile = null;
      });
  },
});

export default userSlice.reducer;
