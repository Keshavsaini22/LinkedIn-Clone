import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createLikeType } from "./Likes.type";

export const createLike = createAsyncThunk(createLikeType, async (data, { rejectWithValue, getState }) => {
    try {
        console.log("data of like", data)
        const token = getState().signin.token
        console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.post(`http://localhost:8080/reaction/post/${data.postId}`, data.body, config)
        console.log("res of like", res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})