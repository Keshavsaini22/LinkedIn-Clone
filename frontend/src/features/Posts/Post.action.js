import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createType, getType } from "./Post.type";
import GetToken from "../../helper/GetToken";
import { useSelector } from "react-redux";

export const createPost = createAsyncThunk(createType, async (data, { rejectWithValue, getState }) => {
    try {
        //console.log("createAsyncThunk", data)
        const token = getState().signin.token
        //console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.post(`http://localhost:8080/posts`, data, config)
        //console.log("response ka data", res.data);
        return res.data
    }
    catch (error) {
        //console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data.message)
    }
})

export const getPosts = createAsyncThunk(getType, async (data, { rejectWithValue }) => {
    try {
        if (data !== 1) {
            const res = await axios.get(`http://localhost:8080/posts?createdAt=${data}`)
            return res.data
        }
        else {
            const res = await axios.get(`http://localhost:8080/posts`)
            return res.data
        }
    }
    catch (error) {
        //console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data.message)
    }
})