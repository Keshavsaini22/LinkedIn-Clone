import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createType, getType } from "./Post.type";

export const createPost = createAsyncThunk(createType, async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post(`http://localhost:8080/posts/userIDDDDDDD`, data)
        console.log("response ka data", res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data.message)
    }
})

export const getPosts = createAsyncThunk(getType, async ({ rejectWithValue }) => {
    try {
        const res = await axios.get(`http://localhost:8080/posts/userIDDDDDDD`)
        console.log("response ka data", res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data.message)
    }
})