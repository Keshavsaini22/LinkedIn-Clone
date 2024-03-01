const CustomError = require('../libs/error');
const UsersModel = require('../models/UserSchema')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.signupUser = async (payload) => {
    const { email, password } = payload.data;
    if (!email)
        throw new CustomError("User email not found", 401);
    if (!password)
        throw new CustomError("User password not found", 401);
    const existingUser = await UsersModel.findOne({ email })
    if (existingUser)
        throw new CustomError("Email already exist", 409)
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await UsersModel.create({ email, password: hashedPassword });
    return response;
}

exports.signinUser = async (payload) => {
    const { email, password } = payload.data;
    if (!email || !password)
        throw new CustomError("User credentials not found", 401);
    const user = await UsersModel.findOne({ email });
    if (!user)
        throw new CustomError("User doesn't exist", 404);
    if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ ID: user._id }, process.env.tokenKey);
        //console.log("token", token);
        return { success: true, user, token };
    }
    throw new CustomError("Incorrect Password", 404);
}