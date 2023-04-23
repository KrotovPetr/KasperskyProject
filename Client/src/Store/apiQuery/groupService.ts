import { api } from '../store';
export const GroupAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllGroup: builder.query<any, any>({
            query: (params) => ({
                url: '/groups',
                params
            }),
            providesTags: (result) => ['Group'],
        }),
        createGroup: builder.mutation<any, any>({
            query: (user) => ({
                url: '/groups',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Group'],
        }),
    }),
});

export const { useFetchAllGroupQuery, useCreateGroupMutation } = GroupAPI;
