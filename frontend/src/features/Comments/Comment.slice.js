import { createSlice } from "@reduxjs/toolkit";
import { createComment, getComments } from "./Comment.action";

const initialState = {
    isLoading: false,
    error: null,
    comment: null,
    commentsData: {
    },
    success: false,
}

export const CommentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createComment.pending, (state) => {
            console.log('createComment.pending: ',);
            state.isLoading = true;
            state.success = false;
        })
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comment = action.payload
            state.commentsData[action.payload.postId] = [action.payload,...state.commentsData[action.payload.postId]];
            console.log("action.payload", state.commentsData[action.payload.postId])
            state.success = true
            console.log("state of success", state.success)
        })
        builder.addCase(createComment.rejected, (state, action) => {
            state.success = false;
            state.isLoading = false;
            state.error = action.payload;
            console.log("action.payload", action.payload)

        })
            .addCase(getComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.commentsData[action.payload.id] = action.payload.info;
                console.log("state.commentsData", state.commentsData[action.payload.id])
            })
            .addCase(getComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export default CommentSlice.reducer