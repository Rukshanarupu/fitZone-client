import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fitzone-server.vercel.app/api/' }),
    tagTypes:['product'],
    endpoints: () => ({}),
})
