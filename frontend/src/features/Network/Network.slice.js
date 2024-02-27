import { createSlice } from "@reduxjs/toolkit";
import { getSuggestions } from "./Network.action";

const initialState = {
    isLoading: false,
    error: null,
    request: null,
    pendingReq: null,
    confirmreq: null,
    success: false,
}

export const NetworkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getSuggestions.pending, (state) => {
            console.log('createComment.pending: ',);
            state.isLoading = true;
            state.success = false;
        })
    }
})

export default NetworkSlice.reducer