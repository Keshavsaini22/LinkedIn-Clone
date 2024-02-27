import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { getFriendsType, getSuggestionType, sendRequestType, updaterelationType } from "./Network.type";

export const getSuggestions = createAsyncThunk(getSuggestionType, async ({ rejectWithValue, getState }) => {
    try {
        console.log("getSuggestions")
        const token = getState().signin.token
        console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.get(`http://localhost:8080/connection/suggestions`, config)
        console.log('res: of get suggestion', res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const getFriends = createAsyncThunk(getFriendsType, async (data, { rejectWithValue, getState }) => {
    try {
        console.log("data in getfriends", data)
        const token = getState().signin.token
        console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.get(`http://localhost:8080/connection?status=${data}`, config)
        console.log('res: of get friends', res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const sendRequest = createAsyncThunk(sendRequestType, async (data, { rejectWithValue, getState }) => {
    try {
        console.log("data in sendRequest", data)
        const token = getState().signin.token
        console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.post(`http://localhost:8080/connection`, data, config)
        console.log('res: of sendRequest', res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const updateRelation = createAsyncThunk(updaterelationType, async (data, { rejectWithValue, getState }) => {
    try {
        console.log("data in updateRelation", data)
        const token = getState().signin.token
        console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const res = await axios.put(`http://localhost:8080/connection?id=${data.id}`, data.status, config)
        console.log('res: of updateRelation', res.data);
        return res.data
    }
    catch (error) {
        console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data);
    }
})