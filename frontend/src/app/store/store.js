import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import signInSlice from '../../features/SignUp/SignIn/SignIn.slice'
import PostSlice from '../../features/Posts/Post.slice'
import CommentSlice from '../../features/Comments/Comment.slice'
import LikeSlice from '../../features/Likes/Likes.slice'
import UserProfileSlice from '../../features/UserProfile/UserProfile.slice'
import NetworkSlice from '../../features/Network/Network.slice'
import roomSlice from '../../features/Room/room.slice'
import messageSlice from '../../features/Messages/Message.slice'

// const appReducer = combineReducers({
//   auth: authReducer,
//   message: messageReducer,
// });



export const store = configureStore({
    reducer: {
        signin: signInSlice,
        post: PostSlice,
        comment: CommentSlice,
        like: LikeSlice,
        user: UserProfileSlice,
        network: NetworkSlice,
        room: roomSlice,
        message: messageSlice,
    }
})