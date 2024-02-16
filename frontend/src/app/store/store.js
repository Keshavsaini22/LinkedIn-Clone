import { configureStore } from '@reduxjs/toolkit'
import signInSlice from '../../features/SignUp/SignIn.slice'


export const store = configureStore({
    reducer: {
        signin: signInSlice
    }
})