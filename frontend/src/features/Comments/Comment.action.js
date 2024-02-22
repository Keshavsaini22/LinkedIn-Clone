import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createCommentType, getCommentType } from "./Comment.type";

export const createComment = createAsyncThunk(createCommentType, async (data, { rejectWithValue, getState }) => {
    try {
        const token = getState().signin.token
        console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.post(`http://localhost:8080/comments`, data, config)
        console.log("response data", res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})


export const getComments = createAsyncThunk(getCommentType, async (data, { rejectWithValue }) => {
    try {
        console.log("getpost", data)
        const res = await axios.get(`http://localhost:8080/comments?postId=${data}`)
        console.log("GET COMMENTS", res.data)
        const output = {};
        output.info = res.data
        output.id = data
        return output;
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})