const mongoose = require('mongoose')
const UsersModel = require('../models/UserSchema')

const PostsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },
    title: { type: String },
    body: { type: String },
    images: { type: Array },
    createAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("posts", PostsSchema)