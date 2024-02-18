import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { loginUser, signInUser } from "./SignIn.action";

const initialState = {
    isLoading: false,
    error: null,
    success: false,
    user: null,
    logged: localStorage.getItem('logged') === 'true',
    token: localStorage.getItem('token'),
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
                console.log("action.error", action.payload)
                state.error = action.payload
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.logged = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.logged = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.logged = false;
            })
    }
})
export const { toggleSuccess } = signInSlice.actions
export default signInSlice.reducer