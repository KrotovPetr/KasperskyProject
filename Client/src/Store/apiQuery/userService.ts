import { api } from '../store';
import { IUserDto } from '../../Utils/Types/types';
export const UserAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<any, any>({
            query: (params) => ({
                url: '/users',
                params,
            }),
            providesTags: (result) => ['User'],
        }),
    }),
});

export const { useFetchAllUsersQuery } = UserAPI;
