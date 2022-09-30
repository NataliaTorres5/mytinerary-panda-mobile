import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'
export const userAPI = createApi( {

    reducerPath: "userAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-panda.herokuapp.com", 
    }),

    endpoints: (builder) => ({ //reductor 
        signUpUser: builder.mutation({
            query: (info) => ({
                url: '/auth/signup',
                method: 'POST',
                body: info,
        }), 
    }),

        token: builder.mutation ({
            query: (token) => ({
                url: '/auth/token',
                method: 'GET',
                headers: {Authorization: 'Bearer ' + token}
            })

            }),
        

        signInUser: builder.mutation({
            query: (info) => ({
                url: '/auth/signin',
                method: 'POST',
                body: info,
            })
            
        }), 


        signOutUser: builder.mutation({
            query: (mail) => ({
                url: '/auth/signout',
                method: 'POST',
                body: mail,
            })
        }),
        
        editProfile: builder.mutation({
            query: (body) => ({
                url: '/auth/editProfile',
                method: 'PATCH',
                body: body,
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }),
        }),
        
    })

}) 

export const {useSignInUserMutation, useSignUpUserMutation, useSignOutUserMutation, useEditProfileMutation, useTokenMutation}=userAPI