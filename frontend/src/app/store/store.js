import { configureStore } from '@reduxjs/toolkit'
import signInSlice from '../../features/SignUp/SignIn/SignIn.slice'
import PostSlice from '../../features/Posts/Post.slice'
import CommentSlice from '../../features/Comments/Comment.slice'
import LikeSlice from '../../features/Likes/Likes.slice'


export const store = configureStore({
    reducer: {
        signin: signInSlice,
        post: PostSlice,
        comment: CommentSlice,
        like: LikeSlice,
    }
})