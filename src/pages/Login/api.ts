import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({

  reducerPath: 'loginApi',

  baseQuery: fetchBaseQuery({
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    baseUrl: `${process.env.REACT_APP_BACKEND_API_URL}`
  }),

  endpoints: (builder) => ({

    login: builder.mutation({
      query: (params) => ({
        url: '/auth/login',
        method: 'POST',
        body: params
      })
    })

  })
})
