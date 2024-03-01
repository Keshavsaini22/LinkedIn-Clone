import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { updateProfileType } from "./UserProfile.type";

export const updateUserProfile = createAsyncThunk(updateProfileType, async (data, { rejectWithValue, getState }) => {
    try {
        //console.log("createAsyncThunk user", data)
        const token = getState().signin.token
        //console.log('token: ', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const userId = localStorage.getItem('userid')
        //console.log("userid", userId)
        const res = await axios.put(`http://localhost:8080/profile/${userId}`, data, config)
        //console.log("response ka data", res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
        return res.data
    }
    catch (error) {
        //console.log('error: ', error.response.data);
        return rejectWithValue(error.response.data.message)
    }
})