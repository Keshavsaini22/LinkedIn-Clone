import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { signInUser } from "./SignIn/SignIn.action";
const initialState = {
    isLoading: false,
    error: null,
    success: false,
    
}

export const signInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        toggleSuccess: (state, action) => {
            state.success = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInUser.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.isLoading = false
                console.log("action.error",action.payload)
                state.error = action.payload
            })
    }
})
export const { toggleSuccess } = signInSlice.actions
export default signInSlice.reducer