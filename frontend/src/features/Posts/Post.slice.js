import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPosts } from "./Post.action";

const initialState = {
    isLoading: false,
    error: null,
    postData: null,
    postsData: null,
    createdAt: null,
}

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetPost: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(createPost.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.postData = action.payload;
                //console.log('action.payload: ', action.payload);
                state.postsData = [action.payload, ...state.postsData]

            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(getPosts.pending, (state) => {
                //console.log('getPosts.pending: ',);
                state.isLoading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.postsData = action.payload
                state.postsData = [...(state.postsData || []), ...action.payload]

                // else {
                // }
                state.createdAt = action.payload[action.payload.length - 1]?.createdAt
                // //console.log('action.payload: ', action.payload);
                // //console.log('action: ', action.payload[action.payload.length-1]?.createdAt);
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})
export const { resetPost } = PostSlice.actions

export default PostSlice.reducer