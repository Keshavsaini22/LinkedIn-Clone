import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { signinType } from "./SignIn.type";

export const signInUser = createAsyncThunk(signinType, async (data,{ rejectWithValue }) => {

  try{
    console.log("signInUser",data)
    const res = await axios.post(`http://localhost:8080/signup`, data)
    const output = res.data
    console.log("response of data", res)
    return output
   
  }
   catch(error){
    console.log('error: ', error.response.data);
    return rejectWithValue(error.response.data.message)
   }
})