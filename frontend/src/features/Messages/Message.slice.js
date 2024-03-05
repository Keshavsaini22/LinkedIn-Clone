import { createSlice, current } from "@reduxjs/toolkit"
import { createMessage, getMessage } from "./Message.action";

const initialState = {
    isLoading: false,
    message: null,
    error: null,
    allmessages: null,
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createMessage.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(createMessage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload;
            console.log('action.payload:', action.payload);

        })
        builder.addCase(createMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        builder.addCase(getMessage.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getMessage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allmessages = action.payload;
        })
        builder.addCase(getMessage.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})
export default messageSlice.reducer