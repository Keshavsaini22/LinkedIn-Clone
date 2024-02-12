const express = require('express');
const router = express.Router();


const UsersModel= require('../models/UserSchema')
const authenticateJWT=require('../middleware/authMiddleware')



module.exports = router;