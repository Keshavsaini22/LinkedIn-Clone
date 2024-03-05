const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')
const RoomModel = require('./RoomSchema')
const MessageSchema = new mongoose.Schema({
    roomid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: RoomModel,
        required: true,
    },
    content: { type: String, require: true },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    // receiver: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: UsersModel,
    //     required: true
    // },

}, { timestamps: true })

module.exports = mongoose.model("messages", MessageSchema)

