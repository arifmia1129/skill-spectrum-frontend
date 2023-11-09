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
    updateEnrollment: build.mutation({
      query: ({ id, data }: any) => ({
        url: `enrollment/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["enrollment"],
    }),
    getEnrollCourse: build.query({
      query: () => ({
        url: "enrollment",
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }),
      providesTags: ["enrollment"],
    }),
  }),
});

export const {
  useEnrollCourseMutation,
  useGetEnrollCourseQuery,
  useUpdateEnrollmentMutation,
} = enrollApi;
