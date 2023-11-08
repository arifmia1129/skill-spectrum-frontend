/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../../api/apiSlice";

const courseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCourse: build.query({
      query: (query: any) => ({
        url: "/course",
        method: "GET",
        params: query,
      }),
    }),
  }),
});

export const { useGetCourseQuery } = courseApi;
