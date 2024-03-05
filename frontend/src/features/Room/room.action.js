import { createAsyncThunk } from "@reduxjs/toolkit";
import { typeCreateRoom } from "./room.type";
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
            console.log("first",data)
            const res = await axios.post(`http://localhost:8080/room`, {recieverId:data}, config)
            console.log('res: of get suggestion', res.data);
            return res.data
        }
        catch (error) {
            console.log('error: ', error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
)