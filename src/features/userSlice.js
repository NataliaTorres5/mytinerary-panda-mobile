import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

export const userSlice = createSlice({
    name:"logged",
    initialState: {
        loggedState:null,
        userState:null},
        

    reducers: {
        
        controlReducer : (state, action)=>{
            state.userState = action.payload // trae  estado de rol del usuario
            state.loggedState = action.payload.logged   //trae el estado logged del usuario
            
        },
        
        exit:(state, action) => {
            state.loggedState =  false   
            state.userState = null              // indica que el estado es null cuando el usuario no esta logueado. 
            
            
        },
        
    },
});

export const { exit, controlReducer   } = userSlice.actions

export default  userSlice.reducer