import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import cityAPI from './citiesAPI'
//import userLoggedSlice from './userLoggedSlice'
//import rechargeSlice from './rechargeSlice'

export default  configureStore ({

    reducer:{
        //cities : cityReducer, //slice
        cityAPI:cityAPI.reducer, //api

        // itineraries: itineraryReducer,
        // [itineraryAPI.reducerPath] : itineraryAPI.reducer,

        // [activityAPI.reducerPath] : activityAPI.reducer,

        // logged:userLoggedSlice,
        // [userAPI.reducerPath] : userAPI.reducer,

        // recharge:rechargeSlice,


    },

   // middleware: (getDefaultMiddleware) => 
})

