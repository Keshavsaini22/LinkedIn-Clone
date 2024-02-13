const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const UsersModel= require('../models/UserSchema')
const authenticateJWT=require('../middleware/authMiddleware')

router.post('/signup',async(req,res)=>{
    console.log("/signup")
    const { name, email, password } = req.body;
    const hashedPassword= await bcrypt.hash(password,10);

    try{
        const existingUser=await UsersModel.findOne({email})
        if(existingUser){
            return res.status(400).json("Email already exist");
        }
         const newUser=await UsersModel.create({name,email,password:hashedPassword});
         console.log("newuser",newUser);
         res.status(200).json(newUser)
    }
    catch(e){
        res.status(500).json(e)
    }
})

router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await UsersModel.findOne({email});
        if(user && bcrypt.compareSync(password,user.password)){
            const token=jwt.sign({ ID: user._id }, 'jwt-key');
            console.log("token",token);
            res.json({success:true,user,token});
        }
        else{
            res.status(404).json({ success: false, message: 'Invalid credentials' });
        }
    }
    catch(e){
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// router.post('/logout', authenticateJWT, (req, res) => {
//     console.log(res.locals.isAuthenticated)
//         if (res.locals.isAuthenticated) {
//             // res.clearCookie('token');
//             res.json({ success: true, message: 'Logout successful' });
//         } else {
//             res.json({ success: false, message: 'Not logged in' });
//         }
// });


module.exports = router;