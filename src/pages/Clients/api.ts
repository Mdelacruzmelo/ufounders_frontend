import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const clientsApi = createApi({

    reducerPath: 'clientsApi',

    baseQuery: fetchBaseQuery({

        baseUrl: `${process.env.REACT_APP_BACKEND_API_URL}`,

        prepareHeaders(headers, api) {
            const token = localStorage.getItem(`${process.env.REACT_APP_STORAGE_KEY}`)
            headers.set('Authorization', `Bearer ${token}`)
            return headers
        },

    }),

    endpoints: (builder) => ({

        getClients: builder.query({
            query: ({ limit = 10, offset = 0 }) => {
                return {
                    url: `/clients?limit=${limit}&offset=${offset}`,
                    method: 'GET',
                }
            },
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