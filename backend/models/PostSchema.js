const mongoose = require('mongoose')
const UsersModel = require('../models/UserSchema')

const PostsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    title: { type: String, require: true },
    body: { type: String, require: true },
    images: { type: Array, require: true },

}, { timestamps: true })

module.exports = mongoose.model("posts", PostsSchema)