import api from "../../api/apiSlice";

const courseApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCourse: build.query({
      query: () => ({
        url: "/course",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCourseQuery } = courseApi;
