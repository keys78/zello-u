import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://cornie-assessment.herokuapp.com';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users/O6Jd07x7M09NkSl`
        }),

        activateUser: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/activate-user/${id}`,
                method: 'PUT',
                body: rest
            })
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/remove-user/${id}`,
                method: 'DELETE',
            })
        }),
       
    })
});

export const { useGetUsersQuery, useDeleteUserMutation } = usersApi;