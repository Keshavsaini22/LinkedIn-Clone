import { createSlice } from "@reduxjs/toolkit";
import { getFriends, getSuggestions, sendRequest, updateRelation } from "./Network.action";

const initialState = {
    isLoadingsuggestion: false,
    suggestionerror: null,
    suggestionsuccess: false,

    isLoadingfriends: false,
    friendserror: null,
    friendssuccess: false,

    isLoadingrequest: false,
    requesterror: null,
    requestsuccess: false,

    request: null,
    friends: null,
    suggestions: null,
    // pendingReq: null,
    // confirmreq: null,    
}

export const NetworkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        reducers: {
            resetNetwork: () => initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSuggestions.pending, (state) => {
            state.isLoadingsuggestion = true;
            state.success = false;
        })
            .addCase(getSuggestions.fulfilled, (state, action) => {
                state.isLoadingsuggestion = false;
                state.suggestions = action.payload;
                state.suggestionsuccess = true;
            })
            .addCase(getSuggestions.rejected, (state, action) => {
                state.suggestionsuccess = false;
                state.isLoadingsuggestion = false;
                state.suggestionerror = action.payload
            })

        builder.addCase(getFriends.pending, (state) => {
            state.isLoadingfriends = true;
            state.friendssuccess = false;
        })
            .addCase(getFriends.fulfilled, (state, action) => {
                state.isLoadingfriends = false;
                state.friendssuccess = true;
                state.friends = action.payload;
            })
            .addCase(getFriends.rejected, (state, action) => {
                state.friendssuccess = false;
                state.isLoadingfriends = false;
                state.friendserror = action.payload
            })

        builder.addCase(sendRequest.pending, (state) => {
            state.isLoadingrequest = true;
            state.requestsuccess = false;
        })
            .addCase(sendRequest.fulfilled, (state, action) => {
                state.isLoadingrequest = false;
                state.requestsuccess = true;
                state.request = action.payload;
            })
            .addCase(sendRequest.rejected, (state, action) => {
                state.requestsuccess = false;
                state.isLoadingrequest = false;
                state.requesterror = action.payload;
            })

        builder.addCase(updateRelation.pending, (state) => {
            state.isLoadingrequest = true;
            state.requestsuccess = false;
        })
            .addCase(updateRelation.fulfilled, (state, action) => {
                state.isLoadingrequest = false;
                state.requestsuccess = true;
                state.request = action.payload;
                //console.log('action.payload: ', action.payload);
                const data = state.friends.pending.filter((item) => item._id !== action.payload._id)
                state.friends.pending = data;
            })
            .addCase(updateRelation.rejected, (state, action) => {
                state.requestsuccess = false;
                state.isLoadingrequest = false;
                state.requesterror = action.payload;
            })
    }
})
export const { resetNetwork } = NetworkSlice.actions
export default NetworkSlice.reducer