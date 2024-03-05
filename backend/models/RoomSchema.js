const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')

const RoomSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel
    }]
}, { timestamps: true })

module.exports = mongoose.model("room", RoomSchema)

