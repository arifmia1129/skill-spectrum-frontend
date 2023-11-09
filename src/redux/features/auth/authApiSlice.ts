/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data: any) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
