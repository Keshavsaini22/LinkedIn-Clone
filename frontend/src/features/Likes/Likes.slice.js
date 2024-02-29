import { createSlice } from "@reduxjs/toolkit";
import { createLike, createLikeComment, deleteLikes, deleteLikesComment, getLikes, getLikesComment } from "./Likes.action";

const initialState = {
    isLoading: false,
    error: null,
    like: null,
    likesData: {
    },
    commentlike: null,
    commentlikeData: {},
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
        builder.addCase(getLikes.pending, (state) => {
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
        builder.addCase(deleteLikes.pending, (state) => {
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



        builder.addCase(createLikeComment.pending, (state) => {
            state.isLoading = true;
            state.success = false;
        })
            .addCase(createLikeComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.commentlike = action.payload
                // state.likesData[action.payload.postId] = [action.payload, ...state.likesData[action.payload.postId]]
                state.success = true
            })
            .addCase(createLikeComment.rejected, (state, action) => {
                state.success = false;
                state.isLoading = false;
                state.error = action.payload
            })



        builder.addCase(getLikesComment.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(getLikesComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.commentlikeData[action.payload.id] = action.payload.info;
                // state.likesData[action.payload.id]={
                // }
                // console.log('state.likesData[action.payload.id]: ', state.likesData[action.payload.id]);
            })
            .addCase(getLikesComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })


        builder.addCase(deleteLikesComment.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(deleteLikesComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.commentlike = action.payload
                console.log('action.payload: ', action.payload);

            })
            .addCase(deleteLikesComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})
export default LikeSlice.reducer