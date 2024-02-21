const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')
const PostsModel = require('./PostSchema')

const CommentsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PostsModel,
        required: true
    },
    body: {
        type: String, require: true
    },
}, { timestamps: true })

module.exports = mongoose.model("comments", CommentsSchema)