/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    studentRegister: build.mutation({
      query: (data: any) => ({
        url: "/user/create-student",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useStudentRegisterMutation } = userApi;
