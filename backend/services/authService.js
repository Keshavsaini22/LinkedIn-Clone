const CustomError = require('../libs/error');
const UsersModel = require('../models/UserSchema')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.signupUser = async (req) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
        const existingUser = await UsersModel.findOne({ email })
        if (existingUser) {
            throw new CustomError("Email already exist", 409)
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await UsersModel.create({ name, email, password: hashedPassword });
        return response;
    }
    throw new CustomError("User credentials not found", 401);
}

exports.signinUser = async (req) => {
    const { email, password } = req.body;
    if (email, password) {
        const user = await UsersModel.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ ID: user._id }, 'jwt-key');
            console.log("token", token);
            return { success: true, user, token };
        }
        throw new CustomError("User doesn't exist", 404);
    }
    throw new CustomError("User credentials not found", 401);
}