const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')

const RoomSchema = new mongoose.Schema({
    participants: {
        type: Array,
        required: true,
        ref: UsersModel,
    }
}, { timestamps: true })

module.exports = mongoose.model("room", RoomSchema)

