import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeCreateRoom, typeFetchRoom } from "./room.type";
import axios from "axios";

export const createRoom = createAsyncThunk(
    typeCreateRoom,
    async (data, { rejectWithValue, getState }) => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            // console.log("first", data)
            const res = await axios.post(`http://localhost:8080/room`, { recieverId: data }, config)
            // console.log('res: of get suggestion', res.data);
            return res.data
        }
        catch (error) {
            console.log('error: ', error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
)


export const getRoom = createAsyncThunk(
    typeFetchRoom,
    async ({ rejectWithValue, getState }) => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            const res = await axios.get(`http://localhost:8080/room`, config)
            return res.data
        }
        catch (error) {
            console.log('error: ', error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
)


