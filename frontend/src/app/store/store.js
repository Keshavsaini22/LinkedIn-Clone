import { configureStore } from '@reduxjs/toolkit'
import signInSlice from '../../features/SignUp/SignIn/SignIn.slice'
import PostSlice from '../../features/Posts/Post.slice'


export const store = configureStore({
    reducer: {
        signin: signInSlice,
        post: PostSlice
    }
})