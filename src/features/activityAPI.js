import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const activityAPI = createApi({
    reducerPath: "activityAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-panda.herokuapp.com"
    }),

  

    endpoints: (builder) => ({
        getAllActivities: builder.query({
            query: (id) =>({
                url: `/activities/?itineraries=${id}`
            }) 
            
        }),
        
    })
})

export default activityAPI
export const { useGetAllActivitiesQuery, } = activityAPI