import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { loginType, logoutType, signinType } from "./SignIn.type";

export const signInUser = createAsyncThunk(signinType, async (data, { rejectWithValue }) => {

  try {
    console.log("signInUser", data)
    const res = await axios.post(`http://localhost:8080/signup`, data)
    const output = res.data
    console.log("response of data", res)
    return output

  }
  catch (error) {
    console.log('error: ', error.response.data);
    return rejectWithValue(error.response.data.message)
  }
})

export const loginUser = createAsyncThunk(loginType, async (data, { rejectWithValue }) => {
  try {
    console.log("signInUser", data)
    const res = await axios.post(`http://localhost:8080/signin`, data)
    const output = res.data
    console.log("response of data", res.data.token)
    localStorage.setItem('logged', 'true');
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', res.data.user);
    localStorage.setItem('userid', res.data.user._id);

    return output
  }
  catch (error) {
    return rejectWithValue(error.response.data.message)
  }
})

export const logoutUser = createAsyncThunk(logoutType, async () => {
  try {
    console.log("logout action")
    localStorage.removeItem('logged');
    localStorage.removeItem('token');
  } catch (error) {
    console.log("error: ", error.response.data.message)
    return error.message
  }
})