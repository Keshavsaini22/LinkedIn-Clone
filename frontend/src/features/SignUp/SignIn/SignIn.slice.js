import { createSlice } from "@reduxjs/toolkit";
import { loginUser,  logoutUser, signInUser } from "./SignIn.action";

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
                console.log("userid=",action.payload.user._id)
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.logged = false;
            })
            .addCase(logoutUser.pending,(state,)=>{
                state.isLoading=true;
                state.logged=true;
                state.error=null;
            })
            .addCase(logoutUser.fulfilled,(state,)=>{
                state.isLoading=false;
                state.logged=false;
                state.token=null;
                state.user=null
            })
            .addCase(logoutUser.rejected,(state,action)=>{
                state.isLoading=false;
                state.logged=true;
                state.error=action.payload;
            })
    }
})
export const { toggleSuccess } = signInSlice.actions
export default signInSlice.reducer