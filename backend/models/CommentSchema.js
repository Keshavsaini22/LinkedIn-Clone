const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')
const PostsModel = require('./PostSchema')

const CommentsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PostsModel,
        require: true
    },
    body: {
        type: String, require: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("comments", CommentsSchema)