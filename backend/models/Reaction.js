const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')

const ReactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: [true]
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PostsModel,
        require: [true]
    },
    type: { type: String },
    createAt: {
        type: Date,
        default: Date.now,
    },

})

module.exports = mongoose.model("reactions", ReactionSchema)