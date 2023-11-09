/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../../api/apiSlice";

const enrollApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    enrollCourse: build.mutation({
      query: (data: any) => ({
        url: "/enrollment/create",
        method: "POST",
        body: data,
      }),
    }),
    getEnrollCourse: build.query({
      query: () => ({
        url: "enrollment",
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }),
    }),
  }),
});

export const { useEnrollCourseMutation, useGetEnrollCourseQuery } = enrollApi;
