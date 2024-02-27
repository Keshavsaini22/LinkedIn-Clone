const mongoose = require('mongoose')
const UsersModel = require('../models/UserSchema')

const ConnectionSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirm", "reject", "remove", "withdraw"],
        require: true
    }

}, { timestamps: true })

module.exports = mongoose.model("connection", ConnectionSchema)