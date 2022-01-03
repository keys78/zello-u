import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../models/userModel';

const baseUrl = 'https://cornie-assessment.herokuapp.com';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users/O6Jd07x7M09NkSl`
        }),

        activateUser: builder.mutation({
            query: (id) => ({
                url: `/activate-user/${id}`,
                method: 'PATCH',
                // body: rest
            }),
            // providesTags: (result, error, { id }) => [{ type: 'users', id }]
        }),
        
        deactivateUser: builder.mutation({
            query: (id) => ({
                url: `/deactivate-user/${id}`,
                method: 'PATCH',
            }),
        }),
        
        markPaid: builder.mutation({
            query: (id) => ({
                url: `/mark-paid/${id}`,
                method: 'PATCH',
            }),
        }),
        markUnpaid: builder.mutation({
            query: (id) => ({
                url: `/mark-unpaid/${id}`,
                method: 'PATCH',
            }),
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/remove-user/${id}`,
                method: 'DELETE',
            })
        }),
       
    })
});

export const { 
    useGetUsersQuery, 
    useActivateUserMutation, 
    useDeactivateUserMutation, 
    useMarkPaidMutation,
    useMarkUnpaidMutation,
    useDeleteUserMutation
} = usersApi;