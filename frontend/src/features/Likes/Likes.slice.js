import { createSlice } from "@reduxjs/toolkit";
import { createLike, deleteLikes, getLikes } from "./Likes.action";

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
                // state.likesData[action.payload.postId] = [action.payload, ...state.likesData[action.payload.postId]]
                state.success = true
            })
            .addCase(createLike.rejected, (state, action) => {
                state.success = false;
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(getLikes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getLikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.likesData[action.payload.id] = action.payload.info;
                // state.likesData[action.payload.id]={
                // }
                // console.log('state.likesData[action.payload.id]: ', state.likesData[action.payload.id]);
            })
            .addCase(getLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(deleteLikes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteLikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.like = action.payload
                console.log('action.payload: ', action.payload);

            })
            .addCase(deleteLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})
export default LikeSlice.reducer