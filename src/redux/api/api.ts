// import { createApi } from '@reduxjs/toolkit/query'
import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    tagTypes:['equipment'],
    endpoints: (builder) => ({
        getTodos:  builder.query({
            query: (priority)=>({
                url: "/tasks",
                method: "GET",
                params:{priority}
            }),
            providesTags:['equipment'],
        }),
        addTodo:  builder.mutation({
            query: (data)=>{
                // console.log("inside api=>", data);
                return{
                    url: "/task",
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags:['equipment'],
        }),
        deleteTodo:  builder.mutation({
            query: (_id)=>{
                return{
                    url: `/task/${_id}`,
                    method: "DELETE"
                }
            },
            invalidatesTags:['equipment'],
        }),
        updateTodo: builder.mutation({
            query: (updateData)=>{
                console.log("inside api=>", updateData);
                return{
                    url: `/task/${updateData.id}`,
                    method: "PUT",
                    body: updateData.data
                }
            },
            invalidatesTags:['equipment'],
        }),
    }),
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = baseApi