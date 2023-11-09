/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../../api/apiSlice";

const enrollApi = api.injectEndpoints({
  endpoints: (build) => ({
    enrollCourse: build.mutation({
      query: (data: any) => ({
        url: "/enrollment/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useEnrollCourseMutation } = enrollApi;
