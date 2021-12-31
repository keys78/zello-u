import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://cornie-assessment.herokuapp.com';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users/O6Jd07x7M09NkSl`
        }),
       
    })
});

export const { useGetUsersQuery } = usersApi;