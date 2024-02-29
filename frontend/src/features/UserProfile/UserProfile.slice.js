import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfile } from "./UserProfile.action";

const initialState = {
    isLoading: false,
    error: null,
    userData: null,
    success: false
}

export const UserProfileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSuccess: (state, action) => {
            state.success = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateUserProfile.pending, (state) => {
            state.isLoading = true;
            state.success = false;
        })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
                state.success = true;
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.success = false;
                state.error = action.payload;
            })
    }
})
export const { toggleSuccess } = UserProfileSlice.actions
export default UserProfileSlice.reducer