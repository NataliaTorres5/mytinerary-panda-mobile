import {configureStore} from '@reduxjs/toolkit'
import cityAPI from './citiesAPI'
import activityAPI from './activityAPI'
import itineraryAPI from './itineraryAPI'
import commentAPI from './commentsAPI'
import { userAPI } from './userAPI'
import userSlice from './userSlice'
import rechargeSlice from './rechargeSlice'

export default  configureStore ({

    reducer:{
        //cities : cityReducer, //slice
        cityAPI:cityAPI.reducer, //api

        logged:userSlice,
        [userAPI.reducerPath] : userAPI.reducer,

        //itineraries: itineraryReducer,
        [itineraryAPI.reducerPath] : itineraryAPI.reducer,

         [activityAPI.reducerPath] : activityAPI.reducer,

         [commentAPI.reducerPath] : commentAPI.reducer,

        

         recharge:rechargeSlice,


    },

   // middleware: (getDefaultMiddleware) => 
})

