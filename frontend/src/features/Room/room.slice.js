import { createSlice, current } from "@reduxjs/toolkit"
import { createRoom, getRoom } from "./room.action";

const initialState = {
    isLoading: false,
    room: null,
    error: null,
    allroom: null,
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        toggleroom: (state, action) => {
            state.room = action.payload
            console.log('action.payload: ', action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createRoom.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(createRoom.fulfilled, (state, action) => {
            state.isLoading = false;
            state.room = action.payload;
            console.log('action.payload[0]: ', action.payload[0]);
            console.log('action.payload: eqwdeqwfwefwercwe', action.payload);
            // dispatch(toggleroom(res.payload[0]?.participants[0]))

            // state.room[action.payload._id] = action.payload.participants;
            // if(state.room.length === 0) state.room = [action.payload];
            // else {
            //     state.room = [...state.room, action.payload];
            // }
        })
        builder.addCase(createRoom.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        builder.addCase(getRoom.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getRoom.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allroom = action.payload;
        })
        builder.addCase(getRoom.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})
export const { toggleroom } = roomSlice.actions
export default roomSlice.reducer