const express = require('express');
const router = express.Router();


const UsersModel= require('../models/UserSchema')
const authenticateJWT=require('../middleware/authMiddleware')


router.put('/profile/:id',async(req,res)=>{
    const {userId}=req.params;
    console.log("userId",userId)
    const {name,address,phone,website,company} =req.body;
})


module.exports = router;