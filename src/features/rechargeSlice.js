import { createSlice } from "@reduxjs/toolkit";

export const rechargeSlice = createSlice ({
    name: "recharge",
    initialState: {rechargeState: false},
    reducers: {
        recharge: (state, action) => {
            state.rechargeState = !state.rechargeState
        },
    },
});

export const { recharge } = rechargeSlice.actions

export default rechargeSlice.reducer