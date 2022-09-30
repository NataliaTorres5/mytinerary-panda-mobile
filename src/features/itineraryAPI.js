import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itineraryAPI = createApi({
    reducerPath: "itineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-panda.herokuapp.com"
    }),

    tagTypes: ['Post'],

    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: (id) =>({
                url: `/itineraries?city=${id}`
            }) 
        }),
        getAllItinerariesUser: builder.query({
            query: (id) =>({
                url: `/itineraries?user=${id}`
            }) 
        }),
        createItinerary: builder.mutation({
            query: (body) =>({
                url: `/itineraries/`,
                method: 'POST',
                body: body
            })
        }),
        itineraryEdit: builder.mutation({
            query: (body) =>({
                url: `/itineraries/=${body.id}`,
                method: 'PATCH',
                body: body,
            })
        }),
        itineraryExterminate: builder.mutation({
            query: (id) =>({
               url: `/itineraries/${id}`,
               method: 'DELETE'
            })
        }),
        itineraryLikes: builder.mutation({
            query: (id) =>({
                url: '/itineraries/like/' + id ,
                method: 'POST',
                headers: {Authorization: 'Bearer ' + localStorage.getItem('token')},       
            }),

            invalidatesTags: ['Post'],
        }),

        
        
    })
})

export default itineraryAPI
export const { useGetAllItinerariesQuery, useGetAllItinerariesUserQuery, useCreateItineraryMutation, useItineraryEditMutation, useItineraryExterminateMutation, useItineraryLikesMutation } = itineraryAPI