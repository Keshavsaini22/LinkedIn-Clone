import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createLikeCommentType, createLikeType, deleteLikeCommentType, deleteLikeType, getLikeCommentType, getLikeType } from "./Likes.type";

export const createLike = createAsyncThunk(createLikeType, async (data, { rejectWithValue, getState }) => {
    try {
        console.log("data of createLike like", data)
        const token = getState().signin.token
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

export const getLikes = createAsyncThunk(getLikeType, async (data, { rejectWithValue }) => {
    try {
        // console.log("getlikes")
        const res = await axios.get(`http://localhost:8080/reaction/post?postId=${data}`)
        const output = {};
        output.info = res.data
        output.id = data
        // console.log('data: ', res.data);
        return output;
    } catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const deleteLikes = createAsyncThunk(deleteLikeType, async (data, { rejectWithValue, getState }) => {
    try {
        const token = getState().signin.token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        console.log(data, "deleteLikes")
        const res = await axios.delete(`http://localhost:8080/reaction/${data}`, config)
        console.log("res of like", res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const createLikeComment = createAsyncThunk(createLikeCommentType, async (data, { rejectWithValue, getState }) => {
    try {
        console.log("data of createLike like", data)
        const token = getState().signin.token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.post(`http://localhost:8080/reaction/comment/${data.id}`, data.body, config)
        console.log("res of like", res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const getLikesComment = createAsyncThunk(getLikeCommentType, async (data, { rejectWithValue }) => {
    try {
        // console.log("getlikes")
        const res = await axios.get(`http://localhost:8080/reaction/comment?cmtId=${data}`)
        const output = {};
        output.info = res.data
        output.id = data
        // console.log('data: ', output);
        return output;
    } catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const deleteLikesComment = createAsyncThunk(deleteLikeCommentType, async (data, { rejectWithValue, getState }) => {
    try {
        const token = getState().signin.token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        console.log(data, "deleteLikes")
        const res = await axios.delete(`http://localhost:8080/reaction/${data}`, config)
        console.log("res of like", res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})
