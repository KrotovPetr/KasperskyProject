import { api } from "../store";
export const UserAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllUsers: builder.query<any, any>({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: (result) => ["User"],
    }),
    createUser: builder.mutation<any, any>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useFetchAllUsersQuery } = UserAPI;
