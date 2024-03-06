import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { typeCreateMessage, typeFetchMessage } from "./Message.type";

export const createMessage = createAsyncThunk(
    typeCreateMessage,
    async (data, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            console.log("first", data)
            const res = await axios.post(`http://localhost:8080/message`, data, config)
            return res.data
        }
        catch (error) {
            console.log('error: ', error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
)

export const getMessage = createAsyncThunk(
    typeFetchMessage,
    async (data, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            // console.log("first", data)
            const res = await axios.get(`http://localhost:8080/message?roomid=${data}`, config)
            // console.log('res: of get getMessage', res.data);
            return res.data
        }
        catch (error) {
            console.log('error: ', error.response.data);
            return rejectWithValue(error.response.data)
        }
    }
)