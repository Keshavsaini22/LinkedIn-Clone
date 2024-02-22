import { createSlice } from "@reduxjs/toolkit";
import { createLike } from "./Likes.action";

const initialState = {
    isLoading: false,
    error: null,
    like: null,
    likesData: {
    },
    success: false,
}

export const LikeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createLike.pending, (state) => {
            state.isLoading = true;
            state.success = false;
        })
            .addCase(createLike.fulfilled, (state, action) => {
                state.isLoading = false;
                state.like = action.payload
                state.success = true
            })
            .addCase(createLike.rejected, (state, action) => {
                state.success = false;
                state.isLoading = false;
                state.error = action.payload
            })
    }
})
export default LikeSlice.reducer