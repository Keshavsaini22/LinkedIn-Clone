import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPosts } from "./Post.action";

const initialState = {
    isLoading: false,
    error: null,
    postData: null,
    postsData: null
}

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createPost.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                // console.log("post ka data create time", action.payload)
                state.postData = action.payload;
                console.log('action.payload: ', action.payload);
                state.postsData=[action.payload,...state.postsData]
                
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.postsData = action.payload
                // console.log("post ka data get time", action.payload)
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export default PostSlice.reducer