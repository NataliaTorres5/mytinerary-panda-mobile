import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentAPI = createApi({
    reducerPath: "commentAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-panda.herokuapp.com"
    }),

    tagTypes: ['Post'],

    endpoints: (builder) => ({


        getAllComments: builder.mutation({
            query: (id) =>({
                url: `/comments?itinerary=${id}`,
                method:'GET'
            }) 
            
        }),

        createComment : builder.mutation ({
            query: (body) => ({
                url: '/comments',
                method: 'POST',
                body: body,
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }),
            invalidatesTags: ['Post'],
        }),

        editComment: builder.mutation ({
            query: (body) =>({
                url:  `/comments/${body.id}`,
                method: 'PATCH',
                body: body,
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
        }),

        deleteComment: builder.mutation ({
            query: (id) => ({
                url:  `/comments/${id}`,
                method: 'DELETE',
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
        }),
        
    })
})

export default commentAPI
export const { useGetAllCommentsMutation, useCreateCommentMutation, useEditCommentMutation, useDeleteCommentMutation  } = commentAPI