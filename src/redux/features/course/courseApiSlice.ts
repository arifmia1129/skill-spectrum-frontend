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
    getCourseById: build.query({
      query: (id: any) => ({
        url: `/course/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCourseQuery, useGetCourseByIdQuery } = courseApi;
