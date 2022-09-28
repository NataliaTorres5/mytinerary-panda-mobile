import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cityAPI = createApi({
    reducerPath: "cityAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-panda.herokuapp.com"
    }),

    tagTypes: ['Post'],

    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (city) => `/cities?city=${city}`
        }),
        newCityAdd: builder.mutation({
            query: (data) => ({
                url: '/cities',
                method: 'POST',
                body: data
            })
        }),

        EditCity: builder.mutation({
            query: (body, id) => ({
                url: `/cities/${id}`,
                method: 'PUT',
                body: body,
                
                
            })
        }),


        invalidatesTags: ['Post'],
    })





})

export default cityAPI

export const { useGetAllCitiesQuery, useNewCityAddMutation, useEditCityMutation } = cityAPI