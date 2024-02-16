const mongoose = require('mongoose')
const UsersModel = require('../models/UserSchema')

const PostsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },
    title: { type: String, require: true },
    body: { type: String, require: true },
    images: { type: Array, require: true },
    createAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("posts", PostsSchema)