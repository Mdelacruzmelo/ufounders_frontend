import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const clientsApi = createApi({
    reducerPath: 'clientsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BACKEND_API_URL}`
    }),
    endpoints: (builder) => ({
        getClients: builder.query({
            query: () => '/clients',
        }),
        getClientDetails: builder.query({
            query: (id) => `/clients/${id}`,
        }),
        seedDatabase: builder.query({
            query: () => `/seed`,
        }),
        truncateDatabase: builder.mutation({
            query: () => ({
                url: `/seed`,
                method: 'DELETE'
            }),
        }),
    }),
})

export const { useGetClientsQuery } = clientsApi